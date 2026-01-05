export default function Card({ className = "", children }) {
  return (
    <div className={`rounded-3xl border border-neutral-line bg-white shadow-soft ${className}`}>
      {children}
    </div>
  );
}

  