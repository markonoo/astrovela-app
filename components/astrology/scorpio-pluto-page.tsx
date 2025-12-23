import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface ScorpioPlutoPageProps {
  pageNumber: number
}

export function ScorpioPlutoPage({ pageNumber }: ScorpioPlutoPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with cross/X symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
            <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
            <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Main content area with border */}
      <div className="flex-1 mx-16 my-16 border border-amber-300 relative">
        {/* Title with symbol */}
        <div className="text-center mt-8 mb-8">
          <div className="flex justify-center mb-4">
            <ZodiacIcon sign="scorpio" size={60} className="text-amber-300" />
          </div>
          <h1 className="text-4xl font-light tracking-wider text-amber-300">SCORPIO</h1>
        </div>

        {/* Content in two columns */}
        <div className="grid grid-cols-2 gap-8 px-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <p className="text-white">
              Your thirst for power as a Scorpio influenced by Pluto is profound and complex. It's not merely about control but about understanding the dynamics of power itself. You are drawn to situations that challenge your strength, resilience, and strategic thinking. This power often manifests in your ability to influence and transform the lives of others, whether through direct leadership or more subtle psychological influence. Your understanding of human nature and motivation makes you a formidable presence in any setting, wielding your power with a keen awareness of its impact.
            </p>

            <p className="text-white">
              As a natural outcome of your deep connection with Pluto, you have a proclivity for upheaval. However, unlike the chaotic disruptions sought by others, your approach to upheaval is strategic and purposeful.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              You recognize that true transformation often requires the dismantling of what no longer serves, whether beliefs, relationships, or systems. Your life may seem to others a series of intense confrontations with the status quo, but for you, these are necessary moments that precipitate significant growth and renewal.
            </p>

            <p className="text-white">
              Rebirth is a fundamental theme in your life. Each significant change represents not just an end but a profound new beginning. You approach these transitions with both a sense of inevitability and a strategic plan. Whether it's personal identity, professional paths, or emotional connections, you embrace the destruction of the old to make way for the new. This cycle of death and rebirth is not a mere metaphor but a tangible, lived experience that shapes every aspect of your existence.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
              <div className="absolute inset-0 w-8 h-px bg-amber-300 transform -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
