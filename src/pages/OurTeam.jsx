import { useEffect } from 'react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const NAVY = '#0D0D1A'

export default function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: NAVY }}>
      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: '56vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={c.team_hero_image}
            data-cms="Team - Hero - Image"
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
            data-cms="Team - Hero - Eyebrow"
            className="font-heading uppercase tracking-widest text-sm mb-4"
            style={{ color: GREEN }}
          >
            Arena Fitness & Boxing
          </p>
          <h1
            data-cms="Team - Hero - Heading"
            className="font-heading uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            {c.team_hero_heading}
          </h1>
          <p
            data-cms="Team - Hero - Sub"
            className="font-body text-[#B0B0C0] text-lg md:text-xl mt-5 max-w-2xl leading-relaxed"
          >
            {c.team_hero_sub}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2
              data-cms="Team - Team - Heading"
              className="font-heading uppercase text-white text-5xl md:text-6xl mb-16"
            >
              {c.team_members_heading}
            </h2>
          </AnimatedSection>

          <div data-cms-repeater="Team - Members" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.team_members.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                <img
                  src={member.image}
                  data-cms-field="image"
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(13,13,26,0.97) 0%, rgba(13,13,26,0.55) 45%, rgba(13,13,26,0.0) 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p
                    data-cms-field="role"
                    className="font-heading uppercase tracking-widest text-xs mb-2"
                    style={{ color: GREEN }}
                  >
                    {member.role}
                  </p>
                  <h3
                    data-cms-field="name"
                    className="font-heading uppercase text-white text-2xl leading-tight mb-3"
                  >
                    {member.name}
                  </h3>
                  <p
                    data-cms-field="bio"
                    className="text-[#B0B0C0] text-sm leading-relaxed"
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#12121F' }}>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
              <span className="font-heading uppercase tracking-widest text-xs" style={{ color: GREEN }}>
                Get Started
              </span>
              <span className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: GREEN }} />
            </div>
            <h2
              data-cms="Team - CTA - Heading"
              className="font-heading uppercase text-white text-4xl md:text-6xl mb-5"
            >
              {c.team_cta_heading}
            </h2>
            <p
              data-cms="Team - CTA - Body"
              className="text-[#B0B0C0] text-lg leading-relaxed mb-10"
            >
              {c.team_cta_body}
            </p>
            <a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); window.location.href = '/#contact' }}
              data-cms="Team - CTA - Button"
              className="inline-block font-heading uppercase tracking-widest text-sm px-10 py-4 rounded-full text-white transition-colors"
              style={{ backgroundColor: GREEN }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
            >
              {c.team_cta_button}
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
