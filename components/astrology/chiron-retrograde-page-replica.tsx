import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface ChironRetrogradePageReplicaProps {
  pageNumber: number
}

export function ChironRetrogradePageReplica({ pageNumber }: ChironRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-6">
        {/* Top ornate frame with CHIRON */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with healing design */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Radiating corner decorations for healing energy */}
              <div className="absolute -top-3 -left-3 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16" strokeWidth="2"/>
                  <path d="M8 8 L12 12 M20 12 L24 8 M8 24 L12 20 M20 20 L24 24" strokeWidth="1"/>
                </svg>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16" strokeWidth="2"/>
                  <path d="M8 8 L12 12 M20 12 L24 8 M8 24 L12 20 M20 20 L24 24" strokeWidth="1"/>
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16" strokeWidth="2"/>
                  <path d="M8 8 L12 12 M20 12 L24 8 M8 24 L12 20 M20 20 L24 24" strokeWidth="1"/>
                </svg>
              </div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8">
                <svg className="w-full h-full stroke-amber-200/60 fill-none" viewBox="0 0 32 32">
                  <path d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16" strokeWidth="2"/>
                  <path d="M8 8 L12 12 M20 12 L24 8 M8 24 L12 20 M20 20 L24 24" strokeWidth="1"/>
                </svg>
              </div>

              {/* Top decoration with radiating healing energy */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                  <div className="w-1 h-4 border-l border-amber-200/60"></div>
                  <div className="w-2 h-2 border border-amber-200/60 rounded-full"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                CHIRON
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                During Chiron retrograde, the healing process becomes 
                more internalized, encouraging us to look within and 
                confront our pain directly. This phase is about revisiting 
                past hurts, understanding their impact on our lives, and 
                seeking paths to healing that perhaps we've overlooked 
                or avoided. It's a powerful time for personal growth, as it 
                challenges us to face our vulnerabilities and transform 
                our approach to healing.
              </p>

              {/* Bottom Chiron symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">⚷</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chiron Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            CHIRON RETROGRADE<br />
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
                  With Chiron in Aries, the focus is on healing issues related to identity, 
                  assertiveness, and individuality. The retrograde period asks you to explore 
                  where you may have suppressed your true self or experienced aggression, working towards embracing 
                  your authenticity and courage.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  This placement emphasizes healing around self-worth, material security, 
                  and values. Chiron retrograde invites you to reassess what truly brings you 
                  comfort and security, encouraging a deeper connection to your senses 
                  and nature as sources of healing.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Here, the healing journey involves communication, learning, and social connections. The retrograde 
                  period challenges you to confront wounds related to expression 
                  and intellect, seeking new ways to share your thoughts and learn 
                  from others.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Chiron in Cancer focuses on healing emotional, familial, and foundational wounds. During the retrograde, reflect on your emotional 
                  safety and connections, exploring how nurturing yourself and others 
                  can lead to profound healing.
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
                  Wounds related to creativity, romance, and recognition are highlighted. Chiron retrograde encourages exploring your need for attention and affirmation, learning to 
                  validate yourself and express your creativity authentically.
                </p>
              </div>

              {/* Virgo */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="virgo" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">VIRGO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  This placement centers on healing issues related to health, service, 
                  and daily routines. The retrograde period is a time to reassess your 
                  approach to physical and mental health, finding balance in serving 
                  others, and self-care.
                </p>
              </div>

              {/* Libra */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="libra" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">LIBRA</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Healing is focused on partnerships, balance, and harmony. Chiron retrograde asks you to explore wounds related to relationships and fairness, 
                  encouraging a journey toward inner balance and equitable connections.
                </p>
              </div>

              {/* Scorpio */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="scorpio" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">SCORPIO</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  With Chiron here, the healing process delves into themes of transformation, intimacy, and shared 
                  resources. The retrograde challenges you to face deep-seated fears 
                  and traumas, embracing the power of rebirth and emotional depth as 
                  paths to healing.
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
