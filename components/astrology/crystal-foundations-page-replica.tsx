import React from "react"

interface CrystalFoundationsPageReplicaProps {
  pageNumber: number
}

export function CrystalFoundationsPageReplica({ pageNumber }: CrystalFoundationsPageReplicaProps) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Full-page crystal background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/crystal-foundations-background.jpg)' }}
      />

      {/* Page number */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="text-purple-700 text-sm font-medium">{pageNumber}</div>
      </div>
    </div>
  )
}
