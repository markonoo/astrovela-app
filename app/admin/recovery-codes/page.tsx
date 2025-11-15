"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Download, Copy, CheckCircle2, AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react"
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute"
import Link from "next/link"

export default function RecoveryCodesPage() {
  return (
    <AdminProtectedRoute>
      <RecoveryCodesContent />
    </AdminProtectedRoute>
  )
}

function RecoveryCodesContent() {
  const [codes, setCodes] = useState<string[]>([])
  const [status, setStatus] = useState<{
    remainingCount: number
    hasSetup: boolean
    lowCodes: boolean
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadStatus()
  }, [])

  const loadStatus = async () => {
    try {
      const response = await fetch("/api/admin/recovery-codes", {
        credentials: 'include',
      })
      
      if (response.ok) {
        const data = await response.json()
        setStatus(data)
      }
    } catch (err) {
      console.error("Failed to load recovery codes status", err)
    }
  }

  const generateCodes = async () => {
    setLoading(true)
    setError(null)
    setCopied(false)

    try {
      const response = await fetch("/api/admin/recovery-codes", {
        method: "POST",
        credentials: 'include',
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setCodes(data.codes)
        await loadStatus()
      } else {
        setError(data.error || "Failed to generate recovery codes")
      }
    } catch (err) {
      setError("Failed to generate recovery codes. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    const text = codes.join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const downloadCodes = () => {
    const text = `AstroBook Admin Recovery Codes
Generated: ${new Date().toLocaleString()}

IMPORTANT: Save these codes securely. Each code can only be used once.

${codes.map((code, i) => `${i + 1}. ${code}`).join('\n')}

Keep these codes in a secure location (password manager, encrypted file, etc.)
`
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `astrobook-recovery-codes-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recovery Codes</h1>
            <p className="text-gray-600 mt-1">Backup authentication for admin access</p>
          </div>
          <Link href="/admin/preview">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Status Card */}
        {status && !codes.length && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Recovery Codes Status
              </CardTitle>
              <CardDescription>
                Current status of your backup authentication codes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Remaining Codes</p>
                  <p className="text-2xl font-bold text-gray-900">{status.remainingCount}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Status</p>
                  <p className={`text-2xl font-bold ${status.lowCodes ? 'text-orange-600' : 'text-green-600'}`}>
                    {status.lowCodes ? 'Low' : 'Healthy'}
                  </p>
                </div>
              </div>

              {status.lowCodes && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    You have {status.remainingCount} recovery codes remaining. Consider generating new codes.
                  </AlertDescription>
                </Alert>
              )}

              {!status.hasSetup && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    No recovery codes found. Generate codes now to ensure you can access your account if you lose your 2FA device.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {/* Generate/Display Codes Card */}
        <Card>
          <CardHeader>
            <CardTitle>
              {codes.length ? 'Your Recovery Codes' : 'Generate Recovery Codes'}
            </CardTitle>
            <CardDescription>
              {codes.length 
                ? 'Save these codes securely. Each code can only be used once.'
                : 'Generate a new set of 10 recovery codes for backup authentication'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {!codes.length ? (
              <div className="space-y-4">
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>What are recovery codes?</strong>
                    <br />
                    Recovery codes are backup authentication codes that allow you to access your admin account if you lose access to your 2FA device (phone, authenticator app, etc.).
                    <br /><br />
                    <strong>Important:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Each code can only be used once</li>
                      <li>Store them in a secure location (password manager recommended)</li>
                      <li>Generating new codes will invalidate all previous unused codes</li>
                      <li>You'll receive 10 codes per generation</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Button 
                  onClick={generateCodes} 
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Generate Recovery Codes
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>IMPORTANT: These codes will only be shown once!</strong>
                    <br />
                    Save them securely before leaving this page. Each code can only be used once for login.
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    {codes.map((code, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-gray-500 w-6">{index + 1}.</span>
                        <span className="tracking-wider">{code}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex-1"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy All
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={downloadCodes}
                    variant="outline"
                    className="flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>

                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    Recovery codes generated successfully! Make sure to save them before leaving this page.
                  </AlertDescription>
                </Alert>

                <Button 
                  onClick={() => {
                    setCodes([])
                    loadStatus()
                  }}
                  variant="ghost"
                  className="w-full"
                >
                  Done - I've saved my codes
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use Recovery Codes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <div className="space-y-2">
              <p><strong>When to use:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>You've lost your phone or 2FA device</li>
                <li>Your authenticator app is not working</li>
                <li>You can't access your 2FA codes for any reason</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p><strong>How to use:</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Go to the admin login page</li>
                <li>Enter your password</li>
                <li>Click "Use recovery code instead"</li>
                <li>Enter one of your recovery codes</li>
                <li>The code will be marked as used and cannot be reused</li>
              </ol>
            </div>
            <div className="space-y-2">
              <p><strong>Best practices:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Store codes in a password manager (recommended)</li>
                <li>Keep a printed copy in a secure physical location</li>
                <li>Generate new codes when you run low (less than 3 remaining)</li>
                <li>Never share your recovery codes with anyone</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}




