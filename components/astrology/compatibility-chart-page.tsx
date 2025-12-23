import React from "react"
import { Section } from "./base/Section"

interface CompatibilityChartPageProps {
  title: string
  pageNumber: number
}

export function CompatibilityChartPage({ title, pageNumber }: CompatibilityChartPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-pink-50 flex flex-col flex-1 relative">
      <Section className="page-light relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-rose-800">
            {title}
          </h1>
          <div className="text-sm text-rose-600 mb-8">
            Astrological Compatibility Analysis
          </div>
        </div>

        <div className="space-y-8 text-rose-900">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-rose-800">Understanding Compatibility</h2>
            <p className="text-sm leading-relaxed">
              Astrological compatibility examines how different zodiac signs interact with each other in relationships. 
              This analysis considers the elemental nature, modalities, and planetary influences of each sign to 
              determine potential harmony or challenges in partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-rose-800">Elemental Harmony</h3>
              <p className="text-sm leading-relaxed">
                Signs of the same element (Fire, Earth, Air, Water) often understand each other intuitively, 
                while complementary elements can create dynamic and balanced relationships.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-rose-800">Planetary Influences</h3>
              <p className="text-sm leading-relaxed">
                The ruling planets of each sign influence how they express love, communicate, and approach 
                relationships, creating unique compatibility patterns.
              </p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium mb-4 text-rose-800">Reading Your Compatibility</h2>
            <p className="text-sm leading-relaxed">
              Remember that compatibility is just one aspect of relationships. Personal growth, communication, 
              and mutual respect are equally important factors in creating lasting, meaningful connections.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}