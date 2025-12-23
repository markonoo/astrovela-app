import React from "react"
import { Section } from "./base/Section"

interface Houses58Props {
  pageNumber: number
}

export function Houses58({ pageNumber }: Houses58Props) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark max-w-4xl flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            HOUSES 5-8
          </h1>
          <div className="text-sm text-amber-400 mb-8">
            The Houses of Personal Expression & Transformation
          </div>
        </div>

        <div className="space-y-8">
          {/* House 5 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">5</span>
              The Fifth House - Creativity & Joy
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of creativity, romance, children, and self-expression. This house governs your creative 
              talents, artistic abilities, and how you experience joy and pleasure. It also rules romantic affairs, 
              recreational activities, and your relationship with children.
            </p>
            <div className="text-xs text-amber-300">Keywords: Creativity, Romance, Children, Self-Expression, Fun</div>
          </div>

          {/* House 6 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">6</span>
              The Sixth House - Service & Health
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of daily routines, work environment, health, and service to others. This house influences 
              your approach to work, your relationship with colleagues, daily habits, and physical well-being. 
              It also governs pets and small animals.
            </p>
            <div className="text-xs text-amber-300">Keywords: Work, Health, Daily Routine, Service, Pets</div>
          </div>

          {/* House 7 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">7</span>
              The Seventh House - Partnerships
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of partnerships, marriage, and one-on-one relationships. This house governs committed 
              relationships, business partnerships, open enemies, and legal matters. It represents how you 
              relate to others and what you seek in close partnerships.
            </p>
            <div className="text-xs text-amber-300">Keywords: Marriage, Partnerships, Relationships, Legal Matters</div>
          </div>

          {/* House 8 */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
            <h2 className="text-2xl font-medium mb-4 text-amber-200 flex items-center">
              <span className="text-3xl mr-3">8</span>
              The Eighth House - Transformation
            </h2>
            <p className="text-sm leading-relaxed text-amber-100 mb-4">
              The house of transformation, shared resources, and the mysteries of life and death. This house 
              governs joint finances, taxes, insurance, inheritance, and intimate bonds. It also rules 
              psychological transformation, occult matters, and regeneration.
            </p>
            <div className="text-xs text-amber-300">Keywords: Transformation, Shared Resources, Death/Rebirth, Intimacy</div>
          </div>
        </div>
      </Section>
    </div>
  )
}