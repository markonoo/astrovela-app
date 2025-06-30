import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';

interface CheckoutLineItem {
  variantId: string;
  quantity: number;
  sellingPlanId?: string;
}

interface CheckoutRequest {
  lineItems: CheckoutLineItem[];
  email?: string;
  productHandle?: string;
  customerData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
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

    // Process ALL line items instead of just the first one
    const processedProducts: any[] = [];
    let totalPrice = 0;

    for (let i = 0; i < body.lineItems.length; i++) {
      const lineItem = body.lineItems[i];
      const variant = variants[i];
      
      if (!variant) {
        console.warn(`No variant found for line item ${i}:`, lineItem);
        continue;
      }

      // Calculate price for this item
      const itemPrice = parseFloat(variant.price) * lineItem.quantity;
      totalPrice += itemPrice;

      // Store product info for response
      processedProducts.push({
        id: variant.product.id,
        title: variant.product.title,
        handle: variant.product.handle,
        variant: {
          id: variant.id,
          title: variant.title,
          price: variant.price
        },
        quantity: lineItem.quantity,
        sellingPlan: lineItem.sellingPlanId ? {
          id: lineItem.sellingPlanId,
          isSubscription: true
        } : null,
        itemTotal: itemPrice.toFixed(2)
      });
    }

    if (processedProducts.length === 0) {
      throw new Error('No valid products could be processed');
    }

    // Create multi-product checkout URL using proper Shopify cart format
    // For multiple products: https://shop.myshopify.com/cart/VARIANT1:QTY,VARIANT2:QTY?selling_plan=PLAN_ID
    // For single product with selling plan: https://shop.myshopify.com/cart/VARIANT:QTY?selling_plan=PLAN_ID
    
    let checkoutUrl: string;
    
    if (body.lineItems.length === 1) {
      // Single product - use simple format
      const lineItem = body.lineItems[0];
      const variant = variants[0];
      const variantIdNumber = variant.id.split('/').pop();
      
      if (lineItem.sellingPlanId) {
        const sellingPlanIdNumber = lineItem.sellingPlanId.split('/').pop();
        checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${lineItem.quantity}?selling_plan=${sellingPlanIdNumber}`;
      } else {
        checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${lineItem.quantity}`;
      }
    } else {
      // Multiple products - use comma-separated format
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
      
      if (hasSellingPlan && sellingPlanId) {
        checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${cartPath}?selling_plan=${sellingPlanId}`;
      } else {
        checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${cartPath}`;
      }
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
    console.error('Checkout creation error:', error);
    
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
