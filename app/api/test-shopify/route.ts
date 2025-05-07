import { NextResponse } from 'next/server';
import { getShopifyProducts } from '@/services/shopify-service';

export async function GET() {
  try {
    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Missing required Shopify environment variables" 
        },
        { status: 500 }
      );
    }

    const products = await getShopifyProducts();
    
    if (!products.length) {
      return NextResponse.json(
        { 
          success: false, 
          error: "No products found in Shopify store" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      products,
      message: `Successfully fetched ${products.length} products`
    });
  } catch (error: any) {
    console.error('Test Shopify Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "An unexpected error occurred",
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 