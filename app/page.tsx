"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { InfiniteScrollGrid } from "@/components/infinite-scroll-grid"
import { DrawerMenu } from "@/components/drawer-menu"
import { HamburgerButton } from "@/components/hamburger-button"
import { LandingGenderButtons } from "@/components/landing-gender-buttons"
import { Footer } from "@/components/shared/footer"

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#28293d] font-medium">astronova</span>
          <Star size={16} className="ml-1 text-[#f7c800]" fill="#f7c800" />
        </div>
        <HamburgerButton onClick={openDrawer} />
      </header>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} />

      {/* Main content - Optimized for mobile and desktop */}
      <main className="container mx-auto px-4">
        {/* Flex container with column direction on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* 
            Image grid - First on mobile (order-1), second on desktop (md:order-2)
            Full width on mobile, half width on desktop
          */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden order-1 md:order-2 mb-8 md:mb-0">
            <InfiniteScrollGrid />
          </div>

          {/* 
            Text content - Second on mobile (order-2), first on desktop (md:order-1)
            Full width on mobile, half width on desktop
          */}
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#28293d] leading-tight">
              A revolutionary astrology book written just for you
            </h1>
            <p className="text-lg text-[#4d4d4d]">
              Take a 1-minute quiz to get your unique birth chart reading for self-growth, better relationships, life
              path, and career goals.
            </p>

            <div className="pt-4">
              {/* Use the original button design with the quiz logic */}
              <LandingGenderButtons />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

