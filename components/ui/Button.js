export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2 " +
    "active:translate-y-0";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-neutral-ink text-white shadow-soft hover:shadow-lift hover:-translate-y-[1px]",
    secondary:
      "border border-neutral-line bg-white text-neutral-ink hover:bg-neutral-bg",
    ghost: "text-neutral-ink hover:bg-neutral-bg",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
