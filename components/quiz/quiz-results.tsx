"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign, zodiacDescriptions } from "@/utils/zodiac"
import Link from "next/link"
import { useEffect, useState, useMemo } from "react"
import { BookCoverPreview } from "@/components/book-cover-preview"
import { THEME_COLORS } from "@/components/book-cover-designer"
import { useZodiacSigns } from "@/hooks/use-zodiac-signs"
import { supabase } from "@/lib/supabaseClient"

export function QuizResults() {
  const { state, resetQuiz } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null)

  // Get session ID from Supabase
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSessionId(session?.user?.id || null)
    }
    getSession()
  }, [])

  // Get zodiac signs from Supabase as a fallback
  const { sunSign: dbSunSign, moonSign: dbMoonSign } = useZodiacSigns(state.email, sessionId)

  // Calculate fallback sun sign from birth date
  const fallbackSunSign = useMemo(() => {
    if (state.birthDate?.month && state.birthDate?.day) {
      return getZodiacSign(
        parseInt(state.birthDate.month), 
        parseInt(state.birthDate.day)
      )
    }
    return null
  }, [state.birthDate])

  // Calculate fallback moon sign (opposite sign for contrast)
  const fallbackMoonSign = useMemo(() => {
    if (fallbackSunSign) {
      const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", 
                          "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
      const index = zodiacSigns.indexOf(fallbackSunSign)
      if (index !== -1) {
        const oppositeIndex = (index + 6) % 12
        return zodiacSigns[oppositeIndex]
      }
    }
    return null
  }, [fallbackSunSign])

  // Extract sun and moon signs with multiple fallbacks
  const extractedSunSign = state.chartInterpretation?.sunSign?.title?.toLowerCase() || 
                          dbSunSign || 
                          fallbackSunSign || 
                          null

  const extractedMoonSign = state.chartInterpretation?.moonSign?.title?.toLowerCase() || 
                           dbMoonSign || 
                           fallbackMoonSign || 
                           null

  console.log("Quiz Results Debug:", {
    chartInterpretation: state.chartInterpretation?.sunSign?.title,
    dbSunSign,
    fallbackSunSign,
    extractedSunSign,
    extractedMoonSign
  })

  useEffect(() => {
    if (extractedSunSign) {
      setZodiacSign(extractedSunSign)
    } else if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }
  }, [extractedSunSign, state.birthDate])

  // Prepare dateOfBirth and formattedDate for BookCoverPreview
  const dateOfBirth = state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
    ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, '0')}-${state.birthDate.day.padStart(2, '0')}`
    : null

  const formattedDate = useMemo(() => {
    if (dateOfBirth) {
      const date = new Date(dateOfBirth)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
    return null
  }, [dateOfBirth])

  // Handle chart loaded event
  const handleChartLoaded = () => {
    console.log("Chart loaded in QuizResults")
  }

  if (!zodiacSign) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p>Processing your results...</p>
        </div>
      </div>
    )
  }

  const description = zodiacDescriptions[zodiacSign as keyof typeof zodiacDescriptions]

  if (!description) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Unable to determine your zodiac sign. Please try again.</p>
          <button
            onClick={resetQuiz}
            className="mt-4 px-6 py-2 bg-white text-purple-900 rounded-lg hover:bg-gray-100"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl font-bold mb-4">Your Astrological Profile</h1>
            <p className="text-xl opacity-90">Here's what the stars reveal about you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left column - Results */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 capitalize">{description.title}</h2>
              <p className="text-lg leading-relaxed mb-6">{description.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Birth Details:</h3>
                  <ul className="space-y-1 opacity-90">
                    <li>Date: {formattedDate || "Not provided"}</li>
                    <li>Place: {state.birthPlace || "Not provided"}</li>
                    {state.birthTime && <li>Time: {state.birthTime}</li>}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column - Book Cover Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-white text-xl font-bold mb-4">Your Personalized Book</h3>
              <BookCoverPreview
                userInfo={{
                  firstName: state.firstName || "Your Name",
                  lastName: state.lastName || "",
                  placeOfBirth: state.birthPlace || "Your Birth Place",
                  dateOfBirth: dateOfBirth || "",
                }}
                themeColor={THEME_COLORS.purple} // Use a specific color theme
                selectedIcon="custom-natal-chart"
                customChartUrl={state.customChartUrl}
                isLoading={false}
                sunSign={extractedSunSign}
                moonSign={extractedMoonSign}
                formattedDate={formattedDate || ""}
              />
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Complete Astrological Book
            </Link>
            
            <button
              onClick={resetQuiz}
              className="ml-4 text-white underline hover:text-gray-300"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

