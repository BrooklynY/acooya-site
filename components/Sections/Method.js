import Card from "../ui/Card";
import Button from "../ui/Button";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    desc: "Clarify outcomes, constraints, stakeholders, and delivery friction. Define what leaders need to decide and what ‘good’ looks like.",
    bullets: ["Problem framing", "Stakeholder map", "Decision + forum needs"],
  },
  {
    n: "02",
    title: "Design",
    desc: "Create a practical operating rhythm: decision rights, governance, ways of working, and a delivery plan teams can execute.",
    bullets: ["Operating model blueprint", "Delivery cadence", "Templates that stick"],
  },
  {
    n: "03",
    title: "Embed",
    desc: "Put it into motion. Establish the cadence, coaching, and reporting so progress becomes visible and measurable — without bureaucracy.",
    bullets: ["Enablement + rollout", "Decision-grade reporting", "Adoption support"],
  },
];

export default function Method() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-20 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            How we work
          </p>

          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.08] tracking-tight text-ink">
            A calm, repeatable method that turns complexity into outcomes.
          </h2>

          <p className="mt-4 text-sm md:text-base leading-[1.85] text-muted max-w-[62ch]">
            Acooya engagements are designed to reduce ambiguity early, build practical operating structure, and make progress
            visible through decision-grade reporting. Clear artefacts. Clean cadence. Measurable outcomes.
          </p>
        </div>

        <div className="flex gap-3">
          <Button href="/methodology" variant="secondary">
            View methodology
          </Button>
          <Button href="/contact" variant="brand">
            Book a call
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="group relative">
            {/* subtle premium edge on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/30 to-brand2/25 opacity-0 blur-sm transition group-hover:opacity-100" />
            <Card className="relative p-6 md:p-7 transition group-hover:shadow-lift">
              <div className="flex items-start justify-between">
                <p className="text-xs font-semibold text-muted">{s.n}</p>
                <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                  Step
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>

      {/* small reassurance strip */}
      <div className="mt-10 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Outcome-led", d: "Start with decisions and measurable outcomes — not activity." },
            { t: "Operating model first", d: "Design the rhythm that makes delivery calmer and repeatable." },
            { t: "Decision-grade reporting", d: "Visibility leaders trust — without manual admin-heavy reporting." },
          ].map((x) => (
            <div key={x.t}>
              <p className="text-sm font-semibold text-ink">{x.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
