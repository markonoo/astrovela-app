"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, AlertCircle, Shield, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCSRF } from "@/hooks/useCSRF"

type LoginStep = 'password' | '2fa' | 'complete'

export default function AdminLoginPage() {
  const [step, setStep] = useState<LoginStep>('password')
  const [password, setPassword] = useState("")
  const [totpCode, setTotpCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [useRecoveryCode, setUseRecoveryCode] = useState(false)
  const [lowRecoveryCodes, setLowRecoveryCodes] = useState(false)
  const router = useRouter()
  const csrfToken = useCSRF()

  useEffect(() => {
    // Check if already logged in (using cookie-based session)
    const checkSession = async () => {
      try {
        const response = await fetch("/api/admin/auth", {
          method: "GET",
          credentials: 'include',
        })
        if (response.ok) {
          const data = await response.json()
          if (data.authenticated) {
            router.push("/olivialimon-admin/preview")
          }
        }
      } catch (error) {
        // Session check failed, stay on login page
      }
    }
    checkSession()
  }, [router])

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (!csrfToken) {
        setError("CSRF token not ready. Please refresh the page.")
        setLoading(false)
        return
      }

      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: 'include', // Include cookies for session
        body: JSON.stringify({ password, step: 'password' }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        if (data.requiresTwoFactor) {
          // Move to 2FA step
          setStep('2fa')
        } else {
          // No 2FA required, login complete
          completeLogin()
        }
      } else {
        setError(data.error || "Invalid password")
      }
    } catch (err) {
      setError("Failed to authenticate. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handle2FASubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (!csrfToken) {
        setError("CSRF token not ready. Please refresh the page.")
        setLoading(false)
        return
      }

      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: 'include', // Include cookies for session
        body: JSON.stringify({ 
          password, 
          totpCode, 
          step: '2fa' 
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Check if recovery codes are low
        if (data.lowRecoveryCodes) {
          setLowRecoveryCodes(true)
        }
        completeLogin()
      } else {
        setError(data.error || "Invalid 2FA code")
      }
    } catch (err) {
      setError("Failed to verify 2FA code. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const completeLogin = () => {
    // Session is already set by server via httpOnly cookie
    // Just redirect to admin dashboard
    router.push("/olivialimon-admin/preview")
  }

  const handleBack = () => {
    setStep('password')
    setTotpCode("")
    setError(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6 p-6 safe-area-inset-top">
      <Card className="w-full max-w-md border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
        <CardHeader className="space-y-1 px-6 py-5">
          <div className="flex items-center justify-center mb-4">
            <div className={`rounded-full p-3 ${step === '2fa' ? 'bg-purple-100' : 'bg-blue-100'}`}>
              {step === '2fa' ? (
                <Shield className="w-8 h-8 text-purple-600" />
              ) : (
                <Lock className="w-8 h-8 text-blue-600" />
              )}
            </div>
          </div>
          <CardTitle className="text-[22px] leading-[28px] font-semibold text-apple-gray-1 text-center">
            {step === '2fa' ? 'Two-Factor Authentication' : 'Admin Login'}
          </CardTitle>
          <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 text-center">
            {step === '2fa' 
              ? 'Enter the 6-digit code from your authenticator app'
              : 'Enter your admin password to access the preview dashboard'}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6">
          {step === 'password' ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  disabled={loading}
                  className="w-full"
                  autoFocus
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Verifying..." : "Continue"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handle2FASubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="totpCode">
                  {useRecoveryCode ? 'Recovery Code' : 'Authentication Code'}
                </Label>
                <Input
                  id="totpCode"
                  type="text"
                  inputMode={useRecoveryCode ? "text" : "numeric"}
                  pattern={useRecoveryCode ? undefined : "[0-9]{6}"}
                  maxLength={useRecoveryCode ? 12 : 6}
                  value={totpCode}
                  onChange={(e) => {
                    if (useRecoveryCode) {
                      // Allow alphanumeric with hyphens for recovery codes
                      const value = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, '')
                      setTotpCode(value)
                    } else {
                      // Only digits for TOTP
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                      setTotpCode(value)
                    }
                  }}
                  placeholder={useRecoveryCode ? "XXXX-XXXX-XX" : "000000"}
                  required
                  disabled={loading}
                  className={`w-full text-center ${useRecoveryCode ? 'text-lg' : 'text-2xl'} tracking-widest font-mono`}
                  autoFocus
                />
                <p className="text-xs text-gray-500 text-center">
                  {useRecoveryCode 
                    ? 'Enter one of your recovery codes (format: XXXX-XXXX-XX)'
                    : 'Open your authenticator app (Google Authenticator, Authy, etc.) and enter the 6-digit code'
                  }
                </p>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || (!useRecoveryCode && totpCode.length !== 6) || (useRecoveryCode && totpCode.length < 10)}
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-sm"
                  onClick={() => {
                    setUseRecoveryCode(!useRecoveryCode)
                    setTotpCode("")
                    setError(null)
                  }}
                  disabled={loading}
                >
                  {useRecoveryCode ? "Use authenticator app instead" : "Use recovery code instead"}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleBack}
                  disabled={loading}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-6 border-t space-y-3">
            <p className="text-[12px] leading-[16px] text-center text-apple-gray-3">
              Admin access is restricted. Contact the system administrator for credentials.
            </p>
            <div className="text-center">
              <a 
                href="/olivialimon-admin/2fa-setup" 
                className="text-[12px] leading-[16px] text-blue-600 hover:text-blue-800 hover:underline"
              >
                Setup Two-Factor Authentication
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
