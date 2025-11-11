"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Cookie, X, Settings } from "lucide-react"

interface CookieBannerProps {
  onAccept: (categories: string[]) => void
  onReject: () => void
  onCustomize: () => void
}

export function CookieBanner({ onAccept, onReject, onCustomize }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    onAccept(['essential', 'analytics', 'marketing'])
    localStorage.setItem('cookie_consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }))
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    onReject()
    localStorage.setItem('cookie_consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }))
    setShowBanner(false)
  }

  const handleCustomize = () => {
    onCustomize()
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cookie className="w-6 h-6 text-amber-600" />
              <CardTitle>Cookie Consent</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBanner(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription>
            We use cookies to enhance your experience and analyze site usage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertDescription className="text-sm">
              <strong>Essential cookies:</strong> Required for the website to function properly.
              <br />
              <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.
              <br />
              <strong>Marketing cookies:</strong> Used to deliver relevant advertisements.
            </AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleAcceptAll}>
              Accept All
            </Button>
            <Button onClick={handleRejectAll} variant="outline">
              Reject All
            </Button>
            <Button onClick={handleCustomize} variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Customize
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By continuing, you agree to our use of cookies.{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

