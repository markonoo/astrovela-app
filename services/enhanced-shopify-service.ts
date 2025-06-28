import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { ShopifyError, ShopifyErrorCodes } from '@/utils/shopify-error-handler';

// Enhanced types for comprehensive Shopify integration
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  productType: string;
  vendor: string;
  status: 'active' | 'archived' | 'draft';
  totalInventory: number;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: ShopifyVariant[];
  images: ShopifyImage[];
  metafields: ShopifyMetafield[];
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  compareAtPrice?: string;
  inventoryQuantity: number;
  sku: string;
  barcode: string;
  weight: number;
  requiresShipping: boolean;
}

export interface ShopifyImage {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface ShopifyMetafield {
  id: string;
  namespace: string;
  key: string;
  value: string;
  type: string;
}

export interface ShopifyOrder {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalPrice: string;
  subtotalPrice: string;
  totalTax: string;
  totalShippingPrice: string;
  currency: string;
  financialStatus: string;
  fulfillmentStatus: string;
  createdAt: string;
  lineItems: ShopifyLineItem[];
  shippingAddress?: ShopifyAddress;
  billingAddress?: ShopifyAddress;
  customer?: ShopifyCustomer;
}

export interface ShopifyLineItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  variantTitle: string;
  quantity: number;
  price: string;
  totalDiscount: string;
}

export interface ShopifyAddress {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  zip: string;
  country: string;
  phone?: string;
}

export interface ShopifyCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  acceptsMarketing: boolean;
  createdAt: string;
  ordersCount: number;
  totalSpent: string;
  addresses: ShopifyAddress[];
  metafields: ShopifyMetafield[];
}

