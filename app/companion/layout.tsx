import type React from "react"
import { UserProvider } from "@/contexts/UserContext"
import { CompanionNav } from "@/components/companion/companion-nav"
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
      <div className="min-h-screen bg-gradient-to-b from-apple-gray-5 to-apple-gray-6 safe-area-inset-top">
        <CompanionNav />
        <main className="pb-20 md:pb-4 safe-area-inset-bottom">{children}</main>
      </div>
    </UserProvider>
  )
}

