"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { NatalChart } from "./natal-chart"
import { Loader2 } from "lucide-react"
import { THEME_COLORS } from "../book-cover-designer"
import CurvedText from "../CurvedText"

interface EnhancedBookCoverProps {
  className?: string
  onChartLoaded?: () => void
}

export function EnhancedBookCover({ className = "", onChartLoaded }: EnhancedBookCoverProps) {
  const { state, fetchNatalChart } = useQuiz()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [chartGenerated, setChartGenerated] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState("Initializing...")

  // Use the unified color system
  const colorScheme = THEME_COLORS[state.coverColorScheme]

  // Format birth date for book cover (Day Month Year format)
  const formatBirthDate = () => {
    if (!state.birthDate.month || !state.birthDate.day || !state.birthDate.year) {
      return "Not provided"
    }

    const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", { month: "long" })
    return `${state.birthDate.day} ${month} ${state.birthDate.year}`
  }

  // Format birth place for book cover
  const formatBirthPlace = () => {
    if (!state.birthPlace) return "Birth Place"

    // If we have coordinates, add them
    if (state.birthLocation.latitude !== null && state.birthLocation.longitude !== null) {
      return `${state.birthPlace} (${state.birthLocation.latitude.toFixed(2)}°N, ${state.birthLocation.longitude.toFixed(2)}°E)`
    }

    return state.birthPlace
  }

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const loadingMessages = [
        "Calculating planetary positions...",
        "Analyzing celestial alignments...",
        "Mapping your cosmic blueprint...",
        "Interpreting astrological aspects...",
        "Generating your natal chart...",
        "Almost there...",
      ]

      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 15
        if (progress > 100) progress = 100

        setLoadingProgress(progress)

        // Update loading message based on progress
        const messageIndex = Math.min(Math.floor(progress / (100 / loadingMessages.length)), loadingMessages.length - 1)
        setLoadingMessage(loadingMessages[messageIndex])

        if (progress === 100) clearInterval(interval)
      }, 800)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  // Generate the natal chart if we have all required data
  useEffect(() => {
    const generateChart = async () => {
      // Check if we already have chart data
      if (state.natalChart) {
        setChartGenerated(true)
        onChartLoaded?.()
        return
      }

      // Check if we have all required data
      if (state.birthDate.month && state.birthDate.day && state.birthDate.year && state.birthTime && state.birthPlace) {
        setIsLoading(true)
        setError(null)

        try {
          await fetchNatalChart()
          setChartGenerated(true)
          onChartLoaded?.()
        } catch (err) {
          console.error("Error generating natal chart:", err)
          setError(err instanceof Error ? err.message : "Failed to generate natal chart")
        } finally {
          setIsLoading(false)
        }
      }
    }

    generateChart()
  }, [
    state.birthDate,
    state.birthTime,
    state.birthPlace,
    state.birthLocation,
    state.natalChart,
    fetchNatalChart,
    onChartLoaded,
  ])

  // Clamp loadingProgress to 100
  const clampedProgress = Math.min(loadingProgress, 100)

  return (
    <div
      className={`h-full rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ${className}`}
      style={{ backgroundColor: colorScheme.bg }}
    >
      <div className="h-full flex flex-col items-center justify-between p-6 relative"
        style={{ color: colorScheme.text }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="100" r="50" fill="white" />
          </svg>
        </div>

        {/* Title */}
        <div className="w-full pt-4 text-center z-10">
          <h2 className="text-xl font-bold tracking-wider uppercase">
            {state.firstName || "YOUR NAME"}
            {state.lastName ? ` ${state.lastName.charAt(0)}.` : ""}
          </h2>
          <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: colorScheme.text }}></div>
        </div>

        {/* Natal Chart */}
        <div className="w-48 h-48 my-4 z-10 relative flex items-center justify-center">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Circular progress indicator */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-600 opacity-25"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    className="text-white"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (clampedProgress / 100) * 283}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
              </div>
              <p className="text-xs mt-4 text-center max-w-[180px]">{loadingMessage}</p>
              <p className="text-xs text-white/70">{clampedProgress.toFixed(0)}%</p>
            </div>
          ) : error ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-red-900/30 p-4 rounded">
                <p className="text-sm mb-2">Could not generate chart</p>
                <p className="text-xs text-white/70 mb-3">{error}</p>
                <button
                  className="text-xs bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded"
                  onClick={() => fetchNatalChart()}
                >
                  Try again
                </button>
              </div>
            </div>
          ) : (
            <>
            <NatalChart color="#ffffff" detailed={true} />
              {/* Curved birth details */}
              <div
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                  width: 192,
                  height: 192,
                }}
              >
                <CurvedText
                  text={`${formatBirthDate()} · ${formatBirthPlace()}`}
                  radius={80}
                  fontSize={15}
                  color={colorScheme.text}
                  width={192}
                  height={192}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={600}
                />
              </div>
            </>
          )}
        </div>

        {/* Birth details */}
        {/* Removed straight text birth details, now shown as curved text above */}
      </div>
    </div>
  )
}

