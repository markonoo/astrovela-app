"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import { HamburgerButton } from "@/components/hamburger-button"
import { DrawerMenu } from "@/components/drawer-menu"

interface PageHeaderProps {
  transparent?: boolean
}

export function PageHeader({ transparent = false }: PageHeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = `sticky top-0 z-50 transition-all duration-300 ${
    isScrolled || !transparent ? "bg-white shadow-sm" : "bg-transparent"
  }`

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-medium text-[#28293d]">astronova</span>
          <Star size={16} className="ml-1 text-[#f7c800]" fill="#f7c800" />
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/quiz"
            className="px-6 py-2 bg-[#f7c800] rounded-full text-[#28293d] font-medium hover:opacity-90 transition-opacity"
          >
            Take Test
          </Link>
          <HamburgerButton onClick={openDrawer} />
        </div>
      </div>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={closeDrawer} />
    </header>
  )
}

