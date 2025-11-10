'use client';

import { useState, useEffect, useMemo } from 'react';
import { PageData } from '@/types/content';
import { ScrollHeader } from '@/components/ui/ScrollHeader';
import { PageRenderer } from '@/components/pages/PageRenderer';
import { loadPagesData, getAvailablePages, canUseReplaceStateSafely } from '@/lib/content';
import NordastroScrollableReport from '@/src/components/NordastroScrollableReport';

export default function ReportPage() {
  // Temporary: render legacy monolithic component until JSON migration completes
  const useJsonContent = process.env.NEXT_PUBLIC_USE_JSON_CONTENT === 'true';

  if (!useJsonContent) {
    return <NordastroScrollableReport />;
  }

  const [pages, setPages] = useState<PageData[]>([]);
  const [currentPage, setCurrentPage] = useState(41);
  const [loading, setLoading] = useState(true);
  
  const deepLinkingEnabled = canUseReplaceStateSafely();
  const availablePages = getAvailablePages();
  const totalPages = availablePages.length;

  // Load all page data
  useEffect(() => {
    async function loadAllPages() {
      setLoading(true);
      try {
        const pageData = await loadPagesData(availablePages);
        setPages(pageData);
      } catch (error) {
        console.error('Failed to load pages:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAllPages();
  }, []);

  // Intersection observer for scroll tracking
  useEffect(() => {
    if (loading || pages.length === 0) return;

    const opts: IntersectionObserverInit = { 
      root: null, 
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0 
    };
    
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting);
      if (!hit) return;
      
      const pageNumber = Number((hit.target as HTMLElement).id.replace('p-', ''));
      setCurrentPage(pageNumber);
      
      if (deepLinkingEnabled) {
        try { 
          window.history.replaceState(null, '', `#p-${pageNumber}`); 
        } catch {}
      }
    }, opts);
    
    document.querySelectorAll('section[id^="p-"]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [deepLinkingEnabled, loading, pages.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const currentIndex = availablePages.indexOf(currentPage);
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        jump(availablePages[currentIndex + 1] || currentPage);
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        jump(availablePages[currentIndex - 1] || currentPage);
      }
    };
    
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentPage, availablePages]);

  const jump = (pageNumber: number) => {
    if (!availablePages.includes(pageNumber)) return;
    
    document.getElementById(`p-${pageNumber}`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading astrology report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 pb-12">
      <ScrollHeader
        total={totalPages}
        current={currentPage}
        deepLinkingEnabled={deepLinkingEnabled}
        onJump={jump}
      />
      
      <div className="scroll-snap-container mx-auto max-w-[220mm] px-2">
        {pages.map((pageData) => (
          <PageRenderer key={pageData.id} pageData={pageData} />
        ))}
      </div>
    </div>
  );
}
