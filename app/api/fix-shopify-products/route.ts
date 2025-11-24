import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { logger } from '@/utils/logger';

export async function POST(request: NextRequest) {
  try {
    logger.api("fix-shopify-products", "Publishing AstroBook products to Online Store");
    
    // First, get the Online Store publication ID
    const publicationsQuery = `
      query {
        publications(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `;

    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    
    const publicationsResponse = await fetch(adminEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: publicationsQuery }),
    });

    const publicationsResult = await publicationsResponse.json();
    
    // Find the Online Store publication
    const onlineStorePublication = publicationsResult.data?.publications?.edges?.find(
      (edge: any) => edge.node.name === "Online Store"
    );
    
    if (!onlineStorePublication) {
      return NextResponse.json({
        success: false,
        error: "Could not find Online Store publication"
      });
    }
    
    const publicationId = onlineStorePublication.node.id;
    logger.api("fix-shopify-products", "Found Online Store publication", { publicationId });
    
    // Get the AstroBook products
    const productsQuery = `
      query {
        products(first: 10, query: "handle:ebook OR handle:paperback-book OR handle:app-subscription") {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `;
    
    const productsResponse = await fetch(adminEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: productsQuery }),
    });

    const productsResult = await productsResponse.json();
    const products = productsResult.data?.products?.edges || [];
    
    logger.api("fix-shopify-products", `Found ${products.length} AstroBook products to publish`, { count: products.length });
    
    // Publish each product to the Online Store
    const publishResults = [];
    
    for (const productEdge of products) {
      const product = productEdge.node;
      
      const publishMutation = `
        mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
          publishablePublish(id: $id, input: $input) {
            publishable {
              publicationCount
            }
            userErrors {
              field
              message
            }
          }
        }
      `;
      
      const publishResponse = await fetch(adminEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          query: publishMutation,
          variables: {
            id: product.id,
            input: [{ publicationId: publicationId }]
          }
        }),
      });

      const publishResult = await publishResponse.json();
      
      publishResults.push({
        product: product.title,
        handle: product.handle,
        success: !publishResult.errors && !publishResult.data?.publishablePublish?.userErrors?.length,
        result: publishResult
      });
      
      logger.api("fix-shopify-products", `Published ${product.title}`, { handle: product.handle });
    }
    
    return NextResponse.json({
      success: true,
      message: `Published ${products.length} products to Online Store`,
      onlineStorePublication: publicationId,
      publishResults
    });

  } catch (error: any) {
    logger.error('Publish error', error, { endpoint: '/api/fix-shopify-products' });
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Publish failed'
    });
  }
} 