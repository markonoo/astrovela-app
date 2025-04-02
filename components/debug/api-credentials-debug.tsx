"use client"

import { useState, useEffect } from "react"
import { checkAstrologyApiCredentials, clearAuthErrors } from "@/utils/api-credentials-checker"

export function ApiCredentialsDebug() {
  const [isChecking, setIsChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<{ valid: boolean; message: string; details?: any } | null>(null)
  const [hasStoredError, setHasStoredError] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // Check for stored auth errors
  useEffect(() => {
    try {
      const hasError = sessionStorage.getItem("astrology_api_auth_error") === "true"
      setHasStoredError(hasError)
    } catch (e) {
      console.warn("Could not access sessionStorage:", e)
    }
  }, [])

  const handleCheckCredentials = async () => {
    setIsChecking(true)
    try {
      const result = await checkAstrologyApiCredentials()
      setCheckResult(result)

      // Update stored error state
      setHasStoredError(!result.valid)
    } catch (error) {
      setCheckResult({
        valid: false,
        message: `Error checking credentials: ${error instanceof Error ? error.message : String(error)}`,
        details: { error: String(error) },
      })
    } finally {
      setIsChecking(false)
    }
  }

  const handleClearErrors = () => {
    clearAuthErrors()
    setHasStoredError(false)
    setCheckResult(null)
  }

  const handleTestEndpoint = async () => {
    try {
      window.open("/api/astrology-debug", "_blank")
    } catch (error) {
      console.error("Error opening debug endpoint:", error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Astrology API Credentials</h3>

        <div className="flex space-x-2">
          <button
            onClick={handleCheckCredentials}
            disabled={isChecking}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
          >
            {isChecking ? "Checking..." : "Check Credentials"}
          </button>

          <button onClick={handleTestEndpoint} className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">
            Test API Endpoint
          </button>

          {hasStoredError && (
            <button onClick={handleClearErrors} className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm">
              Clear Stored Errors
            </button>
          )}
        </div>
      </div>

      {checkResult && (
        <div
          className={`p-3 rounded-md ${checkResult.valid ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
        >
          <p className="font-medium">{checkResult.valid ? "API Credentials Valid" : "API Credentials Invalid"}</p>
          <p className="text-sm">{checkResult.message}</p>

          {!checkResult.valid && (
            <div className="mt-2 text-sm">
              <p>Make sure your environment variables are correctly set:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>USER_ID</li>
                <li>API_KEY</li>
              </ul>
            </div>
          )}

          {checkResult.details && (
            <div className="mt-2">
              <button onClick={() => setShowDetails(!showDetails)} className="text-sm underline">
                {showDetails ? "Hide Details" : "Show Details"}
              </button>

              {showDetails && (
                <pre className="mt-2 p-2 bg-gray-100 text-gray-800 rounded text-xs overflow-auto max-h-40">
                  {JSON.stringify(checkResult.details, null, 2)}
                </pre>
              )}
            </div>
          )}
        </div>
      )}

      {hasStoredError && !checkResult && (
        <div className="p-3 rounded-md bg-yellow-50 text-yellow-700">
          <p className="font-medium">Authentication Error Detected</p>
          <p className="text-sm">
            A previous authentication error has been stored. The application is using fallback visualizations. Check
            your API credentials and clear the stored errors to try again.
          </p>
        </div>
      )}

      <div className="mt-4 p-3 rounded-md bg-blue-50 text-blue-700">
        <p className="font-medium">Debugging Tips</p>
        <ul className="list-disc pl-5 mt-1 text-sm">
          <li>Check browser console for detailed logs</li>
          <li>Verify that your API credentials are correct</li>
          <li>Try the "Test API Endpoint" button to see raw API response</li>
          <li>Clear stored errors if you've updated your credentials</li>
          <li>Check for CORS issues in the browser console</li>
        </ul>
      </div>
    </div>
  )
}

