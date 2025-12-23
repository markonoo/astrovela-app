import React from "react"

interface ModernAstrologyIntroProps {
  pageNumber: number
}

export function ModernAstrologyIntro({ pageNumber }: ModernAstrologyIntroProps) {
  return (
    <div className="h-full text-white flex flex-col flex-1 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/modern-astrology-background.png)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-indigo-950/80 to-purple-950/80" />

      {/* Content */}
      <div className="flex-1 flex items-start pt-16 px-12 relative z-10">
        {/* Large decorative M and text */}
        <div className="flex items-start gap-8 max-w-6xl mx-auto">
          <div className="text-9xl font-serif text-amber-300 leading-none mt-4 select-none">M</div>
          <div className="flex-1 text-white text-lg leading-relaxed pt-6">
            <p className="mb-6">
              <span className="lowercase">e gaze up at the night sky, a cosmic tapestry woven over millennia. It's not just a canvas of twinkling stars and dancing planets, but a story unfolding – the story of astrology. As ancient as civilization itself, and as enduring as the constellations that guide our way, astrology has captivated humanity with its mystical allure and promise of understanding. Throughout the ages, it has been a constant companion, whispering wisdom from the stars, and guiding us on our journey.</span>
            </p>
            
            <p className="mb-6">
              The human imagination has long been captivated by the stars, ever since the ancient Babylonians laid the groundwork for astrology in the 2nd millennium BCE. This fascination continued as the Greeks built these foundations during the Hellenistic, creating even more intricate systems. Astrology stands as evidence of our enduring desire to find meaning in the greatness of the cosmos and to understand our place in the universe.
            </p>
            
            <p>
              It would be a mistake to overview astrology. Instead, we witness its comeback in the modern era. In the face of a rapidly changing world, many find solace and insight in this ancient practice. It acts as a bridge, connecting the wisdom of the ancients with the complexities of our contemporary lives. Like the first astrologers who gazed up at the night sky in wonder, we, too, seek guidance from the stars, finding their insights as relevant today as they were millennia ago.
            </p>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-amber-300 text-lg font-light">{pageNumber}</div>
      </div>
    </div>
  )
}
