export default function ViewportFrame({ children, label, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        {children}
      </div>
      <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-bronze-400/80" />
      <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-bronze-400/80" />
      <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-bronze-400/80" />
      <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-bronze-400/80" />
      {label && (
        <span className="absolute bottom-3 left-4 right-4 truncate font-mono text-[10px] tracking-[0.2em] uppercase text-bronze-400/70">
          {label}
        </span>
      )}
    </div>
  );
}
