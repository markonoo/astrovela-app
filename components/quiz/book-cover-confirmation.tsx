"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { Check, RefreshCw, Loader2 } from "lucide-react"
import { PremiumBookCover } from "../example-book/premium-book-cover"
import { useChartImage } from "@/hooks/use-chart-image"
import { preloadFallbackNatalChart } from "@/utils/fallback-chart"

export function BookCoverConfirmation() {
  const { state, setCurrentStep, nextStep } = useQuiz()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [chartUrl, setChartUrl] = useState<string | null>(null)
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(null)
  const [isChartLoading, setIsChartLoading] = useState(false)
  const { getChartImage, getFallbackChart, loadingProgress, fallbackLoaded } = useChartImage()

  // Preload the fallback chart when component mounts
  useEffect(() => {
    preloadFallbackNatalChart()
  }, [])

  // Check if we've already encountered an authentication error
  const checkAuthError = (): boolean => {
    try {
      return sessionStorage.getItem("astrology_api_auth_error") === "true"
    } catch (e) {
      return false
    }
  }

  // Fetch chart if not already loaded
  useEffect(() => {
    const fetchChart = async () => {
      // Check for authentication errors first
      if (checkAuthError()) {
        console.log("Authentication error detected, skipping chart API call")

        // Use fallback chart if authentication error
        if (fallbackLoaded) {
          const fallback = getFallbackChart()
          setWheelChartSVG(fallback.svgContent)
        }

        return
      }

      // Skip if we already have the chart or if we're loading
      if (
        chartUrl ||
        wheelChartSVG ||
        isChartLoading ||
        !state.birthDate.year ||
        !state.birthDate.month ||
        !state.birthDate.day ||
        !state.birthTime ||
        !state.birthPlace
      ) {
        return
      }

      setIsChartLoading(true)
      try {
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
      } catch (err) {
        console.error("Error fetching chart:", err)

        // Use fallback chart if API fails
        if (fallbackLoaded) {
          const fallback = getFallbackChart()
          setWheelChartSVG(fallback.svgContent)
        }
      } finally {
        setIsChartLoading(false)
      }
    }

    fetchChart()
  }, [
    chartUrl,
    wheelChartSVG,
    isChartLoading,
    state.birthDate,
    state.birthTime,
    state.birthPlace,
    state.birthLocation,
    getChartImage,
    getFallbackChart,
    fallbackLoaded,
  ])

  // Handle confirmation to proceed to email collection
  const handleConfirm = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      nextStep() // Go to question 35 (email collection)
      setIsTransitioning(false)
    }, 300)
  }

  // Handle return to color selection
  const handleReturn = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(33) // Go back to question 33 (color selection)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div
      className={`space-y-6 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="text-2xl font-semibold text-gray-900">Your Book Cover</h1>

      <p className="text-sm text-gray-600 mt-2">
        Are you satisfied with the generated book cover and ready to proceed, or would you like to return to adjust the
        color?
      </p>

      <div className="flex justify-center mt-6">
        <div className="w-72 h-96 relative">
          {isChartLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
              <div className="relative w-32 h-32">
                {/* Circular progress indicator */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-300"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    className="text-yellow-500"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (loadingProgress / 100) * 283}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 text-yellow-500 animate-spin" />
                </div>
              </div>
              <p className="text-gray-600 mt-4">Finalizing your cover...</p>
              <p className="text-gray-500 text-sm">{Math.round(loadingProgress)}%</p>
            </div>
          ) : (
            <PremiumBookCover
              colorScheme={state.coverColorScheme}
              cachedWheelChartSVG={wheelChartSVG}
              cachedChartUrl={chartUrl}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-6">
        <button
          onClick={handleConfirm}
          className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center"
        >
          <Check className="w-5 h-5 mr-2" />
          I'm satisfied, proceed to next step
        </button>

        <button
          onClick={handleReturn}
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          I'd like to adjust the color
        </button>
      </div>
    </div>
  )
}

