"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, BookOpen, Calendar, MapPin, Eye } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { EntitlementData, ReportDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function MyReportPage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [reportData, setReportData] = useState<ReportDataResponse | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && user) {
      checkAccess()
    }
  }, [user, loading])

  const checkAccess = async () => {
    try {
      const response = await fetch("/api/companion/entitlement")
      if (response.ok) {
        const data = await response.json()
        if (data.hasAccess) {
          setEntitlement(data.entitlement)
          fetchReportData()
        } else {
          setLoadingData(false)
        }
      }
    } catch (error) {
      logger.error("Failed to check access", error)
      setLoadingData(false)
    }
  }

  const fetchReportData = async () => {
    try {
      const response = await fetch("/api/companion/report")
      if (response.ok) {
        setReportData(await response.json())
      }
    } catch (error) {
      logger.error("Failed to fetch report data", error)
    } finally {
      setLoadingData(false)
    }
  }

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch("/api/companion/report/pdf")
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `astrovela-report-${Date.now()}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        const error = await response.json()
        alert(`Failed to download PDF: ${error.error || "Unknown error"}`)
      }
    } catch (error) {
      logger.error("Failed to download PDF", error)
      alert("Failed to download PDF. Please try again.")
    }
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1"></div>
      </div>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  return (
    <div className="container mx-auto px-6 py-8 md:px-8 md:py-12 md:pt-32">
      <h1 className="text-[36px] leading-[44px] font-bold text-apple-gray-1 mb-10 animate-fadeIn">My Report</h1>

      {entitlement?.hasReport ? (
        <>
          <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-apple-lg px-6 py-5">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-purple-500" />
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Your Personalized Astrology Report</CardTitle>
              </div>
              <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">
                Purchased on {entitlement.purchaseDate ? format(new Date(entitlement.purchaseDate), "MMMM d, yyyy") : "recently"}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="space-y-4">
                <Link
                  href="/companion/report/viewer"
                  className="block w-full text-center py-3.5 px-6 bg-purple-600 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Interactive Report</span>
                </Link>

                <button
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 bg-apple-gray-1 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF Report</span>
                </button>

                <Link
                  href="/pricing"
                  className="block w-full text-center py-3.5 px-6 border-2 border-apple-gray-1 text-apple-gray-1 rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                >
                  Order Printed Version
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Birth Data */}
          {reportData && (
            <Card className="mb-8 border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="px-6 py-5">
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Your Birth Data</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <div className="space-y-4">
                  {(reportData.firstName || reportData.lastName) && (
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-apple-gray-3 mt-0.5" />
                      <div>
                        <div className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-1">Name</div>
                        <div className="text-[15px] leading-[20px] text-apple-gray-2">
                          {[reportData.firstName, reportData.lastName].filter(Boolean).join(' ') || 'Not provided'}
                        </div>
                      </div>
                    </div>
                  )}
                  {reportData.birthDate && (
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-apple-gray-3 mt-0.5" />
                      <div>
                        <div className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-1">Birth Date</div>
                        <div className="text-[15px] leading-[20px] text-apple-gray-2">{reportData.birthDate}</div>
                      </div>
                    </div>
                  )}
                  {reportData.birthTime && (
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-apple-gray-3 mt-0.5" />
                      <div>
                        <div className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-1">Birth Time</div>
                        <div className="text-[15px] leading-[20px] text-apple-gray-2">{reportData.birthTime}</div>
                      </div>
                    </div>
                  )}
                  {reportData.birthPlace && (
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-apple-gray-3 mt-0.5" />
                      <div>
                        <div className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-1">Birth Place</div>
                        <div className="text-[15px] leading-[20px] text-apple-gray-2">{reportData.birthPlace}</div>
                      </div>
                    </div>
                  )}
                  {reportData.coverColor && (
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-apple-gray-3 mt-0.5" />
                      <div>
                        <div className="text-[15px] leading-[20px] font-semibold text-apple-gray-1 mb-1">Cover Color</div>
                        <div className="text-[15px] leading-[20px] text-apple-gray-2 capitalize">{reportData.coverColor}</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Chart Summary */}
          {reportData && reportData.chartSummary && (
            <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
              <CardHeader className="px-6 py-5">
                <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">Your Chart Summary</CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <div className="space-y-3">
                  {reportData.chartSummary.sunSign && (
                    <div className="text-[15px] leading-[20px]">
                      <span className="font-semibold text-apple-gray-1">Sun:</span> <span className="text-apple-gray-2">{reportData.chartSummary.sunSign}</span>
                    </div>
                  )}
                  {reportData.chartSummary.moonSign && (
                    <div className="text-[15px] leading-[20px]">
                      <span className="font-semibold text-apple-gray-1">Moon:</span> <span className="text-apple-gray-2">{reportData.chartSummary.moonSign}</span>
                    </div>
                  )}
                  {reportData.chartSummary.risingSign && (
                    <div className="text-[15px] leading-[20px]">
                      <span className="font-semibold text-apple-gray-1">Rising:</span> <span className="text-apple-gray-2">{reportData.chartSummary.risingSign}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      ) : (
        <Card className="border-0 shadow-apple-md rounded-apple-lg bg-white hover:shadow-apple-lg transition-shadow duration-250 animate-spring">
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-[20px] leading-[28px] font-semibold text-apple-gray-1">No Report Found</CardTitle>
            <CardDescription className="text-[15px] leading-[20px] text-apple-gray-2 mt-1">You haven't purchased a report yet</CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <Link
              href="/pricing"
              className="block w-full text-center py-3.5 px-6 bg-apple-gray-1 text-white rounded-apple-md text-[17px] leading-[24px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
            >
              Purchase Your Personalized Report
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
