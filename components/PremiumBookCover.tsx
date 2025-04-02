import type React from "react"

interface PremiumBookCoverProps {
  name: string
  birthDate: string
  birthPlace: string
  colorScheme: string
  svgContent: string | null
}

const COLOR_SCHEMES = {
  default: { name: "Default", bgColor: "#f0f0f0", textColor: "#333333", accentColor: "#666666" },
  blue: { name: "Blue", bgColor: "#e0f2fe", textColor: "#1e3a8a", accentColor: "#3b82f6" },
  green: { name: "Green", bgColor: "#dcfce7", textColor: "#166534", accentColor: "#22c55e" },
  purple: { name: "Purple", bgColor: "#ede9fe", textColor: "#4c1d95", accentColor: "#7c3aed" },
  orange: { name: "Orange", bgColor: "#ffedd5", textColor: "#9a3412", accentColor: "#f97316" },
}

// Create a simple, clean SVG that we know works
const createSimpleNatalChart = (textColor: string) => {
  return `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      width="100%" 
      height="100%"
      style="max-width: 100%; max-height: 100%;"
    >
      <!-- Outer circle -->
      <circle cx="400" cy="400" r="350" fill="none" stroke="${textColor}" strokeWidth="2" />
      
      <!-- Inner circle -->
      <circle cx="400" cy="400" r="300" fill="none" stroke="${textColor}" strokeWidth="1" />
      
      <!-- Zodiac divisions - 12 segments -->
      ${Array.from({ length: 12 })
        .map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 400 + 350 * Math.cos(angle)
          const y1 = 400 + 350 * Math.sin(angle)
          const x2 = 400 + 300 * Math.cos(angle)
          const y2 = 400 + 300 * Math.sin(angle)
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${textColor}" strokeWidth="1" />`
        })
        .join("")}
      
      <!-- Zodiac symbols -->
      ${[
        { symbol: "♈", name: "Aries", angle: 15 },
        { symbol: "♉", name: "Taurus", angle: 45 },
        { symbol: "♊", name: "Gemini", angle: 75 },
        { symbol: "♋", name: "Cancer", angle: 105 },
        { symbol: "♌", name: "Leo", angle: 135 },
        { symbol: "♍", name: "Virgo", angle: 165 },
        { symbol: "♎", name: "Libra", angle: 195 },
        { symbol: "♏", name: "Scorpio", angle: 225 },
        { symbol: "♐", name: "Sagittarius", angle: 255 },
        { symbol: "♑", name: "Capricorn", angle: 285 },
        { symbol: "♒", name: "Aquarius", angle: 315 },
        { symbol: "♓", name: "Pisces", angle: 345 },
      ]
        .map((sign) => {
          const angle = (sign.angle * Math.PI) / 180
          const x = 400 + 325 * Math.cos(angle)
          const y = 400 + 325 * Math.sin(angle)
          return `
          <text 
            x="${x}" 
            y="${y}" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fill="${textColor}" 
            fontSize="20"
            fontFamily="Arial, sans-serif"
          >
            ${sign.symbol}
          </text>
        `
        })
        .join("")}
      
      <!-- Planet symbols (simplified) -->
      ${[
        { symbol: "☉", name: "Sun", angle: 50, distance: 200 },
        { symbol: "☽", name: "Moon", angle: 120, distance: 220 },
        { symbol: "☿", name: "Mercury", angle: 80, distance: 180 },
        { symbol: "♀", name: "Venus", angle: 200, distance: 240 },
        { symbol: "♂", name: "Mars", angle: 280, distance: 190 },
        { symbol: "♃", name: "Jupiter", angle: 320, distance: 170 },
        { symbol: "♄", name: "Saturn", angle: 10, distance: 210 },
      ]
        .map((planet) => {
          const angle = (planet.angle * Math.PI) / 180
          const x = 400 + planet.distance * Math.cos(angle)
          const y = 400 + planet.distance * Math.sin(angle)
          return `
          <g>
            <circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${textColor}" strokeWidth="1" />
            <text 
              x="${x}" 
              y="${y}" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fill="${textColor}" 
              fontSize="16"
              fontFamily="Arial, sans-serif"
            >
              ${planet.symbol}
            </text>
          </g>
        `
        })
        .join("")}
      
      <!-- Center point -->
      <circle cx="400" cy="400" r="5" fill="${textColor}" />
    </svg>
  `
}

const PremiumBookCover: React.FC<PremiumBookCoverProps> = ({
  name,
  birthDate,
  birthPlace,
  colorScheme,
  svgContent, // We'll ignore this and use our own SVG
}) => {
  const scheme = COLOR_SCHEMES[colorScheme as keyof typeof COLOR_SCHEMES] || COLOR_SCHEMES.default

  // Create a simple, clean SVG with the current text color
  const simpleSvg = createSimpleNatalChart(scheme.textColor)

  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-lg shadow-lg"
      style={{ backgroundColor: scheme.bgColor }}
    >
      {/* Book Title */}
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center" style={{ color: scheme.textColor }}>
          {name.toUpperCase()}
        </h1>
      </div>

      {/* SVG Chart - Using a fixed-height container with flex centering */}
      <div
        className="absolute inset-0 z-10"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60%", // Fixed height in the middle of the cover
          top: "20%", // Position it in the middle
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          dangerouslySetInnerHTML={{ __html: simpleSvg }}
        />
      </div>

      {/* Birth Details */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-center z-20">
        <p className="text-sm md:text-base font-medium" style={{ color: scheme.textColor }}>
          {birthDate}
        </p>
        <p className="text-sm md:text-base font-medium" style={{ color: scheme.textColor }}>
          {birthPlace}
        </p>
      </div>
    </div>
  )
}

export default PremiumBookCover

