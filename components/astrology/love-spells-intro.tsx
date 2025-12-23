import React from "react"
import { Section } from "./base/Section"

interface LoveSpellsIntroProps {
  pageNumber: number
}

export function LoveSpellsIntro({ pageNumber }: LoveSpellsIntroProps) {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-indigo-800">
              LOVE SPELLS & RITUALS
            </h1>
            <div className="w-24 h-px bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-indigo-700 font-light">
                "Love magic works through intention, natural elements, and universal energy to align your heart with cosmic love forces."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Understanding Love Magic</h2>
              <p className="mb-3 text-xs">Love spells are focused intentions combined with natural elements and celestial timing to attract, enhance, or heal romantic energy.</p>
              <div className="bg-white/60 p-3 rounded">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong>Ethical Foundation:</strong> Never to manipulate or control another's free will
                  </div>
                  <div>
                    <strong>Purpose:</strong> To open your own heart and attract compatible love
                  </div>
                  <div>
                    <strong>Energy Source:</strong> Personal intention aligned with universal love
                  </div>
                  <div>
                    <strong>Timing:</strong> New moons, Venus hours, Friday evenings
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Essential Spell Components</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">Natural Elements</h3>
                  <ul className="space-y-1">
                    <li>• Rose petals (love attraction)</li>
                    <li>• Lavender (harmony & peace)</li>
                    <li>• Cinnamon (passion & warmth)</li>
                    <li>• Vanilla (sensuality & comfort)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">Sacred Tools</h3>
                  <ul className="space-y-1">
                    <li>• Pink or red candles</li>
                    <li>• Rose quartz crystals</li>
                    <li>• Copper bowl (Venus metal)</li>
                    <li>• Fresh flowers or herbs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Spell Preparation</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-purple-50 p-3 rounded">
                  <strong>Cleansing:</strong> Purify space and tools with sage or palo santo before beginning
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <strong>Protection:</strong> Cast a circle of light or call upon loving guardians
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <strong>Intention Setting:</strong> Be clear about your desire while remaining open to divine timing
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-indigo-700">Types of Love Magic</h2>
              <div className="grid grid-cols-3 gap-3 text-xs text-center">
                <div className="bg-red-100 p-3 rounded">
                  <strong>Attraction Spells:</strong> Drawing new love
                </div>
                <div className="bg-pink-100 p-3 rounded">
                  <strong>Binding Rituals:</strong> Strengthening existing bonds
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <strong>Healing Magic:</strong> Mending heartbreak
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-indigo-700">Sacred Reminders</h3>
              <div className="text-xs space-y-1">
                <p>• Love magic should align with your highest good</p>
                <p>• Focus on attracting the right person rather than a specific person</p>
                <p>• Trust in divine timing and remain open to unexpected forms of love</p>
                <p>• Practice self-love as the foundation for all love magic</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}