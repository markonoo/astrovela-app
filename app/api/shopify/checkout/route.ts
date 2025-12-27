import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';
import { logger } from '@/utils/logger';

interface CheckoutLineItem {
  variantId: string;
  quantity: number;
  sellingPlanId?: string;
}

interface CheckoutRequest {
  lineItems: CheckoutLineItem[];
  email?: string;
  productHandle?: string;
  bundlePricing?: {
    selectedProducts: Array<{
      type: string;
      shouldCharge: boolean;
    }>;
  };
  customerData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  personalizationData?: {
    coverColor?: string;
    birthDate?: string;
    birthTime?: string;
    birthPlace?: string;
    sunSign?: string;
    moonSign?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    
    if (!body.lineItems || body.lineItems.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'No line items provided' 
      }, { status: 400 });
    }

    // Since Storefront API is having access issues, create direct checkout URLs
    // Get product information from Admin API first
    const variantIds = body.lineItems.map(item => item.variantId);
    
    const variantQuery = `
      query getVariants($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on ProductVariant {
            id
            title
            price
            product {
              id
              title
              handle
              onlineStoreUrl
              sellingPlanGroups(first: 5) {
                edges {
                  node {
                    id
                    name
                    merchantCode
                    sellingPlans(first: 5) {
                      edges {
                        node {
                          id
                          name
                          options
                          category
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    
    const variantResponse = await fetch(adminEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: variantQuery,
        variables: { ids: variantIds }
      })
    });

    if (!variantResponse.ok) {
      throw new Error(`HTTP ${variantResponse.status}: ${variantResponse.statusText}`);
    }

    const variantData = await variantResponse.json();

    if (variantData.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(variantData.errors)}`);
    }

    const variants = variantData.data.nodes;
    
    if (!variants || variants.length === 0) {
      throw new Error('No valid variants found');
    }

    // Process ALL line items and apply bundle pricing logic
    const processedProducts: any[] = [];
    let totalPrice = 0;

    for (let i = 0; i < body.lineItems.length; i++) {
      const lineItem = body.lineItems[i];
      const variant = variants[i];
      
      if (!variant) {
        logger.warn(`No variant found for line item ${i}`, { lineItem, index: i });
        continue;
      }

      // Determine if this product should be charged based on bundle pricing
      let shouldCharge = true;
      if (body.bundlePricing && body.bundlePricing.selectedProducts) {
        // Map variant to product type
        let productType = 'unknown';
        if (variant.product.handle.includes('app')) productType = 'app';
        else if (variant.product.handle.includes('ebook')) productType = 'ebook';
        else if (variant.product.handle.includes('paperback')) productType = 'paperback';
        
        const pricingInfo = body.bundlePricing.selectedProducts.find(p => p.type === productType);
        shouldCharge = pricingInfo ? pricingInfo.shouldCharge : true;
      }

      // Calculate price for this item (0 if it's a free bundle item)
      const originalPrice = parseFloat(variant.price);
      const itemPrice = shouldCharge ? originalPrice * lineItem.quantity : 0;
      totalPrice += itemPrice;
    
      // Store product info for response
      processedProducts.push({
        id: variant.product.id,
        title: variant.product.title,
        handle: variant.product.handle,
        variant: {
          id: variant.id,
          title: variant.title,
          price: variant.price,
          effectivePrice: shouldCharge ? variant.price : "0.00" // Show effective price
        },
        quantity: lineItem.quantity,
        sellingPlan: lineItem.sellingPlanId ? {
          id: lineItem.sellingPlanId,
          isSubscription: true
        } : null,
        itemTotal: itemPrice.toFixed(2),
        bundleStatus: shouldCharge ? 'paid' : 'free'
      });
    }

    if (processedProducts.length === 0) {
      throw new Error('No valid products could be processed');
    }

    // For bundle pricing with free items, we'll send ALL products to cart
    // and rely on automatic discounts to make bundle items free
    // This is more reliable than draft orders for customer experience
    
    // Build cart attributes for personalization data
    const cartAttributes: Record<string, string> = {};
    
    if (body.personalizationData) {
      if (body.personalizationData.coverColor) {
        cartAttributes['Cover Color'] = body.personalizationData.coverColor;
      }
      if (body.personalizationData.birthDate) {
        cartAttributes['Birth Date'] = body.personalizationData.birthDate;
      }
      if (body.personalizationData.birthTime) {
        cartAttributes['Birth Time'] = body.personalizationData.birthTime;
      }
      if (body.personalizationData.birthPlace) {
        cartAttributes['Birth Place'] = body.personalizationData.birthPlace;
      }
      if (body.personalizationData.sunSign) {
        cartAttributes['Sun Sign'] = body.personalizationData.sunSign;
      }
      if (body.personalizationData.moonSign) {
        cartAttributes['Moon Sign'] = body.personalizationData.moonSign;
      }
    }
    
    // Create multi-product checkout URL using proper Shopify cart format
    let checkoutUrl: string;
    
    if (body.lineItems.length === 1) {
      // Single product - use simple format
      const lineItem = body.lineItems[0];
      const variant = variants[0];
      const variantIdNumber = variant.id.split('/').pop();
      
      let baseUrl: string;
      if (lineItem.sellingPlanId) {
        const sellingPlanIdNumber = lineItem.sellingPlanId.split('/').pop();
        baseUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${lineItem.quantity}?selling_plan=${sellingPlanIdNumber}`;
      } else {
        baseUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${lineItem.quantity}`;
      }
      
      // Add cart attributes if present
      if (Object.keys(cartAttributes).length > 0) {
        const attributeParams = Object.entries(cartAttributes)
          .map(([key, value]) => `attributes[${encodeURIComponent(key)}]=${encodeURIComponent(value)}`)
          .join('&');
        checkoutUrl = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${attributeParams}`;
      } else {
        checkoutUrl = baseUrl;
      }
    }     else {
      // Multiple products - send ALL items to cart
      const cartItemsForUrl: string[] = [];
      let hasSellingPlan = false;
      let sellingPlanId = '';
      
      for (let i = 0; i < body.lineItems.length; i++) {
        const lineItem = body.lineItems[i];
        const variant = variants[i];
        
        if (!variant) continue;
        
        const variantIdNumber = variant.id.split('/').pop();
        cartItemsForUrl.push(`${variantIdNumber}:${lineItem.quantity}`);
        
        // For multiple products, use the first selling plan found
        if (lineItem.sellingPlanId && !hasSellingPlan) {
          hasSellingPlan = true;
          sellingPlanId = lineItem.sellingPlanId.split('/').pop() || '';
        }
      }
      
      const cartPath = cartItemsForUrl.join(',');
      
      let baseUrl: string;
      if (hasSellingPlan && sellingPlanId) {
        baseUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${cartPath}?selling_plan=${sellingPlanId}`;
      } else {
        baseUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${cartPath}`;
      }
      
      // Add cart attributes if present
      if (Object.keys(cartAttributes).length > 0) {
        const attributeParams = Object.entries(cartAttributes)
          .map(([key, value]) => `attributes[${encodeURIComponent(key)}]=${encodeURIComponent(value)}`)
          .join('&');
        checkoutUrl = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${attributeParams}`;
      } else {
        checkoutUrl = baseUrl;
      }
    }

    // IMPORTANT: Apply automatic discount code for full bundle (3 items)
    // When paperback + ebook + app are in cart, apply FULLBUNDLE discount code
    // This gives €44.98 off, making total €49.99 instead of €94.97
    if (body.lineItems.length >= 3) {
      const separator = checkoutUrl.includes('?') ? '&' : '?';
      checkoutUrl = `${checkoutUrl}${separator}discount=FULLBUNDLE`;
    }

    // Get selling plan info from first variant for backward compatibility
    const firstVariant = variants[0];
    const sellingPlanGroups = firstVariant.product.sellingPlanGroups?.edges || [];
    const availableSellingPlans = sellingPlanGroups.flatMap((group: any) => 
      group.node.sellingPlans.edges.map((plan: any) => ({
        id: plan.node.id,
        name: plan.node.name,
        options: plan.node.options,
        category: plan.node.category,
        groupName: group.node.name
      }))
    );

    return NextResponse.json({
      success: true,
      checkout: {
        checkoutUrl: checkoutUrl,
        productUrl: firstVariant.product.onlineStoreUrl || 
                   `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/products/${firstVariant.product.handle}`,
        products: processedProducts,
        totalItems: body.lineItems.length,
        estimatedTotal: totalPrice.toFixed(2),
        availableSellingPlans: availableSellingPlans,
        shopDomain: SHOPIFY_CONFIG.SHOP_DOMAIN,
        orderType: 'regular_cart',
        // Legacy fields for backward compatibility
        product: processedProducts[0] ? {
          id: processedProducts[0].id,
          title: processedProducts[0].title,
          handle: processedProducts[0].handle,
        } : null,
        variant: processedProducts[0] ? processedProducts[0].variant : null,
        quantity: processedProducts[0] ? processedProducts[0].quantity : 0,
        sellingPlan: processedProducts[0] ? processedProducts[0].sellingPlan : null
      }
    });

  } catch (error) {
    logger.error('Checkout creation error', error, { endpoint: '/api/shopify/checkout' });
    
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: { 
        endpoint: 'POST /api/shopify/checkout' 
      },
      severity: 'high'
    });

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create checkout'
    }, { status: 500 });
  }
}
