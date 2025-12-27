#!/usr/bin/env node

/**
 * Create Color Variants for Shopify Products (REST API version)
 * 
 * This script uses the Shopify REST Admin API to:
 * 1. Get products
 * 2. Add "Color" option to products
 * 3. Create 6 color variants
 * 4. Upload images to each variant
 * 
 * Usage: node scripts/create-shopify-color-variants-rest.mjs
 */

import 'dotenv/config';
import fetch from 'node-fetch';

// Configuration
const SHOPIFY_STORE = (process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || '')?.replace('.myshopify.com', '');
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://tryastrovela.com';

const COLORS = [
  { name: 'Black', value: 'black' },
  { name: 'Navy', value: 'navy' },
  { name: 'Purple', value: 'purple' },
  { name: 'Green', value: 'green' },
  { name: 'Burgundy', value: 'burgundy' },
  { name: 'Cream', value: 'cream' },
];

if (!SHOPIFY_STORE || !SHOPIFY_ACCESS_TOKEN) {
  console.error('❌ Error: Missing Shopify credentials');
  process.exit(1);
}

const BASE_URL = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/2024-01`;

/**
 * Make REST API request
 */
async function shopifyRest(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(JSON.stringify(data, null, 2));
  }
  
  return data;
}

/**
 * Get products
 */
async function getProducts() {
  const data = await shopifyRest('/products.json');
  return data.products;
}

/**
 * Update product with color options and variants
 */
async function addColorVariants(productId, productPrice, productHandle) {
  // Create variants for each color
  const variants = COLORS.map(color => ({
    option1: color.name,
    price: productPrice,
    sku: `${productHandle}-${color.value}`,
    inventory_management: null,
  }));
  
  // Update product with new options and variants
  const productUpdate = {
    product: {
      id: productId,
      options: [
        { name: 'Color' }
      ],
      variants: variants
    }
  };
  
  const data = await shopifyRest(`/products/${productId}.json`, 'PUT', productUpdate);
  return data.product;
}

/**
 * Upload image to product
 */
async function uploadProductImage(productId, imageUrl, position, variantIds = []) {
  const imageData = {
    image: {
      src: imageUrl,
      position: position,
      variant_ids: variantIds
    }
  };
  
  try {
    const data = await shopifyRest(`/products/${productId}/images.json`, 'POST', imageData);
    return data.image;
  } catch (error) {
    console.error(`   ⚠️  Image upload error: ${error.message}`);
    return null;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Creating Shopify Color Variants (REST API)\n');
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
    
    console.log(`✅ Found paperback: ${paperback.title} (ID: ${paperback.id})`);
    console.log(`✅ Found ebook: ${ebook.title} (ID: ${ebook.id})\n`);
    
    // Process Paperback
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📘 PAPERBACK: Creating color variants...\n');
    
    const paperbackPrice = paperback.variants[0]?.price || '49.99';
    
    console.log('1️⃣  Creating 6 color variants...');
    const updatedPaperback = await addColorVariants(paperback.id, paperbackPrice, paperback.handle);
    console.log(`   ✅ Created ${updatedPaperback.variants.length} variants\n`);
    
    console.log('2️⃣  Uploading images to variants...');
    for (let i = 0; i < COLORS.length && i < updatedPaperback.variants.length; i++) {
      const color = COLORS[i];
      const variant = updatedPaperback.variants[i];
      const imageUrl = `${APP_URL}/images/products/paperback-book-${color.value}.jpg`;
      
      console.log(`   📸 ${color.name}: ${imageUrl}`);
      await uploadProductImage(
        paperback.id,
        imageUrl,
        i + 1,
        [variant.id]
      );
      
      // Wait to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('   ✅ All paperback images uploaded\n');
    
    // Process Ebook
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📕 EBOOK: Creating color variants...\n');
    
    const ebookPrice = ebook.variants[0]?.price || '29.99';
    
    console.log('1️⃣  Creating 6 color variants...');
    const updatedEbook = await addColorVariants(ebook.id, ebookPrice, ebook.handle);
    console.log(`   ✅ Created ${updatedEbook.variants.length} variants\n`);
    
    console.log('2️⃣  Uploading images to variants...');
    for (let i = 0; i < COLORS.length && i < updatedEbook.variants.length; i++) {
      const color = COLORS[i];
      const variant = updatedEbook.variants[i];
      const imageUrl = `${APP_URL}/images/products/ebook-digital-${color.value}.jpg`;
      
      console.log(`   📸 ${color.name}: ${imageUrl}`);
      await uploadProductImage(
        ebook.id,
        imageUrl,
        i + 1,
        [variant.id]
      );
      
      // Wait to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('   ✅ All ebook images uploaded\n');
    
    // Summary
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✨ SUCCESS!\n');
    console.log('📊 Summary:');
    console.log(`   ✅ Paperback: ${updatedPaperback.variants.length} color variants`);
    console.log(`   ✅ Ebook: ${updatedEbook.variants.length} color variants`);
    console.log(`   ✅ Total variants created: ${updatedPaperback.variants.length + updatedEbook.variants.length}`);
    console.log('');
    console.log('🎯 Next Steps:');
    console.log('   1. Check products in Shopify Admin');
    console.log('   2. Verify images are displayed correctly');
    console.log('   3. Test app code selects correct variants');
    console.log('   4. Test checkout with different colors');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
