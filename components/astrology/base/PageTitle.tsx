import React from "react"

type PageTitleProps = {
  children: React.ReactNode
  align?: "center" | "left"
  size?: "xl" | "lg" | "md"
  tracking?: "tight" | "wide"
  className?: string
}

export function PageTitle({ children, align = "center", size = "xl", tracking = "wide", className }: PageTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left"
  const sizeClass = size === "xl" ? "text-5xl md:text-6xl" : size === "lg" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
  const trackingClass = tracking === "wide" ? "tracking-[0.16em]" : "tracking-wide"
  return (
    <h1 className={["heading-display", alignClass, sizeClass, trackingClass, className].filter(Boolean).join(" ")}>{children}</h1>
  )
}

export default PageTitle


