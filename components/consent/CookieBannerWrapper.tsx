"use client"

import { CookieBanner } from "./CookieBanner"
import { useState } from "react"

export function CookieBannerWrapper() {
  const [showCustomize, setShowCustomize] = useState(false)

  const handleAccept = async (categories: string[]) => {
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          cookies: categories.includes('analytics'),
          marketing: categories.includes('marketing'),
          analytics: categories.includes('analytics'),
        }),
      })
    } catch (error) {
      console.error('Failed to save consent:', error)
    }
  }

  const handleReject = async () => {
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          cookies: false,
          marketing: false,
          analytics: false,
        }),
      })
    } catch (error) {
      console.error('Failed to save consent:', error)
    }
  }

  const handleCustomize = () => {
    setShowCustomize(true)
    // Could redirect to a consent settings page
    window.location.href = '/settings/privacy#consent'
  }

  return <CookieBanner onAccept={handleAccept} onReject={handleReject} onCustomize={handleCustomize} />
}











