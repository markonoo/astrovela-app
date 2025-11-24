import { NextRequest, NextResponse } from 'next/server';
import { ErrorMonitor } from '@/utils/error-monitoring';
import { logger } from '@/utils/logger';

interface PerformanceMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  navigationType?: string;
  timestamp: number;
  url?: string;
}

/**
 * Store performance metrics for analysis
 */
export async function POST(request: NextRequest) {
  try {
    const data: PerformanceMetric = await request.json();
    
    // Validate the performance data
    if (!data.name || typeof data.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid performance data' },
        { status: 400 }
      );
    }
    
    // Add server-side timestamp and IP
    const enhancedData = {
      ...data,
      serverTimestamp: Date.now(),
      ip: request.headers.get('x-forwarded-for') ?? 'unknown',
      userAgent: request.headers.get('user-agent') ?? 'unknown'
    };
    
    // Log performance issues
    if (data.name === 'LCP' && data.value > 4000) {
      ErrorMonitor.captureMessage(
        `Poor LCP performance: ${data.value}ms`,
        'warning',
        { metric: enhancedData }
      );
    }
    
    if (data.name === 'CLS' && data.value > 0.25) {
      ErrorMonitor.captureMessage(
        `Poor CLS performance: ${data.value}`,
        'warning',
        { metric: enhancedData }
      );
    }
    
    if (data.name === 'FID' && data.value > 300) {
      ErrorMonitor.captureMessage(
        `Poor FID performance: ${data.value}ms`,
        'warning',
        { metric: enhancedData }
      );
    }
    
    // In production, you would typically store this in a database
    // For now, we'll log it and could send to external analytics
    if (process.env.NODE_ENV === 'production') {
      logger.info('Performance Metric', { metric: enhancedData });
      
      // TODO: Store in database
      // await storePerformanceMetric(enhancedData);
      
      // TODO: Send to external analytics service
      // await sendToAnalyticsService(enhancedData);
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Performance metric recorded',
      timestamp: enhancedData.serverTimestamp
    });
    
  } catch (error) {
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: {
        endpoint: '/api/analytics/performance',
        method: 'POST'
      },
      severity: 'medium'
    });
    
    return NextResponse.json(
      { error: 'Failed to record performance metric' },
      { status: 500 }
    );
  }
}

/**
 * Get performance metrics summary
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const timeframe = searchParams.get('timeframe') || '24h';
    const metric = searchParams.get('metric');
    
    // This would typically query your database
    const summary = {
      timeframe,
      metric,
      data: {
        // Mock data - replace with actual database queries
        averageLCP: 2300,
        averageFID: 120,
        averageCLS: 0.05,
        averageFCP: 1800,
        averageTTFB: 600,
        sampleCount: 150,
        timestamp: Date.now()
      }
    };
    
    return NextResponse.json(summary);
    
  } catch (error) {
    ErrorMonitor.captureError({
      error: error instanceof Error ? error : new Error(String(error)),
      context: {
        endpoint: '/api/analytics/performance',
        method: 'GET'
      },
      severity: 'low'
    });
    
    return NextResponse.json(
      { error: 'Failed to retrieve performance data' },
      { status: 500 }
    );
  }
} 