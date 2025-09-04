// src/components/EmployeeRow.tsx
'use client'
import { Employee } from '@/data/shifts'
import ShiftCard from './ShiftCard'

export default function EmployeeRow({ employee }: { employee: Employee }) {
  return (
    <div className="flex items-start gap-4 border-t border-slate-200/60 dark:border-[#2a3246] py-4 first:border-0">
      <div className="w-44 min-w-[10rem] text-b2-bold text-slate-800 dark:text-white">{employee.name}</div>
      <div className="flex gap-3 flex-wrap">
        {employee.shifts.map((s, i) => <ShiftCard key={i} shift={s} />)}
      </div>
    </div>
  )
}
