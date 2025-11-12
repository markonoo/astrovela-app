"use client"

import { useState, useEffect } from 'react'
import { generateCSRFToken } from '@/lib/csrf'

/**
 * Hook to generate and manage CSRF token
 * Generates token on mount and stores it in cookie
 */
export function useCSRF(): string | null {
  const [csrfToken, setCsrfToken] = useState<string | null>(null)

  useEffect(() => {
    // Generate CSRF token
    const token = generateCSRFToken()
    setCsrfToken(token)
    
    // Set cookie (accessible to JavaScript for double-submit pattern)
    document.cookie = `csrf_token=${token}; path=/; SameSite=Strict; max-age=3600`
  }, [])

  return csrfToken
}



