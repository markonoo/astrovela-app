"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Loader2 } from "lucide-react"
import { sanitizeSvg, getFallbackChart, applySvgColorScheme, getColorScheme } from "@/utils/chart-utils"

interface BookCoverProps {
  colorScheme?: string
  name?: string
  birthDate?: string
  birthPlace?: string
  className?: string
  svgContent?: string | null
  isExample?: boolean
}

export function BookCover({
  colorScheme = "green",
  name = "YOUR NAME",
  birthDate = "Your Birth Date",
  birthPlace = "Your Birth Place",
  className = "",
  svgContent = null,
  isExample = false,
}: BookCoverProps) {
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme)
  const [isLoaded, setIsLoaded] = useState(false)
  const [wheelChartSVG, setWheelChartSVG] = useState<string | null>(svgContent)
  const [isLoadingChart, setIsLoadingChart] = useState(false)
  const svgContainerRef = useRef<HTMLDivElement>(null)

  // Get color scheme details
  const colors = useMemo(() => getColorScheme(currentColorScheme), [currentColorScheme])

  // Update color scheme when prop changes
  useEffect(() => {
    setCurrentColorScheme(colorScheme)
  }, [colorScheme])

  // Listen for color scheme changes
  useEffect(() => {
    const handleColorChange = (event: CustomEvent<{ colorScheme: string }>) => {
      setCurrentColorScheme(event.detail.colorScheme)
    }

    window.addEventListener("colorSchemeChange" as any, handleColorChange as EventListener)

    return () => {
      window.removeEventListener("colorSchemeChange" as any, handleColorChange as EventListener)
    }
  }, [])

  // Load fallback SVG if needed
  useEffect(() => {
    const loadSvg = async () => {
      if (wheelChartSVG || !isExample) return

      try {
        setIsLoadingChart(true)
        const fallbackSvg = getFallbackChart()
        setWheelChartSVG(fallbackSvg)
      } catch (error) {
        console.error("Error loading SVG:", error)
      } finally {
        setIsLoadingChart(false)
      }
    }

    loadSvg()
  }, [wheelChartSVG, isExample])

  // Update SVG with color scheme
  useEffect(() => {
    if (wheelChartSVG && svgContainerRef.current) {
      try {
        // Sanitize and apply color scheme
        const sanitizedSvg = sanitizeSvg(wheelChartSVG)
        const coloredSvg = applySvgColorScheme(sanitizedSvg, colors.textColor)

        // Set the SVG content
        svgContainerRef.current.innerHTML = coloredSvg

        // Apply additional styling to the SVG element
        const svgElement = svgContainerRef.current.querySelector("svg")
        if (svgElement) {
          svgElement.style.display = "block"
          svgElement.style.margin = "0 auto"
          svgElement.style.maxWidth = "105%"
          svgElement.style.maxHeight = "105%"
          svgElement.style.position = "relative"
          svgElement.style.zIndex = "10"
        }
      } catch (error) {
        console.error("Error processing SVG:", error)
        svgContainerRef.current.innerHTML = wheelChartSVG
      }
    }
  }, [wheelChartSVG, colors.textColor])

  // Simulate loading for a smoother transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Zodiac symbols for sun and moon signs
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

  // For example book, use fixed sun and moon signs
  const sunSign = isExample ? "sagittarius" : "libra"
  const moonSign = isExample ? "taurus" : "gemini"

  return (
    <div
      className={`w-full h-full rounded-lg overflow-hidden shadow-xl transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
          <h2
            className="text-4xl font-bold tracking-widest uppercase"
            style={{
              color: colors.textColor,
              textShadow: `0 2px 4px rgba(0,0,0,0.5)`,
              position: "relative",
              zIndex: 20,
            }}
          >
            {name}
          </h2>
        </div>

        {/* Natal Chart */}
        <div className="w-full flex-grow flex items-center justify-center my-4 relative">
          {isLoadingChart ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-32 h-32">
                <Loader2 className="h-12 w-12 animate-spin" style={{ color: colors.accentColor }} />
              </div>
              <p className="text-sm mt-4" style={{ color: colors.textColor }}>
                Loading chart...
              </p>
            </div>
          ) : (
            <div
              ref={svgContainerRef}
              className="w-full h-full flex items-center justify-center"
              style={{
                maxHeight: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "scale(1.05)",
                color: colors.textColor,
                position: "relative",
                zIndex: 10,
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
              textShadow: `0 1px 2px rgba(0,0,0,0.3)`,
            }}
          >
            {birthDate}
          </p>
          <p
            className="text-xl uppercase tracking-widest"
            style={{
              color: colors.textColor,
              textShadow: `0 1px 2px rgba(0,0,0,0.3)`,
            }}
          >
            {birthPlace}
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
                <div className="text-xl">{zodiacSymbols[sunSign]}</div>
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
                <div className="text-xl">{zodiacSymbols[moonSign]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

