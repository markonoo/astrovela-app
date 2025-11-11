/**
 * Common type definitions for consistent variable naming across the codebase
 * 
 * STANDARD: Use camelCase for all JavaScript/TypeScript code
 * Database fields use snake_case (handled by Prisma)
 */

// ============================================
// Birth Date Structure
// ============================================

/**
 * Standard birth date structure used throughout the application
 * Always use this format for consistency
 */
export interface BirthDate {
  month: string | number
  day: string | number
  year: string | number
}

/**
 * Standard birth data structure for API requests
 */
export interface BirthData {
  birthDate: BirthDate
  birthTime: string
  birthPlace: string
  latitude?: number
  longitude?: number
  timezone?: number
}

// ============================================
// Cover Color
// ============================================

/**
 * Cover color scheme options
 */
export type CoverColorScheme = "black" | "navy" | "purple" | "green" | "burgundy" | "cream"

/**
 * Cover color transformation chain:
 * - Quiz Context: coverColorScheme (camelCase)
 * - Database: coverDesign (camelCase)
 * - API Response: coverColor (camelCase)
 */
export interface CoverColorMapping {
  coverColorScheme: CoverColorScheme // Quiz context
  coverDesign: CoverColorScheme | null // Database field
  coverColor: CoverColorScheme | null // API response
}

// ============================================
// User Name
// ============================================

/**
 * Standard user name structure
 */
export interface UserName {
  firstName: string | null
  lastName: string | null
  fullName?: string | null // Computed: firstName + lastName
}

// ============================================
// Chart Signs
// ============================================

/**
 * Standard chart signs structure
 * Database uses snake_case (sun_sign, moon_sign)
 * API responses use camelCase (sunSign, moonSign)
 */
export interface ChartSigns {
  sunSign: string | null // From database: sun_sign
  moonSign: string | null // From database: moon_sign
  risingSign: string | null // From database: rising_sign (if available)
}

// ============================================
// Session ID
// ============================================

/**
 * Session ID - always use camelCase in JavaScript/TypeScript
 * Database field is session_id (snake_case) - Prisma handles conversion
 */
export type SessionId = string

// ============================================
// Chart URL
// ============================================

/**
 * Chart URL - always use camelCase in JavaScript/TypeScript
 * Legacy support: chart_url (snake_case) for backward compatibility
 */
export type ChartUrl = string


