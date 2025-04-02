import type { ReactNode } from "react"
import { PageHeader } from "./page-header"
import Link from "next/link"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: ReactNode
  title: string
  description?: string
  showBreadcrumbs?: boolean
  transparent?: boolean
}

export function PageLayout({
  children,
  title,
  description,
  showBreadcrumbs = true,
  transparent = false,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PageHeader transparent={transparent} />

      <main className="flex-grow">
        {showBreadcrumbs && (
          <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{title}</span>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

