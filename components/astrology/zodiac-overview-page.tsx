import React from "react"
import { ZodiacIcon, type ZodiacSign } from "../ui/zodiac-icon"
import { Section } from "./base/Section"

interface ZodiacOverviewPageProps {
  title: string
  sections: {
    individuality: string
    selfExpression: string
    motivation: string
    lifeExperience: string
  }
  pageNumber: number
}

export function ZodiacOverviewPage({ title, sections, pageNumber }: ZodiacOverviewPageProps) {
  // Get zodiac sign based on title
  const getZodiacSign = (signName: string): ZodiacSign => {
    const signMap: { [key: string]: ZodiacSign } = {
      'ARIES': 'aries', 'TAURUS': 'taurus', 'GEMINI': 'gemini', 'CANCER': 'cancer',
      'LEO': 'leo', 'VIRGO': 'virgo', 'LIBRA': 'libra', 'SCORPIO': 'scorpio',
      'SAGITTARIUS': 'sagittarius', 'CAPRICORN': 'capricorn', 'AQUARIUS': 'aquarius', 'PISCES': 'pisces'
    }
    return signMap[signName.toUpperCase()] || 'libra'
  }

  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col flex-1 relative">
      {/* Custom elegant layout */}
      <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full px-6 py-8">
        
        {/* Header with zodiac symbol placeholder */}
        <div className="text-center mb-8">
          {/* Zodiac Symbol Placeholder */}
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto border-4 border-amber-600 rounded-full flex items-center justify-center bg-white/80 shadow-lg">
              <ZodiacIcon sign={getZodiacSign(title)} size={64} className="text-amber-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-[0.15em] font-serif text-amber-800">
            {title}
          </h1>
          <div className="text-base text-amber-600 italic font-light">
            Zodiac Sign Overview
          </div>
        </div>

        {/* Content sections in elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-amber-900">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <h2 className="text-xl font-semibold mb-4 text-amber-800 border-b border-amber-200 pb-2">Individuality</h2>
              <p className="text-sm leading-relaxed text-amber-900">
                {sections.individuality}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <h2 className="text-xl font-semibold mb-4 text-amber-800 border-b border-amber-200 pb-2">Motivation</h2>
              <p className="text-sm leading-relaxed text-amber-900">
                {sections.motivation}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <h2 className="text-xl font-semibold mb-4 text-amber-800 border-b border-amber-200 pb-2">Self Expression</h2>
              <p className="text-sm leading-relaxed text-amber-900">
                {sections.selfExpression}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <h2 className="text-xl font-semibold mb-4 text-amber-800 border-b border-amber-200 pb-2">Life Experience</h2>
              <p className="text-sm leading-relaxed text-amber-900">
                {sections.lifeExperience}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center items-center mt-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-0.5 bg-amber-400"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}