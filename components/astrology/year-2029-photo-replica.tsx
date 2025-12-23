import React from "react"

interface Year2029PhotoReplicaProps {
  pageNumber: number
}

export function Year2029PhotoReplica({ pageNumber }: Year2029PhotoReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page background image */}
      <img 
        src="/year-2029-photo.jpg" 
        alt="Year 2029 - Acacia tree with Milky Way" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Year text with decorative elements */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.15em] font-serif text-amber-200 mb-4" style={{ 
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          2029
        </h1>
        {/* Decorative star burst */}
        <div className="flex justify-center items-center gap-6">
          <div className="w-24 h-px bg-amber-300"></div>
          <svg viewBox="0 0 40 40" className="w-8 h-8 text-amber-300">
            <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="currentColor"/>
          </svg>
          <div className="w-24 h-px bg-amber-300"></div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
