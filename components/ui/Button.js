import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--brand),0.45)] focus-visible:ring-offset-2 " +
  "ring-offset-[rgb(var(--bg))] disabled:opacity-50 disabled:pointer-events-none " +
  "select-none";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants = {
  brand:
    "bg-ink text-white shadow-soft hover:shadow-lift hover:-translate-y-[1px] active:translate-y-0 " +
    "active:shadow-soft",

  secondary:
    "border border-line bg-panel text-ink shadow-soft hover:shadow-lift hover:bg-bg " +
    "hover:-translate-y-[1px] active:translate-y-0 active:shadow-soft",

  ghost:
    "text-ink hover:bg-bg border border-transparent hover:border-line " +
    "hover:-translate-y-[1px] active:translate-y-0",
};

export default function Button({
  href,
  children,
  variant = "brand",
  size = "md",
  className = "",
  iconLeft = null,
  iconRight = null,
  ...props
}) {
  const cls = [base, sizes[size], variants[variant], className].join(" ");

  const content = (
    <>
      {iconLeft ? <span className="text-[0.95em]">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="text-[0.95em]">{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
