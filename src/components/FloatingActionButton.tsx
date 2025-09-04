// src/components/FloatingActionButton.tsx
'use client'
import { Plus } from 'lucide-react'
export default function FloatingActionButton() {
  return (
    <button aria-label="Add shift" className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-primary-shadow-sm hover:translate-y-[-2px] transition transform">
      <Plus size={18} />
    </button>
  )
}
