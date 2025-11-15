/**
 * User Data Export Utilities
 * GDPR Right to Data Portability (Article 20)
 */

import { prisma } from '@/lib/prisma'
import { getUserDataSummary } from './user-data'
import { logger } from '@/utils/logger'

export interface ExportOptions {
  format: 'json' | 'csv'
  userId: number
}

/**
 * Export user data as JSON
 */
export async function exportUserDataJSON(userId: number): Promise<string> {
  const userData = await getUserDataSummary(userId)
  
  if (!userData) {
    throw new Error('User data not found')
  }

  // Format for export
  const exportData = {
    exportDate: new Date().toISOString(),
    user: {
      profile: userData.profile,
      quizResponses: userData.quizResponses,
      chartImages: userData.chartImages,
      chartInterpretations: userData.chartInterpretations,
      entitlements: userData.entitlements,
    },
    metadata: {
      dataSources: userData.dataSources,
      totalRecords: {
        quizResponses: userData.quizResponses.length,
        chartImages: userData.chartImages.length,
        chartInterpretations: userData.chartInterpretations.length,
        entitlements: userData.entitlements.length,
      },
    },
  }

  return JSON.stringify(exportData, null, 2)
}

/**
 * Export user data as CSV
 */
export async function exportUserDataCSV(userId: number): Promise<string> {
  const userData = await getUserDataSummary(userId)
  
  if (!userData) {
    throw new Error('User data not found')
  }

  const lines: string[] = []
  
  // Profile
  lines.push('Section,Field,Value')
  lines.push(`Profile,Email,${userData.profile.email}`)
  lines.push(`Profile,Name,${userData.profile.name || ''}`)
  lines.push(`Profile,Created At,${userData.profile.createdAt.toISOString()}`)
  lines.push('')
  
  // Quiz Responses
  lines.push('Quiz Responses')
  lines.push('ID,Created At,Birth Date,Birth Place,Birth Time,First Name,Last Name,Gender')
  userData.quizResponses.forEach(qr => {
    const birthDate = typeof qr.birthDate === 'object' 
      ? `${qr.birthDate.year}-${qr.birthDate.month}-${qr.birthDate.day}`
      : ''
    lines.push([
      qr.id,
      qr.createdAt.toISOString(),
      birthDate,
      qr.birthPlace || '',
      qr.birthTime || '',
      qr.firstName || '',
      qr.lastName || '',
      qr.gender || '',
    ].join(','))
  })
  lines.push('')
  
  // Chart Images
  lines.push('Chart Images')
  lines.push('ID,Image URL,Chart Type,Created At')
  userData.chartImages.forEach(ci => {
    lines.push([
      ci.id,
      ci.imageUrl,
      ci.chartType || '',
      ci.createdAt.toISOString(),
    ].join(','))
  })
  lines.push('')
  
  // Chart Interpretations
  lines.push('Chart Interpretations')
  lines.push('ID,Sun Sign,Moon Sign,Created At')
  userData.chartInterpretations.forEach(ci => {
    lines.push([
      ci.id,
      ci.sunSign || '',
      ci.moonSign || '',
      ci.createdAt?.toISOString() || '',
    ].join(','))
  })
  lines.push('')
  
  // Entitlements
  lines.push('Entitlements')
  lines.push('ID,Plan,Free Until,Has Report,Purchase Date,Created At')
  userData.entitlements.forEach(e => {
    lines.push([
      e.id,
      e.plan,
      e.freeUntil.toISOString(),
      e.hasReport ? 'Yes' : 'No',
      e.purchaseDate?.toISOString() || '',
      e.createdAt.toISOString(),
    ].join(','))
  })

  return lines.join('\n')
}

/**
 * Create export request record
 */
export async function createExportRequest(
  userId: number,
  format: 'json' | 'csv'
): Promise<string> {
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // Expires in 7 days

  const exportRequest = await prisma.dataExportRequest.create({
    data: {
      userId,
      format,
      status: 'pending',
      expiresAt,
    } as any,
  })

  return exportRequest.id
}

/**
 * Update export request status
 */
export async function updateExportRequest(
  requestId: string,
  status: 'processing' | 'completed' | 'failed',
  fileUrl?: string
): Promise<void> {
  await prisma.dataExportRequest.update({
    where: { id: requestId },
    data: {
      status,
      fileUrl,
      ...(status === 'completed' && { completedAt: new Date() }),
    },
  })
}


