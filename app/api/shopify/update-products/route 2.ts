import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { logger } from '@/utils/logger';
import fs from 'fs';
import path from 'path';

/**
 * API Route to update Shopify products with:
 * 1. Correct pricing (app subscription: €14.99)
 * 2. Product images from /public/images/products/
 */
export async function POST(request: NextRequest) {
  try {
    logger.api("update-shopify-products", "Starting Shopify product updates");
    
    const adminEndpoint = SHOPIFY_CONFIG.ADMIN_API_ENDPOINT;
    const headers = {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
    };

    // Step 1: Get all products
    const productsQuery = `
      query {
        products(first: 10, query: "handle:ebook OR handle:paperback-book OR handle:app-subscription") {
          edges {
            node {
              id
              title
              handle
              variants(first: 1) {
                edges {
                  node {
                    id
                    price
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    id
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;

    const productsResponse = await fetch(adminEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query: productsQuery }),
    });

    const productsResult = await productsResponse.json();
    
    if (productsResult.errors) {
      logger.error("Shopify API Error", productsResult.errors);
      return NextResponse.json({
        success: false,
        error: "Failed to fetch products from Shopify",
        details: productsResult.errors
      }, { status: 500 });
    }

    const products = productsResult.data?.products?.edges || [];
    logger.api("update-shopify-products", `Found ${products.length} products`);

    const results: any[] = [];

    // Step 2: Update each product
    for (const productEdge of products) {
      const product = productEdge.node;
      const handle = product.handle;
      
      logger.api("update-shopify-products", `Processing ${handle}`);

      // Determine image path based on handle
      // Note: For paperback and ebook, we upload a default image to Shopify,
      // but the app dynamically shows color variants (black, navy, purple, green, burgundy, cream)
      // based on user selection in the quiz using the pattern:
      // - Paperback: /images/products/paperback-book-{color}.jpg
      // - Ebook: /images/products/ebook-digital-{color}.jpg
      let imagePath = '';
      if (handle === 'paperback-book') {
        imagePath = '/images/products/paperback-book.jpg'; // Default image
      } else if (handle === 'ebook') {
        imagePath = '/images/products/ebook-digital.jpg'; // Default image
      } else if (handle === 'app-subscription') {
        imagePath = '/images/products/app-interface.jpg';
      }

      const updates: any = {
        handle,
        title: product.title,
        currentPrice: product.variants.edges[0]?.node.price || 'N/A',
        newPrice: null,
        imageUpdated: false,
        imagePath,
      };

      // Step 3: Update app subscription price to €14.99
      if (handle === 'app-subscription') {
        const variantId = product.variants.edges[0]?.node.id;
        
        if (variantId) {
          const updatePriceMutation = `
            mutation productVariantUpdate($input: ProductVariantInput!) {
              productVariantUpdate(input: $input) {
                productVariant {
                  id
                  price
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `;

          const priceUpdateResponse = await fetch(adminEndpoint, {
            method: "POST",
            headers,
            body: JSON.stringify({
              query: updatePriceMutation,
              variables: {
                input: {
                  id: variantId,
                  price: "14.99"
                }
              }
            }),
          });

          const priceUpdateResult = await priceUpdateResponse.json();
          
          if (priceUpdateResult.data?.productVariantUpdate?.userErrors?.length > 0) {
            updates.priceError = priceUpdateResult.data.productVariantUpdate.userErrors;
            logger.error("Price update error", updates.priceError);
          } else {
            updates.newPrice = "14.99";
            updates.priceUpdated = true;
            logger.api("update-shopify-products", `✅ Updated price to €14.99 for ${handle}`);
          }
        }
      }

      // Step 4: Upload product image from URL
      // For this to work, we need to use a publicly accessible URL
      // Since we're using /public/images/, we can construct the URL
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://tryastrovela.com';
      const imageUrl = `${baseUrl}${imagePath}`;

      const updateImageMutation = `
        mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
          productCreateMedia(media: $media, productId: $productId) {
            media {
              alt
              mediaContentType
              status
            }
            mediaUserErrors {
              field
              message
            }
            product {
              id
              title
            }
          }
        }
      `;

      const imageUpdateResponse = await fetch(adminEndpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          query: updateImageMutation,
          variables: {
            productId: product.id,
            media: [
              {
                originalSource: imageUrl,
                alt: `${product.title}`,
                mediaContentType: "IMAGE"
              }
            ]
          }
        }),
      });

      const imageUpdateResult = await imageUpdateResponse.json();
      
      if (imageUpdateResult.data?.productCreateMedia?.mediaUserErrors?.length > 0) {
        updates.imageError = imageUpdateResult.data.productCreateMedia.mediaUserErrors;
        logger.error("Image update error", updates.imageError);
      } else {
        updates.imageUpdated = true;
        updates.imageUrl = imageUrl;
        logger.api("update-shopify-products", `✅ Updated image for ${handle}`);
      }

      results.push(updates);
    }

    logger.api("update-shopify-products", "Completed all updates", { results });

    return NextResponse.json({
      success: true,
      message: "Shopify products updated successfully",
      results,
      summary: {
        totalProducts: results.length,
        priceUpdates: results.filter(r => r.priceUpdated).length,
        imageUpdates: results.filter(r => r.imageUpdated).length,
      }
    });

  } catch (error: any) {
    logger.error('Shopify update error', error, { endpoint: '/api/shopify/update-products' });
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Update failed',
      stack: error.stack
    }, { status: 500 });
  }
}
