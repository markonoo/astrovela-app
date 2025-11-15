/**
 * Admin Audit Logging
 * Logs all admin actions for security and compliance
 */

import { prisma } from '@/lib/prisma'
import { logger } from '@/utils/logger'

export type AdminAction = 
  | 'login'
  | 'login_failed'
  | 'logout'
  | 'data_access'
  | 'data_modify'
  | 'data_delete'
  | 'user_access'
  | 'export_data'
  | 'config_change'
  | 'security_event'

export interface AuditLogDetails {
  [key: string]: any
}

export interface CreateAuditLogParams {
  adminId?: string
  action: AdminAction
  resource?: string
  ipAddress?: string
  userAgent?: string
  success: boolean
  details?: AuditLogDetails
}

/**
 * Create an audit log entry
 */
export async function logAdminAction(params: CreateAuditLogParams): Promise<void> {
  try {
    await prisma.adminAuditLog.create({
      data: {
        adminId: params.adminId || 'unknown',
        action: params.action,
        resource: params.resource,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        success: params.success,
        details: params.details || {},
      },
    })
  } catch (error) {
    // Don't throw - audit logging failures shouldn't break the app
    logger.error('Failed to create audit log', error)
  }
}

/**
 * Log admin login attempt
 */
export async function logAdminLogin(
  success: boolean,
  ipAddress?: string,
  userAgent?: string,
  details?: AuditLogDetails
): Promise<void> {
  await logAdminAction({
    action: success ? 'login' : 'login_failed',
    ipAddress,
    userAgent,
    success,
    details,
  })
}

/**
 * Log admin logout
 */
export async function logAdminLogout(
  adminId?: string,
  ipAddress?: string,
  userAgent?: string
): Promise<void> {
  await logAdminAction({
    adminId,
    action: 'logout',
    ipAddress,
    userAgent,
    success: true,
  })
}

/**
 * Log admin data access
 */
export async function logAdminDataAccess(
  resource: string,
  adminId?: string,
  ipAddress?: string,
  userAgent?: string,
  details?: AuditLogDetails
): Promise<void> {
  await logAdminAction({
    adminId,
    action: 'data_access',
    resource,
    ipAddress,
    userAgent,
    success: true,
    details,
  })
}

/**
 * Log admin data modification
 */
export async function logAdminDataModify(
  resource: string,
  adminId?: string,
  ipAddress?: string,
  userAgent?: string,
  details?: AuditLogDetails
): Promise<void> {
  await logAdminAction({
    adminId,
    action: 'data_modify',
    resource,
    ipAddress,
    userAgent,
    success: true,
    details,
  })
}

/**
 * Get audit logs with filtering
 */
export async function getAuditLogs(params: {
  adminId?: string
  action?: AdminAction
  startDate?: Date
  endDate?: Date
  limit?: number
  offset?: number
}) {
  const where: any = {}

  if (params.adminId) {
    where.adminId = params.adminId
  }

  if (params.action) {
    where.action = params.action
  }

  if (params.startDate || params.endDate) {
    where.createdAt = {}
    if (params.startDate) {
      where.createdAt.gte = params.startDate
    }
    if (params.endDate) {
      where.createdAt.lte = params.endDate
    }
  }

  const [logs, total] = await Promise.all([
    prisma.adminAuditLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: params.limit || 100,
      skip: params.offset || 0,
    }),
    prisma.adminAuditLog.count({ where }),
  ])

  return {
    logs,
    total,
    limit: params.limit || 100,
    offset: params.offset || 0,
  }
}

/**
 * Get audit statistics
 */
export async function getAuditStatistics(days: number = 30) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const [
    totalLogs,
    successfulLogins,
    failedLogins,
    dataAccessCount,
    recentFailedLogins,
  ] = await Promise.all([
    prisma.adminAuditLog.count({
      where: { createdAt: { gte: startDate } },
    }),
    prisma.adminAuditLog.count({
      where: {
        action: 'login',
        success: true,
        createdAt: { gte: startDate },
      },
    }),
    prisma.adminAuditLog.count({
      where: {
        action: 'login_failed',
        success: false,
        createdAt: { gte: startDate },
      },
    }),
    prisma.adminAuditLog.count({
      where: {
        action: 'data_access',
        createdAt: { gte: startDate },
      },
    }),
    prisma.adminAuditLog.findMany({
      where: {
        action: 'login_failed',
        success: false,
        createdAt: { gte: startDate },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ])

  return {
    totalLogs,
    successfulLogins,
    failedLogins,
    dataAccessCount,
    recentFailedLogins,
    period: `${days} days`,
  }
}






