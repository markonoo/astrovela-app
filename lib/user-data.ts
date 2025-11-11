/**
 * User Data Aggregation Utilities
 * Collects and organizes all user data for GDPR Right to Access
 */

import { prisma } from '@/lib/prisma'

export interface UserDataSummary {
  profile: {
    id: number
    email: string
    name: string | null
    createdAt: Date
  }
  quizResponses: Array<{
    id: string
    createdAt: Date
    birthDate: any
    birthPlace: string | null
    birthTime: string | null
    firstName: string | null
    lastName: string | null
    gender: string | null
  }>
  chartImages: Array<{
    id: string
    imageUrl: string
    chartType: string | null
    createdAt: Date
  }>
  chartInterpretations: Array<{
    id: string
    sunSign: string | null
    moonSign: string | null
    createdAt: Date | null
  }>
  entitlements: Array<{
    id: string
    plan: string
    freeUntil: Date
    hasReport: boolean
    purchaseDate: Date | null
    createdAt: Date
  }>
  dataSources: Array<{
    type: string
    description: string
    collectedAt: Date
  }>
}

/**
 * Get all user data for a user ID
 */
export async function getUserDataSummary(userId: number): Promise<UserDataSummary | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      quizResponses: {
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          createdAt: true,
          birthDate: true,
          birthPlace: true,
          birthTime: true,
          firstName: true,
          lastName: true,
          gender: true,
        },
      },
      chartImages: {
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          imageUrl: true,
          chartType: true,
          createdAt: true,
        },
      },
      NatalChartInterpretation: {
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          sunSign: true,
          moonSign: true,
          created_at: true,
        },
      },
      appEntitlement: {
        select: {
          id: true,
          plan: true,
          freeUntil: true,
          hasReport: true,
          purchaseDate: true,
          createdAt: true,
        },
      },
    },
  })

  if (!user) {
    return null
  }

  // Build data sources list
  const dataSources: Array<{ type: string; description: string; collectedAt: Date }> = []
  
  user.quizResponses.forEach(qr => {
    dataSources.push({
      type: 'Quiz Response',
      description: 'Birth data and quiz answers',
      collectedAt: qr.createdAt,
    })
  })

  user.chartImages.forEach(ci => {
    dataSources.push({
      type: 'Chart Image',
      description: 'Astrology chart visualization',
      collectedAt: ci.createdAt,
    })
  })

  user.NatalChartInterpretation.forEach(nci => {
    if (nci.created_at) {
      dataSources.push({
        type: 'Chart Interpretation',
        description: 'Astrological interpretation data',
        collectedAt: nci.created_at,
      })
    }
  })

  if (user.appEntitlement) {
    dataSources.push({
      type: 'Entitlement',
      description: 'Subscription and access information',
      collectedAt: user.appEntitlement.createdAt,
    })
  }

  // Sort data sources by date
  dataSources.sort((a, b) => b.collectedAt.getTime() - a.collectedAt.getTime())

  return {
    profile: {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
    },
    quizResponses: user.quizResponses,
    chartImages: user.chartImages,
    chartInterpretations: user.NatalChartInterpretation.map(ci => ({
      id: ci.id,
      sunSign: ci.sunSign,
      moonSign: ci.moonSign,
      createdAt: ci.created_at,
    })),
    entitlements: user.appEntitlement ? [user.appEntitlement] : [],
    dataSources,
  }
}


