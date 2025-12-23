import React from "react"
import { Section } from "./base/Section"

interface AstrologicalTraditionsProps {
  pageNumber: number
}

export function AstrologicalTraditions({ pageNumber }: AstrologicalTraditionsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-yellow-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-8 tracking-[0.15em] font-serif text-amber-800">
            ASTROLOGICAL TRADITIONS
          </h1>
          <div className="text-sm text-amber-600 mb-8">
            Ancient wisdom across cultures and civilizations
          </div>
        </div>

        <div className="space-y-8 text-amber-900">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Vedic Astrology (Jyotish)</h2>
            <p className="text-sm leading-relaxed">
              Originating in ancient India over 5,000 years ago, Vedic astrology emphasizes the sidereal zodiac 
              and focuses on karma, dharma, and spiritual evolution. This tradition uses detailed planetary 
              periods (dashas) and intricate divisional charts to provide profound insights into life's purpose.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Western Astrology</h2>
            <p className="text-sm leading-relaxed">
              Rooted in Hellenistic traditions and refined through Roman and Arab scholarship, Western astrology 
              uses the tropical zodiac and emphasizes psychological interpretation. Modern Western astrology 
              focuses on personality analysis, relationship dynamics, and personal growth.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Chinese Astrology</h2>
            <p className="text-sm leading-relaxed">
              Based on a 12-year cycle of animal signs and the five elements, Chinese astrology integrates 
              concepts from Taoism and the I Ching. This system emphasizes balance, harmony, and the 
              cyclical nature of time, offering insights into character, compatibility, and fortune.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-amber-800">Mayan Astrology</h2>
            <p className="text-sm leading-relaxed">
              The sophisticated Mayan calendar system incorporates multiple cycles and glyphs to create 
              a complex astrological framework. This tradition emphasizes the connection between cosmic 
              cycles and human consciousness, spiritual evolution, and collective transformation.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}