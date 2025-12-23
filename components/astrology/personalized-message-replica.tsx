"use client"

import React from "react"
import { useReportData } from "@/components/astrology/report-data"

interface PersonalizedMessageReplicaProps {
  pageNumber: number
}

export function PersonalizedMessageReplica({ 
  pageNumber
}: PersonalizedMessageReplicaProps) {
  // Get shared data from context (coverColor and firstName sync with front cover)
  const { data: reportData } = useReportData()
  const coverColor = reportData.coverColor
  const firstName = reportData.firstName || "CRISTINA"

  return (
    <div 
      className="h-full text-white flex flex-col items-center justify-center relative px-12 py-16" 
      style={{ backgroundColor: coverColor }}
    >
      {/* Top decorative line */}
      <div className="w-full max-w-2xl mb-10">
        <div className="w-full h-px bg-amber-300"></div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl text-center space-y-8">
        <h2 className="text-xl font-light tracking-wider mb-6">
          DEAR<br />
          <span className="text-3xl font-semibold tracking-widest">{firstName},</span>
        </h2>

        <div className="space-y-6 text-base leading-relaxed font-medium">
          <p>
            <span className="font-bold">This book is your personal guide to exploring the mystique of astrology and ancient wisdom.</span> Reveal the secrets of the stars and the cosmic forces that have shaped your unique path.
          </p>

          <p>
            Using your personalized birth chart as a roadmap, you'll gain a profound understanding of planetary influences and how they impact your life. Learn about crystals, delve into the art of palmistry, and discover how the moon's cycles can influence your experiences.
          </p>

          <p>
            Open this book and let the universe guide you toward greater self-understanding and a life filled with harmony.
          </p>
        </div>
      </div>

      {/* Hand with star illustration - increased by 140% (from w-28 h-32 to w-[156px] h-[179px]) */}
      <div className="mt-10 mb-8 flex justify-center">
        <img 
          src="/mystical-hand-back-cover.png" 
          alt="Mystical Hand with Symbols"
          className="w-[156px] h-[179px] object-contain"
        />
      </div>

      {/* Bottom decorative line */}
      <div className="w-full max-w-2xl mt-8">
        <div className="w-full h-px bg-amber-300"></div>
      </div>
    </div>
  )
}
