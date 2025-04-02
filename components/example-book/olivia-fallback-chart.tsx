"use client"

// This component provides a fallback SVG for Olivia's natal chart when the API fails
export function getOliviaFallbackSVG(): string {
  // Create a basic SVG representation of a natal chart for Sagittarius sun sign (Olivia's sign)
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <!-- Outer circle -->
      <circle cx="250" cy="250" r="240" fill="none" stroke="white" strokeWidth="2" />
      
      <!-- Middle circle - houses -->
      <circle cx="250" cy="250" r="200" fill="none" stroke="white" strokeWidth="1.5" />
      
      <!-- Inner circle -->
      <circle cx="250" cy="250" r="100" fill="none" stroke="white" strokeWidth="1.5" />
      
      <!-- Zodiac divisions - 12 segments -->
      ${Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 250 + 240 * Math.cos(angle)
        const y1 = 250 + 240 * Math.sin(angle)
        const x2 = 250 + 100 * Math.cos(angle)
        const y2 = 250 + 100 * Math.sin(angle)

        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="white" strokeWidth="1.5" />`
      }).join("")}
      
      <!-- Zodiac symbols -->
      ${["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]
        .map((symbol, i) => {
          const angle = ((i * 30 + 15) * Math.PI) / 180
          const x = 250 + 220 * Math.cos(angle)
          const y = 250 + 220 * Math.sin(angle)

          return `<text x="${x}" y="${y}" fill="#f7c800" fontSize="16" textAnchor="middle" dominantBaseline="middle">${symbol}</text>`
        })
        .join("")}
      
      <!-- Sagittarius highlighted (Olivia's sun sign) -->
      <circle cx="${250 + 220 * Math.cos(((8 * 30 + 15) * Math.PI) / 180)}" 
              cy="${250 + 220 * Math.sin(((8 * 30 + 15) * Math.PI) / 180)}" 
              r="20" fill="rgba(247, 200, 0, 0.2)" stroke="#f7c800" strokeWidth="1" />
      
      <!-- Planets - simplified representation -->
      <text x="250" y="130" fill="#f7c800" fontSize="16" textAnchor="middle">☉</text>
      <text x="250" y="370" fill="#f7c800" fontSize="16" textAnchor="middle">☽</text>
      <text x="130" y="250" fill="#f7c800" fontSize="16" textAnchor="middle">☿</text>
      <text x="370" y="250" fill="#f7c800" fontSize="16" textAnchor="middle">♀</text>
      <text x="325" y="325" fill="#f7c800" fontSize="16" textAnchor="middle">♂</text>
      <text x="175" y="175" fill="#f7c800" fontSize="16" textAnchor="middle">♃</text>
      <text x="325" y="175" fill="#f7c800" fontSize="16" textAnchor="middle">♄</text>
      
      <!-- Aspect lines - simplified -->
      <line x1="250" y1="130" x2="250" y2="370" stroke="rgba(247, 200, 0, 0.4)" strokeWidth="1" />
      <line x1="130" y1="250" x2="370" y2="250" stroke="rgba(247, 200, 0, 0.4)" strokeWidth="1" />
      <line x1="175" y1="175" x2="325" y2="325" stroke="rgba(247, 200, 0, 0.4)" strokeWidth="1" />
      
      <!-- Text for Olivia -->
      <text x="250" y="70" fill="white" fontSize="14" textAnchor="middle">Olivia's Natal Chart</text>
      <text x="250" y="430" fill="white" fontSize="12" textAnchor="middle">December 6, 2021</text>
      <text x="250" y="450" fill="white" fontSize="12" textAnchor="middle">Hamburg, Germany</text>
    </svg>
  `
}

