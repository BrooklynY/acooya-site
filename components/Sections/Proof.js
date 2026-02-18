import Card from "../ui/Card";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
      {children}
    </span>
  );
}

function LogoChip({ children }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-line bg-panel/80 px-4 py-3 text-xs text-muted shadow-soft">
      {children}
    </div>
  );
}

export default function Proof() {
  // Use anonymised “logo” chips for now (premium sites often do this pre-logos).
  // Later you can replace these with real logos or client names.
  const logoChips = [
    "National carrier (anonymised)",
    "Government (anonymised)",
    "Financial services (anonymised)",
    "Technology (anonymised)",
    "Enterprise programs",
    "Platform / data uplift",
  ];

  const stats = [
    { k: "10+ years", v: "Transformation & delivery experience" },
    { k: "Cross-industry", v: "Aviation • Govt • Finance" },
    { k: "Decision-grade", v: "KPIs • dashboards • governance" },
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-20 md:px-8">
      <div className="rounded-3xl border border-line bg-panel/70 p-7 shadow-soft backdrop-blur md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* left */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted">Trusted approach</p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.1] tracking-tight text-ink">
              Credibility without noise — clarity, structure, outcomes.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Acooya supports leaders with operating model design, delivery enablement, and reporting that makes progress visible.
              Client examples can be anonymised where needed.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Operating rhythm</Pill>
              <Pill>Decision forums</Pill>
              <Pill>Dependency clarity</Pill>
              <Pill>Reporting automation</Pill>
              <Pill>Stakeholder alignment</Pill>
            </div>
          </div>

          {/* right stats */}
          <div className="grid gap-3 md:w-[360px]">
            {stats.map((s) => (
              <Card key={s.k} className="p-5">
                <p className="text-base font-semibold text-ink">{s.k}</p>
                <p className="mt-1 text-sm text-muted">{s.v}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />

        {/* logo chips */}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Experience across
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {logoChips.map((x) => (
              <LogoChip key={x}>{x}</LogoChip>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted">
            Replace these chips with real client logos once you’re ready (or keep anonymised for discretion).
          </p>
        </div>
      </div>
    </section>
  );
}
