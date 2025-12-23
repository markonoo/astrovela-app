import React from "react"
import { Section } from "./base/Section"

interface HousesIntroductionReplicaProps {
  pageNumber: number
}

export function HousesIntroductionReplica({ pageNumber }: HousesIntroductionReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark px-12 py-12 max-w-3xl mx-auto">
        {/* Header with mystical hand icon */}
        <div className="text-center mb-12">
          {/* Mystical hand with radiating sun */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Hand illustration */}
              <svg className="w-16 h-16 text-amber-200" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                <path d="M20 45 Q25 35, 30 45 Q35 40, 40 45 Q42 42, 44 45 L44 55 Q42 60, 35 60 L25 60 Q20 58, 20 50 Z" strokeWidth="2"/>
                {/* Radiating lines */}
                <path d="M32 25 L32 15" strokeWidth="2"/>
                <path d="M25 28 L18 21" strokeWidth="2"/>
                <path d="M39 28 L46 21" strokeWidth="2"/>
                <path d="M22 35 L12 35" strokeWidth="2"/>
                <path d="M42 35 L52 35" strokeWidth="2"/>
                <path d="M25 42 L18 49" strokeWidth="2"/>
                <path d="M39 42 L46 49" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-light mb-8 tracking-[0.15em] font-serif text-amber-200">
            HOUSES IN<br />
            ASTROLOGY
          </h1>
        </div>

        {/* Main content with decorative initial */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start mb-8">
            {/* Decorative Initial E */}
            <div className="mr-6 flex-shrink-0">
              <span className="text-7xl font-serif text-amber-300 leading-none block">
                E
              </span>
            </div>

            {/* Main text */}
            <div className="pt-2 flex-1">
              <p className="text-lg leading-relaxed text-amber-100">
                ach house represents a different area of life, 
                and the planets' placement within these 
                houses adds depth and detail to their basic 
                astrological meanings. Planets move through 
                the houses over time. The specific house a planet 
                occupies in your birth chart influences how that 
                planet's energy is expressed in your life. The houses 
                are numbered one through twelve, starting from the 
                eastern horizon at the moment of birth, with the first 
                house known as the Ascendant, or the Rising sign.
              </p>
            </div>
          </div>

          {/* Additional paragraph */}
          <div className="mt-8">
            <p className="text-lg leading-relaxed text-amber-100">
              The system of houses in astrology is a symbolic 
              representation of all life's aspects, from the self to 
              the collective, material, and spiritual. The houses are 
              a celestial stage on which the drama of life unfolds, 
              with each sector revealing the energy and focus of 
              our life's various domains.
            </p>
          </div>
        </div>

        {/* Page number */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200 text-sm">
          {pageNumber}
        </div>
      </Section>
    </div>
  )
}
