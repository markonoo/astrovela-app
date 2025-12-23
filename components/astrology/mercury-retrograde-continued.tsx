import React from "react"
import { Section } from "./base/Section"

interface MercuryRetrogradeContinuedProps {
  pageNumber: number
}

export function MercuryRetrogradeContinued({ pageNumber }: MercuryRetrogradeContinuedProps) {
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
                  Relationships come under scrutiny during this period. It's time to reflect on partnership dynamics andcommunication fairness. Avoid making new commitments or signing contracts until the retrograde passes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♒</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">AQUARIUS</h3>
                <p className="text-sm leading-relaxed">
                  This retrograde affects social networks, friendships, and your role within groups. Technologicalglitches are more common. Reevaluate your hopes and dreams, considering how your social connectionssupport or hinder them.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♏</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SCORPIO</h3>
                <p className="text-sm leading-relaxed">
                  Deep, introspective conversations and thoughts emerge. It's a powerful time for transformation throughdialogue but beware of becoming too suspicious or delving into conspiracies without cause.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♓</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">PISCES</h3>
                <p className="text-sm leading-relaxed">
                  A time of heightened intuition but also potential confusion. Dreams and messages may be moresignificant now. Avoid making important decisions based on unclear information.
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
