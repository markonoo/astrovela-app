import React from "react"
import { Section } from "./base/Section"

export function PlanetsIntroduction({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1">
      <Section className="page-dark relative overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-23%20at%2017.54.43-IAv1Fos7baxJVOLq707lEVArEckoMz.png')`,
            }}
          />
          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif mb-10">
              THE<br />PLANETS
            </h1>

            <div className="flex items-start mb-8">
              <div className="text-8xl font-serif text-gold mr-6 leading-none">A</div>
              <p className="canva-text-content text-left flex-1 pt-4">
                strology has long fascinated humanity with its promise of insight and understanding into our lives, personalities, and futures. Planets in astrology are considered the primary symbols through which cosmic energies manifest in our lives. The movements and positions of the planets at the time of our birth are believed to shape our character, emotions, and life paths.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
