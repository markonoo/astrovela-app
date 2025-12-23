import React from "react"
import Image from "next/image"

interface MinimalistHandIllustrationReplicaProps {
  pageNumber: number
}

export function MinimalistHandIllustrationReplica({ pageNumber }: MinimalistHandIllustrationReplicaProps) {
  // TODO: Make dynamic based on QuizResponse.coverDesign via session_id
  // See: COVER_DESIGN_SPECIFICATION.md for implementation details
  const backCoverColor = "#e7e5df" // Stone-100 / Warm Cream (matches sage green theme)
  
  return (
    <div className="h-full flex items-center justify-center relative" style={{ backgroundColor: backCoverColor }}>
      {/* Minimalist hand holding charms illustration - reduced by 30% (twice: 400→280→196) */}
      <div className="relative flex items-center justify-center">
        <Image
          src="/minimalist-hand-charms.png"
          alt="Minimalist hand illustration with hanging moon, star, and sun charms"
          width={196}
          height={294}
          className="w-auto h-auto max-h-[34vh] object-contain"
          priority
        />
      </div>
    </div>
  )
}
