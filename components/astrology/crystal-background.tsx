import React from "react"
import { Section } from "./base/Section"

interface CrystalBackgroundProps {
  pageNumber: number
}

export function CrystalBackground({ pageNumber }: CrystalBackgroundProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              CRYSTAL FOUNDATIONS
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg italic text-purple-700 font-light mb-6">
              "Ancient Earth Wisdom for Modern Healing"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">The Ancient Origins of Crystal Healing</h2>
              <p className="mb-3 text-xs">Crystals have been revered across cultures for millennia as powerful tools for healing, protection, and spiritual connection.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Ancient Egypt:</strong> Lapis lazuli for wisdom, turquoise for protection
                  </div>
                  <div>
                    <strong>Ancient Greece:</strong> Amethyst to prevent intoxication, clear quartz for clarity
                  </div>
                  <div>
                    <strong>Traditional Chinese Medicine:</strong> Jade for health and longevity
                  </div>
                  <div>
                    <strong>Native American:</strong> Turquoise as sacred stone connecting earth and sky
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">How Crystals Work</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-purple-50 p-3 rounded">
                  <strong className="text-purple-600">Vibrational Frequency:</strong> Each crystal vibrates at a unique frequency that can influence our energy fields and chakras.
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <strong className="text-indigo-600">Piezoelectric Properties:</strong> Many crystals generate electrical charge under pressure, affecting electromagnetic fields.
                </div>
                <div className="bg-violet-50 p-3 rounded">
                  <strong className="text-violet-600">Metaphysical Resonance:</strong> Crystals amplify intention and focus, supporting meditation and manifestation.
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Crystal Formation & Energy</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">Formation Types</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Igneous:</strong> Fire-formed, powerful energy</li>
                    <li>• <strong>Sedimentary:</strong> Slow formation, gentle healing</li>
                    <li>• <strong>Metamorphic:</strong> Transformation energy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">Crystal Systems</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Cubic:</strong> Grounding, stability</li>
                    <li>• <strong>Hexagonal:</strong> Communication, expression</li>
                    <li>• <strong>Trigonal:</strong> Balance, harmony</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Color & Chakra Correspondence</h2>
              <div className="grid grid-cols-7 gap-1 text-xs text-center">
                <div className="bg-red-100 p-2 rounded">
                  <strong className="text-red-600">Red</strong><br/>Root
                </div>
                <div className="bg-orange-100 p-2 rounded">
                  <strong className="text-orange-600">Orange</strong><br/>Sacral
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong className="text-yellow-600">Yellow</strong><br/>Solar
                </div>
                <div className="bg-green-100 p-2 rounded">
                  <strong className="text-green-600">Green</strong><br/>Heart
                </div>
                <div className="bg-blue-100 p-2 rounded">
                  <strong className="text-blue-600">Blue</strong><br/>Throat
                </div>
                <div className="bg-indigo-100 p-2 rounded">
                  <strong className="text-indigo-600">Indigo</strong><br/>Third Eye
                </div>
                <div className="bg-purple-100 p-2 rounded">
                  <strong className="text-purple-600">Violet</strong><br/>Crown
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Modern Crystal Science</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded">
                  <strong>Crystallography:</strong> Scientific study of crystal structure reveals geometric perfection and unique properties
                </div>
                <div className="bg-gradient-to-r from-indigo-100 to-violet-100 p-3 rounded">
                  <strong>Technology Applications:</strong> Quartz in watches, computers; semiconductors in electronics
                </div>
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-3 rounded">
                  <strong>Research Studies:</strong> Growing evidence for crystal effects on electromagnetic fields and human biofields
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-purple-700">Choosing Your Crystals</h3>
              <div className="text-xs space-y-1">
                <p>• Trust your intuition - you're often drawn to crystals you need</p>
                <p>• Consider your specific goals: healing, protection, manifestation</p>
                <p>• Start with versatile stones: clear quartz, amethyst, rose quartz</p>
                <p>• Research metaphysical properties and traditional uses</p>
                <p>• Hold crystals to feel their energy before purchasing</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}