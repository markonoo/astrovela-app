import React from "react"
import { Section } from "./base/Section"

interface PlanetaryRetrogrades2025Props {
  pageNumber: number
}

export function PlanetaryRetrogrades2025({ pageNumber }: PlanetaryRetrogrades2025Props) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-purple-800">
              2025 PLANETARY RETROGRADES
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-purple-600 font-light mb-4">
              "Cosmic Reflection Periods for Growth & Renewal"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-purple-200">
              <h2 className="text-lg font-medium mb-3 text-purple-700">Mercury Retrogrades 2025</h2>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">March 15 - April 7</strong><br/>
                  Aries/Pisces<br/>
                  Review goals & spiritual insights
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <strong className="text-green-700">July 18 - August 11</strong><br/>
                  Leo/Cancer<br/>
                  Creative projects & family matters
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <strong className="text-orange-700">November 9 - November 29</strong><br/>
                  Sagittarius/Scorpio<br/>
                  Higher learning & transformation
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg border border-red-200">
              <h3 className="font-medium mb-2 text-red-700">Venus Retrograde 2025</h3>
              <div className="text-xs">
                <strong>July 22 - September 3 in Leo/Cancer:</strong> Review relationships, artistic projects, and self-worth. Past lovers may return. Financial reassessment needed.
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-medium mb-2 text-yellow-700">Mars Retrograde 2025</h3>
              <div className="text-xs">
                <strong>January 6 - April 18 in Cancer/Gemini:</strong> Reassess emotional responses, family dynamics, and communication patterns. Avoid major confrontations.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Jupiter Retrograde</strong><br/>
                October 9 - February 4, 2026<br/>
                Gemini: Review beliefs & learning
              </div>
              <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                <strong className="text-indigo-700">Saturn Retrograde</strong><br/>
                June 29 - November 15<br/>
                Pisces: Spiritual restructuring
              </div>
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <strong className="text-purple-700">Uranus Retrograde</strong><br/>
                September 1 - January 30, 2026<br/>
                Taurus: Financial innovation
              </div>
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Neptune Retrograde</strong><br/>
                July 4 - December 10<br/>
                Pisces: Spiritual clarity
              </div>
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Pluto Retrograde</strong><br/>
                May 4 - October 14<br/>
                Aquarius: Social transformation
              </div>
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <strong className="text-green-700">Chiron Retrograde</strong><br/>
                July 26 - December 29<br/>
                Aries: Healing leadership wounds
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg border border-purple-300">
              <h3 className="font-medium mb-2 text-purple-700">2025 Retrograde Themes</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <strong>First Half:</strong> Emotional healing, family dynamics, creative review
                </div>
                <div>
                  <strong>Second Half:</strong> Spiritual awakening, relationship restructuring
                </div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-purple-200">
              <h4 className="font-medium mb-2 text-purple-700 text-sm">Retrograde Survival Guide</h4>
              <div className="text-xs space-y-1">
                <p>• Use retrograde periods for reflection, review, and revision</p>
                <p>• Avoid signing important contracts during Mercury retrograde</p>
                <p>• Past issues and people may resurface for resolution</p>
                <p>• Technology and travel may experience delays</p>
                <p>• Focus on internal growth rather than external expansion</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}