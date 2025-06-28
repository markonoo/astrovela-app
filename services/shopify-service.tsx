import { QuizState } from "@/contexts/quiz-context"
import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from "@/utils/shopify-config"
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
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: Array<{
    id: string;
    title: string;
    price: string;
    compareAtPrice: string | null;
    availableForSale: boolean;
  }>;
  images: Array<{
    id: string;
    url: string;
    altText: string | null;
  }>;
}

interface CreateShopifyCheckoutProps {
  selectedOptions: {
    app: boolean;
    paperback: boolean;
    ebook: boolean;
  };
  quizState: QuizState;
}

// Helper function to get the base URL
function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin;
  }
  // Server-side
  return process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
}

// Use our working API endpoints instead of direct Storefront API calls
export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/shopify/products`);
    
    if (!response.ok) {
      throw new ShopifyError(
        `Products API returned ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new ShopifyError(
        data.error || "Failed to fetch products",
        ShopifyErrorCodes.PRODUCT_NOT_FOUND,
        404
      );
    }

    return data.products || [];
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

    if (!product.variants[0]?.id) {
      throw new ShopifyError(
        `No variant found for product type: ${productType}`,
        ShopifyErrorCodes.VARIANT_NOT_FOUND,
        404
      );
    }

    return product.variants[0].id;
  } catch (error: any) {
    throw handleShopifyError(error);
  }
}

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
          const lineItem: any = { variantId, quantity: 1 };
          
          // Add selling plan for app subscription to enable monthly recurring billing
          if (type === "app") {
            lineItem.sellingPlanId = "gid://shopify/SellingPlan/710674514307";
          }
          
          return lineItem;
        })
    );

    if (lineItems.length === 0) {
      throw new ShopifyError(
        "At least one product must be selected",
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    // Use our working checkout API endpoint
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/shopify/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems,
        email: quizState.email,
        customerData: {
          firstName: quizState.firstName || "",
          lastName: quizState.lastName || "",
          email: quizState.email,
        }
      }),
    });

    if (!response.ok) {
      throw new ShopifyError(
        `Checkout API returned ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const data = await response.json();

    if (!data.success) {
      throw new ShopifyError(
        data.error || "Failed to create checkout",
        ShopifyErrorCodes.CHECKOUT_CREATION_FAILED,
        400
      );
    }

    const checkoutUrl = data.checkout?.checkoutUrl;
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

