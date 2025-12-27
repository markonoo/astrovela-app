#!/usr/bin/env node

/**
 * Create Shopify Automatic Bundle Discounts
 * 
 * This script creates 3 automatic "Buy X Get Y" discounts for bundle pricing:
 * 1. Paperback + Ebook: Get ebook free with paperback
 * 2. Paperback + App: Get app free with paperback
 * 3. Ebook + App: Get app free with ebook
 * 
 * Usage: node scripts/create-shopify-discounts.mjs
 */

import 'dotenv/config';
import fetch from 'node-fetch';

// Configuration
const SHOPIFY_STORE = (process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || '').replace('.myshopify.com', '');
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

if (!SHOPIFY_STORE || !SHOPIFY_ACCESS_TOKEN) {
  console.error('❌ Error: Missing Shopify credentials');
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
 * Get product IDs
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
          }
        }
      }
    }
  `;
  
  const data = await shopifyRequest(query);
  return data.products.edges.map(edge => edge.node);
}

/**
 * Create automatic Buy X Get Y discount
 */
async function createBXGYDiscount(title, customerBuysProductId, customerGetsProductId) {
  const mutation = `
    mutation discountAutomaticBxgyCreate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              status
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  const variables = {
    automaticBxgyDiscount: {
      title: title,
      startsAt: new Date().toISOString(),
      customerBuys: {
        value: {
          productVariantsToCreate: {
            productId: customerBuysProductId
          }
        },
        items: {
          products: {
            productsToAdd: [customerBuysProductId]
          }
        }
      },
      customerGets: {
        value: {
          percentage: 1.0 // 100% off
        },
        items: {
          products: {
            productsToAdd: [customerGetsProductId]
          }
        }
      }
    }
  };
  
  const data = await shopifyRequest(mutation, variables);
  
  if (data.discountAutomaticBxgyCreate.userErrors.length > 0) {
    throw new Error(JSON.stringify(data.discountAutomaticBxgyCreate.userErrors));
  }
  
  return data.discountAutomaticBxgyCreate.automaticDiscountNode;
}

/**
 * List existing automatic discounts
 */
async function listDiscounts() {
  const query = `
    query {
      automaticDiscountNodes(first: 50) {
        edges {
          node {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                status
                summary
              }
              ... on DiscountAutomaticApp {
                title
              }
            }
          }
        }
      }
    }
  `;
  
  const data = await shopifyRequest(query);
  return data.automaticDiscountNodes.edges.map(edge => edge.node);
}

/**
 * Main execution
 */
async function main() {
  console.log('🎁 Creating Shopify Bundle Discounts\n');
  console.log(`Store: ${SHOPIFY_STORE}.myshopify.com\n`);
  
  try {
    // Get products
    console.log('📦 Fetching products...');
    const products = await getProducts();
    
    const paperback = products.find(p => p.handle === 'astrology-paperback');
    const ebook = products.find(p => p.handle === 'astrology-ebook');
    const app = products.find(p => p.handle === 'app-subscription');
    
    if (!paperback || !ebook || !app) {
      throw new Error('Could not find required products');
    }
    
    console.log(`✅ Found paperback: ${paperback.title}`);
    console.log(`✅ Found ebook: ${ebook.title}`);
    console.log(`✅ Found app: ${app.title}\n`);
    
    // Check existing discounts
    console.log('🔍 Checking existing discounts...');
    const existingDiscounts = await listDiscounts();
    console.log(`Found ${existingDiscounts.length} existing automatic discounts\n`);
    
    // Create Discount 1: Paperback + Free Ebook
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📘 Creating: Paperback Bundle - Free Ebook');
    try {
      const discount1 = await createBXGYDiscount(
        'Paperback Bundle - Free Ebook',
        paperback.id,
        ebook.id
      );
      console.log(`✅ Created! ID: ${discount1.id}`);
      console.log(`   Status: ${discount1.automaticDiscount.status}\n`);
    } catch (error) {
      console.log(`⚠️  Error: ${error.message}\n`);
    }
    
    // Create Discount 2: Paperback + Free App
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📱 Creating: Paperback Bundle - Free App');
    try {
      const discount2 = await createBXGYDiscount(
        'Paperback Bundle - Free App',
        paperback.id,
        app.id
      );
      console.log(`✅ Created! ID: ${discount2.id}`);
      console.log(`   Status: ${discount2.automaticDiscount.status}\n`);
    } catch (error) {
      console.log(`⚠️  Error: ${error.message}\n`);
    }
    
    // Create Discount 3: Ebook + Free App
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📗 Creating: Ebook Bundle - Free App');
    try {
      const discount3 = await createBXGYDiscount(
        'Ebook Bundle - Free App',
        ebook.id,
        app.id
      );
      console.log(`✅ Created! ID: ${discount3.id}`);
      console.log(`   Status: ${discount3.automaticDiscount.status}\n`);
    } catch (error) {
      console.log(`⚠️  Error: ${error.message}\n`);
    }
    
    // List all discounts
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✨ All Automatic Discounts:\n');
    const allDiscounts = await listDiscounts();
    allDiscounts.forEach((discount, index) => {
      console.log(`${index + 1}. ${discount.automaticDiscount.title || 'Untitled'}`);
      if (discount.automaticDiscount.status) {
        console.log(`   Status: ${discount.automaticDiscount.status}`);
      }
      if (discount.automaticDiscount.summary) {
        console.log(`   Summary: ${discount.automaticDiscount.summary}`);
      }
    });
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 Bundle Discounts Setup Complete!\n');
    console.log('🎯 Bundle Pricing:');
    console.log('   • Paperback (€49.99) → Ebook FREE + App FREE');
    console.log('   • Ebook (€29.99) + App → App FREE');
    console.log('   • Individual products at full price\n');
    console.log('✅ Test your checkout to verify discounts apply correctly!');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