// Admin API Service Class
export class ShopifyAdminService {
  private async makeAdminRequest(query: string, variables?: any) {
    const response = await fetch(SHOPIFY_CONFIG.ADMIN_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new ShopifyError(
        `Admin API request failed: ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new ShopifyError(
        `GraphQL Error: ${result.errors[0].message}`,
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    return result.data;
  }

  // Product Management
  async getProducts(first: number = 50): Promise<ShopifyProduct[]> {
    const query = `
      query getProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              handle
              description
              productType
              vendor
              status
              totalInventory
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price
                    compareAtPrice
                    inventoryQuantity
                    sku
                    barcode
                    weight
                    requiresShipping
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
              metafields(first: 10) {
                edges {
                  node {
                    id
                    namespace
                    key
                    value
                    type
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.makeAdminRequest(query, { first });
    return data.products.edges.map((edge: any) => ({
      ...edge.node,
      variants: edge.node.variants.edges.map((v: any) => v.node),
      images: edge.node.images.edges.map((i: any) => i.node),
      metafields: edge.node.metafields.edges.map((m: any) => m.node),
    }));
  }

  async createProduct(product: Partial<ShopifyProduct>): Promise<ShopifyProduct> {
    const mutation = `
      mutation productCreate($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            description
            status
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const input = {
      title: product.title,
      description: product.description,
      productType: product.productType,
      vendor: product.vendor,
      status: product.status || 'DRAFT',
    };

    const data = await this.makeAdminRequest(mutation, { input });
    
    if (data.productCreate.userErrors.length > 0) {
      throw new ShopifyError(
        data.productCreate.userErrors[0].message,
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    return data.productCreate.product;
  }

  // Order Management
  async getOrders(first: number = 50): Promise<ShopifyOrder[]> {
    const query = `
      query getOrders($first: Int!) {
        orders(first: $first) {
          edges {
            node {
              id
              name
              email
              phone
              totalPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              subtotalPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              totalTaxSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              totalShippingPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              financialStatus
              fulfillmentStatus
              createdAt
              lineItems(first: 50) {
                edges {
                  node {
                    id
                    title
                    variantTitle
                    quantity
                    originalUnitPriceSet {
                      shopMoney {
                        amount
                        currencyCode
                      }
                    }
                    totalDiscountSet {
                      shopMoney {
                        amount
                        currencyCode
                      }
                    }
                    product {
                      id
                    }
                    variant {
                      id
                    }
                  }
                }
              }
              shippingAddress {
                firstName
                lastName
                company
                address1
                address2
                city
                province
                zip
                country
                phone
              }
              billingAddress {
                firstName
                lastName
                company
                address1
                address2
                city
                province
                zip
                country
                phone
              }
              customer {
                id
                firstName
                lastName
                email
                phone
                acceptsMarketing
                createdAt
                numberOfOrders
                totalSpentV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.makeAdminRequest(query, { first });
    return data.orders.edges.map((edge: any) => ({
      id: edge.node.id,
      name: edge.node.name,
      email: edge.node.email,
      phone: edge.node.phone,
      totalPrice: edge.node.totalPriceSet.shopMoney.amount,
      subtotalPrice: edge.node.subtotalPriceSet.shopMoney.amount,
      totalTax: edge.node.totalTaxSet.shopMoney.amount,
      totalShippingPrice: edge.node.totalShippingPriceSet.shopMoney.amount,
      currency: edge.node.totalPriceSet.shopMoney.currencyCode,
      financialStatus: edge.node.financialStatus,
      fulfillmentStatus: edge.node.fulfillmentStatus,
      createdAt: edge.node.createdAt,
      lineItems: edge.node.lineItems.edges.map((item: any) => ({
        id: item.node.id,
        productId: item.node.product?.id,
        variantId: item.node.variant?.id,
        title: item.node.title,
        variantTitle: item.node.variantTitle,
        quantity: item.node.quantity,
        price: item.node.originalUnitPriceSet.shopMoney.amount,
        totalDiscount: item.node.totalDiscountSet.shopMoney.amount,
      })),
      shippingAddress: edge.node.shippingAddress,
      billingAddress: edge.node.billingAddress,
      customer: edge.node.customer ? {
        id: edge.node.customer.id,
        firstName: edge.node.customer.firstName,
        lastName: edge.node.customer.lastName,
        email: edge.node.customer.email,
        phone: edge.node.customer.phone,
        acceptsMarketing: edge.node.customer.acceptsMarketing,
        createdAt: edge.node.customer.createdAt,
        ordersCount: edge.node.customer.numberOfOrders,
        totalSpent: edge.node.customer.totalSpentV2.amount,
        addresses: [],
        metafields: [],
      } : undefined,
    }));
  }

  // Customer Management
  async getCustomers(first: number = 50): Promise<ShopifyCustomer[]> {
    const query = `
      query getCustomers($first: Int!) {
        customers(first: $first) {
          edges {
            node {
              id
              firstName
              lastName
              email
              phone
              acceptsMarketing
              createdAt
              numberOfOrders
              totalSpentV2 {
                amount
                currencyCode
              }
              addresses {
                id
                firstName
                lastName
                company
                address1
                address2
                city
                province
                zip
                country
                phone
              }
              metafields(first: 10) {
                edges {
                  node {
                    id
                    namespace
                    key
                    value
                    type
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.makeAdminRequest(query, { first });
    return data.customers.edges.map((edge: any) => ({
      id: edge.node.id,
      firstName: edge.node.firstName,
      lastName: edge.node.lastName,
      email: edge.node.email,
      phone: edge.node.phone,
      acceptsMarketing: edge.node.acceptsMarketing,
      createdAt: edge.node.createdAt,
      ordersCount: edge.node.numberOfOrders,
      totalSpent: edge.node.totalSpentV2.amount,
      addresses: edge.node.addresses,
      metafields: edge.node.metafields.edges.map((m: any) => m.node),
    }));
  }

  async createCustomer(customer: Partial<ShopifyCustomer>): Promise<ShopifyCustomer> {
    const mutation = `
      mutation customerCreate($input: CustomerInput!) {
        customerCreate(input: $input) {
          customer {
            id
            firstName
            lastName
            email
            phone
            acceptsMarketing
            createdAt
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const input = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      acceptsMarketing: customer.acceptsMarketing || false,
    };

    const data = await this.makeAdminRequest(mutation, { input });
    
    if (data.customerCreate.userErrors.length > 0) {
      throw new ShopifyError(
        data.customerCreate.userErrors[0].message,
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    return {
      ...data.customerCreate.customer,
      ordersCount: 0,
      totalSpent: '0.00',
      addresses: [],
      metafields: [],
    };
  }

  // Analytics and Reporting
  async getAnalytics(period: 'today' | 'week' | 'month' = 'today') {
    const query = `
      query getAnalytics {
        orders(first: 250) {
          edges {
            node {
              id
              createdAt
              totalPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              financialStatus
              fulfillmentStatus
            }
          }
        }
        products {
          totalCount
        }
        customers {
          totalCount
        }
      }
    `;

    const data = await this.makeAdminRequest(query);
    
    // Process analytics data
    const orders = data.orders.edges.map((edge: any) => edge.node);
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'today':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
    }

    const periodOrders = orders.filter((order: any) => 
      new Date(order.createdAt) >= startDate
    );

    const totalRevenue = periodOrders.reduce((sum: number, order: any) => 
      sum + parseFloat(order.totalPriceSet.shopMoney.amount), 0
    );

    return {
      totalOrders: periodOrders.length,
      totalRevenue: totalRevenue.toFixed(2),
      averageOrderValue: periodOrders.length > 0 ? (totalRevenue / periodOrders.length).toFixed(2) : '0.00',
      currency: orders[0]?.totalPriceSet.shopMoney.currencyCode || 'USD',
      totalProducts: data.products.totalCount,
      totalCustomers: data.customers.totalCount,
      paidOrders: periodOrders.filter((order: any) => order.financialStatus === 'PAID').length,
      fulfilledOrders: periodOrders.filter((order: any) => order.fulfillmentStatus === 'FULFILLED').length,
    };
  }
}

// Storefront API Service Class (for customer-facing operations)
export class ShopifyStorefrontService {
  private async makeStorefrontRequest(query: string, variables?: any) {
    const response = await fetch(SHOPIFY_CONFIG.STOREFRONT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new ShopifyError(
        `Storefront API request failed: ${response.status}`,
        ShopifyErrorCodes.UNKNOWN_ERROR,
        response.status
      );
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new ShopifyError(
        `GraphQL Error: ${result.errors[0].message}`,
        ShopifyErrorCodes.VALIDATION_ERROR,
        400
      );
    }

    return result.data;
  }

  async getPublishedProducts(first: number = 50) {
    const query = `
      query getProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              handle
              description
              availableForSale
              totalInventory
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    availableForSale
                    quantityAvailable
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.makeStorefrontRequest(query, { first });
    return data.products.edges.map((edge: any) => ({
      ...edge.node,
      variants: edge.node.variants.edges.map((v: any) => v.node),
      images: edge.node.images.edges.map((i: any) => i.node),
    }));
  }

  async createCheckout(lineItems: Array<{variantId: string, quantity: number}>) {
    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            totalPrice {
              amount
              currencyCode
            }
            lineItems(first: 50) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          checkoutUserErrors {
            field
            message
          }
        }
      }
    `;

    const input = { lineItems };
    const data = await this.makeStorefrontRequest(mutation, { input });
    
    if (data.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new ShopifyError(
        data.checkoutCreate.checkoutUserErrors[0].message,
        ShopifyErrorCodes.CHECKOUT_CREATION_FAILED,
        400
      );
    }

    return data.checkoutCreate.checkout;
  }
}

// Export singleton instances
export const shopifyAdmin = new ShopifyAdminService();
export const shopifyStorefront = new ShopifyStorefrontService(); 