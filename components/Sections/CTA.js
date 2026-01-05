import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
        <h2 className="font-display text-3xl tracking-tight">
          Ready to simplify complexity and move faster?
        </h2>
        <p className="mt-4 max-w-2xl text-white/90">
          Book a short call to discuss your goals and see how Acooya can support your next phase of transformation.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="secondary">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
}
