/**
 * User Account Deletion Utilities
 * GDPR Right to Deletion (Article 17) - Right to be Forgotten
 */

import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'
import { logger } from '@/utils/logger'
import { env } from '@/utils/environment'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey

/**
 * Delete all user data (cascade delete)
 */
export async function deleteUserData(userId: number): Promise<{
  success: boolean
  deleted: {
    quizResponses: number
    chartImages: number
    chartInterpretations: number
    entitlements: number
    storageFiles: number
  }
  errors: string[]
}> {
  const errors: string[] = []
  const deleted = {
    quizResponses: 0,
    chartImages: 0,
    chartInterpretations: 0,
    entitlements: 0,
    storageFiles: 0,
  }

  try {
    // Get user data before deletion (for storage cleanup)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        ChartImage: true,
      },
    })

    if (!user) {
      throw new Error('User not found')
    }

    // Delete storage files
    try {
      const supabase = createClient(supabaseUrl, supabaseServiceKey)
      
      // Delete chart images from storage
      for (const chartImage of user.ChartImage) {
        try {
          // Extract path from URL
          const urlParts = chartImage.imageUrl.split('/')
          const bucket = urlParts[urlParts.length - 2]
          const fileName = urlParts[urlParts.length - 1]
          
          if (bucket && fileName) {
            const { error } = await supabase.storage
              .from(bucket)
              .remove([fileName])
            
            if (!error) {
              deleted.storageFiles++
            } else {
              errors.push(`Failed to delete storage file ${fileName}: ${error.message}`)
            }
          }
        } catch (error) {
          errors.push(`Error deleting storage file: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
      }
    } catch (error) {
      errors.push(`Storage deletion error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }

    // Count records before deletion
    const [quizCount, chartCount, interpretationCount, entitlementCount] = await Promise.all([
      prisma.quizResponse.count({ where: { userId } }),
      prisma.chartImage.count({ where: { userId } }),
      prisma.natalChartInterpretation.count({ where: { userId } }),
      prisma.appEntitlement.count({ where: { userId } }),
    ])

    // Delete user (cascade will delete related records)
    await prisma.user.delete({
      where: { id: userId },
    })

    deleted.quizResponses = quizCount
    deleted.chartImages = chartCount
    deleted.chartInterpretations = interpretationCount
    deleted.entitlements = entitlementCount

    logger.info('User data deleted', {
      userId,
      deleted,
      errors: errors.length > 0 ? errors : undefined,
    })

    return {
      success: errors.length === 0,
      deleted,
      errors,
    }
  } catch (error) {
    logger.error('Failed to delete user data', error)
    throw error
  }
}

/**
 * Delete Supabase auth account
 */
export async function deleteSupabaseAuthAccount(email: string): Promise<boolean> {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // Get user by email
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers()
    
    if (listError) {
      logger.error('Failed to list users for deletion', listError)
      return false
    }

    const user = users.find(u => u.email === email)
    
    if (!user) {
      logger.warn('User not found in Supabase auth', { email })
      return true // Consider it successful if user doesn't exist
    }

    // Delete user
    const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id)
    
    if (deleteError) {
      logger.error('Failed to delete Supabase auth user', deleteError)
      return false
    }

    logger.info('Supabase auth account deleted', { email, userId: user.id })
    return true
  } catch (error) {
    logger.error('Error deleting Supabase auth account', error)
    return false
  }
}

/**
 * Create deletion request record
 */
export async function createDeletionRequest(
  userId: number,
  reason?: string
): Promise<string> {
  const scheduledAt = new Date()
  scheduledAt.setDate(scheduledAt.getDate() + 1) // Schedule for 1 day from now (grace period)

  const deletionRequest = await prisma.deletionRequest.create({
    data: {
      userId,
      reason,
      status: 'pending',
      scheduledAt,
    } as any,
  })

  return deletionRequest.id
}

/**
 * Process deletion request
 */
export async function processDeletionRequest(requestId: string): Promise<{
  success: boolean
  errors: string[]
}> {
  const request = await prisma.deletionRequest.findUnique({
    where: { id: requestId },
  })

  if (!request) {
    throw new Error('Deletion request not found')
  }

  if (request.status !== 'pending') {
    throw new Error(`Deletion request already ${request.status}`)
  }

  // Fetch user separately since relation doesn't exist
  const user = await prisma.user.findUnique({
    where: { id: request.userId },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const errors: string[] = []

  // Update status to processing
  await prisma.deletionRequest.update({
    where: { id: requestId },
    data: { status: 'processing' },
  })

  try {
    // Delete Supabase auth account
    const authDeleted = await deleteSupabaseAuthAccount(user.email)
    
    // Delete user data
    const result = await deleteUserData(request.userId)

    // Update request as completed
    await prisma.deletionRequest.update({
      where: { id: requestId },
      data: {
        status: result.success && authDeleted ? 'completed' : 'failed',
        completedAt: new Date(),
      },
    })

    return {
      success: result.success && authDeleted,
      errors: result.errors,
    }
  } catch (error) {
    // Update request as failed
    await prisma.deletionRequest.update({
      where: { id: requestId },
      data: {
        status: 'failed',
        completedAt: new Date(),
      },
    })

    throw error
  }
}


