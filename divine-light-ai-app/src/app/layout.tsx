import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Divine Light - Spiritual Mental Health Companion',
  description: 'Life,Mind & Soul Guide AI Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        {children}
      </body>
    </html>
  )
}