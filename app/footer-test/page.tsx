"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function FooterTest() {
  const [footerCount, setFooterCount] = useState(0)
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    // Count the number of footer elements on the page
    const footers = document.querySelectorAll("footer")
    setFooterCount(footers.length)

    // Get the current path
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Footer Implementation Test</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Current Page</h2>
          <div className="bg-gray-100 p-3 rounded mb-2">
            <code>{currentPath}</code>
          </div>

          <h2 className="text-xl font-bold mb-4 mt-6">Footer Count</h2>
          <div
            className={`p-3 rounded mb-2 ${footerCount === 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            <p className="font-bold">
              {footerCount} {footerCount === 1 ? "✓ (Correct)" : "✗ (Incorrect - should be exactly 1)"}
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Each page should have exactly one footer element. If the count is not 1, there may be duplicate footers or
            the footer might be missing.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Test Navigation</h2>
          <p className="mb-4">Click on each link below to test the footer implementation on different pages:</p>

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
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Testing Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit each page using the links above</li>
            <li>Verify that each page shows exactly 1 footer</li>
            <li>
              Check that the footer contains links to Reviews, Help Center, Contact Us, Terms & Conditions, and Privacy
              Policy
            </li>
            <li>Confirm that clicking on footer links navigates to the correct pages</li>
            <li>Ensure the footer design is consistent across all pages</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

