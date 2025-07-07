"use client"

import { useState, useEffect, useMemo } from "react"
import { BookCoverPreview } from "./book-cover-preview"
import { UserInfoForm } from "./user-info-form"
import { ColorSelector } from "./color-selector"
import { IconSelector } from "./icon-selector"
import { Button } from "@/components/ui/button"
import { geocodeLocation } from "@/services/astrology-service"
import { fetchNatalWheelChart } from "@/services/astrology-api-service"
import { useZodiacSigns } from "@/hooks/use-zodiac-signs"
import { supabase } from "@/lib/supabaseClient"
import { v4 as uuidv4 } from 'uuid';
import { safeGetSessionItem, safeSetSessionItem } from '@/utils/safe-storage';
import { createClient } from '@supabase/supabase-js'
import { ErrorBoundary } from "@/components/ErrorBoundary"

// Define the available theme colors
export const THEME_COLORS = {
  black: {
    bg: "bg-black",
    text: "text-white",
    border: "border-white",
    className: "bg-black text-white border-white",
  },
  navy: {
    bg: "bg-indigo-950",
    text: "text-white",
    border: "border-white",
    className: "bg-indigo-950 text-white border-white",
  },
  purple: {
    bg: "bg-purple-950",
    text: "text-white",
    border: "border-white",
    className: "bg-purple-950 text-white border-white",
  },
  green: {
    bg: "bg-emerald-950",
    text: "text-white",
    border: "border-white",
    className: "bg-emerald-950 text-white border-white",
  },
  burgundy: {
    bg: "bg-red-900",
    text: "text-white",
    border: "border-white",
    className: "bg-red-900 text-white border-white",
  },
  cream: {
    bg: "bg-amber-50",
    text: "text-black",
    border: "border-black",
    className: "bg-amber-50 text-black border-black",
  },
}

// Define the available icons - now three chart options
const ICONS = ["natal-chart", "zodiac-chart", "custom-natal-chart"]

// Helper to get or create a session ID
// function getOrCreateSessionId() {
//   let sessionId = safeGetSessionItem('astrovela_session_id');
//   if (!sessionId) {
//     sessionId = uuidv4();
//     safeSetSessionItem('astrovela_session_id', sessionId);
//   }
//   return sessionId;
// }

