import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    // Load HubSpot meetings script
    if (window.hbspt && window.hbspt.meetings) {
      window.hbspt.meetings.create('.meetings-iframe-container')
    } else {
      // Load the script if not already loaded
      const script = document.createElement('script')
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      script.async = true
      script.onload = () => {
        if (window.hbspt && window.hbspt.meetings) {
          window.hbspt.meetings.create('.meetings-iframe-container')
        }
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section id="contact-form" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Let's Revolutionize Patient Care
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're a healthcare provider, investor, or just curious about DispoRx, we're here to connect. Share your details below, and we'll be in touch to help improve emergency care outcomes with you.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/ryan-mack3?embed=true"></div>
        </div>
      </div>
    </section>
  )
}


