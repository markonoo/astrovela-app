import React from "react"
import { Section } from "./base/Section"

interface LoveRelationshipsIntroductionProps {
  pageNumber: number
}

export function LoveRelationshipsIntroduction({ pageNumber }: LoveRelationshipsIntroductionProps) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col flex-1 relative">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-rose-800">
              ASTROLOGY & LOVE
            </h1>
            <div className="w-24 h-px bg-rose-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-rose-700 font-light">
                "The stars have always guided lovers through the cosmic dance of attraction, compatibility, and eternal bonds."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Venus: Planet of Love</h2>
              <p className="mb-3">Venus governs how we express love, what we find attractive, and our romantic values. Your Venus sign reveals your love language and relationship style.</p>
              <div className="grid grid-cols-2 gap-4 text-xs bg-white/60 p-3 rounded">
                <div>
                  <strong>Venus in Fire Signs:</strong> Passionate, direct, adventurous in love
                </div>
                <div>
                  <strong>Venus in Earth Signs:</strong> Practical, loyal, sensual approach to love
                </div>
                <div>
                  <strong>Venus in Air Signs:</strong> Intellectual connection, communication-focused
                </div>
                <div>
                  <strong>Venus in Water Signs:</strong> Emotional depth, intuitive bonds
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Synastry: Relationship Astrology</h2>
              <p className="mb-3">Comparing birth charts reveals the dynamics between two people, highlighting areas of harmony and potential challenges.</p>
              <div className="space-y-2 text-xs">
                <p><strong>Sun-Moon Connections:</strong> Core compatibility and emotional understanding</p>
                <p><strong>Venus-Mars Aspects:</strong> Romantic and sexual attraction</p>
                <p><strong>7th House Placements:</strong> Partnership expectations and marriage potential</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Timing Love with Transits</h2>
              <div className="grid grid-cols-1 gap-3 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong>Venus Return:</strong> Occurs every 8 months, bringing new romantic opportunities
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>Jupiter Transits:</strong> Expansion in love when transiting your 5th or 7th house
                </div>
                <div className="bg-white/60 p-3 rounded">
                  <strong>New Moon in Libra:</strong> Ideal time for commitment and partnerships
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-rose-700">Composite Charts</h2>
              <p className="text-xs">The composite chart represents the relationship itself as a unique entity, revealing the purpose and potential of your union beyond individual compatibility.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}