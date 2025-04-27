"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface OptionCardProps {
  selected?: boolean
  onClick: () => void
  children: ReactNode
  className?: string
  isMultiSelect?: boolean
}

export function OptionCard({ selected, onClick, children, className, isMultiSelect }: OptionCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  // Trigger animation when selected changes to true
  useEffect(() => {
    if (selected) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 400)
      return () => clearTimeout(timer)
    }
  }, [selected])

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-lg border text-left transition-all flex items-center",
        "hover:border-[#f7c800] focus:outline-none focus:ring-2 focus:ring-[#f7c800]",
        selected ? "border-[#f7c800] bg-[#f7c800]/10" : "border-[#8e909a]/30 bg-white",
        isMultiSelect && selected ? "bg-[#f7c800]/20" : "",
        isAnimating ? "option-selected" : "",
        className,
      )}
    >
      {isMultiSelect && (
        <div className={`mr-3 w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${
          selected ? 'bg-[#f7c800] border-[#f7c800] shadow-md' : 'border-gray-400'
        }`}>
          {selected && <span className="text-white text-xs">✓</span>}
        </div>
      )}
      {children}
    </button>
  )
}

