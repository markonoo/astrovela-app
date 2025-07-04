"use client"

import type React from "react"
import { memo } from "react"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"
import { useQuiz } from "@/contexts/quiz-context"
import { ErrorBoundary } from "@/components/ErrorBoundary"

interface NatalChartProps {
  colorScheme: ColorSchemeKey | string
  interactive?: boolean
  showLabels?: boolean
  detailed?: boolean
  highResolution?: boolean
}

// Simple SVG natal chart component
const NatalChart: React.FC<NatalChartProps> = ({ colorScheme, interactive = false, showLabels = false, detailed = false, highResolution = false }) => {
  // Get the color scheme, defaulting to 'default' if not found
  const scheme = COLOR_SCHEMES[colorScheme as ColorSchemeKey] || COLOR_SCHEMES.green
  const textColor = scheme.textColor

  // Create zodiac symbols
  const zodiacSymbols = [
    { symbol: "♈", angle: 15 },
    { symbol: "♉", angle: 45 },
    { symbol: "♊", angle: 75 },
    { symbol: "♋", angle: 105 },
    { symbol: "♌", angle: 135 },
    { symbol: "♍", angle: 165 },
    { symbol: "♎", angle: 195 },
    { symbol: "♏", angle: 225 },
    { symbol: "♐", angle: 255 },
    { symbol: "♑", angle: 285 },
    { symbol: "♒", angle: 315 },
    { symbol: "♓", angle: 345 },
  ]

  // Create planet symbols
  const planetSymbols = [
    { symbol: "☉", angle: 50, distance: 200 },
    { symbol: "☽", angle: 120, distance: 220 },
    { symbol: "☿", angle: 80, distance: 180 },
    { symbol: "♀", angle: 200, distance: 240 },
    { symbol: "♂", angle: 280, distance: 190 },
    { symbol: "♃", angle: 320, distance: 170 },
    { symbol: "♄", angle: 10, distance: 210 },
  ]

  // Create zodiac divisions
  const zodiacDivisions = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30 * Math.PI) / 180
    const x1 = 400 + 350 * Math.cos(angle)
    const y1 = 400 + 350 * Math.sin(angle)
    const x2 = 400 + 300 * Math.cos(angle)
    const y2 = 400 + 300 * Math.sin(angle)
    return <line key={`division-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={textColor} strokeWidth="1" />
  })

  return (
    <ErrorBoundary>
      <div className="w-full h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          width="100%"
          height="100%"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        >
          {/* Outer circle */}
          <circle cx="400" cy="400" r="350" fill="none" stroke={textColor} strokeWidth="2" />

          {/* Inner circle */}
          <circle cx="400" cy="400" r="300" fill="none" stroke={textColor} strokeWidth="1" />

          {/* Zodiac divisions */}
          {zodiacDivisions}

          {/* Zodiac symbols */}
          {zodiacSymbols.map((sign, index) => {
            const angle = (sign.angle * Math.PI) / 180
            const x = 400 + 325 * Math.cos(angle)
            const y = 400 + 325 * Math.sin(angle)
            return (
              <text
                key={`zodiac-${index}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                fontSize="20"
                fontFamily="Arial, sans-serif"
              >
                {sign.symbol}
              </text>
            )
          })}

          {/* Planet symbols */}
          {planetSymbols.map((planet, index) => {
            const angle = (planet.angle * Math.PI) / 180
            const x = 400 + planet.distance * Math.cos(angle)
            const y = 400 + planet.distance * Math.sin(angle)
            return (
              <g key={`planet-${index}`}>
                <circle cx={x} cy={y} r="15" fill="none" stroke={textColor} strokeWidth="1" />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={textColor}
                  fontSize="16"
                  fontFamily="Arial, sans-serif"
                >
                  {planet.symbol}
                </text>
              </g>
            )
          })}

          {/* Center point */}
          <circle cx="400" cy="400" r="5" fill={textColor} />
        </svg>
      </div>
    </ErrorBoundary>
  )
}

// Use memo to prevent unnecessary re-renders
export default memo(NatalChart)

