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

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:14',message:'Debug endpoint called',data:{env:process.env.NODE_ENV,hasDbUrl:!!process.env.DATABASE_URL,hasDirectUrl:!!process.env.DIRECT_URL},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  // Check 1: DATABASE_URL exists
  try {
    const dbUrl = process.env.DATABASE_URL || '';
    const maskedUrl = dbUrl.replace(/:([^:@]+)@/, ':***@'); // Mask password
    debug.checks.databaseUrl = {
      exists: !!process.env.DATABASE_URL,
      format: maskedUrl.substring(0, 80) + '...',
      hasPooler: dbUrl.includes('pgbouncer=true'),
      port: dbUrl.match(/:(\d+)\//)?.[1] || 'unknown'
    }
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:26',message:'DATABASE_URL parsed',data:{exists:!!process.env.DATABASE_URL,port:debug.checks.databaseUrl.port,hasPooler:debug.checks.databaseUrl.hasPooler},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  } catch (error) {
    debug.checks.databaseUrl = { error: String(error) }
  }

  // Check 1b: DIRECT_URL exists  
  try {
    const directUrl = process.env.DIRECT_URL || '';
    const maskedDirectUrl = directUrl.replace(/:([^:@]+)@/, ':***@');
    debug.checks.directUrl = {
      exists: !!process.env.DIRECT_URL,
      format: maskedDirectUrl.substring(0, 80) + '...',
      port: directUrl.match(/:(\d+)\//)?.[1] || 'unknown'
    }
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:45',message:'DIRECT_URL parsed',data:{exists:!!process.env.DIRECT_URL,port:debug.checks.directUrl.port},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
  } catch (error) {
    debug.checks.directUrl = { error: String(error) }
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:66',message:'Before Prisma import',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    const { prisma } = await import('@/lib/prisma')
    debug.checks.prisma = { imported: true }
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:73',message:'Prisma imported successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    // Check 4: Can we query database?
    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:79',message:'Before database query',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      
      const count = await prisma.appEntitlement.count()
      
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:85',message:'Database query SUCCESS',data:{count:count},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      
      debug.checks.database = { connected: true, entitlementCount: count }
    } catch (dbError) {
      // #region agent log
      const errorDetails = {
        message: dbError instanceof Error ? dbError.message : String(dbError),
        name: dbError instanceof Error ? dbError.name : 'Unknown',
        code: (dbError as any)?.code || 'NO_CODE',
        meta: (dbError as any)?.meta || {}
      };
      fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:96',message:'Database query FAILED',data:errorDetails,timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      
      debug.checks.database = { 
        connected: false, 
        error: dbError instanceof Error ? dbError.message : String(dbError),
        errorCode: (dbError as any)?.code,
        errorMeta: (dbError as any)?.meta
      }
    }
  } catch (importError) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/67caa157-9cb8-446d-be8c-efd22b165e9c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug/route.ts:109',message:'Prisma import FAILED',data:{error:importError instanceof Error ? importError.message : String(importError)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
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
