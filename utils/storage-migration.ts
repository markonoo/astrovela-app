/**
 * Storage Migration Utilities
 * Handles moving files from session folders to user folders in Supabase Storage
 */

import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

/**
 * Move files from session folder to user folder in Supabase Storage
 * This ensures users can access their files after session merge
 * 
 * @param sessionId - The session ID folder to migrate from
 * @param userId - The user ID folder to migrate to
 */
export async function migrateStorageFiles(sessionId: string, userId: number) {
  console.log('📁 Starting storage file migration...', { sessionId, userId })
  
  try {
    const results = {
      filesFound: 0,
      filesMoved: 0,
      errors: [] as string[]
    }

    // 1. List all files in the session folder
    const { data: sessionFiles, error: listError } = await supabase.storage
      .from('charts')
      .list(sessionId)

    if (listError) {
      results.errors.push(`Failed to list session files: ${listError.message}`)
      return results
    }

    if (!sessionFiles || sessionFiles.length === 0) {
      console.log('📁 No files found in session folder:', sessionId)
      return results
    }

    results.filesFound = sessionFiles.length
    console.log(`📁 Found ${results.filesFound} files in session folder`)

    // 2. Move each file from session folder to user folder
    for (const file of sessionFiles) {
      try {
        const oldPath = `${sessionId}/${file.name}`
        const newPath = `${userId}/${file.name}`

        console.log(`📁 Moving file: ${oldPath} → ${newPath}`)

        // Download the file
        const { data: fileData, error: downloadError } = await supabase.storage
          .from('charts')
          .download(oldPath)

        if (downloadError) {
          results.errors.push(`Failed to download ${oldPath}: ${downloadError.message}`)
          continue
        }

        // Upload to new location
        const { error: uploadError } = await supabase.storage
          .from('charts')
          .upload(newPath, fileData, { 
            contentType: file.metadata?.mimetype || 'image/svg+xml',
            upsert: true 
          })

        if (uploadError) {
          results.errors.push(`Failed to upload ${newPath}: ${uploadError.message}`)
          continue
        }

        // Delete old file
        const { error: deleteError } = await supabase.storage
          .from('charts')
          .remove([oldPath])

        if (deleteError) {
          results.errors.push(`Failed to delete old file ${oldPath}: ${deleteError.message}`)
          // Don't continue - file was moved successfully even if old one wasn't deleted
        }

        results.filesMoved++
        console.log(`✅ Successfully moved file: ${oldPath} → ${newPath}`)

      } catch (error) {
        results.errors.push(`Exception moving ${file.name}: ${error}`)
      }
    }

    console.log(`📁 Storage migration complete: ${results.filesMoved}/${results.filesFound} files moved`)
    return results

  } catch (error) {
    console.error('❌ Fatal error during storage migration:', error)
    return {
      filesFound: 0,
      filesMoved: 0,
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
}

/**
 * Update ChartImage imageUrl records to point to new user folder paths
 * 
 * @param sessionId - The session ID to update records for
 * @param userId - The user ID to use in new paths
 */
export async function updateChartImageUrls(sessionId: string, userId: number) {
  console.log('🔗 Updating ChartImage URLs to point to user folder...', { sessionId, userId })
  
  try {
    // Get all ChartImage records for this session
    const { data: chartImages, error: fetchError } = await supabase
      .from('ChartImage')
      .select('id, imageUrl')
      .eq('session_id', sessionId)

    if (fetchError) {
      throw new Error(`Failed to fetch ChartImage records: ${fetchError.message}`)
    }

    if (!chartImages || chartImages.length === 0) {
      console.log('🔗 No ChartImage records found for session')
      return { updated: 0, errors: [] }
    }

    const results = {
      updated: 0,
      errors: [] as string[]
    }

    // Update each record's imageUrl to point to the new user folder
    for (const chartImage of chartImages) {
      try {
        // Replace session folder with user folder in the URL
        const newUrl = chartImage.imageUrl.replace(`/${sessionId}/`, `/${userId}/`)

        // Update the record
        const { error: updateError } = await supabase
          .from('ChartImage')
          .update({ imageUrl: newUrl })
          .eq('id', chartImage.id)

        if (updateError) {
          results.errors.push(`Failed to update ChartImage ${chartImage.id}: ${updateError.message}`)
          continue
        }

        results.updated++
        console.log(`✅ Updated ChartImage URL: ${chartImage.id}`)
        console.log(`   Old: ${chartImage.imageUrl}`)
        console.log(`   New: ${newUrl}`)

      } catch (error) {
        results.errors.push(`Exception updating ChartImage ${chartImage.id}: ${error}`)
      }
    }

    console.log(`🔗 ChartImage URL update complete: ${results.updated}/${chartImages.length} records updated`)
    return results

  } catch (error) {
    console.error('❌ Error updating ChartImage URLs:', error)
    return {
      updated: 0,
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
}

/**
 * Get storage information for a session
 * Useful for debugging storage issues
 * 
 * @param sessionId - The session ID to analyze
 */
export async function analyzeSessionStorage(sessionId: string) {
  console.log('🔍 Analyzing storage for session:', sessionId)
  
  try {
    // List files in session folder
    const { data: sessionFiles, error: listError } = await supabase.storage
      .from('charts')
      .list(sessionId)

    // Get ChartImage records that reference this session
    const { data: chartImages, error: dbError } = await supabase
      .from('ChartImage')
      .select('id, imageUrl, session_id, userId')
      .eq('session_id', sessionId)

    const result = {
      sessionId,
      storageFiles: sessionFiles || [],
      databaseRecords: chartImages || [],
      analysis: {
        filesInStorage: sessionFiles?.length || 0,
        recordsInDatabase: chartImages?.length || 0,
        urlsPointingToSession: chartImages?.filter(img => 
          img.imageUrl.includes(`/${sessionId}/`)
        ).length || 0
      },
      errors: [
        ...(listError ? [`Storage error: ${listError.message}`] : []),
        ...(dbError ? [`Database error: ${dbError.message}`] : [])
      ]
    }

    console.log('📊 Storage analysis result:', result.analysis)
    return result

  } catch (error) {
    console.error('❌ Error analyzing session storage:', error)
    return {
      sessionId,
      storageFiles: [],
      databaseRecords: [],
      analysis: { filesInStorage: 0, recordsInDatabase: 0, urlsPointingToSession: 0 },
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
} 