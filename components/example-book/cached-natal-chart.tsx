"use client"

import { useState, useEffect } from "react"
import { fetchNatalWheelChartSVG } from "@/services/astrology-api-service"
import { getOliviaFallbackSVG } from "./olivia-fallback-chart"

// Cache for Olivia's natal chart SVG
let cachedOliviaSvg: string | null = null
let cachedError: Error | null = null
let isFetching = false
let usedFallbackSvg = false
let hasAuthError = false

/**
 * Hook to get Olivia's natal chart SVG
 * Uses caching to avoid repeated API calls
 */
export function useOliviaNatalChart() {
  const [oliviaSvg, setOliviaSvg] = useState<string | null>(cachedOliviaSvg)
  const [isLoading, setIsLoading] = useState(!cachedOliviaSvg && !cachedError)
  const [error, setError] = useState<Error | null>(cachedError)
  const [usedFallback, setUsedFallback] = useState(usedFallbackSvg)
  const [authError, setAuthError] = useState(hasAuthError)

  useEffect(() => {
    console.log("Debug - useOliviaNatalChart effect running")
    console.log("Debug - Cache state:", {
      cachedOliviaSvg: !!cachedOliviaSvg,
      cachedError: !!cachedError,
      isFetching,
      usedFallbackSvg,
    })

    // Check if we already have a cached result
    if (cachedOliviaSvg || cachedError || isFetching) {
      console.log("Debug - Using cached result or already fetching")
      return
    }

    // Check if we have a stored auth error
    const checkStoredAuthError = () => {
      try {
        const hasError = sessionStorage.getItem("astrology_api_auth_error") === "true"
        console.log("Debug - Stored auth error:", hasError)
        return hasError
      } catch (e) {
        console.warn("Could not access sessionStorage:", e)
        return false
      }
    }

    const storedAuthError = checkStoredAuthError()

    // If we have a stored auth error, use the fallback SVG
    if (storedAuthError) {
      console.log("Debug - Using fallback chart for Olivia due to stored auth error")
      const fallbackSvg = getOliviaFallbackSVG()
      cachedOliviaSvg = fallbackSvg
      usedFallbackSvg = true
      hasAuthError = true
      setOliviaSvg(fallbackSvg)
      setUsedFallback(true)
      setAuthError(true)
      setIsLoading(false)
      return
    }

    // Fetch Olivia's natal chart SVG
    const fetchOliviaNatalChart = async () => {
      console.log("Debug - Fetching Olivia's natal chart")
      isFetching = true
      setIsLoading(true)

      try {
        // Olivia's birth details
        console.log("Debug - Using Olivia's birth details")
        const svg = await fetchNatalWheelChartSVG(
          "2021-12-06", // Birth date
          "12:00", // Birth time
          40.7128, // Latitude (New York)
          -74.006, // Longitude
          -5.0, // Timezone (EST)
        )

        console.log("Debug - Successfully fetched Olivia's chart, SVG length:", svg.length)
        cachedOliviaSvg = svg
        setOliviaSvg(svg)
        setUsedFallback(false)
        usedFallbackSvg = false
      } catch (err) {
        console.error("Debug - Error fetching Olivia's natal chart:", err)

        // Check if it's an auth error
        const isAuthErr =
          err instanceof Error &&
          (err.message.includes("authentication") || err.message.includes("invalid") || err.message.includes("User ID"))

        console.log("Debug - Is auth error:", isAuthErr)

        if (isAuthErr) {
          hasAuthError = true
          setAuthError(true)
        }

        // Use fallback SVG
        console.log("Debug - Using fallback SVG due to error")
        const fallbackSvg = getOliviaFallbackSVG()
        cachedOliviaSvg = fallbackSvg
        usedFallbackSvg = true
        setOliviaSvg(fallbackSvg)
        setUsedFallback(true)

        // Store the error
        const error = err instanceof Error ? err : new Error(String(err))
        cachedError = error
        setError(error)
      } finally {
        setIsLoading(false)
        isFetching = false
        console.log("Debug - Fetch completed")
      }
    }

    fetchOliviaNatalChart()
  }, [])

  return { oliviaSvg, isLoading, error, usedFallback, authError }
}

