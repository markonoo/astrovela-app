import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface ModalitiesPageProps {
  pageNumber: number
}

export function ModalitiesPage({ pageNumber }: ModalitiesPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col justify-center relative">
      {/* Title section - narrower */}
      <div className="mb-8 px-16">
        <div className="flex items-start gap-6 max-w-4xl mx-auto">
          <div className="text-7xl font-serif text-amber-600 leading-none mt-1 select-none">2</div>
          <div className="flex-1">
            <h1 className="text-3xl font-light tracking-wider text-gray-800 mb-4">
              THE<br />MODALITIES
            </h1>
            <p className="text-sm leading-relaxed text-gray-700 max-w-lg">
              Quadruplicity, or modality, divides the zodiac into three groups of four signs, each group associated with one of the three modalities: Cardinal, Fixed, and Mutable. This classification sheds light on the signs' approach to change, action, and their way of engaging with the world.
            </p>
          </div>
        </div>
      </div>

      {/* Modalities grid - narrower, bigger and bolder icons */}
      <div className="px-16 pb-6 grid grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
        {/* Cardinal Signs */}
        <div className="space-y-3">
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center gap-3 mb-3">
              <ZodiacIcon sign="aries" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="cancer" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="libra" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="capricorn" size={26} className="text-amber-600 font-bold" />
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">CARDINAL SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Aries, Cancer, Libra, Capricorn</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are initiators, known for their leadership qualities and ability to start new endeavors. They are dynamic, ambitious, and driven, often setting trends and embracing change.
          </p>
        </div>

        {/* Fixed Signs */}
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-4 mb-4">
              <ZodiacIcon sign="taurus" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="leo" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="scorpio" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="aquarius" size={26} className="text-amber-600 font-bold" />
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">FIXED SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Taurus, Leo, Scorpio, Aquarius</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are stabilizers, focusing on persistence, reliability, and depth. These signs are known for their determination, resistance to change, and ability to see projects through to completion.
          </p>
        </div>

        {/* Mutable Signs */}
        <div className="space-y-3">
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center gap-3 mb-3">
              <ZodiacIcon sign="gemini" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="virgo" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="sagittarius" size={26} className="text-amber-600 font-bold" />
              <ZodiacIcon sign="pisces" size={26} className="text-amber-600 font-bold" />
            </div>
            <h2 className="text-lg font-semibold tracking-[0.15em] font-serif text-gray-800 mb-1">MUTABLE SIGNS</h2>
            <p className="text-sm text-gray-600 italic">Gemini, Virgo, Sagittarius, Pisces</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            are adaptable, flexible, and versatile. They are the finishers, capable of adjusting to changing circumstances and embracing transformation. Mutable signs are known for their resourcefulness, flexibility, and communicative skills.
          </p>
        </div>

        {/* Quote section */}
        <div className="flex flex-col justify-center">
          <div className="text-center">
            {/* Decorative star */}
            <div className="flex justify-center mb-3">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-px bg-amber-600"></div>
                  <div className="absolute w-px h-6 bg-amber-600"></div>
                  <div className="absolute w-5 h-px bg-amber-600 transform rotate-45"></div>
                  <div className="absolute w-5 h-px bg-amber-600 transform -rotate-45"></div>
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-700 italic">
              This classification sheds light on the signs' approach to change, action, and their way of engaging with the world.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}