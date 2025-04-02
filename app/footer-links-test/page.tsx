"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/shared/page-layout"
import { navigationLinks } from "@/utils/navigation"

export default function FooterLinksTestPage() {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  return (
    <PageLayout title="Footer Links Test" description="Test page to verify footer navigation links">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Footer Links Test</h2>
        <p className="mb-4">
          This page tests that the footer links are correctly implemented and match the navigation structure.
        </p>

        <div className="bg-gray-100 p-3 rounded mb-6">
          <p className="font-medium">
            Current Path: <code>{currentPath}</code>
          </p>
        </div>

        <h3 className="font-medium mb-2">Expected Navigation Links:</h3>
        <ul className="list-disc pl-5 mb-6">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <span className="font-medium">{link.name}</span>: <code>{link.path}</code>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-600">
          Scroll to the bottom of the page to see the footer. Click each link to verify it navigates to the correct
          page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Testing Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Scroll to the bottom of the page to view the footer</li>
          <li>Verify that all navigation links in the footer match those listed above</li>
          <li>Click each link to ensure it navigates to the correct page</li>
          <li>Open the hamburger menu and verify the same links appear there</li>
          <li>Test on different screen sizes to ensure consistent experience</li>
        </ol>
      </div>

      {/* Add some space to make scrolling necessary */}
      <div className="h-[500px]"></div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Footer Should Appear Below</h2>
        <p>
          The footer should be visible below this section. Verify that it contains all the expected navigation links.
        </p>
      </div>
    </PageLayout>
  )
}

