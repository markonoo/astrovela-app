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

  // Test 1: Check environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  results.envVars = {
    hasSupabaseUrl: !!supabaseUrl,
    hasServiceRoleKey: !!serviceKey,
    hasAnonKey: !!anonKey,
    supabaseUrlPrefix: supabaseUrl.substring(0, 30) || 'MISSING',
    serviceKeyPrefix: serviceKey ? serviceKey.substring(0, 20) + '...' : 'MISSING',
    anonKeyPrefix: anonKey ? anonKey.substring(0, 20) + '...' : 'MISSING'
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

    // Test 3: Direct REST API call to see raw response
    try {
      const restUrl = `${supabaseUrl}/rest/v1/AppEntitlement?select=count&head=true`
      
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:58',message:'Making direct REST call',data:{url:restUrl},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion

      const restResponse = await fetch(restUrl, {
        method: 'GET',
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'count=exact'
        }
      })

      const restStatus = restResponse.status
      const restHeaders = Object.fromEntries(restResponse.headers.entries())
      let restBody = null
      try {
        restBody = await restResponse.text()
      } catch (e) {
        restBody = 'Could not read response body'
      }

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:82',message:'REST response received',data:{status:restStatus,contentRange:restHeaders['content-range'],bodyLength:restBody?.length || 0},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion

      results.tests.directRestCall = {
        status: restStatus,
        statusText: restResponse.statusText,
        contentRange: restHeaders['content-range'],
        body: restBody,
        success: restStatus >= 200 && restStatus < 300
      }
    } catch (restError) {
      results.tests.directRestCall = {
        error: restError instanceof Error ? restError.message : String(restError)
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
