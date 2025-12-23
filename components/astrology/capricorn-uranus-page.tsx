import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface CapricornUranusPageProps {
  pageNumber: number
}

export function CapricornUranusPage({ pageNumber }: CapricornUranusPageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with arrows */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
        </div>
      </div>

      {/* Main content area with border */}
      <div className="flex-1 mx-16 my-16 border border-amber-300 relative">
        {/* Title with symbol */}
        <div className="text-center mt-8 mb-8">
          <div className="flex justify-center mb-4">
            <ZodiacIcon sign="capricorn" size={60} className="text-amber-300" />
          </div>
          <h1 className="text-4xl font-light tracking-wider text-amber-300">CAPRICORN</h1>
        </div>

        {/* Content in two columns */}
        <div className="grid grid-cols-2 gap-8 px-8 text-sm leading-relaxed">
          <div className="space-y-4">
            <p className="text-white">
              As a Capricorn traditionally associated with discipline, responsibility, and a methodical approach to achievement, you enter an intriguing dance with Uranus, the planet of disruption, revolution, and profound change. Influenced by this combination, you redefine the boundaries of ambition and structure, pioneering new systems that are not only efficient but also radically different.
            </p>

            <p className="text-white">
              Uranus stands in the astrological sphere as the instigator of extremes and the breaker of molds. It drives the spirit of innovation and the courage to venture beyond the conventional. Under its influence, you are imbued with a sense of limitlessness and often cast as an outsider, uniquely positioned to challenge and redefine established norms. This planetary force introduces a dynamic element to your typically conservative and pragmatic approach to life.
            </p>

            <p className="text-white">
              You often excel in areas that involve restructuring or radically innovating within established systems. You might lead the development of new technologies that revolutionize industries, champion reformative policies that alter
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              the political landscape, or spearhead sustainable practices that transform environmental management. Your approach is unique in that it respects the need for order while pushing the boundaries of what that order looks like.
            </p>

            <p className="text-white">
              The primary challenge for you is balancing your love for structure with the chaotic nature of Uranian energy. The extremes brought on by Uranus can sometimes clash with your disciplined approach, creating internal conflicts that manifest as either stifling conservatism or reckless radicalism. The key for you lies in finding a way to innovate responsibly, harnessing the disruptive energies of Uranus without losing the foundational stability of Capricorn.
            </p>

            <p className="text-white">
              For you, the outsider perspective granted by Uranus provides a strategic advantage. It allows you to see systems from the outside, identifying flaws and inefficiencies that those within the system cannot. This position enables you to implement effective changes and often places you in roles where you can influence significant reforms from a place of authority.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="w-8 h-px bg-amber-300 transform rotate-45"></div>
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
