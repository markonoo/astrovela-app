"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { PremiumBookCover, PREMIUM_COLORS, type PremiumColorKey } from "@/components/book-cover/premium-book-cover"
import { Button } from "@/components/ui/button"
import { getFallbackChartSVG } from "@/utils/fallback-chart"
import { CheckCircle2 } from "lucide-react"

// Import the type directly from quiz context
type ColorScheme = "purple" | "blue" | "green" | "orange" | "red"

export function PremiumCoverCustomization() {
  const { state, setCoverColorScheme, nextStep } = useQuiz()
  // Default to cosmic-blue as the default premium option
  const [selectedColor, setSelectedColor] = useState<PremiumColorKey>("cosmic-blue")
  const [chartSvg, setChartSvg] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Format the birth date and place
  const formattedDate = state.birthDate?.year && state.birthDate?.month && state.birthDate?.day 
    ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}` 
    : "01/01/2000"
  
  const birthPlace = state.birthLocation?.name || "Unknown Location"

  // Load the fallback chart when the component mounts
  useEffect(() => {
    const loadChart = async () => {
      try {
        setIsLoading(true)
        // Use fallback chart for now
        const svg = getFallbackChartSVG()
        setChartSvg(svg)
      } catch (error) {
        console.error("Error loading chart:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadChart()
  }, [])

  // Handle color selection
  const handleColorSelect = (colorId: PremiumColorKey) => {
    setSelectedColor(colorId)
  }

  // Handle continue button click
  const handleContinue = () => {
    // Map the premium color scheme to one of the allowed values in QuizState
    let quizColorScheme: ColorScheme = "purple"; // Default fallback
    
    if (selectedColor === "cosmic-blue") {
      quizColorScheme = "blue";
    } else if (selectedColor === "forest-green") {
      quizColorScheme = "green";
    } else if (selectedColor === "royal-gold") {
      quizColorScheme = "orange";
    } else if (selectedColor === "deep-purple") {
      quizColorScheme = "purple";
    } else if (selectedColor === "midnight-black") {
      quizColorScheme = "red"; // Using red for black as a fallback
    }
    
    setCoverColorScheme(quizColorScheme);
    nextStep();
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Customize Your Premium Book Cover</h2>

      {/* Book cover preview */}
      <div className="mb-8">
        <div className="w-full aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
          <PremiumBookCover
            colorScheme={selectedColor}
            name={state.firstName || "Your Name"}
            birthDate={formattedDate}
            birthPlace={birthPlace}
            initialChartSvg={chartSvg}
          />
        </div>
      </div>

      {/* Color selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-center">Select a Premium Theme</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(PREMIUM_COLORS).map(([colorId, colorData]) => (
            <button
              key={colorId}
              onClick={() => handleColorSelect(colorId as PremiumColorKey)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                selectedColor === colorId ? 'ring-2 ring-yellow-400 ring-offset-2' : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1'
              }`}
              style={{
                background: colorData.bgGradient,
              }}
              aria-label={`Select ${colorData.name} color scheme`}
            >
              {selectedColor === colorId && (
                <CheckCircle2 className="h-6 w-6 text-white" />
              )}
            </button>
          ))}
        </div>
        <div className="text-center mt-3 text-gray-600">
          {PREMIUM_COLORS[selectedColor].name}
        </div>
      </div>

      {/* Continue button */}
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleContinue} 
          disabled={isLoading} 
          className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-600 transition-colors font-medium"
        >
          Continue with Premium Cover
        </Button>
      </div>
    </div>
  )
} 