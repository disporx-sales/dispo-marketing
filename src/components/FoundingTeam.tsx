import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Dr. Jonathon Jundt',
    role: 'Chief Executive Officer',
    image: '/jundt_headshot.png',
    linkedin: 'https://www.linkedin.com/in/jonathon-s-jundt-md-dds-facs/',
  },
  {
    name: 'Thomas Cross',
    role: 'Chief Technology Officer',
    image: '/cross_headshot.png',
    linkedin: 'https://www.linkedin.com/in/thomas-cross/',
  },
  {
    name: 'James Card',
    role: 'Chief Operating Officer',
    image: '/card_headshot.png',
    linkedin: 'https://www.linkedin.com/in/james-card-msds/',
  },
  {
    name: 'Ryan Mack',
    role: 'Chief Revenue Officer',
    image: '/mack_headshot.png',
    linkedin: 'https://www.linkedin.com/in/ryanmack/',
  },
  {
    name: 'Zachary Mock',
    role: 'Chief Financial Officer',
    image: '/mock_headshot.png',
    linkedin: 'https://www.linkedin.com/in/zachary-mock/',
  },
]

export default function FoundingTeam() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Founding Team
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
            >
              Join our team
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-300 rounded-full flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="size-5 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

