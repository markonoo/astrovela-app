import React from "react"
import { Section } from "./base/Section"

interface MajorAnglesChartProps {
  pageNumber: number
}

export function MajorAnglesChart({ pageNumber }: MajorAnglesChartProps) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-cyan-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-blue-800">
            MAJOR ANGLES IN ASTROLOGY
          </h1>
          <div className="text-sm text-blue-600 mb-8">
            The four cardinal points of your birth chart
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="relative w-80 h-80 mx-auto mb-8">
          {/* Outer Circle */}
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
          
          {/* Cross Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 bg-blue-400"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-0.5 bg-blue-400"></div>
          </div>

          {/* Angle Labels */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="text-lg font-semibold text-blue-800">MC</div>
            <div className="text-xs text-blue-600">Midheaven</div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-lg font-semibold text-blue-800">IC</div>
            <div className="text-xs text-blue-600">Imum Coeli</div>
          </div>
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
            <div className="text-lg font-semibold text-blue-800">ASC</div>
            <div className="text-xs text-blue-600">Ascendant</div>
          </div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
            <div className="text-lg font-semibold text-blue-800">DSC</div>
            <div className="text-xs text-blue-600">Descendant</div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Ascendant */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-200">
            <h2 className="text-xl font-medium mb-3 text-blue-800">Ascendant (Rising Sign)</h2>
            <p className="text-sm leading-relaxed text-blue-900">
              Your ascendant represents your outer personality, first impressions, and how you approach 
              the world. It's the "mask" you wear in social situations and your spontaneous reactions 
              to new experiences.
            </p>
          </div>

          {/* Descendant */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-200">
            <h2 className="text-xl font-medium mb-3 text-blue-800">Descendant</h2>
            <p className="text-sm leading-relaxed text-blue-900">
              The descendant reveals what you seek in partnerships and relationships. It represents 
              the qualities you admire in others and may unconsciously project onto partners.
            </p>
          </div>

          {/* Midheaven */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-200">
            <h2 className="text-xl font-medium mb-3 text-blue-800">Midheaven (MC)</h2>
            <p className="text-sm leading-relaxed text-blue-900">
              Your midheaven represents your career aspirations, public image, and life direction. 
              It shows how you want to be known in the world and your professional calling.
            </p>
          </div>

          {/* IC */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-200">
            <h2 className="text-xl font-medium mb-3 text-blue-800">Imum Coeli (IC)</h2>
            <p className="text-sm leading-relaxed text-blue-900">
              The IC represents your roots, family background, and inner emotional foundation. 
              It reveals your private self and what makes you feel secure and at home.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}