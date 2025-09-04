// src/components/ThemeToggle.tsx
'use client'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-800">
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}
