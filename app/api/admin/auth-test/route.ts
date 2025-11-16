import { NextRequest, NextResponse } from "next/server"

/**
 * Minimal test route to diagnose the issue
 */
export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({ 
      success: true, 
      message: "Basic POST works",
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      error: String(error),
      message: "POST failed"
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ 
      success: true, 
      message: "Basic GET works",
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      error: String(error),
      message: "GET failed"
    }, { status: 500 })
  }
}

