"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Tone = "teal" | "blue" | "amber" | "rose"

const toneClasses: Record<Tone, string> = {
  teal: "bg-emerald-50 text-emerald-700",
  blue: "bg-sky-50 text-sky-700",
  amber: "bg-amber-50 text-amber-700",
  rose: "bg-rose-50 text-rose-700",
}

interface StatTileProps {
  label: string
  value: string | number
  subLabel?: string
  icon?: ReactNode
  tone?: Tone
  className?: string
}

export function StatTile({
  label,
  value,
  subLabel,
  icon,
  tone = "teal",
  className,
}: StatTileProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm flex items-center gap-3",
        className
      )}
    >
      {icon && (
        <span
          className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold",
            toneClasses[tone]
          )}
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.08em] text-slate-400">{label}</span>
        <span className="text-lg font-semibold text-slate-900">{value}</span>
        {subLabel && <span className="text-xs text-slate-500">{subLabel}</span>}
      </div>
    </div>
  )
}
