
import React from "react"

type SectionProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Section({ children, className, style }: SectionProps) {
  return (
    <div
      className={["page-content", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  )
}

export default Section


