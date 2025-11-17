/**
 * Storage Security Utilities
 * Implements signed URLs for private storage access
 */

import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

/**
 * Create Supabase admin client for signed URL generation
 */
function getSupabaseAdmin() {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

/**
 * Generate a signed URL for a storage file
 * Expires in 1 hour by default
 */
export async function generateSignedURL(
  bucket: string,
  filePath: string,
  expiresIn: number = 3600 // 1 hour in seconds
): Promise<string> {
  try {
    const supabase = getSupabaseAdmin()
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(filePath, expiresIn)

    if (error) {
      throw new Error(`Failed to generate signed URL: ${error.message}`)
    }

    if (!data?.signedUrl) {
      throw new Error('No signed URL returned')
    }

    return data.signedUrl
  } catch (error) {
    throw new Error(`Signed URL generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Extract file path from a Supabase storage URL
 */
export function extractFilePathFromURL(url: string, bucket: string): string | null {
  try {
    // Handle different URL formats
    // https://project.supabase.co/storage/v1/object/public/bucket/path/file.png
    // https://project.supabase.co/storage/v1/object/sign/bucket/path/file.png
    
    const patterns = [
      new RegExp(`/storage/v1/object/public/${bucket}/(.+)$`),
      new RegExp(`/storage/v1/object/sign/${bucket}/(.+)$`),
      new RegExp(`/${bucket}/(.+)$`),
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }

    // If URL doesn't match patterns, try to extract path after bucket name
    const bucketIndex = url.indexOf(`/${bucket}/`)
    if (bucketIndex !== -1) {
      return url.substring(bucketIndex + bucket.length + 1)
    }

    return null
  } catch (error) {
    return null
  }
}

/**
 * Check if a URL is a Supabase storage URL
 */
export function isSupabaseStorageURL(url: string): boolean {
  return url.includes('supabase.co/storage') || url.includes('supabase.storage')
}

/**
 * Convert public storage URL to signed URL
 */
export async function convertToSignedURL(
  publicURL: string,
  bucket: string = 'charts',
  expiresIn: number = 3600
): Promise<string> {
  const filePath = extractFilePathFromURL(publicURL, bucket)
  
  if (!filePath) {
    // If we can't extract path, return original URL
    // This handles cases where URL format is unexpected
    return publicURL
  }

  try {
    return await generateSignedURL(bucket, filePath, expiresIn)
  } catch (error) {
    // If signed URL generation fails, return original URL
    // This ensures the app continues to work
    console.error('Failed to generate signed URL, using public URL:', error)
    return publicURL
  }
}

/**
 * Generate signed URLs for multiple files
 */
export async function generateSignedURLs(
  bucket: string,
  filePaths: string[],
  expiresIn: number = 3600
): Promise<Record<string, string>> {
  const signedURLs: Record<string, string> = {}

  await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        const signedURL = await generateSignedURL(bucket, filePath, expiresIn)
        signedURLs[filePath] = signedURL
      } catch (error) {
        console.error(`Failed to generate signed URL for ${filePath}:`, error)
      }
    })
  )

  return signedURLs
}











