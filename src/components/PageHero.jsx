const GREEN = '#7AB204'

export default function PageHero({ eyebrow, heading, sub, image, imageCms, eyebrowCms, headingCms, subCms, cta, ctaCms, onCta }) {
  return (
    <section className="relative flex items-end" style={{ minHeight: '56vh' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          data-cms={imageCms}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(13,13,26,0.45) 0%, rgba(13,13,26,0.96) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-36">
        {eyebrow && (
          <p
            data-cms={eyebrowCms}
            className="font-heading uppercase tracking-widest text-sm mb-4"
            style={{ color: GREEN }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          data-cms={headingCms}
          className="font-heading uppercase text-white text-5xl md:text-7xl lg:text-8xl leading-none"
        >
          {heading}
        </h1>
        {sub && (
          <p
            data-cms={subCms}
            className="font-body text-[#B0B0C0] text-lg md:text-xl mt-5 max-w-2xl leading-relaxed"
          >
            {sub}
          </p>
        )}
        {cta && (
          <button
            data-cms={ctaCms}
            onClick={onCta}
            className="mt-8 font-heading uppercase tracking-widest text-sm px-8 py-3.5 rounded-full text-white transition-colors"
            style={{ backgroundColor: GREEN }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6B9F03'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = GREEN}
          >
            {cta}
          </button>
        )}
      </div>
    </section>
  )
}
