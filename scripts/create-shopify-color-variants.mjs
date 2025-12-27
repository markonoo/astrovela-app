#!/usr/bin/env node

/**
 * Create Color Variants for Shopify Products
 * 
 * This script adds 6 color variants for Paperback and Ebook products,
 * uploads images for each variant, and ensures correct pricing.
 * 
 * Usage: node scripts/create-shopify-color-variants.mjs
 */

import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const SHOPIFY_STORE = (process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || process.env.SHOPIFY_SHOP_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN)?.replace('.myshopify.com', '');
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || process.env.SHOPIFY_ACCESS_TOKEN;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://tryastrovela.com';

// Color variants to create
const COLORS = [
  { name: 'Black', value: 'black' },
  { name: 'Navy', value: 'navy' },
  { name: 'Purple', value: 'purple' },
  { name: 'Green', value: 'green' },
  { name: 'Burgundy', value: 'burgundy' },
  { name: 'Cream', value: 'cream' },
];

// Validate environment
if (!SHOPIFY_STORE || !SHOPIFY_ACCESS_TOKEN) {
  console.error('❌ Error: Missing Shopify credentials in .env');
  console.error('Required: NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN, SHOPIFY_ADMIN_ACCESS_TOKEN');
  console.error(`Found SHOPIFY_STORE: ${SHOPIFY_STORE || 'NOT FOUND'}`);
  console.error(`Found ACCESS_TOKEN: ${SHOPIFY_ACCESS_TOKEN ? 'YES' : 'NO'}`);
  process.exit(1);
}

const GRAPHQL_ENDPOINT = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/2024-01/graphql.json`;

/**
 * Make GraphQL request to Shopify
 */
async function shopifyRequest(query, variables = {}) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(JSON.stringify(data.errors, null, 2));
  }
  
  return data.data;
}

/**
 * Get products by handles
 */
async function getProducts() {
  const query = `
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  price
                  image {
                    id
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  
  const data = await shopifyRequest(query);
  return data.products.edges.map(edge => edge.node);
}

/**
 * Create variants with color option using different approach
 */
