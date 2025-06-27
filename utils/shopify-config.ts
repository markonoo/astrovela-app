// Enhanced Shopify configuration for new store
export const SHOPIFY_CONFIG = {
  // Store domain (extracted from SHOPIFY_SHOP_URL or use direct domain)
  SHOP_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || 
               (process.env.SHOPIFY_SHOP_URL ? new URL(process.env.SHOPIFY_SHOP_URL).hostname : "") ||
               "3zpk1a-pb.myshopify.com",
  
  // Admin API credentials (for backend operations)
  ADMIN_API_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || process.env.SHOPIFY_ACCESS_TOKEN || "",
  ADMIN_API_VERSION: "2024-01",
  
  // Storefront API credentials (for customer-facing operations)
  STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
                           process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
                           "d9b7e592bcc477e33755d5ac0c6f0c10",
  STOREFRONT_API_VERSION: "2024-01",
  
  // Webhook configuration
  WEBHOOK_SECRET: process.env.SHOPIFY_WEBHOOK_SECRET || "",
  
  // API endpoints
  get ADMIN_API_ENDPOINT() {
    return `https://${this.SHOP_DOMAIN}/admin/api/${this.ADMIN_API_VERSION}/graphql.json`;
  },
  
  get STOREFRONT_API_ENDPOINT() {
    return `https://${this.SHOP_DOMAIN}/api/${this.STOREFRONT_API_VERSION}/graphql.json`;
  },
  
  get REST_ADMIN_API_ENDPOINT() {
    return `https://${this.SHOP_DOMAIN}/admin/api/${this.ADMIN_API_VERSION}`;
  }
} as const;

// Legacy exports for backward compatibility
export const SHOPIFY_STOREFRONT_API_ENDPOINT = 
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT || 
  SHOPIFY_CONFIG.STOREFRONT_API_ENDPOINT ||
  `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/api/2024-01/graphql.json`;

export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  SHOPIFY_CONFIG.STOREFRONT_ACCESS_TOKEN ||
  "d9b7e592bcc477e33755d5ac0c6f0c10";

// Validate configuration
export function validateShopifyConfig() {
  const errors: string[] = [];
  
  if (!SHOPIFY_CONFIG.SHOP_DOMAIN.includes('.myshopify.com')) {
    errors.push('Invalid shop domain format');
  }
  
  if (!SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN && process.env.NODE_ENV === 'production') {
    errors.push('Admin API access token is required');
  }
  
  if (!SHOPIFY_CONFIG.STOREFRONT_ACCESS_TOKEN && process.env.NODE_ENV === 'production') {
    errors.push('Storefront access token is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}