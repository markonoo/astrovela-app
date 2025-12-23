import React from "react"

interface AstrologyTypesPageProps {
  pageNumber: number
}

export function AstrologyTypesPage({ pageNumber }: AstrologyTypesPageProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative">
      {/* Content grid - narrower text and better vertical centering */}
      <div className="flex-1 px-16 py-12 flex items-center">
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
        {/* Left column */}
        <div className="space-y-8">
          {/* Hellenistic Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">HELLENISTIC ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(C. 4TH CENTURY BCE - 6TH CENTURY CE)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Hellenistic astrology emerged after Alexander the Great's conquests, blending Babylonian, Egyptian, and Greek knowledge. It marked the beginning of horoscopic astrology, which focuses on the individual's birth chart. This period saw the development of many techniques still used today, such as the Ascendant (rising sign), the twelve houses, and the major aspects.
            </p>
          </div>

          {/* Vedic Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">VEDIC ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(C. 1500 BCE - PRESENT)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Also known as Jyotish, Vedic astrology has its roots in ancient Indian scriptures known as Vedas. It uses a sidereal zodiac, which is aligned with the constellations as opposed to the tropical zodiac used in Western astrology, which is aligned with the seasons. Vedic astrology places significant emphasis on the moon's position and lunar mansions (Nakshatras) for predictions and character analysis.
            </p>
          </div>

          {/* Mayan Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">MAYAN ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(C. 250 - 900 CE)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              The Maya civilization developed a unique form of astrology as part of their wider mathematical and astronomical studies. Their calendar systems were intricately linked to their astrological practices. The Mayans were adept at predicting solar and lunar eclipses and used astrology to plan agricultural and ceremonial activities.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Chinese Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">CHINESE ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(C. 2ND CENTURY BCE - PRESENT)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Chinese astrology is another ancient form of astrology that has evolved over thousands of years. It is closely tied to Chinese philosophy and includes elements of Confucianism, Taoism, and Buddhism. The system is based on the Chinese lunar calendar and utilizes the concept of Yin and Yang, the Five Elements (wood, fire, earth, metal, water), and the 12-year cycle of animals (Chinese Zodiac) to predict personality traits and life paths.
            </p>
          </div>

          {/* Islamic Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">ISLAMIC ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(8TH - 14TH CENTURY)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              During the Islamic Golden Age, Muslim scholars made significant advances in astrology, translating and expanding upon Hellenistic astrological texts. They were instrumental in the development of astrological houses, the use of degrees, and the refinement of mathematical techniques for chart construction.
            </p>
          </div>

          {/* Modern Astrology */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">MODERN ASTROLOGY</h2>
            <p className="text-xs text-gray-600 mb-3">(1ST CENTURY BCE - PRESENT)</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Modern astrology has deep roots in the astrology of other civilizations and has evolved over centuries. Its journey from ancient to contemporary times reflects a fascinating interplay between cultural, scientific, and spiritual developments.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-600 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
