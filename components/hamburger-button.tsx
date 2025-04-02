"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

interface HamburgerButtonProps {
  onClick: () => void
  className?: string
}

export function HamburgerButton({ onClick, className = "" }: HamburgerButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`text-[#28293d] p-2 rounded-full transition-all duration-300 ${
        isHovered ? "bg-gray-200/70 scale-105" : "hover:bg-gray-200/50"
      } ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Open menu"
    >
      <Menu size={24} className={`transition-transform duration-300 ${isHovered ? "rotate-90" : ""}`} />
    </button>
  )
}

