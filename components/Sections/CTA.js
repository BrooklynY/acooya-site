import Card from "../ui/Card";
import Button from "../ui/Button";

function StepCard({ n, title, desc }) {
  return (
    <div className="group relative">
      {/* subtle gradient edge on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/30 to-brand2/25 opacity-0 blur-sm transition group-hover:opacity-100" />
      <Card className="relative p-7 transition duration-200 group-hover:shadow-lift">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Step {n}
          </span>
          <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Method
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />

        <p className="mt-4 text-xs text-muted">
          Output: clear artefacts + a repeatable rhythm
        </p>
      </Card>
    </div>
  );
}

export default function Process() {
  const steps = [
    {
      n: "01",
      title: "Diagnose",
      desc: "Clarify outcomes, constraints, stakeholders, and delivery friction. Identify what is slowing decisions and execution.",
    },
    {
      n: "02",
      title: "Design",
      desc: "Define decision rights, governance, roles, and a practical operating rhythm. Produce artefacts teams can actually use.",
    },
    {
      n: "03",
      title: "Enable",
      desc: "Embed cadence, templates, and reporting so the approach sticks — and progress becomes visible and decision-grade.",
    },
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-20 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted">How we work</p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.5vw,2.6rem)] leading-[1.08] tracking-tight text-ink">
            A calm, repeatable method — designed to land outcomes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            You get clarity, structure, and decision-grade visibility — without heavy process.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/methodology" variant="secondary">
            View methodology
          </Button>
          <Button href="/contact" variant="brand">
            Discuss your situation
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
        {steps.map((s) => (
          <StepCard key={s.n} {...s} />
        ))}
      </div>

      {/* Editorial divider + proof hint */}
      <div className="mt-10 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur md:mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Clear decisions", d: "Decision rights and forums reduce rework and stalled approvals." },
            { t: "Delivery momentum", d: "A practical cadence keeps teams aligned and moving." },
            { t: "Visible progress", d: "Reporting is linked to leadership decisions, not status theatre." },
          ].map((x) => (
            <div key={x.t}>
              <p className="text-sm font-semibold text-ink">{x.t}</p>
              <p className="mt-2 text-sm text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

