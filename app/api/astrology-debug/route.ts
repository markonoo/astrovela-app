import { type NextRequest, NextResponse } from "next/server"

// API configuration - NO HARDCODED CREDENTIALS FOR SECURITY
const USER_ID = process.env.USER_ID || ""
const API_KEY = process.env.API_KEY || ""
const ASTROLOGY_API_BASE_URL = "https://json.astrologyapi.com/v1"

export async function GET() {
  try {
    // Validate that credentials are provided
    if (!USER_ID || !API_KEY) {
      return NextResponse.json(
        {
          error: "Missing API credentials",
          message: "USER_ID and API_KEY environment variables are required",
          provided: {
            USER_ID: !!USER_ID,
            API_KEY: !!API_KEY
          }
        },
        { status: 500 }
      )
    }

    // Create auth string and encode to base64
    const authString = `${USER_ID}:${API_KEY}`
    const base64Auth = Buffer.from(authString).toString("base64")

    // Headers with Basic Auth
    const headers = {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/json",
    }

    // Log the auth details (without exposing the full key)
    console.log("Debug - Auth String Format:", `${USER_ID}:API_KEY`)
    console.log("Debug - Headers:", {
      Authorization: `Basic ${base64Auth.substring(0, 10)}...`,
      "Content-Type": "application/json",
    })

    // Simple test data
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

    console.log("Debug - Request Body:", testData)

    // Make a simple API call to test connectivity
    const response = await fetch(`${ASTROLOGY_API_BASE_URL}/planets`, {
      method: "POST",
      headers,
      body: JSON.stringify(testData),
    })

    console.log("Debug - Response Status:", response.status, response.statusText)

    // Get the raw response text
    const rawResponseText = await response.text()
    console.log("Debug - Raw Response (first 200 chars):", rawResponseText.substring(0, 200))

    // Try to parse the response as JSON
    let responseData
    try {
      responseData = JSON.parse(rawResponseText)
      console.log("Debug - Response Keys:", Object.keys(responseData))
    } catch (e) {
      console.error("Debug - Failed to parse response as JSON:", e)
      responseData = { error: "Failed to parse response as JSON", rawResponse: rawResponseText }
    }

    return NextResponse.json({
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers),
      data: responseData,
      authDetails: {
        userId: USER_ID,
        keyLength: API_KEY.length,
        base64AuthPrefix: base64Auth.substring(0, 10) + "...",
      },
    })
  } catch (error) {
    console.error("Debug API error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "An unknown error occurred",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}

