"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Heart, Briefcase, BookOpen, Settings, Menu, X } from "lucide-react"
import { useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/companion", label: "Today", icon: Home },
  { href: "/companion/love", label: "Love", icon: Heart },
  { href: "/companion/career", label: "Career", icon: Briefcase },
  { href: "/companion/explore", label: "Explore", icon: BookOpen },
  { href: "/companion/report", label: "My Report", icon: BookOpen },
]

export function CompanionNav() {
  const pathname = usePathname()
  const { user } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-apple-gray-4/50 shadow-apple-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/companion" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-150">
              <span className="text-[20px] leading-[28px] font-bold text-apple-gray-1">AstroVela</span>
              <span className="text-[15px] leading-[20px] text-apple-gray-2">Companion</span>
            </Link>

            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2.5 rounded-apple-md text-[15px] leading-[20px] font-medium transition-all duration-150",
                      isActive
                        ? "bg-apple-gray-1 text-white shadow-apple-sm"
                        : "text-apple-gray-2 hover:bg-apple-gray-5 hover:text-apple-gray-1"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <Link
                  href="/companion/settings"
                  className="flex items-center space-x-2 text-apple-gray-2 hover:text-apple-gray-1 transition-colors duration-150 p-2 rounded-apple-md hover:bg-apple-gray-5"
                >
                  <Settings className="w-5 h-5" />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="px-5 py-2.5 bg-apple-gray-1 text-white rounded-apple-md text-[15px] leading-[20px] font-semibold hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-apple-gray-4/50 shadow-apple-sm">
        <div className="flex items-center justify-between h-16 px-5">
          <Link href="/companion" className="flex items-center space-x-2">
            <span className="text-[18px] leading-[24px] font-bold text-apple-gray-1">AstroVela</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-apple-gray-2 hover:text-apple-gray-1 hover:bg-apple-gray-5 rounded-apple-md transition-all duration-150"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-apple-gray-4/50 bg-white animate-slideDown">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-5 py-4 border-b border-apple-gray-4/30 text-[17px] leading-[24px] transition-colors duration-150",
                    isActive ? "bg-apple-gray-5 text-apple-gray-1 font-semibold" : "text-apple-gray-2 hover:bg-apple-gray-5"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <div className="px-5 py-4 border-t border-apple-gray-4/50">
              {user ? (
                <Link
                  href="/companion/settings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-apple-gray-2 hover:text-apple-gray-1 transition-colors duration-150"
                >
                  <Settings className="w-5 h-5" />
                  <span className="text-[17px] leading-[24px]">Settings</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center px-5 py-3 bg-apple-gray-1 text-white rounded-apple-md font-semibold text-[17px] leading-[24px] hover:bg-apple-gray-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-apple-sm"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-apple-gray-4/50 shadow-apple-lg safe-area-inset-bottom">
        <div className="flex items-center justify-around h-16">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 h-full transition-all duration-150",
                  isActive ? "text-apple-gray-1" : "text-apple-gray-3"
                )}
              >
                <Icon className={cn("w-5 h-5 mb-1 transition-transform duration-150", isActive && "scale-110")} />
                <span className="text-[11px] leading-[14px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

