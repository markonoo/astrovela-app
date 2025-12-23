import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2026Part1Props {
  pageNumber: number
}

export function YearlyForecast2026Part1({ pageNumber }: YearlyForecast2026Part1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-blue-800">
              2026 COSMIC FORECAST - PART I
            </h1>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-blue-600 font-light mb-4">
              "The Year of Celestial Harmony & Manifestation"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-blue-200">
              <h2 className="text-lg font-medium mb-3 text-blue-700">2026 Overview: Jupiter in Gemini Era</h2>
              <p className="text-xs mb-3">
                2026 marks a significant shift as Jupiter continues its journey through Gemini, 
                emphasizing communication, learning, and intellectual expansion. This is a year 
                of connecting dots, building networks, and sharing wisdom across diverse communities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-green-100 p-3 rounded border border-green-200">
                <h3 className="font-medium mb-2 text-green-700">First Quarter (Jan-Mar)</h3>
                <p><strong>Theme:</strong> New Foundations</p>
                <p><strong>Focus:</strong> Career restructuring, relationship clarity, spiritual awakening</p>
                <p><strong>Key Dates:</strong> Mars direct (Jan 6), Eclipse season (March)</p>
              </div>
              
              <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                <h3 className="font-medium mb-2 text-yellow-700">Second Quarter (Apr-Jun)</h3>
                <p><strong>Theme:</strong> Creative Expansion</p>
                <p><strong>Focus:</strong> Artistic projects, romance, financial growth</p>
                <p><strong>Key Dates:</strong> Venus cycle shifts, Jupiter aspects</p>
              </div>
              
              <div className="bg-orange-100 p-3 rounded border border-orange-200">
                <h3 className="font-medium mb-2 text-orange-700">Third Quarter (Jul-Sep)</h3>
                <p><strong>Theme:</strong> Relationship Revolution</p>
                <p><strong>Focus:</strong> Partnership changes, social evolution, healing</p>
                <p><strong>Key Dates:</strong> Summer eclipses, Venus retrograde ends</p>
              </div>
              
              <div className="bg-red-100 p-3 rounded border border-red-200">
                <h3 className="font-medium mb-2 text-red-700">Fourth Quarter (Oct-Dec)</h3>
                <p><strong>Theme:</strong> Transformation Completion</p>
                <p><strong>Focus:</strong> Integration, wisdom sharing, future planning</p>
                <p><strong>Key Dates:</strong> Outer planet stations, year-end alignments</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium mb-2 text-purple-700">Major Planetary Themes 2026</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-blue-600">Jupiter in Gemini:</strong> Communication revolution, learning expansion, tech innovation
                </div>
                <div>
                  <strong className="text-green-600">Saturn in Pisces:</strong> Spiritual discipline, emotional healing, creative structure
                </div>
                <div>
                  <strong className="text-orange-600">Uranus in Taurus:</strong> Financial innovation, environmental awareness, material revolution
                </div>
                <div>
                  <strong className="text-purple-600">Neptune in Pisces:</strong> Spiritual awakening, artistic inspiration, compassionate action
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg border border-blue-300">
              <h3 className="font-medium mb-2 text-blue-700">2026 Opportunities by Life Area</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Career:</strong> Communication roles, teaching, technology</div>
                <div><strong>Relationships:</strong> Soul connections, healing partnerships</div>
                <div><strong>Health:</strong> Mental wellness, holistic healing, energy work</div>
                <div><strong>Finances:</strong> Diversified income, tech investments, education</div>
                <div><strong>Spirituality:</strong> Meditation practices, psychic development</div>
                <div><strong>Creativity:</strong> Writing projects, multimedia arts, innovation</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-indigo-200">
              <h4 className="font-medium mb-2 text-indigo-700 text-sm">2026 Success Strategies</h4>
              <div className="text-xs space-y-1">
                <p>• Embrace lifelong learning and skill development</p>
                <p>• Build diverse networks and collaborative partnerships</p>
                <p>• Integrate spiritual practices with practical goals</p>
                <p>• Stay flexible and adaptable to rapid changes</p>
                <p>• Focus on authentic communication and truth-telling</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}