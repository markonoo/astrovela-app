import { PageData } from '@/types/content';

// Content loader utility
export async function loadPageData(pageNumber: number): Promise<PageData | null> {
  try {
    const response = await import(`@/data/pages/page-${pageNumber}.json`);
    return response.default as PageData;
  } catch (error) {
    console.warn(`Failed to load page ${pageNumber}:`, error);
    return null;
  }
}

// Load multiple pages
export async function loadPagesData(pageNumbers: number[]): Promise<PageData[]> {
  const promises = pageNumbers.map(loadPageData);
  const results = await Promise.all(promises);
  return results.filter((page): page is PageData => page !== null);
}

// Get all available page numbers (you can expand this as you add more pages)
export function getAvailablePages(): number[] {
  return [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73];
}

// Navigation utilities
export function canUseReplaceStateSafely(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const ok = typeof window.history?.replaceState === "function";
    const href = window.location?.href || "";
    return ok && !href.startsWith("about:");
  } catch {
    return false;
  }
}

// Page type utilities
export function getPageTypeColor(type: string): string {
  switch (type) {
    case 'zodiac-overview':
    case 'zodiac-sign':
    case 'zodiac-inner':
      return '#000';
    case 'planet-overview':
    case 'planet-detail':
      return '#fff';
    case 'illustration':
      return '#fff';
    default:
      return '#efe6d7';
  }
}

