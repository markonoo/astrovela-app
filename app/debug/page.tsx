"use client"

import { useState } from "react"
import { BirthPlace } from "@/components/quiz/birth-place"

export default function DebugPage() {
  const [testResult, setTestResult] = useState("")

  // Mock quiz context for testing
  const mockQuizContext = {
    setBirthPlace: (place: string) => {
      console.log("Birth place set:", place)
      setTestResult(`Birth place set: ${place}`)
    },
    setBirthLocation: (lat: number, lng: number, name: string) => {
      console.log("Birth location set:", { lat, lng, name })
      setTestResult(prev => prev + ` | Location: ${lat}, ${lng}, ${name}`)
    },
    nextStep: () => {
      console.log("Next step called")
      setTestResult(prev => prev + " | Next step called")
    },
    prevStep: () => {
      console.log("Previous step called")
      setTestResult(prev => prev + " | Previous step called")
    }
  }

  // Provide mock context
  const TestProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <div data-quiz-context={JSON.stringify(mockQuizContext)}>
        {children}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Debug Page - Birth Place Component Test</h1>
      
      {/* Test Results */}
      {testResult && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="font-semibold text-green-800">Test Results:</h2>
          <p className="text-green-700">{testResult}</p>
        </div>
      )}
      
      {/* Manual Test Section */}
      <div className="border p-4 rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Manual City Input Test</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Test typing a city (e.g., London, Berlin, Paris)"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={(e) => {
              const value = e.target.value
              if (value.length >= 2) {
                setTestResult(`Typing: "${value}" - This should show suggestions`)
              }
            }}
          />
          <p className="text-sm text-gray-600">
            Type any city name with 2+ characters to test the suggestion system.
          </p>
        </div>
      </div>

      {/* Clear Test Results */}
      <button
        onClick={() => setTestResult("")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Clear Test Results
      </button>
      
      {/* Simple test without complex dependencies */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">City Database Test</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <p className="text-yellow-800">
            <strong>Issue:</strong> The birth place component in step 10 is not working properly. 
            The Google Places API isn't showing suggestions and the continue button isn't working.
          </p>
          <p className="text-yellow-700 mt-2">
            <strong>Expected:</strong> When typing a city name, suggestions should appear and the continue button should work.
          </p>
          <p className="text-yellow-700 mt-2">
            <strong>Working Reference:</strong> The book-designer page has a perfectly working city dropdown using the same city database.
          </p>
        </div>
      </div>
    </div>
  )
}

