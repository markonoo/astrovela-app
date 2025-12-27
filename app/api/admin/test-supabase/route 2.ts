import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

/**
 * Test Supabase REST API connection with proper service role setup
 */
export async function GET(request: NextRequest) {
  const results: any = {
    timestamp: new Date().toISOString(),
    tests: {}
  }

  // Test 1: Check ALL Supabase environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const secretKey = process.env.SUPABASE_SECRET_KEY || '';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || '';

  // Validate JWT format (real service keys start with 'eyJ')
  const isServiceRoleKeyJWT = serviceRoleKey.startsWith('eyJ');
  const isSecretKeyJWT = secretKey.startsWith('eyJ');
  const isAnonKeyJWT = anonKey.startsWith('eyJ');

  // Determine which service key to use (prefer JWT format)
  const serviceKey = (secretKey && isSecretKeyJWT) ? secretKey : serviceRoleKey;

  results.envVars = {
    hasSupabaseUrl: !!supabaseUrl,
    hasServiceRoleKey: !!serviceRoleKey,
    hasSecretKey: !!secretKey,
    hasAnonKey: !!anonKey,
    hasPublishableKey: !!publishableKey,
    usingKey: secretKey ? 'SUPABASE_SECRET_KEY' : serviceRoleKey ? 'SUPABASE_SERVICE_ROLE_KEY' : 'NONE',
    supabaseUrlPrefix: supabaseUrl.substring(0, 30) || 'MISSING',
    serviceKeyPrefix: serviceKey ? serviceKey.substring(0, 20) + '...' : 'MISSING',
    serviceRoleKeyFormat: serviceRoleKey ? (isServiceRoleKeyJWT ? 'JWT (valid)' : 'NOT JWT (invalid!)') : 'MISSING',
    secretKeyFormat: secretKey ? (isSecretKeyJWT ? 'JWT (valid)' : 'NOT JWT (invalid!)') : 'MISSING',
    anonKeyFormat: anonKey ? (isAnonKeyJWT ? 'JWT (valid)' : 'NOT JWT (invalid!)') : 'MISSING',
    keysMatch: serviceRoleKey && secretKey ? serviceRoleKey === secretKey : null
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:26',message:'Environment check',data:{hasUrl:!!supabaseUrl,hasServiceKey:!!serviceKey,hasAnonKey:!!anonKey},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  // Test 2: Create proper server-only admin client (bypasses RLS)
  if (!serviceKey) {
    results.tests.error = 'SUPABASE_SERVICE_ROLE_KEY is missing in Vercel environment'
    return NextResponse.json(results, { status: 200 })
  }

  try {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:40',message:'Creating admin client with service role',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
    // #endregion

    // Create ADMIN client with service role key (bypasses RLS)
    const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    })
    results.tests.adminClientCreated = true

    // Test 3: Try multiple tables to see if ANY work
    const tablesToTest = ['AppEntitlement', 'User', 'QuizResponse', 'ChartImage'];
    results.tests.tableAccess = {};
    
    for (const table of tablesToTest) {
      try {
        const restUrl = `${supabaseUrl}/rest/v1/${table}?select=id&limit=1`;
        
        const restResponse = await fetch(restUrl, {
          method: 'GET',
          headers: {
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`,
            'Content-Type': 'application/json'
          }
        });

        let restBody = '';
        try {
          restBody = await restResponse.text();
        } catch (e) {
          restBody = 'Could not read response body';
        }

        results.tests.tableAccess[table] = {
          status: restResponse.status,
          statusText: restResponse.statusText,
          body: restBody.substring(0, 200),
          success: restResponse.status >= 200 && restResponse.status < 300
        };
      } catch (error) {
        results.tests.tableAccess[table] = {
          error: error instanceof Error ? error.message : String(error)
        };
      }
    }

    // Test 3b: Try to list all tables via OpenAPI endpoint
    try {
      const openApiUrl = `${supabaseUrl}/rest/v1/`;
      const openApiResponse = await fetch(openApiUrl, {
        method: 'GET',
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Accept': 'application/openapi+json'
        }
      });

      if (openApiResponse.ok) {
        const openApiData = await openApiResponse.json();
        results.tests.availableTables = Object.keys(openApiData.definitions || {});
      } else {
        results.tests.availableTables = {
          error: `Status ${openApiResponse.status}: ${openApiResponse.statusText}`
        };
      }
    } catch (error) {
      results.tests.availableTables = {
        error: error instanceof Error ? error.message : String(error)
      };
    }

    // Test 3b: Test with anon key (should work for basic connectivity)
    if (anonKey) {
      try {
        const restUrl = `${supabaseUrl}/rest/v1/AppEntitlement`
        
        const restResponse = await fetch(restUrl, {
          method: 'HEAD',
          headers: {
            'apikey': anonKey,
            'Authorization': `Bearer ${anonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'count=exact'
          }
        })

        results.tests.anonKeyTest = {
          testedKey: 'ANON_KEY (should work, may hit RLS)',
          status: restResponse.status,
          statusText: restResponse.statusText,
          contentRange: Object.fromEntries(restResponse.headers.entries())['content-range'],
          success: restResponse.status >= 200 && restResponse.status < 300
        }
      } catch (anonError) {
        results.tests.anonKeyTest = {
          error: anonError instanceof Error ? anonError.message : String(anonError)
        }
      }
    }

    // Test 3c: Test with fresh Supabase key from Dashboard
    // Try to parse JWT to check claims
    try {
      const jwtParts = serviceKey.split('.');
      if (jwtParts.length === 3) {
        // Decode JWT payload (middle part)
        const payload = JSON.parse(Buffer.from(jwtParts[1], 'base64').toString());
        results.tests.jwtClaims = {
          role: payload.role,
          iss: payload.iss,
          iat: payload.iat,
          exp: payload.exp,
          isExpired: payload.exp ? Date.now() / 1000 > payload.exp : false
        }
      }
    } catch (jwtError) {
      results.tests.jwtClaims = {
        error: 'Could not parse JWT'
      }
    }

    // Test 4: Query using Supabase client
    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:105',message:'Before Supabase client query',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      const { count, error, status, statusText } = await supabaseAdmin
        .from('AppEntitlement')
        .select('*', { count: 'exact', head: true })
      
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:114',message:'After Supabase client query',data:{hasError:!!error,count:count,status:status,statusText:statusText},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      if (error) {
        results.tests.supabaseQuery = {
          success: false,
          error: error.message || 'Unknown error',
          errorCode: error.code,
          errorDetails: error.details,
          errorHint: error.hint,
          status: status,
          statusText: statusText,
          fullError: JSON.stringify(error)
        }
      } else {
        results.tests.supabaseQuery = {
          success: true,
          count: count,
          status: status
        }
      }
    } catch (queryError) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:138',message:'Query exception',data:{error:queryError instanceof Error ? queryError.message : String(queryError)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      results.tests.supabaseQuery = {
        success: false,
        exception: true,
        error: queryError instanceof Error ? queryError.message : String(queryError)
      }
    }
  } catch (clientError) {
    results.tests.adminClientCreated = false
    results.tests.error = clientError instanceof Error ? clientError.message : String(clientError)
  }

  return NextResponse.json(results, { status: 200 })
}
