import React from "react"

interface ModernAstrologyDetailsProps {
  pageNumber: number
}

export function ModernAstrologyDetails({ pageNumber }: ModernAstrologyDetailsProps) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-stone-200 text-gray-800 flex flex-col flex-1 relative">
      {/* Title - increased size and bold */}
      <div className="text-center mt-12 mb-10">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">MODERN</h1>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-gray-800">ASTROLOGY</h1>
      </div>

      {/* Modern Astrology Graphic - increased by 30% (from w-67 to w-[348px]) */}
      <div className="flex justify-center mb-8">
        <img 
          src="/modern-astrology-graphic.png" 
          alt="Modern Astrology" 
          className="w-[348px] h-auto object-contain"
        />
      </div>

      {/* Content sections - narrower text and better vertical centering */}
      <div className="flex-1 px-16 flex items-center">
        <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">HELLENISTIC ASTROLOGY</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                The period known as the Hellenistic era marked a significant evolution in astrological practice. Following Alexander the Great's conquests, a fusion of Greek, Egyptian, and Babylonian astrology gave birth to horoscopic astrology, which focuses on the casting of a horoscope or natal chart for the exact moment of an individual's birth.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE MIDDLE AGES AND RENAISSANCE</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                During the Middle Ages (5th to 15th century), astrology was intertwined with medical practices and was considered a scholarly tradition, taught in universities across Europe. The Renaissance period witnessed astrology being practiced by scholars, alchemists, and even royalty. Figures like Johannes Kepler, Tycho Brahe, and Galileo Galilei also practiced astrology. Astrology was not only a tool for divination but also a means to understand the natural world, reflecting the period's blend of scientific inquiry and mystical exploration.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE ENLIGHTENMENT AND BEYOND</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                The Enlightenment (17th to 19th century) brought a shift towards rationalism and scientific methods, leading to a decline in astrology's academic and social standing. Astrology was increasingly viewed as superstition, separate from the emerging discipline of astronomy. However, it continued to be practiced and evolved in parallel with scientific advancements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">THE 20TH CENTURY</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                The 20th century witnessed a comeback of interest in astrology. Figures like Carl Jung, who explored the connection between astrology and the human psyche, helped to reframe astrology as a tool for self-understanding and psychological insight. The latter half of the 20th century saw astrology adapt to modern culture, embracing technological advancements and the growing interest in New Age spirituality.
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
