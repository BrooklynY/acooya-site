function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function IconButton({ children, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={cx(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
        "border border-line bg-panel text-ink shadow-soft transition",
        "hover:bg-bg hover:shadow-lift",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      )}
    >
      {children}
    </button>
  );
}
