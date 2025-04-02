"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1">{title}</span>
        <div className="w-8 h-8 rounded-full border border-yellow-400 flex items-center justify-center flex-shrink-0">
          <Plus className="h-4 w-4 text-yellow-400" />
        </div>
      </button>
      {isOpen && <div className="pb-4 px-4">{children}</div>}
    </div>
  )
}

