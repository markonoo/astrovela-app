import type React from "react"
import { UserProvider } from "@/contexts/UserContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AstroVela Companion",
  description: "Your personal astrology control center",
}

export default function CompanionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#050719] via-[#090b25] to-[#0b0e2e] text-white safe-area-inset-top">
        {children}
      </div>
    </UserProvider>
  )
}

