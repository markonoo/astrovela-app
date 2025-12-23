import React from "react"
import { Section } from "./base/Section"

interface StarryIntroductionProps {
  pageNumber: number
}

export function StarryIntroduction({ pageNumber }: StarryIntroductionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        {/* Starry Background */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}
            className="absolute text-white opacity-80"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
          >
            ✦
          </div>
        ))}

        <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
          {/* Cosmic Symbol */}
          <div className="mb-8">
            <div className="w-24 h-24 border-2 border-indigo-300 rounded-full flex items-center justify-center relative">
              <div className="text-indigo-300 text-4xl">☉</div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-indigo-200">
            THE STARRY WISDOM
          </h1>
          
          <div className="w-32 h-0.5 bg-indigo-300 mb-8"></div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-lg leading-relaxed text-indigo-100">
              Since the dawn of civilization, humans have looked to the stars for guidance, wisdom, and understanding. 
              The celestial dance above us mirrors the patterns and rhythms of life below.
            </p>

            <p className="text-sm leading-relaxed text-indigo-200">
              Each star, each planet, each cosmic event carries ancient knowledge that has been passed down through 
              generations of stargazers, mystics, and astrologers. This wisdom remains as relevant today as it was 
              thousands of years ago.
            </p>

            <p className="text-sm leading-relaxed text-indigo-200">
              As we journey through this cosmic guide, remember that the stars do not compel, but rather reveal 
              the potential paths and energies available to us. The choice of how to use this wisdom remains 
              entirely in your hands.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <div className="w-16 h-0.5 bg-indigo-300"></div>
            <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
            <div className="w-16 h-0.5 bg-indigo-300"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}