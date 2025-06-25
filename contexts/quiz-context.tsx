"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { saveQuizData, getQuizData, isQuizCompleted, clearQuizData } from "@/utils/storage"
import type { NatalChart, ChartInterpretation } from "@/types/astrology"
import { supabase } from "@/lib/supabaseClient"

// Import debug helpers in development
if (process.env.NODE_ENV === "development") {
  import("@/utils/debug-helpers").catch(() => {
    // Ignore import errors in case the file doesn't exist
  })
}

// Helper function to get or create persistent session ID
const getOrCreateSessionId = (): string => {
  if (typeof window === 'undefined') return `server_${Date.now()}`
  
  let sessionId = sessionStorage.getItem('astrovela_session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('astrovela_session_id', sessionId)
  }
  return sessionId
}

type Gender = "male" | "female" | "non-binary" | null
type AstrologyLevel = "beginner" | "intermediate" | "expert" | null
export type ColorScheme = "black" | "navy" | "purple" | "green" | "burgundy" | "cream"

export interface QuizState {
  currentStep: number
  totalSteps: number
  gender: Gender
  astrologyLevel: AstrologyLevel
  firstName: string | null
  lastName: string | null
  birthPlace: string | null
  birthTime: string | null
  birthDate: {
    month: string | null
    day: string | null
    year: string | null
  }
  birthLocation: {
    latitude: number | null
    longitude: number | null
    name: string | null
  }
  coverColorScheme: ColorScheme
  email: string | null
  answers: Record<string, any>
  quizCompleted: boolean
  natalChart: NatalChart | null
  chartInterpretation: ChartInterpretation | null
  isLoadingChart: boolean
  chartError: string | null
  customChartUrl: string | null
}

interface QuizContextType {
  state: QuizState
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  updateAnswer: (questionId: string, answer: any) => void
  setGender: (gender: Gender) => void
  setAstrologyLevel: (level: AstrologyLevel) => void
  setBirthDate: (field: "month" | "day" | "year", value: string) => void
  setFirstName: (name: string) => void
  setLastName: (name: string) => void
  setBirthPlace: (place: string) => void
  setBirthTime: (time: string) => void
  setBirthLocation: (latitude: number, longitude: number, name: string) => void
  setCoverColorScheme: (scheme: ColorScheme) => void
  setEmail: (email: string) => void
  completeQuiz: () => void
  resetQuiz: () => void
  fetchNatalChart: () => Promise<void>
  setNatalChart: (chart: NatalChart) => void
  setChartInterpretation: (interpretation: ChartInterpretation) => void
  setCustomChartUrl: (customChartUrl: string | null) => void
}

