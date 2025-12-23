import React from "react"
import { Section } from "./base/Section"

interface YearTransition2027Props {
  pageNumber: number
}

export function YearTransition2027({ pageNumber }: YearTransition2027Props) {
  return (
    <div className="h-full bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center relative p-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-blue-400/25 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-400/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-teal-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse"></div>
        </div>

        <div className="text-center z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300">
              2027 AWAKENS
            </h1>
            
            <div className="w-40 h-px bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 mx-auto"></div>
            
            <p className="text-2xl italic text-blue-200 font-light max-w-3xl mx-auto leading-relaxed">
              "The spiral of time continues its celestial dance,<br/>
              bringing deeper wisdom and expanded consciousness."
            </p>
            
            <div className="space-y-6 text-lg text-blue-100 max-w-4xl mx-auto">
              <p className="leading-relaxed">
                As 2026's lessons integrate into our being, 2027 emerges
                as a year of profound spiritual maturation and cosmic
                alignment. The planets shift into new formations,
                creating unprecedented opportunities for growth.
              </p>
              
              <p className="leading-relaxed">
                This year brings Jupiter's movement into Cancer,
                emphasizing home, family, and emotional intelligence,
                while the outer planets continue their transformative
                work in reshaping our collective consciousness.
              </p>
              
              <p className="leading-relaxed text-base">
                Step forward into 2027 with courage and wisdom,
                ready to embrace your highest cosmic potential.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-4xl text-teal-300 opacity-80">2026</div>
            <div className="text-3xl text-blue-300">→</div>
            <div className="text-5xl text-purple-300 font-light">2027</div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-8 h-px bg-teal-400 opacity-60"></div>
            <div className="text-2xl text-blue-300">✨</div>
            <div className="w-8 h-px bg-blue-400 opacity-60"></div>
            <div className="text-2xl text-purple-300">🌌</div>
            <div className="w-8 h-px bg-purple-400 opacity-60"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}