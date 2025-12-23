import React from "react"
import { Section } from "./base/Section"

interface CosmicNebulaTransitionProps {
  pageNumber: number
}

export function CosmicNebulaTransition({ pageNumber }: CosmicNebulaTransitionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center relative p-8">
        {/* Nebula Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/30 to-pink-500/20 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400/20 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/6 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-200 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/6 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="text-center z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              NEBULA OF WISDOM
            </h1>
            
            <div className="w-40 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto"></div>
            
            <p className="text-2xl italic text-purple-200 font-light max-w-3xl mx-auto leading-relaxed">
              "Within the cosmic nebula of ancient knowledge,<br/>
              the secrets of the universe unfold like celestial flowers."
            </p>
            
            <div className="space-y-6 text-lg text-purple-100 max-w-4xl mx-auto">
              <p className="leading-relaxed">
                We journey now through the swirling mists of cosmic wisdom,
                where starlight carries the whispers of ancient astrologers
                and the very fabric of space holds the keys to understanding.
              </p>
              
              <p className="leading-relaxed">
                In this ethereal realm, words become constellations,
                definitions transform into guiding stars, and knowledge
                flows like cosmic winds through the infinite expanse.
              </p>
              
              <p className="leading-relaxed text-base">
                Prepare to explore the astrologer's sacred lexicon,
                where each term is a doorway to deeper cosmic understanding.
              </p>
            </div>
          </div>

          {/* Cosmic Symbols */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <div className="text-3xl text-blue-300 opacity-80">🌌</div>
            <div className="text-3xl text-purple-300">✨</div>
            <div className="text-3xl text-pink-300 opacity-80">🔮</div>
          </div>

          {/* Decorative Border */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            <div className="w-6 h-px bg-blue-400 opacity-60"></div>
            <div className="text-lg text-purple-300">★</div>
            <div className="w-6 h-px bg-purple-400 opacity-60"></div>
            <div className="text-lg text-pink-300">☆</div>
            <div className="w-6 h-px bg-pink-400 opacity-60"></div>
          </div>
        </div>

      </Section>
    </div>
  )
}