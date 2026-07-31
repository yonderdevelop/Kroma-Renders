import { siteData } from '../data/siteData';
import ViewportFrame from './ViewportFrame';
import heroImg from '../assets/hero/hero-1.webp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-400 mb-6">
            {siteData.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream-50">
            {siteData.hero.headline}{' '}
            <span className="text-bronze-400">{siteData.hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 text-lg text-cream-200 max-w-md">
            {siteData.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-bronze-500 px-7 py-3.5 text-sm font-medium text-carbon-950 hover:bg-bronze-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-950"
            >
              {siteData.hero.ctaPrimary}
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/20 px-7 py-3.5 text-sm font-medium text-cream-50 hover:border-cream-50/40 hover:bg-cream-50/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-950"
            >
              {siteData.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <ViewportFrame label="INTERIOR_STUDY · 01" className="aspect-[4/3] w-full">
          <img
            src={heroImg}
            alt="Render hiperrealista de dormitorio — Kroma Renders"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-radial-glow from-bronze-500/30 to-transparent blur-2xl motion-safe:animate-glow-pulse pointer-events-none"
            aria-hidden="true"
          />
        </ViewportFrame>
      </div>
    </section>
  );
}
