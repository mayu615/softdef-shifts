'use client'

export default function TopFilterBar() {
  return (
    <div className="flex items-center justify-between w-full">
     <div className="flex gap-3">
  <button className="px-3 py-1 rounded bg-primary text-white text-b2-bold shadow-primary-shadow-sm">
    Shift View
  </button>
  <button className="px-3 py-1 rounded text-b2-reg hover:bg-gray-200 dark:hover:bg-gray-700">
    Staff View
  </button>
  <button className="px-3 py-1 rounded text-b2-reg hover:bg-gray-200 dark:hover:bg-gray-700">
    Status All
  </button>
  <button className="px-3 py-1 rounded text-b2-reg hover:bg-gray-200 dark:hover:bg-gray-700">
    Advanced Filter
  </button>
</div>

      <div className="flex items-center gap-2">
        <div className="px-3 py-1 bg-purple-600 text-white rounded">Current Week</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Mon Tue Wed Thu Fri Sat Sun</div>
      </div>
    </div>
  )
}
