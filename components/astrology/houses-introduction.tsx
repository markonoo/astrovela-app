import React from "react"
import { Section } from "./base/Section"

interface HousesIntroductionProps {
  pageNumber: number
}

export function HousesIntroduction({ pageNumber }: HousesIntroductionProps) {
  return (
    <div className="h-full bg-black text-[#D4AF37] flex flex-col flex-1">
      <Section className="page-dark max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-6 tracking-wide">
            THE TWELVE HOUSES
          </h1>
          <p className="text-sm leading-relaxed mb-8 text-amber-200">
            The cosmic blueprint of life's experiences and themes
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-xl font-medium mb-4">What Are Astrological Houses?</h2>
            <p className="text-sm leading-relaxed text-amber-200">
              The twelve houses in astrology represent different areas of life experience. Unlike the zodiac signs, 
              which are based on the Sun's position, houses are determined by the Earth's rotation and your exact 
              time and place of birth. Each house governs specific themes and life experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 border border-amber-600/30">
              <h3 className="text-lg font-medium mb-2">Houses 1-4: Personal Foundation</h3>
              <p className="text-xs leading-relaxed text-amber-200">
                Self-identity, values, communication, and home - the core of who you are.
              </p>
            </div>

            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 border border-amber-600/30">
              <h3 className="text-lg font-medium mb-2">Houses 5-8: Personal Expression</h3>
              <p className="text-xs leading-relaxed text-amber-200">
                Creativity, service, relationships, and transformation - how you engage with others.
              </p>
            </div>

            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 border border-amber-600/30">
              <h3 className="text-lg font-medium mb-2">Houses 9-12: Universal Connection</h3>
              <p className="text-xs leading-relaxed text-amber-200">
                Philosophy, career, community, and spirituality - your place in the larger world.
              </p>
            </div>

            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 border border-amber-600/30">
              <h3 className="text-lg font-medium mb-2">Angular Houses (1, 4, 7, 10)</h3>
              <p className="text-xs leading-relaxed text-amber-200">
                The most powerful houses, representing major life themes and turning points.
              </p>
            </div>
          </div>

          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-xl font-medium mb-4">Reading Your Houses</h2>
            <p className="text-sm leading-relaxed text-amber-200">
              The sign on each house cusp (the beginning of the house) colors how you experience that area of life. 
              Planets located in houses show where your energy is focused and what themes will be most prominent 
              in your life journey.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}