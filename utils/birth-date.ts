/**
 * Birth Date Utilities
 * Standardized functions for handling birth date structures across the codebase
 */

import { BirthDate } from '@/types/common'

/**
 * Safely extract birth date components from various formats
 */
export function extractBirthDateComponents(birthDate: any): { year: number; month: number; day: number } | null {
  if (!birthDate) return null

  // Handle Prisma JSON field (object format)
  if (typeof birthDate === 'object' && birthDate.year && birthDate.month && birthDate.day) {
    return {
      year: Number(birthDate.year),
      month: Number(birthDate.month),
      day: Number(birthDate.day),
    }
  }

  // Handle string format (YYYY-MM-DD)
  if (typeof birthDate === 'string') {
    const parts = birthDate.split('-')
    if (parts.length === 3) {
      return {
        year: Number(parts[0]),
        month: Number(parts[1]),
        day: Number(parts[2]),
      }
    }
  }

  return null
}

/**
 * Format birth date object to YYYY-MM-DD string
 */
export function formatBirthDateString(birthDate: BirthDate | any): string | null {
  const components = extractBirthDateComponents(birthDate)
  if (!components) return null

  return `${components.year}-${String(components.month).padStart(2, '0')}-${String(components.day).padStart(2, '0')}`
}

/**
 * Format birth date for display (e.g., "January 15, 1990")
 */
export function formatBirthDateDisplay(birthDate: BirthDate | any): string | null {
  const components = extractBirthDateComponents(birthDate)
  if (!components) return null

  try {
    const date = new Date(components.year, components.month - 1, components.day)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return null
  }
}

/**
 * Validate birth date structure
 */
export function isValidBirthDate(birthDate: any): boolean {
  const components = extractBirthDateComponents(birthDate)
  if (!components) return false

  // Basic validation
  if (components.year < 1900 || components.year > 2100) return false
  if (components.month < 1 || components.month > 12) return false
  if (components.day < 1 || components.day > 31) return false

  // Check if date is valid
  try {
    const date = new Date(components.year, components.month - 1, components.day)
    return (
      date.getFullYear() === components.year &&
      date.getMonth() === components.month - 1 &&
      date.getDate() === components.day
    )
  } catch {
    return false
  }
}



