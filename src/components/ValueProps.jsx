import { Zap, ShieldCheck, Briefcase } from 'lucide-react';
import { useSiteData } from '../context/LanguageContext';

const icons = {
  zap: Zap,
  'shield-check': ShieldCheck,
  briefcase: Briefcase,
};

export default function ValueProps() {
  const siteData = useSiteData();
  const { eyebrow, title, items } = siteData.valueProps;

  return (
    <section id="servicio" className="relative border-t border-cream-50/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-400 mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream-50">
            {title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-cream-50/10">
          {items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="border-cream-50/10 py-8 md:py-10 md:px-8 md:first:pl-0 md:last:pr-0 border-b last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
              >
                {Icon && <Icon className="w-7 h-7 text-bronze-400" strokeWidth={1.5} />}
                <h3 className="mt-5 font-display text-xl text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-cream-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
