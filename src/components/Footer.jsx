import { Link } from 'react-router-dom'
import c from '../../content.js'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Membership', href: '/membership' },
  { label: 'Blog', href: '/blog' },
  { label: '8-Week Challenge', href: '/8-week' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={c.logo_footer}
              data-cms="Footer - Footer - Logo"
              alt="Arena Fitness"
              className="h-16 w-auto mb-4"
            />
            <p data-cms="Footer - Footer - Tagline" className="text-[#B0B0C0] text-sm leading-relaxed mb-4">
              {c.footer_tagline}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/ArenaFitnessAndBoxing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#B0B0C0] hover:text-orange transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading uppercase text-white text-lg mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#B0B0C0] hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading uppercase text-white text-lg mb-5 tracking-wide">Opening Hours</h3>
            <ul className="space-y-1.5 text-sm text-[#B0B0C0]">
              <li>Mon – Thu: 5am – 9:30pm</li>
              <li>Fri: 5am – 8pm</li>
              <li>Sat – Sun: 6am – 7pm</li>
            </ul>
            <div className="mt-6 space-y-1.5 text-sm">
              <p data-cms="Footer - Footer - Address" className="text-[#B0B0C0]">{c.address}</p>
              <p data-cms="Footer - Footer - Phone" className="text-[#B0B0C0]">{c.phone}</p>
              <p data-cms="Footer - Footer - Email" className="text-[#B0B0C0]">{c.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-border py-5">
        <p className="text-center text-[#B0B0C0] text-xs">
          &copy; 2024 Arena Fitness &amp; Boxing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
