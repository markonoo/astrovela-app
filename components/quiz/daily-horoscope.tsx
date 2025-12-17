"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign } from "@/utils/zodiac"
import { Loader2, AlertCircle, RefreshCw } from "lucide-react"
import type { ZodiacSign } from "@/types/astrology"
import { logger } from "@/utils/logger"

export function DailyHoroscope() {
  const { state } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | null>(null)
  const [horoscope, setHoroscope] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Determine zodiac sign from birth date
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign as ZodiacSign)
    }
  }, [state.birthDate])

  useEffect(() => {
    // Fetch horoscope when zodiac sign is available
    if (zodiacSign) {
      fetchHoroscope(zodiacSign)
    }
  }, [zodiacSign])

  const fetchHoroscope = async (sign: ZodiacSign) => {
    setIsLoading(true)
    setError(null)

    try {
      // Import the service dynamically
      const { getDailyHoroscope } = await import("@/services/astrology-service")

      // Fetch the horoscope
      const data = await getDailyHoroscope(sign)
      setHoroscope(data)
    } catch (error) {
      logger.error("Error fetching horoscope", error);
      setError(error instanceof Error ? error.message : "Failed to fetch your daily horoscope")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefresh = () => {
    if (zodiacSign) {
      fetchHoroscope(zodiacSign)
    }
  }

  if (!zodiacSign) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Your Daily Horoscope</h3>

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 text-yellow-500 animate-spin mr-3" />
          <p>Loading your daily horoscope...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700">{error}</p>
              <button
                onClick={handleRefresh}
                className="mt-2 flex items-center text-red-700 hover:text-red-900 font-medium text-sm"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      ) : horoscope ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-lg font-medium capitalize">{zodiacSign}</span>
              <span className="text-sm text-gray-500 ml-2">{horoscope.date}</span>
            </div>
            <button
              onClick={handleRefresh}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Refresh horoscope"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">{horoscope.prediction}</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-yellow-800 mb-1">Lucky Number</h4>
              <p className="text-yellow-700">{horoscope.lucky_number}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-blue-800 mb-1">Lucky Color</h4>
              <p className="text-blue-700">{horoscope.lucky_color}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-green-800 mb-1">Mood</h4>
              <p className="text-green-700">{horoscope.mood}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-purple-800 mb-1">Compatibility</h4>
              <p className="text-purple-700">{horoscope.compatibility}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No horoscope available. Please try again later.</p>
      )}
    </div>
  )
}

