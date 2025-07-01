import { SHOPIFY_CONFIG } from './shopify-config';

interface BundleDiscount {
  title: string;
  type: 'BUY_X_GET_Y' | 'SPEND_AMOUNT_GET_Y';
  customerBuys: {
    type: 'COLLECTION' | 'PRODUCT';
    productIds?: string[];
    collectionId?: string;
    minimumQuantity?: number;
    minimumAmount?: number;
  };
  customerGets: {
    productIds: string[];
    discountType: 'PERCENTAGE' | 'FIXED_AMOUNT';
    value: number;
    maximumQuantityPerOrder?: number;
  };
  active: boolean;
}

export class ShopifyBundleDiscountManager {
  private adminEndpoint: string;
  private headers: HeadersInit;

  constructor() {
    this.adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    this.headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
    };
  }

  /**
   * Create bundle discounts for AstroVela pricing
   * These ensure free items show up as discounted in checkout
   */
  async setupBundleDiscounts() {
    try {
      // Get all current automatic discounts to avoid duplicates
      const existingDiscounts = await this.getAutomaticDiscounts();
      
      // Define our bundle discounts
      const bundleDiscounts: BundleDiscount[] = [
        {
          title: 'AstroVela Bundle - Free App with Paperback',
          type: 'BUY_X_GET_Y',
          customerBuys: {
            type: 'PRODUCT',
            productIds: ['gid://shopify/Product/8752522387715'], // Paperback ID
            minimumQuantity: 1
          },
          customerGets: {
            productIds: ['gid://shopify/Product/8752522124419'], // App ID
            discountType: 'PERCENTAGE',
            value: 100, // 100% off = free
            maximumQuantityPerOrder: 1
          },
          active: true
        },
        {
          title: 'AstroVela Bundle - Free Ebook with Paperback',
          type: 'BUY_X_GET_Y',
          customerBuys: {
            type: 'PRODUCT',
            productIds: ['gid://shopify/Product/8752522387715'], // Paperback ID
            minimumQuantity: 1
          },
          customerGets: {
            productIds: ['gid://shopify/Product/8752522223875'], // Ebook ID
            discountType: 'PERCENTAGE',
            value: 100, // 100% off = free
            maximumQuantityPerOrder: 1
          },
          active: true
        },
        {
          title: 'AstroVela Bundle - Free App with Ebook (No Paperback)',
          type: 'BUY_X_GET_Y',
          customerBuys: {
            type: 'PRODUCT',
            productIds: ['gid://shopify/Product/8752522223875'], // Ebook ID
            minimumQuantity: 1
          },
          customerGets: {
            productIds: ['gid://shopify/Product/8752522124419'], // App ID
            discountType: 'PERCENTAGE',
            value: 100, // 100% off = free
            maximumQuantityPerOrder: 1
          },
          active: true
        }
      ];

      // Create discounts that don't exist
      for (const discount of bundleDiscounts) {
        const exists = existingDiscounts.some((existing: any) => 
          existing.title === discount.title
        );
        
        if (!exists) {
          await this.createAutomaticDiscount(discount);
          console.log(`✅ Created bundle discount: ${discount.title}`);
        } else {
          console.log(`⏭️ Bundle discount already exists: ${discount.title}`);
        }
      }

      return { success: true, message: 'Bundle discounts setup completed' };
    } catch (error) {
      console.error('❌ Error setting up bundle discounts:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  private async getAutomaticDiscounts() {
    const query = `
      query getAutomaticDiscounts {
        automaticDiscountNodes(first: 50) {
          edges {
            node {
              id
              automaticDiscount {
                ... on DiscountAutomaticBxgy {
                  title
                  status
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(this.adminEndpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    return data.data.automaticDiscountNodes.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.automaticDiscount.title,
      status: edge.node.automaticDiscount.status
    }));
  }

  private async createAutomaticDiscount(discount: BundleDiscount) {
    const mutation = `
      mutation automaticDiscountCreate($automaticDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyCreate(automaticDiscount: $automaticDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                status
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const customerBuysValue = discount.customerBuys.type === 'PRODUCT' 
      ? { 
          products: {
            ids: discount.customerBuys.productIds
          },
          quantity: discount.customerBuys.minimumQuantity || 1
        }
      : {
          collections: {
            ids: [discount.customerBuys.collectionId!]
          },
          quantity: discount.customerBuys.minimumQuantity || 1
        };

    const automaticDiscountInput = {
      title: discount.title,
      startsAt: new Date().toISOString(),
      customerBuys: customerBuysValue,
      customerGets: {
        items: {
          products: {
            ids: discount.customerGets.productIds
          }
        },
        value: discount.customerGets.discountType === 'PERCENTAGE' 
          ? { percentage: discount.customerGets.value / 100 }
          : { fixedAmount: { amount: discount.customerGets.value } },
        maximumQuantityPerOrder: discount.customerGets.maximumQuantityPerOrder
      }
    };

    const response = await fetch(this.adminEndpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        query: mutation,
        variables: { automaticDiscount: automaticDiscountInput }
      })
    });

    const data = await response.json();
    
    if (data.errors || data.data?.discountAutomaticBxgyCreate?.userErrors?.length > 0) {
      throw new Error(
        `Failed to create discount: ${JSON.stringify(data.errors || data.data.discountAutomaticBxgyCreate.userErrors)}`
      );
    }

    return data.data.discountAutomaticBxgyCreate.automaticDiscountNode;
  }
}

/**
 * Ensure bundle discounts are set up for AstroVela pricing
 */
export async function ensureBundleDiscounts() {
  const manager = new ShopifyBundleDiscountManager();
  return await manager.setupBundleDiscounts();
} 