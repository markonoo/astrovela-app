"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { PremiumBookCover } from "@/components/example-book/premium-book-cover"
import { Button } from "@/components/ui/button"
import { useChartImage } from "@/hooks/use-chart-image"

// Define the color options
const colorOptions = [
  { id: "green", name: "Green" },
  { id: "black", name: "Black" },
  { id: "light-pastel", name: "Light Pastel" },
  { id: "rose", name: "Rose" },
  { id: "pink", name: "Pink" },
]

export function CoverCustomization() {
  const { state, dispatch } = useQuiz()
  const [selectedColor, setSelectedColor] = useState(state.bookCover?.colorScheme || "green")
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(null)
  const [chartUrl, setChartUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { getChartImage } = useChartImage()

  // Load the chart when the component mounts
  useEffect(() => {
    const loadChart = async () => {
      if (!state.birthDate.year || !state.birthDate.month || !state.birthDate.day || !state.birthTime) {
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)

        // Format date for API
        const formattedDate = `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`

        // Get coordinates
        const latitude = state.birthLocation.latitude || 0
        const longitude = state.birthLocation.longitude || 0

        // Fetch the chart
        const result = await getChartImage(formattedDate, state.birthTime, latitude, longitude)

        // Set the chart data
        if (result.chartUrl) {
          setChartUrl(result.chartUrl)
        }

        if (result.svgContent) {
          setWheelChartSVG(result.svgContent)
        }
      } catch (error) {
        console.error("Error loading chart:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadChart()
  }, [state.birthDate, state.birthTime, state.birthLocation, getChartImage])

  // Handle color selection
  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId)
  }

  // Handle continue button click
  const handleContinue = () => {
    // Save the selected color to the quiz state
    dispatch({
      type: "SET_BOOK_COVER",
      payload: {
        colorScheme: selectedColor,
      },
    })

    // Navigate to the next step
    dispatch({
      type: "SET_STEP",
      payload: "book-cover-confirmation",
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Customize Your Book Cover</h2>

      {/* Color selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Choose a color scheme:</h3>
        <div className="flex flex-wrap gap-3">
          {colorOptions.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorSelect(color.id)}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedColor === color.id ? "ring-2 ring-offset-2 ring-blue-500 font-medium" : "hover:bg-gray-100"
              }`}
              style={{
                backgroundColor:
                  color.id === "green"
                    ? "#1a3a2a"
                    : color.id === "black"
                      ? "#121212"
                      : color.id === "light-pastel"
                        ? "#e6f2ff"
                        : color.id === "rose"
                          ? "#f8d7da"
                          : color.id === "pink"
                            ? "#f4c1d7"
                            : "#ffffff",
                color: color.id === "green" || color.id === "black" ? "#ffffff" : "#000000",
              }}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Book cover preview */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Preview:</h3>
        <div className="w-full aspect-[3/4] max-w-md mx-auto">
          <PremiumBookCover
            colorScheme={selectedColor}
            cachedWheelChartSVG={wheelChartSVG}
            cachedChartUrl={chartUrl}
            natalChart={state.natalChart}
          />
        </div>
      </div>

      {/* Continue button */}
      <div className="flex justify-center mt-8">
        <Button onClick={handleContinue} disabled={isLoading} className="px-8 py-2">
          Continue
        </Button>
      </div>
    </div>
  )
}

