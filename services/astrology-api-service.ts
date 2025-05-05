/**
 * AstrologyAPI Service
 * Handles all interactions with the astrologyapi.com API
 */

import type { NatalChart, PlanetPosition, ZodiacSign, House, Angle } from "@/types/astrology"
import { getFallbackNatalChart } from "@/utils/fallback-chart"
import { safeGetSessionItem, safeSetSessionItem, safeRemoveSessionItem } from "@/utils/safe-storage"

// API configuration - using the provided credentials
const USER_ID = process.env.USER_ID || "640177"
const API_KEY = process.env.API_KEY || "47d917ee06a32e6cc1f7bbb0c7a51f944ee12bee"
const ASTROLOGY_API_BASE_URL = "https://json.astrologyapi.com/v1"

// Check if API credentials are properly configured
const hasValidCredentials = () => {
  const hasCredentials = USER_ID && API_KEY && USER_ID.length > 0 && API_KEY.length > 0

  console.log("Debug - Has Valid Credentials:", hasCredentials)
  console.log("Debug - User ID Length:", USER_ID.length)
  console.log("Debug - API Key Length:", API_KEY.length)

  return hasCredentials
}

// Store authentication error status in session storage to avoid repeated failed attempts
const setAuthError = (hasError: boolean) => {
  safeSetSessionItem("astrology_api_auth_error", hasError ? "true" : "false");
  console.log("Debug - Set Auth Error:", hasError);
}

// Check if we've already encountered an authentication error
const hasAuthError = (): boolean => {
  const hasError = safeGetSessionItem("astrology_api_auth_error") === "true";
  console.log("Debug - Has Auth Error:", hasError);
  return hasError;
}

// Clear any stored authentication errors
export const clearAuthErrors = () => {
  safeRemoveSessionItem("astrology_api_auth_error");
  console.log("Debug - Cleared Auth Errors");
}

/**
 * Creates Basic Auth headers for API requests
 * Implements the same approach as the successful Python example
 */
const getAuthHeaders = (): Record<string, string> => {
  try {
    // Create the auth string in the format "userId:apiKey"
    const authString = `${USER_ID}:${API_KEY}`
    console.log("Debug - Auth String Format:", `${USER_ID}:API_KEY`)

    // Encode to base64 - similar to Python's HTTPBasicAuth
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

    // Return headers with Basic Auth
    return {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/json",
    }
  } catch (error) {
    console.error("Error creating auth headers:", error)
    return {
      "Content-Type": "application/json",
      "Authorization": "", // Return empty string instead of undefined
    }
  }
}

/**
 * Fetches natal chart data from AstrologyAPI
 */
export async function fetchNatalChart(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
  timezone = 5.5, // Default to IST
): Promise<NatalChart> {
  try {
    // Check for previous auth errors to avoid repeated failed API calls
    if (hasAuthError()) {
      console.warn("Skipping API call due to previous authentication error")
      throw new Error("API authentication error - using fallback data")
    }

    // Check credentials first
    if (!hasValidCredentials()) {
      setAuthError(true)
      throw new Error("API credentials not configured")
    }

    // Format date and time for API
    const [year, month, day] = birthDate.split("-").map(Number)
    const [hour, minute] = birthTime.split(":").map(Number)

    // Prepare the request body
    const requestBody = {
      day,
      month,
      year,
      hour,
      min: minute,
      lat: latitude,
      lon: longitude,
      tzone: timezone,
    }

    console.log("Fetching natal chart with params:", requestBody)
    console.log("Using auth headers:", getAuthHeaders())

    // Make the API request for planets
    const planetsResponse = await fetch(`${ASTROLOGY_API_BASE_URL}/planets`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(requestBody),
    })

    // Parse the response even if status is not OK to check for auth errors
    const planetsData = await planetsResponse.json()

    // Check for authentication error in response
    if (planetsData.status === false && planetsData.msg) {
      console.error("API error:", planetsData.msg)

      // Check if it's an authentication error
      if (planetsData.msg.includes("invalid") || planetsData.msg.includes("User ID")) {
        setAuthError(true)
      }

      throw new Error(planetsData.msg)
    }

    if (!planetsResponse.ok) {
      throw new Error(`Planets API error: ${planetsResponse.status} ${planetsResponse.statusText}`)
    }

    // Fetch houses data
    const housesResponse = await fetch(`${ASTROLOGY_API_BASE_URL}/houses`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(requestBody),
    })

    const housesData = await housesResponse.json()

    if (housesData.status === false && housesData.msg) {
      throw new Error(housesData.msg)
    }

    if (!housesResponse.ok) {
      throw new Error(`Houses API error: ${housesResponse.status} ${housesResponse.statusText}`)
    }

    // Fetch aspects data
    const aspectsResponse = await fetch(`${ASTROLOGY_API_BASE_URL}/aspects`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(requestBody),
    })

    let aspectsData = []
    if (aspectsResponse.ok) {
      aspectsData = await aspectsResponse.json()
    }

    // Format the data into our application's structure
    return formatNatalChartResponse(planetsData, housesData, aspectsData, {
      date: birthDate,
      time: birthTime,
      location: {
        latitude,
        longitude,
        name: "",
      },
    })
  } catch (error) {
    console.error("Error fetching natal chart:", error)
    throw error
  }
}

