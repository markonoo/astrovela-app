"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { imageData } from "./image-data"
import { useMobileDetector } from "@/hooks/use-mobile-detector"

interface ScrollingColumnProps {
  images: string[]
  speed: number
  delay?: number
  direction?: "up" | "down"
}

const ScrollingColumn = ({ images, speed, delay = 0, direction = "down" }: ScrollingColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (columnRef.current) {
      setColumnHeight(columnRef.current.scrollHeight / 2)
      // Small delay to ensure images are loaded before animation starts
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    }
  }, [])

  const animationDuration = `${speed}s`
  const animationDelay = `${delay}s`
  const animationDirection = direction === "up" ? "reverse" : "normal"

  return (
    <div className="overflow-hidden relative h-full">
      <div
        ref={columnRef}
        className={`flex flex-col gap-2 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          animation: `scroll ${animationDuration} linear ${animationDelay} infinite ${animationDirection}`,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        {/* First set of images */}
        {images.map((src, index) => (
          <div key={`first-${index}`} className="rounded-lg overflow-hidden">
            <Image
              src={src || "/placeholder.svg"}
              width={150}
              height={200}
              alt={`Astrology book ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {images.map((src, index) => (
          <div key={`second-${index}`} className="rounded-lg overflow-hidden">
            <Image
              src={src || "/placeholder.svg"}
              width={150}
              height={200}
              alt={`Astrology book ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function InfiniteScrollGrid() {
  // Pause animation on hover
  const [isPaused, setIsPaused] = useState(false)

  // Use our custom hook to detect mobile
  const isMobile = useMobileDetector()

  // Adjust column speeds for mobile
  const speedMultiplier = isMobile ? 0.7 : 1 // Slightly faster on mobile

  return (
    <div
      className="grid grid-cols-3 gap-2 h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ animationPlayState: isPaused ? "paused" : "running" }}
    >
      <ScrollingColumn images={imageData.column1} speed={30 * speedMultiplier} direction="down" />
      <ScrollingColumn images={imageData.column2} speed={40 * speedMultiplier} delay={0.5} direction="up" />
      <ScrollingColumn images={imageData.column3} speed={35 * speedMultiplier} delay={1} direction="down" />
    </div>
  )
}