const initialState: QuizState = {
  currentStep: 1,
  totalSteps: 25,
  gender: null,
  astrologyLevel: null,
  firstName: null,
  lastName: null,
  birthPlace: null,
  birthTime: null,
  birthDate: {
    month: null,
    day: null,
    year: null,
  },
  birthLocation: {
    latitude: null,
    longitude: null,
    name: null,
  },
  coverColorScheme: "cream",
  email: null,
  answers: {},
  quizCompleted: false,
  natalChart: null,
  chartInterpretation: null,
  isLoadingChart: false,
  chartError: null,
  customChartUrl: null,
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  // Initialize state from storage or use default
  const [state, setState] = useState<QuizState>(() => {
    // This will only run on the client side
    if (typeof window !== "undefined") {
      const savedData = getQuizData()
      const quizCompleted = isQuizCompleted()

      if (savedData) {
        // Always reset loading states when restoring from storage
        // Loading states should never persist across sessions
        return { 
          ...savedData, 
          quizCompleted,
          isLoadingChart: false,  // Reset loading state
          chartError: null        // Clear any old errors
        }
      }
    }
    return initialState
  })

  // Save state to storage whenever it changes
  useEffect(() => {
    // Save state on every change, not just when completed
    saveQuizData(state)
  }, [state])

  const setCurrentStep = (step: number) => {
    setState((prev) => ({ ...prev, currentStep: step }))
  }

  const nextStep = () => {
    setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }))
  }

  const prevStep = () => {
    if (state.currentStep > 1) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }))
    }
  }

  const updateAnswer = (questionId: string, answer: any) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer },
    }))
  }

  const setGender = (gender: Gender) => {
    setState((prev) => ({ ...prev, gender }))
  }

  const setAstrologyLevel = (level: AstrologyLevel) => {
    setState((prev) => ({ ...prev, astrologyLevel: level }))
  }

  const setBirthDate = (field: "month" | "day" | "year", value: string) => {
    setState((prev) => ({
      ...prev,
      birthDate: { ...prev.birthDate, [field]: value },
    }))
  }

  const setFirstName = (firstName: string) => {
    setState((prev) => ({ ...prev, firstName }))
  }

  const setLastName = (lastName: string) => {
    setState((prev) => ({ ...prev, lastName }))
  }

  const setBirthPlace = (birthPlace: string) => {
    setState((prev) => ({ ...prev, birthPlace }))
  }

  const setBirthTime = (birthTime: string) => {
    setState((prev) => ({ ...prev, birthTime }))
  }

  const setBirthLocation = (latitude: number, longitude: number, name: string) => {
    setState((prev) => ({
      ...prev,
      birthLocation: { latitude, longitude, name },
    }))
  }

  const setCoverColorScheme = (coverColorScheme: ColorScheme) => {
    setState((prev) => ({ ...prev, coverColorScheme }))
  }

  const setEmail = (email: string) => {
    setState((prev) => ({ ...prev, email }))
  }

  /**
   * Mark the quiz as completed.
   * This function must be explicitly called when the quiz is actually complete.
   * The quizCompleted flag determines whether to show the results page.
   */
  const completeQuiz = () => {
    setState((prev) => {
      const newState = { ...prev, quizCompleted: true }
      // Save to storage immediately on completion
      saveQuizData(newState)
      return newState
    })
  }

  const resetQuiz = () => {
    // Clear all storage first
    if (typeof window !== "undefined") {
      // First clear our own storage
      clearQuizData()
      
      // For a more aggressive approach, clear all local storage completely
      try {
        localStorage.clear()
        sessionStorage.clear()
        console.log("Complete storage wipe performed")
      } catch (e) {
        console.error("Error during complete storage wipe:", e)
      }
    }
    
    // Reset the state
    setState(initialState)
    
    // Force reload the page to ensure a completely fresh state
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  }

  const setNatalChart = (natalChart: NatalChart) => {
    setState((prev) => ({ ...prev, natalChart }))
  }

  const setChartInterpretation = (chartInterpretation: ChartInterpretation) => {
    setState((prev) => ({ ...prev, chartInterpretation }))
  }

  const setCustomChartUrl = (customChartUrl: string | null) => {
    setState((prev) => ({ ...prev, customChartUrl }))
  }

  // Function to fetch natal chart data from the API
  const fetchNatalChart = async () => {
    // Rate limiting: prevent multiple simultaneous calls
    if (state.isLoadingChart) {
      console.log("⚠️ Chart is already loading, skipping duplicate request")
      return
    }
    
    // Import the service dynamically to avoid server-side issues
    const { fetchNatalChart, geocodeLocation, getNatalChartInterpretation } = await import(
      "@/services/astrology-service"
    )
    const { fetchNatalWheelChart } = await import("@/services/astrology-api-service")
    setState((prev) => ({ ...prev, isLoadingChart: true, chartError: null }))
    try {
      console.log("📍 Starting natal chart fetch process...")

      // Geocode the birth place if not already done
      let location = state.birthLocation
      if (!location || !location.latitude || !location.longitude) {
        console.log("🌍 Geocoding birth place:", state.birthPlace)
        location = await geocodeLocation(state.birthPlace)
        setBirthLocation(location.latitude, location.longitude, location.name)
      }

      // Format birth data for API
      const birthData = {
        date: `${state.birthDate.year}-${state.birthDate.month}-${state.birthDate.day}`,
        time: state.birthTime,
        latitude: location.latitude,
        longitude: location.longitude,
      }

      console.log("📊 Fetching natal chart data with:", birthData)
      
      // Try to fetch the natal chart with retry logic for 429 errors
      let natalChart
      let retryAttempts = 0
      const maxRetries = 3
      const baseDelay = 10000 // 10 seconds
      
      while (retryAttempts <= maxRetries) {
        try {
          natalChart = await fetchNatalChart(
            birthData.date,
            birthData.time,
            birthData.latitude,
            birthData.longitude
          )
          break // Success, exit retry loop
        } catch (error: any) {
          retryAttempts++
          
          // Check if it's a rate limiting error
          if (error.message?.includes("429") || error.message?.includes("Too Many Requests") || error.message?.includes("API_RATE_LIMITED")) {
            if (retryAttempts <= maxRetries) {
              const delay = baseDelay * Math.pow(2, retryAttempts - 1) // Exponential backoff
              console.log(`⏳ Rate limited (attempt ${retryAttempts}/${maxRetries + 1}), waiting ${delay/1000}s before retry...`)
              
              // Update UI to show retry status
              setState((prev) => ({ 
                ...prev, 
                chartError: `API rate limited. Retrying in ${delay/1000} seconds... (attempt ${retryAttempts}/${maxRetries + 1})`
              }))
              
              await new Promise(resolve => setTimeout(resolve, delay))
              continue
            } else {
              console.log("❌ Max retries exceeded for rate limiting")
              throw new Error("API temporarily unavailable due to rate limiting. Please try again in a few minutes.")
            }
          } else {
            // Non-rate-limiting error, don't retry
            throw error
          }
        }
      }

      console.log("✅ Natal chart data fetched successfully")
      setNatalChart(natalChart)

      // Try to fetch chart image/URL
      console.log("🎨 Fetching custom chart image...")
      try {
        const chartResult = await fetchNatalWheelChart(
          birthData.date,
          birthData.time,
          birthData.latitude,
          birthData.longitude
        )

        if (chartResult.chartUrl) {
          setCustomChartUrl(chartResult.chartUrl)
          console.log("✅ Custom chart URL set:", chartResult.chartUrl)
        } else if (chartResult.svgContent) {
          // If we got SVG content instead of URL, we can use it directly
          setCustomChartUrl(`data:image/svg+xml;base64,${btoa(chartResult.svgContent)}`)
          console.log("✅ Custom chart SVG content processed")
        }
      } catch (chartError: any) {
        console.log("⚠️ Custom chart fetch failed, continuing without it:", chartError.message)
        // Don't throw here - continue with the basic natal chart data
      }

      console.log("🎯 Natal chart fetch process completed successfully")
      
      // Clear any error state
      setState((prev) => ({ ...prev, chartError: null, isLoadingChart: false }))
    } catch (error: any) {
      console.error("❌ Error in fetchNatalChart:", error)
      setState((prev) => ({ 
        ...prev, 
        chartError: error.message || "Failed to fetch natal chart data",
        isLoadingChart: false 
      }))
    }
  }

  return (
    <QuizContext.Provider
      value={{
        state,
        setCurrentStep,
        nextStep,
        prevStep,
        updateAnswer,
        setGender,
        setAstrologyLevel,
        setBirthDate,
        setFirstName,
        setLastName,
        setBirthPlace,
        setBirthTime,
        setBirthLocation,
        setCoverColorScheme,
        setEmail,
        completeQuiz,
        resetQuiz,
        fetchNatalChart,
        setNatalChart,
        setChartInterpretation,
        setCustomChartUrl,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}

