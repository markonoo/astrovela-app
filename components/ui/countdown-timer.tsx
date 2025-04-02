"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  initialMinutes?: number
  initialSeconds?: number
  className?: string
}

export function CountdownTimer({ initialMinutes = 14, initialSeconds = 26, className }: CountdownTimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [minutes, seconds])

  return (
    <div className={className}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  )
}

