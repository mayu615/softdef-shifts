// src/components/ShiftCard.tsx
'use client'
import { Shift } from '@/data/shifts'
import clsx from 'clsx'

function durationLabel(time: string) {
  const parts = time.split('-').map(p => p.trim())
  if (parts.length !== 2) return ''
  const [s,e] = parts
  const [sh,sm] = s.split(':').map(Number)
  const [eh,em] = e.split(':').map(Number)
  const mins = (eh*60+em) - (sh*60+sm)
  return mins >= 60 ? `${mins/60}h` : `${mins}m`
}

export default function ShiftCard({ shift }: { shift: Shift }) {
  const tone = shift.status === 'Assigned' ? 'success' : shift.status === 'Approved Leave' ? 'danger' : 'warning'
  return (
    <div
      className={clsx(
        'rounded-lg px-3 py-2 min-w-[140px] text-white shadow-sm',
        tone === 'success' && 'bg-success shadow-success-shadow-sm',
        tone === 'danger' && 'bg-danger',
        tone === 'warning' && 'bg-warning'
      )}
    >
      <div className="text-b3-bold">{shift.time}</div>
      <div className="text-b4-reg opacity-90">{durationLabel(shift.time)}</div>
      <div className="text-b4-reg opacity-95">{shift.pay}</div>
      <div className="text-b4-reg italic opacity-90">{shift.status}</div>
    </div>
  )
}
