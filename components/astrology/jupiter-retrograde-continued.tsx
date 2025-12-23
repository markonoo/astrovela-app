import React from "react"
import { Section } from "./base/Section"

interface JupiterRetrogradeContinuedProps {
  pageNumber: number
}

export function JupiterRetrogradeContinued({ pageNumber }: JupiterRetrogradeContinuedProps) {
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
                  Relationships and your approach to balance and harmony are examined. Reflect on how your relationshipscontribute to your growth and if they reflect your true values. Consider the role of partnership inyour personal expansion.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♒</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">AQUARIUS</h3>
                <p className="text-sm leading-relaxed">
                  Social ideals, community involvement, and your vision for the future undergo reflection. Consider ifyour contributions to society reflect your true ideals and how you can authentically work towards abetter future.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♏</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">SCORPIO</h3>
                <p className="text-sm leading-relaxed">
                  Transformative growth, shared resources, and intimacy might require introspection. Deep, internalchanges are possible as you reassess what truly matters at a soul level. Focus on authentictransformation and the deeper meaning of your connections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-amber-200 text-lg mt-1">♓</span>
              <div>
                <h3 className="font-semibold text-amber-200 mb-2">PISCES</h3>
                <p className="text-sm leading-relaxed">
                  Spiritual growth and the dissolution of boundaries for expansion are themes. This period invites deepreflection on your spiritual journey and how it aligns with your inner truth. Focus on connecting withthe universal and transcending the ego.
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
