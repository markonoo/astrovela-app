/**
 * Astrology Service
 * Handles all interactions with astrology APIs and data processing
 */

import type { NatalChart, ChartInterpretation, ZodiacSign } from "@/types/astrology"
import {
  fetchNatalChart as fetchNatalChartFromAPI,
  geocodeLocation as geocodeLocationFromAPI,
  getNatalChartInterpretation as getInterpretationFromAPI,
  getDailyHoroscope as getDailyHoroscopeFromAPI,
  fetchNatalWheelChartSVG as fetchNatalWheelChartSVGFromAPI,
} from "./astrology-api-service"

/**
 * Fetches natal chart data
 */
export async function fetchNatalChart(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
): Promise<NatalChart> {
  try {
    // Calculate timezone from longitude (approximate)
    // In a real app, you would use a timezone API or library
    const timezone = Math.round(longitude / 15)

    // Use the AstrologyAPI service
    return await fetchNatalChartFromAPI(birthDate, birthTime, latitude, longitude, timezone)
  } catch (error) {
    console.error("Error fetching natal chart:", error)
    throw error
  }
}

/**
 * Fetches natal wheel chart SVG
 */
export async function fetchNatalWheelChartSVG(
  birthDate: string,
  birthTime: string,
  latitude: number,
  longitude: number,
): Promise<string> {
  try {
    // Calculate timezone from longitude (approximate)
    const timezone = Math.round(longitude / 15)

    // Use the AstrologyAPI service
    return await fetchNatalWheelChartSVGFromAPI(birthDate, birthTime, latitude, longitude, timezone)
  } catch (error) {
    console.error("Error fetching natal wheel chart SVG:", error)
    throw error
  }
}

/**
 * Geocodes a location string to get latitude and longitude
 */
export async function geocodeLocation(
  locationString: string,
): Promise<{ latitude: number; longitude: number; name: string }> {
  try {
    // Try to use a simple geocoding approach first
    const simpleGeocode = getSimpleGeocoding(locationString)
    if (simpleGeocode) {
      console.log("Using simple geocoding for:", locationString)
      return simpleGeocode
    }

    // Try the direct API call first
    try {
      const result = await geocodeLocationFromAPI(locationString)
      if (result.latitude !== 0 || result.longitude !== 0) {
        return result
      }
    } catch (error) {
      console.warn("Direct API geocoding failed, trying /api/geocode", error)
    }

    // Fallback: use the custom /api/geocode endpoint with POST
    try {
      const response = await fetch("/api/geocode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location: locationString })
      })
      if (response.ok) {
        const data = await response.json()
        return {
          latitude: data.latitude,
          longitude: data.longitude,
          name: data.name || locationString,
        }
      }
    } catch (error) {
      console.error("Error using /api/geocode fallback:", error)
    }

    // Final fallback
    return {
      latitude: 0,
      longitude: 0,
      name: locationString,
    }
  } catch (error) {
    console.error("Error in geocoding service:", error)
    return {
      latitude: 0,
      longitude: 0,
      name: locationString,
    }
  }
}

/**
 * Simple geocoding function for common locations
 * This serves as a fallback when the API fails
 */
function getSimpleGeocoding(
  locationString: string,
  forceFallback = false,
): { latitude: number; longitude: number; name: string } | null {
  // Normalize the input
  const normalizedInput = locationString.toLowerCase().trim()

  // Common city coordinates
  const cityCoordinates: Record<string, [number, number]> = {
    // North America
    "new york": [40.7128, -74.006],
    "los angeles": [34.0522, -118.2437],
    chicago: [41.8781, -87.6298],
    toronto: [43.6532, -79.3832],
    "mexico city": [19.4326, -99.1332],

    // Europe
    london: [51.5074, -0.1278],
    paris: [48.8566, 2.3522],
    berlin: [52.52, 13.405],
    madrid: [40.4168, -3.7038],
    rome: [41.9028, 12.4964],
    amsterdam: [52.3676, 4.9041],
    vienna: [48.2082, 16.3738],
    hamburg: [53.5511, 9.9937],

    // Asia
    tokyo: [35.6762, 139.6503],
    beijing: [39.9042, 116.4074],
    mumbai: [19.076, 72.8777],
    singapore: [1.3521, 103.8198],

    // Australia
    sydney: [-33.8688, 151.2093],
    melbourne: [-37.8136, 144.9631],

    // South America
    "rio de janeiro": [-22.9068, -43.1729],
    "buenos aires": [-34.6037, -58.3816],

    // Africa
    cairo: [30.0444, 31.2357],
    "cape town": [-33.9249, 18.4241],
  }

  // Check for exact matches
  for (const [city, coordinates] of Object.entries(cityCoordinates)) {
    if (normalizedInput.includes(city)) {
      return {
        latitude: coordinates[0],
        longitude: coordinates[1],
        name: locationString,
      }
    }
  }

  // If we're forcing a fallback or the input is very short, use a default
  if (forceFallback || normalizedInput.length < 3) {
    // Default to a central location (0,0 is in the Atlantic Ocean)
    return {
      latitude: 0,
      longitude: 0,
      name: locationString,
    }
  }

  // No match found
  return null
}

/**
 * Gets interpretations for a natal chart
 */
export async function getNatalChartInterpretation(natalChart: NatalChart): Promise<ChartInterpretation> {
  try {
    // Use the AstrologyAPI interpretation service
    return await getInterpretationFromAPI(natalChart)
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
    // Use the AstrologyAPI horoscope service
    return await getDailyHoroscopeFromAPI(sign)
  } catch (error) {
    console.error("Error getting daily horoscope:", error)
    throw error
  }
}

// Define zodiacSymbols
const zodiacSymbols: { [key: string]: string } = {
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpio: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
}

// Define the PlanetPosition type
interface PlanetPosition {
  name: string
  sign: string
  degree: number
  house: number
  retrograde: boolean
}

// Add a function to create a placeholder chart when the API fails
function createPlaceholderChart(birthDate: string, birthTime: string, latitude: number, longitude: number): NatalChart {
  // Create a basic placeholder chart with minimal data
  const [year, month, day] = birthDate.split("-").map(Number)
  const [hour, minute] = birthTime.split(":").map(Number)

  // Generate some placeholder planets
  const planets: PlanetPosition[] = [
    { name: "sun", sign: "aries", degree: 15, house: 1, retrograde: false },
    { name: "moon", sign: "taurus", degree: 25, house: 2, retrograde: false },
    { name: "mercury", sign: "gemini", degree: 5, house: 3, retrograde: false },
    { name: "venus", sign: "cancer", degree: 10, house: 4, retrograde: false },
    { name: "mars", sign: "leo", degree: 20, house: 5, retrograde: false },
    { name: "jupiter", sign: "virgo", degree: 15, house: 6, retrograde: false },
    { name: "saturn", sign: "libra", degree: 5, house: 7, retrograde: true },
  ]

  // Generate placeholder houses
  const houses = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    sign: Object.keys(zodiacSymbols)[i % 12] as ZodiacSign,
    degree: (i * 30) % 360,
    cusp: true,
  }))

  // Generate placeholder angles
  const angles = {
    ascendant: { sign: "aries", degree: 0 },
    midheaven: { sign: "capricorn", degree: 270 },
    descendant: { sign: "libra", degree: 180 },
    imumCoeli: { sign: "cancer", degree: 90 },
  }

  return {
    planets,
    houses,
    angles,
    aspects: [],
    birthDetails: {
      date: birthDate,
      time: birthTime,
      location: {
        latitude,
        longitude,
        name: "Location data unavailable",
      },
    },
  }
}

