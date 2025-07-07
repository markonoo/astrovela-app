"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign } from "@/utils/zodiac"
import type { NatalChart } from "@/types/astrology"
import { Loader2, AlertTriangle, RefreshCw } from "lucide-react"
import { useChartImage } from "@/hooks/use-chart-image"
import { getFallbackChartSVG } from "@/utils/fallback-chart"
import { sanitizeSvg } from "@/utils/svg-sanitizer"
import { COLOR_SCHEMES } from "@/utils/constants"
import Image from "next/image"
import CurvedText from "../CurvedText"
import { ErrorBoundary } from "@/components/ErrorBoundary"

// Define valid color schemes
type ColorScheme = "green" | "black" | "light-pastel" | "rose" | "pink"

interface PremiumBookCoverProps {
  colorScheme?: keyof typeof COLOR_SCHEMES
  name: string
  birthDate: string
  birthPlace: string
  className?: string
  initialChartSvg?: string
  natalChart?: any // Add this prop
}

export function PremiumBookCover({
  colorScheme = "navy",
  name,
  birthDate,
  birthPlace,
  className = "",
  initialChartSvg,
  natalChart = null, // Add default value
}: PremiumBookCoverProps) {
  const { state } = useQuiz()
  const [sunSign, setSunSign] = useState<string | null>(null)
  const [moonSign, setMoonSign] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [chartData, setChartData] = useState<NatalChart | null>(null)
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(null)
  const [chartUrl, setChartUrl] = useState<string | null>(null)
  const [isLoadingChart, setIsLoadingChart] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [chartError, setChartError] = useState<string | null>(null)
  const [useFallback, setUseFallback] = useState(false)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const [isOliviaExample, setIsOliviaExample] = useState(false)
  const { getChartImage, getFallbackChart, isLoading: isLoadingImage, error } = useChartImage()
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme)
  const [isLoading, setIsLoading] = useState(true)

  // Use the color schemes from constants
  const colors = COLOR_SCHEMES[currentColorScheme]

  // Update color scheme when prop changes
  useEffect(() => {
    setCurrentColorScheme(colorScheme)
  }, [colorScheme])

  // Check if this is the Olivia example
  useEffect(() => {
    if (name === "Olivia" && birthPlace?.includes("Hamburg")) {
      setIsOliviaExample(true)
    }
  }, [name, birthPlace])

  // Use cached chart URL or SVG if provided
  useEffect(() => {
    if (initialChartSvg) {
      setWheelChartSVG(initialChartSvg)
    }
  }, [initialChartSvg])

  // Update SVG colors when it's loaded or color scheme changes
  useEffect(() => {
    if (wheelChartSVG && svgContainerRef.current) {
      try {
        // Parse the SVG string to a DOM element
        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(wheelChartSVG, "image/svg+xml")
        const svgElement = svgDoc.documentElement

        // Fix invalid attributes - specifically the "hidden" attribute
        const elementsWithHidden = svgElement.querySelectorAll("[hidden]")
        elementsWithHidden.forEach((el) => {
          const hiddenValue = el.getAttribute("hidden")
          // Either set a valid value for hidden or remove it completely
          if (hiddenValue === "" || hiddenValue === null) {
            // Set a valid value for the hidden attribute
            el.setAttribute("hidden", "true")
          }
        })

        // Set viewBox to ensure the entire chart is visible
        if (!svgElement.hasAttribute("viewBox")) {
          svgElement.setAttribute("viewBox", "0 0 800 800")
        }

        // Ensure the SVG is centered
        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")

        // Remove any width/height attributes to allow proper scaling
        svgElement.removeAttribute("width")
        svgElement.removeAttribute("height")

        // Set width and height to 105% to increase size by 5%
        svgElement.setAttribute("width", "105%")
        svgElement.setAttribute("height", "105%")

        // Set the updated SVG back to the container
        svgContainerRef.current.innerHTML = svgElement.outerHTML

        // Apply additional styling to center the SVG
        const newSvgElement = svgContainerRef.current.querySelector("svg")
        if (newSvgElement) {
          newSvgElement.style.display = "block"
          newSvgElement.style.margin = "0 auto"
          newSvgElement.style.maxWidth = "105%"
          newSvgElement.style.maxHeight = "105%"
          newSvgElement.style.position = "relative" // Add position
          newSvgElement.style.zIndex = "10" // Add z-index

          // Ensure SVG text is visible by setting the color with stronger contrast
          const textElements = newSvgElement.querySelectorAll("text")
          textElements.forEach((el) => {
            el.setAttribute("fill", colors.textColor)
            // Add a subtle stroke to text for better visibility
            el.setAttribute("stroke", "rgba(0,0,0,0.2)")
            el.setAttribute("stroke-width", "0.2")
          })

          // Ensure SVG paths and circles are visible
          const pathElements = newSvgElement.querySelectorAll("path, circle, line")
          pathElements.forEach((el) => {
            if (el.getAttribute("stroke")) {
              el.setAttribute("stroke", colors.textColor)
              el.setAttribute("stroke-width", el.getAttribute("stroke-width") || "1")
            }
          })
        }
      } catch (error) {
        console.error("Error processing SVG:", error)
        // If there's an error processing the SVG, just use it as-is
        svgContainerRef.current.innerHTML = wheelChartSVG
      }
    }
  }, [wheelChartSVG, colors, currentColorScheme])

  // Fetch the natal wheel chart if not provided
  useEffect(() => {
    const fetchChart = async () => {
      // Skip if we already have the chart or if we're loading
      if (chartUrl || wheelChartSVG || isLoadingChart) {
        return
      }

      // For the example book view, always use the fallback SVG
      if (typeof window !== "undefined" && window.location.pathname.includes("/example-book")) {
        try {
          setIsLoadingChart(true)
          setChartError(null)

          // Load the fallback SVG
          const fallbackSvg = await fetch("/images/fallback-natal-chart.svg")
            .then((response) => {
              if (!response.ok) throw new Error("Failed to load SVG file")
              return response.text()
            })
            .catch((error) => {
              console.error("Error loading fallback SVG:", error)
              const fallback = getFallbackChart()
              return fallback.svgContent
            })

          setWheelChartSVG(fallbackSvg)
          setUseFallback(true)
          setLoadingProgress(100)
          setIsLoadingChart(false)
          return
        } catch (error) {
          console.error("Error loading fallback SVG:", error)
          setIsLoadingChart(false)
        }
      }

      // Check if we have all the required data
      let chartBirthDate: string | null = null
      let chartBirthTime: string | null = null
      let chartLatitude: number | null = null
      let chartLongitude: number | null = null

      // Check if we have chart data
      if (chartData?.birthDetails) {
        chartBirthDate = chartData.birthDetails.date
        chartBirthTime = chartData.birthDetails.time
        chartLatitude = chartData.birthDetails.location.latitude
        chartLongitude = chartData.birthDetails.location.longitude
      }
      // For Olivia example
      else if (isOliviaExample) {
        chartBirthDate = "2021-12-06" // December 6, 2021
        chartBirthTime = "12:00" // Default to noon
        chartLatitude = 53.5511 // Hamburg latitude
        chartLongitude = 9.9937 // Hamburg longitude
      }
      // Otherwise use state data
      else if (state.birthDate.year && state.birthDate.month && state.birthDate.day && state.birthTime) {
        // Format date for API
        chartBirthDate = `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
        chartBirthTime = state.birthTime

        // Use location data if available
        if (state.birthLocation.latitude !== null && state.birthLocation.longitude !== null) {
          chartLatitude = state.birthLocation.latitude
          chartLongitude = state.birthLocation.longitude
        }
        // Otherwise use default coordinates (0,0)
        else {
          chartLatitude = 0
          chartLongitude = 0
        }
      }

      // If we have all the required data, fetch the chart
      if (chartBirthDate && chartBirthTime && chartLatitude !== null && chartLongitude !== null) {
        try {
          setIsLoadingChart(true)
          setChartError(null)
          setLoadingProgress(0)
          setUseFallback(false)

          // Start progress animation
          const progressInterval = setInterval(() => {
            setLoadingProgress((prev) => {
              const newProgress = prev + Math.random() * 5
              return newProgress > 90 ? 90 : newProgress // Cap at 90% until actual completion
            })
          }, 300)

          // Fetch the chart
          const result = await getChartImage(chartBirthDate, chartBirthTime, chartLatitude, chartLongitude)

          clearInterval(progressInterval)
          setLoadingProgress(100)

          // Set the chart data
          if (result.chartUrl) {
            setChartUrl(result.chartUrl)
          }

          if (result.svgContent) {
            setWheelChartSVG(result.svgContent)
          }
        } catch (error) {
          console.error("Error fetching chart:", error)

          // Use fallback SVG
          setUseFallback(true)
          const fallback = getFallbackChart()
          setWheelChartSVG(fallback.svgContent)

          setChartError(error instanceof Error ? error.message : "Failed to load natal wheel chart")
          setLoadingProgress(0)
        } finally {
          setIsLoadingChart(false)
        }
      }
    }

    fetchChart()
  }, [
    chartData,
    state.birthDate,
    state.birthTime,
    state.birthLocation,
    isOliviaExample,
    chartUrl,
    wheelChartSVG,
    isLoadingChart,
    getChartImage,
    getFallbackChart,
  ])

  // Use natal chart data if provided, otherwise use state data
  useEffect(() => {
    // Set chart data from prop or state
    setChartData(natalChart || state.natalChart || null)

    // Determine zodiac signs with priority order
    // First priority: Use stored sun and moon signs from interpretation data
    if (state.sunSign && state.moonSign) {
      setSunSign(state.sunSign)
      setMoonSign(state.moonSign)
    }
    // Second priority: Use provided natal chart data
    else if (natalChart) {
      const sunPlanet = natalChart.planets.find((p: { name: string }) => p.name === "sun")
      const moonPlanet = natalChart.planets.find((p: { name: string }) => p.name === "moon")

      if (sunPlanet) setSunSign(sunPlanet.sign)
      if (moonPlanet) setMoonSign(moonPlanet.sign)
    } 
    // Third priority: Use natal chart from state
    else if (state.natalChart) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")

      if (sunPlanet) setSunSign(sunPlanet.sign)
      if (moonPlanet) setMoonSign(moonPlanet.sign)
    } 
    // Fourth priority: Use example data for Olivia
    else if (isOliviaExample) {
      setSunSign("sagittarius") // December 6 is Sagittarius
      setMoonSign("taurus") // Just an example moon sign
    } 
    // Fallback: Calculate from birth date
    else if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setSunSign(sign)

      // For demo purposes, set moon sign to a different sign
      const moonSignOptions = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
      ]
      const randomIndex = (moonSignOptions.indexOf(sign) + 6) % 12 // Opposite sign for contrast
      setMoonSign(moonSignOptions[randomIndex])
    } 
    // Ultimate fallback
    else {
      setSunSign("libra")
      setMoonSign("taurus")
    }

    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [state.sunSign, state.moonSign, state.birthDate, state.natalChart, natalChart, isOliviaExample])

  // Handle retry for chart loading
  const handleRetryChartLoad = async () => {
    if (!state.birthDate.year || !state.birthDate.month || !state.birthDate.day || !state.birthTime) {
      return
    }

    setIsLoadingChart(true)
    setChartError(null)
    setLoadingProgress(0)
    setUseFallback(false)

    try {
      // Format date for API
      const formattedDate = `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`

      // Get coordinates
      const latitude = state.birthLocation.latitude || 0
      const longitude = state.birthLocation.longitude || 0

      // Start progress animation
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = prev + Math.random() * 5
          return newProgress > 90 ? 90 : newProgress
        })
      }, 300)

      // Fetch the chart
      const result = await getChartImage(formattedDate, state.birthTime, latitude, longitude)

      clearInterval(progressInterval)
      setLoadingProgress(100)

      // Set the chart data
      if (result.chartUrl) {
        setChartUrl(result.chartUrl)
      }

      if (result.svgContent) {
        setWheelChartSVG(result.svgContent)
      }
    } catch (error) {
      console.error("Error retrying chart fetch:", error)

      // Use fallback SVG
      setUseFallback(true)
      const fallback = getFallbackChart()
      setWheelChartSVG(fallback.svgContent)

      setChartError(error instanceof Error ? error.message : "Failed to load natal wheel chart")
      setLoadingProgress(0)
    } finally {
      setIsLoadingChart(false)
    }
  }

  // Format the displayed name
  const displayName = name || state.firstName || "YOUR NAME"

  // Format birth date for display (Day Month Year format)
  const displayBirthDate =
    birthDate ||
    (() => {
      if (chartData?.birthDetails?.date) {
        const date = new Date(chartData.birthDetails.date)
        const month = date.toLocaleString("default", { month: "long" })
        return `${date.getDate()} ${month} ${date.getFullYear()}`
      } else if (state.birthDate.month && state.birthDate.day && state.birthDate.year) {
        const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", {
          month: "long",
        })
        return `${state.birthDate.day} ${month} ${state.birthDate.year}`
      } else if (isOliviaExample) {
        return "6 December 2021" // Example data
      }
      return "Your Birth Date"
    })()

  // Format birth place for display
  const displayBirthPlace =
    birthPlace ||
    chartData?.birthDetails?.location?.name ||
    state.birthPlace ||
    (isOliviaExample ? "Hamburg, Germany" : "Your Birth Place")

  // Zodiac symbols
  const zodiacSymbols: Record<string, string> = {
    aries: "♈",
    taurus: "♉",
    gemini: "♊",
    cancer: "♋",
    leo: "♌",
    virgo: "♍",
    libra: "♎",
    scorpio: "♏",
    sagittarius: "♐",
    capricorn: "♑",
    aquarius: "♒",
    pisces: "♓",
  }

  // Simulate loading for smoother transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-500">Loading book preview...</div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div
        className={`relative w-full h-full flex flex-col overflow-hidden shadow-xl ${className}`}
                 style={{ backgroundColor: "#000033" }}
      >
      {/* Base background image */}
      <Image
        src="/images/space-background.jpg" // You'll need to add this image to your public folder
        alt="Space background"
        fill
        className="object-cover"
        priority
      />

      {/* Color overlay */}
      <div 
        className="absolute inset-0 transition-all duration-500"
              style={{
          background: colors.bgGradient,
          opacity: colors.overlayOpacity,
        }}
      />

      {/* Content container */}
      <div className="relative w-full h-full flex flex-col items-center justify-between p-8">
        {/* Top section */}
        <div className="w-full text-center space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <Image
              src="/images/sun-face.png" // Add this decorative sun image
              alt="Decorative sun"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/moon-face.png" // Add this decorative moon image
              alt="Decorative moon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 
            className="text-5xl font-serif font-bold tracking-wider uppercase"
            style={{
              color: colors.textColor,
              textShadow: `0 0 20px ${colors.textColor}50`
            }}
          >
            {displayName}
          </h1>
        </div>

        {/* Center zodiac wheel */}
        <div className="w-3/4 aspect-square relative flex items-center justify-center">
          <Image
            src="/images/zodiac-wheel.png" // Add this zodiac wheel image
            alt="Zodiac wheel"
            fill
            className="object-contain"
            style={{ filter: `drop-shadow(0 0 10px ${colors.textColor}30)` }}
          />
          {/* Curved birth details */}
        <div 
            className="absolute left-1/2 top-1/2 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              width: 420,
              height: 420,
          }}
        >
            <CurvedText
              text={`${displayBirthDate} · ${displayBirthPlace}`}
              radius={185}
              fontSize={22}
              color={colors.textColor}
              width={420}
              height={420}
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight={700}
            />
          </div>
        </div>

        {/* Bottom birth details */}
        {/* Removed straight text birth details, now shown as curved text above */}
      </div>
    </div>
    </ErrorBoundary>
  )
}

