import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraCompatibility3Props {
  pageNumber: number
}

export function LibraCompatibility3({ pageNumber }: LibraCompatibility3Props) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col items-center justify-center relative">
      {/* Content grid */}
      <div className="px-12 py-8 grid grid-cols-2 gap-x-12 gap-y-8 max-w-6xl">
        {/* Libra + Sagittarius */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="sagittarius" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + SAGITTARIUS</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Libra and Sagittarius share a love for adventure, intellectual exploration, and social interaction. Sagittarius' enthusiasm and your sociable nature make you a lively couple with a wide circle of friends and shared interests. Challenges may arise from Sagittarius' blunt speech, which might clash with your need for harmony. Embracing openness, coupled with a willingness to occasionally step out of your comfort zones, can help you build a strong and exciting relationship.
          </p>
        </div>

        {/* Libra + Capricorn */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="capricorn" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + CAPRICORN</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Libra and Capricorn face some fundamental differences. You are about balance and ease, while Capricorn values structure and achievement. Capricorn's seriousness and dedication to their goals may seem rigid to you, who prefers a more laid-back and diplomatic approach. However, you can complement each other well if Capricorn learns to appreciate the harmony that you provide, and you respect Capricorn's commitment to their ambitions. Mutual understanding and appreciation can turn your differences into strengths.
          </p>
        </div>

        {/* Libra + Aquarius */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="aquarius" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + AQUARIUS</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Libra and Aquarius form a strong intellectual bond. Both of you are air signs, enjoying a relationship built on mutual respect, communication, and a shared social consciousness. You often find common ground in your interests in culture, art, and social change. Challenges may arise from your differing emotional expressions—you seek deeper personal connections, while Aquarius is more about connecting on an intellectual or humanitarian level. Acknowledging and respecting these needs can foster a fulfilling relationship.
          </p>
        </div>

        {/* Libra + Pisces */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="pisces" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + PISCES</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Libra and Pisces can create a relationship that blends Libra's intellectual and social approach with Pisces' emotional and intuitive nature. While you help Pisces to navigate social situations with greater ease, Pisces offers you depth and a more nuanced emotional landscape. You need to be mindful of the differing ways of handling conflict and making decisions. Pisces can sometimes be overly emotional for you, and you are too indecisive for Pisces. Through empathy and open communication, you can build a deeply compassionate and balanced partnership.
          </p>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
