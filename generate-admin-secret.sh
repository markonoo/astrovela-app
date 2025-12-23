#!/bin/bash

# Generate secure ADMIN_JWT_SECRET for Vercel

echo "🔐 Generating secure ADMIN_JWT_SECRET..."
echo ""
echo "Copy this value and add it to Vercel Environment Variables:"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Generate a 48-byte random string encoded in base64
openssl rand -base64 48

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Steps to add to Vercel:"
echo ""
echo "1. Go to: https://vercel.com/dashboard"
echo "2. Select your project"
echo "3. Go to: Settings → Environment Variables"
echo "4. Click 'Add New'"
echo "5. Key: ADMIN_JWT_SECRET"
echo "6. Value: [paste the value above]"
echo "7. Environments: ✅ Production ✅ Preview ✅ Development"
echo "8. Click 'Save'"
echo "9. Redeploy your application"
echo ""
echo "✅ After redeploying, your admin dashboard will work!"
echo ""
