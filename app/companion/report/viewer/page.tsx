"use client"

import { useEffect, useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { Paywall } from "@/components/companion/paywall"
import { CompanionShell } from "@/components/companion/CompanionShell"
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
      <CompanionShell title="Your Report" activeTab="horoscope">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/20 border-t-white mx-auto"></div>
            <p className="mt-4 text-[17px] leading-[24px] text-white/60">Loading your astrology report...</p>
          </div>
        </div>
      </CompanionShell>
    )
  }

  if (!user || !entitlement) {
    return <Paywall />
  }

  return (
    <CompanionShell title="Your Report" activeTab="horoscope">
      <div className="px-4 mt-6 flex flex-col items-center gap-6 mb-24">
        <ScrollHeader
          total={totalPages}
          current={currentPage}
          deepLinkingEnabled={deepLinkingEnabled}
          onJump={jump}
        />
        
        <div className="scroll-snap-container w-full max-w-full md:max-w-[220mm]">
          {pages.map((pageData) => (
            <div
              key={pageData.id}
              className="w-full max-w-[210mm] rounded-[26px] bg-white/6 backdrop-blur-2xl shadow-[0_26px_70px_rgba(0,0,0,0.85)] overflow-hidden mb-6"
            >
              <PageRenderer pageData={pageData} />
            </div>
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
            margin: 0 auto;
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
    </CompanionShell>
  )
}

