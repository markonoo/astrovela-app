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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 z-50 md:max-w-md">
      <Card className="shadow-xl border-2">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Cookie className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Cookie Consent</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  We use cookies to enhance your experience and analyze site usage.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 -mt-1 -mr-1"
              onClick={() => setShowBanner(false)}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="space-y-1.5 mb-3 text-xs text-gray-600">
            <p><strong>Essential cookies:</strong> Required for the website to function properly.</p>
            <p><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.</p>
            <p><strong>Marketing cookies:</strong> Used to deliver relevant advertisements.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleAcceptAll} size="sm" className="flex-1">
              Accept All
            </Button>
            <Button onClick={handleRejectAll} variant="outline" size="sm" className="flex-1">
              Reject All
            </Button>
            <Button onClick={handleCustomize} variant="outline" size="sm">
              <Settings className="w-3 h-3 mr-1" />
              Customize
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
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





