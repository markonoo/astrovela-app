import { NextResponse } from "next/server"
import { mergeSessionWithUser, getSessionData } from '@/utils/session-merge'
import { logger } from '@/utils/logger'

export async function POST(request: Request) {
  try {
    const { sessionId, userId, email, action } = await request.json()
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }
    
    if (action === 'preview') {
      // Just show what data would be merged, don't actually merge
      const sessionData = await getSessionData(sessionId)
      return NextResponse.json({ 
        success: true, 
        action: 'preview',
        sessionData 
      })
    }
    
    if (!userId || !email) {
      return NextResponse.json({ error: 'Missing userId or email for merge action' }, { status: 400 })
    }
    
    logger.api('session-merge', 'Starting session merge', { sessionId, userId, email })
    
    // Perform the actual merge
    const result = await mergeSessionWithUser(sessionId, userId, email)
    
    if (result.success) {
      logger.api('session-merge', 'Session merge completed successfully')
      return NextResponse.json({ 
        success: true, 
        message: 'Session data merged successfully',
        totalMerged: result.totalMerged,
        breakdown: result.breakdown,
        storage: result.storage,
        errors: result.errors
      })
    } else {
      logger.error('API: Session merge failed', new Error('Session merge failed'), { errors: result.errors })
      return NextResponse.json({ 
        success: false, 
        message: 'Session merge completed with errors',
        totalMerged: result.totalMerged,
        breakdown: result.breakdown,
        storage: result.storage,
        errors: result.errors
      }, { status: 207 }) // 207 Multi-Status for partial success
    }
    
  } catch (error) {
    logger.error("API: Error in session merge", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to merge session data", 
        details: error instanceof Error ? error.message : error 
      },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId parameter' }, { status: 400 })
    }
    
    logger.api('session-merge', 'Getting session data', { sessionId })
    
    const sessionData = await getSessionData(sessionId)
    
    return NextResponse.json({ 
      success: true, 
      sessionData 
    })
    
  } catch (error) {
    logger.error("API: Error getting session data", error)
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to get session data", 
        details: error instanceof Error ? error.message : error 
      },
      { status: 500 }
    )
  }
} 