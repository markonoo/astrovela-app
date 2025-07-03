import { NextResponse } from "next/server"
import { env, devLog, devError } from "@/utils/environment"

export async function GET() {
  try {
    devLog("=== ASTROLOGY API DEBUG ===")
    
    // Check environment variables
    const USER_ID = env.USER_ID
    const API_KEY = env.API_KEY
    
    devLog("USER_ID:", USER_ID ? `Set (length: ${USER_ID.length})` : "Not set")
    devLog("API_KEY:", API_KEY ? `Set (length: ${API_KEY.length})` : "Not set")
    
    if (!USER_ID || !API_KEY || USER_ID.length < 5 || API_KEY.length < 10) {
      return NextResponse.json({
        error: "API credentials not properly configured",
        details: {
          userIdLength: USER_ID?.length || 0,
          apiKeyLength: API_KEY?.length || 0,
          userIdSet: !!USER_ID,
          apiKeySet: !!API_KEY,
          message: "USER_ID and API_KEY environment variables are required for Astrology API"
        }
      }, { status: 400 })
    }
    
    // Test API call with a simple planets request
    const authString = `${USER_ID}:${API_KEY}`
    const base64Auth = Buffer.from(authString).toString("base64")

    devLog("Auth String Format:", `${USER_ID}:API_KEY`)
    devLog("Headers:", {
      Authorization: 'Basic ***',
      'Content-Type': 'application/json'
    })

    const requestBody = {
      day: 1,
      month: 1,
      year: 2000,
      hour: 12,
      min: 0,
      lat: 0,
      lon: 0,
      tzone: 0
    }

    devLog("Request Body:", requestBody)

    const response = await fetch("https://json.astrologyapi.com/v1/planets", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${base64Auth}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })

    devLog("Response Status:", response.status)

    const data = await response.json()
    devLog("Raw Response (first 200 chars):", JSON.stringify(data).substring(0, 200))
    
    if (data.status === false) {
      return NextResponse.json({
        error: "API authentication failed",
        details: {
          apiMessage: data.msg,
          userIdLength: USER_ID.length,
          apiKeyLength: API_KEY.length,
          responseStatus: response.status
        }
      }, { status: 401 })
    }
    
    if (!response.ok) {
      return NextResponse.json({
        error: "API request failed",
        details: {
          status: response.status,
          statusText: response.statusText,
          responseData: data
        }
      }, { status: response.status })
    }
    
    // Extract sun and moon signs for testing
    const sunPlanet = data.find((p: any) => p.name === "Sun")
    const moonPlanet = data.find((p: any) => p.name === "Moon")
    
    devLog("Response Keys:", Object.keys(data))

    return NextResponse.json({
      success: true,
      message: "API credentials are working correctly",
      testData: {
        sunSign: sunPlanet?.sign,
        moonSign: moonPlanet?.sign,
        planetsCount: Array.isArray(data) ? data.length : 0,
        samplePlanet: data[0]
      },
      credentials: {
        userIdLength: USER_ID.length,
        apiKeyLength: API_KEY.length
      }
    })
    
  } catch (error) {
    devError("Debug API error:", error)
    return NextResponse.json({
      error: "Debug test failed",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}

