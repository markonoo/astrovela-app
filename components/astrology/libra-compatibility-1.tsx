import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraCompatibility1Props {
  pageNumber: number
}

export function LibraCompatibility1({ pageNumber }: LibraCompatibility1Props) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col items-center justify-center relative">
      {/* Content grid */}
      <div className="px-12 py-8 grid grid-cols-2 gap-x-12 gap-y-8 max-w-6xl">
        {/* Libra + Aries */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="aries" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + ARIES</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Aries and Libra are directly opposite in the zodiac, which can create a magnetic attraction. Aries' bold, assertive nature contrasts with your love for balance and harmony. Your relationship thrives on differences, each bringing qualities the other lacks. Aries can help you be more decisive and spontaneous, while you can teach Aries the importance of patience and consideration for others. Challenges might arise due to Aries' impulsive tendencies and your indecisiveness. Effective communication and a deep understanding of each other's needs can lead to a dynamic and balanced partnership.
          </p>
        </div>

        {/* Libra + Taurus */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="taurus" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + TAURUS</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Taurus and Libra both have a deep appreciation for the finer things in life and share a ruling planet, Venus, which governs love and beauty. You both enjoy indulging in luxury and comfort. However, Taurus' stubborn nature may clash with your indecisive and diplomatic approach. To make this relationship work, Taurus needs to be more open to change and flexibility, while you should strive to be more decisive. Mutual respect for each other's perspectives and embracing compromise will enhance your connection and help maintain harmony.
          </p>
        </div>

        {/* Libra + Gemini */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="gemini" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + GEMINI</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Gemini and Libra form a highly compatible air sign match, both enjoying intellectual conversation and social interaction. You naturally understand each other's need for communication and are likely to have a vibrant relationship filled with interesting discussions and shared activities. However, you both tend to avoid confrontation, which might lead to unresolved issues. Encouraging open and honest dialogue about your feelings and desires will help you build a stronger and more enduring relationship.
          </p>
        </div>

        {/* Libra + Cancer */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="cancer" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + CANCER</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Cancer and Libra can find a sweet balance if they appreciate their differing approaches to love and life. Cancer's emotional depth provides a strong counterbalance to your intellectual and often detached nature. You can help Cancer see different perspectives, whereas Cancer can teach you the importance of deep emotional connections. Your main challenge lies in meeting each other's emotional and intellectual needs. A commitment to understanding and fulfilling these aspects can create a nurturing and harmonious relationship.
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
