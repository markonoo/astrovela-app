"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { BookCoverPreview } from "@/components/book-cover-preview"
import { THEME_COLORS } from "@/components/book-cover-designer"
import { COLOR_SCHEMES, type ColorSchemeKey } from "@/utils/constants"
import { logger } from "@/utils/logger"

const QuizStepPage = () => {
  const params = useParams()
  const step = Number.parseInt((params?.step as string) || "1")
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    birthPlace: "",
    colorScheme: "default" as ColorSchemeKey,
  })
  const [selectedColor, setSelectedColor] = useState<string>("default")
  const [formattedBirthDate, setFormattedBirthDate] = useState<string>("")

  // Load saved form data
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedData = localStorage.getItem("formData")
        if (storedData) {
          const parsedData = JSON.parse(storedData)
          setFormData(parsedData)
          if (parsedData.colorScheme) {
            setSelectedColor(parsedData.colorScheme)
          }
        }
      } catch (e) {
        logger.error("Error loading form data", e);
      }
    }
  }, [])

  // Format birth date
  useEffect(() => {
    if (formData.birthDate) {
      try {
        const date = new Date(formData.birthDate)
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
        setFormattedBirthDate(formattedDate)
      } catch (e) {
        logger.error("Error formatting date", e);
        setFormattedBirthDate("Your Birth Date")
      }
    }
  }, [formData.birthDate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleColorSelect = (color: string) => {
    logger.quiz("Selected color", { color, scheme: COLOR_SCHEMES[color as ColorSchemeKey] });
    setSelectedColor(color)
    // Save the selected color to formData
    setFormData((prev) => ({ ...prev, colorScheme: color as ColorSchemeKey }))
  }

  const handleSubmit = () => {
    // Save the current form data including the selected color
    const updatedFormData = { ...formData, colorScheme: selectedColor as ColorSchemeKey }
    localStorage.setItem("formData", JSON.stringify(updatedFormData))
    router.push(`/quiz/${step + 1}`)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Enter Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        )
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Enter Your Birth Date</h2>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Enter Your Birth Place</h2>
            <input
              type="text"
              name="birthPlace"
              placeholder="Your Birth Place"
              value={formData.birthPlace}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
        )
      case 33:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Step 33: Customize Your Book Cover</h2>

            {/* Color Options */}
            <div className="mb-6 w-full max-w-md">
              <h3 className="text-lg font-medium mb-3 text-center">Choose a Color</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {(Object.keys(THEME_COLORS) as string[]).map((key: string) => (
                  <button
                    key={key}
                    onClick={() => handleColorSelect(key)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === key ? "ring-2 ring-offset-2 ring-blue-500" : ""
                    } ${THEME_COLORS[key as keyof typeof THEME_COLORS]?.className || ''}`}
                    aria-label={`Select ${key} color`}
                    aria-pressed={selectedColor === key}
                  >
                    <span className="sr-only">{key}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Book Cover */}
            <div className="w-[350px] h-[450px] rounded-lg shadow-xl overflow-visible mb-8 flex items-center justify-center">
              <BookCoverPreview
                userInfo={{
                  firstName: formData.name || "YOUR NAME",
                  lastName: "",
                  placeOfBirth: formData.birthPlace || "Your Birth Place",
                  dateOfBirth: formattedBirthDate || "Your Birth Date",
                }}
                themeColor={THEME_COLORS[selectedColor as keyof typeof THEME_COLORS] || THEME_COLORS.cream}
                selectedIcon={"natal-chart"}
                formattedDate={formattedBirthDate}              />
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
              Continue
            </button>
          </div>
        )
      case 34:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Step 34: Confirm Your Book Cover</h2>

            {/* Book Cover - Using the same component as step 33 */}
            <div className="mt-10 w-[350px] h-[450px] rounded-lg shadow-xl overflow-visible mb-8 flex items-center justify-center">
              <BookCoverPreview
                userInfo={{
                  firstName: formData.name || "YOUR NAME",
                  lastName: "",
                  placeOfBirth: formData.birthPlace || "Your Birth Place",
                  dateOfBirth: formattedBirthDate || "Your Birth Date",
                }}
                themeColor={THEME_COLORS[formData.colorScheme as keyof typeof THEME_COLORS] || THEME_COLORS.cream}
                selectedIcon={"natal-chart"}
                formattedDate={formattedBirthDate}              />
            </div>

            <div className="text-center mb-6">
              <p className="text-lg">Your personalized book cover is ready!</p>
              <p className="text-gray-600">If you'd like to make changes, you can go back to the previous step.</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => router.push("/quiz/33")}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
              >
                Go Back
              </button>
              <button
                onClick={() => router.push("/quiz/35")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </div>
        )
      default:
        return <p>Quiz completed!</p>
    }
  }

  return (
    <div className="container mx-auto p-4">
      {renderStepContent()}
      {step < 4 && step !== 33 && step !== 34 && (
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Next
        </button>
      )}
    </div>
  )
}

export default QuizStepPage

