const features = [
  {
    name: 'Patient Flow',
    description: 'Track, prioritize, and manage patients in real-time to reduce delays and improve care delivery.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M29.284 19.161a1.25 1.25 0 1 0-2.318.937l1.472 3.642-4.372-1.927a1.25 1.25 0 0 0-.995-.006 12.05 12.05 0 0 1-4.758.961c-6.692 0-11.187-5.24-11.187-10.133C7.126 7.046 12.144 2.5 18.313 2.5s11.188 4.546 11.188 10.134c0 .436-.041.958-.111 1.432a1.25 1.25 0 1 0 2.473.369 12.62 12.62 0 0 0 .139-1.801c0-3.396-1.438-6.582-4.049-8.971C25.371 1.301 21.948 0 18.313 0s-7.058 1.301-9.639 3.662c-2.333 2.136-3.729 4.907-3.999 7.896C1.74 13.501.001 16.616.001 19.97c0 2.095.66 4.084 1.917 5.795L.092 30.281A1.25 1.25 0 0 0 1.251 32a1.25 1.25 0 0 0 .504-.106l5.264-2.321c1.324.493 2.724.742 4.169.742.031 0 .062-.002.093-.005 2.09-.016 4.122-.566 5.881-1.594 1.576-.921 2.873-2.187 3.782-3.682.887-.159 1.755-.4 2.597-.722l6.706 2.956a1.25 1.25 0 0 0 1.374-.246 1.25 1.25 0 0 0 .289-1.366l-2.626-6.496zm-18.095 8.651c-.017 0-.034.002-.051.003-1.276-.007-2.505-.257-3.652-.747a1.25 1.25 0 0 0-.995.006l-2.927 1.29.944-2.336a1.25 1.25 0 0 0-.208-1.279c-1.177-1.381-1.799-3.033-1.799-4.779 0-1.998.84-3.89 2.311-5.325.458 2.495 1.749 4.882 3.698 6.757 2.424 2.333 5.631 3.685 9.094 3.848-1.626 1.6-3.952 2.562-6.415 2.562z" fill="#1570ef"/>
        <path d="M23.25 13.938a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 1 0 0 2.5zm-10 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 1 0 0 2.5z" fill="#1570ef"/>
      </svg>
    ),
  },
  {
    name: 'Seamless Handoffs',
    description: 'Standardize communication between teams to reduce errors and speed up decision-making.',
    icon: (
      <svg className="size-6" fill="#1570ef" viewBox="0 0 32 32">
        <path d="M3.962 10.596c.431-2.401 1.527-4.577 3.171-6.294a1.25 1.25 0 0 0-1.805-1.729c-1.986 2.073-3.309 4.695-3.827 7.581a1.25 1.25 0 0 0 1.01 1.451 1.3 1.3 0 0 0 .222.02 1.25 1.25 0 0 0 1.229-1.029zM28.47 20.987a4.62 4.62 0 0 1-1.761-1.321 1.25 1.25 0 1 0-1.957 1.556c.646.813 1.398 1.353 1.971 1.685-.096.538-.299 1.14-.653 1.651-.556.802-1.343 1.192-2.403 1.192H8.419c-1.933 0-2.796-1.62-3.045-2.85a7.56 7.56 0 0 0 1.256-.911c1.416-1.274 2.164-2.956 2.164-4.864V12.75a7.27 7.27 0 0 1 7.128-7.249c.011 0 .022-.002.032-.002l.028.001a1.26 1.26 0 0 0 .098-.005l.087.006c3.965.053 7.19 3.305 7.19 7.249v1.75a1.25 1.25 0 1 0 2.5 0v-1.75c0-4.957-3.784-9.101-8.625-9.68V1.25a1.25 1.25 0 1 0-2.5 0v1.835c-2.129.283-4.096 1.262-5.632 2.823a9.7 9.7 0 0 0-2.806 6.842v4.375c0 2.791-2.515 3.8-2.677 3.862a1.23 1.23 0 0 0-.823 1.175c0 1.312.467 2.746 1.25 3.837A5.26 5.26 0 0 0 8.42 28.25h3.874c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75h3.874c2.384 0 3.74-1.233 4.457-2.267 1.055-1.52 1.168-3.178 1.168-3.821a1.23 1.23 0 0 0-.823-1.175zM16.044 29.5a1.25 1.25 0 0 1-1.25-1.25h2.5a1.25 1.25 0 0 1-1.25 1.25zm14.455-19.307c-.523-2.913-1.896-5.643-3.869-7.686a1.25 1.25 0 1 0-1.799 1.736c1.632 1.69 2.77 3.96 3.206 6.391a1.25 1.25 0 0 0 1.229 1.03 1.26 1.26 0 0 0 .222-.02 1.25 1.25 0 0 0 1.01-1.451z"/>
      </svg>
    ),
  },
  {
    name: 'Actionable Dashboards',
    description: 'Monitor key ER metrics like wait times, throughput, and resource utilization—all in one place.',
    icon: (
      <svg className="size-6" fill="#1570ef" viewBox="0 0 32 32">
        <path d="M15.938 32a1.25 1.25 0 0 1-.559-.132c-.146-.073-3.622-1.836-7.259-5.789-2.132-2.317-3.883-4.915-5.205-7.722C1.264 14.851.284 11.013.002 6.949a1.25 1.25 0 0 1 1.165-1.334C3.457 5.465 5.25 3.547 5.25 1.25A1.25 1.25 0 0 1 6.5 0h19a1.25 1.25 0 0 1 1.25 1.25c0 2.296 1.792 4.213 4.08 4.365a1.25 1.25 0 0 1 1.162 1.365c-.428 4.513-1.674 8.733-3.704 12.545a1.25 1.25 0 1 1-2.207-1.175c1.701-3.193 2.806-6.704 3.292-10.451-2.559-.675-4.526-2.792-5.009-5.399H7.636C7.15 5.119 5.169 7.242 2.594 7.907c.657 6.306 3.108 11.82 7.295 16.403 2.506 2.743 4.964 4.362 6.041 5.003 1.179-.717 4.031-2.645 6.807-5.987a1.25 1.25 0 1 1 1.923 1.597c-3.951 4.756-7.984 6.852-8.154 6.939a1.25 1.25 0 0 1-.569.137zm.967-6.765a1.25 1.25 0 0 0-.243-1.751c-1.081-.817-2.104-1.743-3.04-2.752-2.723-2.935-4.57-6.384-5.498-10.262a12 12 0 0 0 1.405-1.275c.72-.766 1.335-1.622 1.828-2.544A1.25 1.25 0 1 0 9.15 5.474c-.389.728-.875 1.404-1.444 2.01-.502.534-1.064 1.008-1.671 1.409a1.25 1.25 0 0 0-.536 1.293 25.17 25.17 0 0 0 6.289 12.247 25.92 25.92 0 0 0 3.366 3.046c.226.17.49.253.753.253a1.25 1.25 0 0 0 .998-.496z"/>
      </svg>
    ),
  },
  {
    name: 'Cost Savings Insights',
    description: 'Identify inefficiencies and unlock savings of up to $250K annually through smarter workflows.',
    icon: (
      <svg className="size-6" fill="#1570ef" viewBox="0 0 32 32">
        <path d="M30.75 22A1.25 1.25 0 0 0 32 20.75V7.5c0-2.757-2.243-5-5-5h-1.625V1.25a1.25 1.25 0 1 0-2.5 0V2.5h-5.687V1.25a1.25 1.25 0 1 0-2.5 0V2.5H9.063V1.25a1.25 1.25 0 1 0-2.5 0V2.5H5c-2.757 0-5 2.243-5 5V27c0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5a1.25 1.25 0 1 0-2.5 0c0 1.378-1.122 2.5-2.5 2.5H5c-1.378 0-2.5-1.122-2.5-2.5V7.5C2.5 6.122 3.622 5 5 5h1.563v1.25a1.25 1.25 0 1 0 2.5 0V5h5.625v1.25a1.25 1.25 0 1 0 2.5 0V5h5.688v1.25a1.25 1.25 0 1 0 2.5 0V5H27c1.378 0 2.5 1.122 2.5 2.5v13.25A1.25 1.25 0 0 0 30.75 22zm-9.204-8.915l-6.161 8.606a.71.71 0 0 1-.492.245c-.113.008-.342-.007-.536-.192l-3.989-3.83a1.25 1.25 0 0 0-1.732 1.803l3.993 3.834c.598.569 1.396.886 2.217.886l.212-.007c.895-.06 1.73-.495 2.292-1.194l.042-.055 6.186-8.641a1.25 1.25 0 1 0-2.033-1.455z"/>
      </svg>
    ),
  },
  {
    name: 'HIPAA-Compliant Security',
    description: 'Protect patient data with enterprise-grade encryption and full HIPAA compliance.',
    icon: (
      <svg className="size-6" fill="#1570ef" viewBox="0 0 32 32">
        <path d="M15.938 32a1.25 1.25 0 0 1-.559-.132c-.146-.073-3.622-1.836-7.259-5.789-2.132-2.317-3.883-4.915-5.205-7.722C1.264 14.851.284 11.013.002 6.949a1.25 1.25 0 0 1 1.165-1.334C3.457 5.465 5.25 3.547 5.25 1.25A1.25 1.25 0 0 1 6.5 0h19a1.25 1.25 0 0 1 1.25 1.25c0 2.296 1.792 4.213 4.08 4.365a1.25 1.25 0 0 1 1.162 1.365c-.428 4.513-1.674 8.733-3.704 12.545a1.25 1.25 0 1 1-2.207-1.175c1.701-3.193 2.806-6.704 3.292-10.451-2.559-.675-4.526-2.792-5.009-5.399H7.636C7.15 5.119 5.169 7.242 2.594 7.907c.657 6.306 3.108 11.82 7.295 16.403 2.506 2.743 4.964 4.362 6.041 5.003 1.179-.717 4.031-2.645 6.807-5.987a1.25 1.25 0 1 1 1.923 1.597c-3.951 4.756-7.984 6.852-8.154 6.939a1.25 1.25 0 0 1-.569.137zm.967-6.765a1.25 1.25 0 0 0-.243-1.751c-1.081-.817-2.104-1.743-3.04-2.752-2.723-2.935-4.57-6.384-5.498-10.262a12 12 0 0 0 1.405-1.275c.72-.766 1.335-1.622 1.828-2.544A1.25 1.25 0 1 0 9.15 5.474c-.389.728-.875 1.404-1.444 2.01-.502.534-1.064 1.008-1.671 1.409a1.25 1.25 0 0 0-.536 1.293 25.17 25.17 0 0 0 6.289 12.247 25.92 25.92 0 0 0 3.366 3.046c.226.17.49.253.753.253a1.25 1.25 0 0 0 .998-.496z"/>
      </svg>
    ),
  },
  {
    name: 'AI Generated Case Summaries',
    description: 'Automatically generate comprehensive case summaries to streamline documentation and improve care coordination.',
    icon: (
      <svg className="size-6" fill="#1570ef" viewBox="0 0 32 32">
        <path d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h24v4H4V6zm0 6h24v14H4V12zm2 2v10h20V14H6zm2 2h16v2H8v-2zm0 4h12v2H8v-2z"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock Faster Patient Care with Smarter Tools
          </h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {/* Top row: 4 cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.slice(0, 4).map((feature) => (
                <div
                  key={feature.name}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-500 mb-5 group-hover:bg-primary-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Bottom row: 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-2xl">
                {features.slice(4).map((feature) => (
                  <div
                    key={feature.name}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-500 mb-5 group-hover:bg-primary-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
