import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ContactHero() {
  return (
    <section data-hero-section className="relative bg-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-lg font-medium text-gray-600 mb-4">Ready to get started?</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Take Your{' '}
              <span className="text-primary-500">Emergency Room Operations</span> to the Next Level
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Empower your emergency department teams and acute care specialists with AI-powered workflows that transform patient care delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
                aria-label="Navigate to contact form to schedule a demo"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Schedule a consultation
              </a>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 transition-all duration-200"
              >
                Request Test Access
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <img
                src="/cta_shape.svg"
                alt=""
                className="w-full h-full object-contain"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>
            <div className="relative z-10">
              <img
                src="/contact_hero_image.png"
                alt="Contact DispoRx to schedule a demo and learn how our platform can improve your ER efficiency"
                className="w-full max-w-md mx-auto"
                loading="eager"
                fetchPriority="high"
                width="400"
                height="400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

