import { NextRequest, NextResponse } from "next/server"

// Minimal test route to verify POST works
export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    success: true, 
    message: "POST works!",
    timestamp: new Date().toISOString()
  })
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    success: true, 
    message: "GET works!",
    timestamp: new Date().toISOString()
  })
}

