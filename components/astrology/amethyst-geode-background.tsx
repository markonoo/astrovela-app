import React from "react"
import { Section } from "./base/Section"

export function AmethystGeodeBackground({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black flex flex-col flex-1">
      <Section className="page-dark relative overflow-hidden">
      {/* Amethyst geode background */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2019.21.03-rzbiv6hVm5mVJ343IX82Le6onGlQ6q.png')`,
        }}
      >
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      </Section>
    </div>
  )
}
