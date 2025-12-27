#!/usr/bin/env node

/**
 * Create Shopify Discount Code for Full Bundle
 * 
 * Creates a discount code that gives the full bundle at correct price.
 * This works around the limitation of automatic BXGY discounts.
 * 
 * Usage: node scripts/create-bundle-discount-code.mjs
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
          }
        }
      }
    }
  `;
  
  const data = await shopifyRequest(query);
  return data.products.edges.map(edge => edge.node);
}

/**
 * Delete existing automatic discount
 */
async function deleteDiscount(discountId) {
  const mutation = `
    mutation discountAutomaticDelete($id: ID!) {
      discountAutomaticDelete(id: $id) {
        deletedAutomaticDiscountId
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  try {
    await shopifyRequest(mutation, { id: discountId });
    return true;
  } catch (error) {
    console.error(`Failed to delete: ${error.message}`);
    return false;
  }
}

/**
 * Create automatic discount with quantity trigger
 */
async function createQuantityDiscount(title, productIds, discountAmount) {
  const mutation = `
    mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        automaticAppDiscount {
          discountId
          title
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  // Note: This requires a Shopify Function to be deployed
  // For now, we'll use a simpler approach with discount codes
  
  console.log('⚠️  Shopify Functions require app deployment');
  console.log('   Using discount code approach instead...\n');
  
  return null;
}

/**
 * Create automatic discount that applies to cart value
 */
async function createCartValueDiscount() {
  // This would give a fixed amount discount when all 3 products are in cart
  // But we need to detect which products are in cart first
  
  const mutation = `
    mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
      discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
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
    automaticBasicDiscount: {
      title: "AstroVela Full Bundle - Save €44.98",
      startsAt: new Date().toISOString(),
      minimumRequirement: {
        quantity: {
          greaterThanOrEqualToQuantity: "3"
        }
      },
      customerGets: {
        value: {
          discountAmount: {
            amount: "44.98",
            appliesOnEachItem: false
          }
        },
        items: {
          all: true
        }
      }
    }
  };
  
  try {
    const data = await shopifyRequest(mutation, variables);
    
    if (data.discountAutomaticBasicCreate.userErrors.length > 0) {
      throw new Error(JSON.stringify(data.discountAutomaticBasicCreate.userErrors));
    }
    
    return data.discountAutomaticBasicCreate.automaticDiscountNode;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🔧 Fixing Bundle Discount Logic\n');
  console.log(`Store: ${SHOPIFY_STORE}.myshopify.com\n`);
  
  try {
    console.log('📝 Issue: When all 3 items in cart, app shows €14.99 instead of FREE\n');
    console.log('🎯 Solution: Create additional discount for 3-item bundle\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Approach 1: Create a cart-value based discount
    console.log('Approach: Fixed amount discount when cart has 3+ items\n');
    console.log('Creating discount: "Full Bundle - Save €44.98"...\n');
    
    const discount = await createCartValueDiscount();
    
    if (discount) {
      console.log('✅ Created cart-value discount!');
      console.log(`   ID: ${discount.id}`);
      console.log(`   Title: ${discount.automaticDiscount.title}`);
      console.log(`   Status: ${discount.automaticDiscount.status}\n`);
    } else {
      console.log('⚠️  Cart-value approach has limitations\n');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('💡 Recommended Solution:\n');
    console.log('Use Shopify discount stacking or modify code to apply');
    console.log('an automatic discount code at checkout.\n');
    console.log('Alternative: Use Shopify Scripts (Shopify Plus) or');
    console.log('Shopify Functions (requires app deployment)\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
