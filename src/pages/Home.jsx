import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const NAVY = '#0D0D1A'

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${c.home_hero_image})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <img src={c.home_hero_image} data-cms="Home - Hero - Image" alt="" style={{ display: 'none' }} />

      {/* Directional gradient — solid navy left, fades to near-transparent right */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(105deg, rgba(13,13,26,0.97) 0%, rgba(13,13,26,0.82) 42%, rgba(13,13,26,0.18) 100%)'
      }} />

      {/* Thin green baseline */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: GREEN }} />

      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
        {/* Eyebrow label */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px" style={{ backgroundColor: GREEN }} />
          <span className="font-body text-xs tracking-[0.25em] uppercase font-medium" style={{ color: GREEN }}>
            Henderson, West Auckland
          </span>
        </div>

        <h1
          data-cms="Home - Hero - Heading"
          className="font-heading uppercase text-white leading-none mb-6 max-w-2xl"
          style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
        >
          {c.home_hero_heading}
        </h1>

        <p
          data-cms="Home - Hero - Sub"
          className="text-white/65 font-body text-base md:text-lg mb-10 max-w-sm"
        >
          {c.home_hero_sub}
        </p>

        <div className="flex items-center gap-6">
          <a
            data-cms="Home - Hero - CTA"
            href="#membership"
            onClick={(e) => { e.preventDefault(); document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-body font-medium px-8 py-3.5 rounded-full text-base text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: GREEN }}
          >
            {c.home_hero_cta}
          </a>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/50 hover:text-white font-body text-sm transition-colors flex items-center gap-2"
          >
            Learn more <span className="text-base">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-navy-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image — full bleed, no framing */}
        <AnimatedSection className="relative min-h-[420px] lg:min-h-[600px]">
          <img
            src={c.home_about_image}
            data-cms="Home - About - Image"
            alt="Arena Fitness"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Est. badge sits in the image itself */}
          <div
            className="absolute bottom-8 right-8 px-5 py-3 rounded-lg"
            style={{ backgroundColor: 'rgba(13,13,26,0.88)', border: `1px solid rgba(122,178,4,0.3)` }}
          >
            <p className="font-heading uppercase text-xl leading-none" style={{ color: GREEN }}>Est. 2010</p>
            <p className="text-[#B0B0C0] text-xs font-body mt-0.5">Trusted by West Auckland</p>
          </div>
        </AnimatedSection>

        {/* Text — generous padding */}
        <AnimatedSection delay={100}>
          <div className="py-20 px-8 lg:px-16 flex flex-col justify-center">
            <p
              data-cms="Home - About - Label"
              className="font-body text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: GREEN }}
            >
              {c.home_about_label}
            </p>
            <h2
              data-cms="Home - About - Heading"
              className="font-heading uppercase text-white text-4xl md:text-5xl leading-none mb-4"
            >
              {c.home_about_heading}
            </h2>
            <div className="w-10 h-px mb-7" style={{ backgroundColor: GREEN }} />
            <p
              data-cms="Home - About - Body"
              className="text-[#B0B0C0] font-body text-base leading-relaxed mb-8"
            >
              {c.home_about_body}
            </p>

            <ul data-cms-repeater="Home - About - Features" data-cms-shape="chip"
              data-cms-min="3" data-cms-max="6" data-cms-overflow="wrap"
              className="space-y-3 mb-10">
              {c.home_about_features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm">
                  <span
                    className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: GREEN }}
                  >✓</span>
                  <span data-cms-field="text" className="text-white/85">{f.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#membership"
              onClick={(e) => { e.preventDefault(); document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-cms="Home - About - CTA"
              className="self-start font-body font-medium px-8 py-3.5 rounded-full text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {c.home_about_cta}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="bg-navy py-20 px-4 md:px-8">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                data-cms="Home - Gallery - Heading"
                className="font-heading uppercase text-white text-3xl md:text-4xl leading-none"
              >
                {c.home_gallery_heading}
              </h2>
              <div className="w-10 h-px mt-3" style={{ backgroundColor: GREEN }} />
            </div>
            <p className="text-[#B0B0C0] font-body text-sm hidden md:block">Inside The Trusts Arena, Henderson</p>
          </div>

          <div data-cms-repeater="Home - Gallery" data-cms-min="3" data-cms-recommend="6" data-cms-max="12" data-cms-overflow="wrap"
            className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {c.home_gallery.map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-sm group" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.image}
                  data-cms-field="image"
                  alt={`Arena Fitness ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-400"
                  style={{ backgroundColor: GREEN }}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function Memberships() {
  return (
    <section id="membership" className="bg-navy-dark py-24 px-4">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2
              data-cms="Home - Memberships - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none mb-3"
            >
              {c.home_memberships_heading}
            </h2>
            <div className="w-10 h-px" style={{ backgroundColor: GREEN }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {c.home_memberships.map((plan, i) => {
              const isFeatured = plan.popular === true
              return (
                <AnimatedSection key={plan.plan} delay={i * 70}>
                  <div
                    className="relative flex flex-col rounded-2xl p-7 h-full transition-transform hover:-translate-y-1 duration-300"
                    style={isFeatured
                      ? { backgroundColor: GREEN }
                      : { backgroundColor: '#12121F', border: '1px solid #2A2A40' }
                    }
                  >
                    {isFeatured && (
                      <span
                        className="absolute -top-3 left-6 text-xs font-body font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: NAVY, color: GREEN }}
                      >
                        Most Popular
                      </span>
                    )}

                    <h3
                      data-cms={`Home - Memberships - Plan ${i + 1}`}
                      className="font-heading uppercase text-2xl leading-none mb-4"
                      style={{ color: isFeatured ? NAVY : '#ffffff' }}
                    >
                      {plan.plan}
                    </h3>

                    <p
                      data-cms={`Home - Memberships - Price ${i + 1}`}
                      className="font-heading text-5xl leading-none mb-1"
                      style={{ color: isFeatured ? NAVY : GREEN }}
                    >
                      {plan.price}
                    </p>
                    <p
                      data-cms={`Home - Memberships - Period ${i + 1}`}
                      className="font-body text-sm mb-6"
                      style={{ color: isFeatured ? 'rgba(13,13,26,0.65)' : '#B0B0C0' }}
                    >
                      {plan.period}
                    </p>

                    <ul className="space-y-2.5 mb-7 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 font-body text-sm">
                          <span
                            className="mt-0.5 flex-shrink-0 font-bold"
                            style={{ color: isFeatured ? NAVY : GREEN }}
                          >✓</span>
                          <span style={{ color: isFeatured ? 'rgba(13,13,26,0.8)' : '#B0B0C0' }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      data-cms={`Home - Memberships - CTA ${i + 1}`}
                      href="https://arenafitnessandboxing.co.nz/sign-up-online/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center font-body font-semibold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90 mb-4"
                      style={isFeatured
                        ? { backgroundColor: NAVY, color: '#ffffff' }
                        : { backgroundColor: GREEN, color: '#ffffff' }
                      }
                    >
                      {plan.cta}
                    </a>
                    <p
                      data-cms={`Home - Memberships - Note ${i + 1}`}
                      className="font-body text-xs text-center leading-relaxed"
                      style={{ color: isFeatured ? 'rgba(13,13,26,0.55)' : '#6B6B80' }}
                    >
                      {plan.note}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              to="/membership"
              data-cms="Home - Memberships - View All"
              className="inline-flex items-center gap-2 font-heading uppercase tracking-widest text-sm transition-opacity hover:opacity-70"
              style={{ color: GREEN }}
            >
              {c.home_memberships_view_all}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

const classNumbers = ['01', '02', '03', '04', '05', '06']

function Classes() {
  return (
    <section id="classes" className="bg-navy py-24 px-4">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2
              data-cms="Home - Classes - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none mb-3"
            >
              {c.home_classes_heading}
            </h2>
            <div className="w-10 h-px" style={{ backgroundColor: GREEN }} />
          </div>

          <div data-cms-repeater="Home - Classes" data-cms-shape="card" data-cms-min="3" data-cms-recommend="6" data-cms-max="9" data-cms-overflow="wrap" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.home_classes.map((item, i) => (
              <div key={item.title}
                className="relative flex flex-col rounded-2xl p-7 h-full transition-transform hover:-translate-y-1 duration-300 overflow-hidden"
                style={{ backgroundColor: '#12121F', border: '1px solid #2A2A40' }}
              >
                  <span
                    className="absolute top-5 right-6 font-heading text-6xl leading-none select-none"
                    style={{ color: 'rgba(122,178,4,0.12)' }}
                  >
                    {classNumbers[i % classNumbers.length]}
                  </span>

                  <span
                    className="font-heading text-sm mb-4 block"
                    style={{ color: GREEN }}
                  >
                    {classNumbers[i % classNumbers.length]}
                  </span>

                  <h3
                    data-cms-field="title"
                    className="font-heading uppercase text-white text-xl leading-none mb-3"
                  >
                    {item.title}
                  </h3>
                  <p
                    data-cms-field="desc"
                    className="text-[#B0B0C0] font-body text-sm leading-relaxed flex-1 mb-5"
                  >
                    {item.desc}
                  </p>
                  <a
                    href="https://waitakere.gymmasteronline.com/portal/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium transition-opacity hover:opacity-75"
                    style={{ color: GREEN }}
                  >
                    Book a Class →
                  </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function Stats() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: GREEN }}>
      <AnimatedSection>
        <div data-cms-repeater="Home - Stats" data-cms-shape="stat"
          data-cms-min="2" data-cms-recommend="4" data-cms-max="8" data-cms-overflow="wrap"
          className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {c.home_stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 80}>
              <div>
                <p
                  data-cms-field="value"
                  className="font-heading text-5xl md:text-6xl uppercase leading-none mb-2 text-white"
                >
                  {stat.value}
                </p>
                <div className="w-6 h-px mx-auto mb-2" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
                <p
                  data-cms-field="label"
                  className="font-body text-xs uppercase tracking-widest font-medium"
                  style={{ color: 'rgba(0,25,0,0.6)' }}
                >
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="bg-navy-dark py-24 px-4">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="w-8 h-px" style={{ backgroundColor: GREEN }} />
            <span className="font-body text-xs tracking-[0.25em] uppercase font-medium" style={{ color: GREEN }}>
              Ready to start?
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: GREEN }} />
          </div>

          <h2
            data-cms="Home - CTA - Heading"
            className="font-heading uppercase text-white text-4xl md:text-6xl leading-none mb-5"
          >
            {c.home_cta_heading}
          </h2>
          <p
            data-cms="Home - CTA - Body"
            className="text-[#B0B0C0] font-body text-base leading-relaxed mb-8 max-w-xl mx-auto"
          >
            {c.home_cta_body}
          </p>
          <p
            data-cms="Home - CTA - Phone"
            className="font-heading text-4xl md:text-5xl leading-none mb-10"
            style={{ color: GREEN }}
          >
            {c.phone}
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            data-cms="Home - CTA - Button"
            className="inline-block font-body font-medium px-10 py-4 rounded-full text-white text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: GREEN }}
          >
            {c.home_cta_button}
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputStyle = { backgroundColor: '#0D0D1A', border: '1px solid #2A2A40', borderRadius: '0.75rem', width: '100%', padding: '0.875rem 1rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', outline: 'none' }

  return (
    <section id="contact" className="bg-navy py-24 px-4">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase font-medium mb-4" style={{ color: GREEN }}>
              Come say hi
            </p>
            <h2
              data-cms="Home - Contact - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none mb-3"
            >
              {c.contact_heading}
            </h2>
            <div className="w-10 h-px mb-10" style={{ backgroundColor: GREEN }} />

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Address" className="text-[#B0B0C0] font-body text-sm leading-relaxed">
                  {c.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={16} className="flex-shrink-0" style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Phone" className="text-[#B0B0C0] font-body text-sm">{c.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={16} className="flex-shrink-0" style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Email" className="text-[#B0B0C0] font-body text-sm">{c.email}</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: '#12121F', borderLeft: `3px solid ${GREEN}` }}>
              <h3 className="font-heading uppercase text-white text-base mb-4 tracking-wide">Opening Hours</h3>
              <ul className="space-y-1.5 text-[#B0B0C0] text-sm font-body">
                <li>Mon – Thu: 5am – 9:30pm</li>
                <li>Fri: 5am – 8pm</li>
                <li>Sat – Sun: 6am – 7pm</li>
              </ul>
            </div>

            <a
              data-cms="Home - Contact - Button"
              href="mailto:fitness@thetrustsarena.co.nz"
              className="inline-block font-body font-medium px-7 py-3 rounded-full text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {c.contact_button}
            </a>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-64">
                <div className="text-center">
                  <div className="text-5xl mb-4" style={{ color: GREEN }}>✓</div>
                  <h3 className="font-heading uppercase text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-[#B0B0C0] font-body text-sm">We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#B0B0C0] text-xs font-body uppercase tracking-wider mb-2">Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    style={inputStyle} placeholder="Your name"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'} />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-xs font-body uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    style={inputStyle} placeholder="your@email.com"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'} />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-xs font-body uppercase tracking-wider mb-2">Phone *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                    style={inputStyle} placeholder="Your phone number"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'} />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-xs font-body uppercase tracking-wider mb-2">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    style={{ ...inputStyle, resize: 'none' }} placeholder="How can we help?"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'} />
                </div>
                <button type="submit"
                  className="w-full font-body font-medium py-3.5 rounded-full text-white text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GREEN }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Memberships />
      <Classes />
      <Stats />
      <CTABanner />
      <Contact />
    </main>
  )
}
