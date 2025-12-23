import React from "react"
import { Section } from "./base/Section"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface UranusRetrogradePageReplicaProps {
  pageNumber: number
}

export function UranusRetrogradePageReplica({ pageNumber }: UranusRetrogradePageReplicaProps) {
  return (
    <div className="h-full bg-black text-amber-100 flex flex-col flex-1">
      <Section className="page-dark flex flex-col justify-between px-8 py-6">
        {/* Top ornate frame with URANUS */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-2xl w-full">
            {/* Ornate frame border with angular modern design */}
            <div className="border-2 border-amber-200/60 p-8 relative">
              {/* Modern corner decorations */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-amber-200/60 transform rotate-45"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-amber-200/60 transform rotate-45"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-amber-200/60 transform rotate-45"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-amber-200/60 transform rotate-45"></div>

              {/* Top decoration with modern elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                  <div className="w-3 h-3 border border-amber-200/60 transform rotate-45"></div>
                  <div className="w-2 h-2 border border-amber-200/60 transform rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl font-light text-center mb-6 tracking-[0.15em] font-serif text-amber-200">
                URANUS
              </h1>

              <p className="text-base leading-relaxed text-center text-amber-100">
                During Uranus retrograde, there's often a feeling of internal restlessness or a desire to break free from limitations 
                and outdated structures. This period encourages reflection on areas of our lives where we crave innovation and 
                change, asking us to reconsider how we pursue freedom 
                and individuality. It's a time for inner changes that later 
                manifest externally, challenging us to revolutionize our 
                lives in alignment with our true selves.
              </p>

              {/* Bottom Uranus symbol */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
                <div className="w-8 h-8 border border-amber-200/60 rounded-full flex items-center justify-center">
                  <span className="text-amber-200 text-xl">♅</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uranus Retrograde Through Signs */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-8 text-amber-200 tracking-wider">
            URANUS RETROGRADE<br />
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
                  The desire for personal freedom and independence is highlighted. 
                  This retrograde asks you to consider how you assert your individuality and initiate changes. Reflect on the balance between self-assertion and collaboration.
                </p>
              </div>

              {/* Taurus */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="taurus" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">TAURUS</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Your values and material possessions may undergo a period of sudden insight or change. It's a time to reassess what you truly value 
                  and how you can innovate in your approach to security and comfort.
                </p>
              </div>

              {/* Gemini */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="gemini" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">GEMINI</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Communication and social networks are in focus. Uranus retrograde prompts a reevaluation of how you express your individuality 
                  through ideas and interactions. Consider unconventional ways of learning and sharing information.
                </p>
              </div>

              {/* Cancer */}
              <div>
                <div className="flex items-center mb-3">
                  <ZodiacIcon sign="cancer" size={20} className="text-amber-200 mr-3" />
                  <h3 className="text-lg font-medium text-amber-200">CANCER</h3>
                </div>
                <p className="text-xs leading-relaxed">
                  Homelife and emotional security are areas for potential upheaval or revelation. Reflect on your need for emotional freedom and how changes in 
                  your domestic life can reflect your deepest desires for independence.
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
                  Deep transformative changes are possible, especially in areas concerning intimacy and shared resources. Reflect on your desire for freedom 
                  in close bonds and how embracing change can lead to growth.
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
