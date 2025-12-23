import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface VenusRetrogradePageReplicaProps {
  pageNumber: number
}

export function VenusRetrogradePageReplica({ pageNumber }: VenusRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-12">
        {/* Top ornate frame with VENUS */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-amber-200/60"></div>

              {/* Top decoration with hearts */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                  <div className="text-amber-200 text-sm">♡</div>
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                VENUS
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                Venus governs love, beauty, pleasure, and finances. 
                When Venus goes retrograde, it's a period for reevaluating our relationships, personal values, financial situations, 
                and the things that bring us joy and comfort. It can lead 
                to past lovers reappearing, financial reviews, and a reassessment of what we find truly valuable and beautiful 
                in our lives. This retrograde asks us to find balance and 
                realign with our core values and desires in these areas.
              </p>

              {/* Bottom Venus symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venus Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            VENUS RETROGRADE<br />
            THROUGH THE SIGNS
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Aries */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="aries" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">ARIES</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  A time to reconsider your approach to love and assertiveness in relationships. Impulsive spending or 
                  decisions in love may come up for review. Reflect on how you pursue 
                  what you desire.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  With Taurus ruled by Venus, this retrograde can significantly impact 
                  your sense of security and material possessions. Reevaluate your 
                  spending habits and what you value in life, seeking a deeper connection to your sense of self-worth.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Communication in relationships is highlighted. Misunderstandings may 
                  lead to reevaluating how you connect with others. It's an opportunity 
                  to listen more closely to your partners and friends and reassess your 
                  social interactions.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Home and emotional security take center stage. You may find yourself 
                  reflecting on your living situation or your emotional investments in relationships. Consider what truly makes 
                  you feel at home and nurtured.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-8">
          <span className="text-amber-200 text-sm">{pageNumber}</span>
        </div>
      </Section>
    </div>
  )
}
