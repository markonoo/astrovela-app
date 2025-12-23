import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface SaturnRetrogradePageReplicaProps {
  pageNumber: number
}

export function SaturnRetrogradePageReplica({ pageNumber }: SaturnRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-6">
        {/* Top ornate frame with SATURN */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with decorative top */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-amber-200/60"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-amber-200/60"></div>

              {/* Top decoration with leaf/plant motif */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-4 border border-amber-200/60 rounded-full transform rotate-12"></div>
                  <div className="w-3 h-5 border border-amber-200/60 rounded-full"></div>
                  <div className="w-2 h-4 border border-amber-200/60 rounded-full transform -rotate-12"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                SATURN
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                During Saturn retrograde, there is a call to review our 
                commitments, discipline, and the structures that define 
                our lives. It's a period that often feels like a test of our 
                patience and persistence, challenging us to reassess the 
                durability and authenticity of our goals and the methods 
                we use to achieve them. This phase encourages a consolidation of our efforts, refining our strategies, and perhaps 
                letting go of what no longer serves our highest good.
              </p>

              {/* Bottom Saturn symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♄</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saturn Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            SATURN RETROGRADE<br />
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
                  Challenges to your independence and leadership abilities prompt a 
                  reconsideration of how you initiate actions and assert your will. Reflect 
                  on the balance between autonomy and responsibility, ensuring your 
                  ambitions are rooted in maturity and realism.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Your approach to material security and values may face scrutiny. It's 
                  time to reassess your financial and personal commitments, focusing 
                  on building a stable foundation that reflects your true values and 
                  long-term goals.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Communication structures and the way you process and share information are under review. Consider if your methods of communication 
                  and learning are efficient and responsible, and if they contribute to 
                  your long-term objectives.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Emotional security, family responsibilities, and foundational structures 
                  are highlighted. Reflect on your emotional attachments and how 
                  they influence your sense of responsibility and discipline. It's a period for 
                  strengthening your emotional and domestic foundations.
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
                  Creative projects, romance, and how you express your authority are 
                  examined. This is a time to reassess your leadership style and creative 
                  outputs, ensuring they are structured and aligned with your authentic self and responsibilities.
                </p>
              </div>

              {/* Virgo */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Daily routines, work, and health commitments are scrutinized. Reflect on your work ethics, routines, 
                  and health practices, ensuring they contribute positively to your overall 
                  well-being and long-term goals.
                </p>
              </div>

              {/* Libra */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Relationships and commitments to others come under the spotlight. 
                  This period demands a reevaluation of your partnerships, both 
                  personal and professional, urging you to consider if they are built on 
                  solid, equitable foundations.
                </p>
              </div>

              {/* Scorpio */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Intimate relationships, shared resources, and transformational 
                  commitments are in focus. Reflect on your deeper bonds and shared 
                  obligations, ensuring they are rooted in trust, mutual growth, 
                  and long-term sustainability.
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
