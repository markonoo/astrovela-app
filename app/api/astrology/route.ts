import { type NextRequest, NextResponse } from "next/server"
import { fetchNatalWheelChartSVG, geocodeLocation } from "@/services/astrology-api-service"
import { logger } from "@/utils/logger"

export async function POST(request: NextRequest) {
  try {
    logger.api('/api/astrology', 'API route called')

    const body = await request.json()
    logger.api('/api/astrology', 'Request body received', { hasBirthDate: !!body.birthDate, hasBirthTime: !!body.birthTime, hasBirthLocation: !!body.birthLocation })

    const { birthDate, birthTime, birthLocation } = body

    if (!birthDate || !birthTime || !birthLocation) {
      logger.error("Missing required fields", undefined, { birthDate, birthTime, birthLocation })
      return NextResponse.json(
        { error: "Missing required fields: birthDate, birthTime, or birthLocation" },
        { status: 400 },
      )
    }

    // First, geocode the location to get coordinates
    logger.api('/api/astrology', 'Geocoding location', { birthLocation })
    let geocodeResult
    try {
      geocodeResult = await geocodeLocation(birthLocation)
      logger.api('/api/astrology', 'Geocode result received', { latitude: geocodeResult.latitude, longitude: geocodeResult.longitude })
    } catch (error) {
      logger.error("Geocoding error", error)
      return NextResponse.json(
        { error: `Error geocoding location: ${error instanceof Error ? error.message : String(error)}` },
        { status: 500 },
      )
    }

    const { latitude, longitude } = geocodeResult

    // Then fetch the natal wheel chart SVG
    logger.api('/api/astrology', 'Fetching natal wheel chart SVG', { birthDate, birthTime, latitude, longitude })
    let svg
    try {
      svg = await fetchNatalWheelChartSVG(birthDate, birthTime, latitude, longitude)
      logger.api('/api/astrology', 'SVG fetched successfully', { svgLength: svg.length })
    } catch (error) {
      logger.error("Error fetching SVG", error)
      return NextResponse.json(
        { error: `Error fetching natal wheel chart: ${error instanceof Error ? error.message : String(error)}` },
        { status: 500 },
      )
    }

    return NextResponse.json({ svg })
  } catch (error) {
    logger.error("Error in astrology API route", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 },
    )
  }
}

