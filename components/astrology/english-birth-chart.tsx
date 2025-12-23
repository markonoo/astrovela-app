import React from "react"
import { Section } from "./base/Section"
import { PageTitle } from "./base/PageTitle"

export function EnglishBirthChart() {
  return (
    <div className="h-full bg-black flex flex-col flex-1">
      <Section className="page-dark text-center flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <PageTitle className="text-gold">YOUR BIRTH<br />CHART</PageTitle>

          {/* Birth Chart Placeholder - matches reference image */}
          <div className="flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-2 border-purple-400 relative bg-black flex items-center justify-center">
              {/* Outer ring with zodiac symbols */}
              <div className="absolute inset-4 rounded-full border border-purple-400/60">
                {/* Zodiac symbols around the outer ring */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-purple-400 text-xl">♍</div>
                <div className="absolute top-6 right-6 text-purple-400 text-xl">♎</div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl">♏</div>
                <div className="absolute bottom-6 right-6 text-purple-400 text-xl">♐</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-purple-400 text-xl">♑</div>
                <div className="absolute bottom-6 left-6 text-purple-400 text-xl">♒</div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl">♓</div>
                <div className="absolute top-6 left-6 text-purple-400 text-xl">♈</div>
              </div>

              {/* Inner chart area */}
              <div className="absolute inset-12 rounded-full border border-purple-400/40">
                {/* Chart divisions */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288">
                  <line x1="144" y1="0" x2="144" y2="288" stroke="rgba(196, 181, 253, 0.3)" strokeWidth="1" />
                  <line x1="0" y1="144" x2="288" y2="144" stroke="rgba(196, 181, 253, 0.3)" strokeWidth="1" />
                  <line x1="40" y1="40" x2="248" y2="248" stroke="rgba(196, 181, 253, 0.3)" strokeWidth="1" />
                  <line x1="248" y1="40" x2="40" y2="248" stroke="rgba(196, 181, 253, 0.3)" strokeWidth="1" />
                </svg>

                {/* House numbers */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-purple-400 text-sm">12</div>
                <div className="absolute top-8 right-8 text-purple-400 text-sm">11</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm">10</div>
                <div className="absolute bottom-8 right-8 text-purple-400 text-sm">9</div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-purple-400 text-sm">6</div>
                <div className="absolute bottom-8 left-8 text-purple-400 text-sm">5</div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm">4</div>
                <div className="absolute top-8 left-8 text-purple-400 text-sm">3</div>

                {/* Planetary symbols positioned around the chart */}
                <div className="absolute top-16 left-20 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♆</div>
                <div className="absolute top-24 right-16 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♒</div>
                <div className="absolute right-20 top-32 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♏</div>
                <div className="absolute bottom-20 right-24 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♐</div>
                <div className="absolute bottom-16 left-28 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♓</div>
                <div className="absolute left-16 bottom-32 text-purple-400 text-lg bg-purple-900 px-2 py-1 rounded">♒</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-12 gap-y-4 text-gold text-lg">
            <div className="flex items-center gap-3">
              <span className="text-xl">☉</span>
              <span className="font-sans">SUN</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♀</span>
              <span className="font-sans">VENUS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♄</span>
              <span className="font-sans">SATURN</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">☽</span>
              <span className="font-sans">MOON</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♂</span>
              <span className="font-sans">MARS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♅</span>
              <span className="font-sans">URANUS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">☿</span>
              <span className="font-sans">MERCURY</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♃</span>
              <span className="font-sans">JUPITER</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♆</span>
              <span className="font-sans">NEPTUNE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">♇</span>
              <span className="font-sans">PLUTO</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">⚷</span>
              <span className="font-sans">CHIRON</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
