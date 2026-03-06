import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Capture additional annual reimbursements',
    description: 'by optimizing patient coding and reducing lost billing opportunities.',
  },
  {
    title: 'Reduce revenue leakage',
    description: 'through improved documentation and real-time disposition tracking.',
  },
  {
    title: 'Increase high-reimbursement case throughput',
    description: 'ensuring critical patients receive timely care and proper billing.',
  },
  {
    title: 'Optimize resource utilization to unlock',
    description: 'operational savings, cutting unnecessary admissions and rework.',
  },
  {
    title: 'Boost ER profitability with an increase',
    description: 'in billable encounters, reducing patient bottlenecks and maximizing efficiency.',
  },
]

export default function Workflow() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <motion.img
              src="/features_image_phone_1.png"
              alt="DispoRx mobile app showing patient management features and workflow automation"
              className="w-full rounded-lg shadow-xl"
              loading="lazy"
              width="600"
              height="800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Transform Acute Care with Proven Results
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex gap-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <svg
                    className="h-6 w-6 flex-none text-primary-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-base text-gray-900">
                      <strong>{benefit.title}</strong> {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="/features"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors inline-flex items-center gap-2"
                aria-label="Explore DispoRx features for acute care transformation"
              >
                Explore all features
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



