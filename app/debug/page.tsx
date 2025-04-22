"use client"

import { useState, useEffect } from "react"
import { loadFallbackNatalChart } from "@/utils/fallback-chart"
import { clearAuthErrors } from "@/services/astrology-api-service"
import { safeGetSessionItem } from "@/utils/safe-storage"

export default function DebugPage() {
  const [fallbackSvg, setFallbackSvg] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authError, setAuthError] = useState<boolean>(false)

  // Check if we have an authentication error
  const checkAuthError = (): boolean => {
    return safeGetSessionItem("astrology_api_auth_error") === "true";
  }

  // Load the fallback SVG
  useEffect(() => {
    const loadSvg = async () => {
      setIsLoading(true)
      try {
        const svg = await loadFallbackNatalChart()
        setFallbackSvg(svg)
      } catch (err) {
        console.error("Error loading fallback SVG:", err)
        setError(err instanceof Error ? err.message : "Failed to load fallback SVG")
      } finally {
        setIsLoading(false)
      }
    }

    loadSvg()
    setAuthError(checkAuthError())
  }, [])

  // Handle clearing authentication errors
  const handleClearAuthErrors = () => {
    clearAuthErrors()
    setAuthError(false)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Debug Page</h1>

      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Authentication Status</h2>
        <p className="mb-2">
          Authentication Error:{" "}
          <span className={authError ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
            {authError ? "Yes" : "No"}
          </span>
        </p>
        {authError && (
          <button
            onClick={handleClearAuthErrors}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Clear Authentication Errors
          </button>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fallback Natal Chart</h2>
        {isLoading ? (
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
            <p>Loading fallback chart...</p>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <div className="w-full max-w-md mx-auto" dangerouslySetInnerHTML={{ __html: fallbackSvg || "" }} />
          </div>
        )}
      </div>

      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Environment Variables</h2>
        <p className="mb-2">
          USER_ID: <span className="font-mono">{process.env.USER_ID ? "Set" : "Not Set"}</span>
        </p>
        <p className="mb-2">
          API_KEY: <span className="font-mono">{process.env.API_KEY ? "Set" : "Not Set"}</span>
        </p>
      </div>
    </div>
  )
}

