"use client"

import React, { useState, useEffect, useRef } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { suggestCities, matchCityWithCountry } from "@/utils/city-country-matcher"

export function BirthPlace() {
  const { setBirthPlace, setBirthLocation, nextStep, prevStep } = useQuiz()
  const [placeInput, setPlaceInput] = useState("")
  const [suggestions, setSuggestions] = useState<Array<{ city: string; country: string }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Generate suggestions when user types
  useEffect(() => {
    if (placeInput.trim().length >= 2) {
      const cityMatches = suggestCities(placeInput, 8)
      setSuggestions(cityMatches)
      setShowSuggestions(cityMatches.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [placeInput])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPlaceInput(value)
    // Clear selection when user changes input
    if (value !== selectedLocation) {
      setSelectedLocation(null)
    }
  }

  const handleSuggestionClick = (city: string, country: string) => {
    const formatted = `${city}, ${country}`
    setPlaceInput(formatted)
    setSelectedLocation(formatted)
    setBirthPlace(formatted)
    // Set coordinates to 0,0 as fallback (can be enhanced later)
    setBirthLocation(0, 0, formatted)
    setShowSuggestions(false)
    if (inputRef.current) inputRef.current.blur()
  }

  const handleManualSubmit = () => {
    if (!placeInput.trim()) return
    
    const cityInput = placeInput.trim()
    
    // Try to match with the city database first
    const cityMatch = matchCityWithCountry(cityInput)
    
    let formattedLocation = cityInput
    if (cityMatch) {
      formattedLocation = `${cityMatch.city}, ${cityMatch.country}`
    }
    
    setSelectedLocation(formattedLocation)
    setBirthPlace(formattedLocation)
    setBirthLocation(0, 0, formattedLocation)
    setShowSuggestions(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (suggestions.length > 0 && showSuggestions) {
        // Select first suggestion
        const first = suggestions[0]
        handleSuggestionClick(first.city, first.country)
      } else {
        handleManualSubmit()
      }
    }
  }

  const handleContinue = () => {
    if (selectedLocation || placeInput.trim()) {
      if (!selectedLocation && placeInput.trim()) {
        handleManualSubmit()
      }
      nextStep()
    }
  }

  const canContinue = !!(selectedLocation || placeInput.trim())

  return (
    <div className="space-y-6 text-center max-w-md mx-auto">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Where were you born?</h1>
        <p className="text-sm text-gray-600">
          We need this to calculate the positions of celestial bodies at your birth.
        </p>
      </div>
      
      {/* Show selected location */}
      {selectedLocation && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-green-800 font-medium">✓ Selected: {selectedLocation}</p>
        </div>
      )}
      
      {/* City Input with Suggestions */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={placeInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Start typing your city name (e.g., London, Berlin, Paris)"
          className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          autoComplete="off"
        />
        
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.city}-${suggestion.country}-${index}`}
                onClick={() => handleSuggestionClick(suggestion.city, suggestion.country)}
                className="w-full text-left px-4 py-3 hover:bg-yellow-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <span className="font-medium">{suggestion.city}</span>
                <span className="text-gray-500 ml-2">{suggestion.country}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Manual Submit Button */}
      {placeInput.trim() && !selectedLocation && (
        <button
          onClick={handleManualSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Use "{placeInput.trim()}"
        </button>
      )}
      
      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            canContinue
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

