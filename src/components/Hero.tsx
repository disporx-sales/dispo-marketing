import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section data-hero-section className="relative isolate overflow-hidden bg-gray-900 pt-20 pb-24 sm:pt-32 sm:pb-32 min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/65 z-10" />
        <img
          src="/hero_background_doctors.jpg"
          alt="Emergency room healthcare professionals"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Compliance Badges - SOC2 and HIPAA - At top */}
            <div className="flex justify-center items-center gap-6 mb-6">
              <img
                src="/soc2.webp"
                alt="SOC 2 Type 2 Compliant certification badge"
                className="h-[72px] w-auto"
                loading="eager"
                width="72"
                height="72"
              />
              <img
                src="/hipaacompliant.png"
                alt="HIPAA Compliant certification badge"
                className="h-[72px] w-auto"
                loading="eager"
                width="150"
                height="72"
              />
            </div>

            {/* Main Headline - White text */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Minimizing ER discharge delays with{' '}
                <span className="text-primary-300">AI-powered</span> workflows.
              </h1>
            </div>

            {/* Description - White text */}
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              DispoRx is the <strong className="font-semibold text-white">acute care platform</strong> that helps hospitals streamline
              workflows, reduce patient wait times, and improve outcomes. With
              actionable insights and measurable results, we empower ER teams and acute care specialists to focus
              on what matters most—saving lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                to="/contact"
                className="rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
              <Link
                to="/demo"
                className="rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Request Test Access
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Dashboard UI Elements Overlay */}
        <motion.div 
          className="mt-16 sm:mt-24 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative mx-auto max-w-6xl">
            {/* Main Dashboard Image with overlay cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 blur-3xl rounded-3xl" />
              <img
                src="/current_02:12:2025_application_preview.png"
                alt="DispoRx ER Efficiency Dashboard showing patient flow management and real-time analytics"
                className="relative rounded-2xl shadow-2xl ring-1 ring-white/10"
                fetchPriority="high"
                loading="eager"
                width="1200"
                height="750"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
