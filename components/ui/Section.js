import Container from "./Container";

export default function Section({ children, className = "", pad = true }) {
  return (
    <section className={`${pad ? "py-10 md:py-14" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

