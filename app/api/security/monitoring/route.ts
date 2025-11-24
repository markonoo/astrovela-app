import { NextRequest, NextResponse } from 'next/server'
import { SecurityMonitor } from '@/utils/security'
import { logger } from '@/utils/logger'

/**
 * Security monitoring endpoint - only accessible in development or with proper auth
 */
export async function GET(request: NextRequest) {
  // Basic security check - only allow in development or with auth token
  const isProduction = process.env.NODE_ENV === 'production'
  const authToken = request.headers.get('authorization')
  
  if (isProduction && authToken !== `Bearer ${process.env.SECURITY_MONITOR_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') as any
    const limit = parseInt(searchParams.get('limit') || '50')

    let events
    if (type) {
      events = SecurityMonitor.getEventsByType(type)
    } else {
      events = SecurityMonitor.getRecentEvents(limit)
    }

    const summary = {
      totalEvents: events.length,
      eventTypes: {
        rate_limit_exceeded: SecurityMonitor.getEventsByType('rate_limit_exceeded').length,
        suspicious_request: SecurityMonitor.getEventsByType('suspicious_request').length,
        invalid_input: SecurityMonitor.getEventsByType('invalid_input').length,
        unauthorized_access: SecurityMonitor.getEventsByType('unauthorized_access').length
      },
      recentEvents: events.slice(-10) // Last 10 events for summary
    }

    return NextResponse.json({
      summary,
      events: searchParams.get('full') === 'true' ? events : events.slice(-limit),
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    logger.error('Security monitoring error', error, { endpoint: '/api/security/monitoring' })
    return NextResponse.json(
      { error: 'Failed to retrieve security data' },
      { status: 500 }
    )
  }
}

/**
 * Clear security events - only in development
 */
export async function DELETE(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 })
  }

  SecurityMonitor.clearEvents()
  
  return NextResponse.json({ 
    message: 'Security events cleared',
    timestamp: new Date().toISOString()
  })
} 