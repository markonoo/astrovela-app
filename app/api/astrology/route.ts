import { type NextRequest, NextResponse } from "next/server"
import { fetchNatalWheelChartSVG, geocodeLocation } from "@/services/astrology-api-service"

export async function POST(request: NextRequest) {
  try {
    console.log("Debug - API route called")

    const body = await request.json()
    console.log("Debug - Request body:", body)

    const { birthDate, birthTime, birthLocation } = body

    if (!birthDate || !birthTime || !birthLocation) {
      console.error("Debug - Missing required fields:", { birthDate, birthTime, birthLocation })
      return NextResponse.json(
        { error: "Missing required fields: birthDate, birthTime, or birthLocation" },
        { status: 400 },
      )
    }

    // First, geocode the location to get coordinates
    console.log("Debug - Geocoding location:", birthLocation)
    let geocodeResult
    try {
      geocodeResult = await geocodeLocation(birthLocation)
      console.log("Debug - Geocode result:", geocodeResult)
    } catch (error) {
      console.error("Debug - Geocoding error:", error)
      return NextResponse.json(
        { error: `Error geocoding location: ${error instanceof Error ? error.message : String(error)}` },
        { status: 500 },
      )
    }

    const { latitude, longitude } = geocodeResult

    // Then fetch the natal wheel chart SVG
    console.log("Debug - Fetching natal wheel chart SVG with:", { birthDate, birthTime, latitude, longitude })
    let svg
    try {
      svg = await fetchNatalWheelChartSVG(birthDate, birthTime, latitude, longitude)
      console.log("Debug - SVG fetched successfully, length:", svg.length)
    } catch (error) {
      console.error("Debug - Error fetching SVG:", error)
      return NextResponse.json(
        { error: `Error fetching natal wheel chart: ${error instanceof Error ? error.message : String(error)}` },
        { status: 500 },
      )
    }

    return NextResponse.json({ svg })
  } catch (error) {
    console.error("Debug - Error in astrology API route:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 },
    )
  }
}

