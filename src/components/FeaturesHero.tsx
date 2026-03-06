import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FeaturesHero() {
  return (
    <section data-hero-section className="relative bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Designed for ER Efficiency by Acute Care Specialists
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the tools that transform emergency room operations. From real-time patient flow management to AI-powered insights, DispoRx equips your ER team and empowers acute care specialists with everything they need to reduce delays, improve care, and optimize efficiency.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200 inline-block text-center"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/demo"
                className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 transition-all duration-200 inline-block text-center"
              >
                Request Test Access
              </Link>
              </div>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <motion.img
              src="/features_page_hero.png"
              alt="DispoRx platform interface showing ER workflow management, patient tracking, and specialist coordination features"
              className="w-full rounded-2xl shadow-xl"
              loading="eager"
              fetchPriority="high"
              width="1059"
              height="963"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

