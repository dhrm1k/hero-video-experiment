import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hero Video - Modern Design',
  description: 'A modern Next.js app with hero video section',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
