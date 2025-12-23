import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

export function CapricornUranusContentPage({ pageNumber }: { pageNumber: number }) {
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
              As a Capricorn traditionally associated with discipline, responsibility, and a methodical approach to achievement, you enter an intriguing dance with Uranus, the planet of disruption, revolution, and profound change. Influenced by this combination, you redefine the boundaries of ambition and structure, pioneering new systems that are not only efficient but also radically different.
            </p>

            <p>
              Uranus stands in the astrological sphere as the instigator of extremes and the breaker of molds. It drives the spirit of innovation and the courage to venture beyond the conventional. Under its influence, you are imbued with a sense of limitlessness and often cast as an outsider, uniquely positioned to challenge and redefine established norms. This planetary force introduces a dynamic element to your typically conservative and pragmatic approach to life.
            </p>

            <p>
              You often excel in areas that involve restructuring or radically innovating within established systems. You might lead the development of new technologies that revolutionize industries, champion reformative policies that alter the political landscape, or spearhead sustainable practices that transform environmental management. Your approach is unique in that it respects the need for order while pushing the boundaries of what that order looks like.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-amber-100 text-sm leading-relaxed">
            <p>
              The primary challenge for you is balancing your love for structure with the chaotic nature of Uranian energy. The extremes brought on by Uranus can sometimes clash with your disciplined approach, creating internal conflicts that manifest as either stifling conservatism or reckless radicalism. The key for you lies in finding a way to innovate responsibly, harnessing the disruptive energies of Uranus without losing the foundational stability of Capricorn.
            </p>

            <p>
              For you, the outsider perspective granted by Uranus provides a strategic advantage. It allows you to see systems from the outside, identifying flaws and inefficiencies that those within the system cannot. This position enables you to implement effective changes and often places you in roles where you can influence significant reforms from a place of authority.
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
