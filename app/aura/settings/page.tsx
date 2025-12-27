"use client"

import Link from "next/link"
import { AuraShell, useEntitlement } from "@/components/aura/AuraShell"
import { PageHeader } from "@/components/aura/PageHeader"
import { AuraCard } from "@/components/aura/AuraCard"
import { PillBadge } from "@/components/aura/PillBadge"
import { User, Bell, Shield } from "lucide-react"
import { useUser } from "@/contexts/UserContext"

export default function SettingsPage() {
  const { user } = useUser()
  const entitlement = useEntitlement()

  return (
    <AuraShell title="Settings" activeTab="horoscope">
      <div className="px-4 pb-10 space-y-5">
        <PageHeader
          title="Account settings"
          subtitle="Manage your Aura profile and access"
          badge={<PillBadge tone="teal">{entitlement?.plan ?? "trial"}</PillBadge>}
        />

        <AuraCard title="Account" eyebrow="Profile" action={<PillBadge tone="gray">Basic</PillBadge>}>
          <div className="flex items-start gap-3">
            <div className="h-11 w-11 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="font-semibold text-slate-900">{user?.email}</p>
              </div>
              {user?.user_metadata?.name && (
                <div>
                  <p className="text-xs text-slate-500">Name</p>
                  <p className="font-semibold text-slate-900">{user.user_metadata.name}</p>
                </div>
              )}
            </div>
          </div>
        </AuraCard>

        <AuraCard title="Subscription" eyebrow="Access" action={<PillBadge tone="blue">{entitlement?.plan}</PillBadge>}>
          <p className="text-sm text-slate-700 mb-3">
            Manage your billing and plan details.
          </p>
          <Link
            href="/aura/billing"
            className="block w-full text-center py-3 rounded-lg border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50 transition"
          >
            Manage billing
          </Link>
        </AuraCard>

        <AuraCard title="Notifications" eyebrow="Alerts" action={<PillBadge tone="amber">Coming soon</PillBadge>}>
          <div className="flex items-start gap-3 text-sm text-slate-700">
            <div className="h-11 w-11 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-1">Manage your notification preferences.</p>
              <p className="text-slate-500">
                Email updates about subscription and reports will be sent to your account email.
              </p>
            </div>
          </div>
        </AuraCard>

        <AuraCard title="Security" eyebrow="Protection" action={<PillBadge tone="teal">Secure</PillBadge>}>
          <div className="flex items-start gap-3 text-sm text-slate-700">
            <div className="h-11 w-11 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-1">Your account is protected by Supabase Auth.</p>
              <p className="text-slate-500">For any issues, reach out to support to review recent activity.</p>
            </div>
          </div>
        </AuraCard>
      </div>
    </AuraShell>
  )
}
