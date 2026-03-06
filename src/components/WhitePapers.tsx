import { useState } from 'react'

const whitePapers = [
  {
    id: 1,
    title: 'Addressing the ER Crisis',
    subtitle: 'How AI-Powered Workflows Reduce Wait Times and Improve Patient Outcomes',
    description: 'Emergency rooms (ERs) across the country are facing a growing crisis—overcrowding, resource mismanagement, and delays are putting immense pressure on hospitals, staff, and patients. As wait times increase and staff burnout rises, patient outcomes decline, and operational costs soar. Learn how empowering acute care specialists can transform emergency care delivery.',
    logo: '/case_study_logo_01.png',
    image: '/medical_employees_looking_at_computer.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'The True Cost of ER Inefficiency',
    subtitle: 'Data-Driven Guide to Reducing Wait Times and Increasing Throughput',
    description: 'Emergency room inefficiencies are costing hospitals millions in lost revenue, straining staff, and delaying critical patient care. In this whitepaper, we break down the financial impact of ER bottlenecks and provide actionable strategies to reduce wait times, improve patient throughput, optimize resource allocation, and empower acute care specialists for better outcomes.',
    logo: '/case_study_logo_02.png',
    image: '/feature_true_cost_image_computer.jpg',
    link: '#',
  },
]

export default function WhitePapers() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePaper = whitePapers[activeIndex]

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            White Papers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dive into our expert whitepapers to discover proven strategies, data-driven insights, and innovative solutions for improving ER efficiency, empowering acute care specialists, and enhancing patient outcomes.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${activePaper.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />

            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <img
                    src={activePaper.logo}
                    alt={activePaper.title}
                    className="h-12 mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-white mb-3">{activePaper.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 pb-4 border-b border-gray-700">
                    {activePaper.subtitle}
                  </p>
                  <p className="text-gray-200 mb-6 leading-relaxed">{activePaper.description}</p>
                  <a
                    href={activePaper.link}
                    className="inline-block rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
                  >
                    Read Paper
                  </a>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveIndex((prev) => (prev === 0 ? whitePapers.length - 1 : prev - 1))}
                      className="rounded-lg bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                      aria-label="Previous"
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveIndex((prev) => (prev === whitePapers.length - 1 ? 0 : prev + 1))}
                      className="rounded-lg bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                      aria-label="Next"
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {whitePapers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? 'w-8 bg-primary-500' : 'w-2 bg-white/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

