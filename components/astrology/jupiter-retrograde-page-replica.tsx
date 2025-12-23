import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface JupiterRetrogradePageReplicaProps {
  pageNumber: number
}

export function JupiterRetrogradePageReplica({ pageNumber }: JupiterRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-4">
        {/* Top ornate frame with JUPITER */}
        <div className="flex justify-center mb-6">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with curved decorations */}
            <div className="border-2 border-amber-200/60 p-8 relative rounded-lg">
              {/* Corner decorations - curved for Jupiter */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-amber-200/60 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-amber-200/60 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-amber-200/60 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-amber-200/60 rounded-full"></div>

              {/* Top decoration with circles */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                  <div className="w-3 h-3 border border-amber-200/60 rounded-full"></div>
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                JUPITER
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                Jupiter is the planet of expansion, growth, luck, and our philosophical 
                beliefs. A Jupiter retrograde period prompts us to reflect on matters 
                of growth, faith, and where we find meaning in life. It's a time for 
                reevaluating our paths to personal development, understanding our 
                beliefs, and reassessing our goals and ambitions on a larger scale.
              </p>

              <p className="text-base leading-relaxed text-center text-amber-100 mt-4">
                During Jupiter's retrograde, there might be a feeling that our usual 
                luck and opportunities for growth are slowed down or less apparent. 
                This phase encourages turning inward, looking at our beliefs, and 
                understanding the truth behind our motivations. It's an opportunity 
                to ensure our expansion aligns with our true values and to refine our 
                approach to achieving our goals.
              </p>

              {/* Bottom Jupiter symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♃</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jupiter Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-lg font-light text-center mb-6 text-amber-200 tracking-wider">
            JUPITER RETROGRADE<br />
            THROUGH THE SIGNS
          </h2>

          <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Aries */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="aries" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">ARIES</h3>
                </div>
                <p className="text-xs leading-snug">
                  The pursuit of personal growth and new beginnings might feel stalled. 
                  Use this time to reassess your goals and the initiatives you're passionate 
                  about. Reflect on your motivations and ensure they align with your true self.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="taurus" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-snug">
                  Financial growth and personal values are in focus. This period may prompt 
                  you to think about the material and emotional resources that truly contribute to your sense of security and 
                  well-being. Consider what prosperity means to you beyond the material.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="gemini" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-snug">
                  Learning, communication, and connections may undergo a period of reflection. 
                  It's a time to reassess your approach to acquiring knowledge and sharing it with 
                  others. Focus on deepening your understanding and connections rather than 
                  spreading yourself too thin.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="cancer" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-snug">
                  Emotional growth and expansion in your personal and family life are highlighted. 
                  Reflect on your emotional security and how it supports your growth. Consider 
                  the foundations of your life and if they truly nurture your development.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Leo */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="leo" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">LEO</h3>
                </div>
                <p className="text-xs leading-snug">
                  Creative and romantic aspects of life, as well as personal expression, may be 
                  reconsidered. It's a period to realign with what truly brings you joy and fulfillment. Assess the authenticity of your 
                  self-expression and creative outputs.
                </p>
              </div>

              {/* Virgo */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="virgo" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">VIRGO</h3>
                </div>
                <p className="text-xs leading-snug">
                  Growth in your routines, health, and service to others comes under review. 
                  This is a time to refine your daily practices and the ways you contribute to 
                  the well-being of yourself and others. Focus on practical improvements that 
                  align with your larger goals.
                </p>
              </div>

              {/* Libra */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="libra" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">LIBRA</h3>
                </div>
                <p className="text-xs leading-snug">
                  Relationships and your approach to balance and harmony are examined. Reflect 
                  on how your relationships contribute to your growth and if they reflect 
                  your true values. Consider the role of partnership in your personal expansion.
                </p>
              </div>

              {/* Scorpio */}
              <div>
                <div className="flex items-center mb-2">
                  <ZodiacIcon sign="scorpio" size={18} className="text-amber-200 mr-2" />
                  <h3 className="text-base font-medium text-amber-200">SCORPIO</h3>
                </div>
                <p className="text-xs leading-snug">
                  Transformative growth, shared resources, and intimacy might require 
                  introspection. Deep, internal changes are possible as you reassess what truly 
                  matters at a soul level. Focus on authentic transformation and the deeper 
                  meaning of your connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-4">
          <span className="text-amber-200 text-sm">{pageNumber}</span>
        </div>
      </Section>
    </div>
  )
}
