"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PillBadgeProps {
  children: ReactNode
  tone?: "teal" | "blue" | "amber" | "gray"
  className?: string
}

const toneStyles = {
  teal: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  blue: "bg-sky-50 text-sky-700 border border-sky-100",
  amber: "bg-amber-50 text-amber-700 border border-amber-100",
  gray: "bg-slate-100 text-slate-600 border border-slate-200",
}

export function PillBadge({ children, tone = "gray", className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  )
}
