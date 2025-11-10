import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AstroVela - Document Creator',
  description: 'Interactive astrology report with zodiac signs, planets, and celestial insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}

