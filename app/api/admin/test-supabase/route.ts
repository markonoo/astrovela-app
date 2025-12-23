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

  // Test 1: Supabase client creation
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )
    results.tests.clientCreated = true

    // Test 2: Query using Supabase (REST API - uses HTTPS)
    try {
      const { count, error } = await supabase
        .from('AppEntitlement')
        .select('*', { count: 'exact', head: true })
      
      if (error) {
        results.tests.supabaseQuery = {
          success: false,
          error: error.message,
          code: error.code
        }
      } else {
        results.tests.supabaseQuery = {
          success: true,
          count: count
        }
      }
    } catch (queryError) {
      results.tests.supabaseQuery = {
        success: false,
        error: queryError instanceof Error ? queryError.message : String(queryError)
      }
    }
  } catch (clientError) {
    results.tests.clientCreated = false
    results.tests.error = clientError instanceof Error ? clientError.message : String(clientError)
  }

  return NextResponse.json(results, { status: 200 })
}
