import { Link } from 'react-router-dom'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/disporx',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <img
            alt="DispoRx Logo"
            src="/Dispo Logo_Dispo - Stacked (white) (1).svg"
            className="h-12 mx-auto mb-8"
            width="324"
            height="95"
          />
          <div className="flex justify-center gap-x-6 mb-8">
            {navigation.main.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm/6 font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-block rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link
              to="/demo"
              className="inline-block rounded-md border border-gray-600 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-xs hover:bg-gray-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors"
            >
              Request Test Environment
            </Link>
          </div>
          <div className="flex justify-center gap-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm/6 text-center text-gray-400">
            © 2025 DispoRx. All rights reserved.
          </p>
          <p className="text-xs text-center text-gray-500 mt-4">
            *DispoRx has engaged in a SOC 2 audit. The observation period is expected to begin mid-February 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}

