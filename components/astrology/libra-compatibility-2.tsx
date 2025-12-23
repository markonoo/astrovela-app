import React from "react"
import { ZodiacIcon } from "../ui/zodiac-icon"

interface LibraCompatibility2Props {
  pageNumber: number
}

export function LibraCompatibility2({ pageNumber }: LibraCompatibility2Props) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col items-center justify-center relative">
      {/* Content grid */}
      <div className="px-12 py-8 grid grid-cols-2 gap-x-12 gap-y-8 max-w-6xl">
        {/* Libra + Leo */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="leo" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + LEO</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Leo and Libra are a socially dynamic duo, both loving attention and admiration, but in slightly different ways. Leo thrives on personal praise, while you seek harmony and approval in a broader social context. You are likely to appreciate and even celebrate your differences, with you adoring Leo's strength and vivacity, and Leo appreciating your charm and elegance. Potential challenges include Leo's dominating nature and your indecisiveness. Balancing these traits with mutual respect and admiration can lead to a joyful and fulfilling relationship.
          </p>
        </div>

        {/* Libra + Virgo */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="virgo" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + VIRGO</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Virgo and Libra may initially struggle with their different approaches to life; Virgo is analytical and detail-oriented, while Libra is more about balance and aesthetics. However, they both share a love for intellectual stimulation. Virgo can learn from Libra's balanced perspective, and Libra can benefit from Virgo's meticulousness. Challenges may arise from Virgo's criticism and Libra's indecisiveness. Through patience and continuous effort to understand each other's styles and needs, you can form a well-rounded partnership.
          </p>
        </div>

        {/* Libra + Libra */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + LIBRA</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Two Libras together will enjoy a relationship filled with peace, beauty, and harmony, valuing fairness and maintaining a pleasant atmosphere. However, you might find it challenging to make decisions or confront necessary but uncomfortable issues. You need to be careful not to prioritize harmony over addressing important matters. By fostering a willingness to face issues and make decisions together, Libra partners can ensure your relationship is not only harmonious but also healthy and progressive.
          </p>
        </div>

        {/* Libra + Scorpio */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ZodiacIcon sign="libra" size={35} className="text-amber-600 font-bold" />
            <span className="text-2xl text-amber-600 font-bold">+</span>
            <ZodiacIcon sign="scorpio" size={35} className="text-amber-600 font-bold" />
          </div>
          <h2 className="text-xl font-semibold text-center tracking-[0.15em] font-serif text-gray-800">LIBRA + SCORPIO</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Libra and Scorpio can be a challenging match, as they operate on very different levels. You are airy and light, seeking harmony and surface-level connection, whereas Scorpio seeks intense, deep emotional involvement. Scorpio can help you to explore the depths of your feelings, while you can teach Scorpio the art of compromise and the value of peace. Your relationship will require significant effort in understanding and adjusting to each other's emotional and communication styles.
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
