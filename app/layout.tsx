import type React from "react"
import { QuizProvider } from "@/contexts/quiz-context"
import { UserProvider } from "@/contexts/UserContext"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "astrovela",
  description: "astrovela - Personalized astrology for self-discovery, growth, and insight.",
  icons: {
    icon: "/favicon.svg",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f7]">
        <UserProvider>
          <QuizProvider>
            {children}
          </QuizProvider>
        </UserProvider>
      </body>
    </html>
  )
}

import './globals.css'