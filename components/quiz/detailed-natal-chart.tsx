"use client"

import { useState } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { NatalChart } from "./natal-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { logger } from "@/utils/logger"

export function DetailedNatalChart() {
  const { state, fetchNatalChart } = useQuiz()
  const [activeTab, setActiveTab] = useState("chart")

  const handleGenerateChart = async () => {
    logger.quiz("DetailedNatalChart: Manual chart generation triggered")
    await fetchNatalChart()
  }

  // Check if we have any chart data available (either full chart data OR just the chart image)
  const hasChartData = state.natalChart || state.customChartUrl
  const hasFullChartData = state.natalChart

  // Debug logging for chart data availability
  logger.quiz("DetailedNatalChart - Chart Data Status", {
    hasChartData,
    hasFullChartData,
    hasNatalChart: !!state.natalChart,
    hasCustomChartUrl: !!state.customChartUrl,
    customChartUrlType: state.customChartUrl ? (
      state.customChartUrl.startsWith('data:') ? 'Base64/Data URL (Fallback SVG)' : 
      state.customChartUrl.startsWith('http') ? 'External URL (API Chart)' : 
      'Unknown URL type'
    ) : null,
    customChartUrlLength: state.customChartUrl?.length,
    isLoadingChart: state.isLoadingChart,
    chartError: state.chartError,
    sunSign: state.sunSign,
    moonSign: state.moonSign
  })

  // Determine chart source for display
  const chartSource = hasFullChartData ? 'Full API Data' : 
                     state.customChartUrl?.startsWith('data:') ? 'Fallback SVG' :
                     state.customChartUrl?.startsWith('http') ? 'External API Chart' :
                     'No Chart Data'

  logger.quiz("DetailedNatalChart - Chart Source", { chartSource })

  // Format birth date for display (Day Month Year format)
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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Natal Chart</h2>

      {/* Debug info for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs">
          <div className="font-semibold text-blue-800 mb-2">🔧 Debug Info:</div>
          <div className="text-blue-700">
            <div>Chart Source: <strong>{chartSource}</strong></div>
            <div>Has Full Chart Data: {hasFullChartData ? '✅' : '❌'}</div>
            <div>Has Custom Chart URL: {state.customChartUrl ? '✅' : '❌'}</div>
            <div>Loading: {state.isLoadingChart ? '⏳' : '✅'}</div>
            {state.chartError && <div className="text-red-600">Error: {state.chartError}</div>}
            {state.sunSign && <div>Sun Sign: {state.sunSign}</div>}
            {state.moonSign && <div>Moon Sign: {state.moonSign}</div>}
          </div>
        </div>
      )}

      {/* Birth details summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
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

      {/* Loading state */}
      {state.isLoadingChart && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 text-yellow-500 animate-spin mb-4" />
          <p className="text-lg text-gray-600">Generating your natal chart...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
        </div>
      )}

      {/* Error state */}
      {state.chartError && !state.isLoadingChart && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-red-800 mb-2">Error Generating Chart</h3>
              <p className="text-red-700">{state.chartError}</p>
              <button
                onClick={handleGenerateChart}
                className="mt-4 flex items-center text-red-700 hover:text-red-900 font-medium"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chart content - only show if we have chart data or if not currently loading */}
      {!state.isLoadingChart && !state.chartError && (
        <>
          {/* Generate chart button - only show if we don't have ANY chart data yet */}
          {!hasChartData && (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600 mb-6">
                Generate your accurate natal chart based on your birth details
              </p>
              <button
                onClick={handleGenerateChart}
                className="px-6 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
              >
                Generate Natal Chart
              </button>
            </div>
          )}

          {/* Chart data - show if we have ANY chart data */}
          {hasChartData && (
            <>
              {/* Chart source indicator */}
              <div className="mb-4 text-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  📊 Chart Source: {chartSource}
                </span>
              </div>

              {/* If we have full chart data, show tabs interface */}
              {hasFullChartData ? (
                <div>
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-green-800 text-sm">
                      ✅ <strong>Full API Chart Data Available</strong> - Showing complete astrological analysis with planets, houses, and aspects
                    </div>
                  </div>
                  
                  <Tabs defaultValue="chart" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="chart">Chart</TabsTrigger>
                      <TabsTrigger value="planets">Planets</TabsTrigger>
                      <TabsTrigger value="houses">Houses</TabsTrigger>
                    </TabsList>

                    <TabsContent value="chart" className="space-y-6">
                      <div className="flex justify-center">
                        <div className="w-full max-w-md">
                          {state.customChartUrl ? (
                            <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg">
                              <img 
                                src={state.customChartUrl} 
                                alt="Your Natal Chart" 
                                className="max-w-full max-h-full object-contain"
                                onLoad={() => console.log("✅ Chart image loaded successfully:", state.customChartUrl?.substring(0, 50) + "...")}
                                onError={(e) => {
                                  console.error("❌ Failed to load chart image:", state.customChartUrl?.substring(0, 50) + "...");
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                          ) : (
                            <NatalChart interactive showLabels />
                          )}
                        </div>
                      </div>

                      {state.chartInterpretation && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-bold mb-3">{state.chartInterpretation.overview.title}</h3>
                          <p className="text-gray-700">{state.chartInterpretation.overview.description}</p>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="planets" className="space-y-4">
                      {state.natalChart?.planets.map((planet) => (
                        <div key={planet.name} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium capitalize">{planet.name.replace("_", " ")}</h3>
                            <div className="flex items-center">
                              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded capitalize">
                                {planet.sign}
                              </span>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                                House {planet.house}
                              </span>
                              {planet.retrograde && (
                                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded ml-2">
                                  Retrograde
                                </span>
                              )}
                            </div>
                          </div>

                          {state.chartInterpretation?.planetPositions[planet.name] && (
                            <div>
                              <p className="text-gray-700">
                                {state.chartInterpretation.planetPositions[planet.name].description}
                              </p>
                              {state.chartInterpretation.planetPositions[planet.name].keywords && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {state.chartInterpretation.planetPositions[planet.name].keywords?.map((keyword, i) => (
                                    <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                      {keyword}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="houses" className="space-y-4">
                      {state.natalChart?.houses.map((house) => (
                        <div key={house.number} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium">House {house.number}</h3>
                            <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded capitalize">
                              {house.sign}
                            </span>
                          </div>

                          {state.chartInterpretation?.houses[house.number] && (
                            <div>
                              <p className="text-gray-700">{state.chartInterpretation.houses[house.number].description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                /* If we only have chart image (fallback), show simplified view */
                <div className="space-y-6">
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-yellow-800 text-sm">
                      ⚠️ <strong>Fallback Chart Mode</strong> - Using generated chart image. 
                      {state.customChartUrl?.startsWith('data:') ? ' (Offline SVG fallback)' : ' (External chart URL)'}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg">
                        <img 
                          src={state.customChartUrl!} 
                          alt="Your Natal Chart" 
                          className="max-w-full max-h-full object-contain"
                          onLoad={() => console.log("✅ Fallback chart image loaded successfully")}
                          onError={(e) => {
                            console.error("❌ Failed to load fallback chart image");
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Show basic interpretation if available */}
                  {(state.sunSign || state.moonSign) && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3">Your Astrological Profile</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {state.sunSign && (
                          <div>
                            <h4 className="font-medium text-gray-700">Sun Sign</h4>
                            <p className="text-lg capitalize text-yellow-600">{state.sunSign}</p>
                            <p className="text-sm text-gray-600">Your core identity and life purpose</p>
                          </div>
                        )}
                        {state.moonSign && (
                          <div>
                            <h4 className="font-medium text-gray-700">Moon Sign</h4>
                            <p className="text-lg capitalize text-blue-600">{state.moonSign}</p>
                            <p className="text-sm text-gray-600">Your emotional nature and instincts</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

