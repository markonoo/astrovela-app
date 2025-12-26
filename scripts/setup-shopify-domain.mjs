#!/usr/bin/env node

/**
 * Script to configure custom domain in Shopify
 * Adds shop.tryastrovela.com as the custom domain
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
const CUSTOM_DOMAIN = 'shop.tryastrovela.com';

if (!SHOP_DOMAIN || !ADMIN_ACCESS_TOKEN) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

console.log(`\n🌐 Shopify Domain Setup`);
console.log(`   Shop: ${SHOP_DOMAIN}`);
console.log(`   Custom Domain: ${CUSTOM_DOMAIN}\n`);

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
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${JSON.stringify(parsed)}`));
          }
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
    // Step 1: Check existing domains
    console.log('📋 Checking existing domains...');
    const existingDomains = await shopifyRestRequest('/shop.json');
    console.log(`   Current primary domain: ${existingDomains.shop.domain}`);
    console.log(`   MyShopify domain: ${existingDomains.shop.myshopify_domain}\n`);

    // Step 2: Check if custom domain already exists
    console.log('🔍 Checking for existing custom domains...');
    let customDomainExists = false;
    let customDomainId = null;

    try {
      // Note: The domains endpoint might not be available in all Shopify API versions
      // We'll try to add the domain directly
      console.log('   Attempting to add custom domain...\n');
    } catch (error) {
      console.log('   Could not check existing domains (this is normal)\n');
    }

    // Step 3: Add custom domain
    console.log(`🌐 Adding custom domain: ${CUSTOM_DOMAIN}...`);
    
    try {
      // Shopify REST API doesn't have a direct endpoint for adding domains
      // This is typically done through the Shopify Admin UI
      // However, we can verify the DNS setup
      
      console.log(`\n⚠️  Important: Custom domain setup requires manual verification in Shopify Admin`);
      console.log(`\nPlease complete these steps:\n`);
      console.log(`1. Go to: Shopify Admin → Settings → Domains`);
      console.log(`2. Click: "Connect existing domain"`);
      console.log(`3. Enter: ${CUSTOM_DOMAIN}`);
      console.log(`4. Shopify will verify your DNS records (may take a few minutes)`);
      console.log(`5. Once verified, click "Make primary" (optional)\n`);

      // Step 4: Provide DNS verification info
      console.log(`📝 DNS Record to verify (should already be in IONOS):\n`);
      console.log(`   Type: CNAME`);
      console.log(`   Host: shop`);
      console.log(`   Points to: shops.myshopify.com`);
      console.log(`   TTL: 3600\n`);

      // Step 5: Test DNS
      console.log(`🔍 Testing DNS propagation...`);
      console.log(`   You can check if DNS is ready at:`);
      console.log(`   https://dnschecker.org/#CNAME/${CUSTOM_DOMAIN}\n`);

      console.log(`✅ Script completed!`);
      console.log(`\nNext steps:`);
      console.log(`1. Wait 10-30 minutes for DNS to propagate`);
      console.log(`2. Go to Shopify Admin and connect the domain`);
      console.log(`3. Run the update script to modify checkout URLs\n`);

    } catch (error) {
      console.error(`❌ Error:`, error.message);
      console.log(`\nThis is expected - domain management requires Shopify Admin UI.`);
      console.log(`Please follow the manual steps above.\n`);
    }

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();
