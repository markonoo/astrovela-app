import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

/**
 * Fix Supabase schema permissions for service role
 */
export async function POST(request: NextRequest) {
  const results: any = {
    timestamp: new Date().toISOString(),
    steps: []
  }

  // Get environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const secretKey = process.env.SUPABASE_SECRET_KEY || '';

  // Validate JWT format
  const isServiceRoleKeyJWT = serviceRoleKey.startsWith('eyJ');
  const isSecretKeyJWT = secretKey.startsWith('eyJ');
  const serviceKey = (secretKey && isSecretKeyJWT) ? secretKey : serviceRoleKey;

  if (!serviceKey) {
    return NextResponse.json({
      error: 'No valid service role key found'
    }, { status: 500 })
  }

  // Create admin client
  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  })

  results.steps.push({
    step: 'Created Supabase client',
    success: true
  })

  // SQL to grant permissions
  const permissionSQL = `
    -- Grant schema usage
    GRANT USAGE ON SCHEMA public TO service_role;
    GRANT USAGE ON SCHEMA public TO authenticated;
    GRANT USAGE ON SCHEMA public TO anon;

    -- Grant table permissions
    GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
    GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
    GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

    -- Set default privileges for future objects
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO service_role;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;
  `;

  try {
    // Execute via Supabase RPC
    const { data, error } = await supabase.rpc('exec_sql', { 
      sql_query: permissionSQL 
    })

    if (error) {
      results.steps.push({
        step: 'Attempted to execute SQL via RPC',
        success: false,
        error: error.message,
        hint: 'exec_sql function does not exist - need to run SQL manually'
      })

      // Provide manual instructions
      results.manualInstructions = {
        message: 'Please run this SQL in your Supabase SQL Editor',
        steps: [
          '1. Go to https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/sql/new',
          '2. Copy and paste the SQL below',
          '3. Click "Run" to execute'
        ],
        sql: permissionSQL
      }
    } else {
      results.steps.push({
        step: 'Executed permission grants',
        success: true,
        data: data
      })
    }
  } catch (error) {
    results.steps.push({
      step: 'SQL execution failed',
      success: false,
      error: error instanceof Error ? error.message : String(error)
    })

    // Provide manual instructions as fallback
    results.manualInstructions = {
      message: 'Automatic fix failed - please run this SQL in your Supabase SQL Editor',
      steps: [
        '1. Go to https://supabase.com/dashboard/project/zzkvjfqjojerhwmkfdfn/sql/new',
        '2. Copy and paste the SQL below',
        '3. Click "Run" to execute'
      ],
      sql: permissionSQL
    }
  }

  // Test if permissions are now fixed
  try {
    const { count, error } = await supabase
      .from('AppEntitlement')
      .select('*', { count: 'exact', head: true })

    if (error) {
      results.verificationTest = {
        success: false,
        error: error.message,
        hint: 'Permissions still not fixed - run the SQL manually'
      }
    } else {
      results.verificationTest = {
        success: true,
        count: count,
        message: '✅ Permissions fixed! Service role can now access the database.'
      }
    }
  } catch (error) {
    results.verificationTest = {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }

  return NextResponse.json(results, { status: 200 })
}
