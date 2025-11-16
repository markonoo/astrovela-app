"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Cookie, Save, Info } from "lucide-react"

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export function ConsentManager() {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem('cookie_consent')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPreferences({
          essential: true,
          analytics: parsed.analytics || false,
          marketing: parsed.marketing || false,
        })
      } catch (e) {
        // Invalid saved data, use defaults
      }
    }
  }, [])

  const handleSave = async () => {
    // Save to localStorage
    localStorage.setItem('cookie_consent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }))

    // Send to server
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          cookies: preferences.analytics,
          marketing: preferences.marketing,
        }),
      })
    } catch (error) {
      console.error('Failed to save consent preferences:', error)
    }

    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Cookie className="w-6 h-6 text-amber-600" />
          <CardTitle>Cookie Preferences</CardTitle>
        </div>
        <CardDescription>
          Manage your cookie consent preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            You can change your cookie preferences at any time. Essential cookies 
            are required for the website to function and cannot be disabled.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <Label htmlFor="essential" className="text-base font-medium">
                Essential Cookies
              </Label>
              <p className="text-sm text-gray-500 mt-1">
                Required for the website to function properly. These cannot be disabled.
              </p>
            </div>
            <Switch
              id="essential"
              checked={preferences.essential}
              disabled
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <Label htmlFor="analytics" className="text-base font-medium">
                Analytics Cookies
              </Label>
              <p className="text-sm text-gray-500 mt-1">
                Help us understand how visitors interact with our website.
              </p>
            </div>
            <Switch
              id="analytics"
              checked={preferences.analytics}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, analytics: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <Label htmlFor="marketing" className="text-base font-medium">
                Marketing Cookies
              </Label>
              <p className="text-sm text-gray-500 mt-1">
                Used to deliver relevant advertisements and track campaign effectiveness.
              </p>
            </div>
            <Switch
              id="marketing"
              checked={preferences.marketing}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, marketing: checked })
              }
            />
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button onClick={handleSave} className="flex-1">
            <Save className="w-4 h-4 mr-2" />
            Save Preferences
          </Button>
        </div>

        {saved && (
          <Alert>
            <AlertDescription className="text-green-600">
              Preferences saved successfully!
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}







