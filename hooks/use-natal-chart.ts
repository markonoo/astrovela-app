"use client"

import { useState } from "react"
import type { NatalChart } from "@/types/astrology"
import { fetchNatalChart } from "@/services/astrology-api-service"

export function useNatalChart() {
  const [natalChart, setNatalChart] = useState<NatalChart | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getNatalChart = async (birthDate: string, birthTime: string, latitude: number, longitude: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const chart = await fetchNatalChart(birthDate, birthTime, latitude, longitude)
      setNatalChart(chart)
      return chart
    } catch (err) {
      console.error("Error fetching natal chart:", err)
      const error = err instanceof Error ? err : new Error(String(err))
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    natalChart,
    isLoading,
    error,
    getNatalChart,
  }
}

