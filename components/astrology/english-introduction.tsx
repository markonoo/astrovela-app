import React from "react"
import { Section } from "./base/Section"

export function EnglishIntroduction() {
  return (
    <div className="h-full bg-black">
      <Section className="page-dark text-center">
        <div className="mb-8">
          <svg className="w-24 h-24 text-gold" viewBox="0 0 96 96" fill="currentColor">
            <circle cx="35" cy="35" r="25" />
            <path d="M35 10 L35 20 M35 50 L35 60 M10 35 L20 35 M50 35 L60 35 M18 18 L25 25 M45 45 L52 52 M18 52 L25 45 M45 25 L52 18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path d="M61 61 Q75 45 85 61 Q75 77 61 61 Z" />
            <circle cx="75" cy="61" r="3" fill="black" />
          </svg>
        </div>

        <div className="text-gold text-left max-w-3xl leading-relaxed">
          <div className="float-left text-8xl font-serif mr-4 mt-2 leading-none">A</div>
          <p className="text-lg font-sans mb-6">
            strology is an ancient practice that interprets the influence of stars and planets on human affairs. A birthchart, also known as a natal chart, is a map of where all the major celestial bodies were located in the skyat the exact moment of your birth. Each position has a specific meaning that can affect different aspects ofyour life
          </p>
        </div>

        <div className="my-8 flex items-center gap-4">
          <div className="w-16 h-px bg-gold"></div>
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <div className="w-16 h-px bg-gold"></div>
        </div>

        <div className="text-gold text-lg font-sans leading-relaxed max-w-3xl space-y-6 flex-1">
          <p>
            In this section, we will navigate through each planet that appears in your birth chart. This section isdedicated to describing each of your celestial bodies, starting from the Sun, moving through the Moon,
            Rising, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, to Pluto and Chiron. Each of these celestialbodies has a story to tell about you. Whether it's a fiery Aries Sun, a cautious Virgo Mercury, or a dreamyPisces Venus, each placement has a profound impact on your personality and how you interact with the world.
          </p>

          <p>
            This is a tool for your personal reflection and growth. By understanding the nuances of your birth chart,
            you can begin to understand the dynamics of your personality, how you best interact with others, and whatyour potentials are. We hope this section will provide you with valuable insights and a clearerunderstanding of your path in life.
          </p>
        </div>


      </Section>
    </div>
  )
}
