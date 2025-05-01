"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { suggestCities, matchCityWithCountry } from "@/utils/city-country-matcher"
import { OptionCard } from "./quiz/option-card"

interface UserInfoFormProps {
  userInfo: {
    firstName: string
    lastName: string
    placeOfBirth: string
    dateOfBirth: string
    gender: "male" | "female" | "non-binary" | ""
    timeOfBirth?: string
  }
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      placeOfBirth: string
      dateOfBirth: string
      gender: "male" | "female" | "non-binary" | ""
      timeOfBirth?: string
    }>
  >
}

export function UserInfoForm({ userInfo, setUserInfo }: UserInfoFormProps) {
  const [placeInput, setPlaceInput] = useState(userInfo.placeOfBirth || "")
  const [suggestions, setSuggestions] = useState<Array<{ city: string; country: string }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (placeInput.trim().length >= 2) {
      const cityMatches = suggestCities(placeInput)
      setSuggestions(cityMatches)
      setShowSuggestions(cityMatches.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [placeInput])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "placeOfBirth") {
      setPlaceInput(value)
      setUserInfo((prev) => ({ ...prev, placeOfBirth: value }))
    } else {
      setUserInfo((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSuggestionClick = (city: string, country: string) => {
    const formatted = `${city}, ${country}`
    setPlaceInput(formatted)
    setUserInfo((prev) => ({ ...prev, placeOfBirth: formatted }))
    setShowSuggestions(false)
    if (inputRef.current) inputRef.current.blur()
  }

  const handleGenderSelect = (gender: "male" | "female" | "non-binary") => {
    setUserInfo((prev) => ({ ...prev, gender }))
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label htmlFor="firstName" className="tracking-wider font-normal text-sm">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="tracking-wider text-sm h-8"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lastName" className="tracking-wider font-normal text-sm">
            Last Name <span className="text-gray-400 text-xs">(optional)</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="tracking-wider text-sm h-8"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label className="tracking-wider font-normal text-sm">Gender <span className="text-red-500">*</span></Label>
        <div className="flex gap-2">
          <OptionCard selected={userInfo.gender === "male"} onClick={() => handleGenderSelect("male")}>Male</OptionCard>
          <OptionCard selected={userInfo.gender === "female"} onClick={() => handleGenderSelect("female")}>Female</OptionCard>
          <OptionCard selected={userInfo.gender === "non-binary"} onClick={() => handleGenderSelect("non-binary")}>Non-binary</OptionCard>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="timeOfBirth" className="tracking-wider font-normal text-sm">
          Time of Birth <span className="text-gray-400 text-xs">(optional)</span>
        </Label>
        <Input
          id="timeOfBirth"
          name="timeOfBirth"
          value={userInfo.timeOfBirth || ""}
          onChange={handleChange}
          placeholder="HH:MM"
          type="time"
          className="tracking-wider text-sm h-8"
        />
      </div>

      <div className="space-y-1 relative">
        <Label htmlFor="placeOfBirth" className="tracking-wider font-normal text-sm">
          Place of Birth
        </Label>
        <Input
          id="placeOfBirth"
          name="placeOfBirth"
          value={placeInput}
          onChange={handleChange}
          placeholder="City, Country"
          className="tracking-wider text-sm h-8"
          autoComplete="off"
          ref={inputRef}
        />
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 bg-white border border-gray-200 rounded shadow w-full max-h-40 overflow-y-auto">
            {suggestions.map((s, idx) => (
              <div
                key={`${s.city}-${s.country}`}
                className="px-3 py-2 cursor-pointer hover:bg-amber-100 text-sm"
                onClick={() => handleSuggestionClick(s.city, s.country)}
              >
                {s.city}, {s.country}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="dateOfBirth" className="tracking-wider font-normal text-sm">
          Date of Birth
        </Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          value={userInfo.dateOfBirth}
          onChange={handleChange}
          placeholder="MM/DD/YYYY"
          type="date"
          className="tracking-wider text-sm h-8"
        />
      </div>
    </div>
  )
}
