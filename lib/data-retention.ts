/**
 * Data Retention Policy Utilities
 * Implements automatic data cleanup based on retention policies
 */

import { prisma } from '@/lib/prisma'
import { logger } from '@/utils/logger'

/**
 * Retention periods (in days)
 */
export const RETENTION_PERIODS = {
  quizResponses: 3 * 365, // 3 years
  chartImages: 5 * 365, // 5 years
  auditLogs: 365, // 1 year
  deletedAccounts: 30, // 30 days grace period
  exportRequests: 7, // 7 days
} as const

/**
 * Clean up old quiz responses
 */
export async function cleanupOldQuizResponses(): Promise<number> {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - RETENTION_PERIODS.quizResponses)

  // Find users with no activity in retention period
  const oldResponses = await prisma.quizResponse.findMany({
    where: {
      createdAt: {
        lt: cutoffDate,
      },
      user: {
        // Only delete if user has been inactive
        updatedAt: {
          lt: cutoffDate,
        },
      },
    },
  })

  // Delete old quiz responses
  const deleted = await prisma.quizResponse.deleteMany({
    where: {
      id: {
        in: oldResponses.map(r => r.id),
      },
    },
  })

  logger.info('Cleaned up old quiz responses', {
    deleted: deleted.count,
    cutoffDate: cutoffDate.toISOString(),
  })

  return deleted.count
}

/**
 * Clean up old chart images
 */
export async function cleanupOldChartImages(): Promise<number> {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - RETENTION_PERIODS.chartImages)

  const deleted = await prisma.chartImage.deleteMany({
    where: {
      createdAt: {
        lt: cutoffDate,
      },
    },
  })

  logger.info('Cleaned up old chart images', {
    deleted: deleted.count,
    cutoffDate: cutoffDate.toISOString(),
  })

  return deleted.count
}

/**
 * Clean up old audit logs
 */
export async function cleanupOldAuditLogs(): Promise<number> {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - RETENTION_PERIODS.auditLogs)

  const deleted = await prisma.adminAuditLog.deleteMany({
    where: {
      createdAt: {
        lt: cutoffDate,
      },
    },
  })

  logger.info('Cleaned up old audit logs', {
    deleted: deleted.count,
    cutoffDate: cutoffDate.toISOString(),
  })

  return deleted.count
}

/**
 * Clean up expired export requests
 */
export async function cleanupExpiredExportRequests(): Promise<number> {
  const deleted = await prisma.dataExportRequest.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  })

  logger.info('Cleaned up expired export requests', {
    deleted: deleted.count,
  })

  return deleted.count
}

/**
 * Run all cleanup tasks
 */
export async function runDataRetentionCleanup(): Promise<{
  quizResponses: number
  chartImages: number
  auditLogs: number
  exportRequests: number
  total: number
}> {
  const [quizResponses, chartImages, auditLogs, exportRequests] = await Promise.all([
    cleanupOldQuizResponses(),
    cleanupOldChartImages(),
    cleanupOldAuditLogs(),
    cleanupExpiredExportRequests(),
  ])

  const total = quizResponses + chartImages + auditLogs + exportRequests

  logger.info('Data retention cleanup completed', {
    quizResponses,
    chartImages,
    auditLogs,
    exportRequests,
    total,
  })

  return {
    quizResponses,
    chartImages,
    auditLogs,
    exportRequests,
    total,
  }
}

