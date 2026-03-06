import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolledOnMobile, setIsScrolledOnMobile] = useState(false)
  const location = useLocation()
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Find the hero section using data attribute
    const findHeroSection = () => {
      return document.querySelector('section[data-hero-section]')
    }

    const handleScroll = () => {
      // On mobile, hide logo after scrolling down 100px
      if (window.innerWidth < 1024) {
        setIsScrolledOnMobile(window.scrollY > 100)
      }
      
      // Desktop behavior: hide when scrolled past hero
      const hero = findHeroSection()
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom
        setIsScrolledPastHero(heroBottom < 0)
      } else {
        // If no hero found, show header after initial load
        setIsScrolledPastHero(window.scrollY > 100)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  return (
    <>
      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header
        ref={heroRef}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <nav aria-label="Global" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Hidden when scrolled past hero on desktop, hidden after scroll on mobile */}
            <div className={`flex lg:flex-1 transition-opacity duration-300 ${
              isMobile 
                ? (isScrolledOnMobile ? 'opacity-0 pointer-events-none' : 'opacity-100')
                : (isScrolledPastHero ? 'opacity-0 pointer-events-none' : 'opacity-100')
            }`}>
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DispoRx</span>
                <img
                  alt="DispoRx Logo"
                  src={
                    location.pathname === '/' || location.pathname.startsWith('/resources')
                      ? "/Dispo Logo_Dispo - Stacked (blue text).svg"
                      : "/Dispo Logo_Dispo - Stacked (1).svg"
                  }
                  className="h-10 w-auto"
                  loading="eager"
                  width="324"
                  height="95"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered with rounded buttons - Always visible */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-white/95 text-gray-900 shadow-lg'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* CTA Buttons - Hidden when scrolled past hero */}
            <div className={`flex flex-1 items-center justify-end gap-x-3 transition-opacity duration-300 ${
              isScrolledPastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              {location.pathname !== '/demo' && (
                <Link
                  to="/demo"
                  className={`hidden lg:inline-flex rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-200 ${
                    location.pathname === '/' || location.pathname.startsWith('/resources') || location.pathname === '/contact'
                      ? 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                      : 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Try Demo
                </Link>
              )}
              <Link
                to="/contact"
                className="hidden lg:inline-flex rounded-full bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button - Always visible */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 backdrop-blur-sm transition-colors ${
                  location.pathname === '/' || location.pathname.startsWith('/resources') || location.pathname === '/contact' || location.pathname === '/demo'
                    ? 'text-white bg-black/30 hover:bg-black/50'
                    : 'text-gray-700 bg-gray-200/70 hover:bg-gray-300/70'
                }`}
                aria-label="Toggle menu"
              >
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-md p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">DispoRx</span>
                <img
                  alt="DispoRx Logo"
                  src="/Dispo Logo_Dispo - Stacked (white) (1).svg"
                  className="h-8 w-auto"
                  width="324"
                  height="95"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-all ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'text-white/90 hover:bg-white/10 hover:text-white'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 space-y-3">
                  {location.pathname !== '/demo' && (
                    <Link
                      to="/demo"
                      className="block w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-white/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Try Demo
                    </Link>
                  )}
                  <Link
                    to="/contact"
                    className="block w-full rounded-lg bg-primary-500 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}
