"use client"

import { useState } from "react"
import { fetchNatalWheelChartSVG } from "@/services/astrology-api-service"

export function useNatalWheelChart() {
  const [natalWheelChartSVG, setNatalWheelChartSVG] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [usedFallback, setUsedFallback] = useState(false)

  const getNatalWheelChart = async (birthDate: string, birthTime: string, latitude: number, longitude: number) => {
    setIsLoading(true)
    setError(null)
    setUsedFallback(false)

    try {
      const svg = await fetchNatalWheelChartSVG(birthDate, birthTime, latitude, longitude)
      setNatalWheelChartSVG(svg)

      // Check if we used a fallback (this is a heuristic)
      if (svg.includes("fallback") || svg.includes("placeholder")) {
        setUsedFallback(true)
      }

      return svg
    } catch (err) {
      console.error("Error fetching natal wheel chart:", err)
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    natalWheelChartSVG,
    isLoading,
    error,
    usedFallback,
    getNatalWheelChart,
  }
}

