// src/data/shifts.ts
export type ShiftStatus = 'Assigned' | 'Approved Leave' | 'Warning'
export type Shift = { day?: string; time: string; pay: string; status: ShiftStatus }
export type Employee = { name: string; shifts: Shift[] }
export type Group = { group: string; employees: Employee[] }

export const shifts: Group[] = [
  {
    group: 'Bar Staff (2)',
    employees: [
      {
        name: 'Carol',
        shifts: [
          { time: '10:00 - 16:00', pay: '$120', status: 'Assigned' },
          { time: '12:00 - 18:00', pay: '$0', status: 'Approved Leave' },
        ],
      },
      {
        name: 'John Smith',
        shifts: [{ time: '14:00 - 20:00', pay: '$140', status: 'Assigned' }],
      },
    ],
  },
  {
    group: 'Janitors (2)',
    employees: [
      { name: 'Mark', shifts: [{ time: '08:00 - 14:00', pay: '$110', status: 'Assigned' }] },
      { name: 'Lisa', shifts: [{ time: '09:00 - 15:00', pay: '$115', status: 'Assigned' }] },
    ],
  },
  {
    group: 'Waiters/Waitresses (6)',
    employees: [
      { name: 'Emily', shifts: [{ time: '10:00 - 18:00', pay: '$130', status: 'Assigned' }] },
      { name: 'James', shifts: [{ time: '12:00 - 20:00', pay: '$125', status: 'Assigned' }] },
    ],
  },
]
