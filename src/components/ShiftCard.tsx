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
    ? 'bg-danger shadow-warning-shadow-sm'
    : shift.status === 'Assigned'
    ? 'bg-success shadow-success-shadow-sm'
    : 'bg-gray-400 shadow-sm'

return (
  <div className={`p-2 rounded text-white text-b3-bold ${cls}`}>
    <div className="font-semibold">{shift.time}</div>
    <div className="text-b4-reg">{calculateDuration(shift.time)}</div>
    <div className="text-b4-reg">{shift.pay}</div>
    <div className="text-b4-italic">{shift.status}</div>
  </div>
)

}
