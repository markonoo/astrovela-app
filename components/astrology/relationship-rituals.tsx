import React from "react"
import { Section } from "./base/Section"

interface RelationshipRitualsProps {
  pageNumber: number
}

export function RelationshipRituals({ pageNumber }: RelationshipRitualsProps) {
  const rituals = [
    {
      name: "Rose Quartz Harmony Ritual",
      purpose: "Attract love and enhance existing relationships",
      materials: "Rose quartz, white candles, rose petals",
      instructions: "Light candles during Venus hour (Friday evening). Hold rose quartz while visualizing your ideal relationship. Scatter rose petals around your space."
    },
    {
      name: "Full Moon Release Ceremony",
      purpose: "Release relationship blocks and past hurts",
      materials: "Paper, pen, fireproof bowl, sage",
      instructions: "Write down what you want to release. Burn the paper safely during full moon. Cleanse space with sage and set new intentions."
    },
    {
      name: "Venus Day Love Manifestation",
      purpose: "Manifest new love or deepen existing bonds",
      materials: "Green candle, cinnamon, honey, pink paper",
      instructions: "On Friday, write your love intention on pink paper. Anoint candle with honey and sprinkle cinnamon. Burn while focusing on your desire."
    },
    {
      name: "Twin Flame Connection Ritual",
      purpose: "Strengthen spiritual connection with your partner",
      materials: "Two matching crystals, red string, lavender",
      instructions: "Tie crystals together with red string. Both partners hold while meditating together. Place lavender nearby for peace and harmony."
    }
  ]

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50">
      <Section className="page-light max-w-4xl overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.15em] font-serif text-purple-800">
            RELATIONSHIP RITUALS
          </h1>
          <div className="text-sm text-purple-600 mb-8">
            Sacred practices to nurture love and connection
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
            <h2 className="text-xl font-medium mb-4 text-purple-800">The Power of Sacred Ritual</h2>
            <p className="text-sm leading-relaxed text-purple-900">
              Relationship rituals are sacred practices that help us focus our intentions, connect with 
              divine love energy, and create positive change in our romantic lives. These ceremonies 
              combine the power of intention, symbolism, and cosmic timing to manifest love and healing.
            </p>
          </div>

          <div className="space-y-6">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-medium text-purple-800">{ritual.name}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-purple-700">
                    <strong>Purpose:</strong> {ritual.purpose}
                  </p>
                  <p className="text-sm text-purple-700">
                    <strong>Materials:</strong> {ritual.materials}
                  </p>
                  <p className="text-sm leading-relaxed text-purple-900">
                    <strong>Instructions:</strong> {ritual.instructions}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 border border-purple-200">
            <h2 className="text-xl font-medium mb-4 text-purple-800 text-center">Ritual Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-purple-700 mb-2">Before the Ritual</h4>
                <ul className="space-y-1 text-purple-800">
                  <li>• Cleanse your space with sage or incense</li>
                  <li>• Set clear, positive intentions</li>
                  <li>• Choose appropriate timing (Venus hours, full/new moon)</li>
                  <li>• Gather all materials beforehand</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-purple-700 mb-2">During the Ritual</h4>
                <ul className="space-y-1 text-purple-800">
                  <li>• Maintain focus and positive energy</li>
                  <li>• Trust your intuition and inner guidance</li>
                  <li>• Speak affirmations with conviction</li>
                  <li>• Feel gratitude for love in your life</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">Safety & Ethics</h3>
              <div className="space-y-2 text-sm text-purple-900">
                <p>• Never perform rituals to manipulate specific people</p>
                <p>• Focus on attracting what's best for your highest good</p>
                <p>• Respect free will and consent always</p>
                <p>• Use fire and candles safely</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-200">
              <h3 className="text-lg font-medium mb-3 text-purple-800">After the Ritual</h3>
              <div className="space-y-2 text-sm text-purple-900">
                <p>• Express gratitude to the universe</p>
                <p>• Trust in the divine timing of results</p>
                <p>• Take inspired action when opportunities arise</p>
                <p>• Keep ritual tools cleansed and sacred</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}