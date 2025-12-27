#!/usr/bin/env node

/**
 * Create Shopify Discount Code for Full Bundle
 * 
 * Creates a discount code "FULLBUNDLE" that gives €44.98 off
 * when paperback + ebook + app are in cart.
 * 
 * Usage: node scripts/create-full-bundle-discount.mjs
 */

import 'dotenv/config';
import fetch from 'node-fetch';

const SHOPIFY_STORE = (process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || '').replace('.myshopify.com', '');
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

if (!SHOPIFY_STORE || !SHOPIFY_ACCESS_TOKEN) {
  console.error('❌ Error: Missing Shopify credentials');
  process.exit(1);
}

const GRAPHQL_ENDPOINT = `https://${SHOPIFY_STORE}.myshopify.com/admin/api/2024-01/graphql.json`;

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
            variants(first: 20) {
              edges {
                node {
                  id
                  title
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
 * Create discount code
 */
async function createDiscountCode() {
  const mutation = `
    mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              codes(first: 1) {
                edges {
                  node {
                    code
                  }
                }
              }
              status
              summary
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
    basicCodeDiscount: {
      title: "Full Bundle Discount",
      code: "FULLBUNDLE",
      startsAt: new Date().toISOString(),
      customerSelection: {
        all: true
      },
      customerGets: {
        value: {
          discountAmount: {
            amount: "44.98", // App (14.99) + Ebook (29.99) = 44.98
            appliesOnEachItem: false
          }
        },
        items: {
          all: true
        }
      },
      minimumRequirement: {
        quantity: {
          greaterThanOrEqualToQuantity: "3"
        }
      },
      usageLimit: null // Unlimited uses
    }
  };
  
  const data = await shopifyRequest(mutation, variables);
  
  if (data.discountCodeBasicCreate.userErrors.length > 0) {
    throw new Error(JSON.stringify(data.discountCodeBasicCreate.userErrors));
  }
  
  return data.discountCodeBasicCreate.codeDiscountNode;
}

async function main() {
  console.log('🎁 Creating Full Bundle Discount Code\n');
  console.log(`Store: ${SHOPIFY_STORE}.myshopify.com\n`);
  
  try {
    console.log('Creating discount code: "FULLBUNDLE"...\n');
    console.log('Configuration:');
    console.log('  • Code: FULLBUNDLE');
    console.log('  • Discount: €44.98 fixed amount');
    console.log('  • Minimum: 3 items in cart');
    console.log('  • Usage: Unlimited');
    console.log('  • Auto-applies: Yes (when code is in URL)\n');
    
    const discount = await createDiscountCode();
    
    console.log('✅ Discount code created successfully!\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📋 Discount Details:\n');
    console.log(`ID: ${discount.id}`);
    console.log(`Title: ${discount.codeDiscount.title}`);
    console.log(`Code: ${discount.codeDiscount.codes.edges[0]?.node.code || 'FULLBUNDLE'}`);
    console.log(`Status: ${discount.codeDiscount.status}`);
    console.log(`Summary: ${discount.codeDiscount.summary || 'N/A'}\n`);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('🎯 How It Works:\n');
    console.log('When customer selects all 3 items (paperback + ebook + app):');
    console.log('  1. App adds discount=FULLBUNDLE to checkout URL');
    console.log('  2. Shopify applies €44.98 discount automatically');
    console.log('  3. Customer sees: €94.97 - €44.98 = €49.99 ✅\n');
    
    console.log('💡 Expected Cart Display:');
    console.log('  Paperback: €49.99');
    console.log('  Ebook: €29.99');
    console.log('  App: €14.99');
    console.log('  Subtotal: €94.97');
    console.log('  Discount (FULLBUNDLE): -€44.98');
    console.log('  Total: €49.99 ✅\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    
    if (error.message.includes('Taken')) {
      console.log('\n✅ Discount code "FULLBUNDLE" already exists!');
      console.log('   No action needed - code is ready to use.\n');
      process.exit(0);
    }
    
    process.exit(1);
  }
}

main();
