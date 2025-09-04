// app/layout.tsx
// src/app/layout.tsx
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SoftDef - Shifts',
  description: 'Shifts Page for internship assignment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Inter font from Google, fallback included */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full antialiased bg-gray-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
