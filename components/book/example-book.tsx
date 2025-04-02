"use client"

import { useState, useEffect } from "react"
import { BookCover } from "./book-cover"
import { getFallbackChart, preloadFallbackChart } from "@/utils/chart-utils"

export function ExampleBook({ colorScheme = "green" }: { colorScheme?: string }) {
  const [fallbackSVG, setFallbackSVG] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load the fallback SVG on mount
  useEffect(() => {
    const loadSvg = async () => {
      try {
        setIsLoading(true)
        // Try to get from sessionStorage first
        if (typeof window !== "undefined" && sessionStorage.getItem("fallbackNatalChartSVG")) {
          setFallbackSVG(sessionStorage.getItem("fallbackNatalChartSVG"))
        } else {
          // Otherwise preload and get the fallback chart
          await preloadFallbackChart()
          setFallbackSVG(getFallbackChart())
        }
      } catch (error) {
        console.error("Error loading fallback SVG:", error)
        setFallbackSVG(getFallbackChart())
      } finally {
        setIsLoading(false)
      }
    }

    loadSvg()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-500">Loading book preview...</div>
      </div>
    )
  }

  return (
    <BookCover
      colorScheme={colorScheme}
      name="Olivia"
      birthDate="December 6, 2021"
      birthPlace="Hamburg, Germany"
      svgContent={fallbackSVG}
      isExample={true}
    />
  )
}

