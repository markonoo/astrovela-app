/**
 * Entitlement management utilities for AstroVela Aura App
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

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function calculateDaysLeft(freeUntil: Date) {
  return Math.max(0, Math.ceil((freeUntil.getTime() - Date.now()) / MS_PER_DAY));
}

/**
 * Normalize an entitlement record, auto-expiring trials when needed.
 */
async function normalizeEntitlement(
  entitlement: AppEntitlement | null
): Promise<AppEntitlement | null> {
  if (!entitlement) return null;

  const now = new Date();
  if (entitlement.plan === 'trial' && entitlement.freeUntil < now) {
    // Auto-expire trial
    await prisma.appEntitlement.update({
      where: { id: entitlement.id },
      data: { plan: 'expired' },
    });
    return {
      ...entitlement,
      plan: 'expired',
    };
  }

  return entitlement;
}

export interface EntitlementStatus {
  hasAccess: boolean;
  plan: PlanType;
  daysLeft: number;
  freeUntil?: string;
  hasReport?: boolean;
  purchaseDate?: string | null;
  shopifyOrderId?: string | null;
}

/**
 * Check if user has active access to the aura app
 */
export async function hasActiveAccess(userId: number): Promise<boolean> {
  const entitlementRecord = await normalizeEntitlement(
    await prisma.appEntitlement.findUnique({
      where: { userId },
    })
  );

  if (!entitlementRecord) {
    return false;
  }

  if (entitlementRecord.plan === 'canceled' || entitlementRecord.plan === 'expired') {
    return false;
  }

  if (entitlementRecord.plan === 'trial') {
    return calculateDaysLeft(entitlementRecord.freeUntil) > 0;
  }

  return entitlementRecord.plan === 'active';
}

/**
 * Get user's entitlement
 */
export async function getUserEntitlement(userId: number): Promise<AppEntitlement | null> {
  const entitlement = await prisma.appEntitlement.findUnique({
    where: { userId },
  });

  return normalizeEntitlement(entitlement);
}

/**
 * Build a normalized entitlement status payload for API responses.
 */
export async function getEntitlementStatusForUser(
  userId: number
): Promise<EntitlementStatus> {
  const entitlement = await getUserEntitlement(userId);

  if (!entitlement) {
    return {
      hasAccess: false,
      plan: 'expired',
      daysLeft: 0,
    };
  }

  const daysLeft = calculateDaysLeft(entitlement.freeUntil);
  const hasAccess =
    entitlement.plan === 'active' ||
    (entitlement.plan === 'trial' && daysLeft > 0);

  return {
    hasAccess,
    plan: entitlement.plan,
    daysLeft,
    freeUntil: entitlement.freeUntil?.toISOString(),
    hasReport: entitlement.hasReport,
    purchaseDate: entitlement.purchaseDate?.toISOString() ?? null,
    shopifyOrderId: entitlement.shopifyOrderId ?? null,
  };
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
    }) as Promise<AppEntitlement>;
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
    } as any,
  }) as Promise<AppEntitlement>;
}

/**
 * Get entitlement by email (useful for webhook processing)
 */
export async function getEntitlementByEmail(email: string): Promise<AppEntitlement | null> {
  const entitlement = await prisma.appEntitlement.findFirst({
    where: { email },
    orderBy: { createdAt: 'desc' },
  });
  return entitlement as AppEntitlement | null;
}

/**
 * Calculate free until date (30 days from now)
 */
export function calculateFreeUntil(): Date {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
}
