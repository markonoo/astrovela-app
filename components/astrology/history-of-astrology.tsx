import React from "react"
import { Section } from "./base/Section"

interface HistoryOfAstrologyProps {
  pageNumber: number
}

export function HistoryOfAstrology({ pageNumber }: HistoryOfAstrologyProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-8 tracking-[0.15em] font-serif text-amber-800">
            HISTORY OF ASTROLOGY
          </h1>
          <div className="text-sm text-amber-600 mb-8">
            The ancient origins and evolution of astrological wisdom
          </div>
        </div>

        <div className="space-y-8 text-amber-900">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Ancient Beginnings</h2>
            <p className="text-sm leading-relaxed">
              Astrology's roots stretch back over 4,000 years to ancient Mesopotamia, where Babylonian astronomers first 
              began mapping the movements of celestial bodies. They observed that certain planetary positions coincided 
              with earthly events, laying the foundation for astrological interpretation.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Greek Influence</h2>
            <p className="text-sm leading-relaxed">
              The Greeks refined Babylonian astrology, introducing the concept of the zodiac as we know it today. 
              Ptolemy's "Tetrabiblos" became one of the most influential astrological texts, establishing many 
              principles still used by modern astrologers.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Renaissance Revival</h2>
            <p className="text-sm leading-relaxed">
              After centuries of decline during the Middle Ages, astrology experienced a renaissance during the 
              15th and 16th centuries. Scholars like Johannes Kepler, who was both an astronomer and astrologer, 
              helped bridge the gap between scientific observation and astrological interpretation.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Modern Astrology</h2>
            <p className="text-sm leading-relaxed">
              The 20th century saw astrology evolve into a more psychological tool for self-understanding. 
              Pioneers like Carl Jung incorporated astrological concepts into psychology, while modern astrologers 
              focus on personal growth and self-awareness rather than prediction alone.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}