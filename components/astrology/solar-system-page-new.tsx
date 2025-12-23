import React from "react"

export function SolarSystemPageNew({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-black relative overflow-hidden flex flex-col">
      {/* Solar System Image */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/solar-system-full.png" 
          alt="Solar System Diagram" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Page number */}
      <div className="text-center pb-8 text-amber-200 text-lg font-light">
        {pageNumber}
      </div>
    </div>
  )
}
