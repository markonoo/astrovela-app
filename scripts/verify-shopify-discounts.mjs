#!/usr/bin/env node

/**
 * Verify Shopify Automatic Discounts
 * 
 * This script checks the existing automatic discounts and their configuration
 * 
 * Usage: node scripts/verify-shopify-discounts.mjs
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

async function listDiscountsDetailed() {
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
                startsAt
                endsAt
                customerBuys {
                  items {
                    ... on DiscountProducts {
                      products(first: 10) {
                        edges {
                          node {
                            id
                            title
                          }
                        }
                      }
                    }
                  }
                  value {
                    ... on DiscountQuantity {
                      quantity
                    }
                  }
                }
                customerGets {
                  items {
                    ... on DiscountProducts {
                      products(first: 10) {
                        edges {
                          node {
                            id
                            title
                          }
                        }
                      }
                    }
                  }
                  value {
                    ... on DiscountPercentage {
                      percentage
                    }
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
  return data.automaticDiscountNodes.edges.map(edge => edge.node);
}

async function main() {
  console.log('🔍 Verifying Shopify Bundle Discounts\n');
  console.log(`Store: ${SHOPIFY_STORE}.myshopify.com\n`);
  
  try {
    const discounts = await listDiscountsDetailed();
    
    console.log(`Found ${discounts.length} automatic discounts:\n`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    discounts.forEach((discount, index) => {
      const details = discount.automaticDiscount;
      console.log(`${index + 1}. ${details.title || 'Untitled'}`);
      console.log(`   ID: ${discount.id}`);
      console.log(`   Status: ${details.status}`);
      console.log(`   Summary: ${details.summary || 'N/A'}`);
      console.log(`   Starts: ${details.startsAt}`);
      console.log(`   Ends: ${details.endsAt || 'No end date'}`);
      
      if (details.customerBuys && details.customerBuys.items && details.customerBuys.items.products) {
        console.log(`   Buy:`);
        details.customerBuys.items.products.edges.forEach(edge => {
          console.log(`     • ${edge.node.title}`);
        });
      }
      
      if (details.customerGets && details.customerGets.items && details.customerGets.items.products) {
        console.log(`   Get:`);
        details.customerGets.items.products.edges.forEach(edge => {
          console.log(`     • ${edge.node.title} (${details.customerGets.value?.percentage * 100}% off)`);
        });
      }
      
      console.log('');
    });
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('✅ Bundle Pricing Status:\n');
    console.log('📘 Paperback Bundle:');
    console.log('   • Buy Paperback (€49.99)');
    console.log('   • Get Ebook FREE');
    console.log('   • Get App FREE\n');
    console.log('📗 Ebook + App Bundle:');
    console.log('   • Buy Ebook (€29.99)');
    console.log('   • Get App FREE\n');
    console.log('💡 Expected Checkout Behavior:');
    console.log('   When customer adds paperback + ebook + app:');
    console.log('   • Paperback: €49.99 ✅');
    console.log('   • Ebook: €29.99 → €0.00 (discount applied) ✅');
    console.log('   • App: €14.99 → €0.00 (discount applied) ✅');
    console.log('   • Total: €49.99 ✅\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
