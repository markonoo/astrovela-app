/**
 * Consolidated utility functions for chart handling and SVG processing
 */

// Add import for safe storage utilities
import { safeSetSessionItem, safeGetSessionItem } from "@/utils/safe-storage"

// Generate a fallback natal chart SVG
export function generateFallbackChart(): string {
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

  return svgContent
}

// Sanitize SVG content to fix common issues
export function sanitizeSvg(svgContent: string): string {
  if (typeof window === "undefined" || !svgContent) {
    // Server-side or no content - return as is
    return svgContent
  }

  try {
    // First, let's do a simple string replacement for empty hidden attributes
    // This catches cases before parsing that might cause issues
    const processedSvg = svgContent
      .replace(/hidden=""/g, 'visibility="hidden"')
      .replace(/hidden(\s|>)/g, 'visibility="hidden"$1')

    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(processedSvg, "image/svg+xml")

    // Check for parsing errors
    const parserError = svgDoc.querySelector("parsererror")
    if (parserError) {
      console.error("SVG parsing error:", parserError.textContent)
      return processedSvg // Return pre-processed SVG if parsing failed
    }

    const svgElement = svgDoc.documentElement

    // Fix invalid attributes - specifically the "hidden" attribute
    const elementsWithHidden = svgDoc.querySelectorAll("[hidden]")
    elementsWithHidden.forEach((el) => {
      // Always remove the hidden attribute and replace with visibility
      el.removeAttribute("hidden")
      el.setAttribute("visibility", "hidden")
    })

    // Ensure viewBox is set
    if (!svgElement.hasAttribute("viewBox")) {
      // Try to get dimensions from width/height
      const width = svgElement.getAttribute("width") || "800"
      const height = svgElement.getAttribute("height") || "800"
      svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`)
    }

    // Ensure preserveAspectRatio is set for proper centering
    svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet")

    // Add width and height if missing
    if (!svgElement.hasAttribute("width")) {
      svgElement.setAttribute("width", "100%")
    }
    if (!svgElement.hasAttribute("height")) {
      svgElement.setAttribute("height", "100%")
    }

    // Add style for centering
    const currentStyle = svgElement.getAttribute("style") || ""
    if (!currentStyle.includes("display:")) {
      svgElement.setAttribute(
        "style",
        `${currentStyle}; display: block; margin: 0 auto; max-width: 100%; max-height: 100%;`,
      )
    }

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error sanitizing SVG:", error)
    return svgContent // Return original if an error occurred
  }
}

// Load the fallback chart SVG from public folder or generate one
export async function loadFallbackChart(): Promise<string> {
  try {
    // Try to load from public folder first
    const response = await fetch("/images/fallback-natal-chart.svg")
    if (response.ok) {
      const svgText = await response.text()
      // Sanitize the SVG before returning
      return sanitizeSvg(svgText)
    }
    throw new Error("SVG file not found")
  } catch (error) {
    console.log("Error loading SVG from public folder:", error)
    // Generate fallback if file not found
    return generateFallbackChart()
  }
}

// Preload the fallback chart and store in sessionStorage
export async function preloadFallbackChart(): Promise<void> {
  try {
    const fallbackSvg = await loadFallbackChart()
    safeSetSessionItem("fallbackNatalChartSVG", fallbackSvg);
  } catch (error) {
    console.error("Error preloading fallback chart:", error)
  }
}

// Get the fallback chart from sessionStorage or generate one
export function getFallbackChart(): string {
  const cachedChart = safeGetSessionItem("fallbackNatalChartSVG");
  if (cachedChart) {
    return cachedChart;
  }
  return generateFallbackChart();
}

// Apply color scheme to SVG content
export function applySvgColorScheme(svgContent: string, textColor: string): string {
  if (typeof window === "undefined") {
    return svgContent.replace(/fill="currentColor"/g, `fill="${textColor}"`)
  }

  try {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml")
    const svgElement = svgDoc.documentElement

    // Apply text color to all text elements
    const textElements = svgElement.querySelectorAll("text")
    textElements.forEach((el) => {
      el.setAttribute("fill", textColor)
      // Add a subtle stroke for better visibility
      el.setAttribute("stroke", "rgba(0,0,0,0.2)")
      el.setAttribute("stroke-width", "0.2")
    })

    // Apply color to paths and lines
    const pathElements = svgElement.querySelectorAll("path, circle, line")
    pathElements.forEach((el) => {
      if (el.getAttribute("stroke")) {
        el.setAttribute("stroke", textColor)
      }
    })

    return svgElement.outerHTML
  } catch (error) {
    console.error("Error applying color scheme to SVG:", error)
    // Fallback to simple replacement
    return svgContent.replace(/fill="currentColor"/g, `fill="${textColor}"`)
  }
}

// Color scheme definitions
export const COLOR_SCHEMES = {
  green: {
    name: "Green",
    bgColor: "#1a3a2a",
    textColor: "#f0e8da",
    accentColor: "#f7c800",
  },
  black: {
    name: "Black",
    bgColor: "#121212",
    textColor: "#f0e8da",
    accentColor: "#f7c800",
  },
  "light-pastel": {
    name: "Light Pastel",
    bgColor: "#e6f2ff",
    textColor: "#333333",
    accentColor: "#7b68ee",
  },
  rose: {
    name: "Rose",
    bgColor: "#f8d7da",
    textColor: "#721c24",
    accentColor: "#dc3545",
  },
  pink: {
    name: "Pink",
    bgColor: "#f4c1d7",
    textColor: "#292425",
    accentColor: "#93384b",
  },
}

// Get color scheme by key
export function getColorScheme(key = "green") {
  return COLOR_SCHEMES[key as keyof typeof COLOR_SCHEMES] || COLOR_SCHEMES.green
}

// Dispatch color change event
export function dispatchColorChangeEvent(color: string): void {
  if (typeof window === "undefined") return

  const event = new CustomEvent("colorSchemeChange", {
    detail: { colorScheme: color },
  })
  window.dispatchEvent(event)
}

