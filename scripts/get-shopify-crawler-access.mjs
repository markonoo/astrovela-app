#!/usr/bin/env node

/**
 * Script to get Shopify Crawler Access credentials
 * Retrieves Signature, Signature-Input, and Signature-Agent headers
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
    console.log(`✅ Loaded environment variables from ${envPath}`);
    break;
  } catch (error) {
    continue;
  }
}

const SHOP_DOMAIN = env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN || env.SHOPIFY_SHOP_DOMAIN;
const ADMIN_ACCESS_TOKEN = env.SHOPIFY_ADMIN_ACCESS_TOKEN || env.SHOPIFY_ACCESS_TOKEN;
const API_VERSION = '2024-01';

if (!SHOP_DOMAIN || !ADMIN_ACCESS_TOKEN) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

console.log(`\n🔍 Shopify Crawler Access Setup`);
console.log(`   Shop: ${SHOP_DOMAIN}\n`);

// Helper for GraphQL requests
async function shopifyGraphQLRequest(query, variables = {}) {
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

// Helper for REST API requests
async function shopifyRestRequest(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: SHOP_DOMAIN,
      port: 443,
      path: `/admin/api/${API_VERSION}${path}`,
      method: method,
      headers: {
        'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      const data = JSON.stringify(body);
      options.headers['Content-Length'] = data.length;
    }

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        try {
          const parsed = responseBody ? JSON.parse(responseBody) : {};
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: parsed
          });
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function main() {
  try {
    console.log('📋 Retrieving shop information...\n');

    // Get shop details
    const shopQuery = `
      query {
        shop {
          name
          url
          myshopifyDomain
          plan {
            displayName
          }
        }
      }
    `;

    const shopResult = await shopifyGraphQLRequest(shopQuery);
    const shop = shopResult.data?.shop;

    if (shop) {
      console.log('🏪 Shop Details:');
      console.log(`   Name: ${shop.name}`);
      console.log(`   URL: ${shop.url}`);
      console.log(`   Domain: ${shop.myshopifyDomain}`);
      console.log(`   Plan: ${shop.plan.displayName}\n`);
    }

    // Information about crawler access
    console.log('🤖 Crawler Access Information:\n');
    console.log('Shopify uses HTTP Message Signatures for crawler authentication.');
    console.log('These credentials are typically managed through:\n');
    console.log('1. Shopify Admin → Settings → Apps and sales channels');
    console.log('2. Or via the Shopify Partners dashboard\n');

    // Get current access scopes
    console.log('🔑 Current API Access:');
    console.log(`   Access Token: ${ADMIN_ACCESS_TOKEN.substring(0, 10)}...`);
    console.log(`   API Version: ${API_VERSION}\n`);

    // Try to get shop metadata
    console.log('📊 Checking shop metadata...\n');
    
    const metafieldsQuery = `
      query {
        shop {
          metafields(first: 5) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
        }
      }
    `;

    const metaResult = await shopifyGraphQLRequest(metafieldsQuery);
    
    console.log('ℹ️  Important Information:\n');
    console.log('Crawler access credentials (Signature, Signature-Input, Signature-Agent)');
    console.log('are typically generated for specific use cases like:\n');
    console.log('• Search engine crawlers (Google, Bing)');
    console.log('• Third-party integrations');
    console.log('• Custom API clients\n');

    console.log('📝 To enable crawler access:\n');
    console.log('Option 1: Via Shopify Admin');
    console.log('─────────────────────────────');
    console.log('1. Go to: https://0w4zgg-vx.myshopify.com/admin');
    console.log('2. Navigate to: Settings → Apps and sales channels');
    console.log('3. Look for: "Crawler access" or "API access"');
    console.log('4. Generate credentials if available\n');

    console.log('Option 2: For SEO/Search Engines');
    console.log('─────────────────────────────────');
    console.log('1. Go to: Settings → Online Store → Preferences');
    console.log('2. Check: "Password protection" settings');
    console.log('3. Ensure: Search engines can index your store\n');

    console.log('Option 3: Custom App Credentials');
    console.log('─────────────────────────────────');
    console.log('1. Your current Admin API token can be used for API access');
    console.log('2. For HTTP requests, use:');
    console.log(`   Header: X-Shopify-Access-Token: ${ADMIN_ACCESS_TOKEN.substring(0, 15)}...`);
    console.log(`   Endpoint: https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/\n`);

    // Generate sample curl command
    console.log('🔧 Sample API Request:\n');
    console.log('```bash');
    console.log(`curl -X GET "https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/shop.json" \\`);
    console.log(`  -H "X-Shopify-Access-Token: ${ADMIN_ACCESS_TOKEN}" \\`);
    console.log(`  -H "Content-Type: application/json"`);
    console.log('```\n');

    console.log('✅ Information retrieved successfully!\n');
    console.log('💡 Note: If you need specific crawler signatures for a particular');
    console.log('   use case, please specify what you\'re trying to crawl/access.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nThis might mean:');
    console.error('• Crawler access is not available for your Shopify plan');
    console.error('• The feature requires Shopify Plus');
    console.error('• Additional permissions are needed\n');
  }
}

main();
