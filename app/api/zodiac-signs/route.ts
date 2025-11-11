import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { env, devError } from '@/utils/environment'

// During build time, env vars might not be available
// Use placeholder values that Supabase will accept
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Support both camelCase and snake_case for backward compatibility
    const { email, sessionId, session_id } = body
    const finalSessionId = sessionId || session_id

    if (!email && !finalSessionId) {
      return NextResponse.json(
        { error: 'Email or sessionId is required' },
        { status: 400 }
      )
    }

    // Query NatalChartInterpretation table for sun and moon signs
    let query = supabase
      .from('NatalChartInterpretation')
      .select('sun_sign, moon_sign')

    if (email) {
      query = query.eq('email', email)
    } else if (finalSessionId) {
      query = query.eq('session_id', finalSessionId) // Database uses snake_case
    }

    // Get the most recent record
    query = query.order('created_at', { ascending: false }).limit(1)

    const { data, error } = await query

    if (error) {
      devError('Supabase error:', error)
      
      // Check if it's a permission error and provide helpful response
      if (error.code === '42501') {
        return NextResponse.json(
          { 
            error: 'Database access permission denied. Please check RLS policies.',
            sunSign: null, 
            moonSign: null 
          },
          { status: 200 } // Return 200 with null values instead of error
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to fetch zodiac signs from database' },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { sunSign: null, moonSign: null },
        { status: 200 }
      )
    }

    const record = data[0]
    return NextResponse.json({
      sunSign: record.sun_sign,
      moonSign: record.moon_sign
    })

  } catch (error) {
    devError('Error in zodiac-signs API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 