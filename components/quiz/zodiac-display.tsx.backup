"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign, zodiacDescriptions } from "@/utils/zodiac"
import { ZodiacIcon } from "./zodiac-icons"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export function ZodiacDisplay() {
  const { state, nextStep, prevStep, fetchNatalChart } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [isGeneratingChart, setIsGeneratingChart] = useState(false)

  useEffect(() => {
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }

    // Automatically generate the natal chart if we have all the required data
    const generateChartIfPossible = async () => {
      if (
        state.birthDate.month &&
        state.birthDate.day &&
        state.birthDate.year &&
        state.birthTime &&
        state.birthPlace &&
        !state.natalChart &&
        !state.isLoadingChart
      ) {
        setIsGeneratingChart(true)
        try {
          await fetchNatalChart()
        } catch (error) {
          console.error("Error generating chart:", error)
        } finally {
          setIsGeneratingChart(false)
        }
      }
    }

    generateChartIfPossible()
  }, [state.birthDate, state.birthTime, state.birthPlace, state.natalChart, state.isLoadingChart, fetchNatalChart])

  if (!zodiacSign) {
    return (
      <div className="text-center">
        <p>Loading your zodiac sign...</p>
      </div>
    )
  }

  const { title, description } = zodiacDescriptions[zodiacSign as keyof typeof zodiacDescriptions]

  return (
    <div className="relative w-full h-full text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-start min-h-[auto] px-4 pt-0 pb-8">
        <div className="w-full max-w-md text-center space-y-3 mt-6">
          <div className="flex justify-center">
            <ZodiacIcon sign={zodiacSign as any} className="w-36 h-36" />
          </div>

          <h2 className="text-2xl font-bold text-yellow-300 mb-4">{title}</h2>

          <p className="text-gray-200 mb-6">{description}</p>

          {isGeneratingChart && (
            <div className="flex items-center justify-center mt-8 mb-8 text-gray-300">
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              <span>Generating your natal chart...</span>
            </div>
          )}

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

