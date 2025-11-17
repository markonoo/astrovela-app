# Compliance Quick Start Guide
## Getting Started with Phase 1 Implementation

This guide provides step-by-step instructions for implementing Phase 1 (Critical Security Fixes) of the compliance roadmap.

---

## 🎯 Phase 1 Overview

**Goal:** Fix critical security vulnerabilities in admin and user systems  
**Timeline:** 2 weeks  
**Priority:** P0 - Critical (Must complete before production)

---

## Step 1: Admin Session Security (Days 1-3)

### 1.1 Install Required Dependencies

```bash
npm install jsonwebtoken @types/jsonwebtoken cookie
```

### 1.2 Create Session Management Library

Create `lib/admin-session.ts`:

```typescript
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change-me-in-production'
const SESSION_DURATION = 4 * 60 * 60 * 1000 // 4 hours

export interface AdminSession {
  authenticated: boolean
  expiresAt: number
}

export function createAdminSession(): string {
  const expiresAt = Date.now() + SESSION_DURATION
  const token = jwt.sign(
    { authenticated: true, expiresAt },
    JWT_SECRET,
    { expiresIn: '4h' }
  )
  return token
}

export function verifyAdminSession(token: string): AdminSession | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return {
      authenticated: decoded.authenticated === true,
      expiresAt: decoded.expiresAt
    }
  } catch (error) {
    return null
  }
}

export async function setAdminSessionCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION / 1000,
    path: '/'
  })
}

export async function getAdminSessionCookie(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value || null
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}
```

### 1.3 Update Admin Auth Route

Modify `app/api/admin/auth/route.ts`:

```typescript
import { createAdminSession, setAdminSessionCookie } from '@/lib/admin-session'
// ... existing imports

export async function POST(request: NextRequest) {
  // ... existing password/2FA verification code ...
  
  if (data.success && data.step === 'complete') {
    // Create session token
    const sessionToken = createAdminSession()
    await setAdminSessionCookie(sessionToken)
    
    return NextResponse.json({
      success: true,
      step: 'complete',
      message: "Authentication successful"
    })
  }
  // ... rest of code
}
```

### 1.4 Update Admin Protected Route

Modify `components/admin/AdminProtectedRoute.tsx`:

```typescript
import { getAdminSessionCookie, verifyAdminSession } from '@/lib/admin-session'

const checkAdminSession = async () => {
  try {
    const token = await getAdminSessionCookie()
    if (!token) {
      setIsAuthenticated(false)
      setLoading(false)
      return
    }

    const session = verifyAdminSession(token)
    if (session && session.authenticated && Date.now() < session.expiresAt) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  } catch (error) {
    setIsAuthenticated(false)
  } finally {
    setLoading(false)
  }
}
```

### 1.5 Add Environment Variable

Add to `.env.local`:
```env
ADMIN_JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

---

## Step 2: Rate Limiting (Days 3-5)

### 2.1 Install Rate Limiting Library

```bash
npm install @upstash/ratelimit @upstash/redis
```

Or use in-memory for development:
```bash
npm install lru-cache
```

### 2.2 Create Rate Limiting Utility

Create `lib/rate-limit.ts`:

```typescript
import { LRUCache } from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  })

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit

        return isRateLimited ? reject() : resolve()
      }),
  }
}

export const adminLoginLimiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500,
})

export const userLoginLimiter = rateLimit({
  interval: 15 * 60 * 1000,
  uniqueTokenPerInterval: 1000,
})
```

### 2.3 Add Rate Limiting to Admin Auth

Update `app/api/admin/auth/route.ts`:

```typescript
import { adminLoginLimiter } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Get IP address
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    try {
      await adminLoginLimiter.check(5, ip) // 5 attempts per 15 min
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many login attempts. Please try again in 15 minutes.',
          rateLimited: true
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'Retry-After': '900'
          }
        }
      )
    }
    
    // ... rest of authentication code
  }
}
```

---

## Step 3: CSRF Protection (Days 5-7)

### 3.1 Create CSRF Utility

Create `lib/csrf.ts`:

```typescript
import { randomBytes, createHmac } from 'crypto'

const CSRF_SECRET = process.env.CSRF_SECRET || 'change-me-in-production'

export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex')
}

export function createCSRFToken(sessionId: string): string {
  const hmac = createHmac('sha256', CSRF_SECRET)
  hmac.update(sessionId)
  return hmac.digest('hex')
}

export function verifyCSRFToken(token: string, sessionId: string): boolean {
  const expectedToken = createCSRFToken(sessionId)
  return token === expectedToken
}

