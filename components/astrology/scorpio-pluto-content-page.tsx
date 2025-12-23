import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function ScorpioPlutoContentPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Scorpio title with icon */}
      <div className="text-center pt-12 mb-8">
        <div className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          SCORPIO
        </div>
        {/* Zodiac icon */}
        <div className="flex justify-center mb-6">
          <ZodiacIcon sign="scorpio" size={80} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content */}
      <div className="flex-1 px-12 pb-16 overflow-auto">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              Your thirst for power as a Scorpio influenced by Pluto is profound and complex. It's not merely about control but about understanding the dynamics of power itself. You are drawn to situations that challenge your strength, resilience, and strategic thinking. This power often manifests in your ability to influence and transform the lives of others, whether through direct leadership or more subtle psychological influence. Your understanding of human nature and motivation makes you a formidable presence in any setting, wielding your power with a keen awareness of its impact.
            </p>

            <p>
              As a natural outcome of your deep connection with Pluto, you have a proclivity for upheaval. However, unlike the chaotic disruptions sought by others, your approach to upheaval is strategic and purposeful.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              You recognize that true transformation often requires the dismantling of what no longer serves, whether beliefs, relationships, or systems. Your life may seem to others a series of intense confrontations with the status quo, but for you, these are necessary moments that precipitate significant growth and renewal.
            </p>

            <p>
              Rebirth is a fundamental theme in your life. Each significant change represents not just an end but a profound new beginning. You approach these transitions with both a sense of inevitability and a strategic plan. Whether it's personal identity, professional paths, or emotional connections, you embrace the destruction of the old to make way for the new. This cycle of death and rebirth is not a mere metaphor but a tangible, lived experience that shapes every aspect of your existence.
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
