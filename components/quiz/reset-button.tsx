"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import Link from "next/link"

export function ResetButton() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShowConfirmation(true)}
        className="flex items-center text-sm text-red-600 hover:text-red-700 transition-colors"
        aria-label="Reset Quiz"
      >
        <RefreshCw size={14} className="mr-1" />
        <span>Reset Quiz</span>
      </button>

      {showConfirmation && (
        <div className="absolute bottom-full mb-2 right-0 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <p className="text-sm text-gray-700 mb-3">
            This will completely reset all your quiz data. Are you sure?
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => setShowConfirmation(false)}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
            >
              Cancel
            </button>
            <Link
              href="/hard-reset"
              className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded text-white transition-colors"
            >
              Yes, Reset
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 