import type React from "react"
import { UserProvider } from "@/contexts/UserContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AstroVela Aura",
  description: "Your personal astrology control center",
}

export default function AuraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <div className="min-h-screen bg-[#f5f7f9] text-slate-900">
        {children}
      </div>
    </UserProvider>
  )
}
