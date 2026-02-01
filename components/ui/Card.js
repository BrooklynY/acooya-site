export default function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "card", // from globals.css
        "transition",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
