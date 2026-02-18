import Link from "next/link";
import Card from "../ui/Card";
import Button from "../ui/Button";

function Icon({ kind = "model" }) {
  const cls = "h-5 w-5";
  if (kind === "enable") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15l3-3 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "insights") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 24 24" className={cls} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7h10v10H7V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FeatureCard({ service }) {
  const { title, desc, bullets, href, icon } = service;

  return (
    <div className="group relative">
      {/* subtle gradient edge on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/30 to-brand2/25 opacity-0 blur-sm transition group-hover:opacity-100" />
      <Card className="relative p-7 transition duration-200 group-hover:shadow-lift">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-bg text-ink">
            <Icon kind={icon} />
          </div>

          <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Service
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>

        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center justify-between">
          <Button href={href} variant="ghost" size="sm" className="px-0">
            Learn more →
          </Button>
          <span className="text-xs text-muted opacity-0 transition group-hover:opacity-100">
            Typical: 2–6 weeks
          </span>
        </div>
      </Card>
    </div>
  );
}

export default function ServicesPreview() {
  const services = [
    {
      title: "Operating Model & Transformation",
      desc: "Design practical ways of working — governance, decision rights, delivery rhythm.",
      bullets: ["Decision rights & forums", "Ways of working blueprint", "Practical governance pack"],
      icon: "model",
      href: "/services/operating-model",
    },
    {
      title: "Delivery Enablement",
      desc: "Turn ambiguity into execution — planning, alignment, and momentum.",
      bullets: ["Plan & sequencing", "Alignment across teams", "Delivery controls that stick"],
      icon: "enable",
      href: "/services/delivery-enablement",
    },
    {
      title: "Reporting & Decision Support",
      desc: "Dashboards, KPIs, and insight packs leaders trust.",
      bullets: ["KPI framework", "Exec dashboards", "Decision-grade insight packs"],
      icon: "insights",
      href: "/services/reporting-insights",
    },
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-20 md:px-8">
      {/* Header row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted">What we do</p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.5vw,2.6rem)] leading-[1.08] tracking-tight text-ink">
            Services designed for clarity, momentum, and measurable outcomes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Boutique consulting with calm authority — operating model first, delivery next,
            and reporting that makes progress visible.
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

      {/* Cards */}
      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
        {services.map((s) => (
          <FeatureCard key={s.title} service={s} />
        ))}
      </div>

      {/* Editorial footnote */}
      <div className="mt-10 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur md:mt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-ink">A simple, repeatable engagement rhythm</p>
            <p className="mt-2 text-sm text-muted">
              1) Diagnose the real constraint → 2) Design the operating rhythm → 3) Enable delivery and decision-grade reporting.
            </p>
          </div>

          <Link
            href="/methodology"
            className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            View methodology →
          </Link>
        </div>
      </div>
    </section>
  );
}

