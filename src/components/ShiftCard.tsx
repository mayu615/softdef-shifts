'use client'

import { Shift } from '@/data/shifts'

function calculateDuration(time: string) {
  if (!time.includes('-')) return ''
  const [start, end] = time.split(' - ')
  const [sh, sm] = start.split(':').map(Number)
  const [eh, em] = end.split(':').map(Number)

  const startMinutes = sh * 60 + sm
  const endMinutes = eh * 60 + em
  const diff = endMinutes - startMinutes
  return `${diff / 60}h`
}

export default function ShiftCard({ shift }: { shift: Shift }) {
  const cls =
    shift.status === 'Approved Leave'
      ? 'bg-red-500'
      : shift.status === 'Assigned'
      ? 'bg-green-500'
      : 'bg-gray-400'

  return (
    <div className={`p-2 rounded text-white text-xs ${cls}`}>
      <div className="font-semibold">{shift.time}</div>
      <div className="text-[11px]">{calculateDuration(shift.time)}</div>
      <div className="text-[11px]">{shift.pay}</div>
      <div className="text-[11px] italic">{shift.status}</div>
    </div>
  )
}
