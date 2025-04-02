"use client"

import { useEffect, useRef, useState } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import type { NatalChart as NatalChartType, ZodiacSign, CelestialBody } from "@/types/astrology"

interface NatalChartProps {
  className?: string
  color?: string
  interactive?: boolean
  showLabels?: boolean
  detailed?: boolean
  highResolution?: boolean
}

export function NatalChart({
  className = "w-full h-full",
  color = "#ffffff",
  interactive = false,
  showLabels = false,
  detailed = false,
  highResolution = true,
}: NatalChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { state } = useQuiz()
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  // Planet symbols for drawing
  const planetSymbols: Record<CelestialBody, string> = {
    sun: "☉",
    moon: "☽",
    mercury: "☿",
    venus: "♀",
    mars: "♂",
    jupiter: "♃",
    saturn: "♄",
    uranus: "♅",
    neptune: "♆",
    pluto: "♇",
    chiron: "⚷",
    north_node: "☊",
    south_node: "☋",
  }

  // Zodiac symbols for drawing
  const zodiacSymbols: Record<ZodiacSign, string> = {
    aries: "♈",
    taurus: "♉",
    gemini: "♊",
    cancer: "♋",
    leo: "♌",
    virgo: "♍",
    libra: "♎",
    scorpio: "♏",
    sagittarius: "♐",
    capricorn: "♑",
    aquarius: "♒",
    pisces: "♓",
  }

  // Enhanced colors for each planet and zodiac sign
  const planetColors: Record<CelestialBody, string> = {
    sun: "#FFB347", // Vibrant orange
    moon: "#E6E6FA", // Lavender
    mercury: "#B5A642", // Brass
    venus: "#FF69B4", // Hot Pink
    mars: "#FF4500", // Red-Orange
    jupiter: "#4169E1", // Royal Blue
    saturn: "#708090", // Slate Gray
    uranus: "#40E0D0", // Turquoise
    neptune: "#9370DB", // Medium Purple
    pluto: "#8B0000", // Dark Red
    chiron: "#FF69B4", // Hot Pink
    north_node: "#FFA500", // Orange
    south_node: "#FFA500", // Orange
  }

  const zodiacColors: Record<ZodiacSign, string> = {
    aries: "#FF5733", // Bright red
    taurus: "#228B22", // Forest Green
    gemini: "#FFD700", // Gold
    cancer: "#87CEFA", // Light Sky Blue
    leo: "#FF8C00", // Dark Orange
    virgo: "#32CD32", // Lime Green
    libra: "#DAA520", // Goldenrod
    scorpio: "#4682B4", // Steel Blue
    sagittarius: "#FF4500", // Orange Red
    capricorn: "#006400", // Dark Green
    aquarius: "#1E90FF", // Dodger Blue
    pisces: "#6495ED", // Cornflower Blue
  }

  // Enhanced aspect colors
  const aspectColors = {
    conjunction: "#FFD700", // Gold
    opposition: "#4169E1", // Royal Blue
    trine: "#32CD32", // Lime Green
    square: "#FF1493", // Deep Pink
    sextile: "#00BFFF", // Deep Sky Blue
    quincunx: "#9932CC", // Dark Orchid
    semi_sextile: "#20B2AA", // Light Sea Green
    semi_square: "#FF6347", // Tomato
    sesquiquadrate: "#FF4500", // Orange Red
    quintile: "#9370DB", // Medium Purple
    biquintile: "#BA55D3", // Medium Orchid
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Center point and radius calculations
    let centerX: number, centerY: number, radius: number
    const pixelRatio = highResolution ? window.devicePixelRatio || 1 : 1

    // Define drawChart function first
    const drawChart = () => {
      if (!ctx || !canvas) return

      // Update center and radius calculations
      centerX = canvas.width / 2
      centerY = canvas.height / 2
      radius = Math.min(centerX, centerY) - 20 * pixelRatio

      // Clear the canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set better background for visibility
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set line styles
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5 * pixelRatio

      // Draw outer circle (zodiac wheel)
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Draw inner circles with improved styling
      const innerRadii = detailed
        ? [radius * 0.85, radius * 0.75, radius * 0.65, radius * 0.4]
        : [radius * 0.8, radius * 0.6, radius * 0.4, radius * 0.2]

      for (const innerRadius of innerRadii) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
        ctx.lineWidth = 1.2 * pixelRatio
        ctx.stroke()
      }

      // If we have real chart data, use it
      if (state.natalChart && state.natalChart.planets && state.natalChart.planets.length > 0) {
        console.log("Drawing natal chart with data:", state.natalChart.planets.length + " planets");
        drawRealChart(state.natalChart, ctx, centerX, centerY, radius, color, detailed)
      } else {
        // Otherwise draw a placeholder chart
        console.log("Drawing placeholder chart");
        drawPlaceholderChart(ctx, centerX, centerY, radius, color, detailed)
      }
    }

    // Now define handleResize after drawChart is defined
    const handleResize = () => {
      const parent = canvas.parentElement
      if (parent) {
        // Get the parent container size
        const displaySize = Math.min(parent.clientWidth, parent.clientHeight)

        // Set display size (css pixels)
        canvas.style.width = `${displaySize}px`
        canvas.style.height = `${displaySize}px`

        // Set actual size in memory (scaled for high DPI)
        canvas.width = displaySize * pixelRatio
        canvas.height = displaySize * pixelRatio

        // Now we can safely call drawChart
        drawChart()
      }
    }

    // Set initial canvas dimensions and draw
    handleResize()

    // Add resize event listener
    window.addEventListener("resize", handleResize)

    // Force redraw chart after a short delay to ensure container is properly sized
    const redrawTimeout = setTimeout(() => {
      handleResize();
    }, 200);

    // Handle mouse interactions if interactive
    if (interactive && canvas) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left) * pixelRatio
        const y = (e.clientY - rect.top) * pixelRatio

        // Check if mouse is over a planet
        if (state.natalChart && state.natalChart.planets) {
          for (const planet of state.natalChart.planets) {
            const angle = (planet.degree * Math.PI) / 180
            const distance = radius * 0.5 // Adjust based on your planet positioning

            const planetX = centerX + Math.cos(angle) * distance
            const planetY = centerY + Math.sin(angle) * distance

            // Check if mouse is within 10px of planet
            const dx = x - planetX
            const dy = y - planetY
            const distance2 = Math.sqrt(dx * dx + dy * dy)

            if (distance2 < 15 * pixelRatio) {
              setHoveredPlanet(planet.name)
              setTooltipPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
              return
            }
          }
        }

        setHoveredPlanet(null)
      }

      canvas.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("resize", handleResize)
        canvas.removeEventListener("mousemove", handleMouseMove)
        clearTimeout(redrawTimeout);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(redrawTimeout);
    }
  }, [color, state.natalChart, interactive, detailed, highResolution])

  // Function to draw a real chart based on API data
  const drawRealChart = (
    chart: NatalChartType,
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    color: string,
    detailed: boolean,
  ) => {
    // Get pixel ratio for high resolution
    const pixelRatio = highResolution ? window.devicePixelRatio || 1 : 1

    // Enable anti-aliasing for smoother lines
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Create a deep space gradient background
    const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.1, centerX, centerY, radius)
    gradient.addColorStop(0, "rgba(15, 15, 50, 0.95)")
    gradient.addColorStop(0.5, "rgba(10, 10, 40, 0.9)")
    gradient.addColorStop(1, "rgba(5, 5, 20, 0.95)")
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()

    // Add subtle star field
    const starCount = detailed ? 200 : 100
    const canvas = ctx.canvas // Access the canvas from the context
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 1.5 * pixelRatio
      const opacity = Math.random() * 0.8 + 0.2

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()
    }

    // Check if we're using fallback location data (0,0 coordinates)
    const usingFallbackLocation =
      chart.birthDetails?.location?.latitude === 0 && chart.birthDetails?.location?.longitude === 0

    if (usingFallbackLocation && detailed) {
      // Add a subtle warning indicator
      ctx.font = `${10 * pixelRatio}px Arial`
      ctx.fillStyle = "rgba(255, 200, 50, 0.8)"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillText("⚠️ Using approximate location data", centerX, 40 * pixelRatio)
    }

    // Draw zodiac divisions (12 segments)
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12
      const nextAngle = ((i + 1) * Math.PI * 2) / 12

      // Draw zodiac sign background if detailed
      if (detailed) {
        const sign = Object.keys(zodiacSymbols)[i] as ZodiacSign
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, angle, nextAngle)
        ctx.closePath()
        ctx.fillStyle = `${zodiacColors[sign]}20` // More transparent
        ctx.fill()
      }

      // Draw radial lines with thicker, glowing effect
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)"
      ctx.lineWidth = 1.5 * pixelRatio
      ctx.stroke()

      // Draw degree markings if detailed
      if (detailed) {
        for (let deg = 1; deg < 30; deg++) {
          const degAngle = angle + (deg * Math.PI * 2) / 360
          const markLength = deg % 5 === 0 ? 0.05 : 0.02

          ctx.beginPath()
          ctx.moveTo(centerX + Math.cos(degAngle) * radius, centerY + Math.sin(degAngle) * radius)
          ctx.lineTo(
            centerX + Math.cos(degAngle) * (radius - radius * markLength),
            centerY + Math.sin(degAngle) * (radius - radius * markLength),
          )
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
          ctx.lineWidth = 0.8 * pixelRatio
          ctx.stroke()
        }
      }

      // Draw zodiac symbols with enhanced glow effect
      const symbolAngle = (i * Math.PI * 2) / 12 + Math.PI / 12 // Center of the segment
      const symbolX = centerX + Math.cos(symbolAngle) * (radius * 0.92)
      const symbolY = centerY + Math.sin(symbolAngle) * (radius * 0.92)

      ctx.font = `${(detailed ? 18 : 16) * pixelRatio}px Arial`
      ctx.fillStyle = detailed ? zodiacColors[Object.keys(zodiacSymbols)[i] as ZodiacSign] : color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Add enhanced glow effect to zodiac symbols
      if (detailed) {
        ctx.shadowColor = zodiacColors[Object.keys(zodiacSymbols)[i] as ZodiacSign]
        ctx.shadowBlur = 8 * pixelRatio
      }

      const zodiacSign = Object.values(zodiacSymbols)[i]
      ctx.fillText(zodiacSign, symbolX, symbolY)

      // Reset shadow
      ctx.shadowBlur = 0
    }

    // Draw houses if detailed
    if (detailed && chart.houses) {
      chart.houses.forEach((house) => {
        const angle = (house.degree * Math.PI) / 180

        // Draw house cusps with thicker lines
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + Math.cos(angle) * radius * 0.85, centerY + Math.sin(angle) * radius * 0.85)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
        ctx.lineWidth = 1.2 * pixelRatio
        ctx.stroke()

        // Draw house numbers
        if (showLabels) {
          const labelAngle = angle + Math.PI / 24 // Slightly offset
          const labelRadius = radius * 0.75
          const labelX = centerX + Math.cos(labelAngle) * labelRadius
          const labelY = centerY + Math.sin(labelAngle) * labelRadius

          ctx.font = `${12 * pixelRatio}px Arial`
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(house.number.toString(), labelX, labelY)
        }
      })
    }

    // Draw planets with enhanced styling
    chart.planets.forEach((planet) => {
      const angle = (planet.degree * Math.PI) / 180
      const distance = detailed
        ? radius * (0.5 + (planet.house % 3) * 0.05) // Vary distance slightly to prevent overlap
        : radius * (0.4 + (planet.house % 3) * 0.1) // More variation for simple chart

      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance

      // Add enhanced glow effect to planets
      ctx.shadowColor = interactive || detailed ? planetColors[planet.name] : color
      ctx.shadowBlur = 10 * pixelRatio

      // Draw planet symbol with improved visibility
      ctx.font = `${(detailed ? 16 : 18) * pixelRatio}px Arial`
      ctx.fillStyle = interactive || detailed ? planetColors[planet.name] : color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(planetSymbols[planet.name], x, y)

      // Reset shadow
      ctx.shadowBlur = 0

      // Draw a circle around the planet with improved styling
      if (!detailed) {
        ctx.beginPath()
        ctx.arc(x, y, 12 * pixelRatio, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
        ctx.lineWidth = 1.5 * pixelRatio
        ctx.stroke()
      }

      // Draw degree label if detailed
      if (detailed && showLabels) {
        const degreeText = `${Math.floor(planet.degree)}°${Math.round((planet.degree % 1) * 60)}'`
        const labelX = x + 15 * pixelRatio
        const labelY = y - 5 * pixelRatio

        ctx.font = `${8 * pixelRatio}px Arial`
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.textAlign = "left"
        ctx.fillText(degreeText, labelX, labelY)
      }

      // Draw retrograde symbol if applicable
      if (planet.retrograde) {
        ctx.fillStyle = "rgba(255, 100, 100, 0.9)"
        ctx.fillText("℞", x + 15 * pixelRatio, y - 5 * pixelRatio)
      }
    })

    // Draw aspects (connections between planets) with color-coded lines
    if (detailed && chart.aspects && chart.aspects.length > 0) {
      chart.aspects.forEach((aspect) => {
        const planet1 = chart.planets.find((p) => p.name === aspect.planet1 || p.name === aspect.planet)
        const planet2 = chart.planets.find((p) => p.name === aspect.planet2 || p.name === aspect.with)

        if (planet1 && planet2) {
          const angle1 = (planet1.degree * Math.PI) / 180
          const angle2 = (planet2.degree * Math.PI) / 180
          const distance1 = radius * (0.5 + (planet1.house % 3) * 0.05)
          const distance2 = radius * (0.5 + (planet2.house % 3) * 0.05)

          const x1 = centerX + Math.cos(angle1) * distance1
          const y1 = centerY + Math.sin(angle1) * distance1
          const x2 = centerX + Math.cos(angle2) * distance2
          const y2 = centerY + Math.sin(angle2) * distance2

          // Set line style based on aspect type with enhanced colors
          const aspectType = aspect.aspect || aspect.type || "conjunction"

          // Color-code the aspects
          let aspectColor
          if (aspectType === "trine" || aspectType === "sextile") {
            aspectColor = "rgba(64, 196, 255, 0.6)" // Blue for harmonious aspects
          } else if (aspectType === "square" || aspectType === "opposition") {
            aspectColor = "rgba(255, 64, 64, 0.6)" // Red for challenging aspects
          } else if (aspectType === "conjunction") {
            aspectColor = "rgba(255, 215, 0, 0.6)" // Gold for conjunctions
          } else {
            aspectColor = "rgba(180, 180, 180, 0.4)" // Gray for other aspects
          }

          ctx.strokeStyle = aspectColor
          ctx.lineWidth = 1.5 * pixelRatio

          // Different line styles for different aspects
          if (aspectType === "conjunction" || aspectType === "opposition") {
            ctx.setLineDash([])
          } else if (aspectType === "trine" || aspectType === "sextile") {
            ctx.setLineDash([5 * pixelRatio, 3 * pixelRatio])
          } else {
            ctx.setLineDash([2 * pixelRatio, 3 * pixelRatio])
          }

          // Draw the aspect line
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()

          // Reset line style
          ctx.strokeStyle = color
          ctx.lineWidth = 1 * pixelRatio
          ctx.setLineDash([])
        }
      })
    }

    // Draw angles (Ascendant, Midheaven, etc.) if detailed
    if (detailed && chart.angles) {
      // Draw Ascendant
      if (chart.angles.ascendant) {
        const ascAngle = (chart.angles.ascendant.degree * Math.PI) / 180
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + Math.cos(ascAngle) * radius, centerY + Math.sin(ascAngle) * radius)
        ctx.strokeStyle = "rgba(255, 100, 100, 0.9)" // Bright red for Ascendant
        ctx.lineWidth = 2.5 * pixelRatio
        ctx.stroke()

        // Label with glow
        const labelX = centerX + Math.cos(ascAngle) * (radius * 1.05)
        const labelY = centerY + Math.sin(ascAngle) * (radius * 1.05)
        ctx.font = `${14 * pixelRatio}px Arial`
        ctx.fillStyle = "rgba(255, 100, 100, 0.9)"
        ctx.shadowColor = "rgba(255, 100, 100, 0.9)"
        ctx.shadowBlur = 6 * pixelRatio
        ctx.fillText("ASC", labelX, labelY)
        ctx.shadowBlur = 0
      }

      // Draw Midheaven
      if (chart.angles.midheaven) {
        const mcAngle = (chart.angles.midheaven.degree * Math.PI) / 180
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + Math.cos(mcAngle) * radius, centerY + Math.sin(mcAngle) * radius)
        ctx.strokeStyle = "rgba(100, 100, 255, 0.9)" // Bright blue for Midheaven
        ctx.lineWidth = 2.5 * pixelRatio
        ctx.stroke()

        // Label with glow
        const labelX = centerX + Math.cos(mcAngle) * (radius * 1.05)
        const labelY = centerY + Math.sin(mcAngle) * (radius * 1.05)
        ctx.font = `${14 * pixelRatio}px Arial`
        ctx.fillStyle = "rgba(100, 100, 255, 0.9)"
        ctx.shadowColor = "rgba(100, 100, 255, 0.9)"
        ctx.shadowBlur = 6 * pixelRatio
        ctx.fillText("MC", labelX, labelY)
        ctx.shadowBlur = 0
      }
    }

    // Draw birth information if detailed
    if (detailed && chart.birthDetails) {
      ctx.font = `${12 * pixelRatio}px Arial`
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"

      const birthDate = new Date(chart.birthDetails.date)
      const formattedDate = `${birthDate.getDate()} ${birthDate.toLocaleString("default", { month: "short" })} ${birthDate.getFullYear()}, ${chart.birthDetails.time}`
      const location =
        chart.birthDetails.location.name ||
        `${chart.birthDetails.location.latitude}°N, ${chart.birthDetails.location.longitude}°E`

      ctx.fillText(formattedDate, centerX, 10 * pixelRatio)
      ctx.fillText(location, centerX, 25 * pixelRatio)
    }

    // Reset styles
    ctx.strokeStyle = color
    ctx.lineWidth = 1 * pixelRatio
  }

  // Function to draw a placeholder chart when no real data is available
  const drawPlaceholderChart = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    color: string,
    detailed: boolean,
  ) => {
    // Get pixel ratio for high resolution
    const pixelRatio = highResolution ? window.devicePixelRatio || 1 : 1

    // Enable anti-aliasing
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Create a deep space gradient background
    const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.1, centerX, centerY, radius)
    gradient.addColorStop(0, "rgba(15, 15, 50, 0.95)")
    gradient.addColorStop(0.5, "rgba(10, 10, 40, 0.9)")
    gradient.addColorStop(1, "rgba(5, 5, 20, 0.95)")
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()

    // Add subtle star field
    const starCount = detailed ? 200 : 100
    const canvas = ctx.canvas // Access the canvas from the context
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 1.5 * pixelRatio
      const opacity = Math.random() * 0.8 + 0.2

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()
    }

    // Draw zodiac divisions (12 segments)
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12

      // Draw radial lines with improved styling
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)"
      ctx.lineWidth = 1.5 * pixelRatio
      ctx.stroke()

      // Draw zodiac symbols with glow effect
      const symbolAngle = (i * Math.PI * 2) / 12 + Math.PI / 12 // Center of the segment
      const symbolX = centerX + Math.cos(symbolAngle) * (radius * 0.92)
      const symbolY = centerY + Math.sin(symbolAngle) * (radius * 0.92)

      ctx.font = `${16 * pixelRatio}px Arial`
      ctx.fillStyle = color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Add glow effect
      ctx.shadowColor = color
      ctx.shadowBlur = 6 * pixelRatio

      const zodiacSign = Object.values(zodiacSymbols)[i]
      ctx.fillText(zodiacSign, symbolX, symbolY)

      // Reset shadow
      ctx.shadowBlur = 0
    }

    // Draw some random "planet" positions
    const planets = Array.from({ length: 7 }, () => ({
      angle: Math.random() * Math.PI * 2,
      distance: radius * (0.4 + Math.random() * 0.3),
    }))

    // Draw planets with glow effect
    planets.forEach((planet) => {
      const x = centerX + Math.cos(planet.angle) * planet.distance
      const y = centerY + Math.sin(planet.angle) * planet.distance

      ctx.shadowColor = color
      ctx.shadowBlur = 8 * pixelRatio

      ctx.beginPath()
      ctx.arc(x, y, 4 * pixelRatio, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      ctx.shadowBlur = 0
    })

    // Draw aspect lines (connections between planets)
    for (let i = 0; i < planets.length; i++) {
      for (let j = i + 1; j < planets.length; j++) {
        // Only draw some connections (random)
        if (Math.random() > 0.7) {
          const x1 = centerX + Math.cos(planets[i].angle) * planets[i].distance
          const y1 = centerY + Math.sin(planets[i].angle) * planets[i].distance
          const x2 = centerX + Math.cos(planets[j].angle) * planets[j].distance
          const y2 = centerY + Math.sin(planets[j].angle) * planets[j].distance

          // Randomly choose aspect color
          const aspectColors = [
            "rgba(64, 196, 255, 0.4)", // Blue
            "rgba(255, 64, 64, 0.4)", // Red
            "rgba(255, 215, 0, 0.4)", // Gold
          ]
          const randomColor = aspectColors[Math.floor(Math.random() * aspectColors.length)]

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = randomColor
          ctx.lineWidth = 1.2 * pixelRatio
          ctx.stroke()
          ctx.strokeStyle = color // Reset stroke style
        }
      }
    }
  }

  return (
    <div className="relative rounded-full overflow-hidden" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
      <canvas ref={canvasRef} className={className} />

      {/* Tooltip for interactive mode */}
      {interactive && hoveredPlanet && (
        <div
          className="absolute bg-black/80 text-white p-2 rounded text-sm z-10"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y + 10,
            pointerEvents: "none",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {hoveredPlanet}
          {state.natalChart && (
            <div>
              {state.natalChart.planets.find((p) => p.name === hoveredPlanet)?.sign}
              {" in house "}
              {state.natalChart.planets.find((p) => p.name === hoveredPlanet)?.house}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

