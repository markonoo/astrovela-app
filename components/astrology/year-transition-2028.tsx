import React from "react"
import { Section } from "./base/Section"

interface YearTransition2028Props {
  pageNumber: number
}

export function YearTransition2028({ pageNumber }: YearTransition2028Props) {
  return (
    <div className="h-full bg-gradient-to-br from-gold-900 via-orange-900 to-red-900 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-dark flex flex-col justify-center items-center relative p-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gold-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-orange-400/25 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-red-400/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        <div className="text-center z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-orange-300 to-red-300">
              2028 ASCENDS
            </h1>
            
            <div className="w-40 h-px bg-gradient-to-r from-gold-400 via-orange-400 to-red-400 mx-auto"></div>
            
            <p className="text-2xl italic text-orange-200 font-light max-w-3xl mx-auto leading-relaxed">
              "The cosmic wheel completes another sacred turn,<br/>
              bringing mastery, wisdom, and radiant transformation."
            </p>
            
            <div className="space-y-6 text-lg text-orange-100 max-w-4xl mx-auto">
              <p className="leading-relaxed">
                2028 arrives as the culmination of a profound astrological cycle,
                where Jupiter moves into Leo, igniting creative fire and leadership
                mastery. This year represents the flowering of seeds planted in
                previous cosmic seasons.
              </p>
              
              <p className="leading-relaxed">
                The celestial energies align to support bold creative expression,
                confident leadership, and the generous sharing of accumulated
                wisdom with the world. This is your year to shine authentically.
              </p>
              
              <p className="leading-relaxed text-base">
                Welcome 2028 as a year of magnificent creative culmination
                and inspiring leadership on the world stage.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-4xl text-gold-300 opacity-80">2027</div>
            <div className="text-3xl text-orange-300">→</div>
            <div className="text-5xl text-red-300 font-light">2028</div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-8 h-px bg-gold-400 opacity-60"></div>
            <div className="text-2xl text-orange-300">✨</div>
            <div className="w-8 h-px bg-orange-400 opacity-60"></div>
            <div className="text-2xl text-red-300">🌟</div>
            <div className="w-8 h-px bg-red-400 opacity-60"></div>
          </div>
        </div>
      </Section>
    </div>
  )
}