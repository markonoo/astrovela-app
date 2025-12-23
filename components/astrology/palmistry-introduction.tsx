import React from "react"
import { Section } from "./base/Section"

interface PalmistryIntroductionProps {
  pageNumber: number
}

export function PalmistryIntroduction({ pageNumber }: PalmistryIntroductionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-[0.15em] font-serif text-amber-800">
            PALMISTRY
          </h1>
          <div className="text-sm text-amber-600 mb-8">
            The ancient art of reading hands
          </div>
        </div>

        <div className="space-y-8 text-amber-900">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
            <h2 className="text-2xl font-medium mb-4 text-amber-800">The Language of Hands</h2>
            <p className="text-sm leading-relaxed">
              Palmistry, also known as chiromancy, is the practice of reading the lines, shapes, and 
              features of the hands to gain insight into a person's character, life experiences, and 
              potential future. This ancient divination art has been practiced for thousands of years 
              across many cultures.
            </p>
          </div>

          {/* Hand Diagram */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
            <h2 className="text-xl font-medium mb-4 text-amber-800 text-center">The Palm Map</h2>
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-t-full border-2 border-amber-300">
                {/* Major Lines */}
                <div className="absolute top-8 left-4 w-32 h-0.5 bg-amber-600 transform rotate-12"></div>
                <div className="absolute top-16 left-6 w-28 h-0.5 bg-amber-600 transform rotate-6"></div>
                <div className="absolute top-24 left-8 w-24 h-0.5 bg-amber-600 transform -rotate-3"></div>
                <div className="absolute top-32 left-12 w-20 h-0.5 bg-amber-600 transform rotate-45"></div>
                
                {/* Labels */}
                <div className="absolute top-6 right-2 text-xs text-amber-700">Heart Line</div>
                <div className="absolute top-14 right-2 text-xs text-amber-700">Head Line</div>
                <div className="absolute top-22 right-2 text-xs text-amber-700">Life Line</div>
                <div className="absolute top-30 right-2 text-xs text-amber-700">Fate Line</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Major Lines</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Heart Line:</strong> Emotions, relationships, and matters of the heart</p>
                <p><strong>Head Line:</strong> Intelligence, thinking patterns, and mental approach</p>
                <p><strong>Life Line:</strong> Vitality, life force, and major life changes</p>
                <p><strong>Fate Line:</strong> Career, life direction, and external influences</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Hand Features</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Hand Shape:</strong> Basic personality type and element</p>
                <p><strong>Fingers:</strong> Specific traits and character details</p>
                <p><strong>Mounts:</strong> Planetary influences and energy centers</p>
                <p><strong>Markings:</strong> Special signs that modify line meanings</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Reading Approach</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Dominant Hand:</strong> Shows current life and conscious choices</p>
                <p><strong>Non-dominant:</strong> Reveals inherited traits and subconscious patterns</p>
                <p><strong>Both Hands:</strong> Compare for complete understanding</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-amber-200">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Cultural Heritage</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Ancient Origins:</strong> Found in Indian, Chinese, and Greek traditions</p>
                <p><strong>Renaissance:</strong> Gained popularity in medieval Europe</p>
                <p><strong>Modern Practice:</strong> Combines traditional wisdom with psychology</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border border-amber-200">
            <h2 className="text-xl font-medium mb-4 text-amber-800 text-center">The Art of Palm Reading</h2>
            <p className="text-sm leading-relaxed text-center">
              Palmistry is both a science and an art, requiring knowledge of hand anatomy combined with 
              intuitive interpretation. The hands tell the story of our lives - past experiences that 
              have shaped us, present circumstances, and potential future paths. Remember, the lines 
              can change as we grow and make different choices.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}