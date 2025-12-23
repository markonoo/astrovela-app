import React from "react"
import { Section } from "./base/Section"

interface FengShuiLoveTipsProps {
  pageNumber: number
}

export function FengShuiLoveTips({ pageNumber }: FengShuiLoveTipsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-rose-800">
              FENG SHUI FOR LOVE
            </h1>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-rose-700 font-light">
                "Harmonize your environment to attract and nurture love through the ancient art of Feng Shui."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Relationship Corner (Southwest)</h2>
              <p className="mb-3 text-xs">The southwest corner of your home and bedroom governs love and partnerships.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Colors:</strong> Pink, red, earth tones, white
                  </div>
                  <div>
                    <strong>Elements:</strong> Pairs of objects, crystals, flowers
                  </div>
                  <div>
                    <strong>Symbols:</strong> Hearts, mandarin ducks, peonies
                  </div>
                  <div>
                    <strong>Avoid:</strong> Single items, mirrors facing bed, dried flowers
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Bedroom Feng Shui</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-rose-50 p-3 rounded">
                  <strong>Bed Placement:</strong> Position bed to see door without being directly in line with it. Both partners should have equal space on either side.
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <strong>Artwork:</strong> Display images of pairs (couples, mandarin ducks, twin butterflies) to attract partnership energy.
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Lighting:</strong> Soft, warm lighting creates intimate atmosphere. Avoid harsh fluorescent lights.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Decluttering for Love</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2">Remove</h3>
                  <ul className="space-y-1">
                    <li>• Items from past relationships</li>
                    <li>• Single chairs or lone objects</li>
                    <li>• Sad or lonely artwork</li>
                    <li>• Clutter under bed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Add</h3>
                  <ul className="space-y-1">
                    <li>• Fresh flowers (especially peonies)</li>
                    <li>• Pairs of candles</li>
                    <li>• Rose quartz crystals</li>
                    <li>• Happy couple photos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Five Element Love Enhancement</h2>
              <div className="grid grid-cols-5 gap-2 text-xs text-center">
                <div className="bg-red-100 p-2 rounded">
                  <strong>Fire:</strong> Red candles, triangular shapes
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Earth:</strong> Square objects, crystals
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <strong>Metal:</strong> Round objects, white/gold colors
                </div>
                <div className="bg-blue-100 p-2 rounded">
                  <strong>Water:</strong> Flowing shapes, blue/black
                </div>
                <div className="bg-green-100 p-2 rounded">
                  <strong>Wood:</strong> Plants, rectangular shapes
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}