'use client'

import { Shift } from '@/data/shifts'

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
      <div className="text-[11px]">{shift.duration ?? ''}</div>
      <div className="text-[11px]">{shift.pay}</div>
      <div className="text-[11px] italic">{shift.status}</div>
    </div>
  )
}
