import React from "react"
import { Section } from "./base/Section"

interface ModernAstrologyEvolutionProps {
  pageNumber: number
}

export function ModernAstrologyEvolution({ pageNumber }: ModernAstrologyEvolutionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-teal-50 to-cyan-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-8 tracking-[0.15em] font-serif text-teal-800">
            MODERN ASTROLOGY EVOLUTION
          </h1>
          <div className="text-sm text-teal-600 mb-8">
            How ancient wisdom adapts to contemporary understanding
          </div>
        </div>

        <div className="space-y-8 text-teal-900">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-teal-800">Psychological Astrology</h2>
            <p className="text-sm leading-relaxed">
              Pioneered by Carl Jung and developed by astrologers like Dane Rudhyar, psychological astrology 
              integrates depth psychology with astrological symbolism. This approach views the birth chart as 
              a map of the psyche, emphasizing personal growth, individuation, and self-awareness.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-teal-800">Evolutionary Astrology</h2>
            <p className="text-sm leading-relaxed">
              This modern approach, developed by Jeffrey Wolf Green and others, focuses on the soul's evolutionary 
              journey across lifetimes. It emphasizes the lunar nodes, Pluto, and other evolutionary indicators 
              to understand karmic patterns and spiritual development.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-teal-800">Archetypal Astrology</h2>
            <p className="text-sm leading-relaxed">
              Influenced by Jungian archetypal psychology, this approach sees planetary energies as universal 
              patterns or archetypes that manifest in human experience. It bridges mythology, psychology, 
              and astrology to create a rich symbolic framework for understanding human nature.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-teal-800">Digital Age Astrology</h2>
            <p className="text-sm leading-relaxed">
              Modern technology has revolutionized astrological practice through precise calculations, 
              digital ephemerides, and global accessibility. Apps, online consultations, and AI-assisted 
              interpretations make astrology more accessible while maintaining its essential wisdom.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}