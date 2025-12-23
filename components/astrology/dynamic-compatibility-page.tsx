"use client"

import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"
import { useReportData } from "./report-data"
import { getCompatibility, getAllCompatibilities, type ZodiacSign } from "@/lib/zodiac-compatibility-data"

interface DynamicCompatibilityPageProps {
  pageNumber: number
  pairingsPerPage: number // How many compatibility pairings to show (usually 4)
  startIndex: number // Which pairing to start from (0, 4, 8, etc.)
}

export function DynamicCompatibilityPage({ pageNumber, pairingsPerPage, startIndex }: DynamicCompatibilityPageProps) {
  const { data } = useReportData()
  
  // Get user's sun sign (normalize to lowercase and trim)
  const userSign = (data.sunSign?.toLowerCase().trim() || 'libra') as ZodiacSign
  
  // Get all 12 compatibilities for this sign
  const allCompatibilities = getAllCompatibilities(userSign)
  
  // Get the subset for this page
  const pairings = allCompatibilities.slice(startIndex, startIndex + pairingsPerPage)
  
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col items-center justify-center relative">
      {/* Content grid */}
      <div className="px-12 py-8 grid grid-cols-2 gap-x-12 gap-y-8 max-w-6xl">
        {pairings.map((pairing) => (
          <div key={`${pairing.userSign}-${pairing.otherSign}`} className="space-y-3">
            {/* Icons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <ZodiacIcon sign={pairing.userSign} size={35} className="text-amber-600" />
              <span className="text-2xl text-amber-600 font-bold">+</span>
              <ZodiacIcon sign={pairing.otherSign} size={35} className="text-amber-600" />
            </div>
            
            {/* Heading */}
            <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800 mb-3">
              {pairing.heading}
            </h2>
            
            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              {pairing.description}
            </p>
          </div>
        ))}
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}

