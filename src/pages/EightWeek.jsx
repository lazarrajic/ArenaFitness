import { useEffect, useRef, useState } from 'react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const NAVY = '#0D0D1A'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill={GREEN} fillOpacity="0.15" />
      <path d="M5.5 9L7.5 11L12.5 6.5" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function EightWeek() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main style={{ backgroundColor: NAVY }}>
      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={c.challenge_hero_image}
            data-cms="EightWeek - Hero - Image"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(13,13,26,0.45) 0%, rgba(13,13,26,0.96) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 pt-36">
          <p
            data-cms="EightWeek - Hero - Eyebrow"
            className="font-heading uppercase tracking-widest text-sm mb-4"
            style={{ color: GREEN }}
          >
            Arena Fitness & Boxing
          </p>
          <h1
            data-cms="EightWeek - Hero - Heading"
            className="font-heading uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            {c.challenge_hero_heading}
          </h1>
          <p
            data-cms="EightWeek - Hero - Sub"
            className="font-body text-[#B0B0C0] text-lg md:text-xl mt-5 max-w-2xl leading-relaxed"
          >
            {c.challenge_hero_sub}
          </p>
          <button
            data-cms="EightWeek - Hero - CTA"
            onClick={scrollToForm}
            className="mt-8 font-heading uppercase tracking-widest text-sm px-8 py-3.5 rounded-full text-white transition-colors"
            style={{ backgroundColor: GREEN }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
          >
            {c.challenge_hero_cta}
          </button>
        </div>
      </section>

      {/* Intro + Results grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-heading uppercase tracking-widest text-xs mb-5" style={{ color: GREEN }}>
                About the Programme
              </p>
              <h2
                data-cms="EightWeek - Intro - Heading"
                className="font-heading uppercase text-white text-5xl md:text-6xl leading-none mb-6"
              >
                {c.challenge_intro_heading}
              </h2>
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: GREEN }} />
              <p
                data-cms="EightWeek - Intro - Body"
                className="text-[#B0B0C0] text-lg leading-relaxed"
              >
                {c.challenge_intro_body}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {c.challenge_results.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-8 text-center"
                    style={{ backgroundColor: '#12121F', border: '1px solid #2A2A40' }}
                  >
                    <p
                      data-cms={`EightWeek - Result ${i+1} - Value`}
                      className="font-heading uppercase text-4xl mb-2"
                      style={{ color: i === 0 ? GREEN : 'white' }}
                    >
                      {result.value}
                    </p>
                    <p
                      data-cms={`EightWeek - Result ${i+1} - Label`}
                      className="text-[#B0B0C0] text-xs uppercase tracking-widest font-heading"
                    >
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#12121F' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <h2
              data-cms="EightWeek - Phases - Heading"
              className="font-heading uppercase text-white text-5xl md:text-6xl"
            >
              {c.challenge_phases_heading}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.challenge_phases.map((phase, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="relative overflow-hidden rounded-2xl p-10 h-full"
                  style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
                >
                  <span
                    className="absolute top-4 right-6 font-heading leading-none select-none pointer-events-none"
                    style={{ fontSize: '7rem', color: 'rgba(122,178,4,0.10)' }}
                  >
                    {phase.number}
                  </span>
                  <div className="w-8 h-1 rounded-full mb-8" style={{ backgroundColor: GREEN }} />
                  <p
                    data-cms={`EightWeek - Phase ${i+1} - Number`}
                    className="font-heading uppercase tracking-widest text-xs mb-3"
                    style={{ color: GREEN }}
                  >
                    Phase {phase.number}
                  </p>
                  <h3
                    data-cms={`EightWeek - Phase ${i+1} - Title`}
                    className="font-heading uppercase text-white text-3xl mb-4"
                  >
                    {phase.title}
                  </h3>
                  <p
                    data-cms={`EightWeek - Phase ${i+1} - Desc`}
                    className="text-[#B0B0C0] text-sm leading-relaxed"
                  >
                    {phase.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="font-heading uppercase tracking-widest text-xs mb-5" style={{ color: GREEN }}>
                Everything You Need
              </p>
              <h2
                data-cms="EightWeek - Includes - Heading"
                className="font-heading uppercase text-white text-5xl md:text-6xl leading-none"
              >
                {c.challenge_includes_heading}
              </h2>
              <div className="w-12 h-1 rounded-full mt-8" style={{ backgroundColor: GREEN }} />
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {c.challenge_includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p
                      data-cms={`EightWeek - Include ${i+1} - Text`}
                      className="text-[#B0B0C0] text-sm leading-relaxed"
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Green stats bar */}
      <section className="py-20" style={{ backgroundColor: GREEN }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {c.challenge_results.map((result, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div>
                  <p
                    data-cms={`EightWeek - Stat ${i+1} - Value`}
                    className="font-heading uppercase text-white text-5xl md:text-6xl leading-none"
                  >
                    {result.value}
                  </p>
                  <p
                    data-cms={`EightWeek - Stat ${i+1} - Label`}
                    className="font-heading uppercase tracking-widest text-xs text-white mt-2"
                    style={{ opacity: 0.8 }}
                  >
                    {result.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        ref={formRef}
        id="challenge-enquiry"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#12121F' }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
                <span className="font-heading uppercase tracking-widest text-xs" style={{ color: GREEN }}>
                  Register Interest
                </span>
                <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
              </div>
              <h2
                data-cms="EightWeek - CTA - Heading"
                className="font-heading uppercase text-white text-4xl md:text-6xl mb-4"
              >
                {c.challenge_cta_heading}
              </h2>
              <p
                data-cms="EightWeek - CTA - Body"
                className="text-[#B0B0C0] text-lg leading-relaxed max-w-2xl mx-auto"
              >
                {c.challenge_cta_body}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            {submitted ? (
              <div
                className="text-center py-16 rounded-2xl"
                style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: 'rgba(122,178,4,0.15)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-heading uppercase text-white text-2xl mb-2">You're Registered!</h3>
                <p className="text-[#B0B0C0]">We'll be in touch shortly with everything you need to get started.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-12 space-y-6"
                style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading uppercase tracking-widest text-xs text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-white text-sm font-body outline-none"
                      style={{ backgroundColor: 'rgba(42,42,64,0.5)', border: '1px solid #2A2A40' }}
                      onFocus={e => e.target.style.borderColor = GREEN}
                      onBlur={e => e.target.style.borderColor = '#2A2A40'}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-heading uppercase tracking-widest text-xs text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-white text-sm font-body outline-none"
                      style={{ backgroundColor: 'rgba(42,42,64,0.5)', border: '1px solid #2A2A40' }}
                      onFocus={e => e.target.style.borderColor = GREEN}
                      onBlur={e => e.target.style.borderColor = '#2A2A40'}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-heading uppercase tracking-widest text-xs text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={e => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm font-body outline-none"
                    style={{ backgroundColor: 'rgba(42,42,64,0.5)', border: '1px solid #2A2A40' }}
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block font-heading uppercase tracking-widest text-xs text-white mb-2">
                    Any Questions?
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm font-body outline-none resize-none"
                    style={{ backgroundColor: 'rgba(42,42,64,0.5)', border: '1px solid #2A2A40' }}
                    onFocus={e => e.target.style.borderColor = GREEN}
                    onBlur={e => e.target.style.borderColor = '#2A2A40'}
                    placeholder="Tell us about your goals or ask us anything..."
                  />
                </div>
                <button
                  type="submit"
                  data-cms="EightWeek - CTA - Button"
                  className="w-full font-heading uppercase tracking-widest text-sm py-4 rounded-full text-white transition-colors"
                  style={{ backgroundColor: GREEN }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
                >
                  {c.challenge_cta_button}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
