import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

/**
 * Test Supabase REST API connection (should work from Vercel)
 */
export async function GET(request: NextRequest) {
  const results: any = {
    timestamp: new Date().toISOString(),
    tests: {}
  }

  // Test 1: Check environment variables
  results.envVars = {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) || 'MISSING'
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:20',message:'Environment check',data:results.envVars,timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  // Test 2: Supabase client creation
  try {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    
    results.tests.usingServiceRole = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:31',message:'Creating Supabase client',data:{hasUrl:!!url,hasKey:!!serviceKey,keyType:process.env.SUPABASE_SERVICE_ROLE_KEY ? 'service_role' : 'anon'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    
    const supabase = createClient(url, serviceKey)
    results.tests.clientCreated = true

    // Test 3: Query using Supabase (REST API - uses HTTPS)
    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:42',message:'Before Supabase query',data:{table:'AppEntitlement'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      const { count, error, data } = await supabase
        .from('AppEntitlement')
        .select('*', { count: 'exact', head: true })
      
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:51',message:'After Supabase query',data:{hasError:!!error,count:count,errorDetails:error ? {message:error.message,code:error.code,details:error.details,hint:error.hint} : null},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      if (error) {
        results.tests.supabaseQuery = {
          success: false,
          error: error.message || 'Unknown error',
          errorCode: error.code,
          errorDetails: error.details,
          errorHint: error.hint,
          fullError: JSON.stringify(error)
        }
      } else {
        results.tests.supabaseQuery = {
          success: true,
          count: count
        }
      }
    } catch (queryError) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'test-supabase/route.ts:73',message:'Query exception',data:{error:queryError instanceof Error ? queryError.message : String(queryError),stack:queryError instanceof Error ? queryError.stack : undefined},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      
      results.tests.supabaseQuery = {
        success: false,
        exception: true,
        error: queryError instanceof Error ? queryError.message : String(queryError),
        stack: queryError instanceof Error ? queryError.stack : undefined
      }
    }
  } catch (clientError) {
    results.tests.clientCreated = false
    results.tests.error = clientError instanceof Error ? clientError.message : String(clientError)
  }

  return NextResponse.json(results, { status: 200 })
}
