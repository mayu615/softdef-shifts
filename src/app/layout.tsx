import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'SoftDef - Shifts',
  description: 'Shifts Page for internship assignment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
