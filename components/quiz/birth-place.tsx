"use client"

import type React from "react"

import { useQuiz } from "@/contexts/quiz-context"
import { useState, useEffect, useRef } from "react"
import { MapPin, Check, X, Loader2 } from "lucide-react"
import { matchCityWithCountry, suggestCities } from "@/utils/city-country-matcher"

export function BirthPlace() {
  const { state, setBirthPlace, setBirthLocation, nextStep, prevStep } = useQuiz()
  const [birthPlaceInput, setBirthPlaceInput] = useState(state.birthPlace || "")
  const [isValid, setIsValid] = useState(false)
  const [suggestions, setSuggestions] = useState<Array<{ city: string; country: string }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [validationMessage, setValidationMessage] = useState<string | null>(null)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [isValidated, setIsValidated] = useState(false)
  const [isGeocoding, setIsGeocoding] = useState(false)
  const [geocodeError, setGeocodeError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if input is valid
    setIsValid(birthPlaceInput.trim().length > 0)

    // Reset validation state when input changes
    if (isValidated) {
      setIsValidated(false)
    }

    // Generate suggestions
    if (birthPlaceInput.trim().length >= 2) {
      const cityMatches = suggestCities(birthPlaceInput)
      setSuggestions(cityMatches)

      // If we have suggestions and they're not showing, show them
      if (cityMatches.length > 0 && !showSuggestions) {
        setShowSuggestions(true)
      }

      // Reset selected suggestion index when suggestions change
      setSelectedSuggestionIndex(-1)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [birthPlaceInput, isValidated])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      inputRef.current.focus()
    }
  }

  // Update the handleSubmit function to be more robust

  const handleSubmit = async () => {
    if (isValid) {
      // Try to match the city with a country
      const match = matchCityWithCountry(birthPlaceInput)

      if (match) {
        // Format the birth place as "City, Country"
        const formattedBirthPlace = `${match.city}, ${match.country}`
        setBirthPlace(formattedBirthPlace)

        // Geocode the location
        await geocodeLocation(formattedBirthPlace)
      } else {
        // If no match found, check if the input contains a comma (city, country format)
        if (birthPlaceInput.includes(",")) {
          setBirthPlace(birthPlaceInput.trim())

          // Geocode the location
          await geocodeLocation(birthPlaceInput.trim())
        } else {
          // Prompt user to provide country
          setValidationMessage("Please include your country (e.g., 'Paris, France')")
        }
      }
    }
  }

  // Update the geocodeLocation function in the BirthPlace component
  const geocodeLocation = async (location: string) => {
    setIsGeocoding(true)
    setGeocodeError(null)

    try {
      // Dynamically import the geocoding service
      const { geocodeLocation } = await import("@/services/astrology-service")

      // Geocode the location
      const result = await geocodeLocation(location)

      // Save the location data
      setBirthLocation(result.latitude, result.longitude, result.name)

      // Check if we're using fallback coordinates (0,0)
      if (result.latitude === 0 && result.longitude === 0) {
        console.warn("Using fallback coordinates for location:", location)
        // Show a warning but don't block progression
        setGeocodeError("Unable to find exact coordinates. Using approximate location data.")

        // Small delay to show the warning
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      // Move to next step
      nextStep()
    } catch (error) {
      console.error("Error geocoding location:", error)

      // Provide a more helpful error message
      let errorMessage = "Unable to find this location. Please check your spelling or try a nearby major city."
      if (error instanceof Error) {
        if (error.message.includes("API key")) {
          errorMessage = "Location service temporarily unavailable. You can continue with approximate data."
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          errorMessage = "Network error. Please check your internet connection and try again."
        }
      }

      setGeocodeError(errorMessage)
      setIsGeocoding(false)
    }
  }

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedSuggestionIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : 0))
        break
      case "Enter":
        e.preventDefault()
        if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
          const { city, country } = suggestions[selectedSuggestionIndex]
          handleSuggestionClick(city, country)
        }
        break
      case "Escape":
        e.preventDefault()
        setShowSuggestions(false)
        break
    }
  }

  // Scroll selected suggestion into view
  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionsRef.current) {
      const suggestionElements = suggestionsRef.current.querySelectorAll("[data-suggestion]")
      if (suggestionElements[selectedSuggestionIndex]) {
        suggestionElements[selectedSuggestionIndex].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        })
      }
    }
  }, [selectedSuggestionIndex])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Where were you born?</h1>

      <p className="text-sm text-gray-600 mt-2">
        We need this to calculate the positions of celestial bodies at your birth.
      </p>

      <div className="space-y-4 mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={birthPlaceInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() =>
                birthPlaceInput.length >= 2 &&
                setSuggestions(suggestCities(birthPlaceInput)) &&
                setShowSuggestions(true)
              }
              placeholder="City, Country"
              className={`w-full pl-10 pr-10 py-3 border ${isValidated ? "border-green-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300`}
              aria-autocomplete="list"
              aria-controls="city-suggestions"
              aria-expanded={showSuggestions}
              disabled={isGeocoding}
            />

            {/* Validation indicator */}
            {isValidated && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Check className="h-5 w-5 text-green-500" />
              </div>
            )}

            {/* Clear button */}
            {birthPlaceInput && !isValidated && !isGeocoding && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => {
                  setBirthPlaceInput("")
                  inputRef.current?.focus()
                }}
                aria-label="Clear input"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}

            {/* Loading indicator */}
            {isGeocoding && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Loader2 className="h-5 w-5 text-yellow-500 animate-spin" />
              </div>
            )}
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              id="city-suggestions"
              className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
              role="listbox"
            >
              {suggestions.map(({ city, country }, index) => (
                <div
                  key={`${city}-${country}`}
                  data-suggestion
                  className={`px-4 py-2 cursor-pointer text-left flex justify-between items-center ${
                    selectedSuggestionIndex === index ? "bg-yellow-100" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSuggestionClick(city, country)}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  role="option"
                  aria-selected={selectedSuggestionIndex === index}
                >
                  <div>
                    <span className="font-medium">{city}</span>
                    <span className="text-gray-500">, {country}</span>
                  </div>
                  {selectedSuggestionIndex === index && <Check className="h-4 w-4 text-yellow-500" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Validation message */}
        {validationMessage && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <p className="text-yellow-700 text-sm">{validationMessage}</p>
          </div>
        )}

        {/* Geocoding error message */}
        {geocodeError && (
          <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
            <p className="text-red-700 text-sm">{geocodeError}</p>
          </div>
        )}
        {geocodeError && (
          <div className="mt-2">
            <button
              onClick={() => {
                // Save the birth place as entered
                setBirthPlace(birthPlaceInput.trim())

                // Use default coordinates (0,0) as fallback
                setBirthLocation(0, 0, birthPlaceInput.trim())

                // Move to next step
                nextStep()
              }}
              className="text-yellow-600 hover:text-yellow-800 font-medium text-sm"
            >
              Continue anyway with approximate data
            </button>
          </div>
        )}

        <div className="flex flex-col space-y-3 pt-4">
          <button
            onClick={handleSubmit}
            disabled={!isValid || isGeocoding}
            className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
          >
            {isGeocoding ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Finding location...
              </span>
            ) : (
              "Continue"
            )}
          </button>

          <button
            onClick={prevStep}
            disabled={isGeocoding}
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Question
          </button>
        </div>
      </div>
    </div>
  )
}

