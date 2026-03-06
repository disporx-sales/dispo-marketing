import { Link } from 'react-router-dom'

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <svg width="416" height="444" viewBox="0 0 416 444" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.08"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M240.875 615.746C389.471 695.311 562.783 640.474 631.69 504.818C700.597 369.163 645.201 191.864 496.604 112.299C348.007 32.7335 174.696 87.5709 105.789 223.227C36.8815 358.882 92.278 536.18 240.875 615.746ZM208.043 680.381C388.035 776.757 605.894 713.247 694.644 538.527C783.394 363.807 709.428 144.04 529.436 47.6636C349.443 -48.7125 131.584 14.7978 42.8343 189.518C-45.916 364.238 28.0504 584.005 208.043 680.381Z"
                fill="currentColor"
                className="text-primary-500"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg font-medium text-gray-600 mb-3">Ready to get started?</p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Don't Hesitate to Contact Us
              </h2>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
                >
                  Go to Contact Form
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

