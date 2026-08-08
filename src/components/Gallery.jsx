import { useSiteData } from '../context/LanguageContext';
import ViewportFrame from './ViewportFrame';

export default function Gallery() {
  const siteData = useSiteData();
  const { eyebrow, title, subtitle, categories, instagramNote, instagramCta, instagramHref, altPrefix } = siteData.gallery;
  const readyCategories = categories.filter((cat) => cat.image);

  return (
    <section id="portafolio" className="relative bg-carbon-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-400 mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream-50">
            {title}
          </h2>
          <p className="mt-4 text-cream-200">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6">
          {readyCategories.map((cat) => (
            <ViewportFrame key={cat.key} label={cat.label} className="group aspect-square">
              <img
                src={cat.image}
                alt={`${altPrefix} ${cat.label} — Kroma Renders`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/85 to-transparent" />
            </ViewportFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream-300 text-sm">{instagramNote}</p>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-bronze-400 hover:text-bronze-500 transition-colors text-sm font-medium"
          >
            {instagramCta} →
          </a>
        </div>
      </div>
    </section>
  );
}
