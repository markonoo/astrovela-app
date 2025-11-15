"use client"

import { useState, useEffect } from "react"
import { PageData } from "@/types/document-maker"
import { ScrollHeader } from "@/components/document-maker/ui/ScrollHeader"
import { PageRenderer } from "@/components/document-maker/pages/PageRenderer"
import { loadPagesData, getAvailablePages, canUseReplaceStateSafely } from "@/lib/document-maker/content"
import { personalizePages } from "@/lib/document-maker/personalize"
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

function DocumentGeneratorPreviewContent() {
  const [pages, setPages] = useState<PageData[]>([])
  const [currentPage, setCurrentPage] = useState(41)
  const [loading, setLoading] = useState(true)
  
  const deepLinkingEnabled = canUseReplaceStateSafely()
  const availablePages = getAvailablePages()
  const totalPages = availablePages.length

  // Sample user data for preview
  const previewUserData = {
    name: "Alex Johnson",
    firstName: "Alex",
    lastName: "Johnson",
    birthDate: "March 15, 1990",
    birthTime: "14:30",
    birthPlace: "New York, NY",
    coverColor: "blue",
    gender: "non-binary",
    sunSign: "Pisces",
    moonSign: "Scorpio",
    risingSign: "Leo"
  }

  useEffect(() => {
    async function loadAllPages() {
      setLoading(true)
      try {
        const pageData = await loadPagesData(availablePages)
        const personalizedPages = personalizePages(pageData, previewUserData)
        setPages(personalizedPages)
      } catch (error) {
        console.error('Failed to load pages:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAllPages()
  }, [])

  // Intersection observer for scroll tracking
  useEffect(() => {
    if (loading || pages.length === 0) return

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
  }, [deepLinkingEnabled, loading, pages.length])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading document generator preview...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-100 pb-12 md:pb-4">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white border-b px-4 py-2">
        <Link href="/olivialimon-admin/preview">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin Dashboard
          </Button>
        </Link>
      </div>

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
        }
      `}</style>
    </div>
  )
}

export default function DocumentGeneratorPreviewPage() {
  return (
    <AdminProtectedRoute>
      <DocumentGeneratorPreviewContent />
    </AdminProtectedRoute>
  )
}

