'use client'

import { Employee } from '@/data/shifts'
import ShiftCard from './ShiftCard'

export default function EmployeeRow({ employee }: { employee: Employee }) {
  return (
    <div className="flex items-start gap-4 border-b border-gray-200 dark:border-gray-700 py-3">
      <div className="w-48 font-medium">{employee.name}</div>

      <div className="flex gap-2 flex-wrap">
        {employee.shifts.map((s, i) => (
          <ShiftCard key={i} shift={s} />
        ))}
      </div>
    </div>
  )
}
