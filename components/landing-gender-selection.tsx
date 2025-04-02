"use client"

import { useRouter } from "next/navigation"
import { useQuiz } from "@/contexts/quiz-context"
import { OptionCard } from "./quiz/option-card"
import { UserIcon as Male, UserIcon as Female, Users } from "lucide-react"
import { useState } from "react"

export function LandingGenderSelection() {
  const router = useRouter()
  const { setGender, setCurrentStep } = useQuiz()
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "non-binary" | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSelect = (gender: "male" | "female" | "non-binary") => {
    setSelectedGender(gender)
    setIsTransitioning(true)

    // Set a small delay for visual feedback before navigating
    setTimeout(() => {
      // Update the quiz context
      setGender(gender)

      // Set the current step to 2 (skip the gender question)
      setCurrentStep(2)

      // Navigate to the quiz page
      router.push("/quiz")
    }, 400)
  }

  return (
    <div className={`space-y-4 transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
      <h3 className="text-[#28293d] font-medium mb-2">Start by selecting your gender:</h3>
      <div className="space-y-3">
        <OptionCard
          selected={selectedGender === "male"}
          onClick={() => handleSelect("male")}
          className="hover:shadow-md transition-shadow"
        >
          <Male className="w-5 h-5 mr-3 text-blue-500" />
          <span>Male</span>
        </OptionCard>

        <OptionCard
          selected={selectedGender === "female"}
          onClick={() => handleSelect("female")}
          className="hover:shadow-md transition-shadow"
        >
          <Female className="w-5 h-5 mr-3 text-pink-500" />
          <span>Female</span>
        </OptionCard>

        <OptionCard
          selected={selectedGender === "non-binary"}
          onClick={() => handleSelect("non-binary")}
          className="hover:shadow-md transition-shadow"
        >
          <Users className="w-5 h-5 mr-3 text-purple-500" />
          <span>Non-binary</span>
        </OptionCard>
      </div>
    </div>
  )
}

