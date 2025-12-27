"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AuraCardProps {
  title?: string
  eyebrow?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}

export function AuraCard({ title, eyebrow, action, children, className }: AuraCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm p-5",
        "transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {(eyebrow || title || action) && (
        <header className="mb-3 flex items-start justify-between gap-3">
          <div>
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.08em] text-slate-400 mb-1">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  )
}
