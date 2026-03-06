import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="bg-primary-600">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Schedule a Demo Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-primary-100">
            Curious how DispoRx can help your hospital?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


