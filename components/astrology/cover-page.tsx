"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ZodiacIcon, ZodiacSign } from "@/components/ui/zodiac-icon"
import { useReportData } from "@/components/astrology/report-data"

interface CoverPageProps {
  // Dynamic data from Supabase (future implementation)
  firstName?: string
  lastName?: string
  birthDate?: string
  birthPlace?: string
  sunSign?: ZodiacSign
  moonSign?: ZodiacSign
  textColor?: string
  sessionId?: string // For fetching data from Supabase
  email?: string // Alternative identifier
}

export function CoverPage({
  firstName = "CRISTINA",
  lastName = "",
  birthDate = "OCTOBER 11, 1989",
  birthPlace = "BERLIN, GERMANY",
  sunSign = "libra",
  moonSign = "pisces",
  textColor = "#ffffff",
  sessionId,
  email,
}: CoverPageProps = {}) {
  // Get shared report data (includes coverColor, firstName, lastName, etc.)
  const { data: reportData } = useReportData()
  
  const [isLoading, setIsLoading] = useState(false)

  // Use data from context (which can be edited via CoverDataEditor)
  const userData = {
    firstName: reportData.firstName,
    lastName: reportData.lastName,
    birthDate: reportData.birthDate,
    birthTime: reportData.birthTime,
    birthPlace: reportData.birthPlace,
    sunSign: reportData.sunSign.toLowerCase() as ZodiacSign,
    moonSign: reportData.moonSign.toLowerCase() as ZodiacSign,
  }
  
  // Use coverColor from shared context
  const coverColor = reportData.coverColor

  // TODO: Implement Supabase data fetching
  useEffect(() => {
    async function fetchUserData() {
      // Skip if no identifier provided
      if (!sessionId && !email) return

      setIsLoading(true)
      
      try {
        // TODO: Replace with actual Supabase query
        // Example implementation:
        /*
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )

        // Fetch user birth data
        const { data: birthData, error: birthError } = await supabase
          .from('user_birth_data')
          .select('*')
          .eq(sessionId ? 'session_id' : 'email', sessionId || email)
          .single()

        if (birthData && !birthError) {
          setUserData({
            firstName: birthData.first_name?.toUpperCase() || firstName,
            lastName: birthData.last_name?.toUpperCase() || lastName,
            birthDate: formatDate(birthData.birth_date) || birthDate,
            birthPlace: formatPlace(birthData.birth_city, birthData.birth_country) || birthPlace,
            sunSign: birthData.sun_sign?.toLowerCase() || sunSign,
            moonSign: birthData.moon_sign?.toLowerCase() || moonSign,
          })
        }

        // Fetch cover design preference
        const { data: quizData, error: quizError } = await supabase
          .from('QuizResponse')
          .select('coverDesign')
          .eq('session_id', sessionId)
          .single()

        if (quizData && !quizError && quizData.coverDesign) {
          const coverDesigns: Record<string, string> = {
            sage: "#3d5a4a",
            midnight: "#1e293b",
            cosmic: "#4c1d95",
            celestial: "#134e4a",
          }
          setCoverColor(coverDesigns[quizData.coverDesign] || "#3d5a4a")
        }
        */

        console.log('Supabase integration pending - using default values')
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [sessionId, email, firstName, lastName, birthDate, birthPlace, sunSign, moonSign])

  // Helper function to format date (for future use)
  const formatDate = (date: string): string => {
    const d = new Date(date)
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ]
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  // Helper function to format place (for future use)
  const formatPlace = (city?: string, country?: string): string => {
    if (!city || !country) return birthPlace
    return `${city.toUpperCase()}, ${country.toUpperCase()}`
  }

  if (isLoading) {
    return (
      <div 
        className="h-full flex items-center justify-center" 
        style={{ backgroundColor: coverColor }}
      >
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="h-full relative overflow-hidden" style={{ backgroundColor: coverColor }}>
      {/* Layer 1: Background color (dynamic based on QuizResponse.coverDesign) */}
      
      {/* Layer 2: Cover Template with decorative elements */}
      <div className="absolute inset-0">
        <Image 
          src="/cover/cover-template.png" 
          alt="Cover Template" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Layer 3: Name at top center - lower and bigger */}
      <div className="absolute top-[120px] left-0 right-0 text-center z-20">
        <h2
          className="text-5xl font-bold tracking-widest uppercase"
          style={{
            color: textColor,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {userData.firstName} {userData.lastName}
        </h2>
      </div>

      {/* Layer 4: Natal Chart Overlay SVG (centered) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[650px] h-[650px]" style={{ transform: 'scale(1.05)' }}>
          <Image 
            src="/cover/natal-chart-overlay.svg" 
            alt="Natal Chart" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Layer 5: Curved birth details at bottom - increased arch by 15%, moved up by 15% */}
      <div className="absolute left-1/2 bottom-[75px] pointer-events-none" style={{ transform: 'translateX(-50%)', zIndex: 30 }}>
        <svg width="690" height="105" viewBox="0 0 690 105">
          <defs>
            <path
              id="curvedPath"
              d="M 90,10 Q 345,85 600,10"
              fill="none"
            />
          </defs>
          <text
            fill={textColor}
            fontSize="22"
            fontWeight="600"
            fontFamily="Montserrat, Arial, sans-serif"
            letterSpacing="0.08em"
          >
            <textPath href="#curvedPath" startOffset="50%" textAnchor="middle">
              {userData.birthDate} · {userData.birthPlace}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Layer 6: Sun Sign Badge - Bottom Left Corner (inside page) */}
      <div className="absolute left-[20px] bottom-[20px] flex flex-col items-center z-40">
        <span className="text-xs uppercase mb-1" style={{ color: textColor }}>Sun</span>
        <div
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center bg-transparent"
          style={{ borderColor: textColor, color: textColor }}
        >
          <div className="text-center">
            <ZodiacIcon sign={userData.sunSign as ZodiacSign} size={40} />
          </div>
        </div>
      </div>

      {/* Layer 7: Moon Sign Badge - Bottom Right Corner (inside page) */}
      <div className="absolute right-[20px] bottom-[20px] flex flex-col items-center z-40">
        <span className="text-xs uppercase mb-1" style={{ color: textColor }}>Moon</span>
        <div
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center bg-transparent"
          style={{ borderColor: textColor, color: textColor }}
        >
          <div className="text-center">
            <ZodiacIcon sign={userData.moonSign as ZodiacSign} size={40} />
          </div>
        </div>
      </div>

    </div>
  )
}
