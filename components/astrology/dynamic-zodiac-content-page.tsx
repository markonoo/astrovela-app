"use client"

import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"
import { useReportData } from "./report-data"
import { getZodiacContent, type ZodiacSign as ZodiacSignType, type PlanetPlacement } from "@/lib/zodiac-content-data"

interface DynamicZodiacContentPageProps {
  planet: PlanetPlacement
  pageNumber: number
}

export function DynamicZodiacContentPage({ planet, pageNumber }: DynamicZodiacContentPageProps) {
  const { data: reportData } = useReportData()
  
  // Get the sign for this planet from reportData
  const getSignForPlanet = (planet: PlanetPlacement): string => {
    switch (planet) {
      case "sun": return reportData.sunSign
      case "moon": return reportData.moonSign
      case "rising": return reportData.risingSign
      case "mercury": return reportData.mercurySign
      case "venus": return reportData.venusSign
      case "mars": return reportData.marsSign
      case "jupiter": return reportData.jupiterSign
      case "saturn": return reportData.saturnSign
      case "uranus": return reportData.uranusSign
      case "neptune": return reportData.neptuneSign
      case "pluto": return reportData.plutoSign
      case "chiron": return reportData.chironSign
      default: return "aries"
    }
  }
  
  const sign = getSignForPlanet(planet).toLowerCase() as ZodiacSignType
  const content = getZodiacContent(sign, planet)
  
  if (!content) {
    return (
      <div className="h-full bg-black text-amber-200 flex items-center justify-center">
        <p>Content not found for {sign} {planet}</p>
      </div>
    )
  }

  return (
    <div className="h-full bg-black text-amber-200 flex flex-col">
      {/* Title with icon - reduced spacing for print, Tier 2 font */}
      <div className="text-center pt-8 mb-4">
        <div className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif mb-3 uppercase">
          {content.title}
        </div>
        {content.subtitle && (
          <div className="text-lg text-amber-300 mb-2 font-light">
            {content.subtitle}
          </div>
        )}
        {/* Zodiac icon */}
        <div className="flex justify-center mb-3">
          <ZodiacIcon sign={sign} size={60} className="text-amber-300" />
        </div>
      </div>

      {/* Two-column content - removed overflow-auto for print, adjusted spacing */}
      <div className="flex-1 px-12 pb-12">
        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-3 text-amber-100 text-xs leading-relaxed">
            {content.sections.slice(0, Math.ceil(content.sections.length / 2)).map((section, index) => (
              <p key={index}>{section.content}</p>
            ))}
            
            {/* Strengths in left column if available */}
            {content.strengths && content.strengths.length > 0 && (
              <div className="pt-2">
                <p className="font-semibold text-amber-200 text-xs mb-1">STRENGTHS:</p>
                {content.strengths.map((strength, index) => (
                  <p key={index} className="ml-2 text-xs">
                    <span className="font-semibold text-amber-200">• {strength}</span>
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-3 text-amber-100 text-xs leading-relaxed">
            {content.sections.slice(Math.ceil(content.sections.length / 2)).map((section, index) => (
              <p key={index}>{section.content}</p>
            ))}
            
            {/* Challenges in right column if available */}
            {content.challenges && content.challenges.length > 0 && (
              <div className="pt-2">
                <p className="font-semibold text-amber-200 text-xs mb-1">CHALLENGES:</p>
                {content.challenges.map((challenge, index) => (
                  <p key={index} className="ml-2 text-xs">
                    <span className="font-semibold text-amber-200">• {challenge}</span>
                  </p>
                ))}
              </div>
            )}
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

