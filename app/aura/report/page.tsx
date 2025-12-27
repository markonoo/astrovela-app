"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { AuraShell } from "@/components/aura/AuraShell"
import { useEntitlement } from "@/components/aura/AuraShell"
import { AuraCard } from "@/components/aura/AuraCard"
import { PageHeader } from "@/components/aura/PageHeader"
import { PillBadge } from "@/components/aura/PillBadge"
import { Download, BookOpen, Calendar, MapPin, Eye } from "lucide-react"
import { ReportDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function MyReportPage() {
  return (
    <AuraShell title="Report" activeTab="ask-ai">
      <ReportContent />
    </AuraShell>
  )
}

function ReportContent() {
  const entitlement = useEntitlement()
  const [reportData, setReportData] = useState<ReportDataResponse | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch("/api/aura/report")
        if (response.ok) {
          setReportData(await response.json())
        }
      } catch (error) {
        logger.error("Failed to fetch report data", error)
      } finally {
        setLoadingData(false)
      }
    }

    if (entitlement?.hasReport) {
      fetchReportData()
    } else {
      setLoadingData(false)
    }
  }, [entitlement?.hasReport])

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch("/api/aura/report/pdf")
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

  if (loadingData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
      </div>
    )
  }

  return (
    <div className="px-4 pb-10 space-y-5">
      <PageHeader
        title="My report"
        subtitle="Access your personalized astrology report"
        badge={<PillBadge tone={entitlement?.hasReport ? "teal" : "amber"}>{entitlement?.hasReport ? "Purchased" : "Preview"}</PillBadge>}
      />

      {entitlement?.hasReport ? (
        <>
          <AuraCard title="Your personalized report" eyebrow="Access" action={<PillBadge tone="blue">Download</PillBadge>}>
            <div className="space-y-3 text-sm text-slate-700">
              <p>Purchased on {entitlement.purchaseDate ? format(new Date(entitlement.purchaseDate), "MMMM d, yyyy") : "recently"}.</p>
              <div className="grid gap-2 sm:grid-cols-3">
                <Link
                  href="/aura/report/viewer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d9488] text-white px-3 py-2 font-semibold hover:opacity-90 transition"
                >
                  <Eye className="w-4 h-4" />
                  View interactive
                </Link>
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <BookOpen className="w-4 h-4" />
                  Order printed
                </Link>
              </div>
            </div>
          </AuraCard>

          {reportData && (
            <>
              <AuraCard title="Your birth data" eyebrow="Profile">
                <div className="space-y-3 text-sm text-slate-700">
                  <InfoRow label="Name" value={[reportData.firstName, reportData.lastName].filter(Boolean).join(" ") || "Not provided"} />
                  {reportData.birthDate && <InfoRow label="Birth date" value={reportData.birthDate} />}
                  {reportData.birthTime && <InfoRow label="Birth time" value={reportData.birthTime} />}
                  {reportData.birthPlace && <InfoRow label="Birth place" value={reportData.birthPlace} />}
                  {reportData.coverColor && (
                    <InfoRow label="Cover color" value={reportData.coverColor.charAt(0).toUpperCase() + reportData.coverColor.slice(1)} />
                  )}
                </div>
              </AuraCard>

              {reportData.chartSummary && (
                <AuraCard title="Chart summary" eyebrow="Highlights">
                  <div className="space-y-2 text-sm text-slate-700">
                    {reportData.chartSummary.sunSign && <InfoRow label="Sun" value={reportData.chartSummary.sunSign} />}
                    {reportData.chartSummary.moonSign && <InfoRow label="Moon" value={reportData.chartSummary.moonSign} />}
                    {reportData.chartSummary.risingSign && <InfoRow label="Rising" value={reportData.chartSummary.risingSign} />}
                  </div>
                </AuraCard>
              )}
            </>
          )}
        </>
      ) : (
        <AuraCard title="Get your personalized report" eyebrow="Upgrade" action={<PillBadge tone="blue">€14.99</PillBadge>}>
          <p className="text-sm text-slate-700 mb-3">
            Purchase the full 195-page personalized report with your natal chart, compatibility, and guidance.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d9488] text-white px-4 py-2 font-semibold hover:opacity-90 transition"
          >
            Buy report
          </Link>
        </AuraCard>
      )}
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-xs text-slate-500 min-w-[90px]">{label}</span>
      <span className="text-sm text-slate-800">{value}</span>
    </div>
  )
}
