/**
 * Input Validation Utilities
 * Zod schemas for validating API inputs
 */

import { z } from 'zod'

/**
 * Email validation schema
 */
export const emailSchema = z.string().email('Invalid email address')

/**
 * Birth date validation schema
 */
export const birthDateSchema = z.object({
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  hour: z.number().int().min(0).max(23).optional(),
  min: z.number().int().min(0).max(59).optional(),
  lat: z.number().min(-90).max(90).optional(),
  lon: z.number().min(-180).max(180).optional(),
  tzone: z.number().optional(),
})

/**
 * Quiz submission validation schema
 */
export const quizSubmitSchema = z.object({
  email: emailSchema,
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
  birthDate: birthDateSchema,
  birthPlace: z.string().max(200).optional(),
  birthTime: z.string().max(20).optional(),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']).optional(),
  answers: z.record(z.any()), // JSON object
  coverDesign: z.string().max(50).optional(),
  sessionId: z.string().optional(),
  session_id: z.string().optional(), // Legacy support
  userId: z.number().int().positive().optional(),
})

/**
 * User update validation schema
 */
export const userUpdateSchema = z.object({
  name: z.string().max(200).optional(),
  email: emailSchema.optional(),
})

/**
 * Admin login validation schema
 */
export const adminLoginSchema = z.object({
  password: z.string().min(1),
  totpCode: z.string().length(6).optional(),
  step: z.enum(['password', '2fa']).optional(),
})

/**
 * Data export validation schema
 */
export const dataExportSchema = z.object({
  format: z.enum(['json', 'csv']),
})

/**
 * Account deletion validation schema
 */
export const accountDeletionSchema = z.object({
  confirm: z.literal('DELETE'),
  reason: z.string().max(500).optional(),
})

/**
 * Consent validation schema
 */
export const consentSchema = z.object({
  cookies: z.boolean().optional(),
  marketing: z.boolean().optional(),
  analytics: z.boolean().optional(),
})

/**
 * Age verification schema
 */
export const ageVerificationSchema = z.object({
  birthYear: z.number().int().min(1900).max(new Date().getFullYear()),
})

/**
 * Validate and parse request body
 */
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string; details?: z.ZodError } {
  try {
    const validated = schema.parse(data)
    return { success: true, data: validated }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error,
      }
    }
    return {
      success: false,
      error: 'Invalid request data',
    }
  }
}

/**
 * Sanitize string input (prevent XSS)
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

/**
 * Sanitize object recursively
 */
export function sanitizeObject<T>(obj: T): T {
  if (typeof obj === 'string') {
    return sanitizeString(obj) as T
  }
  
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject) as T
  }
  
  if (obj && typeof obj === 'object') {
    const sanitized = {} as T
    for (const [key, value] of Object.entries(obj)) {
      ;(sanitized as any)[key] = sanitizeObject(value)
    }
    return sanitized
  }
  
  return obj
}






