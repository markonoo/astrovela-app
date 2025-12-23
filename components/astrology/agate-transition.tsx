import React from "react"
import { Section } from "./base/Section"

interface AgateTransitionProps {
  pageNumber: number
}

export function AgateTransition({ pageNumber }: AgateTransitionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-gray-800 via-gray-700 to-brown-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center text-center relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-brown-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-16 w-28 h-28 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 text-amber-100">
          {/* Main title with decorative elements */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div className="mx-6 text-3xl">🔮</div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl font-light mb-6 tracking-[0.15em] font-serif text-amber-200 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              PALMISTRY
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-amber-400"></div>
              <div className="mx-4 text-amber-400">✋</div>
              <div className="w-16 h-px bg-amber-400"></div>
            </div>
          </div>

          {/* Mystical quote */}
          <div className="max-w-lg mx-auto mb-8">
            <p className="text-xl font-light italic text-amber-200 leading-relaxed">
              "In the lines of your palm lies the map of your soul's journey through time and destiny."
            </p>
          </div>

          {/* Decorative symbols */}
          <div className="flex justify-center items-center space-x-12 mb-8 text-2xl text-amber-300">
            <div className="transform rotate-12">📿</div>
            <div className="transform -rotate-12">🌟</div>
            <div className="transform rotate-12">🔍</div>
            <div className="transform -rotate-12">✨</div>
          </div>

          {/* Subtitle */}
          <div className="max-w-xl mx-auto">
            <p className="text-sm text-amber-300 leading-relaxed font-light">
              Discover the ancient art of reading hands, where each line tells a story, 
              every mount reveals character, and the palm becomes a sacred text of your life's purpose.
            </p>
          </div>

          {/* Bottom decorative border */}
          <div className="mt-12 flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="mx-6 text-amber-400">♦</div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}