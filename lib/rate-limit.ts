/**
 * Rate Limiting Utilities
 * Prevents brute force attacks and API abuse
 */

import { LRUCache } from 'lru-cache'

type RateLimitOptions = {
  uniqueTokenPerInterval?: number
  interval?: number
}

type RateLimitResult = {
  success: boolean
  limit: number
  remaining: number
  reset: number
}

/**
 * Create a rate limiter instance
 */
export function rateLimit(options?: RateLimitOptions) {
  const tokenCache = new LRUCache<string, number[]>({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000, // Default 1 minute
  })

  return {
    check: (limit: number, token: string): Promise<RateLimitResult> =>
      new Promise((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        
        tokenCount[0] += 1
        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit

        const result: RateLimitResult = {
          success: !isRateLimited,
          limit,
          remaining: Math.max(0, limit - currentUsage),
          reset: Date.now() + (options?.interval || 60000)
        }

        return isRateLimited ? reject(result) : resolve(result)
      }),
  }
}

/**
 * Admin login rate limiter: 5 attempts per 15 minutes
 */
export const adminLoginLimiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500,
})

/**
 * User login rate limiter: 10 attempts per 15 minutes
 */
export const userLoginLimiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 1000,
})

/**
 * API rate limiter: 100 requests per minute
 */
export const apiLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 1000,
})

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request | { headers: Headers }): string {
  const headers = request.headers instanceof Headers 
    ? request.headers 
    : new Headers(request.headers)
  
  // Check various headers for IP (in order of preference)
  const forwardedFor = headers.get('x-forwarded-for')
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim()
  }
  
  const realIP = headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  
  const cfConnectingIP = headers.get('cf-connecting-ip') // Cloudflare
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return 'unknown'
}












