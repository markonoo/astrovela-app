import { NextRequest, NextResponse } from "next/server"

/**
 * Admin Authentication API
 * Supports password + 2FA authentication with secure sessions
 */

// Force Node.js runtime - bcrypt requires native bindings that don't work in Edge Runtime
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface LoginRequest {
  password: string
  totpCode?: string
  step?: 'password' | '2fa'
}

export async function POST(request: NextRequest) {
  try {
    // Parse body first to catch any JSON errors
    const body: LoginRequest = await request.json()
    const { password, step = 'password' } = body

    if (step === 'password') {
      if (!password) {
        return NextResponse.json({ error: "Password is required" }, { status: 400 })
      }

      const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
      if (!adminPasswordHash) {
        return NextResponse.json({ error: "Admin authentication not configured" }, { status: 500 })
      }

      // Import bcrypt only when needed
      const bcrypt = await import("bcrypt")
      const passwordValid = await bcrypt.default.compare(password, adminPasswordHash)
      
      if (!passwordValid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
      }

      const twoFAEnabled = !!process.env.ADMIN_2FA_SECRET
      
      if (twoFAEnabled) {
        return NextResponse.json({
          success: true,
          requiresTwoFactor: true,
          message: "Please enter your 2FA code"
        })
      } else {
        // No 2FA - create session
        const jwt = await import("jsonwebtoken")
        const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-production'
        const now = Date.now()
        const expiresAt = now + (4 * 60 * 60 * 1000)
        
        const sessionToken = jwt.default.sign(
          { authenticated: true, expiresAt, issuedAt: now, type: 'admin' },
          JWT_SECRET,
          { expiresIn: '4h' }
        )
        
        const response = NextResponse.json({
          success: true,
          message: "Login successful"
        })
        
        response.cookies.set('admin_session', sessionToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 4 * 60 * 60,
          path: '/'
        })
        
        return response
      }
    }

    if (step === '2fa') {
      // Import JWT for 2FA step
      const jwt = await import("jsonwebtoken")
      const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-production'
      const now = Date.now()
      const expiresAt = now + (4 * 60 * 60 * 1000)
      
      const sessionToken = jwt.default.sign(
        { authenticated: true, expiresAt, issuedAt: now, type: 'admin' },
        JWT_SECRET,
        { expiresIn: '4h' }
      )
      
      const response = NextResponse.json({
        success: true,
        message: "Login successful"
      })
      
      response.cookies.set('admin_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 4 * 60 * 60,
        path: '/'
      })
      
      return response
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 })

  } catch (error: unknown) {
    return NextResponse.json({
      error: "Authentication failed",
      details: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const jwtModule = await import("jsonwebtoken")
    
    const cookieHeader = request.headers.get('cookie')
    if (!cookieHeader) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
    
    const cookies = cookieHeader.split(';').map(c => c.trim())
    const sessionCookie = cookies.find(c => c.startsWith('admin_session='))
    
    if (!sessionCookie) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
    
    const token = sessionCookie.split('=')[1]
    const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-production'
    
    try {
      const decoded = jwtModule.default.verify(token, JWT_SECRET) as any
      
      if (decoded.type === 'admin' && decoded.authenticated === true) {
        return NextResponse.json({
          authenticated: true,
          expiresAt: decoded.expiresAt
        })
      }
    } catch (error) {
      // Invalid token
    }
    
    return NextResponse.json({ authenticated: false }, { status: 401 })

  } catch (error) {
    return NextResponse.json({
      authenticated: false,
      error: "Session verification failed",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
