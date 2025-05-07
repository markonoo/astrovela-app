import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from "@/utils/shopify-config"
import type { QuizState } from "@/contexts/quiz-context"
import { ShopifyError, handleShopifyError, ShopifyErrorCodes } from "@/utils/shopify-error-handler"

// Type definitions for Shopify responses
interface ShopifyCheckoutResponse {
  data?: {
    checkoutCreate?: {
      checkout?: {
        id: string;
        webUrl: string;
      };
      checkoutUserErrors: Array<{
        message: string;
        field: string[];
      }>;
    };
  };
}

interface ShopifyProductsResponse {
  data?: {
    products?: {
      edges: Array<{
        node: ShopifyProduct;
      }>;
    };
  };
}

interface LineItem {
  variantId: string;
  quantity: number;
}

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        price: {
          amount: string;
        };
      };
    }>;
  };
}

interface CreateShopifyCheckoutProps {
  selectedOptions: {
    app: boolean;
    paperback: boolean;
    ebook: boolean;
  };
  quizState: QuizState;
}

const getProductsQuery = `
  query getProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  try {
    if (!SHOPIFY_STOREFRONT_API_ENDPOINT || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      throw new ShopifyError(
        "Shopify configuration is missing",
        ShopifyErrorCodes.INVALID_CREDENTIALS,
        500
      );
    }

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: getProductsQuery,
      }),
    });

    if (!response.ok) {
      throw new ShopifyError(
        `Shopify API returned ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const { data }: ShopifyProductsResponse = await response.json();
    
    if (!data?.products?.edges) {
      throw new ShopifyError(
        "No products found in the store",
        ShopifyErrorCodes.PRODUCT_NOT_FOUND,
        404
      );
    }

    return data.products.edges.map(edge => edge.node);
  } catch (error: any) {
    throw handleShopifyError(error);
  }
}

export async function getProductVariantId(productType: "app" | "paperback" | "ebook"): Promise<string> {
  try {
    const products = await getShopifyProducts();
    const productMap: Record<string, string> = {
      app: "app-subscription",
      paperback: "paperback-book",
      ebook: "ebook",
    };

    const product = products.find(p => p.handle === productMap[productType]);
    if (!product) {
      throw new ShopifyError(
        `Product type "${productType}" not found in store`,
        ShopifyErrorCodes.PRODUCT_NOT_FOUND,
        404
      );
    }

    if (!product.variants.edges[0]?.node.id) {
      throw new ShopifyError(
        `No variant found for product type: ${productType}`,
        ShopifyErrorCodes.VARIANT_NOT_FOUND,
        404
      );
    }

    return product.variants.edges[0].node.id;
  } catch (error: any) {
    throw handleShopifyError(error);
  }
}

const checkoutCreateMutation = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        message
        field
      }
    }
  }
`;

export async function createShopifyCheckout({
  selectedOptions,
  quizState,
}: CreateShopifyCheckoutProps): Promise<string> {
  try {
    // Validate required data
    if (!quizState.email) {
      throw new ShopifyError(
        "Email is required to create a checkout",
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    // Get line items for all selected products
    const lineItems = await Promise.all(
      Object.entries(selectedOptions)
        .filter(([_, isSelected]) => isSelected)
        .map(async ([type]) => {
          const variantId = await getProductVariantId(type as "app" | "paperback" | "ebook");
          return { variantId, quantity: 1 };
        })
    );

    if (lineItems.length === 0) {
      throw new ShopifyError(
        "At least one product must be selected",
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    const input = {
      lineItems,
      email: quizState.email,
      customAttributes: [
        { key: "firstName", value: quizState.firstName || "" },
        { key: "lastName", value: quizState.lastName || "" },
        {
          key: "birthDate",
          value: `${quizState.birthDate.month}/${quizState.birthDate.day}/${quizState.birthDate.year}`,
        },
        { key: "birthPlace", value: quizState.birthPlace || "" },
        { key: "astrologyLevel", value: quizState.astrologyLevel || "" },
        { key: "gender", value: quizState.gender || "" },
      ],
    };

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: checkoutCreateMutation,
        variables: { input },
      }),
    });

    if (!response.ok) {
      throw new ShopifyError(
        `Shopify API returned ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const { data }: ShopifyCheckoutResponse = await response.json();

    if (data?.checkoutCreate?.checkoutUserErrors?.length) {
      const errors = data.checkoutCreate.checkoutUserErrors.map(error => error.message).join(", ");
      throw new ShopifyError(
        `Could not create checkout: ${errors}`,
        ShopifyErrorCodes.CHECKOUT_CREATION_FAILED,
        400
      );
    }

    const checkoutUrl = data?.checkoutCreate?.checkout?.webUrl;
    if (!checkoutUrl) {
      throw new ShopifyError(
        "Could not retrieve checkout URL",
        ShopifyErrorCodes.CHECKOUT_CREATION_FAILED,
        500
      );
    }

    return checkoutUrl;
  } catch (error: any) {
    throw handleShopifyError(error);
  }
}

