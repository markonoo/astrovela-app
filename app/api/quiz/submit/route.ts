import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'
import { logger } from '@/utils/logger'
import { validateRequest, quizSubmitSchema, sanitizeObject } from '@/lib/validation'
import { encryptBirthData } from '@/lib/encryption'

export async function POST(request: Request) {
  try {
    // Create Supabase client inside function to ensure env vars are loaded
    // During build time, env vars might not be available - use placeholder values
    const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    const rawData = await request.json()
    
    // Validate input
    const validation = validateRequest(quizSubmitSchema, rawData)
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Invalid input data', 
          details: validation.details?.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
        },
        { status: 400 }
      )
    }
    
    // Sanitize and use validated data
    const quizData = sanitizeObject(validation.data)
    
    // Support both camelCase and snake_case for backward compatibility
    const sessionId = quizData.sessionId || quizData.session_id
    
    logger.info('Quiz submission received', {
      email: quizData.email,
      firstName: quizData.firstName,
      lastName: quizData.lastName,
      sessionId: sessionId,
      hasBirthDate: !!quizData.birthDate,
      coverDesign: quizData.coverDesign,
      hasAnswers: !!quizData.answers
    })
    
    // Encrypt sensitive birth data if encryption is enabled
    const useEncryption = process.env.ENCRYPT_SENSITIVE_DATA === 'true'
    const birthDateToStore = useEncryption && quizData.birthDate
      ? encryptBirthData(quizData.birthDate)
      : quizData.birthDate
    
    const { data, error } = await supabase
      .from('QuizResponse')
      .insert({
        email: quizData.email || '',
        answers: quizData.answers,
        birthDate: birthDateToStore,
        birthPlace: quizData.birthPlace || '',
        birthTime: quizData.birthTime || '',
        firstName: quizData.firstName || '',
        lastName: quizData.lastName || '',
        gender: quizData.gender || '',
        coverDesign: quizData.coverDesign || null,
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
    
    // Extract detailed error information
    let errorDetails = 'Unknown error';
    let supabaseError = null;
    
    if (error instanceof Error) {
      errorDetails = error.message;
    } else if (error && typeof error === 'object') {
      // Handle Supabase error object
      const err = error as any;
      errorDetails = err.message || err.details || JSON.stringify(err);
      supabaseError = err;
    } else if (typeof error === 'string') {
      errorDetails = error;
    }
    
    return NextResponse.json(
      { 
        error: "Failed to save quiz data", 
        details: errorDetails,
        supabaseError: supabaseError,
        errorType: typeof error,
        errorConstructor: error?.constructor?.name
      },
      { status: 500 }
    )
  }
}
