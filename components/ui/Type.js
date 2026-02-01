function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Typography system
 * - Editorial serif headings (calm authority)
 * - Readable line-heights + max-widths
 * - Consistent color tokens: text-ink / text-muted
 */

export function Kicker({ children, className = "" }) {
  return (
    <p
      className={cx(
        "text-[11px] font-medium uppercase tracking-[0.22em] text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

export function H1({ children, className = "" }) {
  return (
    <h1
      className={cx(
        "font-serif text-[clamp(2.55rem,5vw,3.8rem)] leading-[1.03] tracking-tight text-ink",
        "max-w-[18ch]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }) {
  return (
    <h2
      className={cx(
        "font-serif text-[clamp(1.85rem,3.6vw,2.55rem)] leading-[1.08] tracking-tight text-ink",
        "max-w-[28ch]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }) {
  return (
    <h3
      className={cx(
        "text-lg md:text-xl font-semibold leading-snug tracking-tight text-ink",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Lead({ children, className = "" }) {
  return (
    <p
      className={cx(
        "text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.75] text-muted",
        "max-w-[62ch]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Body({ children, className = "" }) {
  return (
    <p
      className={cx(
        "text-sm md:text-[15px] leading-[1.9] text-muted",
        "max-w-[70ch]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Small({ children, className = "" }) {
  return (
    <p className={cx("text-xs leading-relaxed text-muted", className)}>
      {children}
    </p>
  );
}

  