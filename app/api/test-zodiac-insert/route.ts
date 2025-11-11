import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// During build time, env vars might not be available
// Use placeholder values that Supabase will accept
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: NextRequest) {
  try {
    console.log('Testing zodiac sign insertion...')
    
    // Test insertion with sample data
    const testData = {
      session_id: `test_${Date.now()}`,
      sun_sign: 'aries',
      moon_sign: 'taurus',
      created_at: new Date().toISOString(),
    }
    
    console.log('Attempting to insert test data:', testData)
    
    const { data, error } = await supabase
      .from('NatalChartInterpretation')
      .insert([testData])
      .select()
    
    if (error) {
      console.error('Supabase insertion error:', error)
      return NextResponse.json({ 
        success: false, 
        error: error.message,
        details: error,
        tableName: 'NatalChartInterpretation'
      })
    }
    
    console.log('Successfully inserted test data:', data)
    
    return NextResponse.json({ 
      success: true, 
      insertedData: data,
      message: 'Test zodiac sign data inserted successfully'
    })
    
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    console.log('Testing zodiac sign retrieval...')
    
    // Test retrieval
    const { data, error } = await supabase
      .from('NatalChartInterpretation')
      .select('session_id, sun_sign, moon_sign, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
    
    if (error) {
      console.error('Supabase retrieval error:', error)
      return NextResponse.json({ 
        success: false, 
        error: error.message,
        details: error,
        tableName: 'NatalChartInterpretation'
      })
    }
    
    console.log('Successfully retrieved data:', data)
    
    return NextResponse.json({ 
      success: true, 
      data,
      count: data?.length || 0,
      message: 'Zodiac sign data retrieved successfully'
    })
    
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 