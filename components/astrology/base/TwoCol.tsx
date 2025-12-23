import React from "react"

type TwoColProps = {
  left: React.ReactNode
  right: React.ReactNode
  gap?: string
  className?: string
}

export function TwoCol({ left, right, gap = "gap-12", className }: TwoColProps) {
  return (
    <div className={["grid grid-cols-1 md:grid-cols-2", gap, className].filter(Boolean).join(" ")}> 
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export default TwoCol


