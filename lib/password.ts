/**
 * Password Security Utilities
 * Password hashing, verification, and strength validation
 */

import bcrypt from 'bcrypt'

const SALT_ROUNDS = 12

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS)
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash)
  } catch (error) {
    return false
  }
}

/**
 * Validate password strength
 */
export function validatePasswordStrength(password: string): {
  valid: boolean
  errors: string[]
  strength: 'weak' | 'medium' | 'strong'
} {
  const errors: string[] = []
  let strengthScore = 0
  
  // Length check
  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long')
  } else if (password.length >= 16) {
    strengthScore += 2
  } else {
    strengthScore += 1
  }
  
  // Lowercase check
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  } else {
    strengthScore += 1
  }
  
  // Uppercase check
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  } else {
    strengthScore += 1
  }
  
  // Number check
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  } else {
    strengthScore += 1
  }
  
  // Special character check
  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character')
  } else {
    strengthScore += 1
  }
  
  // Determine strength
  let strength: 'weak' | 'medium' | 'strong' = 'weak'
  if (strengthScore >= 5) {
    strength = 'strong'
  } else if (strengthScore >= 3) {
    strength = 'medium'
  }
  
  return {
    valid: errors.length === 0,
    errors,
    strength
  }
}

/**
 * Check if password meets minimum requirements
 */
export function meetsPasswordRequirements(password: string): boolean {
  return validatePasswordStrength(password).valid
}



