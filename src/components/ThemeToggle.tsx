'use client'

import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      <span className="text-sm">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  )
}
