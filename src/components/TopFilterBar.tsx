// src/components/TopFilterBar.tsx
'use client'
import clsx from 'clsx'

const tabs = ['Shift View', 'Staff View', 'Status All', 'Advanced Filter']
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export default function TopFilterBar() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        {tabs.map((t,i) => (
          <button key={t} className={clsx('px-3 py-1 rounded-md text-sm transition', i===0 ? 'bg-primary text-white shadow-primary-shadow-sm' : 'bg-white/0 text-slate-700 dark:text-slate-200 hover:bg-white/5')}>
            {t}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="px-3 py-1 rounded-md bg-primary text-white text-sm">Current Week</div>
        <div className="hidden sm:flex gap-2 text-sm text-slate-600 dark:text-slate-300">
          {days.map(d => <div key={d} className="px-2 py-1 rounded-md bg-white/5">{d}</div>)}
        </div>
      </div>
    </div>
  )
}
