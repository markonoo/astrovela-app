"use client"

import { useEffect, useRef } from "react"

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []

    // Helper to create stars for the current canvas size
    const createStars = () => {
      stars = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05,
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

        // Twinkle effect
        star.opacity += Math.random() * 0.02 - 0.01
        if (star.opacity < 0.2) star.opacity = 0.2
        if (star.opacity > 1) star.opacity = 1

        // Slow movement
        star.y += star.speed
        if (star.y > canvas.height) star.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen" style={{ zIndex: 0, pointerEvents: 'none' }} />
}

