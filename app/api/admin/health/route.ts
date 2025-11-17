import { NextRequest, NextResponse } from "next/server"

/**
 * Admin Health Check - Diagnose what's failing
 */
export async function GET(request: NextRequest) {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: {},
    checks: {},
    errors: []
  }

  try {
    // Check environment variables
    diagnostics.environment = {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL_SET: !!process.env.DATABASE_URL,
      ADMIN_PASSWORD_HASH_SET: !!process.env.ADMIN_PASSWORD_HASH,
      ADMIN_PASSWORD_HASH_LENGTH: process.env.ADMIN_PASSWORD_HASH?.length || 0,
      ADMIN_2FA_SECRET_SET: !!process.env.ADMIN_2FA_SECRET,
      ADMIN_JWT_SECRET_SET: !!process.env.ADMIN_JWT_SECRET,
      CSRF_SECRET_SET: !!process.env.CSRF_SECRET,
    }

    // Check if password hash is valid bcrypt format
    if (process.env.ADMIN_PASSWORD_HASH) {
      const hash = process.env.ADMIN_PASSWORD_HASH
      diagnostics.checks.passwordHashFormat = {
        startsWithDollar: hash.startsWith('$'),
        startsWithBcrypt: hash.startsWith('$2b$') || hash.startsWith('$2a$') || hash.startsWith('$2y$'),
        length: hash.length,
        expectedLength: 60,
        isValidLength: hash.length === 60,
      }
    }

    // Check if 2FA secret is set
    if (process.env.ADMIN_2FA_SECRET) {
      diagnostics.checks.twoFASecret = {
        length: process.env.ADMIN_2FA_SECRET.length,
        isBase32: /^[A-Z2-7]+=*$/.test(process.env.ADMIN_2FA_SECRET),
      }
    }

    // Try to import critical modules
    try {
      const { verifyPassword } = await import('@/lib/password')
      diagnostics.checks.passwordModule = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'password', error: error.message })
    }

    try {
      const { is2FAEnabled } = await import('@/lib/admin-2fa')
      diagnostics.checks.twoFAModule = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'admin-2fa', error: error.message })
    }

    try {
      const { createAdminSession } = await import('@/lib/admin-session')
      diagnostics.checks.sessionModule = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'admin-session', error: error.message })
    }

    try {
      const { logAdminLogin } = await import('@/lib/admin-audit')
      diagnostics.checks.auditModule = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'admin-audit', error: error.message })
    }

    try {
      const { verifyRecoveryCode } = await import('@/lib/recovery-codes')
      diagnostics.checks.recoveryCodesModule = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'recovery-codes', error: error.message })
    }

    // Try to access Prisma (without actually using it)
    try {
      const { prisma } = await import('@/lib/prisma')
      diagnostics.checks.prismaImport = 'OK'
    } catch (error: any) {
      diagnostics.errors.push({ module: 'prisma', error: error.message })
    }

    diagnostics.status = diagnostics.errors.length === 0 ? 'healthy' : 'unhealthy'

    return NextResponse.json(diagnostics, { 
      status: diagnostics.errors.length === 0 ? 200 : 500 
    })

  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      error: error.message,
      stack: error.stack,
      diagnostics
    }, { status: 500 })
  }
}





