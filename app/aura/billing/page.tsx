"use client"

import { useMemo } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { AuraShell, useEntitlement } from "@/components/aura/AuraShell"
import { PageHeader } from "@/components/aura/PageHeader"
import { AuraCard } from "@/components/aura/AuraCard"
import { PillBadge } from "@/components/aura/PillBadge"
import { CreditCard, Calendar, AlertCircle, CheckCircle } from "lucide-react"

export default function BillingPage() {
  return (
    <AuraShell title="Billing" activeTab="ask-ai">
      <BillingContent />
    </AuraShell>
  )
}

function BillingContent() {
  const entitlement = useEntitlement()

  const daysRemaining = entitlement?.daysLeft ?? 0
  const isTrial = entitlement?.plan === "trial"
  const isActive = entitlement?.plan === "active"
  const isExpired = entitlement?.plan === "expired" || entitlement?.plan === "canceled" || daysRemaining <= 0

  const statusLabel = useMemo(() => {
    if (isTrial) return "Free trial"
    if (isActive) return "Active subscription"
    return "Expired"
  }, [isTrial, isActive])

  const statusSub = useMemo(() => {
    if (isTrial && daysRemaining > 0) return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"} remaining`
    if (isExpired) return "Your trial has ended"
    return "Active subscription"
  }, [isTrial, isExpired, daysRemaining])

  const manageSubscription = async () => {
    try {
      const response = await fetch("/api/aura/billing/portal", { method: "POST" })
      if (response.ok) {
        const data = await response.json()
        if (data.url) window.location.href = data.url
      } else {
        alert("Unable to open billing portal. Please contact support at hello@tryastrovela.com")
      }
    } catch (error) {
      alert("Unable to open billing portal. Please contact support at hello@tryastrovela.com")
    }
  }

  return (
    <div className="px-4 pb-10 space-y-5">
      <PageHeader
        title="Manage subscription"
        subtitle="Update billing or renew access"
        badge={<PillBadge tone="teal">{statusLabel}</PillBadge>}
      />

      <AuraCard title="Current plan" eyebrow="Status">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">{statusLabel}</p>
            <p className="text-sm text-slate-600">{statusSub}</p>
            {entitlement?.freeUntil && (
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span>
                  {isTrial ? "Trial ends" : "Next billing"} on {format(new Date(entitlement.freeUntil), "MMMM d, yyyy")}
                </span>
              </div>
            )}
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
            {isExpired ? (
              <AlertCircle className="w-5 h-5 text-amber-500" />
            ) : (
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            )}
          </div>
        </div>
      </AuraCard>

      {isExpired ? (
        <AuraCard title="Continue your journey" eyebrow="Upgrade" action={<PillBadge tone="blue">€14.99/mo</PillBadge>}>
          <p className="text-sm text-slate-700 mb-3">
            Subscribe to keep accessing daily insights and your personalized reports.
          </p>
          <Link
            href="/pricing"
            className="block w-full text-center py-3 rounded-lg bg-[#0d9488] text-white font-semibold hover:opacity-90 transition"
          >
            Subscribe now
          </Link>
        </AuraCard>
      ) : (
        <AuraCard title="Manage subscription" eyebrow="Billing">
          <p className="text-sm text-slate-700 mb-3">
            Update your payment method or manage your plan in the customer portal.
          </p>
          <button
            onClick={manageSubscription}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50 transition"
          >
            <CreditCard className="w-4 h-4" />
            Manage billing
          </button>
          <p className="text-xs text-slate-500 text-center mt-3">Opens Shopify customer portal</p>
        </AuraCard>
      )}

      <AuraCard title="Billing info" eyebrow="Account">
        <div className="space-y-2 text-sm text-slate-700">
          <div className="flex justify-between">
            <span className="text-slate-500">Email</span>
            <span className="font-semibold">{entitlement?.purchaseDate ? "On file" : "—"}</span>
          </div>
          {entitlement?.purchaseDate && (
            <div className="flex justify-between">
              <span className="text-slate-500">Purchase date</span>
              <span className="font-semibold">{format(new Date(entitlement.purchaseDate), "MMMM d, yyyy")}</span>
            </div>
          )}
          {entitlement?.shopifyOrderId && (
            <div className="flex justify-between">
              <span className="text-slate-500">Order ID</span>
              <span className="font-semibold">{entitlement.shopifyOrderId}</span>
            </div>
          )}
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-500">
          Need help? Email <a href="mailto:hello@tryastrovela.com" className="underline text-slate-700">hello@tryastrovela.com</a>
        </div>
      </AuraCard>
    </div>
  )
}
