"use client"
import React from "react"

import { pageRegistry } from "./page-registry"

export default function OutlineNav() {
  const [active, setActive] = React.useState<string>(pageRegistry[0]?.id ?? "")

  React.useEffect(() => {
    const observers: IntersectionObserver[] = []
    pageRegistry.forEach(entry => {
      const el = document.getElementById(entry.id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) setActive(entry.id)
          })
        },
        { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0.0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="hidden print:hidden md:block fixed left-4 top-20 z-30">
      <div className="rounded-md border bg-card/70 backdrop-blur p-2 space-y-1 flex-1 w-56 max-h-[70vh] overflow-auto">
        {pageRegistry.map(p => (
          <a key={p.id} href={`#${p.id}`} className={`block px-2 py-1 rounded text-sm text-gray-900 ${active === p.id ? "bg-primary/15 text-primary" : "hover:bg-accent/30"}`}>
            <span className="mr-2 text-gray-600">{p.pageNumber.toString().padStart(2, "0")}</span>
            {p.title}
          </a>
        ))}
      </div>
    </nav>
  )
}


