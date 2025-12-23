import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface CapricornNeptunePageProps {
  pageNumber: number
}

export function CapricornNeptunePage({ pageNumber }: CapricornNeptunePageProps) {
  return (
    <div className="h-full bg-black text-white flex flex-col flex-1 relative">
      {/* Decorative corners with Neptune symbols */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-6 border border-amber-300 rounded-full"></div>
            <div className="absolute top-0 left-1/2 w-px h-8 bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
            <div className="absolute top-0 left-1/2 w-4 h-px bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-6 border border-amber-300 rounded-full"></div>
            <div className="absolute top-0 left-1/2 w-px h-8 bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
            <div className="absolute top-0 left-1/2 w-4 h-px bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
          </div>
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
              Neptune in Capricorn makes the usual grounded and practical energy of the sign feel softer, adding a sense of intuition and openness to spiritual or mystical ideas. This influence can help you to blend your material ambitions with more intuitive goals, perhaps leading you to use your organizational and leadership skills for nonprofit endeavors or community service.
            </p>

            <p className="text-white">
              Your strong sense of responsibility may now include a responsibility to contribute to the spiritual or emotional welfare of others. Neptune fosters a compassionate understanding in you, making you more empathetic to the plights of those around you and encouraging you to consider how your actions affect not only your immediate environment but also the larger world.
            </p>

            <p className="text-white">
              Spiritually, Neptune may prompt you to question the material goals that typically drive you and to explore a more profound sense of purpose. This can involve deep contemplative
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white">
              practices, involvement in spiritual communities, or a study of the metaphysical aspects of reality.
            </p>

            <p className="text-white">
              The challenge for you is that Neptune can sometimes blur your clear-cut path to success, introducing uncertainties or disillusionment with what you previously valued. It's important for you to find a balance between your material goals and your spiritual or compassionate inclinations.
            </p>

            <p className="text-white">
              As your Neptune is in Capricorn, your task is to use your innate capabilities for managing and structuring in ways that fulfill not just your ambitions but also serve higher purposes. By integrating your practical skills with a compassionate approach, you can achieve a form of success that is not only personally fulfilling but also beneficial to others.
            </p>
          </div>
        </div>

        {/* Bottom decorative corners */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-6 border border-amber-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-px h-8 bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
              <div className="absolute top-0 left-1/2 w-4 h-px bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border border-amber-300 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-6 border border-amber-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-px h-8 bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
              <div className="absolute top-0 left-1/2 w-4 h-px bg-amber-300 transform -translate-x-1/2 -translate-y-2"></div>
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
