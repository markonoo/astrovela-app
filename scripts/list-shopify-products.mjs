#!/usr/bin/env node

/**
 * List all Shopify products
 */

import https from 'https';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const envPaths = [join(__dirname, '../.env'), join(__dirname, '../.env.local')];
let env = { ...process.env };

for (const envPath of envPaths) {
  try {
    const envFile = readFileSync(envPath, 'utf-8');
    envFile.split('\n').forEach(line => {
      if (!line || line.trim().startsWith('#')) return;
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length) {
        env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
      }
    });
    break;
  } catch (error) {
    continue;
  }
}

const SHOP_DOMAIN = env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || env.SHOPIFY_SHOP_DOMAIN;
const ADMIN_ACCESS_TOKEN = env.SHOPIFY_ADMIN_ACCESS_TOKEN || env.SHOPIFY_ACCESS_TOKEN;
const API_VERSION = '2024-01';

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
          resolve(JSON.parse(body));
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

async function main() {
  console.log('\n📦 All Shopify Products:\n');
  
  const query = `
    query {
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            status
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

  const result = await shopifyRequest(query);
  const products = result.data?.products?.edges || [];
  
  console.log(`Found ${products.length} total products:\n`);
  
  products.forEach((edge, index) => {
    const p = edge.node;
    const price = p.variants.edges[0]?.node.price || 'N/A';
    const hasImage = p.images.edges.length > 0;
    
    console.log(`${index + 1}. ${p.title}`);
    console.log(`   Handle: ${p.handle}`);
    console.log(`   Status: ${p.status}`);
    console.log(`   Price: €${price}`);
    console.log(`   Image: ${hasImage ? '✅' : '❌'}`);
    console.log();
  });
}

main();
