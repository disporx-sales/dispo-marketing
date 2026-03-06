import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Workflow from '../components/Workflow'

// Lazy load heavy components
const HowItWorks = lazy(() => import('../components/HowItWorks'))
const HospitalTypes = lazy(() => import('../components/HospitalTypes'))

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-96" />}>
        <HowItWorks />
      </Suspense>
      <Stats />
      <Workflow />
      <Suspense fallback={<div className="h-96" />}>
        <HospitalTypes />
      </Suspense>
    </>
  )
}

