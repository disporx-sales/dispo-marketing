import { motion } from 'framer-motion'

export default function TrustedTechnology() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Trusted Technology, Proven to Improve ER Performance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              DispoRx combines innovative AI workflows, seamless integrations, and real-time insights to address the biggest challenges in emergency care—empowering emergency department teams and acute care specialists while delivering measurable results for hospitals and patients alike.
            </p>
            <div className="mt-10">
              <a
                href="/about"
                className="rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200 inline-block"
                aria-label="Learn more about DispoRx and our team"
              >
                Learn about our team
              </a>
            </div>
          </div>
          <div>
            <motion.img
              src="/trusted_technology_doctor.jpg"
              alt="Healthcare professional using DispoRx technology for improved ER efficiency"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
              width="800"
              height="800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


