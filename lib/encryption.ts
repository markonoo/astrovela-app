/**
 * Data Encryption Utilities
 * Field-level encryption for sensitive PII
 */

import crypto from 'crypto'
import { logger } from '@/utils/logger'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const SALT_LENGTH = 64
const TAG_LENGTH = 16

/**
 * Get encryption key from environment
 */
function getEncryptionKey(): Buffer {
  const key = process.env.DATA_ENCRYPTION_KEY
  
  if (!key) {
    // In production, this should be set
    // For development, generate a key (not secure!)
    logger.warn('DATA_ENCRYPTION_KEY not set, using development key')
    return crypto.scryptSync('development-key-change-in-production', 'salt', 32)
  }
  
  // Key should be 32 bytes (256 bits) for AES-256
  // If provided as hex string, convert it
  if (key.length === 64) {
    return Buffer.from(key, 'hex')
  }
  
  // Otherwise, derive from string
  return crypto.scryptSync(key, 'salt', 32)
}

/**
 * Encrypt sensitive data
 */
export function encrypt(text: string): string {
  try {
    const key = getEncryptionKey()
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
    
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    
    const tag = cipher.getAuthTag()
    
    // Return: iv:tag:encrypted
    return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted}`
  } catch (error) {
    logger.error('Encryption failed', error)
    throw new Error('Failed to encrypt data')
  }
}

/**
 * Decrypt sensitive data
 */
export function decrypt(encryptedData: string): string {
  try {
    const key = getEncryptionKey()
    const parts = encryptedData.split(':')
    
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted data format')
    }
    
    const [ivHex, tagHex, encrypted] = parts
    const iv = Buffer.from(ivHex, 'hex')
    const tag = Buffer.from(tagHex, 'hex')
    
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
    decipher.setAuthTag(tag)
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  } catch (error) {
    logger.error('Decryption failed', error)
    throw new Error('Failed to decrypt data')
  }
}

/**
 * Encrypt JSON object
 */
export function encryptJSON(obj: any): string {
  return encrypt(JSON.stringify(obj))
}

/**
 * Decrypt JSON object
 */
export function decryptJSON(encryptedData: string): any {
  const decrypted = decrypt(encryptedData)
  return JSON.parse(decrypted)
}

/**
 * Check if data is encrypted (has the expected format)
 */
export function isEncrypted(data: string): boolean {
  // Encrypted data format: iv:tag:encrypted (all hex)
  const parts = data.split(':')
  return parts.length === 3 && 
         parts.every(part => /^[0-9a-f]+$/i.test(part))
}

/**
 * Encrypt birth date data
 */
export function encryptBirthData(birthData: any): string {
  return encryptJSON(birthData)
}

/**
 * Decrypt birth date data
 */
export function decryptBirthData(encryptedData: string): any {
  if (isEncrypted(encryptedData)) {
    return decryptJSON(encryptedData)
  }
  // If not encrypted, return as-is (backward compatibility)
  return typeof encryptedData === 'string' ? JSON.parse(encryptedData) : encryptedData
}







