import { MessageCircle } from 'lucide-react';
import { useSiteData } from '../context/LanguageContext';

export default function ContactCTA() {
  const siteData = useSiteData();
  const { title, subtitle, cta, ctaHref, channels, paymentNote } = siteData.contactCta;

  return (
    <section id="contacto" className="relative bg-bronze-500 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl sm:text-5xl text-carbon-950 leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-carbon-900/80 text-lg max-w-lg mx-auto">
          {subtitle}
        </p>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-carbon-950 px-8 py-4 text-sm font-medium text-cream-50 hover:bg-carbon-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-950 focus-visible:ring-offset-2 focus-visible:ring-offset-bronze-500"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          {cta}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs tracking-widest uppercase text-carbon-900/70">
          {channels.map((channel) => {
            const isExternal = channel.href.startsWith('http');
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="hover:text-carbon-950 transition-colors"
              >
                {channel.label}
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-carbon-900/70">
          {paymentNote}
        </p>
      </div>
    </section>
  );
}
