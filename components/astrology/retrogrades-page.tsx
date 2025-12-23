import React from "react"
import { Section } from "./base/Section"

export function RetrograduesPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark relative overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.55.36-OH0ZgAW19rboX2SnlgwGJQPEIY4gOj.png')`,
            }}
          />
          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif mb-10">RETROGRADES</h1>

            <div className="flex items-start mb-8">
              <div className="text-8xl font-serif text-gold mr-6 leading-none">A</div>
              <p className="canva-text-content text-left flex-1 pt-4">
                retrograde occurs when a planet appears to be moving backward in the sky due to the relative positions of the planet and Earth. Each planet's retrograde has unique implications, and when it happens in different zodiac signs, these effects are further colored by the characteristics of that sign.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