/**
 * Fetches natal wheel chart from AstrologyAPI
 * Updated to handle the new response format that returns a chart URL
 */
export async function fetchNatalWheelChart(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
  timezone = 5.5, // Default to IST
  sign_icon_color: string = "WHITE",
  sign_background: string[] = [
    "clear", "clear", "clear", "clear", "clear", "clear",
    "clear", "clear", "clear", "clear", "clear", "clear"
  ]
): Promise<{ chartUrl: string; svgContent?: string }> {
  try {
    console.log("Debug - fetchNatalWheelChart called with:", { birthDate, birthTime, latitude, longitude, timezone })

    // Check for previous auth errors to avoid repeated failed API calls
    if (hasAuthError()) {
      console.warn("Skipping API call due to previous authentication error")

      // Use the general fallback SVG for other charts
      return {
        chartUrl: "",
        svgContent: getFallbackNatalChart(),
      }
    }

    // Check credentials first
    if (!hasValidCredentials()) {
      console.warn("Missing API credentials for AstrologyAPI")
      setAuthError(true)
      throw new Error("API credentials not configured")
    }

    // Format date and time for API
    const [year, month, day] = birthDate.split("-").map(Number)
    const [hour, minute] = birthTime.split(":").map(Number)

    // Prepare the request body
    const requestBody = {
      day,
      month,
      year,
      hour,
      min: minute,
      lat: latitude,
      lon: longitude,
      tzone: timezone,
      planet_icon_color: "Black",
      sign_icon_color: "Black",
      sign_background: [
        "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC",
        "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC", "#F4FAFC"
      ],
      inner_circle_background: "#F4FAFC",
      outer_circle_background: "#F4FAFC",
      chart_size: 1000,
      image_type: "svg"
    }

    console.log("Debug - Request Body:", requestBody)

    // Get auth headers
    const headers = getAuthHeaders()
    console.log("Debug - Headers:", {
      Authorization: headers.Authorization ? "Basic ***" : "Missing",
      "Content-Type": headers["Content-Type"],
    })

    // Make the API request
    console.log("Debug - Fetching from URL:", `${ASTROLOGY_API_BASE_URL}/natal_wheel_chart`)

    const response = await fetch(`${ASTROLOGY_API_BASE_URL}/natal_wheel_chart`, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    })

    // Log the response status for debugging
    console.log(`Debug - API Response Status: ${response.status} ${response.statusText}`)

    // Get the raw response text first for debugging
    const rawResponseText = await response.text()
    console.log("Debug - Raw Response (first 200 chars):", rawResponseText.substring(0, 200))

    // Try to parse the response as JSON
    let data
    try {
      data = JSON.parse(rawResponseText)
      console.log("Debug - Response Keys:", Object.keys(data))
    } catch (e) {
      console.error("Debug - Failed to parse response as JSON:", e)
      throw new Error(`Failed to parse API response as JSON: ${rawResponseText.substring(0, 100)}...`)
    }

    // Check for error in response
    if (data.status === false && data.msg) {
      console.error("API error:", data.msg)

      // Check if it's an authentication error
      if (data.msg.includes("invalid") || data.msg.includes("User ID")) {
        setAuthError(true)
      }

      throw new Error(data.msg)
    }

    if (!response.ok) {
      throw new Error(`Natal wheel chart API error: ${response.status} ${response.statusText}`)
    }

    // Check if we have the chart_url in the response
    if (data.chart_url) {
      console.log("Debug - Successfully retrieved chart URL:", data.chart_url)

      // Clear any stored auth errors since the request succeeded
      clearAuthErrors()

      return { chartUrl: data.chart_url }
    }
    // Fallback to the old format if svg property exists
    else if (data.svg) {
      console.log("Debug - Retrieved SVG content instead of URL, length:", data.svg.length)

      // Clear any stored auth errors since the request succeeded
      clearAuthErrors()

      return {
        chartUrl: "",
        svgContent: data.svg,
      }
    } else {
      console.error("API response missing chart_url and svg data:", data)
      throw new Error("No chart data returned from the API")
    }
  } catch (error) {
    console.error("Error fetching natal wheel chart:", error)

    // Use the general fallback SVG for other charts
    return {
      chartUrl: "",
      svgContent: getFallbackNatalChart(),
    }
  }
}

