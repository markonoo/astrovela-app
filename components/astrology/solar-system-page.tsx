import React from "react"
import { Section } from "./base/Section"

export function SolarSystemPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark relative overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.54.36-MEbhcBVFaFW9VDmjfSG34yLSdpbhjz.png')`,
            }}
          />
          <div className="relative z-10 text-center">
            <h1 className="canva-title text-4xl mb-4">THE SOLAR SYSTEM</h1>
            <p className="canva-text-content">Our cosmic neighborhood</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
