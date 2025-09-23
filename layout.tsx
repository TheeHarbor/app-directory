import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding Hub',
  description: 'Internal onboarding reference',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
      </body>
    </html>
  )
}
