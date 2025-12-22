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
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const isMobile = useMobileDetector()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (columnRef.current && isMounted) {
      // Wait for images to load before calculating height
      const images = columnRef.current.querySelectorAll('img')
      let loadedCount = 0
      const totalImages = images.length

      const checkAllLoaded = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
          // Calculate height after all images are loaded
          if (columnRef.current) {
            setColumnHeight(columnRef.current.scrollHeight / 2)
          }
          // Start animation after height is calculated
          const timer = setTimeout(() => setIsVisible(true), 100)
          return () => clearTimeout(timer)
        }
      }

      // Check if images are already loaded
      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded()
        } else {
          img.addEventListener('load', checkAllLoaded)
        }
      })

      // Fallback: start animation after 500ms even if not all images loaded
      const fallbackTimer = setTimeout(() => {
        if (!imagesLoaded) {
          setImagesLoaded(true)
          if (columnRef.current) {
            setColumnHeight(columnRef.current.scrollHeight / 2)
          }
          setIsVisible(true)
        }
      }, 500)

      return () => {
        clearTimeout(fallbackTimer)
        images.forEach((img) => {
          img.removeEventListener('load', checkAllLoaded)
        })
      }
    }
  }, [isMounted, imagesLoaded])

  // Mobile-responsive image dimensions
  // Mobile/Tablet (< 1024px): 120x160
  // Desktop (≥ 1024px): 180x240 (larger for better visual impact)
  const imageWidth = isMobile ? 120 : 180
  const imageHeight = isMobile ? 160 : 240
  const gapClass = isMobile ? "gap-1.5" : "gap-3"

  // Show static content during SSR
  if (!isMounted) {
    return (
      <div className="overflow-hidden relative h-full">
        <div className={`flex flex-col ${gapClass} opacity-50`}>
          {images.map((src, index) => (
            <div key={`loading-${index}`} className="rounded-lg overflow-hidden">
              <Image
                src={src || "/placeholder.svg"}
                width={imageWidth}
                height={imageHeight}
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
        className={`flex flex-col ${gapClass} transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          animation: isVisible ? `scroll ${animationDuration} linear ${animationDelay} infinite ${animationDirection}` : 'none',
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          willChange: 'transform', // GPU acceleration for smoother performance
        }}
      >
        {/* First set of images */}
        {images.map((src, index) => (
          <div key={`first-${index}`} className="rounded-lg overflow-hidden">
            <Image
              src={src || "/placeholder.svg"}
              width={imageWidth}
              height={imageHeight}
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
              width={imageWidth}
              height={imageHeight}
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

  // Mobile-responsive gap
  const gridGapClass = isMobile ? "gap-1.5" : "gap-2"

  // Show static grid during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className={`grid grid-cols-3 ${gridGapClass} h-full`}>
        <div className="overflow-hidden relative h-full">
          <div className={`flex flex-col ${gridGapClass} opacity-50`}>
            {imageData.column1.slice(0, 4).map((src, index) => (
              <div key={`static-1-${index}`} className="rounded-lg overflow-hidden">
                <Image
                  src={src || "/placeholder.svg"}
                  width={120}
                  height={160}
                  alt={`Astrology book ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden relative h-full">
          <div className={`flex flex-col ${gridGapClass} opacity-50`}>
            {imageData.column2.slice(0, 4).map((src, index) => (
              <div key={`static-2-${index}`} className="rounded-lg overflow-hidden">
                <Image
                  src={src || "/placeholder.svg"}
                  width={120}
                  height={160}
                  alt={`Astrology book ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden relative h-full">
          <div className={`flex flex-col ${gridGapClass} opacity-50`}>
            {imageData.column3.slice(0, 4).map((src, index) => (
              <div key={`static-3-${index}`} className="rounded-lg overflow-hidden">
                <Image
                  src={src || "/placeholder.svg"}
                  width={120}
                  height={160}
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

  // Adjust column speeds for mobile - slower on mobile for better UX
  // Increased base speeds from 30-40s to 60-80s for more elegant, viewable scroll tempo
  const speedMultiplier = isMobile ? 0.7 : 1

  return (
    <div
      className={`grid grid-cols-3 ${gridGapClass} h-full`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ animationPlayState: isPaused ? "paused" : "running" }}
    >
      <ScrollingColumn images={imageData.column1} speed={60 * speedMultiplier} direction="down" />
      <ScrollingColumn images={imageData.column2} speed={80 * speedMultiplier} delay={0.5} direction="up" />
      <ScrollingColumn images={imageData.column3} speed={70 * speedMultiplier} delay={1} direction="down" />
    </div>
  )
}

