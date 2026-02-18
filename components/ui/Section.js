import Container from "./Container";

export default function Section({ children, className = "", pad = true }) {
  return (
    <section className={`${pad ? "py-14 md:py-20" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}


