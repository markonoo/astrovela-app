"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { PremiumBookCover } from "@/components/example-book/premium-book-cover"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useChartImage } from "@/hooks/use-chart-image"

export function BookCoverConfirmation() {
  const { state, setCurrentStep } = useQuiz()
  const router = useRouter()
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { getChartImage } = useChartImage()

  // Map quiz color schemes to premium book cover color schemes
  const mapColorScheme = (scheme: string): "black" | "navy" | "green" | "burgundy" | "pink" => {
    switch (scheme) {
      case "purple":
        return "navy"
      case "cream":
        return "pink"
      case "black":
        return "black"
      case "navy":
        return "navy"
      case "green":
        return "green"
      case "burgundy":
        return "burgundy"
      default:
        return "green"
    }
  }

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

  // Handle back button click
  const handleBack = () => {
    // Go back to previous step
    setCurrentStep(state.currentStep - 1)
  }

  // Handle continue button click
  const handleContinue = () => {
    // Navigate to the checkout page
    router.push("/checkout")
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Personalized Book Cover</h2>

      {/* Book cover preview */}
      <div className="mb-8">
        <div className="w-full aspect-[3/4] max-w-md mx-auto">
          <PremiumBookCover
            colorScheme={mapColorScheme(state.coverColorScheme)}
            name={`${state.firstName || ""} ${state.lastName || ""}`.trim() || "Your Name"}
            birthDate={state.birthDate.year && state.birthDate.month && state.birthDate.day 
              ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}`
              : "Your Birth Date"
            }
            birthPlace={state.birthPlace || "Your Birth Place"}
            initialChartSvg={wheelChartSVG || undefined}
            natalChart={state.natalChart}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <Button onClick={handleBack} variant="outline" className="px-8 py-2">
          Back
        </Button>
        <Button onClick={handleContinue} disabled={isLoading} className="px-8 py-2">
          Continue to Checkout
        </Button>
      </div>
    </div>
  )
}
