import React from "react"

interface FinalWordsTitleReplicaProps {
  pageNumber: number
}

export function FinalWordsTitleReplica({ pageNumber }: FinalWordsTitleReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/final-words-night-sky-forest.jpg)' }}
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
