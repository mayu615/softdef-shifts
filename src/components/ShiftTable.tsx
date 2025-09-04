// src/components/ShiftTable.tsx
'use client'
import { shifts } from '@/data/shifts'
import EmployeeRow from './EmployeeRow'

export default function ShiftTable() {
  return (
    <div className="space-y-8">
      {shifts.map((group) => (
        <section key={group.group}>
          <h3 className="text-t2-bold mb-3">{group.group}</h3>
          <div className="card p-4">
            {group.employees.map((emp) => (
              <EmployeeRow key={emp.name} employee={emp} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
