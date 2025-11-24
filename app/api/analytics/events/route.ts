import { NextRequest, NextResponse } from 'next/server';
import { ErrorMonitor } from '@/utils/error-monitoring';
import { logger } from '@/utils/logger';

interface CustomEventData {
  event: string;
  properties: Record<string, any>;
  timestamp: number;
  url?: string;
  userAgent?: string;
  sessionId?: string;
  userId?: string;
}

/**
 * Store custom analytics events
 */
export async function POST(request: NextRequest) {
  try {
    const data: CustomEventData = await request.json();
    
    // Validate the event data
    if (!data.event || !data.timestamp) {
      return NextResponse.json(
        { error: 'Invalid event data - missing event name or timestamp' },
        { status: 400 }
      );
    }
    
    // Sanitize event name
    const sanitizedEvent = data.event.replace(/[^a-zA-Z0-9_-]/g, '');
    if (sanitizedEvent !== data.event) {
      logger.warn('Event name sanitized', { original: data.event, sanitized: sanitizedEvent });
    }
    
    // Add server-side data
    const enhancedData = {
      ...data,
      event: sanitizedEvent,
      serverTimestamp: Date.now(),
      ip: request.headers.get('x-forwarded-for') ?? 'unknown',
      serverUserAgent: request.headers.get('user-agent') ?? 'unknown'
    };
    
    // Track important business events with higher visibility
    const importantEvents = [
      'quiz_completed',
      'payment_started', 
      'payment_completed',
      'conversion',
      'user_signup',
      'error_boundary_triggered'
    ];
    
    if (importantEvents.includes(sanitizedEvent)) {
      ErrorMonitor.captureMessage(
        `Important event: ${sanitizedEvent}`,
        'info',
        { eventData: enhancedData }
      );
    }
    
    // Log conversion events for business intelligence
    if (sanitizedEvent === 'conversion') {
      logger.info('Conversion Event', { eventData: enhancedData });
    }
    
    // Log quiz progression for UX insights
    if (sanitizedEvent === 'quiz_step') {
      logger.debug('Quiz Step', { eventData: enhancedData });
    }
    
    // Log user interactions for behavior analysis
    if (sanitizedEvent === 'user_interaction') {
      logger.debug('User Interaction', { eventData: enhancedData });
    }
    
    // In production, store this in your analytics database
    if (process.env.NODE_ENV === 'production') {
      logger.info('Custom Event', { eventData: enhancedData });
      
      // TODO: Store in database
      // await storeAnalyticsEvent(enhancedData);
      
      // TODO: Send to external analytics service (if using)
      // await sendToAnalyticsService(enhancedData);
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Event recorded',
      eventId: `${sanitizedEvent}_${enhancedData.serverTimestamp}`,
      timestamp: enhancedData.serverTimestamp
    });
    
  } catch (error) {
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: {
        endpoint: '/api/analytics/events',
        method: 'POST'
      },
      severity: 'medium'
    });
    
    return NextResponse.json(
      { error: 'Failed to record event' },
      { status: 500 }
    );
  }
}

/**
 * Get analytics events summary
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const timeframe = searchParams.get('timeframe') || '24h';
    const event = searchParams.get('event');
    const limit = parseInt(searchParams.get('limit') || '100');
    
    // This would typically query your analytics database
    const summary = {
      timeframe,
      event,
      limit,
      data: {
        // Mock data - replace with actual database queries
        totalEvents: 1250,
        uniqueUsers: 89,
        topEvents: [
          { event: 'page_view', count: 450 },
          { event: 'user_interaction', count: 320 },
          { event: 'quiz_step', count: 180 },
          { event: 'conversion', count: 12 }
        ],
        recentEvents: [
          { event: 'page_view', timestamp: Date.now() - 60000 },
          { event: 'quiz_step', timestamp: Date.now() - 120000 },
          { event: 'user_interaction', timestamp: Date.now() - 180000 }
        ],
        timestamp: Date.now()
      }
    };
    
    return NextResponse.json(summary);
    
  } catch (error) {
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: {
        endpoint: '/api/analytics/events',
        method: 'GET'
      },
      severity: 'low'
    });
    
    return NextResponse.json(
      { error: 'Failed to retrieve analytics data' },
      { status: 500 }
    );
  }
} 