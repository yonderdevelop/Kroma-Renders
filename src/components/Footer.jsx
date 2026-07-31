import { siteData } from '../data/siteData';

export default function Footer() {
  const { brand, tagline, links, social, copyright } = siteData.footer;

  return (
    <footer className="relative bg-carbon-950 border-t border-cream-50/10 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative w-6 h-6 flex-shrink-0">
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-bronze-400" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-bronze-400" />
              </span>
              <span className="font-display text-lg text-cream-50">{brand}</span>
            </div>
            <p className="mt-3 text-sm text-cream-300">{tagline}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-cream-300 mb-4">
                Navegación
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-200 hover:text-cream-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-cream-300 mb-4">
                Redes
              </p>
              <ul className="space-y-2.5">
                {social.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="text-sm text-cream-200 hover:text-cream-50 transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream-50/10 text-xs text-cream-300/70">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
