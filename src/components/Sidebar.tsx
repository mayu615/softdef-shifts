// src/components/Sidebar.tsx
'use client'
import { Home, Users, FileText, Calendar } from 'lucide-react'
import clsx from 'clsx'

const items = [
  { key: 'dashboard', label: 'Dashboard', Icon: Home },
  { key: 'employees', label: 'Employees', Icon: Users },
  { key: 'reports', label: 'Reports', Icon: FileText },
  { key: 'shifts', label: 'Shifts', Icon: Calendar, active: true },
]

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:flex flex-col h-screen bg-sidebar DEFAULT text-slate-100 shrink-0">
      <div className="px-6 py-6 text-2xl font-bold">SoftDef</div>
      <nav className="px-3 flex-1">
        <ul className="space-y-2">
          {items.map((it) => (
            <li
              key={it.key}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer',
                it.active ? 'bg-primary text-white font-semibold shadow-primary-shadow-sm' : 'text-slate-300'
              )}
              role="button"
            >
              <it.Icon size={18} />
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-sidebar-border text-sm">
        <div className="text-slate-400">Theme</div>
        <div className="mt-2">
          {/* ThemeToggle can be placed here if desired */}
        </div>
      </div>
    </aside>
  )
}
