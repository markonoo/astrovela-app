import React from "react"
import { Section } from "./base/Section"

interface LoveAffirmationsProps {
  pageNumber: number
}

export function LoveAffirmations({ pageNumber }: LoveAffirmationsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-amber-800">
              LOVE AFFIRMATIONS
            </h1>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-amber-700 font-light">
                "Speak these sacred words to align your heart with the frequency of love and attract your highest good."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Self-Love Affirmations</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/70 p-3 rounded italic text-amber-800">
                  "I am worthy of deep, unconditional love."
                </div>
                <div className="bg-white/70 p-3 rounded italic text-amber-800">
                  "I radiate love and attract love effortlessly."
                </div>
                <div className="bg-white/70 p-3 rounded italic text-amber-800">
                  "My heart is open, healed, and ready for love."
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Attracting Love</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-amber-50 p-3 rounded italic text-amber-800">
                  "My soulmate is drawn to me by divine timing."
                </div>
                <div className="bg-amber-50 p-3 rounded italic text-amber-800">
                  "I attract a partner who loves and cherishes me completely."
                </div>
                <div className="bg-amber-50 p-3 rounded italic text-amber-800">
                  "Love flows to me easily and abundantly."
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Relationship Harmony</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-orange-50 p-3 rounded italic text-orange-800">
                  "Our love grows stronger and deeper each day."
                </div>
                <div className="bg-orange-50 p-3 rounded italic text-orange-800">
                  "We communicate with love, understanding, and respect."
                </div>
                <div className="bg-orange-50 p-3 rounded italic text-orange-800">
                  "Our relationship is blessed with joy, passion, and harmony."
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-amber-700">Healing Past Wounds</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-yellow-50 p-3 rounded italic text-yellow-800">
                  "I release all past hurt and embrace new love."
                </div>
                <div className="bg-yellow-50 p-3 rounded italic text-yellow-800">
                  "I forgive myself and others, creating space for love."
                </div>
              </div>
            </div>

            <div className="bg-amber-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-amber-700">How to Use Affirmations</h3>
              <div className="text-xs space-y-1">
                <p>• Repeat daily, especially morning and evening</p>
                <p>• Speak with feeling and conviction</p>
                <p>• Write them down in a love journal</p>
                <p>• Record yourself speaking them and listen back</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}