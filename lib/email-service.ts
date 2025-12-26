import { Resend } from 'resend';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

interface WelcomeEmailData {
  email: string;
  firstName?: string;
  productName: string;
  orderNumber: string;
  freeUntilDate: Date;
}

/**
 * Send welcome email to new users who purchased a product
 * Includes 30-day free trial information for AstroVela Aura
 */
export async function sendAuraAppWelcomeEmail(data: WelcomeEmailData) {
  try {
    const formattedDate = format(data.freeUntilDate, 'MMMM dd, yyyy');
    const firstName = data.firstName || 'there';
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'AstroVela <hello@tryastrovela.com>',
      to: data.email,
      subject: 'Welcome to AstroVela Aura - Your 30-Day Free Trial Starts Now! 🌟',
      html: generateWelcomeEmailHTML({
        firstName,
        productName: data.productName,
        orderNumber: data.orderNumber,
        freeUntilDate: formattedDate,
      }),
    });

    if (error) {
      console.error('Failed to send welcome email:', error);
      throw error;
    }

    console.log('Welcome email sent successfully:', emailData?.id);
    return emailData;
  } catch (error) {
    console.error('Error in sendAuraAppWelcomeEmail:', error);
    // Don't throw - we don't want email failure to break the webhook
    return null;
  }
}

function generateWelcomeEmailHTML(data: {
  firstName: string;
  productName: string;
  orderNumber: string;
  freeUntilDate: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AstroVela Aura</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f7f7f7;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f7f7; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background-color: #28293d;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                Welcome to AstroVela Aura
              </h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; color: #28293d; line-height: 1.6;">
                Hi ${data.firstName},
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; color: #4d4d4d; line-height: 1.6;">
                Thank you for purchasing <strong>${data.productName}</strong>! Your order #${data.orderNumber} has been confirmed.
              </p>
              
              <div style="background-color: #f7f7f7; border-radius: 8px; padding: 24px; margin: 30px 0;">
                <h2 style="margin: 0 0 16px; font-size: 20px; color: #28293d;">
                  🎁 Your Free Gift: 30 Days of AstroVela Aura
                </h2>
                <p style="margin: 0; font-size: 15px; color: #4d4d4d; line-height: 1.6;">
                  As a thank you, you now have <strong>30 days of free access</strong> to AstroVela Aura — your personal astrology control center with daily insights, weekly forecasts, and more.
                </p>
              </div>
              
              <h3 style="margin: 30px 0 16px; font-size: 18px; color: #28293d;">
                What You Get:
              </h3>
              <ul style="margin: 0 0 30px; padding-left: 20px; color: #4d4d4d; line-height: 1.8;">
                <li>Daily personalized horoscopes</li>
                <li>Weekly & monthly forecasts</li>
                <li>Love compatibility insights</li>
                <li>Career timing guidance</li>
                <li>Complete zodiac encyclopedia</li>
              </ul>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://tryastrovela.com/aura" style="display: inline-block; padding: 16px 40px; background-color: #f7c800; color: #28293d; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px;">
                      Access Your Aura App
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #fffbe6; border-left: 4px solid #f7c800; padding: 16px; margin: 30px 0;">
                <p style="margin: 0; font-size: 14px; color: #4d4d4d; line-height: 1.6;">
                  <strong>Your free trial expires on ${data.freeUntilDate}</strong><br>
                  After 30 days, continue for just €14.99/month. Cancel anytime.
                </p>
              </div>
              
              <p style="margin: 30px 0 0; font-size: 14px; color: #4d4d4d; line-height: 1.6;">
                Questions? Reply to this email or contact us at <a href="mailto:hello@tryastrovela.com" style="color: #28293d;">hello@tryastrovela.com</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f7f7f7; text-align: center;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #8f90a6;">
                © 2025 AstroVela. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #8f90a6;">
                <a href="https://tryastrovela.com/privacy" style="color: #8f90a6; text-decoration: none;">Privacy Policy</a> | 
                <a href="https://tryastrovela.com/terms" style="color: #8f90a6; text-decoration: none;">Terms</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
