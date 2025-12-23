import React from "react"
import { Section } from "./base/Section"

interface VenusRetrogradeContinuedProps {
  pageNumber: number
}

export function VenusRetrogradeContinued({ pageNumber }: VenusRetrogradeContinuedProps) {
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
                  Relationships are especially important during this retrograde, as Libra is also ruled by Venus. It's atime for evaluating your partnerships, seeking balance, and understanding your role in maintainingharmony. Reflect on fairness and reciprocity in your connections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♒</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">AQUARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Friendships and community involvement undergo a period of reevaluation. Reflect on how your socialcircles reflect your values and contribute to your sense of belonging and support in pursuing yourdreams and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♏</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SCORPIO</h3>
                <p className="text-sm leading-relaxed">
                  Intense emotional connections and shared resources come under scrutiny. Deep bonds may be tested,
                  urging you to consider the power dynamics in your relationships and your deeper desires.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♓</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">PISCES</h3>
                <p className="text-sm leading-relaxed">
                  Spiritual and unconditional love are themes, with a focus on dissolving boundaries and reconnectingwith universal love. Financial or romantic fantasies may be challenged, encouraging a more groundedapproach to your dreams and ideals.
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
