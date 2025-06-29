"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="font-bold text-gray-800 mr-2">AstroVela</span>
          <span className="text-gray-400 text-sm">© 2024 AstroVela. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/reviews" className="text-gray-600 hover:text-gray-900 transition-colors">
            Reviews
          </Link>
          <Link href="/help-center" className="text-gray-600 hover:text-gray-900 transition-colors">
            Help Center
          </Link>
          <Link href="/contact-us" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact Us
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

