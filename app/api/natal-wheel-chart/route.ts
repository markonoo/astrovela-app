import { NextRequest, NextResponse } from "next/server"
import { fetchNatalWheelChart } from "@/services/astrology-api-service"
import { devLog, devError } from "@/utils/environment"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { birthDate, birthTime, latitude, longitude, timezone = 1.0 } = body

    devLog("🔄 Natal wheel chart API called with:", {
      birthDate,
      birthTime, 
      latitude,
      longitude,
      timezone,
      timestamp: new Date().toISOString()
    })

    // Validate required parameters
    if (!birthDate || !birthTime || latitude === undefined || longitude === undefined) {
      return NextResponse.json(
        { error: "Missing required parameters: birthDate, birthTime, latitude, longitude" },
        { status: 400 }
      )
    }

    // Call the astrology API service (server-side, has access to env vars)
    const result = await fetchNatalWheelChart(
      birthDate,
      birthTime,
      latitude,
      longitude,
      timezone
    )

    devLog("✅ Natal wheel chart fetched successfully:", {
      hasChartUrl: !!result.chartUrl,
      hasSvgContent: !!result.svgContent,
      chartUrlType: result.chartUrl?.startsWith('http') ? 'External URL' : 'Other',
      svgContentLength: result.svgContent?.length || 0
    })

    return NextResponse.json({
      success: true,
      ...result
    })

  } catch (error: any) {
    devError("❌ Error in natal wheel chart API:", error)
    
    return NextResponse.json(
      { 
        error: error.message || "Failed to fetch natal wheel chart",
        success: false
      },
      { status: 500 }
    )
  }
}
