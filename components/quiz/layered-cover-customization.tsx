"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect } from "react"
import { LayeredBookCover } from "../book-cover/layered-book-cover"
import { Loader2, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useChartImage } from "@/hooks/use-chart-image"
import { preloadFallbackNatalChart, getFallbackChartSVG } from "@/utils/fallback-chart"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"

// Sample design SVGs - in a real implementation, these would be loaded from files
const SAMPLE_DESIGNS = [
  {
    id: "minimal",
    name: "Minimal",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
      <circle cx="400" cy="200" r="50" fill="#FFFFFF" opacity="0.1" />
      <circle cx="700" cy="1000" r="100" fill="#FFFFFF" opacity="0.1" />
    </svg>`
  },
  {
    id: "stars",
    name: "Stars",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
      ${Array.from({ length: 50 }, (_, i) => 
        `<circle cx="${Math.random() * 800}" cy="${Math.random() * 1200}" r="${1 + Math.random() * 3}" fill="#FFFFFF" opacity="${0.1 + Math.random() * 0.2}" />`
      ).join('')}
    </svg>`
  },
  {
    id: "geometric",
    name: "Geometric",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
      <polygon points="0,0 200,100 0,200" fill="#FFFFFF" opacity="0.1" />
      <polygon points="800,1000 600,1100 800,1200" fill="#FFFFFF" opacity="0.1" />
      <rect x="100" y="300" width="200" height="200" fill="#FFFFFF" opacity="0.05" />
      <rect x="500" y="700" width="200" height="200" fill="#FFFFFF" opacity="0.05" />
    </svg>`
  }
]

export function LayeredCoverCustomization() {
  const { state, setCoverColorScheme, nextStep, prevStep, fetchNatalChart } = useQuiz()
  const [selectedColor, setSelectedColor] = useState<ColorSchemeKey>(state.coverColorScheme as ColorSchemeKey || "navy")
  const [selectedDesign, setSelectedDesign] = useState<string>("minimal")
  const [isLoading, setIsLoading] = useState(false)
  const [chartSvg, setChartSvg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [designSvg, setDesignSvg] = useState<string | null>(SAMPLE_DESIGNS[0].svg)
  
  // Format birth date for book cover
  const formatBirthDate = () => {
    if (!state.birthDate.month || !state.birthDate.day || !state.birthDate.year) {
      return "Birth Date"
    }

    const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", { month: "long" })
    return `${month} ${state.birthDate.day}, ${state.birthDate.year}`
  }

  // Format birth place for book cover
  const formatBirthPlace = () => {
    return state.birthPlace || "Birth Place"
  }

  // Preload the fallback chart when component mounts
  useEffect(() => {
    preloadFallbackNatalChart()
    
    // Set a fallback chart SVG immediately so we have something to display
    setChartSvg(getFallbackChartSVG())
  }, [])

  // Set the selected design SVG when the design selection changes
  useEffect(() => {
    const design = SAMPLE_DESIGNS.find(d => d.id === selectedDesign)
    if (design) {
      setDesignSvg(design.svg)
    }
  }, [selectedDesign])

  // Update the quiz context when the color scheme changes
  useEffect(() => {
    setCoverColorScheme(selectedColor as any)
  }, [selectedColor, setCoverColorScheme])

  // Fetch natal chart data when component mounts
  useEffect(() => {
    const fetchChartData = async () => {
      // Skip if we're already loading or have loaded the chart
      if (isLoading || state.natalChart) {
        return
      }

      // Check if we have all required birth details
      if (!state.birthDate.year || !state.birthDate.month || !state.birthDate.day || !state.birthTime || !state.birthPlace) {
        return
      }

      setIsLoading(true)
      try {
        await fetchNatalChart()
        // If we get here, chart data has been loaded successfully
        setChartSvg(getFallbackChartSVG()) // Use the fallback chart for now
      } catch (err) {
        console.error("Error fetching natal chart:", err)
        setError(err instanceof Error ? err.message : "Failed to load chart data")
        
        // Use the fallback chart
        setChartSvg(getFallbackChartSVG())
      } finally {
        setIsLoading(false)
      }
    }

    fetchChartData()
  }, [state.natalChart, state.birthDate, state.birthTime, state.birthPlace, fetchNatalChart, isLoading])

  const handleColorSelect = (color: ColorSchemeKey) => {
    setSelectedColor(color)
  }

  const handleDesignSelect = (designId: string) => {
    setSelectedDesign(designId)
  }

  const handleContinue = () => {
    nextStep()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 text-center">Personalize your book cover:</h1>
      
      {/* Cover Preview */}
      <div className="flex justify-center mb-6">
        <div className="w-72 h-96 relative">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
              <Loader2 className="h-12 w-12 text-yellow-500 animate-spin mb-4" />
              <p className="text-gray-600">Loading your cosmic data...</p>
            </div>
          ) : (
            <LayeredBookCover
              colorScheme={selectedColor}
              name={state.firstName || "Your Name"}
              birthDate={formatBirthDate()}
              birthPlace={formatBirthPlace()}
              chartSvg={chartSvg || undefined}
              designSvg={designSvg || undefined}
              className="shadow-lg"
            />
          )}
        </div>
      </div>
      
      {/* Color Selection */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700 text-center">Choose the color</p>
        <div className="flex justify-center gap-3">
          {Object.entries(COLOR_SCHEMES).map(([key, scheme]) => (
            <button
              key={key}
              onClick={() => handleColorSelect(key as ColorSchemeKey)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedColor === key ? 'ring-2 ring-yellow-400 ring-offset-2' : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1'}`}
              style={{ background: scheme.bgGradient }}
              aria-label={`Select ${scheme.name} color scheme`}
            >
              {selectedColor === key && (
                <CheckCircle2 className="h-4 w-4 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Design Selection */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700 text-center">Choose design style</p>
        <div className="flex justify-center gap-3">
          {SAMPLE_DESIGNS.map((design) => (
            <button
              key={design.id}
              onClick={() => handleDesignSelect(design.id)}
              className={`w-20 h-28 rounded bg-gray-100 flex items-center justify-center transition-all ${selectedDesign === design.id ? 'ring-2 ring-yellow-400' : 'hover:ring-1 hover:ring-gray-300'}`}
              aria-label={`Select ${design.name} design`}
            >
              <div className="text-xs text-gray-600">{design.name}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
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