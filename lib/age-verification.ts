/**
 * Age Verification Utilities
 * COPPA and GDPR compliance for age restrictions
 */

/**
 * Calculate age from birth year
 */
export function calculateAge(birthYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}

/**
 * Check if user meets age requirement
 */
export function meetsAgeRequirement(birthYear: number): {
  allowed: boolean
  age: number
  reason?: string
} {
  const age = calculateAge(birthYear)
  
  if (age < 13) {
    return {
      allowed: false,
      age,
      reason: 'Users must be at least 13 years old',
    }
  }
  
  if (age < 16) {
    return {
      allowed: false,
      age,
      reason: 'Users aged 13-15 require parental consent. Please contact support.',
    }
  }
  
  return {
    allowed: true,
    age,
  }
}

/**
 * Verify age from birth date object
 */
export function verifyAgeFromBirthDate(birthDate: {
  year: number
  month?: number
  day?: number
}): {
  allowed: boolean
  age: number
  reason?: string
} {
  return meetsAgeRequirement(birthDate.year)
}

/**
 * Check if age verification is required
 */
export function isAgeVerificationRequired(): boolean {
  // Can be controlled via environment variable
  return process.env.REQUIRE_AGE_VERIFICATION !== 'false'
}







