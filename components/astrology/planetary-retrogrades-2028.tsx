import React from "react"
import { Section } from "./base/Section"

interface PlanetaryRetrogrades2028Props {
  pageNumber: number
}

export function PlanetaryRetrogrades2028({ pageNumber }: PlanetaryRetrogrades2028Props) {
  return (
    <div className="h-full bg-gradient-to-br from-red-50 to-orange-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-red-800">
              2028 PLANETARY RETROGRADES
            </h1>
            <div className="w-24 h-px bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-red-600 font-light mb-4">
              "Creative Mastery Through Cosmic Reflection"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-red-200">
              <h2 className="text-lg font-medium mb-3 text-red-700">Mercury Retrogrades 2028</h2>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">April 5 - April 28</strong><br/>
                  Taurus/Aries: Creative foundation review
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <strong className="text-green-700">August 2 - August 26</strong><br/>
                  Virgo/Leo: Skill perfection & expression
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <strong className="text-orange-700">November 26 - December 15</strong><br/>
                  Sagittarius: Teaching wisdom integration
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded-lg border border-pink-200">
              <h3 className="font-medium mb-2 text-pink-700">Mars Retrograde 2028</h3>
              <div className="text-xs">
                <strong>July 11 - September 24 in Leo/Cancer:</strong> Creative energy refinement, 
                leadership style review, passion project assessment, authentic expression development.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <strong className="text-yellow-700">Jupiter Retrograde</strong><br/>
                August 15 - December 20<br/>
                Leo: Creative wisdom deepening
              </div>
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <strong className="text-orange-700">Saturn Retrograde</strong><br/>
                August 8 - December 27<br/>
                Aries: Leadership discipline mastery
              </div>
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <strong className="text-red-700">Uranus Retrograde</strong><br/>
                October 12 - March 20, 2029<br/>
                Gemini: Communication innovation
              </div>
              <div className="bg-pink-50 p-3 rounded border border-pink-200">
                <strong className="text-pink-700">Neptune Retrograde</strong><br/>
                August 11 - January 19, 2029<br/>
                Aries: Spiritual leadership clarity
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg border border-red-300">
              <h3 className="font-medium mb-2 text-red-700">2028 Retrograde Mastery</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Creative Refinement:</strong> Perfecting artistic skills</div>
                <div><strong>Leadership Review:</strong> Authentic authority development</div>
                <div><strong>Expression Polish:</strong> Communication mastery</div>
                <div><strong>Passion Alignment:</strong> True calling clarity</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-orange-200">
              <h4 className="font-medium mb-2 text-orange-700 text-sm">2028 Retrograde Completion</h4>
              <p className="text-xs italic text-center">
                "In the cosmic pauses of 2028, I perfect my creative mastery and prepare 
                to share my authentic brilliance with confidence and generous heart."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}