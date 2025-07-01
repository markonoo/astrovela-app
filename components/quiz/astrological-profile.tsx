"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign } from "@/utils/zodiac"
import { useRouter } from "next/navigation"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

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

interface AstrologicalProfileProps {
  formattedDate: string;
}

export function AstrologicalProfile({ formattedDate }: AstrologicalProfileProps) {
  const router = useRouter()
  const { state } = useQuiz()

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

  // Get sun and moon sign from natal chart data if available, with fallbacks
  const getSunSign = () => {
    // First, try to get from stored state (API interpretation data)
    if (state.sunSign) {
      return state.sunSign.toLowerCase()
    }

    // Second, try to get from natal chart data
    if (state.natalChart?.planets) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      if (sunPlanet) {
        return sunPlanet.sign
      }
    }

    // Third, try chart interpretation
    if (state.chartInterpretation?.sunSign?.title) {
      return state.chartInterpretation.sunSign.title.toLowerCase()
    }

    // Fourth, calculate from birth date
    if (state.birthDate?.month && state.birthDate?.day) {
      return getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
    }

    // Final fallback
    return "taurus"
  }

  const getMoonSign = () => {
    console.log("🔍 AstrologicalProfile - state.moonSign:", state.moonSign)
    
    // First, try to get from stored state (API interpretation data)
    if (state.moonSign) {
      console.log("✅ AstrologicalProfile - Using stored moonSign:", state.moonSign)
      return state.moonSign.toLowerCase()
    }

    // Second, try to get from natal chart data
    if (state.natalChart?.planets) {
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")
      if (moonPlanet) {
        console.log("⚡ AstrologicalProfile - Using natal chart moonSign:", moonPlanet.sign)
        return moonPlanet.sign
      }
    }

    // Third, try chart interpretation
    if (state.chartInterpretation?.moonSign?.title) {
      console.log("📊 AstrologicalProfile - Using chart interpretation moonSign:", state.chartInterpretation.moonSign.title)
      return state.chartInterpretation.moonSign.title.toLowerCase()
    }

    // Fourth, calculate contrasting sign from sun sign
    const sunSign = getSunSign()
    const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", 
                        "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
    const sunIndex = zodiacSigns.indexOf(sunSign)
    const moonIndex = sunIndex !== -1 ? (sunIndex + 6) % 12 : 5

    console.log("🔄 AstrologicalProfile - Using calculated fallback moonSign:", zodiacSigns[moonIndex])
    return zodiacSigns[moonIndex]
  }

  const sunSign = getSunSign()
  const moonSign = getMoonSign()

  // Get trait values
  const intuition = getTraitValue("intuition")
  const empathy = getTraitValue("empathy")
  const creativity = getTraitValue("creativity")

  // Helper to get SVG file name for zodiac sign
  const getZodiacSvg = (sign: string) => {
    return `/images/zodiac/${sign.toLowerCase()}.svg`
  }

  return (
    <section className="bg-gray-50 rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-10 text-center">Your astrological profile</h2>

      {/* Circular profile display with central zodiac illustration and info bubbles */}
      <div className="flex flex-col lg:flex-row justify-center items-center mb-12 gap-8 lg:gap-12" style={{ minHeight: 420 }}>
        {/* Left column: Moon, Element, Birth place */}
        <div className="flex flex-row lg:flex-col justify-between lg:justify-between lg:h-[340px] w-full lg:min-w-[160px] gap-4 lg:gap-0">
          {/* Moon */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <img 
                src={getZodiacSvg(moonSign)} 
                alt={moonSign} 
                width={32} 
                height={32} 
                className="w-8 h-8" 
                style={{ 
                  objectFit: 'contain', 
                  transform: 'translateY(6%)',
                  filter: 'brightness(0)'
                }} 
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Moon</div>
              <div className="font-bold text-base capitalize">{moonSign}</div>
            </div>
          </div>
          {/* Element */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <svg viewBox="0 0 24 24" width="22" height="22" className="text-yellow-800"><path fill="currentColor" d="M12 3L6 15h12L12 3zm0 5l2 4h-4l2-4z" /></svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Element</div>
              <div className="font-bold text-base">{element}</div>
            </div>
          </div>
          {/* Birth place */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <MapPin className="w-6 h-6 text-yellow-800" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Birth place</div>
              <div className="font-bold text-base">{state.birthPlace || "Not specified"}</div>
            </div>
          </div>
        </div>
        {/* Center: Large zodiac sign in concentric circles */}
        <div className="flex flex-col items-center justify-center order-first lg:order-none">
          <div className="relative flex items-center justify-center">
            <div className="rounded-full border-4 border-yellow-200 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 32px 0 #ffe06655' }}>
              <div className="rounded-full border-2 border-yellow-100 w-36 h-36 lg:w-48 lg:h-48 flex items-center justify-center bg-yellow-50">
                <img
                  src={getZodiacSvg(zodiacSign)}
                  alt={zodiacSign}
                  width={136}
                  height={136}
                  className="w-24 h-24 lg:w-34 lg:h-34"
                  style={{ 
                    objectFit: 'contain', 
                    transform: 'translateY(6%)',
                    filter: 'brightness(0)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right column: Sun, Time of birth, Date of birth */}
        <div className="flex flex-row lg:flex-col justify-between lg:justify-between lg:h-[340px] w-full lg:min-w-[160px] gap-4 lg:gap-0">
          {/* Sun */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <img 
                src={getZodiacSvg(sunSign)} 
                alt={sunSign} 
                width={32} 
                height={32} 
                className="w-8 h-8" 
                style={{ 
                  objectFit: 'contain', 
                  transform: 'translateY(6%)',
                  filter: 'brightness(0)'
                }} 
              />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Sun</div>
              <div className="font-bold text-base capitalize">{sunSign}</div>
            </div>
          </div>
          {/* Time of birth */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <Clock size={22} className="text-yellow-800" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Time of birth</div>
              <div className="font-bold text-base">{formatBirthTime()}</div>
            </div>
          </div>
          {/* Date of birth */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <Calendar size={22} className="text-yellow-800" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Date of birth</div>
              <div className="font-bold text-base">{formattedDate || "Not specified"}</div>
            </div>
          </div>
        </div>
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

