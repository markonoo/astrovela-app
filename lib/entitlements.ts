/**
 * Entitlement management utilities for AstroVela Companion App
 */

import { prisma } from './prisma';

export type PlanType = 'trial' | 'active' | 'canceled' | 'expired';

export interface AppEntitlement {
  id: string;
  userId: number;
  email: string;
  plan: PlanType;
  freeUntil: Date;
  hasReport: boolean;
  purchaseDate: Date | null;
  shopifyOrderId: string | null;
  stripeCustomerId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Check if user has active access to the companion app
 */
export async function hasActiveAccess(userId: number): Promise<boolean> {
  const entitlement = await prisma.appEntitlement.findUnique({
    where: { userId },
  });

  if (!entitlement) {
    return false;
  }

  // Check if trial/access is still valid
  const now = new Date();
  if (entitlement.freeUntil < now && entitlement.plan === 'trial') {
    // Auto-expire trial
    await prisma.appEntitlement.update({
      where: { id: entitlement.id },
      data: { plan: 'expired' },
    });
    return false;
  }

  return entitlement.plan === 'trial' || entitlement.plan === 'active';
}

/**
 * Get user's entitlement
 */
export async function getUserEntitlement(userId: number): Promise<AppEntitlement | null> {
  const entitlement = await prisma.appEntitlement.findUnique({
    where: { userId },
  });

  if (!entitlement) {
    return null;
  }

  // Auto-expire if trial expired
  const now = new Date();
  if (entitlement.freeUntil < now && entitlement.plan === 'trial') {
    await prisma.appEntitlement.update({
      where: { id: entitlement.id },
      data: { plan: 'expired' },
    });
    return {
      ...entitlement,
      plan: 'expired' as PlanType,
    };
  }

  return entitlement;
}

/**
 * Create or update entitlement for a user
 */
export async function createOrUpdateEntitlement(data: {
  userId: number;
  email: string;
  plan?: PlanType;
  freeUntil: Date;
  hasReport?: boolean;
  purchaseDate?: Date;
  shopifyOrderId?: string;
  stripeCustomerId?: string;
}): Promise<AppEntitlement> {
  const existing = await prisma.appEntitlement.findUnique({
    where: { userId: data.userId },
  });

  if (existing) {
    return prisma.appEntitlement.update({
      where: { id: existing.id },
      data: {
        email: data.email,
        plan: data.plan ?? existing.plan,
        freeUntil: data.freeUntil,
        hasReport: data.hasReport ?? existing.hasReport,
        purchaseDate: data.purchaseDate ?? existing.purchaseDate,
        shopifyOrderId: data.shopifyOrderId ?? existing.shopifyOrderId,
        stripeCustomerId: data.stripeCustomerId ?? existing.stripeCustomerId,
      },
    });
  }

  return prisma.appEntitlement.create({
    data: {
      userId: data.userId,
      email: data.email,
      plan: data.plan ?? 'trial',
      freeUntil: data.freeUntil,
      hasReport: data.hasReport ?? false,
      purchaseDate: data.purchaseDate,
      shopifyOrderId: data.shopifyOrderId,
      stripeCustomerId: data.stripeCustomerId,
    },
  });
}

/**
 * Get entitlement by email (useful for webhook processing)
 */
export async function getEntitlementByEmail(email: string): Promise<AppEntitlement | null> {
  return prisma.appEntitlement.findFirst({
    where: { email },
    orderBy: { createdAt: 'desc' },
  });
}

/**
 * Calculate free until date (30 days from now)
 */
export function calculateFreeUntil(): Date {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
}

