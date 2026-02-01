import Card from "../ui/Card";
import Button from "../ui/Button";

function Icon({ kind = "model" }) {
  const common = "h-5 w-5";
  if (kind === "enable") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15l3-3 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "insights") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 17V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 17v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 17v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  // operating model
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10H7V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <span className="text-sm text-muted">{children}</span>
    </li>
  );
}

export default function ServicesPreview() {
  const services = [
    {
      title: "Operating Model & Transformation",
      desc: "Design practical ways of working — governance, decision rights, delivery rhythm.",
      bullets: ["Decision rights & forums", "Ways of working blueprint", "Governance pack teams use"],
      icon: "model",
      href: "/services/operating-model",
      chip: "Foundation",
    },
    {
      title: "Delivery Enablement",
      desc: "Turn ambiguity into execution — planning, alignment, and momentum.",
      bullets: ["Sequencing & plan", "Alignment across teams", "Delivery cadence & controls"],
      icon: "enable",
      href: "/services/delivery-enablement",
      chip: "Momentum",
    },
    {
      title: "Reporting & Decision Support",
      desc: "Dashboards, KPIs, and insight packs leaders trust.",
      bullets: ["KPI framework", "Executive dashboards", "Decision-grade reporting rhythm"],
      icon: "insights",
      href: "/services/reporting-insights",
      chip: "Visibility",
    },
  ];

  return (
    <section className="mx-auto mt-14 max-w-6xl px-5 md:mt-20 md:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted">What we do</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Services designed for clarity, momentum, and measurable outcomes.
          </h2>
          <p className="mt-4 text-base text-muted">
            Boutique consulting with calm authority — operating model first, delivery next, and reporting that makes progress visible.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/services" variant="secondary">
            View all services
          </Button>
          <Button href="/contact" variant="brand">
            Book a call
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group relative">
            {/* subtle gradient edge on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/25 to-brand2/20 opacity-0 blur-sm transition group-hover:opacity-100" />

            <Card className="relative p-6 transition group-hover:shadow-lift">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-bg text-ink">
                  <Icon kind={s.icon} />
                </div>
                <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                  {s.chip}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>

              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <Button href={s.href} variant="ghost" size="sm" className="px-0">
                  Learn more →
                </Button>
                <span className="text-xs text-muted opacity-0 transition group-hover:opacity-100">
                  Typical: 2–6 weeks
                </span>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Mini process row */}
      <div className="mt-10 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur md:mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "1. Diagnose", d: "Clarify the problem, map constraints, align outcomes." },
            { t: "2. Design", d: "Create a practical operating model + execution plan." },
            { t: "3. Deliver", d: "Enable cadence and reporting so progress stays visible." },
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
