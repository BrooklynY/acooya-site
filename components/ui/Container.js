function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Container({ children, className = "" }) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-6xl px-5 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
