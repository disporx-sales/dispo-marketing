import { motion } from 'framer-motion'

const steps = [
  {
    number: 'Step 1',
    title: 'Get Started',
    description: 'Quick setup and onboarding process to get your ER team and acute care specialists up and running with minimal disruption to operations.',
  },
  {
    number: 'Step 2',
    title: 'Load Your Team',
    description: 'Onboard ER staff and acute care specialists quickly with intuitive tools, personalized workflows, and minimal training required to get started.',
  },
  {
    number: 'Step 3',
    title: 'Automate Workflows',
    description: 'Automated workflows prioritize patients, optimize handoffs, and enhance collaboration across ER teams and acute care specialists to improve care delivery.',
  },
  {
    number: 'Step 4',
    title: 'Measure and Improve',
    description: 'Track key metrics like wait times, throughput, and cost savings through intuitive dashboards, helping you achieve continuous improvement and measurable ROI.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How Does It Work?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A simple, step-by-step process to streamline your ER operations, empower acute care specialists, improve patient flow, and deliver faster, more effective care.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line - visible on larger screens */}
          <div className="hidden lg:block absolute top-[65px] left-[calc(12.5%+35px)] right-[calc(12.5%+35px)] h-0.5 border-t-2 border-dashed border-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Number Circle */}
                <div className="relative mb-6">
                  {/* Outer ring with gradient */}
                  <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
                    {/* Inner circle */}
                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex items-center justify-center shadow-inner border border-gray-100">
                      <span className="text-lg sm:text-xl font-bold text-gray-800">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative arc - top right */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary-400/40 rounded-tr-full" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
