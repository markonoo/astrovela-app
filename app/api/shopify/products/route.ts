import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const handles = searchParams.get('handles')?.split(',') || [];
    
    // Use Admin API instead of Storefront API for better reliability
    const productsQuery = `
      query getProducts($query: String) {
        products(first: 250, query: $query) {
          edges {
            node {
              id
              title
              handle
              description
              productType
              tags
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price
                    compareAtPrice
                    availableForSale
                  }
                }
              }
              images(first: 10) {
                edges {
                  node {
                    id
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `;

    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    
    // Build query string for handles
    const queryString = handles.length > 0 ? `handle:${handles.join(' OR handle:')}` : "";
    
    const response = await fetch(adminEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: productsQuery,
        variables: { query: queryString }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    const products = data.data.products.edges.map((edge: any) => {
      const product = edge.node;
      return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        productType: product.productType,
        tags: product.tags,
        priceRange: {
          minVariantPrice: product.priceRangeV2?.minVariantPrice || { amount: "0", currencyCode: "EUR" },
          maxVariantPrice: product.priceRangeV2?.maxVariantPrice || { amount: "0", currencyCode: "EUR" }
        },
        variants: product.variants.edges.map((variantEdge: any) => variantEdge.node),
        images: product.images.edges.map((imageEdge: any) => imageEdge.node)
      };
    });

    return NextResponse.json({
      success: true,
      products,
      totalCount: products.length
    });

  } catch (error) {
    console.error('Products fetch error:', error);
    
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error('Products fetch failed'),
      context: { endpoint: 'GET /api/shopify/products' },
      severity: 'medium'
    });

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch products'
    }, { status: 500 });
  }
}

// Get product price by handle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { handle } = body;
    
    if (!handle) {
      return NextResponse.json({ 
        success: false, 
        error: 'Product handle is required' 
      }, { status: 400 });
    }

    const productQuery = `
      query getProduct($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          handle
          description
          productType
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price
                compareAtPrice
                availableForSale
              }
            }
          }
        }
      }
    `;

    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    
    const response = await fetch(adminEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: productQuery,
        variables: { handle }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    const product = data.data.productByHandle;

    if (!product) {
      return NextResponse.json({
        success: false,
        error: 'Product not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      product: {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        productType: product.productType,
        priceRange: product.priceRangeV2,
        variant: product.variants.edges[0]?.node || null
      }
    });

  } catch (error) {
    console.error('Product fetch error:', error);
    
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error('Product fetch failed'),
      context: { endpoint: 'POST /api/shopify/products' },
      severity: 'medium'
    });

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch product'
    }, { status: 500 });
  }
} 