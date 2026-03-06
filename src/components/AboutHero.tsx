import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const partners = [
  {
    name: 'Microsoft Startups',
    logo: '/microsoft_for_startups.png',
  },
  {
    name: 'Microsoft Azure',
    logo: '/microsoft_azure.png',
  },
]

export default function AboutHero() {
  return (
    <section data-hero-section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <img
              src="/about-img.jpg"
              alt="DispoRx team collaborating on emergency care solutions and healthcare technology innovation"
              className="w-full rounded-2xl shadow-xl"
              loading="eager"
              fetchPriority="high"
              width="800"
              height="600"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-3 lg:order-2"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              We Are Redefining Emergency Care Efficiency
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              At DispoRx, we believe every second matters in emergency care. Our mission is to streamline ER operations, reduce wait times, and improve patient outcomes through innovative, AI-powered solutions that empower both emergency department teams and acute care specialists.
            </p>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              ERs face immense challenges like overcrowding, delays, and resource strain. DispoRx tackles these issues with real-time analytics, AI-driven workflows, and seamless system integration, empowering ER teams and acute care specialists to make faster decisions, optimize patient flow, and deliver exceptional care efficiently.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-500 bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Powered By Section - Below image on mobile, in content area on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-3 lg:col-start-2"
          >
            <h6 className="text-sm font-bold text-gray-900 mb-4">Powered by:</h6>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={`${partner.name} logo - DispoRx technology partner`}
                  className="h-36 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width="200"
                  height="144"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

