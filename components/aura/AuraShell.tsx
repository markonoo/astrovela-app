"use client"

import Link from "next/link"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { User, Menu, Sun, Heart, Hand, Smile, Sparkles } from "lucide-react"
import { useUser } from "@/contexts/UserContext"
import { cn } from "@/lib/utils"
import { Paywall } from "./paywall"
import { EntitlementData } from "@/types/api"
import { logger } from "@/utils/logger"

type AuraTab = "horoscope" | "compatibility" | "palm" | "mood" | "ask-ai"

interface AuraShellProps {
  title?: string
  activeTab: AuraTab
  children: ReactNode
}

const EntitlementContext = createContext<EntitlementData | null>(null)

export function useEntitlement() {
  return useContext(EntitlementContext)
}

export function AuraShell({ title, activeTab, children }: AuraShellProps) {
  const { user, loading } = useUser()
  const [entitlement, setEntitlement] = useState<EntitlementData | null>(null)
  const [checkingAccess, setCheckingAccess] = useState(true)

  useEffect(() => {
    if (loading) return

    if (!user) {
      setCheckingAccess(false)
      return
    }

    const loadEntitlement = async () => {
      try {
        const response = await fetch("/api/aura/entitlement")
        if (response.ok) {
          const data = await response.json()
          setEntitlement(data.hasAccess ? data : null)
        } else {
          setEntitlement(null)
        }
      } catch (error) {
        logger.error("Failed to fetch entitlement", error)
        setEntitlement(null)
      } finally {
        setCheckingAccess(false)
      }
    }

    loadEntitlement()
  }, [loading, user])

  const userInitial = useMemo(
    () => (user?.email ? user.email.charAt(0).toUpperCase() : null),
    [user?.email]
  )

  if (loading || checkingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7f9] text-slate-900">
        <div className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-[#0d9488] animate-spin" />
      </div>
    )
  }

  if (!user || !entitlement) {
    return <Paywall daysRemaining={entitlement?.daysLeft} />
  }

  return (
    <EntitlementContext.Provider value={entitlement}>
      <div className="min-h-screen bg-[#f5f7f9] text-slate-900 pb-24">
        <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
          <div className="flex items-center justify-between px-4 py-3 safe-area-inset-top">
            <Link
              href="/aura/settings"
              className="h-10 w-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-semibold"
            >
              {userInitial ? <span>{userInitial}</span> : <User className="w-5 h-5" />}
            </Link>
            {title && (
              <div className="flex flex-col items-center">
                <p className="text-sm text-slate-500">Aura</p>
                <h1 className="text-base font-semibold text-slate-800">{title}</h1>
                {entitlement.plan === "trial" && entitlement.daysLeft > 0 && (
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium px-2 py-1 border border-emerald-100">
                    {entitlement.daysLeft} {entitlement.daysLeft === 1 ? "day" : "days"} left
                  </span>
                )}
              </div>
            )}
            <Link
              href="/aura/settings"
              className="h-10 w-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </Link>
          </div>
        </header>

        <main className="px-4 pt-4">{children}</main>

        <nav className="fixed bottom-4 inset-x-4 z-40">
          <div className="grid grid-cols-5 gap-2 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/70 px-3 py-2">
            <NavItem
              href="/aura"
              label="Today"
              icon={<Sun className="w-5 h-5" />}
              active={activeTab === "horoscope"}
            />
            <NavItem
              href="/aura/love"
              label="Love"
              icon={<Heart className="w-5 h-5" />}
              active={activeTab === "compatibility"}
            />
            <NavItem
              href="/aura/palm"
              label="Palm"
              icon={<Hand className="w-5 h-5" />}
              active={activeTab === "palm"}
            />
            <NavItem
              href="/aura/mood"
              label="Mood"
              icon={<Smile className="w-5 h-5" />}
              active={activeTab === "mood"}
            />
            <NavItem
              href="/aura/ask-ai"
              label="Guide"
              icon={<Sparkles className="w-5 h-5" />}
              active={activeTab === "ask-ai"}
            />
          </div>
        </nav>
      </div>
    </EntitlementContext.Provider>
  )
}

interface NavItemProps {
  href: string
  label: string
  icon: ReactNode
  active?: boolean
}

function NavItem({ href, label, icon, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 py-1 rounded-full transition-colors"
    >
      <div
        className={cn(
          "h-10 w-full rounded-full flex items-center justify-center border text-sm font-medium",
          active
            ? "bg-[#0d9488] text-white border-[#0d9488]"
            : "bg-white text-slate-600 border-slate-200"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-[11px] leading-none",
          active ? "text-[#0d9488]" : "text-slate-500"
        )}
      >
        {label}
      </span>
    </Link>
  )
}

