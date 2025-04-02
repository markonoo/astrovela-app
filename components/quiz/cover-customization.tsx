"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { PremiumBookCover } from "../example-book/premium-book-cover"
import { Loader2, AlertTriangle, Lock } from "lucide-react"
import { useChartImage } from "@/hooks/use-chart-image"
import { preloadFallbackNatalChart } from "@/utils/fallback-chart"

type ColorScheme = "black" | "navy" | "green" | "burgundy" | "pink"

interface ColorOption {
  name: ColorScheme
  bgColor: string
  textColor: string
  chartColor: string
}

export function CoverCustomization() {
  const { state, setCoverColorScheme, nextStep, prevStep, fetchNatalChart } = useQuiz()
  const [selectedColor, setSelectedColor] = useState<ColorScheme>("green")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [authError, setAuthError] = useState(false)
  const [chartUrl, setChartUrl] = useState<string | null>(null)
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(null)
  const {
    getChartImage,
    getFallbackChart,
    isLoading: isChartLoading,
    loadingProgress,
    fallbackLoaded,
  } = useChartImage()

  const colorOptions: ColorOption[] = [
    { name: "black", bgColor: "#121212", textColor: "#f0e8da", chartColor: "#f7c800" },
    { name: "navy", bgColor: "#2d3139", textColor: "#f0e8da", chartColor: "#f7c800" },
    { name: "green", bgColor: "#1a3a2a", textColor: "#f0e8da", chartColor: "#f7c800" },
    { name: "burgundy", bgColor: "#93384b", textColor: "#f0e8da", chartColor: "#f7c800" },
    { name: "pink", bgColor: "#f4c1d7", textColor: "#292425", chartColor: "#93384b" },
  ]

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

  // Fetch natal chart data when component mounts
  useEffect(() => {
    const loadNatalChart = async () => {
      // Check for authentication errors first
      if (checkAuthError()) {
        setAuthError(true)
        console.log("Authentication error detected, skipping API call")
        return
      }

      // Skip if we already have chart data or if we're missing required birth details
      if (
        state.natalChart ||
        !state.birthDate.year ||
        !state.birthDate.month ||
        !state.birthDate.day ||
        !state.birthTime ||
        !state.birthPlace
      ) {
        return
      }

      setIsLoading(true)
      try {
        await fetchNatalChart()
      } catch (err) {
        console.error("Error fetching natal chart:", err)

        // Check if it's an authentication error
        const errorMsg = err instanceof Error ? err.message : ""
        if (errorMsg.includes("invalid") || errorMsg.includes("User ID") || errorMsg.includes("authentication")) {
          setAuthError(true)
          try {
            sessionStorage.setItem("astrology_api_auth_error", "true")
          } catch (e) {
            console.warn("Could not access sessionStorage:", e)
          }
        }

        setError(err instanceof Error ? err.message : "Failed to load natal chart data")
      } finally {
        setIsLoading(false)
      }
    }

    loadNatalChart()
  }, [state.natalChart, state.birthDate, state.birthTime, state.birthPlace, fetchNatalChart])

  // Fetch chart image
  useEffect(() => {
    const fetchChart = async () => {
      // Check for authentication errors first
      if (checkAuthError()) {
        setAuthError(true)
        console.log("Authentication error detected, skipping chart API call")

        // Use fallback chart if authentication error
        if (fallbackLoaded) {
          const fallback = getFallbackChart()
          setWheelChartSVG(fallback.svgContent)
        }

        return
      }

      // Skip if we already have the chart or if we're missing required birth details
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

        // Check if it's an authentication error
        const errorMsg = err instanceof Error ? err.message : ""
        if (errorMsg.includes("invalid") || errorMsg.includes("User ID") || errorMsg.includes("authentication")) {
          setAuthError(true)
          try {
            sessionStorage.setItem("astrology_api_auth_error", "true")
          } catch (e) {
            console.warn("Could not access sessionStorage:", e)
          }
        }
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

  const handleColorSelect = (color: ColorScheme) => {
    setSelectedColor(color)
    setCoverColorScheme(color)
  }

  const handleContinue = () => {
    nextStep()
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Personalize your book cover:</h1>

      <div className="flex justify-center mb-6">
        <div className="w-72 h-96 relative">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
              <Loader2 className="h-12 w-12 text-yellow-500 animate-spin mb-4" />
              <p className="text-gray-600">Loading your cosmic data...</p>
            </div>
          ) : error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4">
              {authError ? (
                <>
                  <Lock className="h-12 w-12 text-amber-500 mb-4" />
                  <p className="text-gray-700 mb-2">API authentication required</p>
                </>
              ) : (
                <>
                  <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
                  <p className="text-gray-700 mb-2">We couldn't load your complete data</p>
                </>
              )}
              <p className="text-sm text-gray-500">Your cover will still be created with available information</p>
            </div>
          ) : isChartLoading ? (
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
              <p className="text-gray-600 mt-4">Generating your chart...</p>
              <p className="text-gray-500 text-sm">{Math.round(loadingProgress)}%</p>
            </div>
          ) : (
            <PremiumBookCover
              colorScheme={selectedColor}
              cachedWheelChartSVG={wheelChartSVG}
              cachedChartUrl={chartUrl}
            />
          )}
        </div>
      </div>

      {/* Color options */}
      <div>
        <p className="text-sm text-gray-600 mb-3">Choose the color:</p>
        <div className="flex justify-center space-x-3">
          {colorOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleColorSelect(option.name)}
              className={`w-8 h-8 rounded-full ${selectedColor === option.name ? "ring-2 ring-offset-2 ring-yellow-400" : ""}`}
              style={{ backgroundColor: option.bgColor }}
              aria-label={`Select ${option.name} color scheme`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-4">
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
        >
          Continue
        </button>

        <button
          onClick={prevStep}
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Previous Question
        </button>
      </div>
    </div>
  )
}

