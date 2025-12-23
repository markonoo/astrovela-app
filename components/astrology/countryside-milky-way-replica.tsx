import React from "react"

interface CountrysideMilkyWayReplicaProps {
  pageNumber: number
}

export function CountrysideMilkyWayReplica({ pageNumber }: CountrysideMilkyWayReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page background image */}
      <img 
        src="/countryside-milky-way.jpg" 
        alt="Countryside landscape with Milky Way" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
