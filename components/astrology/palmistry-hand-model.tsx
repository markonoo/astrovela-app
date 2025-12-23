import React from "react"

interface PalmistryHandModelProps {
  pageNumber: number
}

export function PalmistryHandModel({ pageNumber }: PalmistryHandModelProps) {
  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center">
      {/* Full-page palmistry image */}
      <img 
        src="/palmistry-full-page.png" 
        alt="Palmistry hand with lines and mounts" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-800 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
