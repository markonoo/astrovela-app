import React from "react"
import { Section } from "./base/Section"

interface GuideSectionDividerProps {
  pageNumber: number
}

export function GuideSectionDivider({ pageNumber }: GuideSectionDividerProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-900 to-orange-900 text-white flex flex-col flex-1 relative">
      <Section className="page-dark relative overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute top-12 left-20 text-amber-400 text-lg">✦</div>
        <div className="absolute top-24 right-28 text-amber-300 text-xl">✧</div>
        <div className="absolute bottom-36 left-24 text-amber-400 text-lg">✦</div>
        <div className="absolute bottom-24 right-36 text-amber-300 text-xl">✧</div>
        <div className="absolute top-36 right-44 text-amber-400 text-sm">✦</div>
        <div className="absolute bottom-44 left-44 text-amber-300 text-lg">✧</div>

        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Main Decorative Element */}
          <div className="mb-8">
            <div className="w-32 h-32 border-2 border-amber-300 rounded-full flex items-center justify-center relative">
              <div className="text-amber-300 text-6xl">✨</div>
              {/* Radiating lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i}
                  className="absolute w-0.5 h-8 bg-amber-300 origin-bottom"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-3rem)`,
                  }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-amber-100">
            ASTROLOGY
          </h1>
          
          <div className="w-24 h-0.5 bg-amber-300 mb-6"></div>
          
          <h2 className="text-xl md:text-2xl font-light mb-8 tracking-[0.15em] font-serif text-amber-200">
            Ancient Wisdom for Modern Times
          </h2>

          <p className="text-sm text-amber-100 max-w-2xl leading-relaxed">
            Journey deeper into the celestial mysteries that have guided humanity for millennia. 
            Discover the profound connections between the cosmos and your personal path.
          </p>

          {/* Bottom Decorative Elements */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <div className="w-16 h-0.5 bg-amber-300"></div>
            <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-300"></div>
          </div>
        </div>

      </Section>
    </div>
  )
}