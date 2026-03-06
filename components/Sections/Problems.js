import Card from "../ui/Card";
import Button from "../ui/Button";

const problems = [
  {
    title: "Too many priorities",
    desc: "Everything is important, so nothing moves. Trade-offs aren’t explicit and delivery becomes reactive.",
  },
  {
    title: "Slow decisions & approvals",
    desc: "Decision rights are unclear. Work stalls in review loops and momentum is lost.",
  },
  {
    title: "Misaligned stakeholders",
    desc: "Teams interpret goals differently. Expectations drift and rework becomes normal.",
  },
  {
    title: "Delivery rhythm isn’t repeatable",
    desc: "Cadence varies team-by-team. Progress depends on heroics rather than structure.",
  },
  {
    title: "Reporting exists, but isn’t trusted",
    desc: "Dashboards look good but don’t drive action. Metrics aren’t owned or decision-linked.",
  },
  {
    title: "Change fatigue",
    desc: "People are tired of frameworks. They want practical ways of working that actually stick.",
  },
];

export default function Problems() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        {/* Left narrative */}
        <div className="md:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            If this feels familiar
          </p>

          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.08] tracking-tight text-ink">
            Most organisations don’t lack effort — they lack a calm operating rhythm.
          </h2>

          <p className="mt-4 text-sm md:text-base leading-[1.85] text-muted">
            Acooya works with leaders to reduce ambiguity, clarify decision rights, and
            establish ways of working that make delivery calmer and measurable.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
            <Button href="/contact" variant="brand">
              Book a call
            </Button>
          </div>

          <div className="mt-8 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold text-ink">What we optimise for</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Clear decisions, fewer loops</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Practical structure that teams actually use</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Reporting that drives action, not admin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right grid */}
        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p) => (
              <Card key={p.title} className="p-6">
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

