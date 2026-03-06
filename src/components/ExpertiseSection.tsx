import { Link } from 'react-router-dom'

export default function ExpertiseSection() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg font-medium text-white/90 mb-4">
              Want to see how we are revolutionizing ER outcomes?
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
              Schedule a demo today!
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Expertise That Drives Change
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                At DispoRx, our team brings together a unique blend of expertise from across the healthcare and technology industries. Comprised of experienced emergency room doctors, SaaS professionals, med-tech executives, and AI and machine learning pioneers, we understand the challenges facing ER teams and acute care specialists firsthand. This diverse background allows us to design solutions that are both practical and innovative—grounded in clinical realities while harnessing the power of cutting-edge technology to optimize workflows, reduce delays, and improve outcomes while empowering acute care specialists.
              </p>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 pl-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg className="size-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower emergency rooms and acute care specialists with smarter tools that save time, cut costs, and improve patient care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg className="size-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ER-specific solutions designed for large health systems, regional hospitals, community hospitals, and VA facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

