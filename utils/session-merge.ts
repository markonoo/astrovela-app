/**
 * Session Merge Utilities
 * Functions to merge anonymous session data with registered user accounts
 */

import { createClient } from '@supabase/supabase-js'
import { env } from '@/utils/environment'
import { migrateStorageFiles, updateChartImageUrls } from '@/utils/storage-migration'

// Lazy initialization of Supabase client to avoid build-time errors
let supabase: ReturnType<typeof createClient> | null = null;

function getSupabaseClient() {
  if (!supabase) {
    // During build time, env vars might not be available
    // Use placeholder values that Supabase will accept
    const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
}

/**
 * Merge session data with a user account
 * This function updates all records with the given session_id to be linked to the userId
 * 
 * @param sessionId - The session ID to merge
 * @param userId - The user ID to link the session data to
 * @param email - The user's email for verification
 */
export async function mergeSessionWithUser(sessionId: string, userId: number, email: string) {
  console.log('🔄 Starting session merge process...', { sessionId, userId, email })
  
  try {
    const results = {
      quizResponses: 0,
      chartImages: 0,
      interpretations: 0,
      errors: [] as string[]
    }

    // 1. Update QuizResponse records
    try {
      const { data: quizData, error: quizError } = await getSupabaseClient()
        .from('QuizResponse')
        .update({ 
          userId: userId,
          session_id: null // Clear session_id once linked to user
        })
        .eq('session_id', sessionId)
        .is('userId', null)
        .select('id')

      if (quizError) {
        results.errors.push(`QuizResponse merge error: ${quizError.message}`)
      } else {
        results.quizResponses = quizData?.length || 0
        console.log(`✅ Merged ${results.quizResponses} QuizResponse records`)
      }
    } catch (error) {
      results.errors.push(`QuizResponse merge exception: ${error}`)
    }

    // 2. Update ChartImage records
    try {
      const { data: chartData, error: chartError } = await getSupabaseClient()
        .from('ChartImage')
        .update({ 
          userId: userId,
          email: email,
          session_id: null // Clear session_id once linked to user
        })
        .eq('session_id', sessionId)
        .is('userId', null)
        .select('id')

      if (chartError) {
        results.errors.push(`ChartImage merge error: ${chartError.message}`)
      } else {
        results.chartImages = chartData?.length || 0
        console.log(`✅ Merged ${results.chartImages} ChartImage records`)
      }
    } catch (error) {
      results.errors.push(`ChartImage merge exception: ${error}`)
    }

    // 3. Update NatalChartInterpretation records
    try {
      const { data: interpData, error: interpError } = await getSupabaseClient()
        .from('NatalChartInterpretation')
        .update({ 
          userId: userId,
          session_id: null // Clear session_id once linked to user
        })
        .eq('session_id', sessionId)
        .is('userId', null)
        .select('id')

      if (interpError) {
        results.errors.push(`NatalChartInterpretation merge error: ${interpError.message}`)
      } else {
        results.interpretations = interpData?.length || 0
        console.log(`✅ Merged ${results.interpretations} NatalChartInterpretation records`)
      }
    } catch (error) {
      results.errors.push(`NatalChartInterpretation merge exception: ${error}`)
    }

    // 4. Migrate storage files from session folder to user folder
    console.log('🔄 Step 4: Migrating storage files...')
    let storageResults = { filesFound: 0, filesMoved: 0, errors: [] as string[] }
    let urlUpdateResults = { updated: 0, errors: [] as string[] }
    
    try {
      // Migrate files in storage
      storageResults = await migrateStorageFiles(sessionId, userId)
      results.errors.push(...storageResults.errors)

      // Update ChartImage URLs to point to new user folder
      urlUpdateResults = await updateChartImageUrls(sessionId, userId)
      results.errors.push(...urlUpdateResults.errors)

      console.log('📁 Storage migration completed:', {
        filesFound: storageResults.filesFound,
        filesMoved: storageResults.filesMoved,
        urlsUpdated: urlUpdateResults.updated
      })

    } catch (error) {
      const errorMsg = `Fatal storage migration error: ${error instanceof Error ? error.message : error}`
      console.error('❌', errorMsg)
      results.errors.push(errorMsg)
    }

    // Log summary
    const totalMerged = results.quizResponses + results.chartImages + results.interpretations
    console.log('🎉 Session merge completed:', {
      totalRecordsMerged: totalMerged,
      breakdown: {
        quizResponses: results.quizResponses,
        chartImages: results.chartImages,
        interpretations: results.interpretations
      },
      storage: {
        filesFound: storageResults.filesFound,
        filesMoved: storageResults.filesMoved,
        urlsUpdated: urlUpdateResults.updated
      },
      errors: results.errors
    })

    return {
      success: results.errors.length === 0,
      totalMerged,
      breakdown: results,
      storage: {
        filesFound: storageResults.filesFound,
        filesMoved: storageResults.filesMoved,
        urlsUpdated: urlUpdateResults.updated,
        storageErrors: [...storageResults.errors, ...urlUpdateResults.errors]
      },
      errors: results.errors
    }

  } catch (error) {
    console.error('❌ Fatal error during session merge:', error)
    return {
      success: false,
      totalMerged: 0,
      breakdown: { quizResponses: 0, chartImages: 0, interpretations: 0, errors: [] },
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
}

/**
 * Get all session data for a given session ID
 * Useful for debugging or showing users what data will be merged
 * 
 * @param sessionId - The session ID to query
 */
export async function getSessionData(sessionId: string) {
  console.log('🔍 Retrieving session data for:', sessionId)
  
  try {
    // Get QuizResponse data
    const { data: quizData, error: quizError } = await getSupabaseClient()
      .from('QuizResponse')
      .select('id, email, firstName, lastName, createdAt')
      .eq('session_id', sessionId)

    // Get ChartImage data
    const { data: chartData, error: chartError } = await getSupabaseClient()
      .from('ChartImage')
      .select('id, imageUrl, chartType, createdAt')
      .eq('session_id', sessionId)

    // Get NatalChartInterpretation data
    const { data: interpData, error: interpError } = await getSupabaseClient()
      .from('NatalChartInterpretation')
      .select('id, sun_sign, moon_sign, created_at')
      .eq('session_id', sessionId)

    const result = {
      sessionId,
      quizResponses: quizData || [],
      chartImages: chartData || [],
      interpretations: interpData || [],
      errors: [
        ...(quizError ? [`QuizResponse error: ${quizError.message}`] : []),
        ...(chartError ? [`ChartImage error: ${chartError.message}`] : []),
        ...(interpError ? [`NatalChartInterpretation error: ${interpError.message}`] : [])
      ]
    }

    console.log('📊 Session data summary:', {
      quizResponses: result.quizResponses.length,
      chartImages: result.chartImages.length,
      interpretations: result.interpretations.length,
      hasErrors: result.errors.length > 0
    })

    return result

  } catch (error) {
    console.error('❌ Error retrieving session data:', error)
    return {
      sessionId,
      quizResponses: [],
      chartImages: [],
      interpretations: [],
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
}

/**
 * Clean up old session data (for sessions older than X days)
 * This helps prevent the database from growing too large with anonymous session data
 * 
 * @param daysOld - Number of days old sessions should be to be considered for cleanup
 */
export async function cleanupOldSessions(daysOld: number = 30) {
  console.log(`🧹 Starting cleanup of sessions older than ${daysOld} days...`)
  
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - daysOld)
  
  try {
    // Clean up old QuizResponse records that still have session_id (not linked to users)
    const { data: cleanedQuiz, error: quizError } = await getSupabaseClient()
      .from('QuizResponse')
      .delete()
      .not('session_id', 'is', null)
      .is('userId', null)
      .lt('createdAt', cutoffDate.toISOString())
      .select('id')

    // Clean up old ChartImage records that still have session_id (not linked to users)  
    const { data: cleanedChart, error: chartError } = await getSupabaseClient()
      .from('ChartImage')
      .delete()
      .not('session_id', 'is', null)
      .is('userId', null)
      .lt('createdAt', cutoffDate.toISOString())
      .select('id')

    // Clean up old NatalChartInterpretation records that still have session_id (not linked to users)
    const { data: cleanedInterp, error: interpError } = await getSupabaseClient()
      .from('NatalChartInterpretation')
      .delete()
      .not('session_id', 'is', null)
      .is('userId', null)
      .lt('created_at', cutoffDate.toISOString())
      .select('id')

    const results = {
      quizResponsesCleaned: cleanedQuiz?.length || 0,
      chartImagesCleaned: cleanedChart?.length || 0,
      interpretationsCleaned: cleanedInterp?.length || 0,
      errors: [
        ...(quizError ? [`QuizResponse cleanup error: ${quizError.message}`] : []),
        ...(chartError ? [`ChartImage cleanup error: ${chartError.message}`] : []),
        ...(interpError ? [`NatalChartInterpretation cleanup error: ${interpError.message}`] : [])
      ]
    }

    const totalCleaned = results.quizResponsesCleaned + results.chartImagesCleaned + results.interpretationsCleaned
    console.log(`✅ Cleanup completed. Removed ${totalCleaned} old session records:`, results)

    return {
      success: results.errors.length === 0,
      totalCleaned,
      breakdown: results,
      errors: results.errors
    }

  } catch (error) {
    console.error('❌ Error during session cleanup:', error)
    return {
      success: false,
      totalCleaned: 0,
      breakdown: { quizResponsesCleaned: 0, chartImagesCleaned: 0, interpretationsCleaned: 0, errors: [] },
      errors: [`Fatal error: ${error instanceof Error ? error.message : error}`]
    }
  }
} 