// Keep the old function for backward compatibility
export async function fetchNatalWheelChartSVG(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
  timezone = 5.5, // Default to IST
): Promise<string> {
  try {
    const result = await fetchNatalWheelChart(birthDate, birthTime, latitude, longitude, timezone)

    // If we have SVG content, return it
    if (result.svgContent) {
      return result.svgContent
    }

    // If we have a chart URL, fetch the SVG content
    if (result.chartUrl) {
      console.log("Debug - Fetching SVG content from URL:", result.chartUrl)

      try {
        const svgResponse = await fetch(result.chartUrl)
        if (!svgResponse.ok) {
          throw new Error(`Failed to fetch SVG from URL: ${svgResponse.status} ${svgResponse.statusText}`)
        }

        const svgContent = await svgResponse.text()
        console.log("Debug - Successfully fetched SVG content, length:", svgContent.length)

        return svgContent
      } catch (error) {
        console.error("Error fetching SVG from URL:", error)

        // Return fallback SVG if we can't fetch from URL
        return getFallbackNatalChart()
      }
    }

    // Return fallback SVG if no chart data available
    return getFallbackNatalChart()
  } catch (error) {
    console.error("Error in fetchNatalWheelChartSVG:", error)

    // Return fallback SVG for other charts
    return getFallbackNatalChart()
  }
}

/**
 * Geocodes a location string to get latitude and longitude using AstrologyAPI
 */
