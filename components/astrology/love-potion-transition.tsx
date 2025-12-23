import React from "react"
import { Section } from "./base/Section"

interface LovePotionTransitionProps {
  pageNumber: number
}

export function LovePotionTransition({ pageNumber }: LovePotionTransitionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-light flex flex-col justify-center items-center text-center relative">
        {/* Background decorative elements - increased by 140% */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-[112px] h-[112px] bg-rose-300 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-16 w-[90px] h-[90px] bg-pink-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-20 w-[134px] h-[134px] bg-purple-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-12 w-[101px] h-[101px] bg-rose-400 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10">
          {/* Main title with decorative elements */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="mx-4 text-2xl">💕</div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl font-light mb-6 tracking-[0.15em] font-serif text-rose-800 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              LOVE & RELATIONSHIPS
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-rose-400"></div>
              <div className="mx-3 text-rose-500">✨</div>
              <div className="w-12 h-px bg-rose-400"></div>
            </div>
          </div>

          {/* Mystical quote */}
          <div className="max-w-md mx-auto mb-8">
            <p className="text-lg font-light italic text-rose-700 leading-relaxed">
              "The universe conspires to bring souls together through the ancient dance of celestial bodies and earthly hearts."
            </p>
          </div>

          {/* Decorative symbols */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-2xl text-rose-400">
            <div className="transform rotate-12">🌙</div>
            <div className="transform -rotate-12">💎</div>
            <div className="transform rotate-12">🌹</div>
            <div className="transform -rotate-12">⭐</div>
          </div>

          {/* Subtitle */}
          <div className="max-w-lg mx-auto">
            <p className="text-sm text-rose-600 leading-relaxed font-light">
              Discover the mystical arts of attraction, the cosmic timing of love, 
              and the sacred practices that harmonize hearts across time and space.
            </p>
          </div>

          {/* Bottom decorative border */}
          <div className="mt-12 flex items-center justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <div className="mx-4 text-rose-400">♡</div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}