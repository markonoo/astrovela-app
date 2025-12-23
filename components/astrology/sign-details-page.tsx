import React from "react"
import { Section } from "./base/Section"

interface SectionData {
  title: string
  content: string
}

interface Celebrity {
  name: string
  date: string
}

interface SignDetailsPageProps {
  title: string
  sections: SectionData[]
  celebrities: Celebrity[]
  pageNumber: number
}

export function SignDetailsPage({ title, sections, celebrities, pageNumber }: SignDetailsPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col flex-1">
      {/* Custom tight layout for detailed pages */}
      <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full px-4 py-3 gap-1">
        {/* Header - Minimal spacing */}
        <div className="text-center mb-1">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-0.5">{title}</h1>
          <div className="text-sm text-blue-600">Detailed Analysis & Insights</div>
        </div>

        {/* Sections - Tight spacing */}
        <div className="space-y-1.5 mb-2">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-2.5 shadow-sm border border-blue-200">
              <h2 className="text-sm font-semibold text-blue-800 mb-1 uppercase tracking-wide">{section.title}</h2>
              <p className="text-xs leading-snug text-blue-900">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Celebrities Section - Minimal padding and tight grid */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-2 border border-blue-200">
          <h2 className="text-sm font-semibold text-blue-800 mb-1.5 text-center uppercase tracking-wide">Famous {title} Personalities</h2>
          <div className="grid grid-cols-4 gap-0.5">
            {celebrities.map((celebrity, index) => (
              <div key={index} className="bg-white/60 rounded p-1 text-center">
                <div className="font-medium text-blue-800 text-xs leading-tight">{celebrity.name}</div>
                <div className="text-xs text-blue-600 leading-tight">{celebrity.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}