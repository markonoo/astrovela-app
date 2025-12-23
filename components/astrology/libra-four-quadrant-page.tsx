import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function LibraFourQuadrantPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      <div className="flex-1 px-12 py-12">
        {/* Libra title with icon */}
        <div className="text-center mb-10">
          <div className="text-6xl md:text-7xl font-light tracking-wide mb-6">
            LIBRA
          </div>
          {/* Zodiac icon */}
          <div className="flex justify-center">
            <ZodiacIcon sign="libra" size={80} className="text-amber-300" />
          </div>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p className="font-semibold text-amber-200 text-base mb-2">INDIVIDUALITY</p>
            <p>
              Your individuality shines through your refined taste and your ability to see beauty in the simple things. You have a unique talent for turning chaos into order through elegant solutions that please both the eye and the spirit. This love for beauty is not just superficial. It reflects your deeper quest for harmony and understanding.
            </p>

            <p className="font-semibold text-amber-200 text-base mb-2 pt-4">SELF-EXPRESSION</p>
            <p>
              As a Libra, you express yourself through creativity such as art, music, or style. Your aesthetic sensibility is about more than appearance. It's a reflection of your balanced and thoughtful nature. You are constantly seeking to express composure, whether it's in your home, your wardrobe, or your choice of words.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p className="font-semibold text-amber-200 text-base mb-2">MOTIVATION</p>
            <p>
              Motivated by the need for connection, you thrive in partnerships and excel in activities that involve others. Your motivation often comes from your desire to be appreciated and loved, driving you to act with kindness and generosity. You are not just seeking affection, but also deeply interested in making the world a more equitable place.
            </p>

            <p className="font-semibold text-amber-200 text-base mb-2 pt-4">LIFE EXPERIENCE</p>
            <p>
              For Libras, life is an ongoing journey towards achieving balance and harmony. You view every interaction as an opportunity to learn and grow, and you are constantly seeking ways to improve your environment.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="text-center text-amber-200 text-lg font-light pb-8">
        {pageNumber}
      </div>
    </div>
  )
}
