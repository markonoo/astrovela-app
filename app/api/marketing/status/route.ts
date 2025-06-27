import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const platforms = [
      {
        platform: 'Meta Pixel',
        status: process.env.NEXT_PUBLIC_META_PIXEL_ID ? 'configured' : 'not_configured',
        pixel_id: process.env.NEXT_PUBLIC_META_PIXEL_ID || null,
        measurement_id: null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_META_PIXEL_ID ? 'NEXT_PUBLIC_META_PIXEL_ID not set' : null,
      },
      {
        platform: 'Google Analytics 4',
        status: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? 'configured' : 'not_configured',
        pixel_id: null,
        measurement_id: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? 'NEXT_PUBLIC_GA_MEASUREMENT_ID not set' : null,
      },
      {
        platform: 'Google Ads',
        status: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? 'configured' : 'not_configured',
        pixel_id: null,
        measurement_id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? 'NEXT_PUBLIC_GOOGLE_ADS_ID not set' : null,
      },
      {
        platform: 'TikTok Pixel',
        status: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ? 'configured' : 'not_configured',
        pixel_id: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || null,
        measurement_id: null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ? 'NEXT_PUBLIC_TIKTOK_PIXEL_ID not set' : null,
      },
      {
        platform: 'Pinterest Tag',
        status: process.env.NEXT_PUBLIC_PINTEREST_TAG_ID ? 'configured' : 'not_configured',
        pixel_id: process.env.NEXT_PUBLIC_PINTEREST_TAG_ID || null,
        measurement_id: null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_PINTEREST_TAG_ID ? 'NEXT_PUBLIC_PINTEREST_TAG_ID not set' : null,
      },
      {
        platform: 'Twitter Pixel',
        status: process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID ? 'configured' : 'not_configured',
        pixel_id: process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID || null,
        measurement_id: null,
        last_event: null,
        last_event_time: null,
        events_today: 0,
        error_message: !process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID ? 'NEXT_PUBLIC_TWITTER_PIXEL_ID not set' : null,
      },
    ];

    // Calculate overall status
    const configuredPlatforms = platforms.filter(p => p.status === 'configured').length;
    const totalPlatforms = platforms.length;
    
    const summary = {
      overall_status: configuredPlatforms > 0 ? 'partial' : 'not_configured',
      platforms_configured: configuredPlatforms,
      total_platforms: totalPlatforms,
      configuration_percentage: Math.round((configuredPlatforms / totalPlatforms) * 100),
      last_updated: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      summary,
      platforms,
      timestamp: Date.now(),
    });
  } catch (error: any) {
    console.error('❌ Marketing status check error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to check marketing status',
      timestamp: Date.now(),
    }, { status: 500 });
  }
} 