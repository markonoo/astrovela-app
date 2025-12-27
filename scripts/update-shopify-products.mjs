#!/usr/bin/env node

/**
 * Standalone script to update Shopify products
 * - Updates app subscription price to €14.99
 * - Uploads product images
 * 
 * Usage: node scripts/update-shopify-products.mjs
 */

import https from 'https';
import http from 'http';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env or .env.local
const envPaths = [
  join(__dirname, '../.env'),
  join(__dirname, '../.env.local')
];

let env = { ...process.env };
let envLoaded = false;

for (const envPath of envPaths) {
  try {
    const envFile = readFileSync(envPath, 'utf-8');
    envFile.split('\n').forEach(line => {
      // Skip comments and empty lines
      if (!line || line.trim().startsWith('#')) return;
      
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length) {
        env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
      }
    });
    console.log(`✅ Loaded environment variables from ${envPath}`);
    envLoaded = true;
    break;
  } catch (error) {
    // Try next file
    continue;
  }
}

if (!envLoaded) {
  console.log('⚠️  No .env file found, using process.env');
}

// Configuration
const SHOP_DOMAIN = env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || env.SHOPIFY_SHOP_DOMAIN;
const ADMIN_ACCESS_TOKEN = env.SHOPIFY_ADMIN_ACCESS_TOKEN || env.SHOPIFY_ACCESS_TOKEN;
const APP_URL = env.NEXT_PUBLIC_APP_URL || 'https://tryastrovela.com';
const API_VERSION = '2024-01';

if (!SHOP_DOMAIN || !ADMIN_ACCESS_TOKEN) {
  console.error('❌ Missing required environment variables:');
  console.error('   SHOP_DOMAIN:', SHOP_DOMAIN ? '✓' : '✗');
  console.error('   ADMIN_ACCESS_TOKEN:', ADMIN_ACCESS_TOKEN ? '✓' : '✗');
  process.exit(1);
}

console.log(`\n🔧 Shopify Product Updater`);
console.log(`   Shop: ${SHOP_DOMAIN}`);
console.log(`   API Version: ${API_VERSION}\n`);

// Helper function to make GraphQL requests
async function shopifyRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    
    const options = {
      hostname: SHOP_DOMAIN,
      port: 443,
      path: `/admin/api/${API_VERSION}/graphql.json`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.errors) {
            reject(new Error(JSON.stringify(parsed.errors)));
          } else {
            resolve(parsed);
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Main execution
async function main() {
  try {
    // Step 1: Fetch products
    console.log('📦 Fetching products from Shopify...');
    
    const productsQuery = `
      query {
        products(first: 50) {
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
            }
          }
        }
      }
    `;

    const productsResult = await shopifyRequest(productsQuery);
    const products = productsResult.data?.products?.edges || [];
    
    console.log(`   Found ${products.length} products\n`);

    const results = [];

    // Step 2: Process each product
    for (const productEdge of products) {
      const product = productEdge.node;
      const handle = product.handle;
      const currentPrice = product.variants.edges[0]?.node.price || 'N/A';
      
      console.log(`\n🔄 Processing: ${product.title} (${handle})`);
      console.log(`   Current price: €${currentPrice}`);

      const result = {
        handle,
        title: product.title,
        currentPrice,
        updates: []
      };

      // Update app subscription price using REST API
      if (handle === 'app-subscription' && currentPrice !== '14.99') {
        console.log(`   💰 Updating price to €14.99...`);
        
        const variantGid = product.variants.edges[0]?.node.id;
        // Extract numeric ID from GID (e.g., "gid://shopify/ProductVariant/123" -> "123")
        const variantId = variantGid.split('/').pop();
        
        try {
          // Use REST API for price update
          const restUpdateResult = await new Promise((resolve, reject) => {
            const data = JSON.stringify({
              variant: {
                id: variantId,
                price: "14.99"
              }
            });
            
            const options = {
              hostname: SHOP_DOMAIN,
              port: 443,
              path: `/admin/api/${API_VERSION}/variants/${variantId}.json`,
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
              },
            };

            const req = https.request(options, (res) => {
              let body = '';
              res.on('data', (chunk) => body += chunk);
              res.on('end', () => {
                try {
                  const parsed = JSON.parse(body);
                  if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(parsed);
                  } else {
                    reject(new Error(JSON.stringify(parsed)));
                  }
                } catch (error) {
                  reject(error);
                }
              });
            });

            req.on('error', reject);
            req.write(data);
            req.end();
          });

          if (restUpdateResult.variant) {
            console.log(`   ✅ Price updated to €${restUpdateResult.variant.price}`);
            result.updates.push({ type: 'price', success: true, newPrice: restUpdateResult.variant.price });
          } else {
            console.log(`   ❌ Price update failed: Unexpected response`);
            result.updates.push({ type: 'price', success: false, error: 'Unexpected response' });
          }
        } catch (error) {
          console.log(`   ❌ Price update error:`, error.message);
          result.updates.push({ type: 'price', success: false, error: error.message });
        }
      } else if (handle === 'app-subscription') {
        console.log(`   ✓ Price already correct (€14.99)`);
      }

      // Determine image URL based on handle
      // Note: For paperback and ebook, we upload a default image to Shopify,
      // but the app dynamically shows color variants (black, navy, purple, green, burgundy, cream)
      // based on user selection in the quiz using the pattern:
      // - Paperback: /images/products/paperback-book-{color}.jpg
      // - Ebook: /images/products/ebook-digital-{color}.jpg
      let imagePath = '';
      if (handle === 'astrology-paperback' || handle === 'paperback-book') {
        imagePath = '/images/products/paperback-book.jpg'; // Default image
      } else if (handle === 'astrology-ebook' || handle === 'ebook') {
        imagePath = '/images/products/ebook-digital.jpg'; // Default image
      } else if (handle === 'app-subscription') {
        imagePath = '/images/products/app-interface.jpg';
      }
      
      // Skip products without image mappings
      if (!imagePath) {
        console.log(`   ⏭️  Skipping (no image mapping for this product)`);
        continue;
      }

      if (imagePath) {
        console.log(`   🖼️  Uploading image: ${imagePath}...`);
        
        const imageUrl = `${APP_URL}${imagePath}`;
        
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
            }
          }
        `;

        try {
          const imageUpdateResult = await shopifyRequest(updateImageMutation, {
            productId: product.id,
            media: [
              {
                originalSource: imageUrl,
                alt: product.title,
                mediaContentType: "IMAGE"
              }
            ]
          });

          const errors = imageUpdateResult.data?.productCreateMedia?.mediaUserErrors;
          if (errors && errors.length > 0) {
            console.log(`   ❌ Image upload failed:`, errors);
            result.updates.push({ type: 'image', success: false, errors });
          } else {
            console.log(`   ✅ Image uploaded successfully`);
            result.updates.push({ type: 'image', success: true, url: imageUrl });
          }
        } catch (error) {
          console.log(`   ❌ Image upload error:`, error.message);
          result.updates.push({ type: 'image', success: false, error: error.message });
        }
      }

      results.push(result);
    }

    // Summary
    console.log(`\n\n📊 Summary:`);
    console.log(`   Total products processed: ${results.length}`);
    
    const priceUpdates = results.filter(r => r.updates.some(u => u.type === 'price' && u.success));
    const imageUpdates = results.filter(r => r.updates.some(u => u.type === 'image' && u.success));
    
    console.log(`   ✅ Price updates: ${priceUpdates.length}`);
    console.log(`   ✅ Image uploads: ${imageUpdates.length}`);
    
    console.log(`\n✨ Done!\n`);

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
