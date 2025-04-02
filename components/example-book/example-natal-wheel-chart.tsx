"use client"

import { useState, useEffect } from "react"
import { useOliviaNatalChart } from "./cached-natal-chart"
import { Skeleton } from "@/components/ui/skeleton"

export function ExampleNatalWheelChart() {
  const { oliviaSvg, isLoading, error, usedFallback, authError } = useOliviaNatalChart()
  const [svgContent, setSvgContent] = useState<string | null>(null)

  useEffect(() => {
    if (oliviaSvg) {
      setSvgContent(oliviaSvg)
    }
  }, [oliviaSvg])

  if (isLoading) {
    return (
      <div className="relative w-full aspect-square max-w-md mx-auto">
        <Skeleton className="absolute inset-0 rounded-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center bg-gray-100 rounded-full">
        <div className="text-center p-4">
          {authError ? (
            <>
              <p className="text-red-500 font-medium">API Authentication Error</p>
              <p className="text-sm text-gray-600 mt-2">Please check your Astrology API credentials.</p>
            </>
          ) : (
            <p className="text-red-500">Error loading chart: {error.message}</p>
          )}
        </div>
      </div>
    )
  }

  if (!svgContent) {
    return (
      <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center bg-gray-100 rounded-full">
        <p className="text-gray-500">No chart available</p>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto" dangerouslySetInnerHTML={{ __html: svgContent }} />
  )
}

