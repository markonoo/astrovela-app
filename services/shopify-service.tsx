import { QuizState } from "@/contexts/quiz-context"
import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from "@/utils/shopify-config"
import { ShopifyError, handleShopifyError, ShopifyErrorCodes } from "@/utils/shopify-error-handler"
import { env } from "@/utils/environment"

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

export async function getProductVariantId(
  productType: "app" | "paperback" | "ebook", 
  colorVariant?: string
): Promise<string> {
  try {
    const products = await getShopifyProducts();
    // Support both legacy and current handles discovered in store
    const productHandleMap: Record<"app" | "paperback" | "ebook", string[]> = {
      app: ["app-subscription", "app"],
      paperback: ["astrology-paperback", "paperback-book", "paperback"],
      ebook: ["astrology-ebook", "ebook"],
    };

    const handles = productHandleMap[productType];
    const product = products.find((p) =>
      handles.includes(p.handle?.toLowerCase?.() || p.handle)
    );
    
    if (!product) {
      throw new ShopifyError(
        `Product type "${productType}" not found in store`,
        ShopifyErrorCodes.PRODUCT_NOT_FOUND,
        404
      );
    }

    // For paperback AND ebook, if colorVariant is provided, try to find matching variant
    if ((productType === "paperback" || productType === "ebook") && colorVariant && product.variants.length > 1) {
      // Normalize color name for matching (e.g., "navy" or "Navy")
      const normalizedColor = colorVariant.toLowerCase();
      
      // Try to find variant by title matching the color
      const matchingVariant = product.variants.find((v) => 
        v.title?.toLowerCase().includes(normalizedColor)
      );
      
      if (matchingVariant?.id) {
        return matchingVariant.id;
      }
      
      // If no color match found, fall through to default (first variant)
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

    // NEW APPROACH: Send ALL selected products to checkout
    // Shopify will show all items, with correct pricing based on bundles
    const allProducts: Array<{type: string, variantId: string, sellingPlanId?: string, price: string}> = [];
    
    // Bundle pricing logic:
    // - Paperback selected: paperback €49.99, ebook FREE, app FREE
    // - App + Ebook (no paperback): ebook €29.99, app FREE  
    // - Only App: app €14.99
    // - Only Ebook: ebook €29.99
    
    if (selectedOptions.paperback) {
      // Paperback bundle: paperback at full price, others are free
      const paperbackVariantId = await getProductVariantId("paperback", quizState.coverColorScheme);
      allProducts.push({ 
        type: "paperback", 
        variantId: paperbackVariantId,
        price: "49.99"
      });
      
      // Add ebook if selected (free with paperback)
      if (selectedOptions.ebook) {
        const ebookVariantId = await getProductVariantId("ebook", quizState.coverColorScheme);
        allProducts.push({ 
          type: "ebook", 
          variantId: ebookVariantId,
          price: "0.00"
        });
      }
      
      // Add app if selected (free with paperback)
      if (selectedOptions.app) {
        const appVariantId = await getProductVariantId("app");
        allProducts.push({ 
          type: "app", 
          variantId: appVariantId,
          sellingPlanId: env.SHOPIFY_APP_SELLING_PLAN_ID || "gid://shopify/SellingPlan/710674514307",
          price: "0.00"
        });
      }
    } else if (selectedOptions.ebook && selectedOptions.app) {
      // App + Ebook bundle: charge ebook, app is free
      const ebookVariantId = await getProductVariantId("ebook", quizState.coverColorScheme);
      allProducts.push({ 
        type: "ebook", 
        variantId: ebookVariantId,
        price: "29.99"
      });
      
      const appVariantId = await getProductVariantId("app");
      allProducts.push({ 
        type: "app", 
        variantId: appVariantId,
        sellingPlanId: env.SHOPIFY_APP_SELLING_PLAN_ID || "gid://shopify/SellingPlan/710674514307",
        price: "0.00"
      });
    } else if (selectedOptions.ebook) {
      // Only ebook selected
      const ebookVariantId = await getProductVariantId("ebook", quizState.coverColorScheme);
      allProducts.push({ 
        type: "ebook", 
        variantId: ebookVariantId,
        price: "29.99"
      });
    } else if (selectedOptions.app) {
      // Only app selected
      const appVariantId = await getProductVariantId("app");
      allProducts.push({ 
        type: "app", 
        variantId: appVariantId,
        sellingPlanId: env.SHOPIFY_APP_SELLING_PLAN_ID || "gid://shopify/SellingPlan/710674514307",
        price: "14.99"
      });
    }

    if (allProducts.length === 0) {
      throw new ShopifyError(
        "At least one product must be selected",
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    // Convert to line items format - send ALL selected products
    const lineItems = allProducts.map(product => {
      const lineItem: any = { 
        variantId: product.variantId, 
        quantity: 1
      };
      if (product.sellingPlanId) {
        lineItem.sellingPlanId = product.sellingPlanId;
      }
      return lineItem;
    });

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
        bundlePricing: {
          // Send bundle information to checkout API
          selectedProducts: allProducts.map((p: any) => ({
            type: p.type,
            price: p.price,
            shouldCharge: parseFloat(p.price) > 0
          }))
        },
        customerData: {
          firstName: quizState.firstName || "",
          lastName: quizState.lastName || "",
          email: quizState.email,
        },
        // Add personalization data for order notes/properties
        personalizationData: {
          coverColor: quizState.coverColorScheme,
          birthDate: quizState.birthDate?.year && quizState.birthDate?.month && quizState.birthDate?.day
            ? `${quizState.birthDate.year}-${quizState.birthDate.month}-${quizState.birthDate.day}`
            : "",
          birthTime: quizState.birthTime || "",
          birthPlace: quizState.birthPlace || "",
          sunSign: quizState.sunSign || "",
          moonSign: quizState.moonSign || "",
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

