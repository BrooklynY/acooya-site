import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-2xl font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--brand),0.45)] focus-visible:ring-offset-2 " +
  "ring-offset-[rgb(var(--bg))] disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants = {
  brand:
    "bg-ink text-white shadow-soft hover:shadow-lift hover:translate-y-[-1px] active:translate-y-0",
  secondary:
    "border border-line bg-panel text-ink shadow-soft hover:shadow-lift hover:bg-bg",
  ghost:
    "text-ink hover:bg-bg",
};

export default function Button({
  href,
  children,
  variant = "brand",
  size = "md",
  className = "",
  ...props
}) {
  const cls = [base, sizes[size], variants[variant], className].join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
