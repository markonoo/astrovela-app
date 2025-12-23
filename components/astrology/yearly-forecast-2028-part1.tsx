import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2028Part1Props {
  pageNumber: number
}

export function YearlyForecast2028Part1({ pageNumber }: YearlyForecast2028Part1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-amber-800">
              2028 COSMIC FORECAST - PART I
            </h1>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-amber-600 font-light mb-4">
              "Jupiter in Leo: The Golden Creative Awakening"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
              <h2 className="text-lg font-medium mb-3 text-amber-700">2028 Overview: Creative Leadership Era</h2>
              <p className="text-xs mb-3">
                Jupiter's movement into Leo marks 2028 as the year of creative mastery and authentic leadership. 
                This cycle emphasizes bold self-expression, generous sharing of talents, and inspiring others 
                through radiant confidence and heart-centered wisdom.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-red-100 p-3 rounded border border-red-200">
                <h3 className="font-medium mb-2 text-red-700">Q1: Creative Foundation</h3>
                <p><strong>Theme:</strong> Artistic mastery development</p>
                <p><strong>Focus:</strong> Skills refinement, creative confidence building</p>
              </div>
              
              <div className="bg-orange-100 p-3 rounded border border-orange-200">
                <h3 className="font-medium mb-2 text-orange-700">Q2: Leadership Emergence</h3>
                <p><strong>Theme:</strong> Authentic authority stepping forward</p>
                <p><strong>Focus:</strong> Public speaking, team leadership, visibility</p>
              </div>
              
              <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                <h3 className="font-medium mb-2 text-yellow-700">Q3: Creative Expression</h3>
                <p><strong>Theme:</strong> Bold artistic sharing</p>
                <p><strong>Focus:</strong> Performance, publication, creative launches</p>
              </div>
              
              <div className="bg-amber-100 p-3 rounded border border-amber-200">
                <h3 className="font-medium mb-2 text-amber-700">Q4: Legacy Building</h3>
                <p><strong>Theme:</strong> Wisdom mentorship</p>
                <p><strong>Focus:</strong> Teaching, inspiring next generation</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border border-amber-300">
              <h3 className="font-medium mb-2 text-amber-700">2028 Golden Opportunities</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Creative Arts:</strong> Performance, visual arts, entertainment</div>
                <div><strong>Leadership Roles:</strong> Executive positions, thought leadership</div>
                <div><strong>Entertainment:</strong> Media, broadcasting, public speaking</div>
                <div><strong>Education:</strong> Teaching, mentoring, inspiring others</div>
                <div><strong>Luxury Markets:</strong> High-end products, premium services</div>
                <div><strong>Children & Youth:</strong> Programs serving young people</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-orange-200">
              <h4 className="font-medium mb-2 text-orange-700 text-sm">2028 Radiance Affirmation</h4>
              <p className="text-xs italic text-center">
                "I shine my authentic light boldly and generously, inspiring others through 
                my creative expression and heart-centered leadership."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}