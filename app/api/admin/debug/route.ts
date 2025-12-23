import { NextRequest, NextResponse } from "next/server"

/**
 * Debug endpoint to test what's failing in production
 * Access: /api/admin/debug
 */
export async function GET(request: NextRequest) {
  const debug: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    checks: {}
  }

  // Check 1: DATABASE_URL exists
  try {
    debug.checks.databaseUrl = {
      exists: !!process.env.DATABASE_URL,
      prefix: process.env.DATABASE_URL?.substring(0, 20) + '...' || 'MISSING'
    }
  } catch (error) {
    debug.checks.databaseUrl = { error: String(error) }
  }

  // Check 2: ADMIN_JWT_SECRET exists
  try {
    debug.checks.jwtSecret = {
      exists: !!process.env.ADMIN_JWT_SECRET,
      length: process.env.ADMIN_JWT_SECRET?.length || 0
    }
  } catch (error) {
    debug.checks.jwtSecret = { error: String(error) }
  }

  // Check 3: Can we import Prisma?
  try {
    const { prisma } = await import('@/lib/prisma')
    debug.checks.prisma = { imported: true }
    
    // Check 4: Can we query database?
    try {
      const count = await prisma.appEntitlement.count()
      debug.checks.database = { connected: true, entitlementCount: count }
    } catch (dbError) {
      debug.checks.database = { 
        connected: false, 
        error: dbError instanceof Error ? dbError.message : String(dbError) 
      }
    }
  } catch (importError) {
    debug.checks.prisma = { 
      imported: false, 
      error: importError instanceof Error ? importError.message : String(importError) 
    }
  }

  // Check 5: Cookies
  try {
    debug.checks.cookies = {
      hasAdminSession: request.cookies.has('admin_session'),
      cookieCount: request.cookies.size
    }
  } catch (error) {
    debug.checks.cookies = { error: String(error) }
  }

  // Check 6: Can we import admin auth?
  try {
    const { verifyAdminSession } = await import('@/lib/admin-session')
    debug.checks.adminAuth = { imported: true }
  } catch (error) {
    debug.checks.adminAuth = { 
      imported: false, 
      error: error instanceof Error ? error.message : String(error) 
    }
  }

  return NextResponse.json(debug, { status: 200 })
}
