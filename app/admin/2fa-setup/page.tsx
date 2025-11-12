"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, CheckCircle, Copy, AlertCircle, Loader2 } from "lucide-react"

export default function Admin2FASetupPage() {
  const [loading, setLoading] = useState(false)
  const [setupData, setSetupData] = useState<{
    secret: string
    qrCode: string
    instructions: string[]
    warning: string
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSetup = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/admin/2fa/setup")
      const data = await response.json()

      if (response.ok && data.success) {
        setSetupData(data)
      } else {
        setError(data.error || "Failed to generate 2FA setup")
      }
    } catch (err) {
      setError("Failed to setup 2FA. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copySecret = () => {
    if (setupData?.secret) {
      navigator.clipboard.writeText(setupData.secret)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-purple-100 p-3">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Setup Two-Factor Authentication</CardTitle>
          <CardDescription className="text-center">
            Secure your admin account with Google Authenticator or similar apps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!setupData ? (
            <>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Two-factor authentication adds an extra layer of security to your admin account. 
                  After setup, you'll need both your password and a 6-digit code from your authenticator app to login.
                </p>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  onClick={handleSetup} 
                  className="w-full" 
                  disabled={loading}
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating Setup...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Generate 2FA Setup
                    </>
                  )}
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="font-semibold">
                  {setupData.warning}
                </AlertDescription>
              </Alert>

              {/* QR Code */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <img 
                    src={setupData.qrCode} 
                    alt="2FA QR Code" 
                    className="w-64 h-64"
                  />
                </div>
              </div>

              {/* Secret Key */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Secret Key (Manual Entry)</label>
                <div className="flex gap-2">
                  <div className="flex-1 font-mono text-sm bg-gray-100 p-3 rounded border break-all">
                    {setupData.secret}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copySecret}
                    className="shrink-0"
                  >
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  If you can't scan the QR code, manually enter this secret key into your authenticator app
                </p>
              </div>

              {/* Instructions */}
              <div className="space-y-2">
                <h3 className="font-semibold">Setup Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  {setupData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              {/* Environment Variable Setup */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Environment Variable Setup</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Add this to your <code className="bg-blue-100 px-1 rounded">.env.local</code> file or Vercel environment variables:
                </p>
                <div className="bg-blue-100 p-3 rounded font-mono text-xs break-all">
                  ADMIN_2FA_SECRET={setupData.secret}
                </div>
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  After setting the environment variable, restart your application. 
                  You can then use the 6-digit codes from your authenticator app when logging in.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}



