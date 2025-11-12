'use client';

import { useState, useEffect, useMemo } from 'react';
import { PageData } from '@/types/document-maker';

interface UseVirtualScrollProps {
  pages: PageData[];
  itemHeight: number; // Height of each page in pixels
  containerHeight: number; // Height of visible container
  overscan?: number; // Number of items to render outside visible area
}

export function useVirtualScroll({
  pages,
  itemHeight,
  containerHeight,
  overscan = 2
}: UseVirtualScrollProps) {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      pages.length - 1
    );

    const start = Math.max(0, startIndex - overscan);
    const end = Math.min(pages.length - 1, endIndex + overscan);

    return {
      start,
      end,
      items: pages.slice(start, end + 1).map((page, index) => ({
        ...page,
        index: start + index
      }))
    };
  }, [scrollTop, itemHeight, containerHeight, pages, overscan]);

  const totalHeight = pages.length * itemHeight;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return {
    visibleItems,
    totalHeight,
    handleScroll,
    offsetY: visibleItems.start * itemHeight
  };
}

// Hook for intersection observer-based lazy loading
export function useIntersectionObserver(
  callback: (pageNumber: number) => void,
  options: IntersectionObserverInit = {}
) {
  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible) {
        const pageNumber = Number(
          (visible.target as HTMLElement).id.replace('p-', '')
        );
        callback(pageNumber);
      }
    }, defaultOptions);

    // Observe all page elements
    const pageElements = document.querySelectorAll('section[id^="p-"]');
    pageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [callback, options]);
}




