"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { saveQuizData, getQuizData, isQuizCompleted, clearQuizData } from "@/utils/storage"
import type { NatalChart, ChartInterpretation } from "@/types/astrology"
import { supabase } from "@/lib/supabaseClient"

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
  totalSteps: 13,
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
        return { ...savedData, quizCompleted }
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
    // Import the service dynamically to avoid server-side issues
    const { fetchNatalChart, geocodeLocation, getNatalChartInterpretation } = await import(
      "@/services/astrology-service"
    )
    const { fetchNatalWheelChart } = await import("@/services/astrology-api-service")
    setState((prev) => ({ ...prev, isLoadingChart: true, chartError: null }))
    try {
      // Check if we have all required data
      if (!state.birthDate.year || !state.birthDate.month || !state.birthDate.day) {
        throw new Error("Birth date is required")
      }

      if (!state.birthTime) {
        throw new Error("Birth time is required for accurate chart calculation")
      }

      if (!state.birthPlace) {
        throw new Error("Birth place is required")
      }

      // Format date for API
      const formattedDate = `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`

      // Get coordinates if we don't have them yet
      let latitude: number, longitude: number, locationName: string

      if (!state.birthLocation.latitude || !state.birthLocation.longitude) {
        try {
          const geoData = await geocodeLocation(state.birthPlace)
          latitude = geoData.latitude
          longitude = geoData.longitude
          locationName = geoData.name

          // Save the location data
          setBirthLocation(latitude, longitude, locationName)
        } catch (error) {
          console.error("Error geocoding location:", error)
          // Use default coordinates (0,0) if geocoding fails
          latitude = 0
          longitude = 0
          locationName = state.birthPlace

          // Save the default location data
          setBirthLocation(latitude, longitude, locationName)
        }
      } else {
        latitude = state.birthLocation.latitude
        longitude = state.birthLocation.longitude
        locationName = state.birthLocation.name || state.birthPlace
      }

      // Fetch the natal chart using the new AstrologyAPI service
      const natalChart = await fetchNatalChart(formattedDate, state.birthTime, latitude, longitude)

      // Save the natal chart
      setNatalChart(natalChart)

      // Fetch the custom natal wheel chart SVG (Supabase URL)
      let chartImageId: string | null = null
      try {
        const chartApiResult = await fetchNatalWheelChart(
          formattedDate,
          state.birthTime,
          latitude,
          longitude,
          1.0, // UTC offset for Germany, adjust as needed
          "Black", // sign_icon_color
          [
            "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1",
            "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1", "#FFF8E1"
          ]
        )
        const s3Url = chartApiResult.chartUrl
        if (s3Url) {
          // Get the current session
          const { data: { session } } = await supabase.auth.getSession()
          if (!session) {
            throw new Error('No active session')
          }

          const response = await fetch("/api/chart-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chartUrl: s3Url,
              userId: 1, // TODO: replace with real user ID
              birthData: { ...state, latitude, longitude },
              chartType: "natal",
              authToken: session.access_token
            })
          })
          const data = await response.json()
          if (data.imageUrl) {
            setCustomChartUrl(data.imageUrl)
            chartImageId = data.id || null
          } else {
            setCustomChartUrl(null)
          }
        } else {
          setCustomChartUrl(null)
        }
      } catch (err) {
        setCustomChartUrl(null)
      }

      try {
        // Prepare birth data for interpretation API
        const [year, month, day] = formattedDate.split("-").map(Number)
        const [hour, min] = state.birthTime.split(":").map(Number)
        const birthData = {
          day,
          month,
          year,
          hour,
          min,
          lat: latitude,
          lon: longitude,
          tzone: 1.0, // TODO: use real timezone if available
          house_type: "placidus"
        }
        // Import the real API call
        const { getNatalChartInterpretationFromAPI } = await import("@/services/astrology-api-service")
        const interpretation = await getNatalChartInterpretationFromAPI(birthData)
        setChartInterpretation(interpretation)

        // Store in Supabase
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          await supabase.from("NatalChartInterpretation").insert([
            {
              userId: 1, // TODO: replace with real user ID
              chartImageId: chartImageId,
              session_id: session.user.id,
              planets: interpretation.planets,
              houses: interpretation.houses,
              ascendant: interpretation.ascendant,
              midheaven: interpretation.midheaven,
              vertex: interpretation.vertex,
              lilith: interpretation.lilith,
              aspects: interpretation.aspects,
              moon_phase_name: interpretation.moon_phase?.moon_phase_name,
              moon_phase_description: interpretation.moon_phase?.moon_phase_description,
              hemisphere_east_west: interpretation.hemisphere?.east_west?.description,
              hemisphere_north_south: interpretation.hemisphere?.north_south?.description,
              elements: interpretation.elements,
              elements_description: interpretation.elements?.description,
              modes: interpretation.modes,
              modes_description: interpretation.modes?.description,
              dominant_sign: interpretation.dominant_sign,
              sun_sign: interpretation.planets?.find((p: any) => p.name === "Sun")?.sign,
              moon_sign: interpretation.planets?.find((p: any) => p.name === "Moon")?.sign,
            }
          ])
        }
      } catch (error) {
        console.error("Error getting or storing chart interpretation:", error)
        // Continue even if interpretation fails
      }

      setState((prev) => ({ ...prev, isLoadingChart: false }))
    } catch (error) {
      console.error("Error fetching natal chart:", error)
      setState((prev) => ({
        ...prev,
        isLoadingChart: false,
        chartError: error instanceof Error ? error.message : "Failed to generate natal chart",
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