export function BookCoverDesigner() {
  // State for user information
  const [userInfo, setUserInfo] = useState<{
    firstName: string
    lastName: string
    placeOfBirth: string
    dateOfBirth: string
    gender: "" | "male" | "female" | "non-binary"
    timeOfBirth?: string
    email?: string
  }>({
    firstName: "",
    lastName: "",
    placeOfBirth: "",
    dateOfBirth: "",
    gender: "",
  })

  // State for design choices
  const [selectedColor, setSelectedColor] = useState("cream")
  const [selectedIcon, setSelectedIcon] = useState("natal-chart")
  const [isLoading, setIsLoading] = useState(false)
  const [, setSvgContent] = useState<string | null>(null)
  const [supabaseChartUrl, setSupabaseChartUrl] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sunSign, setSunSign] = useState<string | null>(null)
  const [moonSign, setMoonSign] = useState<string | null>(null)

  // Fetch zodiac signs from database if available
  const { sunSign: dbSunSign, moonSign: dbMoonSign } = useZodiacSigns(userInfo.email, sessionId)

  // Use database zodiac signs if available, otherwise use state from chart generation
  const finalSunSign = dbSunSign || sunSign
  const finalMoonSign = dbMoonSign || moonSign

  // Validation for enabling custom natal chart icon
  const isCustomChartEnabled =
    !!userInfo.firstName.trim() &&
    !!userInfo.gender &&
    !!userInfo.dateOfBirth &&
    !!userInfo.placeOfBirth

  // Clear SVG when user changes form or chart selection
  useEffect(() => {
    setSvgContent(null)
  }, [userInfo.firstName, userInfo.lastName, userInfo.placeOfBirth, userInfo.dateOfBirth, userInfo.gender, userInfo.timeOfBirth, selectedIcon])

  useEffect(() => {
    let id = safeGetSessionItem('astrovela_session_id');
    if (!id) {
      id = uuidv4();
      safeSetSessionItem('astrovela_session_id', id);
    }
    setSessionId(id);
  }, []);

  // Custom IconSelector handler to prevent selecting custom-natal-chart unless enabled
  const handleIconSelect = (icon: string) => {
    if (icon === "custom-natal-chart" && !isCustomChartEnabled) return
    setSelectedIcon(icon)
  }

  // const supabaseClient = supabase || createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  // Handle form submission
  const handleSubmit = async () => {
    if (!userInfo.firstName.trim()) {
      alert("Please enter a first name.")
      return
    }
    // Custom Natal Chart API workflow
    if (selectedIcon === "custom-natal-chart") {
      setIsLoading(true)
      setSupabaseChartUrl(null)
      try {
        // Geocode place of birth
        const geo = await geocodeLocation(userInfo.placeOfBirth)
        // Fetch S3 URL from astrology API
        const chartApiResult = await fetchNatalWheelChart(
          userInfo.dateOfBirth,
          userInfo.timeOfBirth || "12:00",
          geo.latitude,
          geo.longitude,
          1.0, // UTC offset for Germany, adjust as needed
          "WHITE", // sign_icon_color
          [
            "clear", "clear", "clear", "clear", "clear", "clear",
            "clear", "clear", "clear", "clear", "clear", "clear"
          ] // sign_background
        )
        const s3Url = chartApiResult.chartUrl
        // Upload S3 URL to Supabase via API route
        // Debug log before upload
        console.log("Preparing to upload to /api/chart-image", s3Url, userInfo);

        const response = await fetch("/api/chart-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chartUrl: s3Url, // send the S3 URL directly
            userId: null, // anonymous
            email: userInfo.email || null,
            session_id: sessionId,
            birthData: { ...userInfo, geo },
            chartType: "natal",
          })
        })
        const data = await response.json()

        // Debug log after upload
        console.log("Upload response", data);

        setIsLoading(false)
        if (data.imageUrl) {
          setSupabaseChartUrl(data.imageUrl)
          // Use sun and moon signs from the API response
          setSunSign(data.sunSign || null)
          setMoonSign(data.moonSign || null)
          console.log('Set sun and moon signs from API:', { sunSign: data.sunSign, moonSign: data.moonSign })
        } else {
          alert("Failed to upload chart to Supabase. " + (data.error || data.details || JSON.stringify(data)))
        }
      } catch (err) {
        console.error("Error during upload to /api/chart-image:", err);
        setIsLoading(false)
        alert("Failed to fetch or upload natal chart. Please check your details and try again.")
      }
      return
    }
    // In a real app, this could trigger a download or save functionality
    console.log("Book cover design submitted:", {
      userInfo,
      selectedColor,
      selectedIcon,
    })
    alert("Your book cover design has been created!")
  }

  const formattedDate = useMemo(() => {
    if (userInfo.dateOfBirth) {
      const utcDate = new Date(userInfo.dateOfBirth + 'T00:00:00Z')
      const month = utcDate.toLocaleString("default", { month: "long" })
      return `${utcDate.getUTCDate()} ${month} ${utcDate.getUTCFullYear()}`
    }
    return ""
  }, [userInfo.dateOfBirth])

  return (
    <ErrorBoundary>
    <div className="flex flex-col lg:flex-row gap-4 items-start justify-center py-4">
      {/* Left side - Book cover preview */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-4">
        <div className="w-[350px] h-[450px]">
          <BookCoverPreview
            userInfo={userInfo}
            themeColor={THEME_COLORS[selectedColor as keyof typeof THEME_COLORS]}
            selectedIcon={selectedIcon}
            customChartUrl={supabaseChartUrl}
            isLoading={isLoading}
            sunSign={finalSunSign}
            moonSign={finalMoonSign}
            formattedDate={formattedDate}
          />
        </div>
      </div>

      {/* Right side - Customization options */}
      <div className="w-full lg:w-2/5 flex flex-col">
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-1.5">
          <h2 className="text-base font-medium tracking-wider">Customize Your Cover</h2>
          <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className="mt-1">
            <h3 className="text-sm font-medium tracking-wider">Choose a Chart</h3>
            <IconSelector
              icons={ICONS}
              selectedIcon={selectedIcon}
              setSelectedIcon={handleIconSelect}
              disabledIcons={!isCustomChartEnabled ? ["custom-natal-chart"] : []}
            />
            {!isCustomChartEnabled && (
              <div className="text-xs text-red-500 mt-1">Fill all required fields to enable the custom natal chart.</div>
            )}
          </div>
          <div className="mt-1">
            <h3 className="text-sm font-medium tracking-wider">Choose the color</h3>
            <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          </div>
          <Button onClick={handleSubmit} className="w-full bg-amber-400 hover:bg-amber-500 text-black tracking-wider text-sm mt-1 py-1.5">
            Continue
          </Button>
          {isLoading && (
            <div className="flex justify-center items-center mt-2">
              <span className="loader mr-2" /> Loading chart data...
            </div>
          )}
        </div>
      </div>
    </div>
    </ErrorBoundary>
  )
}
