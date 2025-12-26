#!/usr/bin/env node

/**
 * Script to upload AstroVela logo to Shopify
 * Uses Admin API to add logo to theme assets
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

console.log(`\n🎨 Shopify Logo Upload`);
console.log(`   Shop: ${SHOP_DOMAIN}\n`);

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
    // Step 1: Get active theme
    console.log('📦 Getting active theme...');
    const themesResponse = await shopifyRestRequest('/themes.json');
    const activeTheme = themesResponse.themes.find(t => t.role === 'main');
    
    if (!activeTheme) {
      console.error('❌ No active theme found');
      return;
    }

    console.log(`   Active theme: ${activeTheme.name} (ID: ${activeTheme.id})\n`);

    // Step 2: Read logo file
    console.log('📄 Reading logo file...');
    const logoPath = join(__dirname, '../public/favicon.svg');
    let logoContent;
    
    try {
      logoContent = readFileSync(logoPath, 'utf-8');
      console.log(`   ✅ Logo loaded (${logoContent.length} bytes)\n`);
    } catch (error) {
      console.error(`   ❌ Could not read logo file: ${error.message}`);
      return;
    }

    // Step 3: Upload logo as theme asset
    console.log('📤 Uploading logo to theme assets...');
    
    const assetKey = 'assets/astrovela-logo.svg';
    const assetBody = {
      asset: {
        key: assetKey,
        value: logoContent
      }
    };

    try {
      await shopifyRestRequest(`/themes/${activeTheme.id}/assets.json`, 'PUT', assetBody);
      console.log(`   ✅ Logo uploaded successfully!\n`);
    } catch (error) {
      console.error(`   ❌ Upload failed: ${error.message}\n`);
    }

    // Step 4: Get theme settings
    console.log('⚙️  Checking theme settings...');
    
    try {
      const settingsResponse = await shopifyRestRequest(`/themes/${activeTheme.id}/assets.json?asset[key]=config/settings_data.json`);
      
      if (settingsResponse.asset) {
        console.log(`   ✅ Theme settings retrieved\n`);
        
        // Parse settings
        const settings = JSON.parse(settingsResponse.asset.value);
        
        // Update logo in settings
        console.log('🔧 Updating theme settings with logo...');
        
        // Common logo setting paths in Shopify themes
        const logoSettings = {
          'header': {
            'logo': 'astrovela-logo.svg'
          }
        };

        // Merge with existing settings
        if (settings.current) {
          if (!settings.current.sections) {
            settings.current.sections = {};
          }
          if (!settings.current.sections.header) {
            settings.current.sections.header = {};
          }
          if (!settings.current.sections.header.settings) {
            settings.current.sections.header.settings = {};
          }
          
          settings.current.sections.header.settings.logo = assetKey;
        }

        // Upload updated settings
        try {
          const updateBody = {
            asset: {
              key: 'config/settings_data.json',
              value: JSON.stringify(settings, null, 2)
            }
          };
          
          await shopifyRestRequest(`/themes/${activeTheme.id}/assets.json`, 'PUT', updateBody);
          console.log(`   ✅ Theme settings updated!\n`);
        } catch (error) {
          console.log(`   ⚠️  Could not auto-update settings: ${error.message}`);
          console.log(`   💡 You may need to manually select the logo in theme editor\n`);
        }
      }
    } catch (error) {
      console.log(`   ⚠️  Could not access theme settings: ${error.message}\n`);
    }

    // Step 5: Provide manual instructions
    console.log('📋 Next Steps:\n');
    console.log('The logo has been uploaded to your theme assets.');
    console.log('To display it, you may need to:\n');
    console.log('1. Go to: Shopify Admin → Online Store → Themes');
    console.log('2. Click: Customize on your active theme');
    console.log('3. Click: Header section');
    console.log('4. Look for: Logo or Logo image setting');
    console.log('5. Select: astrovela-logo.svg from the dropdown');
    console.log('6. Adjust size if needed (40-60px recommended)');
    console.log('7. Click: Save\n');

    console.log('✅ Logo upload complete!\n');

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
