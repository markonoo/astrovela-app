import React from "react"
import { Section } from "./base/Section"

interface PalmMountsProps {
  pageNumber: number
}

export function PalmMounts({ pageNumber }: PalmMountsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              PALM MOUNTS GUIDE
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">The Seven Sacred Mounts</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">♃</div>
                    <h3 className="font-medium text-yellow-700">MOUNT OF JUPITER</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Below index finger</p>
                  <p className="mb-1"><strong>Qualities:</strong> Leadership, ambition, confidence</p>
                  <p><strong>When developed:</strong> Natural leader, ambitious, seeks recognition</p>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">♄</div>
                    <h3 className="font-medium text-gray-700">MOUNT OF SATURN</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Below middle finger</p>
                  <p className="mb-1"><strong>Qualities:</strong> Wisdom, responsibility, seriousness</p>
                  <p><strong>When developed:</strong> Philosophical, studious, serious nature</p>
                </div>

                <div className="bg-orange-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">☉</div>
                    <h3 className="font-medium text-orange-700">MOUNT OF APOLLO</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Below ring finger</p>
                  <p className="mb-1"><strong>Qualities:</strong> Creativity, art, success</p>
                  <p><strong>When developed:</strong> Artistic talent, love of beauty, fame potential</p>
                </div>

                <div className="bg-green-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">☿</div>
                    <h3 className="font-medium text-green-700">MOUNT OF MERCURY</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Below pinky finger</p>
                  <p className="mb-1"><strong>Qualities:</strong> Communication, business, wit</p>
                  <p><strong>When developed:</strong> Excellent communicator, business sense</p>
                </div>

                <div className="bg-pink-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">♀</div>
                    <h3 className="font-medium text-pink-700">MOUNT OF VENUS</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Base of thumb</p>
                  <p className="mb-1"><strong>Qualities:</strong> Love, passion, vitality</p>
                  <p><strong>When developed:</strong> Loving nature, artistic sense, strong libido</p>
                </div>

                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-2">♂</div>
                    <h3 className="font-medium text-red-700">MOUNT OF MARS</h3>
                  </div>
                  <p className="mb-1"><strong>Location:</strong> Two areas - upper & lower palm</p>
                  <p className="mb-1"><strong>Qualities:</strong> Courage, determination, aggression</p>
                  <p><strong>When developed:</strong> Brave, determined, strong-willed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Reading Mount Development</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-green-600">Well-Developed Mount:</strong> Raised, firm, well-formed - indicates strong expression of that planetary quality
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong className="text-purple-600">Flat Mount:</strong> Less prominent - that planetary influence is weaker or underdeveloped
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <strong className="text-pink-600">Over-Developed Mount:</strong> Excessive prominence - that quality may be overdone or unbalanced
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Mount Combinations</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-orange-600">Strong Jupiter + Mercury</h3>
                  <p>Natural born leader with excellent communication skills, ideal for politics or public speaking</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">Strong Venus + Apollo</h3>
                  <p>Artistic nature combined with love of beauty, potential for success in creative fields</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-600">Strong Mars + Jupiter</h3>
                  <p>Courageous leader, military or emergency services potential, natural authority</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-600">Strong Saturn + Mercury</h3>
                  <p>Serious intellectual, researcher, scientist, or scholar with deep wisdom</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Special Mount Features</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
                  <strong>Stars on Mounts:</strong> Exceptional talent or fame potential in that area
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-red-100 p-3 rounded">
                  <strong>Crosses on Mounts:</strong> Obstacles or challenges related to that planetary influence
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded">
                  <strong>Triangles on Mounts:</strong> Harmonious development of that planetary quality
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-purple-700">Mount Analysis Tips</h3>
              <div className="text-xs space-y-1">
                <p>• Compare mount development between both hands</p>
                <p>• Feel for firmness - soft mounts show potential, firm mounts show active energy</p>
                <p>• Look for lines originating from or ending at mounts</p>
                <p>• Consider mount color and skin texture</p>
                <p>• Balance is key - no single mount should dominate entirely</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}