"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { OptionCard } from "./option-card"
import { Sparkles, Flame, GraduationCap } from "lucide-react"

export function AstrologyLevel() {
  const { state, setAstrologyLevel, nextStep, prevStep } = useQuiz()

  const handleSelect = (level: "beginner" | "intermediate" | "expert") => {
    setAstrologyLevel(level)
    nextStep()
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">How familiar are you</h1>
      <h2 className="text-2xl font-semibold text-gray-900">with astrology?</h2>

      <div className="space-y-3 mt-4">
        <OptionCard selected={state.astrologyLevel === "beginner"} onClick={() => handleSelect("beginner")}>
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
          <span>Beginner</span>
        </OptionCard>

        <OptionCard selected={state.astrologyLevel === "intermediate"} onClick={() => handleSelect("intermediate")}>
          <div className="bg-orange-100 p-2 rounded-full mr-3">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <span>Intermediate</span>
        </OptionCard>

        <OptionCard selected={state.astrologyLevel === "expert"} onClick={() => handleSelect("expert")}>
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <GraduationCap className="w-5 h-5 text-blue-500" />
          </div>
          <span>Expert</span>
        </OptionCard>
      </div>

      <button
        onClick={prevStep}
        className="mt-6 w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        Previous Question
      </button>
    </div>
  )
}

