import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { siteData, lang, toggleLang } = useLanguage();
  const nextLangLabel = lang === 'es' ? 'EN' : 'ES';
  const menuLabel = open
    ? (lang === 'es' ? 'Cerrar menú' : 'Close menu')
    : (lang === 'es' ? 'Abrir menú' : 'Open menu');

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-cream-50/10 bg-carbon-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative w-6 h-6 flex-shrink-0">
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-bronze-400" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-bronze-400" />
          </span>
          <span className="font-display text-lg tracking-tight text-cream-50">
            Kroma <span className="text-bronze-400">Renders</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteData.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream-200 hover:text-cream-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cream-50/20 px-3 py-1.5 text-xs font-mono tracking-wider text-cream-200 hover:border-bronze-400/60 hover:text-cream-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400"
          >
            <Globe size={13} />
            {nextLangLabel}
          </button>
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center rounded-full bg-bronze-500 px-5 py-2.5 text-sm font-medium text-carbon-950 hover:bg-bronze-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-950"
          >
            {siteData.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={menuLabel}
            aria-expanded={open}
            className="md:hidden p-2 -mr-2 text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 rounded"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-cream-50/10 bg-carbon-950 px-6 py-5 flex flex-col gap-4">
          {siteData.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-cream-200 hover:text-cream-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-cream-50/20 px-3 py-1.5 text-xs font-mono tracking-wider text-cream-200"
          >
            <Globe size={13} />
            {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-bronze-500 px-5 py-3 text-sm font-medium text-carbon-950 mt-1"
          >
            {siteData.nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
