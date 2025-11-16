"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute"
import { 
  BookOpen, 
  FileText, 
  Palette, 
  BarChart3, 
  Users, 
  Settings,
  Eye,
  Download,
  Sparkles,
  Calendar,
  Heart,
  Briefcase,
  Compass,
  Layout,
  ExternalLink,
  LogOut
} from "lucide-react"

function AdminPreviewContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: 'include',
      })
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      // Redirect regardless of API call success
      window.location.href = "/olivialimon-admin/login"
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-apple-gray-5 to-apple-gray-6 p-6 md:p-12 safe-area-inset-top">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between animate-fadeIn">
          <div>
            <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-2">Admin Preview Dashboard</h1>
            <p className="text-[17px] leading-[24px] text-apple-gray-2">
              Access all features and preview the application
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Document Generator Preview */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Document Generator</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Preview the interactive astrology report</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-3">
              <Link href="/olivialimon-admin/preview/document-generator">
                <Button className="w-full" variant="default">
                  <Eye className="w-4 h-4 mr-2" />
                  View Document Generator
                </Button>
              </Link>
              <Link href="/companion/report/viewer">
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Full Report Viewer
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Book Cover Designer */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Book Cover Designer</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Design custom book covers</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <Link href="/book-designer">
                <Button className="w-full" variant="default">
                  <Palette className="w-4 h-4 mr-2" />
                  Open Designer
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Companion App Features */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Companion App</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Astrology companion features</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-2">
              <Link href="/companion">
                <Button className="w-full mb-2" variant="default" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Today's Insights
                </Button>
              </Link>
              <Link href="/companion/weekly">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Weekly Outlook
                </Button>
              </Link>
              <Link href="/companion/love">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Love & Compatibility
                </Button>
              </Link>
              <Link href="/companion/career">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Career & Timing
                </Button>
              </Link>
              <Link href="/companion/explore">
                <Button className="w-full" variant="outline" size="sm">
                  <Compass className="w-4 h-4 mr-2" />
                  Explore Astrology
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quiz Flow */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <Layout className="w-6 h-6 text-green-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Quiz Flow</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">User onboarding quiz</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-2">
              <Link href="/quiz">
                <Button className="w-full" variant="default">
                  <Layout className="w-4 h-4 mr-2" />
                  Start Quiz
                </Button>
              </Link>
              <Link href="/reset-quiz">
                <Button className="w-full" variant="outline">
                  Reset Quiz
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admin Stats */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Admin Statistics</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">View application metrics</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-2">
              <Link href="/olivialimon-admin/audit">
                <Button className="w-full mb-2" variant="default" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Audit Logs
                </Button>
              </Link>
              <Link href="/olivialimon-admin/recovery-codes">
                <Button className="w-full mb-2" variant="default" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Recovery Codes
                </Button>
              </Link>
              <Link href="/api/admin/companion-stats" target="_blank">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Companion Stats
                </Button>
              </Link>
              <Link href="/api/admin/pdf-stats" target="_blank">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  PDF Stats
                </Button>
              </Link>
              <Link href="/dashboard/monitoring">
                <Button className="w-full" variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Monitoring Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Other Pages */}
          <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="px-6 py-5">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-red-600" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Other Pages</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Additional application pages</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-2">
              <Link href="/pricing">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  Pricing
                </Button>
              </Link>
              <Link href="/natal-chart">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  Natal Chart
                </Button>
              </Link>
              <Link href="/help-center">
                <Button className="w-full mb-2" variant="outline" size="sm">
                  Help Center
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="w-full" variant="outline" size="sm">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Quick Actions</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/api/health" target="_blank">
                <Button variant="outline" className="w-full">
                  Health Check
                </Button>
              </Link>
              <Link href="/api/test-quiz-responses" target="_blank">
                <Button variant="outline" className="w-full">
                  Test Quiz API
                </Button>
              </Link>
              <Link href="/api/test-session-tracking" target="_blank">
                <Button variant="outline" className="w-full">
                  Test Session Tracking
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-apple-lg p-4">
          <p className="text-[13px] leading-[18px] text-blue-800">
            <strong>Note:</strong> This is a preview/admin dashboard. Some features may require authentication 
            or database setup to function fully. Use this page to explore the application structure and UI.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AdminPreviewPage() {
  return (
    <AdminProtectedRoute>
      <AdminPreviewContent />
    </AdminProtectedRoute>
  )
}

