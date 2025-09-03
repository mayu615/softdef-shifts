'use client'

import { Home, Users, FileText, Calendar } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">SoftDef</div>

      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
            <Home size={18} /> <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
            <Users size={18} /> <span>Employees</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer">
            <FileText size={18} /> <span>Reports</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-purple-700 cursor-pointer">
            <Calendar size={18} /> <span>Shifts</span>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="text-sm">Theme</div>
      </div>
    </aside>
  )
}
