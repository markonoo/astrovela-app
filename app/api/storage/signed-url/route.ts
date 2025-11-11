import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { generateSignedURL, extractFilePathFromURL } from "@/lib/storage-security"
import { logger } from "@/utils/logger"

/**
 * Storage Signed URL API
 * Generates signed URLs for private storage access
 */
export async function POST(request: NextRequest) {
  try {
    // Verify user authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !user.email) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    const { url, bucket = 'charts', expiresIn = 3600 } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      )
    }

    // Extract file path from URL
    const filePath = extractFilePathFromURL(url, bucket)

    if (!filePath) {
      return NextResponse.json(
        { error: "Invalid storage URL format" },
        { status: 400 }
      )
    }

    // Generate signed URL
    const signedURL = await generateSignedURL(bucket, filePath, expiresIn)

    logger.info("Signed URL generated", {
      userId: user.id,
      bucket,
      filePath,
    })

    return NextResponse.json({
      success: true,
      signedURL,
      expiresIn,
      expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString(),
    })
  } catch (error) {
    logger.error("Failed to generate signed URL", error)
    return NextResponse.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    )
  }
}

