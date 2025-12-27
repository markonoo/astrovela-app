import React from "react"
import { Section } from "./base/Section"

interface AstrologerLexiconIntroProps {
  pageNumber: number
}

export function AstrologerLexiconIntro({ pageNumber }: AstrologerLexiconIntroProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-6">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-4xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              THE ASTROLOGER'S LEXICON
            </h1>
            <div className="w-32 h-px bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl italic text-indigo-600 font-light mb-8">
              "A Sacred Glossary of Celestial Wisdom"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="bg-white/60 p-6 rounded-lg border border-indigo-200">
              <h2 className="text-lg font-medium mb-4 text-indigo-700">Welcome to the Cosmic Dictionary</h2>
              <p className="mb-4">
                Within these pages lies the sacred vocabulary of astrology—a collection of terms,
                concepts, and cosmic principles that have guided seekers and sages for millennia.
                Each word is a key that unlocks deeper understanding of the celestial sciences.
              </p>
              <p>
                From ancient Babylonian star-watchers to modern cosmic counselors, these terms
                form the foundation of astrological knowledge, connecting us to the wisdom
                of those who first mapped the heavens.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-purple-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-purple-700">Planetary Terms</h3>
                <p>Discover the meanings behind planetary positions, aspects, and influences that shape our cosmic blueprint.</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-700">House Systems</h3>
                <p>Explore the twelve houses and their significance in mapping life's various domains and experiences.</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-indigo-700">Sign Qualities</h3>
                <p>Understand the elemental forces and modal energies that define each zodiacal archetype.</p>
              </div>
              <div className="bg-violet-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-violet-700">Technical Terms</h3>
                <p>Master the precise language used by professional astrologers in chart interpretation and analysis.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-300">
              <h3 className="font-medium mb-3 text-indigo-700">How to Use This Lexicon</h3>
              <div className="space-y-2 text-xs">
                <p><strong>Alphabetical Organization:</strong> Terms are arranged for easy reference and study</p>
                <p><strong>Cross-References:</strong> Related concepts are linked to deepen understanding</p>
                <p><strong>Practical Applications:</strong> Each definition includes relevance to chart reading</p>
                <p><strong>Historical Context:</strong> Etymology and evolution of astrological terminology</p>
              </div>
            </div>

            <div className="text-center bg-white/60 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium mb-2 text-purple-700">A Note on Sacred Language</h3>
              <p className="text-xs italic">
                "The language of astrology is the language of the soul's journey through time and space.
                Each term carries within it the crystallized wisdom of countless generations of star-gazers
                who sought to understand humanity's place in the cosmic order."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <div className="text-2xl mb-2">☿</div>
                <strong>Mercury</strong><br/>
                Communication & Mind
              </div>
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <div className="text-2xl mb-2">♀</div>
                <strong>Venus</strong><br/>
                Love & Beauty
              </div>
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <div className="text-2xl mb-2">♃</div>
                <strong>Jupiter</strong><br/>
                Expansion & Wisdom
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}