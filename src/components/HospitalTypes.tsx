'use client'

import { useState, useEffect } from 'react'

const hospitalTypes = [
  {
    id: 'large',
    name: 'Large Health Systems',
    description: 'Designed for multi-facility networks managing thousands of patients daily. DispoRx enables centralized oversight, streamlines operations across facilities, and ensures consistent patient care through AI-powered workflows, reducing wait times and cutting operational costs system',
    image: '/large_health_system_home.jpg',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.747 5.754 18 7.5 18s3.332.747 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.747 4.5 1.253v13C19.832 18.747 18.247 18 16.5 18c-1.746 0-3.332.747-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'regional',
    name: 'Regional Hospitals',
    description: 'Perfect for mid-sized healthcare networks that need scalable solutions. DispoRx improves patient flow, enhances resource allocation, and minimizes bottlenecks to increase throughput and optimize staff performance, ensuring faster, more efficient care delivery.',
    image: '/regional_health_system_home.jpg',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'community',
    name: 'Community Hospitals',
    description: 'Tailored for high-volume, single-facility emergency departments handling hundreds of daily visits. DispoRx prioritizes critical cases, reduces delays, and provides real-time insights to help ER teams and acute care specialists manage patient surges and deliver high-quality care efficiently.',
    image: '/community_health_system_home.jpg',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'va',
    name: 'VA Hospitals',
    description: 'Purpose-built to support veteran-focused healthcare environments. DispoRx enhances operational efficiency, reduces critical wait times, and ensures seamless communication between care teams to deliver the timely, precise care our veterans deserve.',
    image: '/VA_hospital_home.jpg',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function HospitalTypes() {
  const [activeTab, setActiveTab] = useState('large')

  const activeHospital = hospitalTypes.find((h) => h.id === activeTab) || hospitalTypes[0]

  // Preload all images on mount
  useEffect(() => {
    hospitalTypes.forEach((type) => {
      const img = new Image()
      img.src = type.image
    })
  }, [])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Built to Serve Every ER – No Matter the Scale
          </h2>
        </div>
        
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {hospitalTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === type.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.icon}
                {type.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div className="min-h-[120px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{activeHospital.name}</h3>
                <p className="text-gray-600">{activeHospital.description}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                {/* Render all images, only show active one */}
                {hospitalTypes.map((type) => (
                  <img
                    key={type.id}
                    src={type.image}
                    alt={type.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      activeTab === type.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



