"use client"

import { useState } from "react"
import AstrovelaIcon from "@/components/icons/AstrovelaIcon"
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
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#28293d] font-medium">astrovela</span>
          <AstrovelaIcon width={20} height={20} className="ml-1" />
        </div>
        <HamburgerButton onClick={openDrawer} />
      </header>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} />

      {/* Main content - Optimized for mobile and desktop */}
      <main className="container mx-auto px-4 pb-4 md:pb-8">
        {/* Flex container with column direction on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* 
            Image grid - First on mobile (order-1), second on desktop (md:order-2)
            Optimized height for mobile: smaller on mobile, larger on desktop
          */}
          <div className="w-full md:w-1/2 h-[260px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden order-1 md:order-2 mb-4 md:mb-0">
            <InfiniteScrollGrid />
          </div>

          {/* 
            Text content - Second on mobile (order-2), first on desktop (md:order-1)
            Full width on mobile, half width on desktop
            Vertically centered to align with image grid
          */}
          <div className="w-full md:w-1/2 md:h-[500px] lg:h-[600px] xl:h-[700px] flex flex-col justify-center space-y-4 md:space-y-6 order-2 md:order-1 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#28293d] leading-tight">
              A revolutionary astrology book written just for you
            </h1>
            <p className="text-base sm:text-lg text-[#4d4d4d]">
              Take a 1-minute quiz to get your unique birth chart reading for self-growth, better relationships, life
              path, and career goals.
            </p>

            <div className="pt-2 md:pt-4">
              {/* Use the original button design with the quiz logic */}
              <LandingGenderButtons />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

