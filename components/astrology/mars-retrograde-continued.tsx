import React from "react"
import { Section } from "./base/Section"

interface MarsRetrogradeContinuedProps {
  pageNumber: number
}

export function MarsRetrogradeContinued({ pageNumber }: MarsRetrogradeContinuedProps) {
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
                  Relationships and the pursuit of harmony could face challenges, especially in how you assert yourselfand manage conflicts. Consider the balance between accommodating others and maintaining your owninterests and desires.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♒</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">AQUARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Community projects and your role in social groups may experience setbacks. This retrograde invites youto consider the ways you work towards your ideals and humanitarian goals, urging a reassessment ofyour strategies and motivations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♏</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SCORPIO</h3>
                <p className="text-sm leading-relaxed">
                  Intense desires and the drive to delve deep into life's mysteries may lead to internal conflicts.
                  Reflect on your motivations and the power dynamics in your relationships. Transformativeself-reflection could lead to profound changes in how you pursue your goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♓</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">PISCES</h3>
                <p className="text-sm leading-relaxed">
                  Spiritual and creative pursuits may feel blocked or require deeper introspection. Mars retrograde inPisces asks you to consider the ways you sacrifice for others and whether your actions are in linewith your spiritual beliefs.
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
