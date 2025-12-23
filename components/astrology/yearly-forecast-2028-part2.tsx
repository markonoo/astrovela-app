import React from "react"
import { Section } from "./base/Section"

interface YearlyForecast2028Part2Props {
  pageNumber: number
}

export function YearlyForecast2028Part2({ pageNumber }: YearlyForecast2028Part2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-gold-50 to-yellow-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-light mb-3 tracking-[0.15em] font-serif text-gold-800">
              2028 COSMIC FORECAST - PART II
          </h1>
            <div className="w-24 h-px bg-gold-600 mx-auto mb-4"></div>
            <p className="text-lg italic text-gold-600 font-light mb-4">
              "Magnificent Creative Culmination"
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="bg-white/60 p-4 rounded-lg border border-gold-200">
              <h2 className="text-lg font-medium mb-3 text-gold-700">Elemental Guidance for 2028</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-red-100 p-3 rounded">
                  <strong className="text-red-700">Fire Signs:</strong> Peak creative expression, leadership mastery, inspiring others through bold authenticity and passionate vision.
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <strong className="text-green-700">Earth Signs:</strong> Building lasting creative legacies, practical application of artistic skills, tangible manifestation.
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <strong className="text-blue-700">Air Signs:</strong> Creative communication, idea sharing, intellectual leadership, inspiring through words and concepts.
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <strong className="text-purple-700">Water Signs:</strong> Emotional artistic expression, healing through creativity, intuitive leadership approaches.
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border border-yellow-300">
              <h3 className="font-medium mb-2 text-yellow-700">2028 Manifestation Mastery</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong>Creative Projects:</strong> Bold artistic ventures</div>
                <div><strong>Leadership Roles:</strong> Inspiring team guidance</div>
                <div><strong>Public Recognition:</strong> Awards, honors, visibility</div>
                <div><strong>Teaching Opportunities:</strong> Sharing expertise</div>
                <div><strong>Luxury Experiences:</strong> High-quality enjoyment</div>
                <div><strong>Generous Giving:</strong> Supporting others' dreams</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-100 to-amber-100 p-4 rounded-lg border border-gold-300">
              <h3 className="font-medium mb-2 text-gold-700">Monthly Creative Rhythms</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><strong>Jan-Apr:</strong> Skill mastery, foundation building</div>
                <div><strong>May-Aug:</strong> Bold expression, public sharing</div>
                <div><strong>Sep-Dec:</strong> Teaching, inspiring, legacy creation</div>
              </div>
            </div>

            <div className="bg-white/60 p-3 rounded border border-amber-200">
              <h4 className="font-medium mb-2 text-amber-700 text-sm">2028 Golden Success Formula</h4>
              <div className="text-xs space-y-1">
                <p>• Lead with authentic confidence and generous heart</p>
                <p>• Express creativity boldly without fear of judgment</p>
                <p>• Inspire others through your radiant example</p>
                <p>• Build lasting legacies that outlive your lifetime</p>
                <p>• Remember: You are meant to shine magnificently</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-gold-100 p-3 rounded border border-amber-300">
              <h4 className="font-medium mb-2 text-amber-700 text-sm">2028 Culmination Blessing</h4>
              <p className="text-xs italic text-center">
                "May this golden year of 2028 be the magnificent culmination of your creative journey, 
                where your authentic light illuminates the world and inspires countless souls."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}