import React from "react"
import { Section } from "./base/Section"

interface CrystalsIntroductionProps {
  pageNumber: number
}

export function CrystalsIntroduction({ pageNumber }: CrystalsIntroductionProps) {
  return (
    <div className="h-full bg-black flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between p-4 relative overflow-hidden">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-[#D4AF37]">
              CRYSTAL HEALING GUIDE
            </h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg italic text-yellow-300 font-light mb-6">
              "Harness the Earth's Ancient Wisdom for Modern Healing"
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-gray-100">
            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Essential Crystals for Beginners</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/10 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-white rounded-full mr-3 opacity-70"></div>
                    <strong className="text-white">Clear Quartz - The Master Healer</strong>
                  </div>
                  <p className="text-gray-300">Amplifies energy, enhances clarity, programmable for any intention. Perfect for beginners.</p>
                </div>
                <div className="bg-purple-900/30 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-purple-400 rounded-full mr-3"></div>
                    <strong className="text-purple-300">Amethyst - Spiritual Protection</strong>
                  </div>
                  <p className="text-gray-300">Calms the mind, enhances intuition, promotes peaceful sleep and meditation.</p>
                </div>
                <div className="bg-pink-900/30 p-3 rounded">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-pink-400 rounded-full mr-3"></div>
                    <strong className="text-pink-300">Rose Quartz - Unconditional Love</strong>
                  </div>
                  <p className="text-gray-300">Opens the heart chakra, promotes self-love, attracts romantic love and friendship.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">How to Use Crystals</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2 text-yellow-300">Daily Practices</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Carry in pocket or purse</li>
                    <li>• Meditate while holding</li>
                    <li>• Place under pillow for dreams</li>
                    <li>• Create crystal grids</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-white">Healing Sessions</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Place on chakras</li>
                    <li>• Create healing layouts</li>
                    <li>• Use in energy work</li>
                    <li>• Combine with Reiki</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Crystal Care & Cleansing</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-400">
                  <strong className="text-blue-300">Water Cleansing:</strong> Hold under running water (avoid soft stones like selenite)
                </div>
                <div className="bg-gray-800/60 p-3 rounded border-l-4 border-gray-400">
                  <strong className="text-gray-300">Smoke Cleansing:</strong> Use sage, palo santo, or incense to clear energy
                </div>
                <div className="bg-purple-900/30 p-3 rounded border-l-4 border-purple-400">
                  <strong className="text-purple-300">Moonlight Charging:</strong> Place under full moon to recharge with lunar energy
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Crystal Placement in Your Home</h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-red-900/20 p-3 rounded">
                  <strong className="text-red-300">Bedroom:</strong> Amethyst for peaceful sleep, rose quartz for love
                </div>
                <div className="bg-green-900/20 p-3 rounded">
                  <strong className="text-green-300">Living Room:</strong> Clear quartz for harmony, citrine for abundance
                </div>
                <div className="bg-blue-900/20 p-3 rounded">
                  <strong className="text-blue-300">Office:</strong> Fluorite for focus, pyrite for prosperity
                </div>
                <div className="bg-purple-900/20 p-3 rounded">
                  <strong className="text-purple-300">Entrance:</strong> Black tourmaline for protection from negative energy
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-[#D4AF37]">Programming Your Crystals</h2>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="bg-yellow-900/30 p-3 rounded">
                  <p><strong className="text-yellow-300">Step 1:</strong> Cleanse the crystal to remove previous energy</p>
                </div>
                <div className="bg-amber-900/30 p-3 rounded">
                  <p><strong className="text-amber-300">Step 2:</strong> Hold crystal and focus on your specific intention</p>
                </div>
                <div className="bg-orange-900/30 p-3 rounded">
                  <p><strong className="text-orange-300">Step 3:</strong> Speak or think your intention into the crystal clearly</p>
                </div>
                <div className="bg-red-900/30 p-3 rounded">
                  <p><strong className="text-red-300">Step 4:</strong> Visualize your intention manifesting through the crystal</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 p-4 rounded-lg border border-[#D4AF37]/30">
              <h3 className="font-medium mb-2 text-[#D4AF37]">Remember</h3>
              <p className="text-xs text-gray-300">Crystals are tools to support your intentions and energy work. The real power comes from within you - crystals simply amplify and focus that power.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}