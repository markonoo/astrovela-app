"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useMemo } from "react"
import { ColorSelector } from "../color-selector"
import { BookCoverPreview } from "../book-cover-preview"
import type { ColorScheme } from "@/contexts/quiz-context"
import { THEME_COLORS } from "../book-cover-designer"
import { getZodiacSign } from "@/utils/zodiac"
import { format } from "date-fns"

export function CoverCustomization() {
  const { state, setCoverColorScheme, nextStep } = useQuiz()
  const [selectedColor, setSelectedColor] = useState<ColorScheme>(state.coverColorScheme || "cream")

  const handleColorSelect = (color: string) => {
    setSelectedColor(color as ColorScheme)
    setCoverColorScheme(color as ColorScheme)
  }

  const handleContinue = () => {
    setCoverColorScheme(selectedColor)
    nextStep()
  }

  // Format birth date for display using date-fns (matching pricing page)
  const formattedDate = useMemo(() => {
    if (state.birthDate?.year && state.birthDate?.month && state.birthDate?.day) {
      try {
        return format(
          new Date(
            parseInt(state.birthDate.year),
            parseInt(state.birthDate.month) - 1,
            parseInt(state.birthDate.day)
          ),
          "dd MMMM yyyy"
        )
      } catch (error) {
        console.warn("Date formatting error:", error)
        return "Your Birth Date"
      }
    }
    return "Your Birth Date"
  }, [state.birthDate])

  // Extract sun and moon signs from stored state or fallback to calculation
  const { sunSign, moonSign } = useMemo(() => {
    console.log("🔍 CoverCustomization - state.sunSign:", state.sunSign, "state.moonSign:", state.moonSign)
    
    // First priority: Use stored sun and moon signs from interpretation data
    if (state.sunSign && state.moonSign) {
      console.log("✅ CoverCustomization - Using stored signs:", state.sunSign, state.moonSign)
      return {
        sunSign: state.sunSign,
        moonSign: state.moonSign
      }
    }

    // Second priority: Extract from natal chart data if available
    if (state.natalChart?.planets) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")
      console.log("🔍 CoverCustomization - natalChart lookup - sunPlanet:", sunPlanet, "moonPlanet:", moonPlanet)
      
      if (sunPlanet && moonPlanet) {
        console.log("✅ CoverCustomization - Using natalChart signs:", sunPlanet.sign, moonPlanet.sign)
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
    <div className="space-y-3 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Customize Your Book Cover</h1>

      <p className="text-xs text-gray-600 mt-1 mb-2">
        Choose the color for your personalized book cover
      </p>

      {/* Book preview - simplified container matching pricing page */}
      <div className="flex justify-center mb-4 pb-6">
        <div className="w-full max-w-[350px]">
          <BookCoverPreview
            userInfo={{
              firstName: state.firstName || "Your Name",
              lastName: state.lastName || "",
              placeOfBirth: state.birthPlace || "Your Birth Place",
              dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                : "",
            }}
            themeColor={THEME_COLORS[selectedColor] || THEME_COLORS.purple}
            selectedIcon={state.customChartUrl ? "custom-natal-chart" : "natal-chart"}
            customChartUrl={state.customChartUrl || undefined}
            isLoading={false}
            formattedDate={formattedDate}
            sunSign={sunSign}
            moonSign={moonSign}
          />
        </div>
      </div>

      {/* Color selection below preview, centered */}
      <div className="flex justify-center mt-2">
        <ColorSelector selectedColor={selectedColor} setSelectedColor={handleColorSelect} />
      </div>

      {/* Continue button */}
      <div className="mt-4">
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

