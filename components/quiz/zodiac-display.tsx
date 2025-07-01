"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign, zodiacDescriptions } from "@/utils/zodiac"
import { useEffect, useState } from "react"

export function ZodiacDisplay() {
  const { state, nextStep, prevStep } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)

  useEffect(() => {
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }
    // REMOVED: Automatic chart generation - this should only happen on step 12
  }, [state.birthDate])

  if (!zodiacSign) {
    return (
      <div className="text-center">
        <p>Loading your zodiac sign...</p>
      </div>
    )
  }

  const { title, description } = zodiacDescriptions[zodiacSign as keyof typeof zodiacDescriptions]

  // Helper to get SVG file name for zodiac sign (matching profile page)
  const getZodiacSvg = (sign: string) => {
    return `/images/zodiac/${sign.toLowerCase()}.svg`
  }

  return (
    <div className="relative w-full h-full text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-start min-h-[auto] px-4 pt-0 pb-8">
        <div className="w-full max-w-md text-center space-y-3 mt-6">
          <div className="flex justify-center">
            <div className="w-36 h-36 flex items-center justify-center">
              <img
                src={getZodiacSvg(zodiacSign)}
                alt={zodiacSign}
                className="w-36 h-36"
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-yellow-300 mb-4">{title}</h2>

          <p className="text-gray-200 mb-6">{description}</p>

          {/* REMOVED: Loading spinner for chart generation */}

          <button
            onClick={nextStep}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors mt-8"
          >
            Continue
          </button>

          <button
            onClick={prevStep}
            className="w-full py-3 px-4 bg-transparent border border-white/30 rounded-full text-white font-medium hover:bg-white/10 transition-colors mt-4"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}
