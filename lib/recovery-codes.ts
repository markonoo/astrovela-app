/**
 * Admin Recovery Codes System
 * Provides backup authentication when 2FA device is unavailable
 * Following Silicon Valley security best practices
 */

import crypto from 'crypto'
import { prisma } from './prisma'

// Each recovery code is 10 characters: XXXX-XXXX-XX format
const RECOVERY_CODE_LENGTH = 10
const RECOVERY_CODE_COUNT = 10 // Generate 10 codes per admin

/**
 * Generate a single recovery code
 * Format: XXXX-XXXX-XX (alphanumeric, easy to read)
 */
function generateRecoveryCode(): string {
  // Use characters that are easy to distinguish (no 0/O, 1/I/l)
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  let code = ''
  
  for (let i = 0; i < RECOVERY_CODE_LENGTH; i++) {
    const randomIndex = crypto.randomInt(0, chars.length)
    code += chars[randomIndex]
    
    // Add hyphens for readability
    if (i === 3 || i === 7) {
      code += '-'
    }
  }
  
  return code
}

/**
 * Hash a recovery code for secure storage
 */
function hashRecoveryCode(code: string): string {
  return crypto
    .createHash('sha256')
    .update(code)
    .digest('hex')
}

/**
 * Generate a set of recovery codes for admin
 * Returns plain codes (show once) and hashed codes (store in DB)
 */
export function generateRecoveryCodes(): { plain: string[]; hashed: string[] } {
  const plain: string[] = []
  const hashed: string[] = []
  
  for (let i = 0; i < RECOVERY_CODE_COUNT; i++) {
    const code = generateRecoveryCode()
    plain.push(code)
    hashed.push(hashRecoveryCode(code))
  }
  
  return { plain, hashed }
}

/**
 * Verify a recovery code
 * Returns true if valid and marks it as used
 */
export async function verifyRecoveryCode(code: string): Promise<boolean> {
  try {
    const hashedCode = hashRecoveryCode(code.toUpperCase().replace(/\s/g, ''))
    
    // Find unused recovery code
    const recoveryCode = await prisma.adminRecoveryCode.findFirst({
      where: {
        code: hashedCode,
        used: false,
      },
    })
    
    if (!recoveryCode) {
      return false
    }
    
    // Mark as used (one-time use only)
    await prisma.adminRecoveryCode.update({
      where: { id: recoveryCode.id },
      data: { 
        used: true,
        usedAt: new Date(),
      },
    })
    
    return true
  } catch (error) {
    console.error('Recovery code verification error:', error)
    return false
  }
}

/**
 * Store recovery codes in database
 */
export async function storeRecoveryCodes(hashedCodes: string[]): Promise<void> {
  try {
    // Delete old unused codes
    await prisma.adminRecoveryCode.deleteMany({
      where: { used: false },
    })
    
    // Store new codes
    await prisma.adminRecoveryCode.createMany({
      data: hashedCodes.map(code => ({
        code,
        used: false,
      })),
    })
  } catch (error) {
    console.error('Error storing recovery codes:', error)
    throw new Error('Failed to store recovery codes')
  }
}

/**
 * Get count of remaining unused recovery codes
 */
export async function getRemainingRecoveryCodesCount(): Promise<number> {
  try {
    return await prisma.adminRecoveryCode.count({
      where: { used: false },
    })
  } catch (error) {
    console.error('Error getting recovery codes count:', error)
    return 0
  }
}

/**
 * Check if admin has recovery codes set up
 */
export async function hasRecoveryCodes(): Promise<boolean> {
  try {
    const count = await getRemainingRecoveryCodesCount()
    return count > 0
  } catch (error) {
    return false
  }
}




