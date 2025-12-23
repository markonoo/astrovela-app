import React from "react"

interface AstrologicalEventsIntroReplicaProps {
  pageNumber: number
}

export function AstrologicalEventsIntroReplica({ pageNumber }: AstrologicalEventsIntroReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/astrological-events-night-sky.jpg)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 py-16">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light tracking-[0.15em] font-serif text-amber-200">
            ASTROLOGICAL<br />EVENTS
          </h1>
        </div>

        <div className="flex items-start max-w-3xl mx-auto">
          <div className="text-8xl font-serif text-amber-300 mr-4 leading-none">A</div>
          <p className="text-base leading-relaxed text-amber-100 pt-6 font-medium">
            s the planets move in the sky, their alignments, retrogrades, and transitions into new signs bring with them waves of change, opportunities for growth, and challenges to overcome. From rare conjunctions that promise profound shifts in consciousness to eclipses that urge us to embrace our destinies, each event holds a key to understanding deeper personal and collective themes. Here you can find the highlights of some pivotal astrological events year by year, focusing on the most significant occurrences.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
