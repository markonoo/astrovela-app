"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useMemo } from "react"
import { BookCoverPreview } from "../book-cover-preview"
import { THEME_COLORS } from "../book-cover-designer"
import { getZodiacSign } from "@/utils/zodiac"

// Import the quiz steps data needed for navigation
interface QuizStep {
  type: string;
  questionNumber?: number;
  message?: string;
  quote?: string;
  partIdx?: number;
}

export function BookCoverConfirmation() {
  const { state, prevStep, nextStep, setCurrentStep } = useQuiz()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleConfirm = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      nextStep() // Go to email collection
      setIsTransitioning(false)
    }, 300)
  }

  const handleReturn = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      // Navigate to the firstName step instead of just going back one step
      // Find the index of the firstName step in the quiz flow
      let firstNameStepIndex = 0;
      
      // In the quiz flow, firstName is in the third part (Personal Touch & Book Magic)
      // Let's count the steps to reach it
      let countedSteps = 0;
      
      // Steps in Setting Your Intentions (part 1)
      countedSteps += 7;
      
      // Steps in Your Cosmic Blueprint (part 2)
      countedSteps += 5;
      
      // Steps in Personal Touch & Book Magic before firstName
      // motivation, agreeWorry, optimism, relationshipQuestion, additionalTopics, generic, giftOrSelf
      countedSteps += 7;
      
      // Now we're at the firstName step
      firstNameStepIndex = countedSteps + 1;
      
      setCurrentStep(firstNameStepIndex);
      setIsTransitioning(false)
    }, 300)
  }

  // Format birth date for display (Day Month Year format)
  const formattedDate = useMemo(() => {
    if (state.birthDate?.year && state.birthDate?.month && state.birthDate?.day) {
      const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", {
        month: "long",
      })
      return `${state.birthDate.day} ${month} ${state.birthDate.year}`
    }
    return "Your Birth Date"
  }, [state.birthDate])

  // Extract sun and moon signs from stored state, natal chart data, or calculate fallback
  const { sunSign, moonSign } = useMemo(() => {
    console.log("🔍 BookCoverConfirmation - state.sunSign:", state.sunSign, "state.moonSign:", state.moonSign)
    
    // First priority: Use stored sun and moon signs from interpretation data
    if (state.sunSign && state.moonSign) {
      console.log("✅ BookCoverConfirmation - Using stored signs:", state.sunSign, state.moonSign)
      return {
        sunSign: state.sunSign,
        moonSign: state.moonSign
      }
    }

    // Second priority: Extract from natal chart data if available
    if (state.natalChart?.planets) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")
      console.log("🔍 BookCoverConfirmation - natalChart lookup - sunPlanet:", sunPlanet, "moonPlanet:", moonPlanet)
      
      if (sunPlanet && moonPlanet) {
        console.log("✅ BookCoverConfirmation - Using natalChart signs:", sunPlanet.sign, moonPlanet.sign)
        return {
          sunSign: sunPlanet.sign,
          moonSign: moonPlanet.sign
        }
      }
    }

    // Fallback: Calculate sun sign from birth date and use contrasting moon sign
    if (state.birthDate?.month && state.birthDate?.day) {
      const calculatedSunSign = getZodiacSign(
        Number.parseInt(state.birthDate.month), 
        Number.parseInt(state.birthDate.day)
      )
      
      // Use a contrasting moon sign as fallback
      const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", 
                          "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
      const sunIndex = zodiacSigns.indexOf(calculatedSunSign)
      const moonIndex = sunIndex !== -1 ? (sunIndex + 6) % 12 : 0
      
      console.log("⚠️ BookCoverConfirmation - Using calculated fallback:", calculatedSunSign, zodiacSigns[moonIndex])
      return {
        sunSign: calculatedSunSign,
        moonSign: zodiacSigns[moonIndex]
      }
    }

    // Ultimate fallback
    return {
      sunSign: null,
      moonSign: null
    }
  }, [state.sunSign, state.moonSign, state.natalChart, state.birthDate])

  return (
    <div
      className={`space-y-3 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">Your Book Cover</h1>

      <p className="text-xs text-gray-600 mt-1 mb-2">
        Are you satisfied with the generated book cover and ready to proceed, or would you like to go back and personalize it from the beginning?
      </p>

      <div className="flex justify-center">
        <div className="w-[350px] h-[450px] relative flex items-center justify-center mb-2">
          <BookCoverPreview
            userInfo={{
              firstName: state.firstName || "FIRST",
              lastName: state.lastName || "",
              placeOfBirth: state.birthPlace || "Place of Birth",
              dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                : "",
            }}
            themeColor={THEME_COLORS[state.coverColorScheme]}
            selectedIcon={state.customChartUrl ? "custom-natal-chart" : "natal-chart"}
            customChartUrl={state.customChartUrl || undefined}
            isLoading={state.isLoadingChart}
            formattedDate={formattedDate}
            sunSign={sunSign}
            moonSign={moonSign}
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={handleConfirm}
          className="w-full py-3 px-4 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          I'm satisfied, proceed to next step
        </button>

        <button
          onClick={handleReturn}
          className="w-full py-3 px-4 mt-2 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Go back to personalize my book
        </button>
      </div>
    </div>
  )
}

