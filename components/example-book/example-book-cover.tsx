"use client"

import { useEffect, useState } from "react"
import { PremiumBookCover } from "./premium-book-cover"
import { getFallbackChartSVG, sanitizeSvg } from "@/utils/fallback-chart"

export function ExampleBookCover({ colorScheme = "green" }: { colorScheme?: string }) {
  const [fallbackSVG, setFallbackSVG] = useState<string | null>(null)
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme)
  const [isLoading, setIsLoading] = useState(true)

  // Map color schemes to valid premium book cover color schemes
  const mapColorScheme = (scheme: string): "black" | "navy" | "green" | "burgundy" | "pink" => {
    switch (scheme) {
      case "purple":
        return "navy"
      case "cream":
        return "pink"
      case "black":
        return "black"
      case "navy":
        return "navy"
      case "green":
        return "green"
      case "burgundy":
        return "burgundy"
      default:
        return "green"
    }
  }

  // Update internal state when prop changes
  useEffect(() => {
    setCurrentColorScheme(colorScheme)
    console.log("Color scheme updated to:", colorScheme)
  }, [colorScheme])

  // Load the fallback SVG on mount
  useEffect(() => {
    const loadFallbackSVG = async () => {
      try {
        setIsLoading(true)
        console.log("Loading fallback SVG...")

        // First try to load from the public folder
        try {
          const svgResponse = await fetch("/images/fallback-natal-chart.svg")
          if (svgResponse.ok) {
            const svgText = await svgResponse.text()
            console.log("Loaded SVG from public folder, length:", svgText.length)

            // Sanitize the SVG to fix any invalid attributes
            const sanitizedSvg = sanitizeSvg(svgText)
            setFallbackSVG(sanitizedSvg)
          } else {
            throw new Error("SVG file not found")
          }
        } catch (error) {
          console.log("Error loading SVG from public folder:", error)
          // If file not found, use the generated fallback
          const fallbackSvg = getFallbackChartSVG()
          console.log("Using generated fallback SVG, length:", fallbackSvg.length)
          setFallbackSVG(fallbackSvg)
        }
      } catch (error) {
        console.error("Error loading fallback SVG:", error)
        // Use the generated fallback as a last resort
        const fallbackSvg = getFallbackChartSVG()
        console.log("Using last resort fallback SVG")
        setFallbackSVG(fallbackSvg)
      } finally {
        setIsLoading(false)
      }
    }

    loadFallbackSVG()
  }, [])

  // Listen for color scheme changes from the parent component
  useEffect(() => {
    const handleColorChange = (event: CustomEvent<{ colorScheme: string }>) => {
      console.log("Color change event received:", event.detail.colorScheme)
      setCurrentColorScheme(event.detail.colorScheme)
    }

    // Add event listener for both event types to ensure compatibility
    window.addEventListener("colorSchemeChange" as any, handleColorChange as EventListener)
    window.addEventListener("colorChange" as any, handleColorChange as EventListener)

    // Clean up
    return () => {
      window.removeEventListener("colorSchemeChange" as any, handleColorChange as EventListener)
      window.removeEventListener("colorChange" as any, handleColorChange as EventListener)
    }
  }, [])

  useEffect(() => {
    console.log("ExampleBookCover rendering with:", {
      colorScheme: currentColorScheme,
      hasFallbackSVG: !!fallbackSVG,
      svgLength: fallbackSVG ? fallbackSVG.length : 0,
      isLoading,
    })
  }, [currentColorScheme, fallbackSVG, isLoading])

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-500">Loading book preview...</div>
      </div>
    )
  }

  return (
    <PremiumBookCover
      colorScheme={mapColorScheme(currentColorScheme)}
      name="Olivia"
      birthDate="December 6, 2021"
      birthPlace="Hamburg, Germany"
      initialChartSvg={fallbackSVG || undefined}
    />
  )
}