export async function geocodeLocation(
  locationString: string,
): Promise<{ latitude: number; longitude: number; name: string }> {
  try {
    // Check for previous auth errors to avoid repeated failed API calls
    if (hasAuthError()) {
      console.warn("Skipping geocoding API call due to previous authentication error")
      throw new Error("API authentication error - using fallback coordinates")
    }

    // Check credentials first
    if (!hasValidCredentials()) {
      console.warn("Missing API credentials for AstrologyAPI")
      setAuthError(true)
      throw new Error("API credentials not configured")
    }

    // Prepare the request body
    const requestBody = {
      place: locationString,
    }

    console.log("Geocoding location:", locationString)
    console.log("Using auth headers:", getAuthHeaders())

    // Make the API request
    const response = await fetch(`${ASTROLOGY_API_BASE_URL}/geo_details`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(requestBody),
    })

    const data = await response.json()

    // Check for error in response
    if (data.status === false && data.msg) {
      console.error("API error:", data.msg)

      // Check if it's an authentication error
      if (data.msg.includes("invalid") || data.msg.includes("User ID")) {
        setAuthError(true)
      }

      throw new Error(data.msg)
    }

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status} ${response.statusText}`)
    }

    console.log("Geocoding API response:", data)

    // Validate the response
    if (!data || typeof data !== "object") {
      throw new Error("Invalid response format from geocoding service")
    }

    // Check if we have the expected data structure
    if (
      !data.place ||
      typeof data.place !== "object" ||
      data.place.latitude === undefined ||
      data.place.longitude === undefined
    ) {
      throw new Error("Invalid response structure from geocoding service")
    }

    return {
      latitude: Number.parseFloat(data.place.latitude),
      longitude: Number.parseFloat(data.place.longitude),
      name: data.place.name || locationString,
    }
  } catch (error) {
    console.error("Error geocoding location:", error)

    // Return fallback coordinates
    return {
      latitude: 0,
      longitude: 0,
      name: locationString,
    }
  }
}

/**
 * Formats the API response into our application's data structure
 */
function formatNatalChartResponse(
  planetsData: any[],
  housesData: any,
  aspectsData: any[],
  birthDetails: any,
): NatalChart {
  // Extract and format planet positions
  const planets: PlanetPosition[] = planetsData.map((planet) => {
    // Convert planet name to our format
    const planetName = convertPlanetName(planet.name)

    return {
      name: planetName,
      sign: planet.sign.toLowerCase() as ZodiacSign,
      degree: planet.norm_degree,
      house: planet.house,
      retrograde: planet.is_retrograde === 1,
      aspectsToOtherPlanets: [],
    }
  })

  // Extract and format houses
  const houses: House[] = Object.keys(housesData).map((key) => {
    const house = housesData[key]
    return {
      number: Number.parseInt(key.replace("house", "")),
      sign: house.sign.toLowerCase() as ZodiacSign,
      degree: house.degree,
      cusp: true,
    }
  })

  // Extract and format angles (Ascendant, Midheaven, etc.)
  const angles: Record<string, Angle> = {
    ascendant: {
      sign: housesData.ascendant.sign.toLowerCase() as ZodiacSign,
      degree: housesData.ascendant.degree,
    },
    midheaven: {
      sign: housesData.midheaven.sign.toLowerCase() as ZodiacSign,
      degree: housesData.midheaven.degree,
    },
    descendant: {
      sign: getOppositeSign(housesData.ascendant.sign.toLowerCase() as ZodiacSign),
      degree: (housesData.ascendant.degree + 180) % 360,
    },
    imumCoeli: {
      sign: getOppositeSign(housesData.midheaven.sign.toLowerCase() as ZodiacSign),
      degree: (housesData.midheaven.degree + 180) % 360,
    },
  }

  // Format aspects data
  const aspects = aspectsData.map((aspect) => ({
    aspect: aspect.aspect.toLowerCase(),
    planet1: convertPlanetName(aspect.planet1),
    planet2: convertPlanetName(aspect.planet2),
    orb: aspect.orb,
    applying: aspect.applying === 1,
  }))

  return {
    planets,
    houses,
    angles,
    aspects,
    birthDetails,
  }
}

/**
 * Converts AstrologyAPI planet names to our application's format
 */
function convertPlanetName(apiPlanetName: string): string {
  const planetMap: Record<string, string> = {
    Sun: "sun",
    Moon: "moon",
    Mercury: "mercury",
    Venus: "venus",
    Mars: "mars",
    Jupiter: "jupiter",
    Saturn: "saturn",
    Uranus: "uranus",
    Neptune: "neptune",
    Pluto: "pluto",
    Rahu: "north_node",
    Ketu: "south_node",
  }

  return planetMap[apiPlanetName] || apiPlanetName.toLowerCase()
}

/**
 * Gets the opposite zodiac sign
 */
function getOppositeSign(sign: ZodiacSign): ZodiacSign {
  const zodiacSigns: ZodiacSign[] = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ]

  const index = zodiacSigns.indexOf(sign)
  if (index === -1) return "aries" // Default fallback

  const oppositeIndex = (index + 6) % 12
  return zodiacSigns[oppositeIndex]
}

/**
 * Gets interpretations for a natal chart
 */
export async function getNatalChartInterpretation(natalChart: NatalChart): Promise<any> {
  try {
    // This would be implemented to fetch interpretations from AstrologyAPI
    // For now, we'll return a placeholder interpretation
    return {
      overview: {
        title: "Your Cosmic Blueprint",
        description:
          "Your natal chart reveals your unique cosmic blueprint, showing the positions of the planets at the moment of your birth. This celestial snapshot offers insights into your personality, strengths, challenges, and life path.",
      },
      sunSign: {
        title: "Sun Sign",
        description: "Your Sun sign represents your core essence and life purpose.",
        keywords: ["identity", "purpose", "vitality"],
      },
      moonSign: {
        title: "Moon Sign",
        description: "Your Moon sign reflects your emotional nature and subconscious patterns.",
        keywords: ["emotions", "instincts", "comfort"],
      },
      ascendantSign: {
        title: "Ascendant",
        description: "Your Ascendant represents how you present yourself to the world.",
        keywords: ["appearance", "first impressions", "personal style"],
      },
      planetPositions: {
        sun: {
          description: "Your Sun placement indicates your core identity and purpose in life.",
          keywords: ["identity", "purpose", "vitality"],
        },
        moon: {
          description: "Your Moon placement reveals your emotional nature and subconscious patterns.",
          keywords: ["emotions", "instincts", "comfort"],
        },
        mercury: {
          description: "Your Mercury placement shows how you think and communicate.",
          keywords: ["communication", "thinking", "learning"],
        },
        venus: {
          description: "Your Venus placement indicates how you express and receive love and beauty.",
          keywords: ["love", "beauty", "values"],
        },
        mars: {
          description: "Your Mars placement shows how you assert yourself and take action.",
          keywords: ["action", "desire", "energy"],
        },
        jupiter: {
          description: "Your Jupiter placement reveals where you find growth and expansion.",
          keywords: ["growth", "luck", "abundance"],
        },
        saturn: {
          description: "Your Saturn placement indicates where you face challenges and learn discipline.",
          keywords: ["discipline", "responsibility", "structure"],
        },
        uranus: {
          description: "Your Uranus placement shows where you seek freedom and innovation.",
          keywords: ["innovation", "rebellion", "change"],
        },
        neptune: {
          description: "Your Neptune placement reveals your spiritual and creative aspirations.",
          keywords: ["spirituality", "dreams", "illusion"],
        },
        pluto: {
          description: "Your Pluto placement indicates where you experience transformation and power.",
          keywords: ["transformation", "power", "rebirth"],
        },
      },
      houses: {
        1: {
          description: "The 1st house represents your self-image and how you present yourself to the world.",
        },
        2: {
          description: "The 2nd house represents your values, possessions, and resources.",
        },
        3: {
          description: "The 3rd house represents communication, learning, and your immediate environment.",
        },
        4: {
          description: "The 4th house represents your home, family, and emotional foundations.",
        },
        5: {
          description: "The 5th house represents creativity, pleasure, and self-expression.",
        },
        6: {
          description: "The 6th house represents work, health, and daily routines.",
        },
        7: {
          description: "The 7th house represents partnerships, relationships, and open enemies.",
        },
        8: {
          description: "The 8th house represents transformation, shared resources, and the occult.",
        },
        9: {
          description: "The 9th house represents higher education, philosophy, and long-distance travel.",
        },
        10: {
          description: "The 10th house represents career, public image, and authority.",
        },
        11: {
          description: "The 11th house represents friendships, groups, and aspirations.",
        },
        12: {
          description: "The 12th house represents the unconscious, spirituality, and hidden enemies.",
        },
      },
    }
  } catch (error) {
    console.error("Error getting chart interpretation:", error)
    throw error
  }
}

/**
 * Gets a daily horoscope for a zodiac sign
 */
export async function getDailyHoroscope(sign: ZodiacSign): Promise<any> {
  try {
    // Check credentials first
    if (!hasValidCredentials()) {
      throw new Error("API credentials not configured")
    }

    // Make the API request
    const response = await fetch(`${ASTROLOGY_API_BASE_URL}/horoscope_prediction/daily/${sign}`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({}),
    })

    const data = await response.json()

    // Check for error in response
    if (data.status === false && data.msg) {
      throw new Error(data.msg)
    }

    if (!response.ok) {
      throw new Error(`Horoscope error: ${response.status} ${response.statusText}`)
    }

    // Format the response to match our application's structure
    return {
      sign: sign,
      date: new Date().toISOString().split("T")[0],
      prediction: data.prediction || "Your horoscope for today is not available.",
      lucky_number: data.lucky_number || "7",
      lucky_color: data.lucky_color || "Blue",
      mood: data.mood || "Reflective",
      compatibility: data.compatibility || "Libra",
    }
  } catch (error) {
    console.error("Error getting daily horoscope:", error)
    throw error
  }
}

