"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import { cn } from "@/lib/utils"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"
import { getFallbackChartSVG } from "@/utils/fallback-chart"

// Premium color schemes inspired by nordastro.com
export type PremiumColorKey = "cosmic-blue" | "deep-purple" | "forest-green" | "royal-gold" | "midnight-black"

// Define premium color schemes
export const PREMIUM_COLORS = {
  "cosmic-blue": {
    name: "Cosmic Blue",
    bgGradient: "linear-gradient(to bottom right, #1a2a6c, #2a4b8c, #0b3d91)",
    textColor: "#f8f0e3",
    accentColor: "#f0c420"
  },
  "deep-purple": {
    name: "Deep Purple",
    bgGradient: "linear-gradient(to bottom right, #4a1942, #7b2cbf, #3c096c)",
    textColor: "#f8f0e3",
    accentColor: "#f0c420"
  },
  "forest-green": {
    name: "Forest Green",
    bgGradient: "linear-gradient(to bottom right, #004b23, #006400, #007200)",
    textColor: "#f8f0e3",
    accentColor: "#f0c420"
  },
  "royal-gold": {
    name: "Royal Gold",
    bgGradient: "linear-gradient(to bottom right, #7b5800, #996515, #b8860b)",
    textColor: "#f8f0e3",
    accentColor: "#ffffff"
  },
  "midnight-black": {
    name: "Midnight Black",
    bgGradient: "linear-gradient(to bottom right, #0a0908, #1a1a1d, #202020)",
    textColor: "#f8f0e3",
    accentColor: "#f0c420"
  }
}

// Combined color types
export type AllColorSchemeKeys = ColorSchemeKey | PremiumColorKey

interface PremiumBookCoverProps {
  colorScheme?: AllColorSchemeKeys
  name: string
  birthDate: string
  birthPlace: string
  className?: string
  initialChartSvg?: string
}

// Utility function to process SVG
const processSvg = (svgString: string, colors: { textColor: string, bgGradient: string }) => {
  try {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml")
    const svgElement = svgDoc.documentElement

    // Set viewBox and scaling
    if (!svgElement.hasAttribute("viewBox")) {
      svgElement.setAttribute("viewBox", "0 0 800 800")
    }
    svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")
    svgElement.setAttribute("width", "105%")
    svgElement.setAttribute("height", "105%")

    // Update colors
    const textElements = svgElement.querySelectorAll("text")
    textElements.forEach((el) => {
      el.setAttribute("fill", colors.textColor)
      el.setAttribute("stroke", "rgba(0,0,0,0.2)")
      el.setAttribute("stroke-width", "0.2")
    })

    const pathElements = svgElement.querySelectorAll("path, circle, line")
    pathElements.forEach((el) => {
      if (el.getAttribute("stroke")) {
        el.setAttribute("stroke", colors.textColor)
        el.setAttribute("stroke-width", el.getAttribute("stroke-width") || "1")
      }
    })

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error processing SVG:", error)
    return svgString
  }
}

// Generate stars only once
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: 0.4 + Math.random() * 0.6,
    size: 0.5 + Math.random() * 1
  }))
}

export function PremiumBookCover({
  colorScheme = "navy",
  name,
  birthDate,
  birthPlace,
  className = "",
  initialChartSvg,
}: PremiumBookCoverProps) {
  const [chartSvg, setChartSvg] = useState<string | null>(initialChartSvg || null)
  const [isLoading, setIsLoading] = useState(!initialChartSvg)
  const svgContainerRef = useRef<HTMLDivElement>(null)

  // Split name into two parts for better styling
  const [firstName, ...restName] = name.split(' ')
  const lastName = restName.join(' ')

  // Get current colors
  const colors = isPremiumColor(colorScheme) 
    ? PREMIUM_COLORS[colorScheme as PremiumColorKey] 
    : COLOR_SCHEMES[colorScheme as ColorSchemeKey]

  // Check if it's a premium color
  function isPremiumColor(color: AllColorSchemeKeys): boolean {
    return Object.keys(PREMIUM_COLORS).includes(color as string)
  }

  // Load chart SVG
  useEffect(() => {
    if (!initialChartSvg) {
      const svg = getFallbackChartSVG()
      setChartSvg(processSvg(svg, colors))
      setIsLoading(false)
    }
  }, [initialChartSvg, colors])

  // Update SVG colors when loaded or color scheme changes
  useEffect(() => {
    if (chartSvg && svgContainerRef.current) {
      const processedSvg = processSvg(chartSvg, colors)
      svgContainerRef.current.innerHTML = processedSvg
    }
  }, [chartSvg, colors])

  const decorativeStars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-500">Loading book preview...</div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative w-full aspect-[3/4] rounded-lg overflow-hidden',
        className
      )}
      style={{
        background: colors.bgGradient
      }}
    >
      {/* Decorative Stars */}
      {decorativeStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
        {/* Name Section */}
        <div className="text-center space-y-2">
          <h1 
            className={cn(
              'font-serif text-4xl tracking-wider animate-slideDown',
              'opacity-0'
            )}
            style={{ 
              color: colors.textColor,
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            {firstName}
          </h1>
          <h2 
            className={cn(
              'font-serif text-3xl italic animate-slideDown',
              'opacity-0'
            )}
            style={{ 
              color: colors.textColor,
              animationDelay: '0.4s',
              animationFillMode: 'forwards'
            }}
          >
            {lastName}
          </h2>
        </div>

        {/* Zodiac Wheel */}
        <div className="relative w-3/4 aspect-square animate-fadeIn">
          <div
            ref={svgContainerRef}
            className="w-full h-full"
            style={{ color: colors.textColor }}
          />
        </div>

        {/* Birth Details */}
        <div className="text-center space-y-3">
          <div 
            className="font-serif text-lg tracking-wide animate-slideUp opacity-0"
            style={{ 
              color: colors.textColor,
              animationDelay: '0.6s',
              animationFillMode: 'forwards'
            }}
          >
            {birthDate}
          </div>
          <div 
            className="font-serif text-sm italic animate-slideUp opacity-0"
            style={{ 
              color: colors.textColor,
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}
          >
            {birthPlace}
          </div>
        </div>
      </div>
    </div>
  )
}
