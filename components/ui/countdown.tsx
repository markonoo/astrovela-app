"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  initialMinutes?: number
  initialSeconds?: number
  className?: string
  compact?: boolean
}

export function Countdown({
  initialMinutes = 14,
  initialSeconds = 19,
  className = "",
  compact = false,
}: CountdownProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [minutes, seconds])

  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`

  if (compact) {
    return <span className={className}>{formattedTime}</span>
  }

  return <div className={className}>{formattedTime}</div>
}