export async function getCSRFTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get('csrf_token')?.value || null
}
```

### 3.2 Add CSRF Middleware

Create `middleware.ts` (or update existing):

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyCSRFToken, getCSRFTokenFromCookie } from '@/lib/csrf'

export async function middleware(request: NextRequest) {
  // Only check CSRF for POST/PUT/DELETE to admin routes
  if (request.nextUrl.pathname.startsWith('/api/admin') && 
      ['POST', 'PUT', 'DELETE'].includes(request.method)) {
    
    const csrfToken = request.headers.get('x-csrf-token')
    const sessionId = await getCSRFTokenFromCookie()
    
    if (!csrfToken || !sessionId || !verifyCSRFToken(csrfToken, sessionId)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      )
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/admin/:path*'
}
```

### 3.3 Add CSRF Token to Admin Forms

Update admin login page to include CSRF token:

```typescript
// In admin login component
const [csrfToken, setCsrfToken] = useState<string>('')

useEffect(() => {
  // Generate CSRF token on mount
  const token = generateCSRFToken()
  setCsrfToken(token)
  // Set cookie
  document.cookie = `csrf_token=${token}; path=/; SameSite=Strict`
}, [])

// Include in API calls
const response = await fetch("/api/admin/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken
  },
  body: JSON.stringify({ password, step: 'password' }),
})
```

---

## Step 4: Password Security (Days 7-10)

### 4.1 Install Bcrypt

```bash
npm install bcrypt @types/bcrypt
```

### 4.2 Create Password Utilities

Create `lib/password.ts`:

```typescript
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 12

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS)
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function validatePasswordStrength(password: string): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}
```

### 4.3 Update Admin Auth to Use Hashed Passwords

Update `app/api/admin/auth/route.ts`:

```typescript
import { verifyPassword, hashPassword } from '@/lib/password'

// Hash admin password on first setup (run once)
// const hashedPassword = await hashPassword('your-admin-password')
// Store in ADMIN_PASSWORD_HASH env var

export async function POST(request: NextRequest) {
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
  
  if (step === 'password') {
    const isValid = await verifyPassword(password, adminPasswordHash)
    
    if (!isValid) {
      // ... rate limiting and error handling
    }
    // ... rest of code
  }
}
```

### 4.4 Create Password Setup Script

Create `scripts/setup-admin-password.ts`:

```typescript
import { hashPassword } from '../lib/password'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter admin password: ', async (password) => {
  const hash = await hashPassword(password)
  console.log('\nAdd this to your .env.local:')
  console.log(`ADMIN_PASSWORD_HASH=${hash}`)
  rl.close()
})
```

---

## Step 5: Testing (Days 10-14)

### 5.1 Test Checklist

- [ ] Admin login works with new session system
- [ ] Sessions expire after 4 hours
- [ ] Rate limiting blocks after 5 failed attempts
- [ ] CSRF protection blocks requests without token
- [ ] Password hashing works correctly
- [ ] Logout clears session cookie
- [ ] Session persists across page refreshes

### 5.2 Security Testing

```bash
# Test rate limiting
for i in {1..6}; do
  curl -X POST http://localhost:3000/api/admin/auth \
    -H "Content-Type: application/json" \
    -d '{"password":"wrong"}'
done

# Test CSRF protection
curl -X POST http://localhost:3000/api/admin/auth \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: invalid" \
  -d '{"password":"test"}'
```

---

## Environment Variables Checklist

Add these to `.env.local`:

```env
# Admin Session Security
ADMIN_JWT_SECRET=generate-a-random-32-character-secret-here

# Admin Password (hashed)
ADMIN_PASSWORD_HASH=run-setup-admin-password-script-to-generate

# CSRF Protection
CSRF_SECRET=another-random-32-character-secret-here

# Existing variables
ADMIN_2FA_SECRET=your-existing-2fa-secret
```

---

## Next Steps

After completing Phase 1:

1. ✅ Review all changes
2. ✅ Test thoroughly
3. ✅ Deploy to staging
4. ✅ Begin Phase 2 (Admin Audit Logging)
5. ✅ Begin Phase 3 (User Privacy Rights)

---

## Troubleshooting

### Session not persisting
- Check cookie settings (httpOnly, secure, sameSite)
- Verify JWT_SECRET is set
- Check browser console for cookie errors

### Rate limiting not working
- Verify IP address detection
- Check rate limit cache is working
- Test with different IP addresses

### CSRF errors
- Verify CSRF token is sent in header
- Check token generation matches verification
- Ensure cookie is set correctly

---

**Questions?** Refer to `COMPLIANCE_ROADMAP.md` for detailed specifications.











