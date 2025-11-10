'use client';

import { lazy, Suspense } from 'react';
import { PageData } from '@/types/content';

// Lazy load page renderer for better performance
const PageRenderer = lazy(() => 
  import('@/components/pages/PageRenderer').then(module => ({ 
    default: module.PageRenderer 
  }))
);

interface LazyPageProps {
  pageData: PageData;
}

function PageSkeleton() {
  return (
    <div className="page-container animate-pulse bg-gray-100">
      <div className="page-content">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}

export function LazyPage({ pageData }: LazyPageProps) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <PageRenderer pageData={pageData} />
    </Suspense>
  );
}
