import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ServicePage({
  eyebrow,
  title,
  intro,
  whoFor,
  problems,
  approach,
  deliverables,
  outcomes,
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
      <p className="text-sm text-neutral-subtle">{eyebrow}</p>

      <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-subtle">{intro}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/contact">Book a call</Button>
        <Button href="/services" variant="secondary">
          Back to services
        </Button>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <Card className="p-8">
          <h2 className="font-display text-2xl tracking-tight">Who this is for</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-subtle">
            {whoFor.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-8">
          <h2 className="font-display text-2xl tracking-tight">Typical problems</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-subtle">
            {problems.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-rose" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">Approach</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {approach.map((s) => (
            <Card key={s.title} className="p-8">
              <p className="text-xs font-semibold text-brand-gold">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-neutral-subtle">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <Card className="p-8">
          <h2 className="font-display text-2xl tracking-tight">Deliverables</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-subtle">
            {deliverables.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-8">
          <h2 className="font-display text-2xl tracking-tight">Outcomes</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-subtle">
            {outcomes.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-20">
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
          <h2 className="font-display text-3xl tracking-tight">
            Want an operating rhythm that actually works?
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Book a short call and we’ll map your current challenges, then propose a practical path to measurable outcomes.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
