import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Test the bundle checkout with all 3 products selected
    const testBundle = {
      selectedOptions: {
        app: true,
        paperback: true,
        ebook: true
      },
      quizState: {
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User'
      }
    };

    // Call our checkout API
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';

    console.log('🧪 Testing bundle checkout with all 3 products...');
    console.log('📦 Selected options:', testBundle.selectedOptions);

    const response = await fetch(`${baseUrl}/api/shopify/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: [
          // App with subscription
          { 
            variantId: 'gid://shopify/ProductVariant/55883677925763',
            quantity: 1,
            sellingPlanId: 'gid://shopify/SellingPlan/710674514307',
            properties: { '_bundle_item': 'free' }
          },
          // Ebook
          { 
            variantId: 'gid://shopify/ProductVariant/55883673665923',
            quantity: 1,
            properties: { '_bundle_item': 'free' }
          },
          // Paperback
          { 
            variantId: 'gid://shopify/ProductVariant/55883676156291',
            quantity: 1,
            properties: { '_bundle_item': 'charged' }
          }
        ],
        email: testBundle.quizState.email,
        bundlePricing: {
          selectedProducts: [
            { type: 'app', shouldCharge: false },
            { type: 'ebook', shouldCharge: false },
            { type: 'paperback', shouldCharge: true }
          ]
        },
        customerData: {
          firstName: testBundle.quizState.firstName,
          lastName: testBundle.quizState.lastName,
          email: testBundle.quizState.email,
        }
      }),
    });

    const checkoutData = await response.json();

    console.log('✅ Checkout API response:', JSON.stringify(checkoutData, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Bundle checkout test completed',
      testData: testBundle,
      checkoutResponse: checkoutData,
      checkoutUrl: checkoutData.checkout?.checkoutUrl
    });

  } catch (error) {
    console.error('❌ Bundle checkout test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Test failed'
    }, { status: 500 });
  }
} 