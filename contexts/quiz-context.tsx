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
  sunSign: string | null
  moonSign: string | null
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
  completeQuiz: () => Promise<void>
  resetQuiz: () => void
  fetchNatalChart: () => Promise<void>
  setNatalChart: (chart: NatalChart) => void
  setChartInterpretation: (interpretation: ChartInterpretation) => void
  setCustomChartUrl: (customChartUrl: string | null) => void
  setSunSign: (sunSign: string) => void
  setMoonSign: (moonSign: string) => void
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
  sunSign: null,
  moonSign: null,
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
  // Function to save quiz response to database
  const saveQuizResponse = async (quizState: QuizState) => {
    try {
      console.log('📝 Starting QuizResponse storage process...')
      
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: quizState.email || '',
          answers: quizState.answers,
          birthDate: quizState.birthDate,
          birthPlace: quizState.birthPlace || '',
          birthTime: quizState.birthTime || '',
          firstName: quizState.firstName || '',
          lastName: quizState.lastName || '',
          gender: quizState.gender || '',
          coverColorScheme: quizState.coverColorScheme || null
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`QuizResponse submission failed: ${response.statusText} - ${errorText}`)
      }

      const result = await response.json()
      console.log('✅ QuizResponse stored successfully:', result)
      return result
    } catch (error) {
      console.error('❌ Error storing QuizResponse:', error)
      // Don't throw - we don't want to block quiz completion if database storage fails
    }
  }

  /**
   * Complete the quiz and save data to both local storage and database.
   * This function must be explicitly called when the quiz is actually complete.
   * The quizCompleted flag determines whether to show the results page.
   */
  const completeQuiz = async () => {
    setState((prev) => {
      const newState = { ...prev, quizCompleted: true }
      // Save to local storage immediately on completion
      saveQuizData(newState)
      
      // Save to database asynchronously (don't await to avoid blocking UI)
      saveQuizResponse(newState).catch(error => {
        console.error('Background QuizResponse save failed:', error)
      })
      
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

  const setSunSign = (sunSign: string) => {
    setState((prev) => ({ ...prev, sunSign }))
  }

  const setMoonSign = (moonSign: string) => {
    setState((prev) => ({ ...prev, moonSign }))
  }

  // Function to fetch natal chart data using optimized book-designer pattern
  const fetchNatalChart = async () => {
    // Rate limiting: prevent multiple simultaneous calls
    if (state.isLoadingChart) {
      console.log("⚠️ Chart is already loading, skipping duplicate request")
      return
    }
    
    // Import services dynamically to avoid server-side issues
    const { geocodeLocation } = await import("@/services/astrology-service")
    const { fetchNatalWheelChart } = await import("@/services/astrology-api-service")
    
    setState((prev) => ({ ...prev, isLoadingChart: true, chartError: null }))
    
    try {
      console.log("📍 Starting optimized natal chart fetch process...")

      // Geocode the birth place if not already done
      let location = state.birthLocation
      if (!location || !location.latitude || !location.longitude) {
        console.log("🌍 Geocoding birth place:", state.birthPlace)
        location = await geocodeLocation(state.birthPlace)
        setBirthLocation(location.latitude, location.longitude, location.name)
      }

      // Format birth data for API calls
      const birthDateStr = `${state.birthDate.year}-${String(state.birthDate.month).padStart(2, '0')}-${String(state.birthDate.day).padStart(2, '0')}`
      const birthTimeStr = state.birthTime || "12:00"
      
      const birthData = {
        day: parseInt(state.birthDate.day || "1"),
        month: parseInt(state.birthDate.month || "1"),
        year: parseInt(state.birthDate.year || "2000"),
        hour: parseInt(state.birthTime?.split(':')[0] || "12"),
        min: parseInt(state.birthTime?.split(':')[1] || "0"),
        lat: location.latitude,
        lon: location.longitude,
        tzone: 1.0 // Default timezone, will be handled by geocoding
      }

      console.log("🌟 Fetching natal wheel chart with formatted data:", { 
        birthDateStr, 
        birthTimeStr, 
        lat: location.latitude, 
        lon: location.longitude 
      })
      
      // 1. Fetch natal wheel chart URL (AWS link) - using correct parameter format
      const wheelChartResult = await fetchNatalWheelChart(
        birthDateStr,
        birthTimeStr, 
        location.latitude,
        location.longitude,
        1.0 // timezone
      )
      console.log("✅ Received wheel chart result:", wheelChartResult)
      
      // Extract the chart URL or create data URL from SVG
      let chartUrlToStore = null
      if (wheelChartResult?.chartUrl) {
        chartUrlToStore = wheelChartResult.chartUrl
      } else if (wheelChartResult?.svgContent) {
        chartUrlToStore = `data:image/svg+xml;base64,${btoa(wheelChartResult.svgContent)}`
      } else if (typeof wheelChartResult === 'string') {
        // Handle case where the result is directly a URL string
        chartUrlToStore = wheelChartResult
      }
      
      if (!chartUrlToStore) {
        throw new Error('No chart URL or SVG content received from natal wheel chart API')
      }
      
      // 2. Call unified chart-image API to store chart + fetch interpretation in parallel
          const sessionId = getOrCreateSessionId()
      console.log("🔄 Calling chart-image API for storage and interpretation...")
      
      const response = await fetch('/api/chart-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
            body: JSON.stringify({
          chart_url: chartUrlToStore,
          birth_data: birthData,
          session_id: sessionId,
          email: state.email || null
        })
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Chart processing failed: ${response.statusText} - ${errorText}`)
      }
      
      const result = await response.json()
      console.log("✅ Chart stored and interpretation fetched:", result)
      console.log("🔍 Debug - API result sunSign:", result.sunSign, "moonSign:", result.moonSign)
      
      // 3. Update state with chart data and zodiac signs from interpretation
      setState((prev) => {
        console.log("🔍 Debug - Before setState - prev sunSign:", prev.sunSign, "moonSign:", prev.moonSign)
        const newState = {
          ...prev,
          customChartUrl: chartUrlToStore,
          sunSign: result.sunSign,
          moonSign: result.moonSign,
          isLoadingChart: false,
          chartError: null
        }
        console.log("🔍 Debug - After setState - new sunSign:", newState.sunSign, "moonSign:", newState.moonSign)
        return newState
      })
      
      console.log("🎉 Successfully completed optimized natal chart process")
      
    } catch (error: any) {
      console.error("❌ Error in optimized fetchNatalChart:", error)
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
        setSunSign,
        setMoonSign,
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

