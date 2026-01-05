export default function IconButton({ children, onClick, ariaLabel }) {
    return (
      <button
        onClick={onClick}
        aria-label={ariaLabel}
        className="inline-flex items-center justify-center rounded-2xl border border-neutral-line bg-white px-3 py-2 text-sm font-semibold shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2"
        type="button"
      >
        {children}
      </button>
    );
  }
  