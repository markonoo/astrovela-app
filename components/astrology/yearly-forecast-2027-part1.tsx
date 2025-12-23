import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2027Part1Props {
  pageNumber: number
}

export function YearlyForecast2027Part1({ pageNumber }: YearlyForecast2027Part1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-cyan-50 to-blue-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-cyan-800">
              2027 COSMIC FORECAST - PART I
            </h1>
            <div className="w-24 h-px bg-cyan-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-cyan-600 font-light mb-4">
              "Jupiter in Cancer: The Great Nurturing"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-cyan-200">
              <h2 className="text-lg font-medium mb-3 text-cyan-700">2027 Overview: Emotional Intelligence Era</h2>
              <p className="text-xs mb-3">
                2027 brings Jupiter's powerful transit through Cancer, emphasizing family, home, emotional wisdom, 
                and nurturing leadership. This is a year of deep healing, maternal/paternal consciousness, 
                and creating supportive communities that honor authentic feelings.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-100 p-3 rounded border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-700">First Quarter (Jan-Mar)</h3>
                <p><strong>Theme:</strong> Emotional Foundation</p>
                <p><strong>Focus:</strong> Family healing, home improvements, inner child work</p>
                <p><strong>Key:</strong> Jupiter enters Cancer, emotional expansion begins</p>
              </div>
              
              <div className="bg-green-100 p-3 rounded border border-green-200">
                <h3 className="font-medium mb-2 text-green-700">Second Quarter (Apr-Jun)</h3>
                <p><strong>Theme:</strong> Nurturing Growth</p>
                <p><strong>Focus:</strong> Creative projects, teaching, caregiving roles</p>
                <p><strong>Key:</strong> Emotional intelligence applied to career</p>
              </div>
              
              <div className="bg-purple-100 p-3 rounded border border-purple-200">
                <h3 className="font-medium mb-2 text-purple-700">Third Quarter (Jul-Sep)</h3>
                <p><strong>Theme:</strong> Community Building</p>
                <p><strong>Focus:</strong> Group healing, family dynamics, support networks</p>
                <p><strong>Key:</strong> Eclipse seasons bring family revelations</p>
              </div>
              
              <div className="bg-pink-100 p-3 rounded border border-pink-200">
                <h3 className="font-medium mb-2 text-pink-700">Fourth Quarter (Oct-Dec)</h3>
                <p><strong>Theme:</strong> Wisdom Integration</p>
                <p><strong>Focus:</strong> Teaching emotional wisdom, mentoring others</p>
                <p><strong>Key:</strong> Preparing for Jupiter's next evolution</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-lg border border-cyan-300">
              <h3 className="font-medium mb-2 text-cyan-700">2027 Success Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Real Estate:</strong> Property investments, home businesses</div>
                <div><strong>Caregiving:</strong> Healthcare, education, social work</div>
                <div><strong>Family Business:</strong> Generational ventures, legacy building</div>
                <div><strong>Emotional Healing:</strong> Therapy, counseling, wellness</div>
                <div><strong>Food & Hospitality:</strong> Restaurants, catering, hospitality</div>
                <div><strong>Creative Arts:</strong> Family stories, maternal themes</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-blue-200">
              <h4 className="font-medium mb-2 text-blue-700 text-sm">2027 Growth Mantra</h4>
              <p className="text-xs italic text-center">
                "I embrace my emotional wisdom as my greatest strength, creating nurturing spaces 
                where all beings can grow and thrive in authentic love."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}