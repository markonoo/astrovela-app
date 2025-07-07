"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useRouter } from "next/navigation"
import { useState, useEffect, useMemo } from "react"
import { BookCoverPreview } from "../book-cover-preview"
import { THEME_COLORS } from "../book-cover-designer"
import { AstrologicalProfile } from "./astrological-profile"
import { Footer } from "../shared/footer"
import AstrovelaIcon from "../icons/AstrovelaIcon"
import { DrawerMenu } from "../drawer-menu"
import { HamburgerButton } from "../hamburger-button"
import { ResetButton } from "./reset-button"
import { getZodiacSign } from "@/utils/zodiac"
import { Book, Star, Check } from "lucide-react"

export function PersonalizedLanding() {
  const router = useRouter()
  const { state } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [chartLoaded, setChartLoaded] = useState(false)

  useEffect(() => {
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [state.birthDate])

  const handleGetBook = () => {
    router.push("/pricing")
  }

  const handleChartLoaded = () => {
    setChartLoaded(true)
  }

  // Extract sun and moon signs with multiple fallbacks - same logic as cover customization
  const { extractedSunSign, extractedMoonSign } = useMemo(() => {
    // First priority: Use stored sun and moon signs from interpretation data
    if (state.sunSign && state.moonSign) {
      return {
        extractedSunSign: state.sunSign,
        extractedMoonSign: state.moonSign
      }
    }

    // Second priority: Extract from natal chart data if available
    if (state.natalChart?.planets) {
      const sunPlanet = state.natalChart.planets.find((p) => p.name === "sun")
      const moonPlanet = state.natalChart.planets.find((p) => p.name === "moon")
      
      if (sunPlanet && moonPlanet) {
        return {
          extractedSunSign: sunPlanet.sign,
          extractedMoonSign: moonPlanet.sign
        }
      }
    }

    // Fallback: Calculate sun sign from birth date and use contrasting moon sign
    if (state.birthDate?.month && state.birthDate?.day) {
      const calculatedSunSign = getZodiacSign(
        Number.parseInt(state.birthDate.month), 
        Number.parseInt(state.birthDate.day)
      )
      
      // Use a contrasting moon sign as fallback
      const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", 
                          "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
      const sunIndex = zodiacSigns.indexOf(calculatedSunSign)
      const moonIndex = sunIndex !== -1 ? (sunIndex + 6) % 12 : 0
      
      return {
        extractedSunSign: calculatedSunSign,
        extractedMoonSign: zodiacSigns[moonIndex]
      }
    }

    // Ultimate fallback
    return {
      extractedSunSign: null,
      extractedMoonSign: null
    }
  }, [state.sunSign, state.moonSign, state.natalChart, state.birthDate])

  // Format date for book cover (Day Month Year format)
  const formattedDate = useMemo(() => {
    if (state.birthDate?.year && state.birthDate?.month && state.birthDate?.day) {
      const month = new Date(0, Number.parseInt(state.birthDate.month) - 1).toLocaleString("default", {
        month: "long",
      })
      return `${state.birthDate.day} ${month} ${state.birthDate.year}`
    }
    return ""
  }, [state.birthDate])

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-lg font-medium">astrovela</span>
            <AstrovelaIcon width={20} height={20} className="ml-2" />
          </div>
          {/* Home button removed as requested */}
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Book cover section - only this section is kept at the top */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Your personalised astrovela book</h1>
          <p className="text-gray-600 mb-8">is almost ready!</p>

          {/* Book cover display with proper sun/moon signs - fully centered */}
          <div className="w-full flex justify-center mb-8">
            <BookCoverPreview
              userInfo={{
                firstName: state.firstName || "Your Name",
                lastName: state.lastName || "",
                placeOfBirth: state.birthPlace || "Your Birth Place",
                dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                  ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                  : "",
              }}
              themeColor={THEME_COLORS[state.coverColorScheme] || THEME_COLORS.black}
              selectedIcon={state.customChartUrl ? "custom-natal-chart" : "natal-chart"}
              customChartUrl={state.customChartUrl}
              isLoading={false}
              sunSign={extractedSunSign}
              moonSign={extractedMoonSign}
              formattedDate={formattedDate || ""}
            />
          </div>

          {/* Button with reduced spacing - moved up */}
          <div className="mt-6 pt-2">
            <button
              onClick={handleGetBook}
              className="w-full sm:w-auto px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
            >
              Get the book
            </button>
          </div>
        </section>

        {/* Astrological Profile Section with proper data */}
        <AstrologicalProfile formattedDate={formattedDate} />

        {/* Generated content section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 text-center">Based on your answers, we've generated:</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="bg-yellow-300 text-yellow-800 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg mb-2">
                134+
              </div>
              <h3 className="font-medium mb-1">personalized pages</h3>
              <p className="text-sm text-gray-600">
                Detailed analysis of your birth chart, personality traits, and cosmic influences.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="bg-yellow-300 text-yellow-800 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg mb-2">
                50+
              </div>
              <h3 className="font-medium mb-1">compatibility insights</h3>
              <p className="text-sm text-gray-600">
                Learn how your chart interacts with others and what it means for your relationships.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="bg-yellow-300 text-yellow-800 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg mb-2">
                99%
              </div>
              <h3 className="font-medium mb-1">of content tailored to you</h3>
              <p className="text-sm text-gray-600">
                Custom insights based on your unique astrological profile and personal details.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleGetBook}
              className="w-full sm:w-auto px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
            >
              Get your personalized book
            </button>
          </div>
        </section>

        {/* What's included section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">What's included?</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Book size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Personalized birth chart analysis</h3>
                <p className="text-sm text-gray-600">
                  Detailed interpretation of your sun, moon, rising signs, and planetary placements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Love & relationship insights</h3>
                <p className="text-sm text-gray-600">
                  Discover your compatibility with different signs and how your birth chart influences your
                  relationships.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Star size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Personality & life path profile</h3>
                <p className="text-sm text-gray-600">
                  Insights into your strengths, challenges, and potential life paths based on your astrological makeup.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <CompassIcon size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Career & success guidance</h3>
                <p className="text-sm text-gray-600">
                  Career paths and work environments where you're most likely to thrive based on your cosmic blueprint.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-medium mb-4">Additional content:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                <span className="text-sm">Detailed guide to all planets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                <span className="text-sm">Beginner's guide to astrology</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                <span className="text-sm">Transit forecasts and predictions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                <span className="text-sm">Intro to numerology</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                <span className="text-sm">History of astrology through the ages</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleGetBook}
              className="w-full sm:w-auto px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
            >
              Order now
            </button>
          </div>
        </section>

        {/* Social proof section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-white text-xs">
                +
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-yellow-500 mb-2">2,065,847</h2>
          <p className="text-sm text-gray-600 mb-6">
            People have found clarity, insight, and guidance through our personalized astrological readings
          </p>

          <button
            onClick={handleGetBook}
            className="w-full sm:w-auto px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
          >
            Join them today
          </button>
        </section>

        {/* Our promise section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 text-center">Our promise</h2>

          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Astrologer" className="w-full h-auto" />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-sm text-gray-600 mb-4">
                The insights we offer are the result of years of study and expertise in the field of astrology. We
                combine traditional astrological wisdom with modern psychological understanding to provide you with
                guidance that is both profound and practical.
              </p>

              <p className="text-sm text-gray-600 mb-4">
                We believe that astrology is a powerful tool for self-discovery and personal growth. Our goal is to help
                you understand yourself better, make informed decisions, and navigate life's challenges with greater
                awareness and confidence.
              </p>

              <p className="text-sm text-gray-600">
                Every reading is created with care and attention to detail. We stand behind the quality of our work and
                are committed to your satisfaction.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleGetBook}
              className="w-full sm:w-auto px-8 py-3 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors"
            >
              Get your reading
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

// Helper components
function Users(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}

function CompassIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  )
}

