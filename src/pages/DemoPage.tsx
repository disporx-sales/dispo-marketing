import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DemoPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section data-hero-section className="relative bg-gray-50 py-20 sm:py-24 lg:py-32 min-h-screen">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
        <svg width="469" height="343" viewBox="0 0 469 343" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
            fill="currentColor"
            className="text-primary-500"
          />
        </svg>
      </div>

      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none rotate-180">
        <svg width="469" height="343" viewBox="0 0 469 343" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
            fill="currentColor"
            className="text-primary-500"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-lg font-medium text-primary-600 mb-4">Test Environment Access</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Request a{' '}
            <span className="text-primary-500">Demo Environment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Experience DispoRx firsthand. Request access to our test environment to explore the platform as a Hospital Admin, Emergency Department Admin, ER Physician, or Specialist.
          </p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-md"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200 whitespace-nowrap"
                >
                  Request Access
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You for Your Interest</h3>
              <p className="text-gray-600 mb-6">
                Currently, our team is not accepting requests for demo environments. Please contact us directly for more information about accessing a test environment.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">For demo environment inquiries:</p>
                <a 
                  href="mailto:ryan.mack@disporx.com"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  ryan.mack@disporx.com
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: 'Hospital Admin', description: 'Manage facility-wide settings and user access' },
            { title: 'ED Admin', description: 'Oversee emergency department operations and workflows' },
            { title: 'ER Physician', description: 'Access patient data and coordinate care delivery' },
            { title: 'Specialist', description: 'Receive consultations and manage dispositions' },
          ].map((role, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600">{role.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
