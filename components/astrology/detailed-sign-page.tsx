import React from "react"
import { Section } from "./base/Section"

interface TraitsProps {
  duality: string
  element: string
  quality: string
  luckyDay: string
  writtenSymbol: string
  symbol: string
  rulingPlanet: string
  dominantKeyword: string
  luckyNumber: string
  bodyPartRuled: string
}

interface DetailedSignPageProps {
  title: string
  dates: string
  constellation: React.ReactNode
  traits: TraitsProps
  description: string[]
  compatibility: string
  pageNumber: number
}

export function DetailedSignPage({ 
  title, 
  dates, 
  constellation, 
  traits, 
  description, 
  compatibility, 
  pageNumber 
}: DetailedSignPageProps) {
  return (
    <div className="h-full bg-cream flex flex-col flex-1">
      <Section className="page-light max-w-4xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-1">{title}</h1>
          <p className="text-md text-amber-600 mb-2">{dates}</p>
          <div className="text-4xl text-amber-600 mb-2">{traits.symbol}</div>
        </div>

        {/* Constellation */}
        <div className="mb-4">
          {constellation}
        </div>

        {/* Main Description */}
        <div className="space-y-2 mb-4">
          {description.map((paragraph, index) => (
            <p key={index} className="body-copy text-gray-800 leading-snug text-sm">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="space-y-2">
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Element & Quality</h3>
              <p className="text-xs text-gray-700">{traits.element} - {traits.quality}</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Ruling Planet</h3>
              <p className="text-xs text-gray-700">{traits.rulingPlanet}</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Lucky Day</h3>
              <p className="text-xs text-gray-700">{traits.luckyDay}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Dominant Keyword</h3>
              <p className="text-xs text-gray-700">{traits.dominantKeyword}</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Lucky Numbers</h3>
              <p className="text-xs text-gray-700">{traits.luckyNumber}</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-1 text-sm">Body Part Ruled</h3>
              <p className="text-xs text-gray-700">{traits.bodyPartRuled}</p>
            </div>
          </div>
        </div>

        {/* Symbol Description */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-3 rounded-lg mb-3">
          <h3 className="font-semibold text-amber-800 mb-1 text-sm">Symbol Meaning</h3>
          <p className="text-xs text-gray-700">{traits.writtenSymbol}</p>
        </div>

        {/* Compatibility */}
        <div className="text-center bg-amber-50 p-3 rounded-lg">
          <h3 className="font-semibold text-amber-800 mb-1 text-sm">Most Compatible With</h3>
          <p className="text-xs text-gray-700">{compatibility}</p>
        </div>
      </Section>
    </div>
  )
}