import { useState, useEffect } from 'react'

interface ZodiacSigns {
  sunSign: string | null
  moonSign: string | null
  isLoading: boolean
  error: string | null
}

export function useZodiacSigns(email?: string | null, sessionId?: string | null): ZodiacSigns {
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSigns>({
    sunSign: null,
    moonSign: null,
    isLoading: false,
    error: null
  })

  useEffect(() => {
    if (!email && !sessionId) {
      return
    }

    const fetchZodiacSigns = async () => {
      setZodiacSigns(prev => ({ ...prev, isLoading: true, error: null }))

      try {
        // Try to fetch from our API endpoint first
        const response = await fetch('/api/zodiac-signs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, sessionId })
        })

        if (response.ok) {
          const data = await response.json()
          setZodiacSigns({
            sunSign: data.sunSign,
            moonSign: data.moonSign,
            isLoading: false,
            error: null
          })
        } else {
          throw new Error('Failed to fetch zodiac signs')
        }
      } catch (error) {
        console.error('Error fetching zodiac signs:', error)
        setZodiacSigns(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }))
      }
    }

    fetchZodiacSigns()
  }, [email, sessionId])

  return zodiacSigns
} 