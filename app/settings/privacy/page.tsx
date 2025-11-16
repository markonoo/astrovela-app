"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Eye, 
  Download, 
  Trash2, 
  Edit, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Loader2,
  FileText,
  Database,
  Calendar
} from "lucide-react"
import { useRouter } from "next/navigation"

interface UserData {
  profile: {
    id: number
    email: string
    name: string | null
    createdAt: string
  }
  quizResponses: Array<{
    id: string
    createdAt: string
    birthDate: any
    birthPlace: string | null
    birthTime: string | null
    firstName: string | null
    lastName: string | null
    gender: string | null
  }>
  chartImages: Array<{
    id: string
    imageUrl: string
    chartType: string | null
    createdAt: string
  }>
  chartInterpretations: Array<{
    id: string
    sunSign: string | null
    moonSign: string | null
    createdAt: string | null
  }>
  entitlements: Array<{
    id: string
    plan: string
    freeUntil: string
    hasReport: boolean
    purchaseDate: string | null
    createdAt: string
  }>
  dataSources: Array<{
    type: string
    description: string
    collectedAt: string
  }>
}

export default function PrivacySettingsPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [exporting, setExporting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user/data", {
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user data")
      }

      const data = await response.json()
      if (data.success) {
        setUserData(data.data)
      } else {
        throw new Error(data.error || "Failed to load data")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load user data")
    } finally {
      setLoading(false)
    }
  }

  const handleExport = async (format: 'json' | 'csv') => {
    setExporting(true)
    setError(null)

    try {
      const response = await fetch("/api/user/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ format }),
      })

      if (!response.ok) {
        throw new Error("Failed to export data")
      }

      // Download file
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `my-data-${new Date().toISOString().split('T')[0]}.${format}`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to export data")
    } finally {
      setExporting(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') {
      setError("Please type 'DELETE' to confirm")
      return
    }

    setDeleting(true)
    setError(null)

    try {
      const response = await fetch("/api/user/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ 
          confirm: 'DELETE',
          reason: 'User requested account deletion'
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Redirect to home page after deletion
        alert("Your account and all data have been deleted. You will be redirected.")
        window.location.href = "/"
      } else {
        throw new Error(data.error || "Failed to delete account")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete account")
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-600" />
          <p className="text-gray-600">Loading your data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Settings</h1>
          <p className="text-lg text-gray-600">
            Manage your data and privacy rights
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Right to Access */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6 text-blue-600" />
              <CardTitle>Right to Access (GDPR Article 15)</CardTitle>
            </div>
            <CardDescription>
              View all personal data we hold about you
            </CardDescription>
          </CardHeader>
          <CardContent>
            {userData ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Profile Information</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><strong>Email:</strong> {userData.profile.email}</p>
                      <p><strong>Name:</strong> {userData.profile.name || 'Not provided'}</p>
                      <p><strong>Account Created:</strong> {new Date(userData.profile.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data Summary</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><strong>Quiz Responses:</strong> {userData.quizResponses.length}</p>
                      <p><strong>Chart Images:</strong> {userData.chartImages.length}</p>
                      <p><strong>Chart Interpretations:</strong> {userData.chartInterpretations.length}</p>
                      <p><strong>Active Subscriptions:</strong> {userData.entitlements.length}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Data Sources</h3>
                  <div className="space-y-2">
                    {userData.dataSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm font-medium">{source.type}</p>
                          <p className="text-xs text-gray-500">{source.description}</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {new Date(source.collectedAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No data found</p>
            )}
          </CardContent>
        </Card>

        {/* Right to Data Portability */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Download className="w-6 h-6 text-green-600" />
              <CardTitle>Right to Data Portability (GDPR Article 20)</CardTitle>
            </div>
            <CardDescription>
              Download all your data in a portable format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                You can download all your personal data in JSON or CSV format. 
                This includes your profile, quiz responses, charts, and all other data we hold.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => handleExport('json')}
                  disabled={exporting}
                  variant="outline"
                >
                  {exporting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 mr-2" />
                      Export JSON
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => handleExport('csv')}
                  disabled={exporting}
                  variant="outline"
                >
                  {exporting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <Database className="w-4 h-4 mr-2" />
                      Export CSV
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right to Deletion */}
        <Card className="mb-6 border-red-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Trash2 className="w-6 h-6 text-red-600" />
              <CardTitle>Right to Deletion (GDPR Article 17)</CardTitle>
            </div>
            <CardDescription>
              Request deletion of your account and all associated data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This action cannot be undone. All your data, including quiz responses, 
                charts, and account information will be permanently deleted.
              </AlertDescription>
            </Alert>

            {!showDeleteConfirm ? (
              <Button
                onClick={() => setShowDeleteConfirm(true)}
                variant="destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Request Account Deletion
              </Button>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Type <strong>DELETE</strong> to confirm:
                  </label>
                  <input
                    type="text"
                    value={deleteConfirmText}
                    onChange={(e) => setDeleteConfirmText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Type DELETE to confirm"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleDeleteAccount}
                    disabled={deleting || deleteConfirmText !== 'DELETE'}
                    variant="destructive"
                  >
                    {deleting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete My Account
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={() => {
                      setShowDeleteConfirm(false)
                      setDeleteConfirmText("")
                    }}
                    variant="outline"
                    disabled={deleting}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Information */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-600" />
              <CardTitle>Your Privacy Rights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                <strong>Right to Access:</strong> You can view all personal data we hold about you above.
              </p>
              <p>
                <strong>Right to Data Portability:</strong> You can download your data in JSON or CSV format.
              </p>
              <p>
                <strong>Right to Deletion:</strong> You can request deletion of your account and all data.
              </p>
              <p>
                <strong>Right to Rectification:</strong> You can update your profile information in your account settings.
              </p>
              <p className="pt-2 border-t">
                For questions about your privacy rights, please contact us at{" "}
                <a href="mailto:privacy@astrovela.com" className="text-blue-600 hover:underline">
                  privacy@astrovela.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}









