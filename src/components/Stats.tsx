const stats = [
  {
    name: '140 Million Visits',
    value: '140M',
    description: 'Visits made to ERs in the U.S. every year. Longer wait times are associated with increased mortality rates and adverse patient outcomes, with studies showing that delays in treatment can significantly impact patient safety and recovery.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Patients Leaving Without Being Seen',
    description: 'Patients leave ER due to overcrowding, leading to lost revenue and potential health risks.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Lost Revenue from Boarding',
    description: 'Hospitals lose significant revenue from missed encounters due to boarding and capacity constraints.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Ambulance Diversions',
    description: 'Ambulance diversions occur annually because of ER overcrowding, impacting patient access to care.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The true cost of Emergency Room inefficiencies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Emergency room (ER) inefficiencies can lead to significant financial losses for hospitals. 
            While precise figures can vary based on hospital size, location, and patient volume, 
            some studies provide insights into the economic impact. Empowering emergency department teams and acute care specialists is key to addressing these challenges:
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
