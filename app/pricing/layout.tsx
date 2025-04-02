import { QuizProvider } from "@/contexts/quiz-context"
import type React from "react"

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <QuizProvider>{children}</QuizProvider>
}

