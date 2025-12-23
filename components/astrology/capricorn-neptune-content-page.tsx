import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function CapricornNeptuneContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Capricorn title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          CAPRICORN
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="capricorn" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Neptune in Capricorn makes the usual grounded and practical energy of the sign feel softer, adding a sense of intuition and openness to spiritual or mystical ideas. This influence can help you to blend your material ambitions with more intuitive goals, perhaps leading you to use your organizational and leadership skills for nonprofit endeavors or community service.
            </p>

            <p>
              Your strong sense of responsibility may now include a responsibility to contribute to the spiritual or emotional welfare of others. Neptune fosters a compassionate understanding in you, making you more empathetic to the plights of those around you and encouraging you to consider how your actions affect not only your immediate environment but also the larger world.
            </p>

            <p>
              Spiritually, Neptune may prompt you to question the material goals that typically drive you and to explore a more profound sense of purpose. This can involve deep contemplative practices, involvement in spiritual communities, or a study of the metaphysical aspects of reality.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              The challenge for you is that Neptune can sometimes blur your clear-cut path to success, introducing uncertainties or disillusionment with what you previously valued. It's important for you to find a balance between your material goals and your spiritual or compassionate inclinations.
            </p>

            <p>
              As your Neptune is in Capricorn, your task is to use your innate capabilities for managing and structuring in ways that fulfill not just your ambitions but also serve higher purposes. By integrating your practical skills with a compassionate approach, you can achieve a form of success that is not only personally fulfilling but also beneficial to others.
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
