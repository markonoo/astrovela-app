"use client"

import Link from "next/link"

export function StartQuizButton() {
  return (
    <Link href="/quiz">
      <button className="px-8 py-3 bg-[#f7c800] rounded-full text-[#28293d] font-medium hover:opacity-90 transition-opacity">
        Start Your Astrology Quiz
      </button>
    </Link>
  )
}

