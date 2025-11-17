"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
  LogOut,
  TrendingUp,
  DollarSign,
  Activity
} from "lucide-react"
import { format } from "date-fns"

interface AuraStats {
  summary: {
    totalEntitlements: number
    activeSubscriptions: number
    expiredTrials: number
    usersWithReports: number
    recentEntitlements: number
    expiringSoon: number
    conversionRate: string
  }
  byPlan: Array<{
    plan: string
    count: number
  }>
  timestamp: string
}

function AdminPreviewContent() {
  const [mounted, setMounted] = useState(false)
  const [auraStats, setAuraStats] = useState<AuraStats | null>(null)
  const [loadingStats, setLoadingStats] = useState(true)

  useEffect(() => {
    setMounted(true)
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/aura-stats")
      if (response.ok) {
        const data = await response.json()
        setAuraStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoadingStats(false)
    }
  }

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

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning"
    if (hour < 18) return "Good Afternoon"
    return "Good Evening"
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#050719] via-[#090b25] to-[#0b0e2e] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050719] via-[#090b25] to-[#0b0e2e] text-white p-6 md:p-12 safe-area-inset-top">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[32px] leading-[40px] font-bold text-white mb-2">{getGreeting()}!</h1>
              <p className="text-[15px] leading-[20px] text-white/60">
                {format(new Date(), "EEEE, MMMM d, yyyy")}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Users */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] leading-[18px] text-white/60">Total Users</span>
                <Users className="w-5 h-5 text-white/60" />
              </div>
              {loadingStats ? (
                <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
              ) : (
                <>
                  <div className="text-[32px] leading-[40px] font-bold text-white mb-1">
                    {auraStats?.summary.totalEntitlements.toLocaleString() || "0"}
                  </div>
                  <div className="text-[13px] leading-[18px] text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {auraStats?.summary.recentEntitlements || 0} new this month
                  </div>
                </>
              )}
            </div>

            {/* Active Subscriptions */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] leading-[18px] text-white/60">Active Subscriptions</span>
                <Activity className="w-5 h-5 text-white/60" />
              </div>
              {loadingStats ? (
                <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
              ) : (
                <>
                  <div className="text-[32px] leading-[40px] font-bold text-white mb-1">
                    {auraStats?.summary.activeSubscriptions.toLocaleString() || "0"}
                  </div>
                  <div className="text-[13px] leading-[18px] text-white/60">
                    {auraStats?.summary.conversionRate} conversion rate
                  </div>
                </>
              )}
            </div>

            {/* Users with Reports */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] leading-[18px] text-white/60">Reports Generated</span>
                <FileText className="w-5 h-5 text-white/60" />
              </div>
              {loadingStats ? (
                <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
              ) : (
                <>
                  <div className="text-[32px] leading-[40px] font-bold text-white mb-1">
                    {auraStats?.summary.usersWithReports.toLocaleString() || "0"}
                  </div>
                  <div className="text-[13px] leading-[18px] text-white/60">
                    Users with reports
                  </div>
                </>
              )}
            </div>

            {/* Expiring Soon */}
            <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] leading-[18px] text-white/60">Expiring Soon</span>
                <Calendar className="w-5 h-5 text-white/60" />
              </div>
              {loadingStats ? (
                <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
              ) : (
                <>
                  <div className="text-[32px] leading-[40px] font-bold text-white mb-1">
                    {auraStats?.summary.expiringSoon.toLocaleString() || "0"}
                  </div>
                  <div className="text-[13px] leading-[18px] text-yellow-400">
                    Trials expiring in 7 days
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Document Generator Preview */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Document Generator</h3>
                <p className="text-[13px] leading-[18px] text-white/60">Preview the interactive astrology report</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link href="/olivialimon-admin/preview/document-generator">
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[15px] leading-[20px] font-medium shadow-[0_0_16px_rgba(122,91,255,0.5)] hover:shadow-[0_0_20px_rgba(122,91,255,0.7)] transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Document Generator
                </button>
              </Link>
              <Link href="/aura/report/viewer">
                <button className="w-full py-3 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Full Report Viewer
                </button>
              </Link>
            </div>
          </div>

          {/* Book Cover Designer */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4de1] to-[#ff6b9d] flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Book Cover Designer</h3>
                <p className="text-[13px] leading-[18px] text-white/60">Design custom book covers</p>
              </div>
            </div>
            <Link href="/book-designer">
              <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[15px] leading-[20px] font-medium shadow-[0_0_16px_rgba(122,91,255,0.5)] hover:shadow-[0_0_20px_rgba(122,91,255,0.7)] transition-all flex items-center justify-center gap-2">
                <Palette className="w-4 h-4" />
                Open Designer
              </button>
            </Link>
          </div>

          {/* Aura App Features */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffcc00] to-[#ff9500] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Aura App</h3>
                <p className="text-[13px] leading-[18px] text-white/60">Astrology aura features</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/aura">
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[14px] leading-[20px] font-medium shadow-[0_0_12px_rgba(122,91,255,0.4)] hover:shadow-[0_0_16px_rgba(122,91,255,0.6)] transition-all flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  Today's Insights
                </button>
              </Link>
              <Link href="/aura/weekly">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  Weekly Outlook
                </button>
              </Link>
              <Link href="/aura/love">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-4 h-4" />
                  Love & Compatibility
                </button>
              </Link>
              <Link href="/aura/career">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4" />
                  Career & Timing
                </button>
              </Link>
              <Link href="/aura/explore">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2">
                  <Compass className="w-4 h-4" />
                  Explore Astrology
                </button>
              </Link>
            </div>
          </div>

          {/* Quiz Flow */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34c759] to-[#30d158] flex items-center justify-center">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Quiz Flow</h3>
                <p className="text-[13px] leading-[18px] text-white/60">User onboarding quiz</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/quiz">
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[15px] leading-[20px] font-medium shadow-[0_0_16px_rgba(122,91,255,0.5)] hover:shadow-[0_0_20px_rgba(122,91,255,0.7)] transition-all flex items-center justify-center gap-2">
                  <Layout className="w-4 h-4" />
                  Start Quiz
                </button>
              </Link>
              <Link href="/reset-quiz">
                <button className="w-full py-3 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all">
                  Reset Quiz
                </button>
              </Link>
            </div>
          </div>

          {/* Admin Stats */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5ac8fa] to-[#007aff] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Admin Statistics</h3>
                <p className="text-[13px] leading-[18px] text-white/60">View application metrics</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/olivialimon-admin/audit">
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[14px] leading-[20px] font-medium shadow-[0_0_12px_rgba(122,91,255,0.4)] hover:shadow-[0_0_16px_rgba(122,91,255,0.6)] transition-all flex items-center justify-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4" />
                  Audit Logs
                </button>
              </Link>
              <Link href="/olivialimon-admin/recovery-codes">
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] text-white text-[14px] leading-[20px] font-medium shadow-[0_0_12px_rgba(122,91,255,0.4)] hover:shadow-[0_0_16px_rgba(122,91,255,0.6)] transition-all flex items-center justify-center gap-2 mb-2">
                  <Settings className="w-4 h-4" />
                  Recovery Codes
                </button>
              </Link>
              <Link href="/api/admin/aura-stats" target="_blank">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2 mb-2">
                  <Users className="w-4 h-4" />
                  Aura Stats
                </button>
              </Link>
              <Link href="/api/admin/pdf-stats" target="_blank">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2 mb-2">
                  <FileText className="w-4 h-4" />
                  PDF Stats
                </button>
              </Link>
              <Link href="/dashboard/monitoring">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" />
                  Monitoring Dashboard
                </button>
              </Link>
            </div>
          </div>

          {/* Other Pages */}
          <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 hover:bg-white/8 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff6961] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-white">Other Pages</h3>
                <p className="text-[13px] leading-[18px] text-white/60">Additional application pages</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/pricing">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all mb-2">
                  Pricing
                </button>
              </Link>
              <Link href="/natal-chart">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all mb-2">
                  Natal Chart
                </button>
              </Link>
              <Link href="/help-center">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all mb-2">
                  Help Center
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[14px] leading-[20px] font-medium transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 mb-8">
          <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-2">Quick Actions</h3>
          <p className="text-[13px] leading-[18px] text-white/60 mb-4">Common admin tasks</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/api/health" target="_blank">
              <button className="w-full py-3 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all">
                Health Check
              </button>
            </Link>
            <Link href="/api/test-quiz-responses" target="_blank">
              <button className="w-full py-3 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all">
                Test Quiz API
              </button>
            </Link>
            <Link href="/api/test-session-tracking" target="_blank">
              <button className="w-full py-3 px-4 rounded-xl bg-white/8 hover:bg-white/12 text-white text-[15px] leading-[20px] font-medium transition-all">
                Test Session Tracking
              </button>
            </Link>
          </div>
        </div>

        {/* Info Banner */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-4 border border-white/10">
          <p className="text-[13px] leading-[18px] text-white/80">
            <strong className="text-white">Note:</strong> This is a preview/admin dashboard. Some features may require authentication 
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

