import React from "react"
import { Section } from "./base/Section"

interface LoveSpellsCollectionProps {
  pageNumber: number
}

export function LoveSpellsCollection({ pageNumber }: LoveSpellsCollectionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              SACRED LOVE SPELLS
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed">
            <div className="bg-white/70 p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3 text-pink-700">New Moon Love Attraction Spell</h2>
              <div className="text-xs space-y-2">
                <p><strong>Timing:</strong> New moon in Libra, Venus, or your 7th house</p>
                <p><strong>Materials:</strong> Pink candle, rose petals, rose quartz, paper, red ink</p>
                <div className="bg-pink-50 p-3 rounded">
                  <p><strong>Ritual:</strong> Light candle at sunset. Write qualities of ideal partner in red ink. Surround paper with rose petals and crystal. Visualize meeting this person. Burn paper, scatter ashes with petals under stars.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3 text-red-700">Passion Rekindling Ritual</h2>
              <div className="text-xs space-y-2">
                <p><strong>Timing:</strong> Friday evening during waxing moon</p>
                <p><strong>Materials:</strong> Red candles (2), cinnamon oil, shared photo, red roses</p>
                <div className="bg-red-50 p-3 rounded">
                  <p><strong>Ritual:</strong> Anoint candles with cinnamon oil. Place photo between candles with roses. Light candles simultaneously. Focus on rekindling passion and joy. Let candles burn completely.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3 text-green-700">Heart Healing Spell</h2>
              <div className="text-xs space-y-2">
                <p><strong>Timing:</strong> Waning moon, preferably in Pisces or Cancer</p>
                <p><strong>Materials:</strong> Green candle, lavender, clear quartz, small mirror</p>
                <div className="bg-green-50 p-3 rounded">
                  <p><strong>Ritual:</strong> Light candle before mirror. Hold crystal over heart, stating: "I release all pain and open to love." Sprinkle lavender in flowing water. Gaze in mirror with compassion for yourself.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3 text-purple-700">Soul Mate Summoning</h2>
              <div className="text-xs space-y-2">
                <p><strong>Timing:</strong> Full moon in your 7th house or Venus return</p>
                <p><strong>Materials:</strong> White candle, amethyst, lavender oil, violet flowers</p>
                <div className="bg-purple-50 p-3 rounded">
                  <p><strong>Ritual:</strong> Create sacred space. Anoint candle with oil. Hold amethyst while stating: "I call my divine complement to me now." Arrange violets in heart shape. Meditate on spiritual connection rather than physical appearance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3 text-blue-700">Commitment Blessing Ritual</h2>
              <div className="text-xs space-y-2">
                <p><strong>Timing:</strong> Jupiter in 7th house or Venus trine Jupiter</p>
                <p><strong>Materials:</strong> Gold candles (2), rings or symbols of commitment, white flowers</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p><strong>Ritual:</strong> Light candles together if possible. Exchange rings or symbols while stating intentions for the relationship. Surround with white flowers. Make promises for mutual support and growth.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded">
              <p className="text-xs italic text-center text-purple-700">
                "Remember: Love magic works best when combined with practical action, self-development, and genuine openness to love."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}