"use client"

import { PageLayout } from "@/components/shared/page-layout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TestNavigationPage() {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const pages = [
    { path: "/", name: "Home" },
    { path: "/reviews", name: "Reviews" },
    { path: "/help-center", name: "Help Center" },
    { path: "/contact-us", name: "Contact Us" },
    { path: "/terms", name: "Terms & Conditions" },
    { path: "/privacy", name: "Privacy Policy" },
    { path: "/quiz", name: "Quiz" },
    { path: "/pricing", name: "Pricing" },
  ]

  return (
    <PageLayout
      title="Navigation Test"
      description="Test page to verify that all navigation links are working correctly"
    >
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Current Path</h2>
        <div className="bg-gray-100 p-3 rounded mb-6">
          <code>{currentPath}</code>
        </div>

        <h2 className="text-xl font-bold mb-4">Test Navigation Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className={`p-4 rounded-lg border-2 flex items-center justify-between ${
                currentPath === page.path
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200 hover:border-yellow-200 hover:bg-yellow-50/50"
              }`}
            >
              <span className="font-medium">{page.name}</span>
              <span className="text-sm text-gray-500">{page.path}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-bold mb-2">Testing Instructions</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click each link above to navigate to the corresponding page</li>
            <li>Verify that the page loads correctly with the expected content</li>
            <li>Check that the footer is consistent across all pages</li>
            <li>Confirm that clicking footer links navigates to the correct pages</li>
            <li>Test that the "Take Test" button in the header works from all pages</li>
          </ol>
        </div>
      </div>
    </PageLayout>
  )
}

