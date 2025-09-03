export type Shift = {
  day: string
  time: string
  status: string
  pay: string
}

export type Employee = {
  name: string
  shifts: Shift[]
}

export type Group = {
  group: string
  employees: Employee[]
}

export const shifts: Group[] = [
  {
    group: 'Bar Staff (2)',
    employees: [
      {
        name: 'Carol',
        shifts: [
          { day: 'Mon', time: '10:00 - 16:00', status: 'Assigned', pay: '$120' },
          { day: 'Wed', time: '12:00 - 18:00', status: 'Approved Leave', pay: '$0' },
        ],
      },
      {
        name: 'John Smith',
        shifts: [{ day: 'Tue', time: '14:00 - 20:00', status: 'Assigned', pay: '$140' }],
      },
    ],
  },
  {
    group: 'Janitors (2)',
    employees: [
      { name: 'Mark', shifts: [{ day: 'Thu', time: '08:00 - 14:00', status: 'Assigned', pay: '$110' }] },
      { name: 'Lisa', shifts: [{ day: 'Fri', time: '09:00 - 15:00', status: 'Assigned', pay: '$115' }] },
    ],
  },
  {
    group: 'Waiters/Waitresses (6)',
    employees: [
      { name: 'Emily', shifts: [{ day: 'Mon', time: '10:00 - 18:00', status: 'Assigned', pay: '$130' }] },
      { name: 'James', shifts: [{ day: 'Wed', time: '12:00 - 20:00', status: 'Assigned', pay: '$125' }] },
    ],
  },
]
