import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraCompatibilityWheelProps {
  pageNumber: number
}

export function LibraCompatibilityWheel({ pageNumber }: LibraCompatibilityWheelProps) {
  const zodiacSigns = [
    { name: "ARIES", sign: "aries", angle: 0 },
    { name: "TAURUS", sign: "taurus", angle: 30 },
    { name: "GEMINI", sign: "gemini", angle: 60 },
    { name: "CANCER", sign: "cancer", angle: 90 },
    { name: "LEO", sign: "leo", angle: 120 },
    { name: "VIRGO", sign: "virgo", angle: 150 },
    { name: "LIBRA", sign: "libra", angle: 180 },
    { name: "SCORPIO", sign: "scorpio", angle: 210 },
    { name: "SAGITTARIUS", sign: "sagittarius", angle: 240 },
    { name: "CAPRICORN", sign: "capricorn", angle: 270 },
    { name: "AQUARIUS", sign: "aquarius", angle: 300 },
    { name: "PISCES", sign: "pisces", angle: 330 }
  ] as const

  return (
    <div className="h-full text-white flex flex-col flex-1 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/compatibility-background.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-indigo-950/80 to-purple-950/80" />

      {/* Title - increased Libra font size */}
      <div className="text-center mt-12 mb-10 relative z-10">
        <div className="text-3xl tracking-[0.15em] font-serif text-amber-300 mb-3 font-bold">LIBRA</div>
        <h1 className="text-7xl font-light tracking-[0.15em] text-white font-serif">COMPATIBILITY</h1>
      </div>

      {/* Compatibility Wheel - reduced by 15% (from 845px to 718px) */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-[718px] h-[718px] flex items-center justify-center">
          <img 
            src="/compatibility-wheel.png" 
            alt="Libra Zodiac Compatibility Wheel" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
