'use client'

import { Plus } from 'lucide-react'

export default function FloatingActionButton() {
  return (
    <button
      aria-label="Add shift"
      className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700"
    >
      <Plus size={18} />
    </button>
  )
}
