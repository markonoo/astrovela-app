"use client"

import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

interface HamburgerButtonProps {
  onClick: () => void
  className?: string
}

export function HamburgerButton({ onClick, className = "" }: HamburgerButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    if (!isMounted) return // Prevent action before client-side mounting
    onClick()
  }

  return (
    <button
      className={`text-[#28293d] p-2 rounded-full transition-all duration-300 ${
        isHovered ? "bg-gray-200/70 scale-105" : "hover:bg-gray-200/50"
      } ${className} ${!isMounted ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => isMounted && setIsHovered(true)}
      onMouseLeave={() => isMounted && setIsHovered(false)}
      aria-label="Open menu"
      disabled={!isMounted}
    >
      <Menu size={24} className={`transition-transform duration-300 ${isHovered && isMounted ? "rotate-90" : ""}`} />
    </button>
  )
}

