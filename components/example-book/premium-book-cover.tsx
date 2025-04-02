"use client"

import { useState, useEffect, useRef } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign } from "@/utils/zodiac"
import type { NatalChart } from "@/types/astrology"
import { Loader2, AlertTriangle, RefreshCw } from "lucide-react"
import { useChartImage } from "@/hooks/use-chart-image"

// Define valid color schemes
type ColorScheme = "green" | "black" | "light-pastel" | "rose" | "pink"

interface PremiumBookCoverProps {
  colorScheme?: string // Accept any string to prevent type errors
  name?: string
  birthDate?: string
  birthPlace?: string
  className?: string
  natalChart?: NatalChart // Add natal chart prop
  cachedWheelChartSVG?: string | null // Add cached SVG prop
  cachedChartUrl?: string | null // Add cached chart URL prop
}

export function PremiumBookCover({
  colorScheme = "green",
  name,
  birthDate,
  birthPlace,
  className = "",
  natalChart,
  cachedWheelChartSVG = null,
  cachedChartUrl = null,
}: PremiumBookCoverProps) {
  const { state } = useQuiz()
  const [sunSign, setSunSign] = useState<string | null>(null)
  const [moonSign, setMoonSign] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [chartData, setChartData] = useState<NatalChart | null>(null)
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(cachedWheelChartSVG)
  const [chartUrl, setChartUrl] = useState<string | null>(cachedChartUrl)
  const [isLoadingChart, setIsLoadingChart] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [chartError, setChartError] = useState<string | null>(null)
  const [useFallback, setUseFallback] = useState(false)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const [isOliviaExample, setIsOliviaExample] = useState(false)
  const { getChartImage, getFallbackChart, isLoading, error } = useChartImage()
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme)

  // Update internal color scheme when prop changes
  useEffect(() => {
    setCurrentColorScheme(colorScheme)
  }, [colorScheme])

  // Get color scheme details based on selection
  const getColorScheme = () => {
    const colorSchemes = {
      green: {
        bgColor: "#1a3a2a",
        textColor: "#f0e8da",
        accentColor: "#f7c800",
      },
      black: {
        bgColor: "#121212",
        textColor: "#f0e8da",
        accentColor: "#f7c800",
      },
      "light-pastel": {
        bgColor: "#e6f2ff",
        textColor: "#333333",
        accentColor: "#7b68ee",
      },
      rose: {
        bgColor: "#f8d7da",
        textColor: "#721c24",
        accentColor: "#dc3545",
      },
      pink: {
        bgColor: "#f4c1d7",
        textColor: "#292425",
        accentColor: "#93384b",
      },
    }

    // Return the color scheme or default to green if not found
    return colorSchemes[currentColorScheme as keyof typeof colorSchemes] || colorSchemes.green
  }

  const colors = getColorScheme()

  // Check if this is the Olivia example
  useEffect(() => {
    if (name === "Olivia" && birthPlace?.includes("Hamburg")) {
      setIsOliviaExample(true)
    }
  }, [name, birthPlace])

  // Use cached chart URL or SVG if provided
  useEffect(() => {
    if (cachedChartUrl) {
      setChartUrl(cachedChartUrl)
    }
    if (cachedWheelChartSVG) {
      setWheelChartSVG(cachedWheelChartSVG)
    }
  }, [cachedChartUrl, cachedWheelChartSVG])

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

    // Determine zodiac signs
    if (natalChart) {
      // If natal chart is provided, use it to set sun and moon signs
      const sunPlanet = natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = natalChart.planets.find((p) => p.name === "moon")

      if (sunPlanet) setSunSign(sunPlanet.sign)
      if (moonPlanet) setMoonSign(moonPlanet.sign)
    } else if (state.natalChart) {
      // If natal chart is in state, use it
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")

      if (sunPlanet) setSunSign(sunPlanet.sign)
      if (moonPlanet) setMoonSign(moonPlanet.sign)
    } else if (isOliviaExample) {
      // For Olivia example, set specific signs
      setSunSign("sagittarius") // December 6 is Sagittarius
      setMoonSign("taurus") // Just an example moon sign
    } else if (state.birthDate.month && state.birthDate.day) {
      // Otherwise, calculate sun sign from birth date
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
    } else {
      // Default values for example
      setSunSign("libra")
      setMoonSign("taurus")
    }

    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [state.birthDate, state.natalChart, natalChart, isOliviaExample])

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

  // Format birth date for display
  const displayBirthDate =
    birthDate ||
    (() => {
      if (chartData?.birthDetails?.date) {
        return new Date(chartData.birthDetails.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      } else if (state.birthDate.month && state.birthDate.day && state.birthDate.year) {
        const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", {
          month: "long",
        })
        return `${month} ${state.birthDate.day}, ${state.birthDate.year}`
      } else if (isOliviaExample) {
        return "December 6, 2021" // Example data
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

  return (
    <div
      className={`w-full h-full rounded-lg overflow-hidden shadow-xl transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }} // Center the cover
    >
      <div
        className="w-full h-full relative flex flex-col items-center justify-between p-6"
        style={{ backgroundColor: colors.bgColor }}
      >
        {/* Decorative stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute transform"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4 + Math.random() * 0.6,
                color: colors.accentColor,
                fontSize: `${0.5 + Math.random() * 1}rem`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Sun symbol at top */}
        <div className="w-full flex justify-center mb-2" style={{ color: colors.accentColor }}>
          <div className="relative">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 10C31.1046 10 32 9.10457 32 8V5C32 3.89543 31.1046 3 30 3C28.8954 3 28 3.89543 28 5V8C28 9.10457 28.8954 10 30 10Z"
                fill="currentColor"
              />
              <path
                d="M30 57C31.1046 57 32 56.1046 32 55V52C32 50.8954 31.1046 50 30 50C28.8954 50 28 50.8954 28 52V55C28 56.1046 28.8954 57 30 57Z"
                fill="currentColor"
              />
              <path
                d="M55 32H52C50.8954 32 50 31.1046 50 30C50 28.8954 50.8954 28 52 28H55C56.1046 28 57 28.8954 57 30C57 31.1046 56.1046 32 55 32Z"
                fill="currentColor"
              />
              <path
                d="M8 32H5C3.89543 32 3 31.1046 3 30C3 28.8954 3.89543 28 5 28H8C9.10457 28 10 28.8954 10 30C10 31.1046 9.10457 32 8 32Z"
                fill="currentColor"
              />
              <path
                d="M46.9644 16.0356C47.7501 15.2499 47.7501 13.9832 46.9644 13.1975L44.8431 11.0762C44.0574 10.2905 42.7907 10.2905 42.005 11.0762C41.2193 11.8619 41.2193 13.1286 42.005 13.9143L44.1263 16.0356C44.912 16.8213 46.1787 16.8213 46.9644 16.0356Z"
                fill="currentColor"
              />
              <path
                d="M13.1975 46.9644C13.9832 46.1787 13.9832 44.912 13.1975 44.1263L11.0762 42.005C10.2905 41.2193 9.02376 41.2193 8.23807 42.005C7.45238 42.7907 7.45238 44.0574 8.23807 44.8431L10.3594 46.9644C11.1451 47.7501 12.4118 47.7501 13.1975 46.9644Z"
                fill="currentColor"
              />
              <path
                d="M46.9644 44.1263C46.1787 43.3406 44.912 43.3406 44.1263 44.1263L42.005 46.2476C41.2193 47.0333 41.2193 48.3 42.005 49.0857C42.7907 49.8714 44.0574 49.8714 44.8431 49.0857L46.9644 46.9644C47.7501 46.1787 47.7501 44.912 46.9644 44.1263Z"
                fill="currentColor"
              />
              <path
                d="M13.1975 13.1975C12.4118 12.4118 11.1451 12.4118 10.3594 13.1975L8.23807 15.3188C7.45238 16.1045 7.45238 17.3712 8.23807 18.1569C9.02376 18.9426 10.2905 18.9426 11.0762 18.1569L13.1975 16.0356C13.9832 15.2499 13.9832 13.9832 13.1975 13.1975Z"
                fill="currentColor"
              />
              <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M30 22C30 22 28 25 28 30C28 35 30 38 30 38" stroke="currentColor" strokeWidth="2" />
              <path d="M30 22C30 22 32 25 32 30C32 35 30 38 30 38" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Name */}
        <div className="w-full text-center mt-2 mb-4 relative z-20">
          {" "}
          {/* Add z-index */}
          <h2
            className="text-4xl font-bold tracking-widest uppercase"
            style={{
              color: colors.textColor,
              textShadow: `0 2px 4px rgba(0,0,0,0.5)`, // Enhance text shadow for better visibility
              position: "relative", // Ensure proper stacking
              zIndex: 20, // Higher z-index than other elements
            }}
          >
            {displayName}
          </h2>
        </div>

        {/* Natal Chart */}
        <div className="w-full flex-grow flex items-center justify-center my-4 relative">
          {isLoadingChart ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-32 h-32">
                {/* Circular progress indicator */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="opacity-25"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={colors.textColor}
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={colors.accentColor}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (loadingProgress / 100) * 283}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin" style={{ color: colors.accentColor }} />
                </div>
              </div>
              <p className="text-sm mt-4" style={{ color: colors.textColor }}>
                {loadingProgress < 100 ? `Loading your chart... ${Math.round(loadingProgress)}%` : "Finalizing..."}
              </p>
            </div>
          ) : wheelChartSVG ? (
            <div
              ref={svgContainerRef}
              className="w-full h-full flex items-center justify-center"
              style={{
                maxHeight: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "scale(1.05)", // Increase size by 5%
                color: colors.textColor, // Ensure SVG inherits text color
                position: "relative", // Add position relative
                zIndex: 10, // Ensure SVG is above other elements
              }}
            />
          ) : chartUrl ? (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                maxHeight: "350px",
                transform: "scale(1.05)", // Increase size by 5%
              }}
            >
              <img
                src={chartUrl || "/placeholder.svg"}
                alt="Natal Chart"
                className="max-w-full max-h-full object-contain"
                style={{
                  margin: "0 auto", // Center horizontally
                  display: "block",
                }}
                onError={(e) => {
                  console.error("Error loading chart image:", e)
                  setChartError("Failed to load chart image")
                  // Use fallback SVG
                  setUseFallback(true)
                  const fallback = getFallbackChart()
                  setWheelChartSVG(fallback.svgContent)
                }}
              />
            </div>
          ) : chartError ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <AlertTriangle className="h-12 w-12 mb-2" style={{ color: colors.accentColor }} />
              <p className="text-sm mb-2" style={{ color: colors.textColor }}>
                {useFallback ? "Using fallback chart" : "Using simplified chart"}
              </p>
              <button
                onClick={handleRetryChartLoad}
                className="flex items-center text-xs mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${colors.accentColor}30`, color: colors.accentColor }}
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Retry
              </button>
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  maxHeight: "350px",
                  transform: "scale(1.05)", // Increase size by 5%
                }}
                dangerouslySetInnerHTML={{
                  __html: getFallbackChart().svgContent.replace(/fill="currentColor"/g, `fill="${colors.textColor}"`),
                }}
              />
            </div>
          ) : (
            // Always use the fallback SVG instead of the placeholder chart
            <div
              ref={svgContainerRef}
              className="w-full h-full flex items-center justify-center"
              style={{
                maxHeight: "350px",
                transform: "scale(1.05)", // Increase size by 5%
                color: colors.textColor, // Ensure SVG inherits text color
              }}
              dangerouslySetInnerHTML={{
                __html: getFallbackChart().svgContent.replace(/fill="currentColor"/g, `fill="${colors.textColor}"`),
              }}
            />
          )}
        </div>

        {/* Birth details */}
        <div className="w-full text-center mt-4">
          <p
            className="text-xl uppercase tracking-widest mb-2"
            style={{
              color: colors.textColor,
              textShadow: `0 1px 2px rgba(0,0,0,0.3)`, // Add text shadow for better visibility
            }}
          >
            {displayBirthDate}
          </p>
          <p
            className="text-xl uppercase tracking-widest"
            style={{
              color: colors.textColor,
              textShadow: `0 1px 2px rgba(0,0,0,0.3)`, // Add text shadow for better visibility
            }}
          >
            {displayBirthPlace}
          </p>
        </div>

        {/* Sun and Moon sign indicators */}
        <div className="w-full flex justify-between mt-6">
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: colors.accentColor, color: colors.accentColor }}
            >
              <div className="text-center">
                <div className="text-xs uppercase">SUN</div>
                <div className="text-xs uppercase">SIGN</div>
                <div className="text-xl">{sunSign && zodiacSymbols[sunSign]}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: colors.accentColor, color: colors.accentColor }}
            >
              <div className="text-center">
                <div className="text-xs uppercase">MOON</div>
                <div className="text-xs uppercase">SIGN</div>
                <div className="text-xl">{moonSign && zodiacSymbols[moonSign]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

