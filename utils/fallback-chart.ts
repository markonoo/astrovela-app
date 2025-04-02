export function getFallbackChartSVG(): string {
  console.log("Generating fallback chart SVG")

  // Create a basic natal chart SVG with proper attributes
  const svgContent = `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid meet"
      style="overflow: visible;"
    >
      <!-- Outer circle -->
      <circle cx="400" cy="400" r="350" fill="none" stroke="currentColor" stroke-width="2" />
      
      <!-- Inner circle -->
      <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" stroke-width="1" />
      
      <!-- Zodiac divisions - 12 segments -->
      ${Array.from({ length: 12 })
        .map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 400 + 350 * Math.cos(angle)
          const y1 = 400 + 350 * Math.sin(angle)
          const x2 = 400 + 300 * Math.cos(angle)
          const y2 = 400 + 300 * Math.sin(angle)
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="1" />`
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
            text-anchor="middle" 
            dominant-baseline="middle" 
            fill="currentColor" 
            font-size="20"
            font-family="Arial, sans-serif"
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
            <circle cx="${x}" cy="${y}" r="15" fill="none" stroke="currentColor" stroke-width="1" />
            <text 
              x="${x}" 
              y="${y}" 
              text-anchor="middle" 
              dominant-baseline="middle" 
              fill="currentColor" 
              font-size="16"
              font-family="Arial, sans-serif"
            >
              ${planet.symbol}
            </text>
          </g>
        `
        })
        .join("")}
      
      <!-- Center point -->
      <circle cx="400" cy="400" r="5" fill="currentColor" />
    </svg>
  `

  console.log("Generated fallback SVG length:", svgContent.length)
  return svgContent
}

// Keep the existing functions for backward compatibility
export function getFallbackNatalChart(): string {
  return getFallbackChartSVG()
}

export async function loadFallbackNatalChart(): Promise<string> {
  // This function simulates loading the fallback chart.
  return getFallbackChartSVG()
}

export async function preloadFallbackNatalChart(): Promise<void> {
  console.log("Preloading fallback natal chart")
  try {
    // Try to load from public folder first
    const response = await fetch("/images/fallback-natal-chart.svg")
    if (response.ok) {
      const svgText = await response.text()
      console.log("Preloaded SVG from public folder, length:", svgText.length)

      // Sanitize the SVG before storing
      const sanitizedSvg = sanitizeSvg(svgText)

      // Store in sessionStorage for quick access
      if (typeof window !== "undefined") {
        sessionStorage.setItem("fallbackNatalChartSVG", sanitizedSvg)
      }
    } else {
      throw new Error("SVG file not found")
    }
  } catch (error) {
    console.log("Error preloading SVG, generating fallback:", error)
    // Generate fallback
    const fallbackSvg = getFallbackChartSVG()
    // Store in sessionStorage
    if (typeof window !== "undefined") {
      sessionStorage.setItem("fallbackNatalChartSVG", fallbackSvg)
    }
  }
}

// Helper function to sanitize SVG content
export function sanitizeSvg(svgContent: string): string {
  if (typeof window === "undefined") {
    // Server-side - return as is
    return svgContent
  }

  try {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml")
    const svgElement = svgDoc.documentElement

    // Fix invalid attributes - specifically the "hidden" attribute
    const elementsWithHidden = svgElement.querySelectorAll("[hidden]")
    elementsWithHidden.forEach((el) => {
      const hiddenValue = el.getAttribute("hidden")
      if (hiddenValue === "" || hiddenValue === null) {
        // Set a valid value for the hidden attribute
        el.setAttribute("hidden", "true")
      }
    })

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error sanitizing SVG:", error)
    return svgContent
  }
}

