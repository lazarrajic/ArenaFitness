import { useState } from 'react'
import {
  Activity,
  Zap,
  Bike,
  Shield,
  Dumbbell,
  Heart,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const DOT_BG = { backgroundImage: `radial-gradient(circle, rgba(122,178,4,0.07) 1px, transparent 1px)`, backgroundSize: '28px 28px' }

function Accent({ center = true }) {
  return <div className={`h-1 w-14 rounded-full mt-3 mb-10 ${center ? 'mx-auto' : ''}`} style={{ backgroundColor: GREEN }} />
}

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${c.home_hero_image})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <img src={c.home_hero_image} data-cms="Home - Hero - Image" alt="" style={{ display: 'none' }} />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />
      {/* Green left-wash */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(122,178,4,0.13) 0%, transparent 50%)' }} />
      {/* Green bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: GREEN }} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          data-cms="Home - Hero - Heading"
          className="font-heading uppercase text-white text-5xl md:text-7xl leading-none max-w-4xl mb-4"
        >
          {c.home_hero_heading}
        </h1>
        <p
          data-cms="Home - Hero - Sub"
          className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-body"
        >
          {c.home_hero_sub}
        </p>
        <a
          data-cms="Home - Hero - CTA"
          href="#membership"
          onClick={(e) => { e.preventDefault(); document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="bg-orange hover:bg-orange-hover text-white font-body font-medium px-10 py-3.5 rounded-full text-lg transition-colors shadow-lg"
        >
          {c.home_hero_cta}
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      className="py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(122,178,4,0.09) 0%, #12121F 38%)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p
            data-cms="Home - About - Label"
            className="uppercase text-orange text-xs font-heading tracking-[0.2em] mb-3"
          >
            {c.home_about_label}
          </p>
          <h2
            data-cms="Home - About - Heading"
            className="font-heading uppercase text-white text-4xl md:text-6xl leading-none mb-2"
          >
            {c.home_about_heading}
          </h2>
          <Accent center={false} />
          <p
            data-cms="Home - About - Body"
            className="text-[#B0B0C0] font-body text-base leading-relaxed mb-8 max-w-lg"
          >
            {c.home_about_body}
          </p>
          <ul className="space-y-3 mb-10">
            {c.home_about_features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: GREEN }}>✓</span>
                <span data-cms={`Home - About - Feature ${i + 1}`} className="text-white">{f.text}</span>
              </li>
            ))}
          </ul>
          <a
            href="#membership"
            onClick={(e) => { e.preventDefault(); document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' }) }}
            data-cms="Home - About - CTA"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-body font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            {c.home_about_cta}
            <span className="text-lg leading-none">→</span>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-lg opacity-25" style={{ border: `2px solid ${GREEN}` }} />
            <img
              src={c.home_about_image}
              data-cms="Home - About - Image"
              alt="Arena Fitness"
              className="relative w-full rounded-lg object-cover"
              style={{ maxHeight: '540px' }}
            />
            <div className="absolute bottom-6 -left-6 bg-navy-mid border border-navy-border rounded-lg px-5 py-4 shadow-xl">
              <p className="font-heading uppercase text-2xl leading-none" style={{ color: GREEN }}>Est. 2010</p>
              <p className="text-[#B0B0C0] text-xs font-body mt-1">Trusted by West Auckland</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="bg-navy py-16">
      <AnimatedSection>
        <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4">
          {c.home_gallery.map((item, i) => (
            <div key={i} className="relative h-72 w-80 flex-shrink-0 overflow-hidden rounded-sm group">
              <img
                src={item.image}
                data-cms={`Home - Gallery - Photo ${i + 1}`}
                alt={`Arena Fitness ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: GREEN }} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

function Memberships() {
  return (
    <section id="membership" className="relative bg-navy py-20 px-4" style={DOT_BG}>
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              data-cms="Home - Memberships - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none"
            >
              {c.home_memberships_heading}
            </h2>
            <Accent />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {c.home_memberships.map((plan, i) => (
              <AnimatedSection key={plan.plan} delay={i * 80}>
                <div
                  className={`relative flex flex-col bg-navy-dark border rounded-lg p-6 h-full transition-transform hover:-translate-y-1 duration-300 ${
                    plan.plan === '12-Month'
                      ? 'border-navy-border'
                      : 'border-navy-border'
                  }`}
                  style={plan.plan === '12-Month' ? { borderTop: `4px solid ${GREEN}` } : {}}
                >
                  {plan.plan === '12-Month' && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-body font-medium px-3 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: GREEN }}>
                      Most Popular
                    </span>
                  )}
                  <h3
                    data-cms={`Home - Memberships - Plan ${i + 1}`}
                    className="font-heading uppercase text-white text-2xl leading-none mb-3"
                  >
                    {plan.plan}
                  </h3>
                  <p
                    data-cms={`Home - Memberships - Price ${i + 1}`}
                    className="font-heading text-4xl leading-none mb-1"
                    style={{ color: GREEN }}
                  >
                    {plan.price}
                  </p>
                  <p
                    data-cms={`Home - Memberships - Period ${i + 1}`}
                    className="text-[#B0B0C0] text-sm font-body mb-5"
                  >
                    {plan.period}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#B0B0C0] text-sm font-body">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: GREEN }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    data-cms={`Home - Memberships - CTA ${i + 1}`}
                    href="https://arenafitnessandboxing.co.nz/sign-up-online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-white font-body font-medium px-6 py-2.5 rounded-full transition-colors mb-3"
                    style={{ backgroundColor: GREEN }}
                  >
                    {plan.cta}
                  </a>
                  <p
                    data-cms={`Home - Memberships - Note ${i + 1}`}
                    className="text-[#B0B0C0] text-xs font-body text-center leading-relaxed"
                  >
                    {plan.note}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

const classIconMap = {
  Pilates: Activity,
  'Arena HIIT 30': Zap,
  'Cycle Core': Bike,
  'Box-Fit': Shield,
  'Arena Functional': Dumbbell,
  'Box Vita': Heart,
}

function Classes() {
  return (
    <section id="classes" className="bg-navy-dark py-20 px-4">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              data-cms="Home - Classes - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none"
            >
              {c.home_classes_heading}
            </h2>
            <Accent />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.home_classes.map((item, i) => {
              const Icon = classIconMap[item.title] || Activity
              return (
                <AnimatedSection key={item.title} delay={i * 60}>
                  <div className="relative bg-navy p-6 rounded-lg h-full flex flex-col overflow-hidden group hover:-translate-y-1 transition-transform duration-300" style={{ borderLeft: `4px solid ${GREEN}` }}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 -translate-y-8 translate-x-8" style={{ backgroundColor: GREEN }} />
                    <div className="mb-3" style={{ color: GREEN }}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3
                      data-cms={`Home - Classes - Title ${i + 1}`}
                      className="font-heading uppercase text-white text-xl leading-none mb-2"
                    >
                      {item.title}
                    </h3>
                    <p
                      data-cms={`Home - Classes - Desc ${i + 1}`}
                      className="text-[#B0B0C0] font-body text-sm leading-relaxed flex-1 mb-4"
                    >
                      {item.desc}
                    </p>
                    <a
                      href="https://waitakere.gymmasteronline.com/portal/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body hover:underline font-medium"
                      style={{ color: GREEN }}
                    >
                      Book a Class →
                    </a>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function Stats() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: GREEN }}>
      <AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {c.home_stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 80}>
              <div>
                <p
                  data-cms={`Home - Stats - Value ${i + 1}`}
                  className="font-heading text-5xl uppercase leading-none mb-2 text-white"
                >
                  {stat.value}
                </p>
                <p
                  data-cms={`Home - Stats - Label ${i + 1}`}
                  className="text-sm font-body font-medium"
                  style={{ color: 'rgba(0,20,0,0.65)' }}
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
    <section className="bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <AnimatedSection>
          <div className="py-20 px-8 lg:px-14">
            <h2
              data-cms="Home - CTA - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none mb-2"
            >
              {c.home_cta_heading}
            </h2>
            <div className="h-1 w-14 rounded-full mb-6" style={{ backgroundColor: GREEN }} />
            <p
              data-cms="Home - CTA - Body"
              className="text-[#B0B0C0] font-body text-base leading-relaxed max-w-md"
            >
              {c.home_cta_body}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="flex flex-col items-center justify-center py-20 px-8 lg:px-14 text-center bg-navy-dark border-t lg:border-t-0 lg:border-l border-navy-border">
            <p className="text-[#B0B0C0] font-body text-sm uppercase tracking-widest mb-2">Call us today</p>
            <p
              data-cms="Home - CTA - Phone"
              className="font-heading text-4xl md:text-5xl leading-none mb-8"
              style={{ color: GREEN }}
            >
              {c.phone}
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-cms="Home - CTA - Button"
              className="inline-block text-white font-body font-medium px-8 py-3.5 rounded-full text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {c.home_cta_button}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="relative bg-navy py-20 px-4" style={DOT_BG}>
      <AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              data-cms="Home - Contact - Heading"
              className="font-heading uppercase text-white text-3xl md:text-5xl leading-none mb-2"
            >
              {c.contact_heading}
            </h2>
            <div className="h-1 w-14 rounded-full mb-8" style={{ backgroundColor: GREEN }} />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="flex-shrink-0 mt-0.5" size={20} style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Address" className="text-[#B0B0C0] font-body text-sm leading-relaxed">
                  {c.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="flex-shrink-0" size={20} style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Phone" className="text-[#B0B0C0] font-body text-sm">
                  {c.phone}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="flex-shrink-0" size={20} style={{ color: GREEN }} />
                <p data-cms="Home - Contact - Email" className="text-[#B0B0C0] font-body text-sm">
                  {c.email}
                </p>
              </div>
            </div>

            <div className="mt-8 p-5 bg-navy-dark border border-navy-border rounded-lg" style={{ borderLeft: `3px solid ${GREEN}` }}>
              <h3 className="font-heading uppercase text-white text-lg mb-3">Opening Hours</h3>
              <ul className="space-y-1.5 text-[#B0B0C0] text-sm font-body">
                <li>Mon – Thu: 5am – 9:30pm</li>
                <li>Fri: 5am – 8pm</li>
                <li>Sat – Sun: 6am – 7pm</li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                data-cms="Home - Contact - Button"
                href="mailto:fitness@thetrustsarena.co.nz"
                className="inline-block text-white font-body font-medium px-7 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN }}
              >
                {c.contact_button}
              </a>
            </div>
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
                  <label className="block text-[#B0B0C0] text-sm font-body mb-1.5">Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full bg-navy-dark border border-navy-border rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none transition-colors"
                    style={{ '--tw-ring-color': GREEN }}
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-sm font-body mb-1.5">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-navy-dark border border-navy-border rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none transition-colors"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-sm font-body mb-1.5">Phone *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                    className="w-full bg-navy-dark border border-navy-border rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none transition-colors"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-[#B0B0C0] text-sm font-body mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    className="w-full bg-navy-dark border border-navy-border rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none transition-colors resize-none"
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder="How can we help?" />
                </div>
                <button type="submit"
                  className="w-full text-white font-body font-medium py-3 rounded-full transition-opacity hover:opacity-90 text-base"
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
