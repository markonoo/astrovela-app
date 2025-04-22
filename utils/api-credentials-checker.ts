/**
 * Utility to check if the Astrology API credentials are valid
 */

import { safeRemoveSessionItem } from "@/utils/safe-storage";

// API configuration - using the provided credentials for testing
const USER_ID = process.env.USER_ID || "639199"
const API_KEY = process.env.API_KEY || "2159934d3aa35fdb3081aeed8f846cda7e79b99e"
const ASTROLOGY_API_BASE_URL = "https://json.astrologyapi.com/v1"

/**
 * Clears any stored authentication errors
 */
export function clearAuthErrors() {
  safeRemoveSessionItem("astrology_api_auth_error");
  console.log("Debug - Cleared Auth Errors");
}

/**
 * Checks if the Astrology API credentials are valid
 * Makes a simple API call to verify authentication
 */
export async function checkAstrologyApiCredentials(): Promise<{ valid: boolean; message: string; details?: any }> {
  try {
    console.log("Debug - Checking API credentials")
    console.log("Debug - User ID Length:", USER_ID.length)
    console.log("Debug - API Key Length:", API_KEY.length)

    // Create auth string and encode to base64
    const authString = `${USER_ID}:${API_KEY}`
    console.log("Debug - Auth String Format:", `${USER_ID}:API_KEY`)

    let base64Auth = ""
    if (typeof window !== "undefined" && window.btoa) {
      base64Auth = window.btoa(authString)
      console.log("Debug - Using window.btoa for encoding")
    } else if (typeof Buffer !== "undefined") {
      base64Auth = Buffer.from(authString).toString("base64")
      console.log("Debug - Using Buffer for encoding")
    } else {
      console.error("Debug - No method available for base64 encoding")
      throw new Error("Base64 encoding not available")
    }

    console.log("Debug - Base64 Auth (first 10 chars):", base64Auth.substring(0, 10) + "...")

    // Headers with Basic Auth
    const headers = {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/json",
    }

    // Test data - more complete data for planets endpoint
    const testData = {
      day: 1,
      month: 1,
      year: 2000,
      hour: 12,
      min: 0,
      lat: 0,
      lon: 0,
      tzone: 0,
    }

    console.log("Debug - Test Request Body:", testData)

    // Use the planets endpoint which is known to work with POST requests
    console.log("Debug - Making test request to:", `${ASTROLOGY_API_BASE_URL}/planets`)

    const response = await fetch(`${ASTROLOGY_API_BASE_URL}/planets`, {
      method: "POST",
      headers,
      body: JSON.stringify(testData),
    })

    console.log("Debug - Response Status:", response.status, response.statusText)

    // Get the raw response text first for debugging
    const rawResponseText = await response.text()
    console.log("Debug - Raw Response (first 100 chars):", rawResponseText.substring(0, 100) + "...")

    // Try to parse the response as JSON
    let data
    try {
      data = JSON.parse(rawResponseText)
      console.log("Debug - Response Data Keys:", Object.keys(data))
    } catch (e) {
      console.error("Debug - Failed to parse response as JSON:", e)
      return {
        valid: false,
        message: `Failed to parse API response as JSON: ${rawResponseText.substring(0, 100)}...`,
        details: {
          status: response.status,
          statusText: response.statusText,
          rawResponse: rawResponseText.substring(0, 200) + "...",
        },
      }
    }

    // Check for authentication error or rate limit
    if (data.status === false || data.error) {
      const isRateLimit = data.error === "TRIAL_REQUEST_LIMIT_EXCEEDED";
      const message = data.msg || data.error;
      
      console.error(`Debug - API ${isRateLimit ? "rate limit reached" : "authentication failed"}:`, message);
      
      return {
        valid: !isRateLimit, // Still valid if just rate limited
        message: isRateLimit ? "Daily API limit reached, using fallback data" : `Authentication failed: ${message}`,
        details: data,
      }
    }

    // If we got a valid response, credentials are good
    if (response.ok) {
      console.log("Debug - API credentials are valid")
      return {
        valid: true,
        message: "API credentials are valid",
        details: { status: "success", dataKeys: Object.keys(data) },
      }
    }

    console.error("Debug - API error:", response.status, response.statusText)
    return {
      valid: false,
      message: `API error: ${response.status} ${response.statusText}`,
      details: data,
    }
  } catch (error) {
    console.error("Debug - Error checking credentials:", error)
    return {
      valid: false,
      message: `Error checking credentials: ${error instanceof Error ? error.message : String(error)}`,
      details: { error: String(error) },
    }
  }
}

