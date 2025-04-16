"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { PremiumBookCover } from "../book-cover/premium-book-cover"
import { LayeredBookCover } from "../book-cover/layered-book-cover"
import { Loader2, AlertTriangle, Lock, Crown } from "lucide-react"
import { useChartImage } from "@/hooks/use-chart-image"
import { preloadFallbackNatalChart } from "@/utils/fallback-chart"

type ColorScheme = "black" | "navy" | "green" | "burgundy" | "pink"

interface ColorOption {
  name: ColorScheme
  bgColor: string
  textColor: string
  chartColor: string
}

interface CoverCustomizationProps {
  showPremiumOption?: boolean;
  showLayeredOption?: boolean;
  showDesignerOption?: boolean;
}

export function CoverCustomization({ 
  showPremiumOption = false, 
  showLayeredOption = false,
  showDesignerOption = false 
}: CoverCustomizationProps) {
  const { state, setCoverColorScheme, nextStep, prevStep, fetchNatalChart, setCurrentStep } = useQuiz()
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

  const handlePremiumSelect = () => {
    // Skip to the premium cover step (step 36)
    setCurrentStep(36)
  }
  
  const handleLayeredSelect = () => {
    // Skip to the layered cover step (step 37)
    setCurrentStep(37)
  }

  const handleDesignerSelect = () => {
    // Skip to the designer step (step 38)
    setCurrentStep(38)
  }

  // Display options for different cover types if requested
  if (showPremiumOption || showLayeredOption || showDesignerOption) {
  return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Choose Your Book Cover Style</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Cover Option */}
          <div className="border rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Standard Cover</h3>
            <div className="aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
              {/* Preview of standard cover */}
              <PremiumBookCover 
                name={state.firstName || "Your Name"}
                birthDate={state.birthDate?.month && state.birthDate?.day && state.birthDate?.year 
                  ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}` 
                  : "01/01/2000"}
                birthPlace={state.birthLocation?.name || state.birthPlace || "Unknown Location"}
                colorScheme={selectedColor}
              />
            </div>
            <div className="flex justify-center mt-4">
              <button 
                onClick={handleContinue}
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Select Standard
              </button>
            </div>
          </div>
          
          {/* Premium Cover Option */}
          {showPremiumOption && (
            <div className="border-2 border-yellow-400 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                PREMIUM
              </div>
              <h3 className="text-xl font-semibold">Premium Cover</h3>
              <div className="aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
                {/* Preview of premium cover */}
                <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="text-center mb-4">
                      <h2 className="text-2xl font-serif tracking-wide">Premium</h2>
                      <h3 className="text-xl font-serif italic">Astrology Book</h3>
                    </div>
                    
                    <div className="w-3/4 aspect-square border-2 border-yellow-400 rounded-full flex items-center justify-center my-4">
                      <div className="text-center">
                        <div className="text-sm opacity-80">Enhanced Details</div>
                        <div className="text-lg font-bold mt-1">Zodiac Wheel</div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <div className="text-sm">Curved Text & Deluxe Design</div>
                      <div className="font-serif italic mt-1">Elegant Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handlePremiumSelect}
                  className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-600 transition-colors font-medium"
                >
                  Select Premium
                </button>
              </div>
            </div>
          )}
          
          {/* Layered Cover Option */}
          {showLayeredOption && (
            <div className="border-2 border-purple-400 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-purple-400 text-gray-900 px-4 py-1 rounded-full font-bold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                LAYERED
              </div>
              <h3 className="text-xl font-semibold">Layered Cover</h3>
              <div className="aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
                {/* Preview of layered cover */}
                <LayeredBookCover
                  name={state.firstName || "Your Name"}
                  birthDate={state.birthDate?.month && state.birthDate?.day && state.birthDate?.year 
                    ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}` 
                    : "01/01/2000"}
                  birthPlace={state.birthLocation?.name || state.birthPlace || "Unknown Location"}
                  colorScheme="cosmic-blue"
                />
              </div>
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleLayeredSelect}
                  className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors font-medium"
                >
                  Select Layered
                </button>
              </div>
            </div>
          )}
          
          {/* Designer Option */}
          {showDesignerOption && (
            <div className="border-2 border-pink-400 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-pink-400 text-gray-900 px-4 py-1 rounded-full font-bold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                DESIGNER
              </div>
              <h3 className="text-xl font-semibold">Designer</h3>
              <div className="aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
                {/* Preview of designer cover */}
                <div className="relative w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="text-center mb-4">
                      <h2 className="text-2xl font-serif tracking-wide">Designer</h2>
                      <h3 className="text-xl font-serif italic">Custom Design</h3>
                    </div>
                    
                    <div className="w-3/4 aspect-square border-2 border-pink-400 rounded-full flex items-center justify-center my-4">
                      <div className="text-center">
                        <div className="text-sm opacity-80">Custom Design</div>
                        <div className="text-lg font-bold mt-1">Unique Artwork</div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <div className="text-sm">Customized Artwork</div>
                      <div className="font-serif italic mt-1">Personalized Touch</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleDesignerSelect}
                  className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors font-medium"
                >
                  Select Designer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  // Original return for standard cover customization
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Customize Your Book Cover</h2>

      {/* Color selection */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {colorOptions.map((color) => (
            <button
            key={color.name}
            type="button"
            className={`w-12 h-12 rounded-full ${
              selectedColor === color.name ? "ring-2 ring-offset-2 ring-blue-500" : ""
            } transition-all`}
            style={{ backgroundColor: color.bgColor }}
            onClick={() => handleColorSelect(color.name)}
            aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>

      {/* Book preview */}
      <div className="max-w-sm mx-auto aspect-[3/4] relative overflow-hidden rounded-md">
        <PremiumBookCover
          name={state.firstName || "Your Name"}
          birthDate={
            state.birthDate?.month && state.birthDate?.day && state.birthDate?.year
              ? `${state.birthDate.month}/${state.birthDate.day}/${state.birthDate.year}`
              : "01/01/2000"
          }
          birthPlace={state.birthLocation?.name || state.birthPlace || "Unknown Location"}
          colorScheme={selectedColor}
        />
      </div>

      {/* Continue button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleContinue}
          className="px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

