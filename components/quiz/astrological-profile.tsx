"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign } from "@/utils/zodiac"
import { useRouter } from "next/navigation"
import { Calendar, Clock, MapPin } from "lucide-react"

interface TraitMeterProps {
  name: string
  value: number // 0-100
  description?: string
}

const TraitMeter = ({ name, value, description }: TraitMeterProps) => {
  // Determine label based on value
  let label = "Weak"
  if (value > 33 && value <= 66) {
    label = "Medium"
  } else if (value > 66) {
    label = "Strong"
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="relative">
        <div className="h-2 rounded-full overflow-hidden bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"></div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"
          style={{ left: `calc(${value}% - 8px)` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>Weak</span>
        <span>Medium</span>
        <span>Strong</span>
      </div>
      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  )
}

export function AstrologicalProfile() {
  const router = useRouter()
  const { state } = useQuiz()

  // Format birth date for display
  const formatBirthDate = () => {
    if (!state.birthDate.month || !state.birthDate.day || !state.birthDate.year) {
      return "1990-08-26"
    }

    const month = state.birthDate.month.padStart(2, "0")
    const day = state.birthDate.day.padStart(2, "0")
    return `${state.birthDate.year}-${month}-${day}`
  }

  // Get zodiac sign
  const getZodiacSignName = () => {
    if (state.birthDate.month && state.birthDate.day) {
      return getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
    }
    return "Virgo" // Default
  }

  // Get element based on zodiac sign
  const getElement = () => {
    const sign = getZodiacSignName()
    const fireElements = ["aries", "leo", "sagittarius"]
    const earthElements = ["taurus", "virgo", "capricorn"]
    const airElements = ["gemini", "libra", "aquarius"]
    const waterElements = ["cancer", "scorpio", "pisces"]

    if (fireElements.includes(sign)) return "Fire"
    if (earthElements.includes(sign)) return "Earth"
    if (airElements.includes(sign)) return "Air"
    if (waterElements.includes(sign)) return "Water"
    return "Earth" // Default
  }

  // Format birth time
  const formatBirthTime = () => {
    if (!state.birthTime) return "12:00 PM"

    // Convert 24h format to 12h format with AM/PM
    const [hours, minutes] = state.birthTime.split(":")
    const hour = Number.parseInt(hours, 10)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12

    return `${hour12}:${minutes} ${ampm}`
  }

  // Generate trait values based on actual chart data if available
  const getTraitValue = (trait: string): { value: number; description?: string } => {
    // If we have chart data, use it to generate more accurate trait values
    if (state.natalChart && state.chartInterpretation) {
      switch (trait.toLowerCase()) {
        case "intuition":
          // Base intuition on Moon, Neptune, and Pisces placements
          const moonHouse = state.natalChart.planets.find((p) => p.name === "moon")?.house || 0
          const neptuneStrength = state.natalChart.planets.find((p) => p.name === "neptune")?.sign === "pisces" ? 20 : 0
          const moonInPisces = state.natalChart.planets.find((p) => p.name === "moon")?.sign === "pisces" ? 15 : 0

          // Houses 4, 8, 12 boost intuition
          const intuitionHouseBoost = [4, 8, 12].includes(moonHouse) ? 15 : 0

          // Calculate base value (50-85 range)
          const intuitionValue = 50 + neptuneStrength + moonInPisces + intuitionHouseBoost

          return {
            value: Math.min(intuitionValue, 95),
            description: state.chartInterpretation.moonSign.description.split(".")[0] + ".",
          }

        case "empathy":
          // Base empathy on Venus, Neptune, and Cancer/Pisces placements
          const venusStrength = state.natalChart.planets.find((p) => p.name === "venus")?.sign === "pisces" ? 20 : 0
          const moonInCancer = state.natalChart.planets.find((p) => p.name === "moon")?.sign === "cancer" ? 15 : 0

          // Calculate base value (45-90 range)
          const empathyValue =
            45 +
            venusStrength +
            moonInCancer +
            (state.natalChart.planets.find((p) => p.name === "moon")?.house === 7 ? 15 : 0)

          return {
            value: Math.min(empathyValue, 90),
            description: state.chartInterpretation.planetPositions.venus?.description.split(".")[0] + ".",
          }

        case "creativity":
          // Base creativity on Sun, Mercury, Venus, Neptune placements
          const sunInLeo = state.natalChart.planets.find((p) => p.name === "sun")?.sign === "leo" ? 15 : 0
          const mercuryInGemini = state.natalChart.planets.find((p) => p.name === "mercury")?.sign === "gemini" ? 10 : 0
          const venusInLibra = state.natalChart.planets.find((p) => p.name === "venus")?.sign === "libra" ? 10 : 0

          // Houses 5 (creativity) and 3 (communication) boost creativity
          const creativityHouseBoost =
            state.natalChart.planets.find((p) => p.name === "sun")?.house === 5
              ? 15
              : state.natalChart.planets.find((p) => p.name === "mercury")?.house === 3
                ? 10
                : 0

          // Calculate base value (40-85 range)
          const creativityValue = 40 + sunInLeo + mercuryInGemini + venusInLibra + creativityHouseBoost

          return {
            value: Math.min(creativityValue, 95),
            description: state.chartInterpretation.sunSign.description.split(".")[0] + ".",
          }

        default:
          // Fallback to pseudo-random but consistent values
          return { value: generatePseudoRandomTraitValue(trait) }
      }
    }

    // Fallback to pseudo-random but consistent values
    return { value: generatePseudoRandomTraitValue(trait) }
  }

  // Generate pseudo-random but consistent trait values based on user data
  const generatePseudoRandomTraitValue = (trait: string) => {
    // Use a combination of user data to generate a consistent value
    const seed = `${state.firstName || ""}${state.birthDate.month || ""}${state.birthDate.day || ""}${trait}`
    let hash = 0
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i)
      hash |= 0 // Convert to 32bit integer
    }

    // Generate a value between 50 and 90 to avoid very low values
    return Math.abs(hash % 41) + 50
  }

  const handleGetBook = () => {
    router.push("/pricing")
  }

  const zodiacSign = getZodiacSignName()
  const element = getElement()

  // Get trait values
  const intuition = getTraitValue("intuition")
  const empathy = getTraitValue("empathy")
  const creativity = getTraitValue("creativity")

  return (
    <section className="bg-gray-50 rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-10 text-center">Your astrologic profile</h2>

      {/* Circular profile display - Yellow circle removed */}
      <div className="relative flex justify-center mb-12">
        {/* Center circle with zodiac illustration removed */}
        {/* We're keeping the empty space to maintain the layout */}
        <div className="w-40 h-40 opacity-0"></div>

        {/* Date of birth */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 flex flex-col items-end">
          <span className="text-sm text-gray-500 mb-1">Date of birth</span>
          <div className="flex items-center">
            <span className="font-medium mr-2">{formatBirthDate()}</span>
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Calendar size={18} className="text-yellow-800" />
            </div>
          </div>
        </div>

        {/* Element */}
        <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 flex flex-col items-end">
          <span className="text-sm text-gray-500 mb-1">Element</span>
          <div className="flex items-center">
            <span className="font-medium mr-2">{element}</span>
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18" className="text-yellow-800">
                <path fill="currentColor" d="M12 3L6 15h12L12 3zm0 5l2 4h-4l2-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Zodiac sign */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 flex flex-col items-start">
          <span className="text-sm text-gray-500 mb-1">Zodiac sign</span>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-2">
              <span className="text-yellow-800 font-bold">♍</span>
            </div>
            <span className="font-medium capitalize">{zodiacSign}</span>
          </div>
        </div>

        {/* Time of birth */}
        <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 flex flex-col items-start">
          <span className="text-sm text-gray-500 mb-1">Time of birth</span>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-2">
              <Clock size={18} className="text-yellow-800" />
            </div>
            <span className="font-medium">{formatBirthTime()}</span>
          </div>
        </div>
      </div>

      {/* Birth place */}
      <div className="flex items-center border-t border-b border-gray-200 py-6 mb-8">
        <div className="w-12 h-12 flex-shrink-0 mr-4">
          <MapPin className="w-full h-full text-yellow-500" />
        </div>
        <div>
          <span className="text-sm text-gray-500 mb-1">Birth place</span>
          <p className="text-gray-700">{state.birthPlace || "Not specified"}</p>
        </div>
      </div>

      {/* Trait meters */}
      <div className="mb-8">
        <TraitMeter name="Intuition" value={intuition.value} description={intuition.description} />
        <TraitMeter name="Empathy" value={empathy.value} description={empathy.description} />
        <TraitMeter name="Creativity" value={creativity.value} description={creativity.description} />
      </div>

      {/* Get book button */}
      <div className="text-center mt-8">
        <button
          onClick={handleGetBook}
          className="px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Get my book
        </button>
      </div>
    </section>
  )
}

