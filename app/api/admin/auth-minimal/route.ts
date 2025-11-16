import { NextRequest, NextResponse } from "next/server"

/**
 * Ultra-minimal auth route to test if basic routing works
 * No imports, no dependencies, just pure Next.js
 */

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    success: true,
    message: "Minimal POST works",
    timestamp: Date.now()
  })
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    success: true,
    message: "Minimal GET works",
    timestamp: Date.now()
  })
}

