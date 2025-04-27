"use client"

import React, { useState } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import GooglePlacesAutocomplete, { geocodeByPlaceId } from "react-google-places-autocomplete"

export function BirthPlace() {
  const { setBirthPlace, setBirthLocation, nextStep, prevStep } = useQuiz()
  const [value, setValue] = useState(null)
  const [error, setError] = useState<string | null>(null)

  const handleSelect = async (place: any) => {
    setValue(place)
    setBirthPlace(place.label)
    setError(null)
    try {
      const results = await geocodeByPlaceId(place.value.place_id)
      if (results && results[0]) {
        const location = results[0].geometry.location
        setBirthLocation(location.lat(), location.lng(), place.label)
      } else {
        setError("Could not get coordinates for this place. Please try another city.")
      }
    } catch (e) {
      setError("Error fetching location details. Please try again.")
    }
  }

  return (
    <div className="space-y-3 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Where were you born?</h1>
      <p className="text-xs text-gray-600">
        We need this to calculate the positions of celestial bodies at your birth.
      </p>
      <div className="space-y-2 mt-3">
        <div className="relative mb-6">
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
            selectProps={{
              value,
              onChange: handleSelect,
              placeholder: "City, Country",
              styles: {
                input: (provided: any) => ({
                  ...provided,
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }),
                container: (provided: any) => ({
                  ...provided,
                  maxHeight: "40vh", // Limit height to prevent overflow
                }),
                menu: (provided: any) => ({
                  ...provided,
                  maxHeight: "120px", // Limit dropdown height even more
                }),
              },
            }}
            autocompletionRequest={{
              types: ["(cities)"]
            }}
          />
          {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
        </div>
        
        <button
          onClick={nextStep}
          disabled={!value}
          className={`w-full py-2 px-4 rounded-full font-medium transition-colors mb-2 ${
            value
              ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>

        <button
          onClick={prevStep}
          className="w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Previous Question
        </button>
      </div>
    </div>
  )
}

