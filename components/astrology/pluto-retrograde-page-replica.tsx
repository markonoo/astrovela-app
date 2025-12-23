import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface PlutoRetrogradePageReplicaProps {
  pageNumber: number
}

export function PlutoRetrogradePageReplica({ pageNumber }: PlutoRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-6">
        {/* Top ornate frame with PLUTO */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with transformative design */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Corner decorations with transformative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-amber-200/60 rounded-full bg-amber-200/10"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-amber-200/60 rounded-full bg-amber-200/10"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-amber-200/60 rounded-full bg-amber-200/10"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-amber-200/60 rounded-full bg-amber-200/10"></div>

              {/* Top decoration with transformative elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full bg-amber-200/20"></div>
                  <div className="w-3 h-3 border border-amber-200/60 rounded-full bg-amber-200/10"></div>
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full bg-amber-200/20"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                PLUTO
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                During Pluto retrograde, the processes of transformation 
                and change become more internalized, prompting us to 
                reflect on power dynamics, deep-seated fears, and our 
                capacity for rebirth. This phase often reveals what needs 
                to be released to facilitate our growth and evolution. It's 
                a time for facing the shadow side of ourselves and our 
                lives, enabling profound healing and regeneration.
              </p>

              {/* Bottom Pluto symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♇</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pluto Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            PLUTO RETROGRADE<br />
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
                  Personal power and the drive for new beginnings are under intense 
                  scrutiny. This retrograde challenges you to consider how you assert 
                  your will and confront fears related to autonomy and leadership.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Values, material security, and self-worth face transformation. Reflect on your attachments to material 
                  possessions and whether they serve as a source of true security or 
                  a barrier to growth.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Communication, information, and the way you connect with others 
                  may undergo deep changes. Consider how your words and thoughts 
                  influence your power dynamics and if they reflect your true self.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Emotional foundations, family, and your sense of security are areas for 
                  profound introspection. This period invites you to explore emotional 
                  undercurrents and transform your foundational relationships.
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
                  Creative expression, romance, and personal pride are examined. Pluto 
                  retrograde asks you to confront the shadows in how you express yourself and seek recognition, encouraging authenticity and transformation 
                  in your creative life.
                </p>
              </div>

              {/* Virgo */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Daily routines, health, and service to others may reveal underlying 
                  control issues or obsessions. Reflect on how these areas are connected 
                  to your deeper need for transformation and healing.
                </p>
              </div>

              {/* Libra */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Relationships and the quest for balance undergo intense transformation. This retrograde period encourages you to explore power dynamics 
                  in partnerships and to seek deeper, more transformative connections.
                </p>
              </div>

              {/* Scorpio */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  As the ruler of Scorpio, Pluto's retrograde here amplifies themes of 
                  death, rebirth, and personal transformation. It's a powerful time for 
                  self-discovery, confronting fears, and embracing the true essence 
                  of change.
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
