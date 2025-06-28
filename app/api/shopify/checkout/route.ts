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

    // For single product checkout, create direct product URL with variant
    const firstVariant = variants[0];
    const firstLineItem = body.lineItems[0];
    const quantity = firstLineItem.quantity;
    
    // Extract variant ID number from GID
    const variantIdNumber = firstVariant.id.split('/').pop();
    
    // Create checkout URL with selling plan support
    let checkoutUrl: string;
    
    if (firstLineItem.sellingPlanId) {
      // Extract selling plan ID number from GID
      const sellingPlanIdNumber = firstLineItem.sellingPlanId.split('/').pop();
      
      // For subscriptions, create cart URL with selling plan
      checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${quantity}?selling_plan=${sellingPlanIdNumber}`;
    } else {
      // Regular one-time purchase
      checkoutUrl = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/cart/${variantIdNumber}:${quantity}`;
    }
    
    // Alternative: Direct product page URL
    const productUrl = firstVariant.product.onlineStoreUrl || 
                      `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/products/${firstVariant.product.handle}?variant=${variantIdNumber}`;

    // Get selling plan info if available
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
        productUrl: productUrl,
        product: {
          id: firstVariant.product.id,
          title: firstVariant.product.title,
          handle: firstVariant.product.handle,
        },
        variant: {
          id: firstVariant.id,
          title: firstVariant.title,
          price: firstVariant.price
        },
        quantity: quantity,
        sellingPlan: firstLineItem.sellingPlanId ? {
          id: firstLineItem.sellingPlanId,
          isSubscription: true
        } : null,
        availableSellingPlans: availableSellingPlans,
        shopDomain: SHOPIFY_CONFIG.SHOP_DOMAIN
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
