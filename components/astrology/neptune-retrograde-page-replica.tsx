import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface NeptuneRetrogradePageReplicaProps {
  pageNumber: number
}

export function NeptuneRetrogradePageReplica({ pageNumber }: NeptuneRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-6">
        {/* Top ornate frame with NEPTUNE */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with wavy design */}
            <div className="border-2 border-amber-200/60 p-8 relative rounded-xl">
              {/* Wavy corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M2 16 Q8 8, 16 16 Q24 24, 30 16" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M2 16 Q8 24, 16 16 Q24 8, 30 16" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M2 16 Q8 24, 16 16 Q24 8, 30 16" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M2 16 Q8 8, 16 16 Q24 24, 30 16" strokeWidth="2"/>
                </svg>
              </div>

              {/* Top decoration with wavy elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                  <div className="w-3 h-1 border border-amber-200/60 rounded-full"></div>
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                NEPTUNE
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                During Neptune's retrograde, the veil between reality 
                and illusion can become more pronounced, urging us to 
                seek clarity in our spiritual beliefs, creative inspirations, 
                and connections to the unseen. This period encourages 
                a reevaluation of where we might be deceiving ourselves 
                or escaping reality, inviting a deeper exploration of our 
                spiritual paths and artistic expressions. It's a time for 
                uncovering hidden truths and embracing a more authentic connection to the spiritual dimensions of life.
              </p>

              {/* Bottom Neptune symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♆</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neptune Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            NEPTUNE RETROGRADE<br />
            THROUGH THE SIGNS
          </h2>

          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Aries */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="aries" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">ARIES</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  This retrograde challenges your concept of the self and the spiritual 
                  warrior within you. Reflect on your actions and desires, ensuring they're 
                  aligned with your spiritual ideals rather than mere illusions of the ego.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Your values and material attachments are under scrutiny. Neptune 
                  retrograde invites you to consider the spiritual value of your possessions 
                  and to find a deeper sense of security in intangible, spiritual wealth.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Communication and connection with others may become clouded. 
                  It's a time to listen more deeply to the unsaid and to find truth in the 
                  spaces between words, embracing a more intuitive way of connecting.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Emotional and domestic realms may reveal illusions or hidden 
                  truths. This period prompts a deeper understanding of your emotional foundations and a reconnection with your spiritual home.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Leo */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="leo" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">LEO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Creative expression and romance could face a period of confusion 
                  or inspiration. Neptune retrograde asks you to explore the authenticity of your creative outputs and the spiritual connection in your romantic relationships.
                </p>
              </div>

              {/* Virgo */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Daily routines and health practices might require a reevaluation of their 
                  spiritual significance. Reflect on how your everyday actions align with your 
                  higher self and incorporate spiritual practices into your daily life.
                </p>
              </div>

              {/* Libra */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Relationships and your pursuit of harmony and balance are examined 
                  for underlying illusions. Seek deeper, spiritual connections in partnerships, 
                  looking beyond the superficial to the soul-level bonds.
                </p>
              </div>

              {/* Scorpio */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Intimacy, transformation, and shared resources are areas for profound 
                  spiritual introspection. This retrograde challenges you to explore the 
                  spiritual dimensions of closeness and change, uncovering deeper truths.
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
