import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface MercuryRetrogradePageReplicaProps {
  pageNumber: number
}

export function MercuryRetrogradePageReplica({ pageNumber }: MercuryRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-12">
        {/* Top ornate frame with MERCURY */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-amber-200/60"></div>

              {/* Top decoration */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                  <div className="w-3 h-3 border border-amber-200/60 rounded-full"></div>
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                MERCURY
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                Retrograding Mercury, the planet of communication, 
                intellect, and travel often signals a time for reevaluation of how we express ourselves, process information, and move from one place to another. This period 
                is notorious for creating confusion, delays, and frustration in communication and technology. However, 
                it also offers an opportunity for reflection, reassessment, and revisiting old conversations or projects.
              </p>

              {/* Bottom Mercury symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">☿</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mercury Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            MERCURY RETROGRADE<br />
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
                  When Mercury retrogrades in Aries, it prompts a reconsideration of your 
                  assertiveness and directness in communication. There may be a tendency for 
                  discussions to become debates, so it's essential to think before speaking and 
                  act with patience.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  This retrograde phase calls for a slow-down in making financial decisions and 
                  expressing personal values. It's a time to reassess what truly matters to us on 
                  a material and emotional level, encouraging a more deliberate approach to 
                  communication and spending.
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
                  Being ruled by Mercury, Gemini feels the effects keenly. Misunderstandings and communication breakdowns are more likely. It's a period 
                  to review how we share information and to listen more attentively.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Focus turns to the home and emotional communication. Misinterpretations with family members are 
                  possible. Reflect on your emotional needs and how you express your 
                  care and concern for others.
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
