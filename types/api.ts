/**
 * Centralized API response type definitions
 * Used across all API routes and client-side code
 */

import { PlanType } from '@/lib/entitlements'

// ============================================
// Entitlement API Types
// ============================================

export interface EntitlementResponse {
  hasAccess: boolean
  plan: PlanType
  daysLeft: number
  freeUntil?: string
  hasReport?: boolean
  purchaseDate?: string | null
  shopifyOrderId?: string | null
  error?: string
}

// Alias retained for components that still import EntitlementData
export type EntitlementData = EntitlementResponse

// ============================================
// Report API Types
// ============================================

export interface ReportDataResponse {
  birthDate: string | null
  birthTime: string | null
  birthPlace: string | null
  coverColor: string | null
  firstName: string | null
  lastName: string | null
  gender: string | null
  chartSummary: ChartSummary
}

export interface ChartSummary {
  sunSign: string | null
  moonSign: string | null
  risingSign: string | null
}

// ============================================
// Today API Types
// ============================================

export interface TodayDataResponse {
  energy: {
    title: string
    description: string
    mood: string
  }
  love: {
    title: string
    description: string
    bestTime: string
  }
  career: {
    title: string
    description: string
    actionAdvice: string
  }
  transits: {
    moonSign: string
    keyAspect: string
  }
}

// ============================================
// Weekly/Monthly API Types
// ============================================

export interface WeeklyDataResponse {
  emotions: string
  relationships: string
  moneyCareer: string
  spiritualTheme: string
}

export interface MonthlyDataResponse {
  overview: string
  keyDates: string[]
  focusAreas: string[]
}

// ============================================
// Career API Types
// ============================================

export interface CareerDataResponse {
  today: {
    energy: string
    advice: string
  }
  timing: {
    bestDays: string[]
    visibilityDays: string[]
  }
  insights: string[]
}

// ============================================
// User Sign API Types
// ============================================

export interface UserSignResponse {
  sunSign: string | null
  moonSign: string | null
  risingSign: string | null
}

// ============================================
// Billing API Types
// ============================================

export interface BillingPortalResponse {
  url: string
  message?: string
}

// ============================================
// Error Response Types
// ============================================

export interface ErrorResponse {
  error: string
  message?: string
  details?: Record<string, any>
}

// ============================================
// Generic API Response Wrapper
// ============================================

export type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string; details?: Record<string, any> }
