import { siteData } from '../data/siteData';

export default function Process() {
  const { eyebrow, title, subtitle, steps } = siteData.process;

  return (
    <section id="proceso" className="relative bg-carbon-900 py-20 md:py-28">
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

        <div className="relative mt-16 max-w-xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-cream-50/10" aria-hidden="true" />

          <div className="space-y-10">
            {steps.map((step) => {
              const isPayment = step.number === '02' || step.number === '05';
              return (
                <div key={step.number} className="relative flex gap-6">
                  <div
                    className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm ${
                      isPayment
                        ? 'bg-bronze-500 text-carbon-950'
                        : 'bg-carbon-900 border border-cream-50/20 text-cream-200'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-xl text-cream-50">
                        {step.title}
                      </h3>
                      {isPayment && (
                        <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border border-bronze-400/40 text-bronze-400">
                          Pago 50%
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-cream-200 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
