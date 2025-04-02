"use client"

import { useEffect, useState } from "react"
import { useOliviaNatalChart } from "./cached-natal-chart"
import { checkAstrologyApiCredentials } from "@/utils/api-credentials-checker"

// This component pre-loads Olivia's data when the app starts
export function OliviaDataLoader() {
  // This will trigger the fetch of Olivia's natal chart
  const { oliviaSvg, isLoading, error, usedFallback, authError } = useOliviaNatalChart()
  const [credentialsChecked, setCredentialsChecked] = useState(false)
  const [checkAttempts, setCheckAttempts] = useState(0)
  const MAX_ATTEMPTS = 2

  // Check API credentials on mount
  useEffect(() => {
    const verifyCredentials = async () => {
      try {
        console.log(`Debug - Credential check attempt ${checkAttempts + 1}/${MAX_ATTEMPTS}`)
        const result = await checkAstrologyApiCredentials()

        if (!result.valid) {
          console.warn("Astrology API credentials check failed:", result.message)
          // Store the auth error in session storage
          try {
            sessionStorage.setItem("astrology_api_auth_error", "true")
          } catch (e) {
            console.warn("Could not access sessionStorage:", e)
          }

          // If we haven't reached max attempts, try again
          if (checkAttempts < MAX_ATTEMPTS - 1) {
            setCheckAttempts((prev) => prev + 1)
            return // Don't set credentialsChecked yet
          }
        } else {
          console.log("Astrology API credentials verified successfully")
          // Clear any stored auth errors
          try {
            sessionStorage.removeItem("astrology_api_auth_error")
          } catch (e) {
            console.warn("Could not access sessionStorage:", e)
          }
        }
      } catch (e) {
        console.error("Error checking API credentials:", e)

        // If we haven't reached max attempts, try again
        if (checkAttempts < MAX_ATTEMPTS - 1) {
          setCheckAttempts((prev) => prev + 1)
          return // Don't set credentialsChecked yet
        }
      } finally {
        // Only mark as checked if we've reached max attempts or succeeded
        if (checkAttempts >= MAX_ATTEMPTS - 1) {
          setCredentialsChecked(true)
        }
      }
    }

    // Only check credentials if they haven't been checked yet
    if (!credentialsChecked) {
      verifyCredentials()
    }
  }, [credentialsChecked, checkAttempts])

  // Log the loading status
  useEffect(() => {
    if (isLoading) {
      console.log("Pre-loading Olivia's natal chart...")
    } else if (error) {
      if (authError) {
        console.warn("Authentication error with astrology API:", error)
        console.log("Using fallback chart visualization for Olivia due to API authentication issue")
      } else {
        console.warn("Error pre-loading Olivia's natal chart:", error)
        if (usedFallback) {
          console.log("Using fallback chart visualization for Olivia")
        }
      }
    } else if (oliviaSvg) {
      console.log("Successfully pre-loaded Olivia's natal chart", usedFallback ? "(using fallback)" : "")
    }
  }, [isLoading, error, oliviaSvg, usedFallback, authError])

  // This component doesn't render anything
  return null
}

