import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { ErrorMonitor } from '@/utils/error-monitoring';

// Force dynamic rendering (uses Shopify API)
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    console.log('🔍 Testing Shopify connection...');
    
    // Test basic configuration
    if (!SHOPIFY_STOREFRONT_API_ENDPOINT || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      return NextResponse.json({
        success: false,
        status: 'disconnected',
        error: 'Missing Shopify configuration',
        checks: {
          endpoint: !!SHOPIFY_STOREFRONT_API_ENDPOINT,
          token: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        responseTime: Date.now() - startTime,
      });
    }
    
        // Test API connection with minimal query
    const testQuery = `
      query testConnection {
        shop {
          name
          url
          currencyCode
          primaryDomain {
            host
          }
        }
      }
    `;

    // Try Admin API first (since we have an admin token)
    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    const response = await fetch(adminEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: testQuery,
      }),
    });
    
    const responseTime = Date.now() - startTime;
    
    if (!response.ok) {
      return NextResponse.json({
        success: false,
        status: 'error',
        error: `HTTP ${response.status}: ${response.statusText}`,
        checks: {
          endpoint: true,
          token: true,
          network: false,
          authentication: response.status !== 401,
        },
        responseTime,
      });
    }
    
    const result = await response.json();
    
    if (result.errors) {
      return NextResponse.json({
        success: false,
        status: 'error',
        error: `GraphQL Error: ${result.errors[0].message}`,
        checks: {
          endpoint: true,
          token: true,
          network: true,
          authentication: false,
        },
        responseTime,
      });
    }
    
    const shop = result.data?.shop;
    
    console.log('✅ Shopify connection successful');
    
    return NextResponse.json({
      success: true,
      status: 'connected',
      shop: {
        name: shop?.name || 'Unknown',
        url: shop?.url || 'Unknown',
        domain: shop?.primaryDomain?.host || 'Unknown',
        currency: shop?.currencyCode || 'USD',
      },
      checks: {
        endpoint: true,
        token: true,
        network: true,
        authentication: true,
      },
      responseTime,
    });
    
  } catch (error: any) {
    console.error('❌ Shopify connection error:', error);
    
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: {
        endpoint: '/api/shopify/connection',
        method: 'GET',
        shopifyEndpoint: SHOPIFY_STOREFRONT_API_ENDPOINT
      },
      severity: 'medium'
    });
    
    return NextResponse.json({
      success: false,
      status: 'error',
      error: error.message || 'Connection failed',
      checks: {
        endpoint: !!SHOPIFY_STOREFRONT_API_ENDPOINT,
        token: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        network: false,
        authentication: false,
      },
      responseTime: Date.now() - startTime,
    });
  }
} 