import { useEffect } from 'react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'

const GREEN = '#7AB204'
const NAVY = '#0D0D1A'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: NAVY }}>
      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: '56vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={c.blog_hero_image}
            data-cms="Blog - Hero - Image"
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
            data-cms="Blog - Hero - Eyebrow"
            className="font-heading uppercase tracking-widest text-sm mb-4"
            style={{ color: GREEN }}
          >
            Arena Fitness & Boxing
          </p>
          <h1
            data-cms="Blog - Hero - Heading"
            className="font-heading uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            {c.blog_hero_heading}
          </h1>
          <p
            data-cms="Blog - Hero - Sub"
            className="font-body text-[#B0B0C0] text-lg md:text-xl mt-5 max-w-2xl leading-relaxed"
          >
            {c.blog_hero_sub}
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2
              data-cms="Blog - Posts - Heading"
              className="font-heading uppercase text-white text-5xl md:text-6xl mb-16"
            >
              {c.blog_posts_heading}
            </h2>
          </AnimatedSection>

          <div data-cms-repeater="Blog - Posts" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.blog_posts.map((post, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl" style={{ backgroundColor: '#12121F', border: '1px solid #2A2A40' }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={post.image}
                    data-cms-field="image"
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'rgba(122,178,4,0.06)' }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      data-cms-field="category"
                      className="inline-block font-heading uppercase tracking-widest text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(122,178,4,0.15)', color: GREEN }}
                    >
                      {post.category}
                    </span>
                    <span
                      data-cms-field="date"
                      className="text-[#B0B0C0] text-xs font-body"
                    >
                      {post.date}
                    </span>
                  </div>
                  <h3
                    data-cms-field="title"
                    className="font-heading uppercase text-white text-2xl leading-tight mb-3"
                  >
                    {post.title}
                  </h3>
                  <p
                    data-cms-field="excerpt"
                    className="text-[#B0B0C0] text-sm leading-relaxed mb-6"
                  >
                    {post.excerpt}
                  </p>
                  <button
                    className="font-heading uppercase tracking-widest text-xs flex items-center gap-2"
                    style={{ color: GREEN }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More coming banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#12121F', borderTop: '1px solid #2A2A40' }}>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading uppercase tracking-widest text-xs mb-4" style={{ color: GREEN }}>
              Stay Connected
            </p>
            <h2 className="font-heading uppercase text-white text-4xl md:text-5xl mb-4">
              More Articles Coming Soon
            </h2>
            <p className="text-[#B0B0C0] leading-relaxed">
              Follow us on Facebook or get in touch to stay up to date with the latest from Arena Fitness & Boxing.
            </p>
            <a
              href="https://www.facebook.com/ArenaFitnessAndBoxing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-heading uppercase tracking-widest text-xs px-8 py-3.5 rounded-full text-white transition-colors"
              style={{ backgroundColor: GREEN }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
            >
              Follow on Facebook
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
