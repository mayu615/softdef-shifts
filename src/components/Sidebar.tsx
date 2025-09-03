'use client'

import { Home, Users, FileText, Calendar } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-dark-bg text-white flex flex-col">
  <div className="p-4 text-t2-bold">SoftDef</div>

  <nav className="p-4 flex-1">
    <ul className="space-y-2">
      <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer text-b2-reg">
        <Home size={18} /> <span>Dashboard</span>
      </li>
      <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer text-b2-reg">
        <Users size={18} /> <span>Employees</span>
      </li>
      <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer text-b2-reg">
        <FileText size={18} /> <span>Reports</span>
      </li>
      <li className="flex items-center gap-2 p-2 rounded bg-primary cursor-pointer text-b2-bold shadow-primary-shadow-sm">
        <Calendar size={18} /> <span>Shifts</span>
      </li>
    </ul>
  </nav>
</aside>

  )
}
