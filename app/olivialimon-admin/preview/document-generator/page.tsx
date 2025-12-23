"use client"

import { useState } from "react"
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute"
import { ReportDataProvider } from "@/components/astrology/report-data"
import ReportViewport from "@/components/astrology/report-viewport"
import ReportPage from "@/components/astrology/report-page"
import { ArrowLeft, Download, Eye, TestTube } from "lucide-react"
import Link from "next/link"

// Import first few pages for preview
import { CoverPage } from "@/components/astrology/cover-page"
import { PersonalizedCover } from "@/components/astrology/personalized-cover"
import { EnglishTableOfContents } from "@/components/astrology/english-table-of-contents"
import { AstrologyIntroductionPage5 } from "@/components/astrology/astrology-introduction-page-5"
import { SunSignPageReplica } from "@/components/astrology/sun-sign-page-replica"
import { DynamicZodiacContentPage } from "@/components/astrology/dynamic-zodiac-content-page"

// Test data presets
const TEST_PROFILES = {
  aries: {
    firstName: "Sarah",
    lastName: "Johnson",
    birthDate: "March 25, 1990",
    birthTime: "08:30 AM",
    birthPlace: "New York, USA",
    coverColor: "purple",
    sunSign: "Aries",
    moonSign: "Cancer",
    risingSign: "Gemini",
  },
  capricorn: {
    firstName: "Michael",
    lastName: "Chen",
    birthDate: "January 5, 1988",
    birthTime: "2:15 PM",
    birthPlace: "Los Angeles, USA",
    coverColor: "blue",
    sunSign: "Capricorn",
    moonSign: "Scorpio",
    risingSign: "Virgo",
  },
  leo: {
    firstName: "Emma",
    lastName: "Williams",
    birthDate: "August 12, 1995",
    birthTime: "11:45 AM",
    birthPlace: "London, UK",
    coverColor: "gold",
    sunSign: "Leo",
    moonSign: "Pisces",
    risingSign: "Sagittarius",
  },
}

function AdminDocumentGeneratorContent() {
  const [selectedProfile, setSelectedProfile] = useState<keyof typeof TEST_PROFILES>("aries")
  const [showFullReport, setShowFullReport] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050719] via-[#090b25] to-[#0b0e2e] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#050719]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/olivialimon-admin/preview">
                <button className="p-2 rounded-xl bg-white/8 hover:bg-white/12 transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div>
                <h1 className="text-[24px] leading-[32px] font-bold">Document Generator Preview</h1>
                <p className="text-[13px] leading-[18px] text-white/60">
                  195-page astrology report system
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/aura/report/viewer" target="_blank">
                <button className="px-4 py-2 rounded-xl bg-white/8 hover:bg-white/12 transition-all flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Full Viewer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Test Profile Selector */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <TestTube className="w-6 h-6 text-purple-400" />
            <h2 className="text-[20px] leading-[28px] font-semibold">Test Profile</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            {Object.entries(TEST_PROFILES).map(([key, profile]) => (
              <button
                key={key}
                onClick={() => setSelectedProfile(key as keyof typeof TEST_PROFILES)}
                className={`p-4 rounded-xl transition-all ${
                  selectedProfile === key
                    ? "bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] shadow-[0_0_16px_rgba(122,91,255,0.5)]"
                    : "bg-white/8 hover:bg-white/12"
                }`}
              >
                <div className="text-[18px] leading-[24px] font-semibold mb-2 capitalize">
                  {profile.sunSign}
                </div>
                <div className="text-[13px] leading-[18px] text-white/60">
                  {profile.firstName} {profile.lastName}
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-white/8 p-4">
            <div className="grid grid-cols-2 gap-3 text-[15px] leading-[20px]">
              <div>
                <span className="text-white/60">Name:</span>{" "}
                <span className="font-medium">
                  {TEST_PROFILES[selectedProfile].firstName}{" "}
                  {TEST_PROFILES[selectedProfile].lastName}
                </span>
              </div>
              <div>
                <span className="text-white/60">Sun:</span>{" "}
                <span className="font-medium">{TEST_PROFILES[selectedProfile].sunSign}</span>
              </div>
              <div>
                <span className="text-white/60">Birth Date:</span>{" "}
                <span className="font-medium">{TEST_PROFILES[selectedProfile].birthDate}</span>
              </div>
              <div>
                <span className="text-white/60">Moon:</span>{" "}
                <span className="font-medium">{TEST_PROFILES[selectedProfile].moonSign}</span>
              </div>
              <div>
                <span className="text-white/60">Birth Time:</span>{" "}
                <span className="font-medium">{TEST_PROFILES[selectedProfile].birthTime}</span>
              </div>
              <div>
                <span className="text-white/60">Rising:</span>{" "}
                <span className="font-medium">{TEST_PROFILES[selectedProfile].risingSign}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document Preview */}
        <div className="rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[20px] leading-[28px] font-semibold">Document Preview</h2>
              <p className="text-[13px] leading-[18px] text-white/60">
                {showFullReport ? "Showing all 195 pages" : "Showing first 6 pages"}
              </p>
            </div>
            <button
              onClick={() => setShowFullReport(!showFullReport)}
              className="px-4 py-2 rounded-xl bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] hover:shadow-[0_0_20px_rgba(122,91,255,0.7)] transition-all"
            >
              {showFullReport ? "Show Preview Only" : "Show Full Report (195 pages)"}
            </button>
          </div>

          {/* Admin Mode - Load with test data via URL parameters */}
          <div className="bg-[#050719] rounded-xl overflow-hidden">
            <ReportDataProvider adminMode={true}>
              <ReportViewport>
                {/* First 6 pages for preview */}
                <ReportPage id="cover-preview" pageNumber={1}>
                  <CoverPage />
                </ReportPage>

                <ReportPage id="personalized-cover-preview" pageNumber={3}>
                  <PersonalizedCover pageNumber={3} />
                </ReportPage>

                <ReportPage id="table-of-contents-preview" pageNumber={4}>
                  <EnglishTableOfContents />
                </ReportPage>

                <ReportPage id="intro-preview" pageNumber={5}>
                  <AstrologyIntroductionPage5 pageNumber={5} />
                </ReportPage>

                <ReportPage id="sun-sign-preview" pageNumber={10}>
                  <SunSignPageReplica pageNumber={10} />
                </ReportPage>

                <ReportPage id="zodiac-content-preview" pageNumber={11}>
                  <DynamicZodiacContentPage pageNumber={11} planet="sun" />
                </ReportPage>
              </ReportViewport>
            </ReportDataProvider>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] p-4 border border-white/10">
          <p className="text-[13px] leading-[18px] text-white/80">
            <strong className="text-white">Admin Testing Mode:</strong> This page uses sample test
            data to preview the document. The full report viewer at{" "}
            <code className="bg-white/10 px-2 py-1 rounded">/aura/report/viewer</code> loads real
            user data from Supabase. Use the test profiles above to preview different zodiac sign
            combinations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AdminDocumentGeneratorPage() {
  return (
    <AdminProtectedRoute>
      <AdminDocumentGeneratorContent />
    </AdminProtectedRoute>
  )
}
