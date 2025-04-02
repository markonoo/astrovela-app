"use client"

import { useState, useEffect, useRef } from "react"
import type { ColorSchemeKey } from "@/utils/constants"
import { getColorSchemeDetails } from "@/utils/color-helpers"

interface SimpleBookCoverProps {
  name: string
  birthDate: string
  birthPlace: string
  colorScheme?: ColorSchemeKey | string
}

export default function SimpleBookCover({
  name = "YOUR NAME",
  birthDate = "Your Birth Date",
  birthPlace = "Your Birth Place",
  colorScheme = "default",
}: SimpleBookCoverProps) {
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const [fallbackSVGLoaded, setFallbackSVGLoaded] = useState(false)

  // Get color scheme details
  const colors = getColorSchemeDetails(colorScheme)

  // Load fallback SVG for the natal chart
  useEffect(() => {
    const loadFallbackSVG = async () => {
      try {
        const svgResponse = await fetch("/images/fallback-natal-chart.svg")
        if (svgResponse.ok) {
          const svgText = await svgResponse.text()

          if (svgContainerRef.current) {
            // Apply color to the SVG
            const coloredSvg = svgText.replace(/fill="[^"]*"/g, `fill="${colors.textColor}"`)
            svgContainerRef.current.innerHTML = coloredSvg

            // Style the SVG element
            const svgElement = svgContainerRef.current.querySelector("svg")
            if (svgElement) {
              svgElement.style.width = "100%"
              svgElement.style.height = "100%"
              svgElement.style.maxWidth = "100%"
              svgElement.style.maxHeight = "100%"
            }

            setFallbackSVGLoaded(true)
          }
        }
      } catch (error) {
        console.error("Error loading fallback SVG:", error)
      }
    }

    loadFallbackSVG()
  }, [colors.textColor])

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

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: colors.bgColor }}>
      <div className="h-full flex flex-col items-center justify-between p-6 text-white relative">
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
          <h2 className="text-xl font-bold tracking-wider uppercase" style={{ color: colors.textColor }}>
            {name}
          </h2>
          <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: colors.accentColor }}></div>
        </div>

        {/* Natal Chart */}
        <div className="w-48 h-48 my-4 z-10 relative flex items-center justify-center">
          <div
            ref={svgContainerRef}
            className="w-full h-full flex items-center justify-center"
            style={{ color: colors.textColor }}
          />
        </div>

        {/* Birth details */}
        <div className="w-full text-center z-10">
          <p className="text-xs tracking-wider uppercase" style={{ color: colors.textColor }}>
            {birthDate}
          </p>
          <p className="text-xs tracking-wider uppercase mt-1" style={{ color: colors.textColor }}>
            {birthPlace}
          </p>
        </div>

        {/* Sun and Moon sign indicators */}
        <div className="w-full flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: colors.accentColor, color: colors.accentColor }}
            >
              <div className="text-center">
                <div className="text-[8px] uppercase">SUN</div>
                <div className="text-lg">{zodiacSymbols.libra}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: colors.accentColor, color: colors.accentColor }}
            >
              <div className="text-center">
                <div className="text-[8px] uppercase">MOON</div>
                <div className="text-lg">{zodiacSymbols.gemini}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

