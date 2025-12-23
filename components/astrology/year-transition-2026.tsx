import React from "react"
import { Section } from "./base/Section"

interface YearTransition2026Props {
  pageNumber: number
}

export function YearTransition2026({ pageNumber }: YearTransition2026Props) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center relative p-8">
        {/* Cosmic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400/25 rounded-full blur-md animate-pulse"></div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/6 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-200 rounded-full animate-pulse"></div>
        </div>

        <div className="text-center z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              2026 APPROACHES
            </h1>
            
            <div className="w-40 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto"></div>
            
            <p className="text-2xl italic text-purple-200 font-light max-w-3xl mx-auto leading-relaxed">
              "As one cosmic chapter closes, another begins to unfold,<br/>
              written in starlight and guided by ancient wisdom."
            </p>
            
            <div className="space-y-6 text-lg text-purple-100 max-w-4xl mx-auto">
              <p className="leading-relaxed">
                The year 2025 has been a journey of profound transformation,
                teaching us lessons of resilience, growth, and cosmic alignment.
                Now, as we stand at the threshold of 2026, the universe
                prepares to reveal new chapters of our celestial story.
              </p>
              
              <p className="leading-relaxed">
                The planetary energies shift into new configurations,
                offering fresh opportunities for manifestation, healing,
                and spiritual evolution. Jupiter's expansion meets Saturn's
                wisdom, while the outer planets continue their slow dance
                of transformation.
              </p>
              
              <p className="leading-relaxed text-base">
                Prepare to embrace the cosmic currents of 2026,
                where destiny and free will converge in perfect harmony.
              </p>
            </div>
          </div>

          {/* Year Elements */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-4xl text-blue-300 opacity-80">2025</div>
            <div className="text-3xl text-purple-300">→</div>
            <div className="text-5xl text-pink-300 font-light">2026</div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-8 h-px bg-blue-400 opacity-60"></div>
            <div className="text-2xl text-purple-300">✨</div>
            <div className="w-8 h-px bg-purple-400 opacity-60"></div>
            <div className="text-2xl text-pink-300">🌌</div>
            <div className="w-8 h-px bg-pink-400 opacity-60"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}