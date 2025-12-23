import React from "react"
import { Section } from "./base/Section"

interface CompatibilitySection {
  sign: string
  element: string
  compatibility: string
  description: string
}

interface CompatibilityGridPageProps {
  sections: CompatibilitySection[]
  pageNumber: number
}

export function CompatibilityGridPage({ sections, pageNumber }: CompatibilityGridPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col flex-1 relative">
      <Section className="page-light relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-purple-800">
            Compatibility Details
          </h1>
          <div className="text-sm text-purple-600 mb-8">
            Detailed Sign Compatibility Analysis
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-medium text-purple-800">{section.sign}</h2>
                <span className="ml-4 text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full">
                  {section.element}
                </span>
                <span className="ml-2 text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {section.compatibility}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-purple-900">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}