"use client"

import { useEffect, useRef, useState } from "react"

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []
    let animationId: number

    // Deterministic random function using a seed
    let seed = 12345 // Fixed seed for consistent results
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    // Helper to create stars for the current canvas size
    const createStars = () => {
      stars = []
      // Reset seed for consistent star patterns
      seed = 12345
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: seededRandom() * canvas.width,
          y: seededRandom() * canvas.height,
          radius: seededRandom() * 1.5,
          opacity: seededRandom() * 0.8 + 0.2,
          speed: seededRandom() * 0.05,
        })
      }
    }

    // Set canvas dimensions and regenerate stars
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Gentle twinkle effect (using time-based instead of random)
        const time = Date.now() * 0.001
        star.opacity = 0.2 + 0.8 * (Math.sin(time + star.x * 0.01) * 0.5 + 0.5)

        // Slow movement
        star.y += star.speed
        if (star.y > canvas.height) star.y = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isMounted])

  // Don't render canvas during SSR to prevent hydration mismatch
  if (!isMounted) {
    return <div className="fixed top-0 left-0 w-screen h-screen" style={{ zIndex: 0, pointerEvents: 'none' }} />
  }

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen" style={{ zIndex: 0, pointerEvents: 'none' }} />
}

