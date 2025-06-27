import type React from "react"
import { QuizProvider } from "@/contexts/quiz-context"
import { UserProvider } from "@/contexts/UserContext"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { AnalyticsSetup } from './analytics-setup';

export const metadata: Metadata = {
  title: {
    template: '%s | astrovela',
    default: 'astrovela - Personalized Astrology for Self-Discovery'
  },
  description: "Discover your personalized astrology book with custom natal charts and deep insights. Create beautiful astrological reports tailored to your birth details.",
  keywords: ['astrology', 'natal chart', 'horoscope', 'personalized', 'birth chart', 'zodiac', 'astrology book'],
  authors: [{ name: 'astrovela' }],
  creator: 'astrovela',
  publisher: 'astrovela',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL('https://astrovela.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'astrovela - Personalized Astrology for Self-Discovery',
    description: 'Create your personalized astrology book with custom natal charts and deep insights.',
    siteName: 'astrovela',
    images: [
      {
        url: '/images/og-image.png', // Create this image
        width: 1200,
        height: 630,
        alt: 'astrovela - Personalized Astrology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'astrovela - Personalized Astrology for Self-Discovery',
    description: 'Create your personalized astrology book with custom natal charts and deep insights.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f7' },
    { media: '(prefers-color-scheme: dark)', color: '#001736' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://json.astrologyapi.com" />
        <link rel="dns-prefetch" href="https://json.astrologyapi.com" />
      </head>
      <body className="bg-[#f7f7f7]">
        <AnalyticsSetup />
        <UserProvider>
          <QuizProvider>
            {children}
          </QuizProvider>
        </UserProvider>
      </body>
    </html>
  )
}