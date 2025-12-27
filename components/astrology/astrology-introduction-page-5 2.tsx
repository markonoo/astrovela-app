import React from "react"

interface AstrologyIntroductionPage5Props {
  pageNumber: number
}

export function AstrologyIntroductionPage5({ pageNumber }: AstrologyIntroductionPage5Props) {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 0.5 + "px",
              height: Math.random() * 2 + 0.5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 2 + 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Decorative icon at top */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
        <img 
          src="/astrology-intro-icon.png" 
          alt="Astrology Introduction" 
          className="w-20 h-20 object-contain opacity-80"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-16 text-center">
        {/* Decorative A */}
        <div className="flex items-start mb-6">
          <span className="text-8xl font-serif text-amber-200 leading-none mr-4 mt-2">
            A
          </span>
          <p className="text-left text-white text-lg leading-relaxed flex-1 pt-3">
            strology is an ancient practice that interprets the influence of stars and planets on human affairs. A birth
            chart, also known as a natal chart, is a map of where all the major celestial bodies were located in the sky
            at the exact moment of your birth. Each position has a specific meaning that can affect different aspects of
            your life
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px bg-amber-200/40 w-32" />
          <div className="w-2 h-2 bg-amber-200/60 rounded-full mx-4" />
          <div className="h-px bg-amber-200/40 w-32" />
        </div>

        {/* Second paragraph */}
        <p className="text-white text-lg leading-relaxed mb-8">
          In this section, we will navigate through each planet that appears in your birth chart. This section is
          dedicated to describing each of your celestial bodies, starting from the Sun, moving through the Moon, Rising,
          Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, to Pluto and Chiron. Each of these celestial bodies
          has a story to tell about you. Whether it's a fiery Aries Sun, a cautious Virgo Mercury, or a dreamy Pisces
          Venus, each placement has a profound impact on your personality and how you interact with the world.
        </p>

        {/* Third paragraph */}
        <p className="text-white text-lg leading-relaxed">
          This is a tool for your personal reflection and growth. By understanding the nuances of your birth chart, you
          can begin to understand the dynamics of your personality, how you best interact with others, and what your
          potentials are. We hope this section will provide you with valuable insights and a clearer understanding of
          your path in life.
        </p>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="text-amber-200/60 text-lg font-light">{pageNumber}</span>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
