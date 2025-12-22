import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'
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

    // Create Supabase client
    const supabase = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    // Get user if authenticated
    const { data: { user } } = await supabase.auth.getUser()
    let userId: number | null = null
    
    if (user?.email) {
      const { data: dbUser } = await supabase
        .from('User')
        .select('id')
        .eq('email', user.email)
        .single()
      userId = dbUser?.id || null
    }

    const clientIP = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined

    // Generate session ID for anonymous users
    const sessionId = userId ? undefined : `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Store consent preferences
    const consents = []

    // Cookies consent (analytics)
    if (cookies !== undefined) {
      const { data, error } = await supabase
        .from('Consent')
        .insert({
          userId,
          sessionId,
          consentType: 'cookies',
          granted: Boolean(cookies),
          ipAddress: clientIP,
          userAgent,
        })
        .select()
        .single()
      
      if (!error && data) {
        consents.push(data)
      }
    }

    // Marketing consent
    if (marketing !== undefined) {
      const { data, error } = await supabase
        .from('Consent')
        .insert({
          userId,
          sessionId,
          consentType: 'marketing',
          granted: Boolean(marketing),
          ipAddress: clientIP,
          userAgent,
        })
        .select()
        .single()
      
      if (!error && data) {
        consents.push(data)
      }
    }

    // Analytics consent
    if (analytics !== undefined) {
      const { data, error } = await supabase
        .from('Consent')
        .insert({
          userId,
          sessionId,
          consentType: 'analytics',
          granted: Boolean(analytics),
          ipAddress: clientIP,
          userAgent,
        })
        .select()
        .single()
      
      if (!error && data) {
        consents.push(data)
      }
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
    // Create Supabase client
    const supabase = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user || !user.email) {
      return NextResponse.json({
        success: true,
        consents: [],
      })
    }

    const { data: dbUser } = await supabase
      .from('User')
      .select('id')
      .eq('email', user.email)
      .single()

    if (!dbUser) {
      return NextResponse.json({
        success: true,
        consents: [],
      })
    }

    const { data: consents, error } = await supabase
      .from('Consent')
      .select('*')
      .eq('userId', dbUser.id)
      .order('createdAt', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      consents: consents || [],
    })
  } catch (error) {
    logger.error("Failed to get consent preferences", error)
    return NextResponse.json(
      { error: "Failed to get consent preferences" },
      { status: 500 }
    )
  }
}






