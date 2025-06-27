import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';

interface CheckoutLineItem {
  variantId: string;
  quantity: number;
}

interface CheckoutRequest {
  lineItems: CheckoutLineItem[];
  email?: string;
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

    // Create checkout using Storefront API
    const checkoutMutation = \`
      mutation checkoutCreate(\$input: CheckoutCreateInput!) {
        checkoutCreate(input: \$input) {
          checkout {
            id
            webUrl
            totalPriceV2 {
              amount
              currencyCode
            }
            lineItems(first: 250) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    priceV2 {
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
    \`;

    // Format line items for Shopify
    const lineItems = body.lineItems.map(item => ({
      variantId: item.variantId,
      quantity: item.quantity
    }));

    const variables = {
      input: {
        lineItems,
        email: body.email || body.customerData?.email,
        customAttributes: body.customerData ? [
          { key: "firstName", value: body.customerData.firstName || "" },
          { key: "lastName", value: body.customerData.lastName || "" }
        ] : []
      }
    };

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: checkoutMutation,
        variables
      })
    });

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(\`GraphQL errors: \${JSON.stringify(data.errors)}\`);
    }

    if (data.data.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new Error(\`Checkout errors: \${JSON.stringify(data.data.checkoutCreate.checkoutUserErrors)}\`);
    }

    const checkout = data.data.checkoutCreate.checkout;

    return NextResponse.json({
      success: true,
      checkout: {
        id: checkout.id,
        webUrl: checkout.webUrl,
        totalPrice: checkout.totalPriceV2,
        lineItems: checkout.lineItems.edges.map((edge: any) => edge.node)
      }
    });

  } catch (error) {
    console.error('Checkout creation error:', error);
    
    ErrorMonitor.captureError('checkout_creation_failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      endpoint: 'POST /api/shopify/checkout'
    });

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create checkout'
    }, { status: 500 });
  }
}
