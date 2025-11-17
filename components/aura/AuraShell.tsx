"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useUser } from "@/contexts/UserContext"
import { User, Menu } from "lucide-react"

type AuraTab = "horoscope" | "compatibility" | "palm" | "mood" | "ask-ai"

interface AuraShellProps {
  title: string
  activeTab: AuraTab
  children: ReactNode
}

export function AuraShell({ title, activeTab, children }: AuraShellProps) {
  const { user } = useUser()

  return (
    <div className="relative min-h-screen pb-24">
      {/* Top App Bar */}
      <header className="flex items-center justify-between px-6 pt-6 safe-area-inset-top">
        <Link 
          href="/aura/settings"
          className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/12 transition-colors"
        >
          {user?.email ? (
            <span className="text-[16px]">{user.email.charAt(0).toUpperCase()}</span>
          ) : (
            <User className="w-4 h-4 text-white/80" />
          )}
        </Link>
        <h1 className="text-[20px] leading-[24px] font-semibold text-white">{title}</h1>
        <Link
          href="/aura/settings"
          className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/12 transition-colors"
        >
          <Menu className="w-4 h-4 text-white/80" />
        </Link>
      </header>

      {/* Page content */}
      <main className="mt-4">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 inset-x-0 px-6 safe-area-inset-bottom z-50">
        <div className="flex items-center justify-between rounded-3xl bg-white/6 backdrop-blur-2xl px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
          <NavItem
            href="/aura"
            label="Horoscope"
            emoji="✨"
            active={activeTab === "horoscope"}
          />
          <NavItem
            href="/aura/love"
            label="Compatibility"
            emoji="❤️"
            active={activeTab === "compatibility"}
          />
          <NavItem
            href="/aura/palm"
            label="Palm"
            emoji="✋"
            active={activeTab === "palm"}
          />
          <NavItem
            href="/aura/mood"
            label="Mood"
            emoji="🙂"
            active={activeTab === "mood"}
          />
          <NavItem
            href="/aura/ask-ai"
            label="Ask AI"
            emoji="🤖"
            active={activeTab === "ask-ai"}
          />
        </div>
      </nav>
    </div>
  )
}

interface NavItemProps {
  href: string
  label: string
  emoji: string
  active?: boolean
}

function NavItem({ href, label, emoji, active }: NavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1">
      <span
        className={cn(
          "w-9 h-9 rounded-full flex items-center justify-center text-[16px] transition-all",
          active
            ? "bg-gradient-to-br from-[#7a5bff] to-[#ff4de1] shadow-[0_0_16px_rgba(122,91,255,0.8)]"
            : "bg-white/4 hover:bg-white/8"
        )}
      >
        {emoji}
      </span>
      <span
        className={cn(
          "text-[11px] transition-colors",
          active ? "text-white/90" : "text-white/60"
        )}
      >
        {label}
      </span>
    </Link>
  )
}


