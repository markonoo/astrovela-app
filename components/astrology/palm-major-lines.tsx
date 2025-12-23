import React from "react"
import { Section } from "./base/Section"

interface PalmMajorLinesProps {
  pageNumber: number
}

export function PalmMajorLines({ pageNumber }: PalmMajorLinesProps) {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-emerald-800">
              MAJOR PALM LINES
            </h1>
            <div className="w-24 h-px bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-emerald-700">The Four Primary Lines</h2>
              <div className="space-y-4 text-xs">
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-px bg-red-500 mr-3"></div>
                    <h3 className="font-medium text-red-700">HEART LINE</h3>
                  </div>
                  <p className="mb-2"><strong>Location:</strong> Horizontal line below fingers, above head line</p>
                  <p className="mb-2"><strong>Meaning:</strong> Emotional nature, love relationships, heart health</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <p><strong>Long & Curved:</strong> Romantic, expressive emotions</p>
                    <p><strong>Short & Straight:</strong> Reserved, practical in love</p>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-px bg-blue-500 mr-3"></div>
                    <h3 className="font-medium text-blue-700">HEAD LINE</h3>
                  </div>
                  <p className="mb-2"><strong>Location:</strong> Horizontal line across palm center</p>
                  <p className="mb-2"><strong>Meaning:</strong> Intelligence, communication style, thinking patterns</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <p><strong>Deep & Long:</strong> Strong intellect, good memory</p>
                    <p><strong>Curved Downward:</strong> Creative, imaginative mind</p>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-px bg-green-500 mr-3"></div>
                    <h3 className="font-medium text-green-700">LIFE LINE</h3>
                  </div>
                  <p className="mb-2"><strong>Location:</strong> Curves around base of thumb</p>
                  <p className="mb-2"><strong>Meaning:</strong> Vitality, health, major life changes</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <p><strong>Deep & Clear:</strong> Strong vitality, robust health</p>
                    <p><strong>Wide Curve:</strong> Energetic, love of travel</p>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-px bg-purple-500 mr-3"></div>
                    <h3 className="font-medium text-purple-700">FATE LINE</h3>
                  </div>
                  <p className="mb-2"><strong>Location:</strong> Vertical line from wrist toward middle finger</p>
                  <p className="mb-2"><strong>Meaning:</strong> Career path, life direction, external influences</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <p><strong>Strong & Straight:</strong> Clear career path, focused goals</p>
                    <p><strong>Broken/Absent:</strong> Self-directed, multiple career changes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-emerald-700">Line Quality & Meaning</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-teal-600">Positive Indicators</h3>
                  <ul className="space-y-1">
                    <li>• Deep, clear lines: Strong traits</li>
                    <li>• Smooth lines: Steady progress</li>
                    <li>• Even color: Balanced energy</li>
                    <li>• Good length: Full development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-emerald-600">Challenge Indicators</h3>
                  <ul className="space-y-1">
                    <li>• Breaks: Major life changes</li>
                    <li>• Islands: Temporary obstacles</li>
                    <li>• Chains: Ongoing challenges</li>
                    <li>• Fading lines: Weakening energy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-emerald-700">Line Intersections</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-red-600">Heart & Head Connected:</strong> Simian line - intense personality, all-or-nothing approach
                </div>
                <div className="bg-emerald-50 p-3 rounded">
                  <strong className="text-emerald-600">Fate Line to Heart:</strong> Career influenced by emotions or relationships
                </div>
                <div className="bg-teal-50 p-3 rounded">
                  <strong className="text-teal-600">Lines Crossing:</strong> Temporary challenges or major life decisions
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-emerald-700">Reading Line Tips</h3>
              <div className="text-xs space-y-1">
                <p>• Read lines from their beginning point toward their end</p>
                <p>• Compare both hands - dominant shows conscious choices</p>
                <p>• Look for timing using proportional measurement</p>
                <p>• Consider line relationships and overall hand balance</p>
                <p>• Note any special markings: stars, triangles, crosses</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}