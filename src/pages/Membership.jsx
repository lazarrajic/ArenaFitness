import { useEffect } from 'react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const NAVY = '#0D0D1A'

export default function Membership() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: NAVY }}>
      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: '56vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={c.membership_hero_image}
            data-cms="Membership - Hero - Image"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(13,13,26,0.45) 0%, rgba(13,13,26,0.96) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-36">
          <p
            data-cms="Membership - Hero - Eyebrow"
            className="font-heading uppercase tracking-widest text-sm mb-4"
            style={{ color: GREEN }}
          >
            Arena Fitness & Boxing
          </p>
          <h1
            data-cms="Membership - Hero - Heading"
            className="font-heading uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            {c.membership_hero_heading}
          </h1>
          <p
            data-cms="Membership - Hero - Sub"
            className="font-body text-[#B0B0C0] text-lg md:text-xl mt-5 max-w-2xl leading-relaxed"
          >
            {c.membership_hero_sub}
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <h2
              data-cms="Membership - Plans - Heading"
              className="font-heading uppercase text-white text-5xl md:text-6xl"
            >
              {c.membership_plans_heading}
            </h2>
            <p className="text-[#B0B0C0] mt-4 text-sm">
              *No joining fee on all memberships this May.
            </p>
          </AnimatedSection>

          <div data-cms-repeater="Membership - Plans" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.membership_plans.map((plan, i) => (
              <div key={i}
                className="relative flex flex-col rounded-2xl p-8 h-full transition-transform hover:-translate-y-1 duration-300"
                style={plan.popular
                  ? { backgroundColor: GREEN }
                  : { backgroundColor: '#12121F', border: '1px solid #2A2A40' }
                }
              >
                  {plan.popular && (
                    <span
                      className="absolute -top-3 left-6 text-xs font-body font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: NAVY, color: GREEN }}
                    >
                      Most Popular
                    </span>
                  )}

                  <h3
                    data-cms-field="name"
                    className="font-heading uppercase text-2xl leading-none mb-5"
                    style={{ color: plan.popular ? NAVY : '#ffffff' }}
                  >
                    {plan.plan}
                  </h3>

                  <div className="mb-6">
                    <p
                      data-cms-field="price"
                      className="font-heading text-5xl leading-none mb-1"
                      style={{ color: plan.popular ? NAVY : GREEN }}
                    >
                      {plan.price}
                    </p>
                    <p
                      data-cms-field="period"
                      className="font-body text-sm"
                      style={{ color: plan.popular ? 'rgba(13,13,26,0.65)' : '#B0B0C0' }}
                    >
                      {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 font-body text-sm">
                        <span
                          className="mt-0.5 flex-shrink-0 font-bold"
                          style={{ color: plan.popular ? NAVY : GREEN }}
                        >✓</span>
                        <span style={{ color: plan.popular ? 'rgba(13,13,26,0.8)' : '#B0B0C0' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    data-cms-field="cta"
                    href="https://arenafitnessandboxing.co.nz/sign-up-online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-body font-semibold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90 mb-4"
                    style={plan.popular
                      ? { backgroundColor: NAVY, color: '#ffffff' }
                      : { backgroundColor: GREEN, color: '#ffffff' }
                    }
                  >
                    {plan.cta}
                  </a>
                  <p
                    data-cms-field="note"
                    className="font-body text-xs text-center leading-relaxed"
                    style={{ color: plan.popular ? 'rgba(13,13,26,0.55)' : '#6B6B80' }}
                  >
                    {plan.note}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included across all plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#12121F', borderTop: '1px solid #2A2A40' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <div className="w-8 h-1 rounded-full mb-5" style={{ backgroundColor: GREEN }} />
                <h3 className="font-heading uppercase text-white text-2xl mb-3">Every Membership Includes</h3>
                <p className="text-[#B0B0C0] text-sm leading-relaxed">
                  All plans include access to a personalised programme, updated every 6 weeks by a trainer, plus 3 hours free parking per day at The Trusts Arena.
                </p>
              </div>
              <div>
                <div className="w-8 h-1 rounded-full mb-5" style={{ backgroundColor: GREEN }} />
                <h3 className="font-heading uppercase text-white text-2xl mb-3">Facility Access</h3>
                <p className="text-[#B0B0C0] text-sm leading-relaxed">
                  Members enjoy our state-of-the-art gym floor, basketball courts, indoor sprint track, and Olympic outdoor running track.
                </p>
              </div>
              <div>
                <div className="w-8 h-1 rounded-full mb-5" style={{ backgroundColor: GREEN }} />
                <h3 className="font-heading uppercase text-white text-2xl mb-3">No Joining Fee in May</h3>
                <p className="text-[#B0B0C0] text-sm leading-relaxed">
                  Sign up this May and the $49 joining fee is waived on all membership plans. One week in advance still applies.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
              <span className="font-heading uppercase tracking-widest text-xs" style={{ color: GREEN }}>
                We're Here to Help
              </span>
              <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
            </div>
            <h2
              data-cms="Membership - CTA - Heading"
              className="font-heading uppercase text-white text-4xl md:text-6xl mb-5"
            >
              {c.membership_cta_heading}
            </h2>
            <p
              data-cms="Membership - CTA - Body"
              className="text-[#B0B0C0] text-lg leading-relaxed mb-6"
            >
              {c.membership_cta_body}
            </p>
            <a
              href={`tel:${c.phone}`}
              className="text-2xl font-heading uppercase mb-10 inline-block"
              style={{ color: GREEN }}
            >
              {c.phone}
            </a>
            <div>
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); window.location.href = '/#contact' }}
                data-cms="Membership - CTA - Button"
                className="inline-block font-heading uppercase tracking-widest text-sm px-10 py-4 rounded-full text-white transition-colors"
                style={{ backgroundColor: GREEN }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
              >
                {c.membership_cta_button}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
