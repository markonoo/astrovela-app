"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { OptionCard } from "./option-card"
import { UserIcon as Male, UserIcon as Female, Users } from "lucide-react"

export function GenderSelection() {
  const { state, setGender, nextStep } = useQuiz()

  const handleSelect = (gender: "male" | "female" | "non-binary") => {
    setGender(gender)
    nextStep()
  }

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-[#28293d]">What's your gender?</h1>

      <div className="space-y-3 mt-4">
        <OptionCard selected={state.gender === "male"} onClick={() => handleSelect("male")}>
          <Male className="w-5 h-5 mr-3 text-blue-500" />
          <span>Male</span>
        </OptionCard>

        <OptionCard selected={state.gender === "female"} onClick={() => handleSelect("female")}>
          <Female className="w-5 h-5 mr-3 text-pink-500" />
          <span>Female</span>
        </OptionCard>

        <OptionCard selected={state.gender === "non-binary"} onClick={() => handleSelect("non-binary")}>
          <Users className="w-5 h-5 mr-3 text-purple-500" />
          <span>Non-binary</span>
        </OptionCard>
      </div>
    </div>
  )
}

