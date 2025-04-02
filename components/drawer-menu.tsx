"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, Star, Facebook, Instagram, BookCopy } from "lucide-react"

// Import the shared navigation links
import { navigationLinks } from "@/utils/navigation"

interface DrawerMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-[#28293d] font-medium">nordastro</span>
            <Star size={16} className="ml-1 text-[#f7c800]" fill="#f7c800" />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-[#28293d]" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="p-4">
          <nav className="space-y-6">
            {/* Main navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#8f90a6] uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-3">
                {/* Add Get Your Book link */}
                <li>
                  <Link
                    href="/example-book"
                    className="flex items-center py-2 text-[#28293d] hover:text-[#f7c800] transition-colors"
                    onClick={onClose}
                  >
                    <BookCopy className="h-5 w-5 mr-3 text-[#f7c800]" />
                    <span>Get Your Book</span>
                  </Link>
                </li>

                {/* Regular navigation links */}
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="block py-2 text-[#28293d] hover:text-[#f7c800] transition-colors"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#8f90a6] uppercase tracking-wider">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#28293d] flex items-center justify-center">
                    <Facebook size={20} className="text-white" />
                  </div>
                </Link>
                <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#28293d] flex items-center justify-center">
                    <Instagram size={20} className="text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Drawer footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 text-center">
          <p className="text-xs text-[#8f90a6]">© 2025 Nordastro. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

