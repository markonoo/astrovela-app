import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const handles = searchParams.get('handles')?.split(',') || [];
    
    // Query to get products with their variants  
    const productsQuery = `
      query getProducts {
        products(first: 250${handles.length > 0 ? `, query: "handle:(${handles.join(' OR ')})"` : ''}) {
          edges {
            node {
              id
              title
              handle
              description
              productType
              tags
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
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
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

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: productsQuery,
        variables: {}
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
        priceRange: product.priceRange,
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
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    `;

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
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
        priceRange: product.priceRange,
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