import React from "react"
import { Section } from "./base/Section"

interface CosmicCoupleTransitionProps {
  pageNumber: number
}

export function CosmicCoupleTransition({ pageNumber }: CosmicCoupleTransitionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center relative p-8">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute bottom-1/3 right-2/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        </div>

        <div className="text-center z-10 space-y-8">
          {/* Cosmic Symbols */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-6xl text-pink-300 opacity-80">♀</div>
            <div className="text-4xl text-purple-300">💫</div>
            <div className="text-6xl text-indigo-300 opacity-80">♂</div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              COSMIC UNIONS
            </h1>
            
            <div className="w-32 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto"></div>
            
            <p className="text-2xl italic text-purple-200 font-light max-w-2xl mx-auto leading-relaxed">
              "In the vast cosmos, two souls find their celestial dance,<br/>
              bound by stardust and eternal romance."
            </p>
            
            <div className="space-y-4 text-lg text-purple-100 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                As we transition into the mystical realm of cosmic relationships,
                we explore how the universe orchestrates divine connections
                between souls across time and space.
              </p>
              
              <p className="leading-relaxed">
                Every love story is written in the stars, every partnership
                guided by celestial forces, every union blessed by the
                infinite wisdom of the cosmos.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-8 h-px bg-pink-400 opacity-60"></div>
            <div className="text-2xl text-purple-300">✨</div>
            <div className="w-8 h-px bg-purple-400 opacity-60"></div>
            <div className="text-2xl text-indigo-300">🌟</div>
            <div className="w-8 h-px bg-indigo-400 opacity-60"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}