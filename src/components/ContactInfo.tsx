export default function ContactInfo() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Google Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Omaha%2C%20ne&t=m&z=10&output=embed&iwloc=near"
              title="DispoRx Location - Omaha, NE"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Schedule a Call Today</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">
                    Omaha | Atlanta | Austin | Denver
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-gray-900">(402) 214-7196</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-900">Monday - Friday, 8:00am - 6:00pm</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <a
                    href="mailto:info@disporx.com"
                    className="text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    info@disporx.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


