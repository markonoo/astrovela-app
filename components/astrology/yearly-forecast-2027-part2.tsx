import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2027Part2Props {
  pageNumber: number
}

export function YearlyForecast2027Part2({ pageNumber }: YearlyForecast2027Part2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-teal-50 to-cyan-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-teal-800">
              2027 COSMIC FORECAST - PART II
            </h1>
            <div className="w-24 h-px bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-teal-600 font-light mb-4">
              "Emotional Mastery & Collective Healing"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-teal-200">
              <h2 className="text-lg font-medium mb-3 text-teal-700">2027 Eclipse Themes: Healing Generations</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">Spring Eclipses</strong><br/>
                  Aries/Libra Axis<br/>
                  Self vs. relationships balance
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <strong className="text-purple-700">Fall Eclipses</strong><br/>
                  Aries/Libra Axis<br/>
                  Leadership through partnership
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-red-100 p-3 rounded border border-red-200">
                <h3 className="font-medium mb-2 text-red-700">Fire Signs: Emotional Leadership</h3>
                <p>Learning to lead with heart wisdom, balancing passion with compassion, inspiring through authentic vulnerability.</p>
              </div>
              
              <div className="bg-green-100 p-3 rounded border border-green-200">
                <h3 className="font-medium mb-2 text-green-700">Earth Signs: Practical Nurturing</h3>
                <p>Creating sustainable support systems, building emotionally intelligent businesses, grounding healing work.</p>
              </div>
              
              <div className="bg-blue-100 p-3 rounded border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-700">Air Signs: Healing Communication</h3>
                <p>Developing empathetic dialogue, facilitating group healing, broadcasting wisdom with emotional intelligence.</p>
              </div>
              
              <div className="bg-purple-100 p-3 rounded border border-purple-200">
                <h3 className="font-medium mb-2 text-purple-700">Water Signs: Intuitive Expansion</h3>
                <p>Trusting psychic gifts, deepening emotional healing practices, becoming vessels for collective transformation.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-100 to-teal-100 p-4 rounded-lg border border-cyan-300">
              <h3 className="font-medium mb-2 text-cyan-700">2027 Manifestation Focus</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Home & Family:</strong> Creating sanctuary spaces</div>
                <div><strong>Emotional Healing:</strong> Generational pattern breaking</div>
                <div><strong>Nurturing Leadership:</strong> Supportive management styles</div>
                <div><strong>Community Building:</strong> Chosen family creation</div>
                <div><strong>Creative Expression:</strong> Authentic artistic voice</div>
                <div><strong>Spiritual Practice:</strong> Heart-centered meditation</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-teal-200">
              <h4 className="font-medium mb-2 text-teal-700 text-sm">2027 Closing Affirmation</h4>
              <p className="text-xs italic text-center">
                "Through Jupiter's nurturing embrace in Cancer, I heal the past, embrace the present, 
                and create a future filled with emotional wisdom and unconditional love."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}