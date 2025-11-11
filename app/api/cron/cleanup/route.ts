import { NextRequest, NextResponse } from "next/server"
import { runDataRetentionCleanup } from "@/lib/data-retention"
import { logger } from "@/utils/logger"

/**
 * Cron Job: Data Retention Cleanup
 * Runs automatically to clean up old data per retention policies
 * 
 * Configure in Vercel:
 * - Go to Project Settings → Cron Jobs
 * - Add: "0 2 * * *" (daily at 2 AM UTC)
 * - Path: /api/cron/cleanup
 */

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret (if set)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    logger.info('Starting data retention cleanup')

    const result = await runDataRetentionCleanup()

    logger.info('Data retention cleanup completed', result)

    return NextResponse.json({
      success: true,
      cleanup: result,
      executedAt: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Data retention cleanup error', error)
    return NextResponse.json(
      { error: 'Cleanup failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

