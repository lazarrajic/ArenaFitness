import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import c from '../../content.js'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Classes', href: '#classes' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '/blog' },
  { label: '8-Week', href: '/8-week' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = '/' + href
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-navy-mid' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex-shrink-0">
              <img
                src={c.logo}
                data-cms="Nav - Nav - Logo"
                alt="Arena Fitness"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) =>
                link.href.startsWith('#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-white hover:text-orange transition-colors text-sm font-body font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white hover:text-orange transition-colors text-sm font-body font-medium"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="#membership"
                onClick={(e) => { e.preventDefault(); handleNavClick('#membership') }}
                data-cms="Nav - Nav - CTA"
                className="bg-orange hover:bg-orange-hover text-white text-sm font-body font-medium px-5 py-2 rounded-full transition-colors"
              >
                {c.nav_cta}
              </a>
            </div>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-mid flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white hover:text-orange text-2xl font-heading uppercase transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-orange text-2xl font-heading uppercase transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="#membership"
            onClick={(e) => { e.preventDefault(); handleNavClick('#membership') }}
            className="bg-orange hover:bg-orange-hover text-white text-xl font-heading uppercase px-8 py-3 rounded-full transition-colors mt-4"
          >
            {c.nav_cta}
          </a>
        </div>
      )}
    </>
  )
}
