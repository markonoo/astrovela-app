import Link from "next/link"
import { Star } from "lucide-react"
import { navigationLinks } from "@/utils/navigation"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <Star size={16} className="mr-2 text-[#f7c800]" fill="#f7c800" />
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-[#8f90a6]">
              {navigationLinks.map((link) => (
                <Link key={link.path} href={link.path} className="hover:text-[#28293d]">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex space-x-4 mr-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#28293d] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#28293d] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
            <span className="text-xs text-[#8f90a6]">© 2025 Nordastro. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

