"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { getZodiacSign, zodiacDescriptions } from "@/utils/zodiac"
import Link from "next/link"
import { useEffect, useState } from "react"
import SimpleBookCover from "@/components/SimpleBookCover"

export function QuizResults() {
  const { state, resetQuiz } = useQuiz()
  const [zodiacSign, setZodiacSign] = useState<string | null>(null)
  const [formattedBirthDate, setFormattedBirthDate] = useState<string>("")

  useEffect(() => {
    if (state.birthDate.month && state.birthDate.day) {
      const sign = getZodiacSign(Number.parseInt(state.birthDate.month), Number.parseInt(state.birthDate.day))
      setZodiacSign(sign)
    }

    // Format birth date for display
    if (state.birthDate.month && state.birthDate.day && state.birthDate.year) {
      try {
        const date = new Date(
          Number.parseInt(state.birthDate.year),
          Number.parseInt(state.birthDate.month) - 1,
          Number.parseInt(state.birthDate.day),
        )
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
        setFormattedBirthDate(formattedDate)
      } catch (e) {
        console.error("Error formatting date:", e)
        setFormattedBirthDate("Your Birth Date")
      }
    }
  }, [state.birthDate])

  return (
    <div className="text-center space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Your Astrology Profile</h1>

      {/* Book Cover Preview - Matching the style from steps 33/34 */}
      <div className="flex justify-center mb-8">
        <div className="w-64 h-96 rounded-lg shadow-xl overflow-hidden">
          <SimpleBookCover
            name={state.firstName || "YOUR NAME"}
            birthDate={formattedBirthDate || "Your Birth Date"}
            birthPlace={state.birthPlace || "Your Birth Place"}
            colorScheme={state.coverColorScheme}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Summary</h2>
          <p className="text-gray-600">Based on your responses, we've created your personalized astrology profile.</p>
        </div>

        <div className="space-y-4 mt-6">
          {state.firstName && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium">Name</h3>
              <p>
                {state.firstName} {state.lastName || ""}
              </p>
            </div>
          )}

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium">Gender</h3>
            <p className="capitalize">{state.gender || "Not specified"}</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium">Astrology Knowledge</h3>
            <p className="capitalize">{state.astrologyLevel || "Not specified"}</p>
          </div>

          {state.birthDate.month && state.birthDate.day && state.birthDate.year && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium">Birth Date</h3>
              <p>{formattedBirthDate}</p>
            </div>
          )}

          {state.birthPlace && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium">Birth Place</h3>
              <p>{state.birthPlace}</p>
            </div>
          )}

          {zodiacSign && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium">Zodiac Sign</h3>
              <p className="capitalize">{zodiacDescriptions[zodiacSign as keyof typeof zodiacDescriptions].title}</p>
            </div>
          )}

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium">Cover Design</h3>
            <div className="flex items-center mt-2">
              <div
                className="w-6 h-6 rounded-full mr-2"
                style={{
                  backgroundColor: state.coverColorScheme
                    ? typeof window !== "undefined"
                      ? require("@/utils/constants").COLOR_SCHEMES[state.coverColorScheme]?.bgColor
                      : "#2d2a4a"
                    : "#2d2a4a",
                }}
              ></div>
              <p className="capitalize">{state.coverColorScheme || "Purple"}</p>
            </div>
          </div>

          {state.email && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium">Email</h3>
              <p>{state.email}</p>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-800">
            Thank you for completing the quiz! We've sent your personalized astrology reading to your email.
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <Link href="/">
          <button className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors">
            Back to Home
          </button>
        </Link>

        <button
          onClick={resetQuiz}
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  )
}

