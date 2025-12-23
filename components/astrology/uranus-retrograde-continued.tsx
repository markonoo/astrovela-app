import React from "react"
import { Section } from "./base/Section"

interface UranusRetrogradeContinuedProps {
  pageNumber: number
}

export function UranusRetrogradeContinued({ pageNumber }: UranusRetrogradeContinuedProps) {
  return (
    <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-cyan-800">
              NAVIGATING URANUS RETROGRADE
            </h1>
            <div className="w-24 h-px bg-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Practical Guidance</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/70 p-3 rounded">
                  <h3 className="font-medium mb-2 text-blue-600">Embrace Inner Revolution</h3>
                  <p>Use this time to question outdated beliefs and patterns. What aspects of your life no longer serve your authentic self?</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <h3 className="font-medium mb-2 text-cyan-600">Technology Review</h3>
                  <p>Back up important data, update software, and review digital systems. Expect occasional glitches and have backup plans.</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h3 className="font-medium mb-2 text-blue-600">Social Connections</h3>
                  <p>Reassess friendships and group affiliations. Seek communities that support your authentic expression and growth.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Areas of Focus</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">Career & Innovation</h3>
                  <ul className="space-y-1">
                    <li>• Review creative projects</li>
                    <li>• Refine unique approaches</li>
                    <li>• Break from conventional methods</li>
                    <li>• Develop original ideas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">Personal Freedom</h3>
                  <ul className="space-y-1">
                    <li>• Identify limiting beliefs</li>
                    <li>• Practice authentic expression</li>
                    <li>• Break unhealthy patterns</li>
                    <li>• Embrace independence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Timing Considerations</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-3 rounded">
                  <p><strong>Beginning Phase:</strong> Awareness of need for change, initial resistance to transformation</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded">
                  <p><strong>Middle Phase:</strong> Active questioning and dismantling of old structures, potential chaos</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded">
                  <p><strong>Final Phase:</strong> Integration of insights, preparation for forward movement</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-cyan-700">Uranus Retrograde Affirmations</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded italic text-cyan-800">
                  "I embrace my authentic self and release what no longer serves me."
                </div>
                <div className="bg-cyan-50 p-3 rounded italic text-blue-800">
                  "I am open to inner revelations and revolutionary insights."
                </div>
                <div className="bg-blue-50 p-3 rounded italic text-indigo-800">
                  "I trust my unique path and express my individuality with confidence."
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-cyan-700">Remember</h3>
              <p className="text-xs">Uranus retrograde is a gift of inner awakening. Trust the process of transformation and allow your authentic self to emerge.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}