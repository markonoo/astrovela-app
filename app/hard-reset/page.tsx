"use client"

import { useEffect } from "react"
import { PageLayout } from "@/components/shared/page-layout"

export default function HardResetPage() {
  useEffect(() => {
    try {
      // Clear everything from localStorage
      localStorage.clear()
      
      // Clear sessionStorage
      sessionStorage.clear()
      
      // Clear all cookies
      document.cookie.split(';').forEach(cookie => {
        const cookieName = cookie.split('=')[0].trim()
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      })
      
      console.log("Complete browser storage has been wiped!")
      
      // Force reload to home page after a short delay
      setTimeout(() => {
        window.location.href = "/"
      }, 1500)
    } catch (error) {
      console.error("Error during hard reset:", error)
    }
  }, [])

  return (
    <PageLayout
      title="Hard Reset"
      description="Clearing ALL browser data..."
    >
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin mb-8"></div>
        <h2 className="text-xl font-medium text-gray-700 mb-2">Performing hard reset...</h2>
        <p className="text-gray-500">Clearing all browser storage data. You'll be redirected to the home page in a moment.</p>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
          <p className="text-amber-800 text-sm">This process clears ALL stored data for this website from your browser.</p>
        </div>
      </div>
    </PageLayout>
  )
} 