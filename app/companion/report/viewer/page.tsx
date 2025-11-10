"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { PageData } from "@/types/document-maker"
import { ScrollHeader } from "@/components/document-maker/ui/ScrollHeader"
import { PageRenderer } from "@/components/document-maker/pages/PageRenderer"
import { loadPagesData, getAvailablePages, canUseReplaceStateSafely } from "@/lib/document-maker/content"
import { personalizePages } from "@/lib/document-maker/personalize"
import { EntitlementData, ReportDataResponse } from "@/types/api"
import { logger } from "@/utils/logger"

export default function ReportViewerPage() {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [reportData, setReportData] = useState<ReportDataResponse | null>(null)
  const [pages, setPages] = useState<PageData[]>([])
  const [currentPage, setCurrentPage] = useState(41)
  const [loadingData, setLoadingData] = useState(true)
  
  const deepLinkingEnabled = canUseReplaceStateSafely()
  const availablePages = getAvailablePages()
  const totalPages = availablePages.length

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
        const data = await response.json()
        setReportData(data)
        loadReportPages(data)
      }
    } catch (error) {
      logger.error("Failed to fetch report data", error)
      setLoadingData(false)
    }
  }

  const loadReportPages = async (userData: ReportDataResponse) => {
    try {
      const pageData = await loadPagesData(availablePages)
      
      // Personalize pages with user data
      const personalizedPages = personalizePages(pageData, {
        name: userData.firstName || user?.user_metadata?.name,
        firstName: userData.firstName || undefined,
        lastName: userData.lastName || undefined,
        birthDate: userData.birthDate || undefined,
        birthTime: userData.birthTime || undefined,
        birthPlace: userData.birthPlace || undefined,
        coverColor: userData.coverColor || undefined,
        gender: userData.gender || undefined,
        sunSign: userData.chartSummary?.sunSign || undefined,
        moonSign: userData.chartSummary?.moonSign || undefined,
        risingSign: userData.chartSummary?.risingSign || undefined,
      })
      
      setPages(personalizedPages)
    } catch (error) {
      logger.error("Failed to load report pages", error)
    } finally {
      setLoadingData(false)
    }
  }

  // Intersection observer for scroll tracking
  useEffect(() => {
    if (loadingData || pages.length === 0) return

    const opts: IntersectionObserverInit = { 
      root: null, 
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0 
    }
    
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting)
      if (!hit) return
      
      const pageNumber = Number((hit.target as HTMLElement).id.replace('p-', ''))
      setCurrentPage(pageNumber)
      
      if (deepLinkingEnabled) {
        try { 
          window.history.replaceState(null, '', `#p-${pageNumber}`) 
        } catch {}
      }
    }, opts)
    
    document.querySelectorAll('section[id^="p-"]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [deepLinkingEnabled, loadingData, pages.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const currentIndex = availablePages.indexOf(currentPage)
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        jump(availablePages[currentIndex + 1] || currentPage)
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        jump(availablePages[currentIndex - 1] || currentPage)
      }
    }
    
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentPage, availablePages])

  const jump = (pageNumber: number) => {
    if (!availablePages.includes(pageNumber)) return
    
    document.getElementById(`p-${pageNumber}`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-apple-gray-5 to-apple-gray-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-apple-gray-4 border-t-apple-gray-1 mx-auto"></div>
          <p className="mt-4 text-[17px] leading-[24px] text-apple-gray-2">Loading your astrology report...</p>
        </div>
      </div>
    )
  }

  if (!user || !entitlement?.hasAccess) {
    return <Paywall />
  }

  return (
    <div className="min-h-screen bg-neutral-100 pb-12 md:pb-4">
      <ScrollHeader
        total={totalPages}
        current={currentPage}
        deepLinkingEnabled={deepLinkingEnabled}
        onJump={jump}
      />
      
      <div className="scroll-snap-container mx-auto max-w-full md:max-w-[220mm] px-2 md:px-4">
        {pages.map((pageData) => (
          <PageRenderer key={pageData.id} pageData={pageData} />
        ))}
      </div>
      
      <style jsx>{`
        .scroll-snap-container {
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
        }
        section[id^="p-"] {
          scroll-snap-align: start;
        }
        .page-container {
          width: 100%;
          max-width: 210mm;
          height: auto;
          min-height: 297mm;
          aspect-ratio: 210 / 297;
          margin: 12px auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background: white;
          position: relative;
        }
        @media (max-width: 768px) {
          .page-container {
            width: calc(100% - 16px);
            margin: 8px auto;
            min-height: auto;
            aspect-ratio: 210 / 297;
          }
        }
        .page-content {
          position: absolute;
          inset: 16mm;
          padding: 12px;
        }
        @media (max-width: 768px) {
          .page-content {
            inset: 8px;
            padding: 8px;
            font-size: 12px;
          }
        }
        .page-number {
          position: absolute;
          bottom: 10mm;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 9pt;
          letter-spacing: 0.08em;
          color: #666;
        }
        @media (max-width: 768px) {
          .page-number {
            bottom: 8px;
            font-size: 8pt;
          }
        }
      `}</style>
    </div>
  )
}

