import React from "react"
import { Section } from "./base/Section"

interface SaturnRetrogradeContinuedProps {
  pageNumber: number
}

export function SaturnRetrogradeContinued({ pageNumber }: SaturnRetrogradeContinuedProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark max-w-4xl flex flex-col">
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Left Column */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♎</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">LIBRA</h3>
                <p className="text-sm leading-relaxed">
                  Relationships and commitments to others come under the spotlight. This period demands a reevaluationof your partnerships, both personal and professional, urging you to consider if they are built onsolid, equitable foundations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♒</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">AQUARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Social responsibilities, friendships, and future-oriented goals undergo review. Consider if yoursocial and humanitarian efforts are structured effectively and reflect your true aspirations andresponsibilities to the collective.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♏</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SCORPIO</h3>
                <p className="text-sm leading-relaxed">
                  Intimate relationships, shared resources, and transformational commitments are in focus. Reflect onyour deeper bonds and shared obligations, ensuring they are rooted in trust, mutual growth, andlong-term sustainability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♓</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">PISCES</h3>
                <p className="text-sm leading-relaxed">
                  Spiritual commitments, the dissolution of boundaries in responsibilities, and hidden or subconsciousstructures are examined. This period invites you to reflect on the spiritual and psychologicalfoundations of your life, ensuring they support your growth and responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Empty for layout balance */}
          <div></div>
        </div>
      </Section>
    </div>
  )
}
