import type React from "react"
import { QuizProvider } from "@/contexts/quiz-context"
import "./globals.css"
import type { Metadata } from "next"
import { OliviaDataLoader } from "@/components/example-book/olivia-data-loader"

export const metadata: Metadata = {
  title: "Astrology Quiz",
  description: "Discover your astrological profile",
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
        <QuizProvider>
          {/* Pre-load Olivia's data */}
          <OliviaDataLoader />
          {children}
        </QuizProvider>
      </body>
    </html>
  )
}



import './globals.css'