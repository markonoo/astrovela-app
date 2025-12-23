import React from "react"
import { Card } from "@/components/ui/card"

const planetSymbols = [
  { symbol: "☉", name: "SONNE", position: { x: 50, y: 20 } },
  { symbol: "♀", name: "VENUS", position: { x: 20, y: 30 } },
  { symbol: "♄", name: "SATURN", position: { x: 80, y: 25 } },
  { symbol: "☽", name: "MOND", position: { x: 85, y: 60 } },
  { symbol: "☿", name: "MERKUR", position: { x: 15, y: 70 } },
  { symbol: "♂", name: "MARS", position: { x: 30, y: 85 } },
  { symbol: "♅", name: "URANUS", position: { x: 70, y: 80 } },
  { symbol: "♆", name: "NEPTUN", position: { x: 50, y: 90 } },
  { symbol: "♇", name: "PLUT", position: { x: 10, y: 50 } },
  { symbol: "⚷", name: "CHIRON", position: { x: 90, y: 40 } },
  { symbol: "♃", name: "JUPITER", position: { x: 60, y: 15 } },
  { symbol: "☊", name: "QUECKSILBER", position: { x: 40, y: 75 } },
]

export function BirthChart() {
  return (
    <div className="h-full">\n      <div className="page-content page-content w-full max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] font-serif text-center mb-12">DEIN GEBURTSDIAGRAMM</h1>

        <div className="relative w-full max-w-2xl flex-1 mx-auto aspect-square mb-12">
          {/* Outer Circle */}
          <div className="absolute inset-0 border-2 border-primary rounded-full"></div>

          {/* Inner Circle */}
          <div className="absolute inset-8 border border-primary/60 rounded-full"></div>

          {/* Center Circle */}
          <div className="absolute inset-1/3 border border-primary/40 rounded-full"></div>

          {/* House Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}
              className="absolute w-0.5 bg-primary/30 origin-bottom"
              style={{
                height: "50%",
                left: "50%",
                bottom: "50%",
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Zodiac Signs */}
          <div className="absolute inset-4 text-primary text-4xl md:text-5xl">
            {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((sign, i) => (
              <div key={i}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-45%) rotate(-${i * 30}deg)`,
                }}
              >
                {sign}
              </div>
            ))}
          </div>

          {/* House Numbers */}
          <div className="absolute inset-16 text-primary/60 text-sm">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num, i) => (
              <div key={i}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 30 + 15}deg) translateY(-35%) rotate(-${i * 30 + 15}deg)`,
                }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Aspect Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="20%"
              y1="30%"
              x2="80%"
              y2="70%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
            />
            <line x1="50%"
              y1="10%"
              x2="50%"
              y2="90%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
            />
            <line x1="15%"
              y1="50%"
              x2="85%"
              y2="50%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40"
            />
          </svg>
        </div>

        {/* Planet Legend */}
        <div className="grid grid-cols-3 gap-6 text-center">
          {planetSymbols.map((planet, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <span className="text-primary text-4xl md:text-5xl">{planet.symbol}</span>
              <span className="body-copy text-sm font-medium">{planet.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
