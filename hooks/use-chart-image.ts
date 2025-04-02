"use client"

import { useState, useCallback } from "react"
import { fetchNatalWheelChart } from "@/services/astrology-api-service"
import { getFallbackChartSVG } from "@/utils/fallback-chart"

interface ChartImageResult {
  chartUrl: string | null
  svgContent: string | null
}

export function useChartImage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getFallbackChart = useCallback(() => {
    console.log("Getting fallback chart")

    // Try to get from sessionStorage first for better performance
    if (typeof window !== "undefined" && sessionStorage.getItem("fallbackNatalChartSVG")) {
      const cachedSvg = sessionStorage.getItem("fallbackNatalChartSVG")
      console.log("Using cached fallback SVG from sessionStorage")
      return {
        chartUrl: null,
        svgContent: cachedSvg,
      }
    }

    // Otherwise generate a new one
    return {
      chartUrl: null,
      svgContent: getFallbackChartSVG(),
    }
  }, [])

  const getChartImage = useCallback(
    async (birthDate: string, birthTime: string, latitude: number, longitude: number): Promise<ChartImageResult> => {
      setIsLoading(true)
      setError(null)

      console.log("Getting chart image for:", { birthDate, birthTime, latitude, longitude })

      try {
        const result = await fetchNatalWheelChart(birthDate, birthTime, latitude, longitude)
        console.log("Chart image fetched successfully:", {
          hasChartUrl: !!result.chartUrl,
          hasSvgContent: !!result.svgContent,
          svgLength: result.svgContent ? result.svgContent.length : 0,
        })
        return result
      } catch (error) {
        console.error("Error fetching chart image:", error)
        setIsLoading(false)
        setError("Failed to load chart. Using fallback chart.")

        console.error("Error in useChartImage:", error)
        setError(error instanceof Error ? error.message : "Failed to load chart")

        // Return fallback chart
        console.log("Using fallback chart due to error")
        const fallbackResult = getFallbackChart()
        console.log("Fallback chart SVG length:", fallbackResult.svgContent ? fallbackResult.svgContent.length : 0)
        return fallbackResult
      } finally {
        setIsLoading(false)
      }
    },
    [getFallbackChart],
  )

  return {
    getChartImage,
    getFallbackChart,
    isLoading,
    error,
  }
}

