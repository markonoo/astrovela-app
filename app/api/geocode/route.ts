import { NextResponse } from "next/server"
import { geocodeLocation } from "@/services/astrology-api-service"
import { logger } from "@/utils/logger"

export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json()

    // Validate required parameters
    if (!body.location) {
      return NextResponse.json({ error: "Missing location parameter" }, { status: 400 })
    }

    try {
      // Use the new AstrologyAPI geocoding service
      const geoData = await geocodeLocation(body.location)

      // Return the geocoded data
      return NextResponse.json(geoData)
    } catch (error) {
      logger.error("Geocoding API error", error, { location: body.location })

      // Return fallback coordinates on API error
      return NextResponse.json({
        latitude: 0,
        longitude: 0,
        formatted_address: body.location,
        fallback: true,
        message: "Using fallback coordinates due to API error",
      })
    }
  } catch (error) {
    logger.error("Error geocoding location", error, { endpoint: '/api/geocode' })

    // Return fallback coordinates on any error
    return NextResponse.json(
      {
        latitude: 0,
        longitude: 0,
        formatted_address: "Unknown location",
        fallback: true,
        message: "Using fallback coordinates due to error",
      },
      { status: 200 },
    ) // Return 200 status to prevent cascading errors
  }
}

