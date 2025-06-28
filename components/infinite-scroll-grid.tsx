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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (columnRef.current && isMounted) {
      setColumnHeight(columnRef.current.scrollHeight / 2)
      // Small delay to ensure images are loaded before animation starts
      const timer = setTimeout(() => setIsVisible(true), 200)
      return () => clearTimeout(timer)
    }
  }, [isMounted])

  // Show static content during SSR
  if (!isMounted) {
    return (
      <div className="overflow-hidden relative h-full">
        <div className="flex flex-col gap-2 opacity-50">
          {images.map((src, index) => (
            <div key={`loading-${index}`} className="rounded-lg overflow-hidden">
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

  const animationDuration = `${speed}s`
  const animationDelay = `${delay}s`
  const animationDirection = direction === "up" ? "reverse" : "normal"

  return (
    <div className="overflow-hidden relative h-full">
      <div
        ref={columnRef}
        className={`flex flex-col gap-2 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          animation: isVisible ? `scroll ${animationDuration} linear ${animationDelay} infinite ${animationDirection}` : 'none',
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
              priority={index < 2} // Prioritize first few images
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
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMobileDetector()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Show static grid during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="overflow-hidden relative h-full">
          <div className="flex flex-col gap-2 opacity-50">
            {imageData.column1.slice(0, 4).map((src, index) => (
              <div key={`static-1-${index}`} className="rounded-lg overflow-hidden">
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
        <div className="overflow-hidden relative h-full">
          <div className="flex flex-col gap-2 opacity-50">
            {imageData.column2.slice(0, 4).map((src, index) => (
              <div key={`static-2-${index}`} className="rounded-lg overflow-hidden">
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
        <div className="overflow-hidden relative h-full">
          <div className="flex flex-col gap-2 opacity-50">
            {imageData.column3.slice(0, 4).map((src, index) => (
              <div key={`static-3-${index}`} className="rounded-lg overflow-hidden">
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
      </div>
    )
  }

  // Adjust column speeds for mobile
  const speedMultiplier = isMobile ? 0.7 : 1

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

