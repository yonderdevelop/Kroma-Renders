import { Check } from 'lucide-react';
import { useSiteData } from '../context/LanguageContext';

export default function Pricing() {
  const siteData = useSiteData();
  const { eyebrow, title, subtitle, package: pkg } = siteData.pricing;

  return (
    <section id="precios" className="relative py-20 md:py-28">
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

        <div className="relative mt-14 max-w-xl mx-auto bg-carbon-800/50 p-8 md:p-10">
          <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-bronze-400/80" />
          <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-bronze-400/80" />
          <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-bronze-400/80" />
          <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-bronze-400/80" />

          <span className="font-mono text-xs tracking-widest uppercase text-cream-300">
            {pkg.name}
          </span>

          <div className="mt-4">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-mono text-sm text-cream-300">{pkg.priceLabel}</span>
              <span className="font-display text-5xl text-cream-50">
                {pkg.currency} ${pkg.price}
              </span>
            </div>
            <p className="mt-1 text-sm text-cream-300">{pkg.unit}</p>
          </div>

          <div className="mt-8">
            <div className="flex gap-1 h-1.5">
              <div className="w-1/2 rounded-full bg-bronze-500" />
              <div className="w-1/2 rounded-full bg-bronze-500" />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] tracking-wider uppercase text-cream-300">
              <span>{pkg.depositLabel}</span>
              <span>{pkg.finalLabel}</span>
            </div>
          </div>

          <ul className="mt-9 space-y-4">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-baseline gap-3">
                <span className="text-cream-200">{feature}</span>
                <span className="flex-1 border-b border-dashed border-cream-50/20 mb-1" />
                <Check className="w-4 h-4 text-bronze-400 flex-shrink-0" strokeWidth={2} />
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-9 flex items-center justify-center rounded-full bg-bronze-500 px-7 py-3.5 text-sm font-medium text-carbon-950 hover:bg-bronze-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-950"
          >
            {pkg.cta}
          </a>

          <p className="mt-4 text-center text-xs text-cream-300">
            {pkg.note}
          </p>
        </div>
      </div>
    </section>
  );
}
