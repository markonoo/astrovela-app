import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

export async function POST(request: Request) {
  try {
    // Create Supabase client inside function to ensure env vars are loaded
    const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    
    const quizData = await request.json()
    
    console.log('📝 Quiz Submit to Supabase:', {
      email: quizData.email,
      firstName: quizData.firstName,
      lastName: quizData.lastName,
      hasAnswers: !!quizData.answers
    })
    
    const { data, error } = await supabase
      .from('QuizResponse')
      .insert({
        email: quizData.email || '',
        answers: quizData.answers,
        birthDate: quizData.birthDate,
        birthPlace: quizData.birthPlace || '',
        birthTime: quizData.birthTime || '',
        firstName: quizData.firstName || '',
        lastName: quizData.lastName || '',
        gender: quizData.gender || '',
        coverDesign: quizData.coverColorScheme || null
      })
      .select()
    
    if (error) {
      console.error('❌ Supabase quiz submit error:', error)
      throw error
    }
    
    console.log('✅ Quiz submitted successfully to Supabase:', data)
    return NextResponse.json({ success: true, data: data[0] })
  } catch (error) {
    console.error("❌ Error saving quiz data:", error)
    return NextResponse.json(
      { error: "Failed to save quiz data", details: error instanceof Error ? error.message : error },
      { status: 500 }
    )
  }
}