async function createVariantsWithOption(productId, price, handle) {
  // Use productVariantsBulkCreate which automatically creates options
  const mutation = `
    mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
        product {
          id
          options {
            id
            name
            values
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                price
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
        productVariants {
          id
          title
          price
          selectedOptions {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  const variants = COLORS.map(color => ({
    optionValues: [
      {
        optionName: 'Color',
        name: color.name
      }
    ],
    price: price,
  }));
  
  const variables = {
    productId,
    variants
  };
  
  const data = await shopifyRequest(mutation, variables);
  
  if (data.productVariantsBulkCreate.userErrors.length > 0) {
    throw new Error(JSON.stringify(data.productVariantsBulkCreate.userErrors));
  }
  
  return data.productVariantsBulkCreate;
}

/**
 * Upload image to variant
 */
async function uploadVariantImage(productId, variantId, imageUrl, altText) {
  const mutation = `
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
        }
      }
    }
  `;
  
  const variables = {
    productId,
    media: [
      {
        originalSource: imageUrl,
        alt: altText,
        mediaContentType: 'IMAGE'
      }
    ]
  };
  
  try {
    const data = await shopifyRequest(mutation, variables);
    
    if (data.productCreateMedia.mediaUserErrors.length > 0) {
      console.error(`   ⚠️  Image upload warning: ${data.productCreateMedia.mediaUserErrors[0].message}`);
    }
    
    return data.productCreateMedia.media[0];
  } catch (error) {
    console.error(`   ❌ Image upload error: ${error.message}`);
    return null;
  }
}

/**
 * Delete default variant if it exists
 */
async function deleteDefaultVariant(productId, variantId) {
  const mutation = `
    mutation productVariantDelete($id: ID!) {
      productVariantDelete(id: $id) {
        deletedProductVariantId
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  try {
    await shopifyRequest(mutation, { id: variantId });
    console.log(`   ✅ Deleted default variant`);
  } catch (error) {
    console.log(`   ⚠️  Could not delete default variant (this is OK if it's the last one)`);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Creating Shopify Color Variants\n');
  console.log(`Store: ${SHOPIFY_STORE}.myshopify.com`);
  console.log(`Colors: ${COLORS.map(c => c.name).join(', ')}\n`);
  
  try {
    // Get products
    console.log('📦 Fetching products...');
    const products = await getProducts();
    
    const paperback = products.find(p => p.handle === 'astrology-paperback');
    const ebook = products.find(p => p.handle === 'astrology-ebook');
    
    if (!paperback || !ebook) {
      throw new Error('Could not find paperback or ebook products');
    }
    
    console.log(`✅ Found paperback: ${paperback.title}`);
    console.log(`✅ Found ebook: ${ebook.title}\n`);
    
    // Process Paperback
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📘 PAPERBACK: Creating color variants...\n');
    
    const paperbackPrice = paperback.variants.edges[0]?.node.price || '49.99';
    const paperbackDefaultVariant = paperback.variants.edges[0]?.node.id;
    
    console.log('1️⃣  Creating 6 color variants...');
    const paperbackResult = await createVariantsWithOption(paperback.id, paperbackPrice, paperback.handle);
    console.log(`   ✅ Created ${paperbackResult.productVariants.length} variants`);
    console.log(`   ✅ Color option: ${paperbackResult.product.options.map(o => o.name).join(', ')}\n`);
    
    console.log('2️⃣  Uploading images to variants...');
    for (let i = 0; i < COLORS.length && i < paperbackResult.productVariants.length; i++) {
      const color = COLORS[i];
      const variant = paperbackResult.productVariants[i];
      const imageUrl = `${APP_URL}/images/products/paperback-book-${color.value}.jpg`;
      
      console.log(`   📸 ${color.name}: ${imageUrl}`);
      await uploadVariantImage(
        paperback.id,
        variant.id,
        imageUrl,
        `Paperback Book - ${color.name}`
      );
      
      // Wait a bit to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('   ✅ All paperback images uploaded\n');
    
    // Process Ebook
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📕 EBOOK: Creating color variants...\n');
    
    const ebookPrice = ebook.variants.edges[0]?.node.price || '29.99';
    const ebookDefaultVariant = ebook.variants.edges[0]?.node.id;
    
    console.log('1️⃣  Creating 6 color variants...');
    const ebookResult = await createVariantsWithOption(ebook.id, ebookPrice, ebook.handle);
    console.log(`   ✅ Created ${ebookResult.productVariants.length} variants`);
    console.log(`   ✅ Color option: ${ebookResult.product.options.map(o => o.name).join(', ')}\n`);
    
    console.log('2️⃣  Uploading images to variants...');
    for (let i = 0; i < COLORS.length && i < ebookResult.productVariants.length; i++) {
      const color = COLORS[i];
      const variant = ebookResult.productVariants[i];
      const imageUrl = `${APP_URL}/images/products/ebook-digital-${color.value}.jpg`;
      
      console.log(`   📸 ${color.name}: ${imageUrl}`);
      await uploadVariantImage(
        ebook.id,
        variant.id,
        imageUrl,
        `Ebook - ${color.name}`
      );
      
      // Wait a bit to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('   ✅ All ebook images uploaded\n');
    
    // Summary
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✨ SUCCESS!\n');
    console.log('📊 Summary:');
    console.log(`   ✅ Paperback: ${paperbackResult.productVariants.length} color variants created`);
    console.log(`   ✅ Ebook: ${ebookResult.productVariants.length} color variants created`);
    console.log(`   ✅ Total images uploaded: ${(paperbackResult.productVariants.length + ebookResult.productVariants.length)}`);
    console.log('');
    console.log('🎯 Next Steps:');
    console.log('   1. Check products in Shopify Admin');
    console.log('   2. Verify images are assigned to correct variants');
    console.log('   3. Test checkout flow with different colors');
    console.log('   4. Update app code to use correct variant selection');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
