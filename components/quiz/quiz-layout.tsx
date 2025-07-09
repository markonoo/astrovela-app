"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import AstrovelaIcon from "@/components/icons/AstrovelaIcon"
import { useQuiz } from "@/contexts/quiz-context"
import { DrawerMenu } from "@/components/drawer-menu"
import { HamburgerButton } from "@/components/hamburger-button"
import { ProgressBar } from "./progress-bar"
import { ResetButton } from "./reset-button"
import { Stars } from "./stars-background"
import type { ReactNode } from "react"

interface QuizLayoutProps {
  children: ReactNode
  showBackButton?: boolean
  className?: string
}

export default function QuizLayout({ children, showBackButton = true, className = "" }: QuizLayoutProps) {
  const { state, prevStep } = useQuiz()
  const { currentStep, totalSteps } = state

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  const isDark = className.includes("astro-theme-bg")

  return (
    <div className={`min-h-screen flex flex-col ${className} relative overflow-hidden`}>
      {isDark && <Stars />}
      <header className="relative py-1 md:py-2 border-b border-[#f7c800]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {showBackButton ? (
            <button onClick={prevStep} className="text-[#8f90a6] hover:text-[#28293d]" aria-label="Go back">
              <ArrowLeft size={20} />
            </button>
          ) : (
            <div className="w-5"></div>
          )}

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <span className="text-sm font-medium text-[#28293d]">astrovela</span>
            <AstrovelaIcon width={16} height={16} className="ml-1 text-[#f7c800]" />
          </div>

          <div className="flex items-center gap-4">
            <ResetButton />
            <HamburgerButton onClick={openDrawer} className="p-1" />
          </div>
        </div>

        <ProgressBar dark={isDark} />
      </header>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} />

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-2 md:py-4">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  )
}

