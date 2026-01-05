export function Kicker({ children }) {
    return (
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-subtle">
        {children}
      </p>
    );
  }
  
  export function H1({ children, className = "" }) {
    return (
      <h1 className={`font-display text-5xl md:text-6xl leading-[1.03] tracking-tight ${className}`}>
        {children}
      </h1>
    );
  }
  
  export function H2({ children, className = "" }) {
    return (
      <h2 className={`font-display text-3xl md:text-4xl leading-[1.1] tracking-tight ${className}`}>
        {children}
      </h2>
    );
  }
  
  export function Lead({ children, className = "" }) {
    return (
      <p className={`text-lg md:text-xl leading-relaxed text-neutral-subtle ${className}`}>
        {children}
      </p>
    );
  }
  