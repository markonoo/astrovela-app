import { NextResponse } from 'next/server';
import { sendAuraAppWelcomeEmail } from '@/lib/email-service';
import { logger } from '@/utils/logger';

/**
 * Test endpoint for sending welcome emails
 * POST /api/test-email with { "email": "your-email@example.com" }
 */
export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send test email with sample data
    const result = await sendAuraAppWelcomeEmail({
      email,
      firstName: 'Test User',
      productName: 'Test Product',
      orderNumber: 'TEST-12345',
      freeUntilDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    });

    if (!result) {
      return NextResponse.json(
        { error: 'Failed to send email - check server logs' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: result?.id,
      recipient: email,
    });
  } catch (error) {
    logger.error('Test email failed', error, { endpoint: '/api/test-email' });
    return NextResponse.json(
      { 
        error: 'Failed to send test email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

// GET handler for documentation
export async function GET() {
  return NextResponse.json({
    message: 'Email test endpoint',
    usage: 'POST with { "email": "your-email@example.com" }',
    example: {
      method: 'POST',
      body: { email: 'test@example.com' },
    },
  });
}
