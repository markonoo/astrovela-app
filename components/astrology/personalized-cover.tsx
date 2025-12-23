"use client"

import React from "react"
import { useReportData } from "./report-data"

interface PersonalizedCoverProps {
  pageNumber?: number
  // Legacy props (kept for backwards compatibility, but will use context instead)
  name?: string
  birthDate?: string
  birthLocation?: string
  sunSign?: string
  moonSign?: string
  className?: string
}

export function PersonalizedCover({ pageNumber = 3 }: PersonalizedCoverProps) {
  // Get dynamic data from context
  const { data } = useReportData()
  
  // Format the name
  const fullName = `${data.firstName} ${data.lastName}`.trim()
  
  // Capitalize sun and moon signs for display
  const sunSignDisplay = data.sunSign.charAt(0).toUpperCase() + data.sunSign.slice(1)
  const moonSignDisplay = data.moonSign.charAt(0).toUpperCase() + data.moonSign.slice(1)
  
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 flex items-center justify-center relative overflow-hidden px-16 py-12">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #8b7355 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Decorative top element */}
        <div className="text-6xl text-amber-300/40 mb-8">✨</div>
        
        {/* Personalized greeting */}
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800 mb-3">
          {fullName}
        </h1>
        
        <div className="text-xl text-gray-600 mb-6">
          {data.birthDate} • {data.birthPlace}
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
        
        {/* Sun and Moon Signs */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Sun Sign</div>
            <div className="text-2xl font-medium text-amber-600">{sunSignDisplay}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Moon Sign</div>
            <div className="text-2xl font-medium text-amber-600">{moonSignDisplay}</div>
          </div>
        </div>
        
        <div className="space-y-6 text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <p>
            Your natal chart is a snapshot of the sky at the exact moment and location of your birth. It reveals the positions of the planets, the Sun, and the Moon in relation to the twelve astrological houses and zodiac signs.
          </p>
          
          <p>
            This cosmic blueprint serves as a map of your personality, strengths, challenges, and life path. Each planet represents different aspects of your being, while the houses indicate various life areas where these energies manifest.
          </p>
          
          <p>
            The following pages will guide you through the key components of your chart, helping you understand how the celestial bodies influence your journey and shape your unique cosmic signature.
          </p>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-12 flex justify-center gap-4 text-3xl text-amber-300/40">
          <span>☽</span>
          <span>✦</span>
          <span>☉</span>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}