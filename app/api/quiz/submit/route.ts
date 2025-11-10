import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'
import { logger } from '@/utils/logger'

export async function POST(request: Request) {
  try {
    // Create Supabase client inside function to ensure env vars are loaded
    const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    
    const quizData = await request.json()
    
    // Support both camelCase and snake_case for backward compatibility
    const sessionId = quizData.sessionId || quizData.session_id
    
    logger.info('Quiz submission received', {
      email: quizData.email,
      firstName: quizData.firstName,
      lastName: quizData.lastName,
      sessionId: sessionId,
      hasBirthDate: !!quizData.birthDate,
      coverColorScheme: quizData.coverColorScheme,
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
        coverDesign: quizData.coverColorScheme || null, // Transform: coverColorScheme → coverDesign (database field)
        session_id: sessionId || null, // Database uses snake_case
        userId: quizData.userId || null
      })
      .select()
    
    if (error) {
      logger.error('Failed to submit quiz to Supabase', error)
      throw error
    }
    
    logger.info('Quiz submitted successfully', { quizResponseId: data[0]?.id })
    return NextResponse.json({ success: true, data: data[0] })
  } catch (error) {
    logger.error("Failed to save quiz data", error)
    return NextResponse.json(
      { error: "Failed to save quiz data", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
