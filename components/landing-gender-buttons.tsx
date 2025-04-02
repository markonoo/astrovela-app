"use client"

import { useRouter } from "next/navigation"
import { useQuiz } from "@/contexts/quiz-context"
import { useState } from "react"

export function LandingGenderButtons() {
  const router = useRouter()
  const { setGender, setCurrentStep } = useQuiz()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedButton, setSelectedButton] = useState<"male" | "female" | "other" | null>(null)

  const handleSelect = (gender: "male" | "female" | "non-binary") => {
    // Set visual indicator for which button was clicked
    setSelectedButton(gender === "non-binary" ? "other" : gender)
    setIsTransitioning(true)

    // Set a small delay for visual feedback before navigating
    setTimeout(() => {
      // Update the quiz context
      setGender(gender)

      // Set the current step to 2 (skip the gender question)
      setCurrentStep(2)

      // Navigate to the quiz page
      router.push("/quiz")
    }, 300)
  }

  return (
    <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
      <h3 className="text-[#28293d] font-medium mb-4">Start by selecting your gender:</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleSelect("male")}
          className={`bg-[#000000] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all ${
            selectedButton === "male" ? "transform scale-105" : ""
          }`}
        >
          Male
        </button>
        <button
          onClick={() => handleSelect("female")}
          className={`bg-[#f7c800] text-[#28293d] px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all ${
            selectedButton === "female" ? "transform scale-105" : ""
          }`}
        >
          Female
        </button>
        <button
          onClick={() => handleSelect("non-binary")}
          className={`bg-white text-[#28293d] px-8 py-3 rounded-full font-medium border border-[#8e909a] hover:bg-gray-50 transition-all ${
            selectedButton === "other" ? "transform scale-105" : ""
          }`}
        >
          Other
        </button>
      </div>
    </div>
  )
}

