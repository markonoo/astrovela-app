"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useEffect, useState } from "react"
import { NatalChart } from "@/components/quiz/natal-chart"
import { PageHeader } from "@/components/shared/page-header"
import { Footer } from "@/components/shared/footer"
import { Loader2, Download, Share2 } from "lucide-react"
import { ErrorBoundary } from "@/components/ErrorBoundary"

export default function NatalChartPage() {
  const { state, fetchNatalChart } = useQuiz()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if we need to fetch the natal chart
    const loadChart = async () => {
      if (
        !state.natalChart &&
        state.birthDate.month &&
        state.birthDate.day &&
        state.birthDate.year &&
        state.birthTime &&
        state.birthPlace
      ) {
        setIsLoading(true)
        setError(null)

        try {
          await fetchNatalChart()
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to generate natal chart")
        } finally {
          setIsLoading(false)
        }
      }
    }

    loadChart()
  }, [state.natalChart, state.birthDate, state.birthTime, state.birthPlace, fetchNatalChart])

  // Format birth date for display
  const formatBirthDate = () => {
    if (!state.birthDate.month || !state.birthDate.day || !state.birthDate.year) {
      return "Not provided"
    }

    const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", { month: "long" })
    return `${state.birthDate.day} ${month} ${state.birthDate.year}`
  }

  // Format birth time for display
  const formatBirthTime = () => {
    if (!state.birthTime) return "Not provided"

    // Convert 24h format to 12h format with AM/PM
    const [hours, minutes] = state.birthTime.split(":")
    const hour = Number.parseInt(hours, 10)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12

    return `${hour12}:${minutes} ${ampm}`
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <PageHeader />

        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Natal Chart</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your personalized astrological blueprint based on your birth details
            </p>

            {/* Birth details summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-4">Birth Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Birth Date</h3>
                  <p className="text-lg">{formatBirthDate()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Birth Time</h3>
                  <p className="text-lg">{formatBirthTime()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Birth Place</h3>
                  <p className="text-lg">{state.birthPlace || "Not provided"}</p>
                </div>
              </div>
            </div>

            {/* Natal Chart Display */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2 className="h-12 w-12 text-yellow-500 animate-spin mb-4" />
                  <p className="text-lg text-gray-600">Generating your natal chart...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <p className="text-red-700 mb-4">{error}</p>
                  <button
                    onClick={() => fetchNatalChart()}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : !state.natalChart ? (
                <div className="text-center py-16">
                  <p className="text-lg text-gray-600 mb-6">
                    Complete the quiz to generate your personalized natal chart
                  </p>
                  <a
                    href="/quiz"
                    className="px-6 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
                  >
                    Take the Quiz
                  </a>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Natal Chart</h2>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div className="w-full max-w-xl aspect-square">
                      <NatalChart interactive={true} showLabels={true} detailed={true} highResolution={true} />
                    </div>
                  </div>

                  {/* Chart interpretation summary */}
                  {state.chartInterpretation && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3">
                        {state.chartInterpretation.overview.title || "Your Cosmic Blueprint"}
                      </h3>
                      <p className="text-gray-700">
                        {state.chartInterpretation.overview.description ||
                          "Your natal chart reveals your unique cosmic blueprint, showing the positions of the planets at the moment of your birth. This celestial snapshot offers insights into your personality, strengths, challenges, and life path."}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Book promotion */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm text-center">
              <h2 className="text-xl font-bold mb-3">Want a deeper understanding?</h2>
              <p className="mb-6">
                Get your complete personalized astrology book with detailed interpretations of your chart
              </p>
              <a
                href="/pricing"
                className="px-6 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
              >
                Get Your Book
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

