const features = [
  {
    title: 'Streamline Patient Journeys',
    description: 'Gain real-time visibility into patient flow from arrival to discharge. By monitoring every step of the ER process, hospitals can identify bottlenecks, prioritize critical patients, and allocate resources efficiently while empowering acute care specialists with the information they need.',
    benefits: [
      'Real-time tracking of patient status and care progress.',
      'Automated alerts for delays in care.',
      'Intuitive dashboards to visualize patient flow across departments.',
    ],
    outcome: 'Improved throughput and faster patient transitions without additional staff.',
    icon: (
      <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Decision Support',
    description: 'Leverage AI to analyze patient data, predict care needs, and recommend actions. AI-powered transcription and case summary generation automatically capture and synthesize critical information, enabling ER teams and acute care specialists to make smarter, faster decisions and prevent resource mismanagement.',
    benefits: [
      'AI-powered transcription for accurate, real-time documentation.',
      'Automated case summary generation to streamline care coordination.',
    ],
    outcome: 'Reduce decision-making time while improving accuracy and efficiency.',
    icon: (
      <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Automated Workflow Management',
    description: 'Streamline communication between emergency department physicians and acute care specialist providers to reduce back-and-forth delays. By automating repetitive tasks and facilitating direct, structured communication, DispoRx eliminates manual errors and ensures critical information reaches the right providers at the right time.',
    benefits: [
      'Structured communication channels between ED physicians and acute care specialists.',
      'Automated case presentation and consultation requests to reduce phone tag.',
      'Real-time status updates and response tracking for specialist consultations.',
      'Automated handoffs between care teams with complete case context.',
      'Customizable workflows tailored to ER needs and acute care specialist requirements.',
      'Centralized task management to avoid duplication of efforts.',
    ],
    outcome: 'Reduced staff fatigue and faster resolution of patient cases.',
    icon: (
      <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-3-3.75h3.375c.621 0 1.125-.504 1.125-1.125V9.75c0-.621-.504-1.125-1.125-1.125H16.5M9 12.75v-1.5m0 1.5H9m0 0H7.5m1.5 0h1.5" />
      </svg>
    ),
  },
  {
    title: 'Customizable Dashboards',
    description: 'Fully customizable dashboards that allow hospital administrators to track KPIs like wait times, throughput, and resource utilization in real time, empowering emergency department teams and acute care specialists with actionable insights.',
    benefits: [
      'Track average disposition time from specialist consultation, disposition outcome tracking, and total case time from emergency room initiation to specialist disposition.',
      'Role-specific dashboards for administrators, physicians, and nurses.',
      'Historical data analysis to identify trends and opportunities for improvement.',
    ],
    outcome: 'Data-driven decisions that enhance both operational and financial performance.',
    icon: (
      <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

export default function BestInClassFeatures() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Best-in-Class Features
          </h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary-50 text-primary-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="size-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">
                    <span className="text-primary-500">Outcome:</span> {feature.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

