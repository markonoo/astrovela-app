import React from "react"
import { Section } from "./base/Section"

interface HandTypesProps {
  pageNumber: number
}

export function HandTypes({ pageNumber }: HandTypesProps) {
  return (
    <div className="h-full bg-gradient-to-br from-orange-50 to-red-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-orange-800">
              HAND TYPES & SHAPES
            </h1>
            <div className="w-24 h-px bg-orange-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-orange-700">The Four Classical Hand Types</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-red-500 rounded mr-3"></div>
                    <h3 className="font-medium text-red-700">FIRE HANDS</h3>
                  </div>
                  <p className="mb-2"><strong>Shape:</strong> Square palm, short fingers</p>
                  <p className="mb-2"><strong>Personality:</strong> Energetic, spontaneous, natural leaders</p>
                  <p><strong>Careers:</strong> Entrepreneur, athlete, performer, emergency services</p>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded mr-3"></div>
                    <h3 className="font-medium text-green-700">EARTH HANDS</h3>
                  </div>
                  <p className="mb-2"><strong>Shape:</strong> Square palm, short fingers</p>
                  <p className="mb-2"><strong>Personality:</strong> Practical, reliable, down-to-earth</p>
                  <p><strong>Careers:</strong> Builder, farmer, accountant, craftsperson</p>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded mr-3"></div>
                    <h3 className="font-medium text-blue-700">AIR HANDS</h3>
                  </div>
                  <p className="mb-2"><strong>Shape:</strong> Square palm, long fingers</p>
                  <p className="mb-2"><strong>Personality:</strong> Intellectual, communicative, curious</p>
                  <p><strong>Careers:</strong> Writer, teacher, lawyer, researcher</p>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded mr-3"></div>
                    <h3 className="font-medium text-purple-700">WATER HANDS</h3>
                  </div>
                  <p className="mb-2"><strong>Shape:</strong> Long palm, long fingers</p>
                  <p className="mb-2"><strong>Personality:</strong> Intuitive, emotional, creative</p>
                  <p><strong>Careers:</strong> Artist, healer, counselor, musician</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-orange-700">Hand Texture & Flexibility</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong className="text-red-600">Soft Hands:</strong> Sensitive, comfort-loving, may lack follow-through on projects
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <strong className="text-orange-600">Firm Hands:</strong> Energetic, hardworking, persistent, goal-oriented
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <strong className="text-yellow-600">Hard Hands:</strong> Stubborn, practical, may be inflexible in thinking
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-orange-700">Finger Length Analysis</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-red-600">Short Fingers</h3>
                  <ul className="space-y-1">
                    <li>• Quick decision makers</li>
                    <li>• Impatient with details</li>
                    <li>• Big picture thinkers</li>
                    <li>• Action-oriented</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">Long Fingers</h3>
                  <ul className="space-y-1">
                    <li>• Detail-oriented</li>
                    <li>• Analytical thinkers</li>
                    <li>• Patient and methodical</li>
                    <li>• Love research and study</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-orange-700">Hand Size Significance</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded">
                  <strong>Large Hands:</strong> Detail-oriented, perfectionist tendencies, enjoy precision work
                </div>
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-3 rounded">
                  <strong>Small Hands:</strong> Big picture vision, entrepreneurial spirit, dislike mundane tasks
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-orange-700">Reading Hand Types</h3>
              <div className="text-xs space-y-1">
                <p>• Measure palm length vs finger length to determine type</p>
                <p>• Consider hand thickness and flexibility</p>
                <p>• Note skin texture and temperature</p>
                <p>• Observe natural hand position when relaxed</p>
                <p>• Combined factors give complete personality picture</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}