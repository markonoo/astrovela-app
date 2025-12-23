import React from "react"
import { Section } from "./base/Section"

interface CrystalsForLoveIntroProps {
  pageNumber: number
}

export function CrystalsForLoveIntro({ pageNumber }: CrystalsForLoveIntroProps) {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-rose-800">
              CRYSTALS FOR LOVE
            </h1>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-rose-700 font-light">
                "Crystals hold the Earth's ancient wisdom of love, amplifying the heart's desires and harmonizing romantic energies."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">How Crystals Work in Love</h2>
              <p className="mb-3 text-xs">Crystals vibrate at specific frequencies that can align with and enhance our emotional and energetic states, particularly those related to love and relationships.</p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong>Heart Chakra Alignment:</strong> Green and pink stones open the heart to give and receive love
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Emotional Healing:</strong> Crystals can help release past relationship trauma and emotional blocks
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Primary Love Crystals</h2>
              <div className="space-y-3 text-xs">
                <div className="flex items-center bg-rose-50 p-3 rounded">
                  <div className="w-4 h-4 bg-pink-400 rounded-full mr-3"></div>
                  <div>
                    <strong>Rose Quartz:</strong> The ultimate love stone, promotes self-love and attracts romantic love
                  </div>
                </div>
                <div className="flex items-center bg-green-50 p-3 rounded">
                  <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                  <div>
                    <strong>Green Aventurine:</strong> Heart chakra healing, emotional recovery, new relationship confidence
                  </div>
                </div>
                <div className="flex items-center bg-red-50 p-3 rounded">
                  <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                  <div>
                    <strong>Garnet:</strong> Passion, sensuality, and commitment in existing relationships
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Using Love Crystals</h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h3 className="font-medium mb-2">Meditation</h3>
                  <p>Hold crystals while visualizing your ideal relationship or partner</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Bedroom Placement</h3>
                  <p>Place pairs of crystals in your bedroom's relationship corner (far right from entrance)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}