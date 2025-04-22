"use client"

import { useQuiz } from "@/contexts/quiz-context"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"
import { BookCoverPreview } from "@/components/book-cover-preview"
import { THEME_COLORS } from "@/components/book-cover-designer"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const { state } = useQuiz()
  const router = useRouter()
  const [formattedBirthDate, setFormattedBirthDate] = useState<string>("")
  const [firstName, setFirstName] = useState<string | null>(state.firstName)
  const [lastName, setLastName] = useState<string | null>(state.lastName)

  useEffect(() => {
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

  useEffect(() => {
    // If firstName is missing, try to rehydrate from localStorage
    if (!state.firstName) {
      try {
        const saved = localStorage.getItem("quizData")
        if (saved) {
          const parsed = JSON.parse(saved)
          if (parsed.firstName) setFirstName(parsed.firstName)
          if (parsed.lastName) setLastName(parsed.lastName)
        }
      } catch (e) {
        // ignore
      }
    } else {
      setFirstName(state.firstName)
      setLastName(state.lastName)
    }
  }, [state.firstName, state.lastName])

  useEffect(() => {
    // If still no firstName, redirect to quiz start
    if (!firstName) {
      const timeout = setTimeout(() => {
        router.push("/")
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [firstName, router])

  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="text-green-500 w-16 h-16" />
      </div>

      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>

      <p className="text-gray-600 mb-8">
        Your personalized astrology book is being prepared. You'll receive a confirmation email shortly.
      </p>

      {/* Book Cover Preview */}
      <div className="flex justify-center w-full mb-8">
        <div className="w-full h-auto max-w-[350px] max-h-[525px] flex items-center justify-center">
          <BookCoverPreview
            userInfo={{
              firstName: firstName || "",
              lastName: lastName || "",
              placeOfBirth: state.birthPlace || "Place of Birth",
              dateOfBirth: state.birthDate?.year && state.birthDate?.month && state.birthDate?.day
                ? `${state.birthDate.year}-${state.birthDate.month.padStart(2, "0")}-${state.birthDate.day.padStart(2, "0")}`
                : "",
            }}
            themeColor={THEME_COLORS[state.coverColorScheme]}
            selectedIcon={"natal-chart"}
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Product:</span>
            <span>Personalized Astrology Book</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>
              {state.firstName} {state.lastName}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{state.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Order ID:</span>
            <span>AST-{Math.floor(Math.random() * 1000000)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          We've sent a confirmation email to <strong>{state.email}</strong> with all the details.
        </p>

        <div className="flex flex-col space-y-3">
          <Link href="/">
            <button className="w-full py-3 px-4 bg-yellow-300 rounded-full text-gray-900 font-medium hover:bg-yellow-400 transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

