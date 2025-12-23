import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface MarsRetrogradePageReplicaProps {
  pageNumber: number
}

export function MarsRetrogradePageReplica({ pageNumber }: MarsRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-12">
        {/* Top ornate frame with MARS */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with angular design */}
            <div className="border-2 border-amber-200/60 p-8 relative" style={{ clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              {/* Corner decorations - angular for Mars */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-amber-200/60 transform rotate-45"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-amber-200/60 transform -rotate-45"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-amber-200/60 transform -rotate-45"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-amber-200/60 transform rotate-45"></div>

              {/* Top decoration with angular elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 border border-amber-200/60 transform rotate-45"></div>
                  <div className="w-2 h-2 bg-amber-200/60 transform rotate-45"></div>
                  <div className="w-3 h-3 border border-amber-200/60 transform rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                MARS
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                Mars' retrograde can lead to a decrease in our usual levels 
                of energy and assertiveness, making it feel like we're not 
                making progress or that our efforts are being thwarted. 
                It's a time for internalizing our energy rather than externalizing it, focusing on strategy rather than direct action. 
                This period prompts us to question our motivations, 
                desires, and the way we go after what we want in life.
              </p>

              {/* Bottom Mars symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♂</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mars Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            MARS RETROGRADE<br />
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
                  As the ruler of Aries, Mars retrograde in this sign challenges your 
                  sense of self-assertion and independence. It's a period to rethink 
                  your approach to leadership and how you initiate actions and projects. Patience and strategy are key.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Financial initiatives and pursuits of physical pleasures are called into 
                  question. You might find yourself reassessing your spending habits 
                  and your pursuit of material security. Focus on aligning your actions 
                  with your true values.
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
                  Communication and movement may feel stifled. Plans and pro-jects requiring quick thinking and 
                  flexibility might face delays. It's a time to review how you assert your 
                  ideas and adapt your strategies for better effectiveness.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Emotional energy and action related to home and family life are in focus. You may need to address past 
                  aggressions or unresolved conflicts in these areas. Reflect on how you 
                  protect and assert yourself in your personal life.
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
