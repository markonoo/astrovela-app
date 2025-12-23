import React from "react"
import { Section } from "./base/Section"

interface LoveCrystalsCollectionProps {
  pageNumber: number
}

export function LoveCrystalsCollection({ pageNumber }: LoveCrystalsCollectionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-rose-800">
              LOVE CRYSTAL COLLECTION
            </h1>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-pink-400 rounded-full mr-3"></div>
                  <h3 className="font-medium text-rose-700">Rose Quartz</h3>
                </div>
                <p className="text-xs mb-2">The master healer for all matters of the heart.</p>
                <p className="text-xs text-rose-600"><strong>Use for:</strong> Self-love, attracting romantic love, healing heartbreak</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="font-medium text-red-700">Red Garnet</h3>
                </div>
                <p className="text-xs mb-2">Ignites passion and strengthens commitment.</p>
                <p className="text-xs text-red-600"><strong>Use for:</strong> Rekindling passion, deepening intimacy, marriage commitment</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full mr-3"></div>
                  <h3 className="font-medium text-green-700">Green Aventurine</h3>
                </div>
                <p className="text-xs mb-2">Heals emotional wounds and opens heart to new love.</p>
                <p className="text-xs text-green-600"><strong>Use for:</strong> Moving on from past relationships, confidence in dating</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-purple-400 rounded-full mr-3"></div>
                  <h3 className="font-medium text-purple-700">Amethyst</h3>
                </div>
                <p className="text-xs mb-2">Brings spiritual connection and emotional clarity.</p>
                <p className="text-xs text-purple-600"><strong>Use for:</strong> Soul mate connections, healing emotional pain</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-blue-400 rounded-full mr-3"></div>
                  <h3 className="font-medium text-blue-700">Moonstone</h3>
                </div>
                <p className="text-xs mb-2">Enhances intuition and emotional balance in relationships.</p>
                <p className="text-xs text-blue-600"><strong>Use for:</strong> Understanding partner's needs, fertility, new beginnings</p>
              </div>

              <div className="bg-white/70 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-orange-400 rounded-full mr-3"></div>
                  <h3 className="font-medium text-orange-700">Carnelian</h3>
                </div>
                <p className="text-xs mb-2">Boosts confidence and sexual energy.</p>
                <p className="text-xs text-orange-600"><strong>Use for:</strong> Attracting partners, courage in love, creative romance</p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-rose-700">Crystal Care for Love Work</h3>
              <div className="text-xs space-y-1">
                <p><strong>Cleansing:</strong> Monthly full moon water cleansing to maintain love energy</p>
                <p><strong>Programming:</strong> Hold crystal while focusing on specific love intention</p>
                <p><strong>Placement:</strong> Keep love crystals in bedroom, on heart chakra, or in relationship corner</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}