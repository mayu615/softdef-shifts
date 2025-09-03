'use client'

import Sidebar from '@/components/Sidebar'
import TopFilterBar from '@/components/TopFilterBar'
import ShiftTable from '@/components/ShiftTable'
import FloatingActionButton from '@/components/FloatingActionButton'
import ThemeToggle from '@/components/ThemeToggle'

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
          <TopFilterBar />
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <ShiftTable />
        </div>

        <FloatingActionButton />
      </main>
    </div>
  )
}
