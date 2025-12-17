"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Clock, MapPin, Check, X, Loader2 } from "lucide-react"
import { matchCityWithCountry, suggestCities } from "@/utils/city-country-matcher"
import { logger } from "@/utils/logger"

export function CombinedBirthDetails() {
  const { state, setBirthDate, setBirthTime, setBirthPlace, setBirthLocation, nextStep, prevStep } = useQuiz()
  const [isValid, setIsValid] = useState(false)
  const [birthTimeInput, setBirthTimeInput] = useState(state.birthTime || "")
  const [birthPlaceInput, setBirthPlaceInput] = useState(state.birthPlace || "")
  const [suggestions, setSuggestions] = useState<Array<{ city: string; country: string }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [validationMessage, setValidationMessage] = useState<string | null>(null)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [isValidated, setIsValidated] = useState(false)
  const [isGeocoding, setIsGeocoding] = useState(false)
  const [geocodeError, setGeocodeError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => currentYear - i)

  useEffect(() => {
    // Check if all required fields are filled
    const hasDate = !!state.birthDate.month && !!state.birthDate.day && !!state.birthDate.year
    const hasPlace = birthPlaceInput.trim().length > 0
    setIsValid(hasDate && hasPlace)

    // Reset validation state when input changes
    if (isValidated) {
      setIsValidated(false)
    }

    // Generate suggestions for place
    if (birthPlaceInput.trim().length >= 2) {
      const cityMatches = suggestCities(birthPlaceInput)
      setSuggestions(cityMatches)
      if (cityMatches.length > 0 && !showSuggestions) {
        setShowSuggestions(true)
      }
      setSelectedSuggestionIndex(-1)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [state.birthDate, birthPlaceInput, isValidated])

  const handlePlaceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthPlaceInput(e.target.value)
    setShowSuggestions(true)
    setValidationMessage(null)
    setGeocodeError(null)
  }

  const handleSuggestionClick = (city: string, country: string) => {
    const formattedBirthPlace = `${city}, ${country}`
    setBirthPlaceInput(formattedBirthPlace)
    setShowSuggestions(false)
    setValidationMessage(null)
    setIsValidated(true)
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const handleSubmit = async () => {
    if (isValid) {
      // Try to match the city with a country
      const match = matchCityWithCountry(birthPlaceInput)

      if (match) {
        const formattedBirthPlace = `${match.city}, ${match.country}`
        setBirthPlace(formattedBirthPlace)
        await geocodeLocation(formattedBirthPlace)
      } else if (birthPlaceInput.includes(",")) {
        setBirthPlace(birthPlaceInput.trim())
        await geocodeLocation(birthPlaceInput.trim())
      } else {
        setValidationMessage("Please include your country (e.g., 'Paris, France')")
      }
    }
  }

  const geocodeLocation = async (location: string) => {
    setIsGeocoding(true)
    setGeocodeError(null)

    try {
      const { geocodeLocation } = await import("@/services/astrology-service")
      const result = await geocodeLocation(location)
      setBirthLocation(result.latitude, result.longitude, result.name)

      if (result.latitude === 0 && result.longitude === 0) {
        setGeocodeError("Unable to find exact coordinates. Using approximate location data.")
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      // Save time if provided
      if (birthTimeInput.trim()) {
        setBirthTime(birthTimeInput.trim())
      }

      nextStep()
    } catch (error) {
      logger.error("Error geocoding location", error);
      setGeocodeError("Unable to find this location. Please check your spelling or try a nearby major city.")
      setIsGeocoding(false)
    }
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">When and where were you born?</h1>
      <p className="text-sm text-gray-600 mt-2">
        We need this to calculate your unique astrological chart.
      </p>

      <div className="space-y-4 mt-6">
        {/* Date of Birth */}
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <select
              value={state.birthDate.month || ""}
              onChange={(e) => setBirthDate("month", e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <option value="" disabled>Month</option>
              {months.map((month, index) => (
                <option key={month} value={String(index + 1)}>{month}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>

          <div className="relative">
            <select
              value={state.birthDate.day || ""}
              onChange={(e) => setBirthDate("day", e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <option value="" disabled>Day</option>
              {days.map((day) => (
                <option key={day} value={String(day)}>{day}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>

          <div className="relative">
            <select
              value={state.birthDate.year || ""}
              onChange={(e) => setBirthDate("year", e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <option value="" disabled>Year</option>
              {years.map((year) => (
                <option key={year} value={String(year)}>{year}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Birth Time */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="time"
            value={birthTimeInput}
            onChange={(e) => setBirthTimeInput(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            placeholder="Birth time (optional)"
          />
        </div>

        {/* Birth Place */}
        <div className="relative mb-24">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={birthPlaceInput}
            onChange={handlePlaceInputChange}
            placeholder="City, Country"
            className={`w-full max-w-md min-w-[200px] pl-10 pr-10 py-3 border ${isValidated ? "border-green-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300`}
            disabled={isGeocoding}
          />
          {isValidated && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          )}
        </div>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute z-10 w-full max-w-md min-w-[200px] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={`${suggestion.city}-${suggestion.country}`}
                data-suggestion
                className={`p-3 hover:bg-gray-100 cursor-pointer ${
                  index === selectedSuggestionIndex ? "bg-gray-100" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion.city, suggestion.country)}
              >
                {suggestion.city}, {suggestion.country}
              </div>
            ))}
          </div>
        )}

        {/* Error Messages */}
        {validationMessage && (
          <p className="text-red-500 text-sm">{validationMessage}</p>
        )}
        {geocodeError && (
          <p className="text-yellow-600 text-sm">{geocodeError}</p>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            disabled={!isValid || isGeocoding}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
          >
            {isGeocoding ? (
              <span className="flex items-center justify-center">
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Processing...
              </span>
            ) : (
              "Continue"
            )}
          </button>

          <button
            onClick={prevStep}
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Previous Question
          </button>
        </div>
      </div>
    </div>
  )
} 