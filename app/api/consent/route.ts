import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { prisma } from "@/lib/prisma"
import { logger } from "@/utils/logger"
import { getClientIP } from "@/lib/rate-limit"

/**
 * Consent Management API
 * Stores user consent preferences for GDPR compliance
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { cookies, marketing, analytics } = body

    // Get user if authenticated
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user ? await prisma.user.findUnique({
      where: { email: user.email || '' },
      select: { id: true },
    }).then(u => u?.id) : null

    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined

    // Generate session ID for anonymous users
    const sessionId = userId ? undefined : `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Store consent preferences
    const consents = []

    // Cookies consent (analytics)
    if (cookies !== undefined) {
      const consent = await prisma.consent.create({
        data: {
          userId: userId || undefined,
          sessionId: sessionId || undefined,
          consentType: 'cookies',
          granted: cookies,
          ipAddress: clientIP,
          userAgent,
        },
      })
      consents.push(consent)
    }

    // Marketing consent
    if (marketing !== undefined) {
      const consent = await prisma.consent.create({
        data: {
          userId: userId || undefined,
          sessionId: sessionId || undefined,
          consentType: 'marketing',
          granted: marketing,
          ipAddress: clientIP,
          userAgent,
        },
      })
      consents.push(consent)
    }

    // Analytics consent
    if (analytics !== undefined) {
      const consent = await prisma.consent.create({
        data: {
          userId: userId || undefined,
          sessionId: sessionId || undefined,
          consentType: 'analytics',
          granted: analytics,
          ipAddress: clientIP,
          userAgent,
        },
      })
      consents.push(consent)
    }

    logger.info("Consent preferences saved", {
      userId,
      sessionId,
      consents: consents.length,
    })

    return NextResponse.json({
      success: true,
      consents,
    })
  } catch (error) {
    logger.error("Failed to save consent preferences", error)
    return NextResponse.json(
      { error: "Failed to save consent preferences" },
      { status: 500 }
    )
  }
}

/**
 * Get consent preferences
 */
export async function GET(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user || !user.email) {
      return NextResponse.json({
        success: true,
        consents: [],
      })
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
      select: { id: true },
    })

    if (!dbUser) {
      return NextResponse.json({
        success: true,
        consents: [],
      })
    }

    const consents = await prisma.consent.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({
      success: true,
      consents,
    })
  } catch (error) {
    logger.error("Failed to get consent preferences", error)
    return NextResponse.json(
      { error: "Failed to get consent preferences" },
      { status: 500 }
    )
  }
}


