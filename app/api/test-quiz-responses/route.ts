import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

// During build time, env vars might not be available
// Use placeholder values that Supabase will accept
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function GET() {
  try {
    console.log('🔍 Testing quiz response retrieval from Supabase...')
    
    const { data, error } = await supabase
      .from('QuizResponse')
      .select('*')
      .limit(10)
    
    if (error) {
      console.error('❌ Error retrieving quiz responses:', error)
      return NextResponse.json({ 
        error: 'Failed to retrieve quiz responses', 
        details: error.message,
        code: error.code
      }, { status: 500 })
    }
    
    console.log(`✅ Retrieved ${data?.length || 0} quiz responses from Supabase`)
    
    return NextResponse.json({ 
      success: true, 
      count: data?.length || 0,
      responses: data 
    })
  } catch (error) {
    console.error("❌ Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : error },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    console.log('🧪 Testing quiz response insertion to Supabase...')
    
    const testData = {
      email: 'test@example.com',
      answers: { test: 'sample answer' },
      birthDate: { month: '03', day: '15', year: '1990' },
      birthPlace: 'Test City',
      birthTime: '14:30',
      firstName: 'Test',
      lastName: 'User',
      gender: 'male',
      coverDesign: 'blue'
    }
    
    const { data, error } = await supabase
      .from('QuizResponse')
      .insert(testData)
      .select()
    
    if (error) {
      console.error('❌ Error inserting test quiz response:', error)
      return NextResponse.json({ 
        error: 'Failed to insert test quiz response', 
        details: error.message,
        code: error.code
      }, { status: 500 })
    }
    
    console.log('✅ Test quiz response inserted successfully:', data)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test quiz response inserted successfully',
      data: data[0]
    })
  } catch (error) {
    console.error("❌ Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : error },
      { status: 500 }
    )
  }
} 