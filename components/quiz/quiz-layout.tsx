"use client"

import { useState } from "react"
import { ArrowLeft, Star } from "lucide-react"
import { useQuiz } from "@/contexts/quiz-context"
import { DrawerMenu } from "@/components/drawer-menu"
import { HamburgerButton } from "@/components/hamburger-button"
import { ProgressBar } from "./progress-bar"
import { ResetButton } from "./reset-button"
import type { ReactNode } from "react"

interface QuizLayoutProps {
  children: ReactNode
  showBackButton?: boolean
}

export default function QuizLayout({ children, showBackButton = true }: QuizLayoutProps) {
  const { state, prevStep } = useQuiz()
  const { currentStep, totalSteps } = state

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <header className="relative py-4 border-b border-[#f7c800]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {showBackButton ? (
            <button onClick={prevStep} className="text-[#8f90a6] hover:text-[#28293d]" aria-label="Go back">
              <ArrowLeft size={20} />
            </button>
          ) : (
            <div className="w-5"></div>
          )}

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <span className="text-sm font-medium text-[#28293d]">astronova</span>
            <Star size={16} className="ml-1 text-[#f7c800]" fill="#f7c800" />
          </div>

          <div className="flex items-center gap-4">
            <ResetButton />
            <HamburgerButton onClick={openDrawer} className="p-1" />
          </div>
        </div>

        <ProgressBar />
      </header>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  )
}

