import React from "react"
import { Section } from "./base/Section"

interface RetrogradesPageReplicaProps {
  pageNumber: number
}

export function RetrogradesPageReplica({ pageNumber }: RetrogradesPageReplicaProps) {
  return (
    <div className="h-full text-amber-100 flex flex-col flex-1 relative overflow-hidden">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/retrogrades-background.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-950/80 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-8">
        <h1 className="text-7xl md:text-8xl font-light mb-12 tracking-[0.15em] font-serif text-amber-200 text-center">
          RETROGRADES
        </h1>

        <div className="flex items-start max-w-3xl text-left">
          {/* Decorative Initial A */}
          <div className="mr-6 flex-shrink-0">
            <span className="text-8xl md:text-9xl font-serif text-amber-300 leading-none block">
              A
            </span>
          </div>

          {/* Main text */}
          <div className="pt-4 flex-1">
            <p className="text-lg leading-relaxed text-amber-100">
              retrograde occurs when a planet appears to be moving backward in 
              the sky due to the relative positions of the planet and Earth. Each planet's 
              retrograde has unique implications, and when it happens in different zodiac signs, these effects are 
              further colored by the characteristics of that sign.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
