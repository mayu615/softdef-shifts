'use client'

import { shifts } from '@/data/shifts'
import EmployeeRow from './EmployeeRow'

export default function ShiftTable() {
  return (
    <div className="space-y-8">
      {shifts.map((group, gi) => (
        <section key={gi}>
          <h3 className="text-lg font-bold mb-3">{group.group}</h3>
          <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
            {group.employees.map((emp, ei) => (
              <EmployeeRow key={ei} employee={emp} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
