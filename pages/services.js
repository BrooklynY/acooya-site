import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Services() {
  const services = [
    {
      title: "Operating Model & Transformation",
      desc: "Governance, decision rights, cadence, ways of working — practical, scalable, adoption-ready.",
      bullets: ["Decision forums & rights", "Operating rhythm", "Ways of working blueprint", "Adoption support"],
      href: "/services/operating-model",
      tag: "Core service",
    },
    {
      title: "Delivery Enablement",
      desc: "Turn ambiguity into execution — alignment, prioritisation, momentum, and a calm delivery cadence.",
      bullets: ["Execution plan & sequencing", "Stakeholder alignment", "Dependency clarity", "Delivery controls"],
      href: "/services/delivery-enablement",
      tag: "Core service",
    },
    {
      title: "Reporting & Decision Support",
      desc: "Decision-grade insights — KPI frameworks, dashboards, and reporting rhythms leaders trust.",
      bullets: ["KPI framework", "Exec dashboards", "Decision packs", "Automation opportunities"],
      href: "/services/reporting-insights",
      tag: "Core service",
    },
  ];

  return (
    <Layout>
      <PageHeader
        kicker="Services"
        title="What Acooya delivers"
        lead="Acooya works with leaders to simplify complexity, establish a practical operating rhythm, and deliver measurable outcomes — supported by reporting that makes progress visible."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/outcomes", label: "See outcomes" }}
        aside={
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Engagement models
            </p>
            <div className="space-y-3">
              {[
                { t: "Fixed-scope sprint", d: "Solve a defined problem and deliver concrete artefacts." },
                { t: "Embedded support", d: "Short-term uplift to help a team deliver with rhythm + clarity." },
                { t: "Advisory retainer", d: "Ongoing support for leaders — prioritisation and decision support." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-line bg-bg p-3">
                  <p className="text-sm font-semibold text-ink">{x.t}</p>
                  <p className="mt-1 text-sm text-muted">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="mx-auto mt-10 max-w-6xl px-5 md:mt-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} hover className="p-7">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {s.tag}
              </p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={s.href} variant="secondary" size="sm" iconRight="→">
                  View details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-5 md:mt-16 md:px-8">
        <Card className="p-8 md:p-10">
          <p className="text-sm font-medium text-muted">How engagements work</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Calm delivery, clear outputs.
          </h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
            We start with clarity: what leaders need to decide, what constraints exist, and what “good” looks like.
            Then we design the operating rhythm and artefacts that make delivery predictable and progress visible.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Discuss your needs
            </Button>
            <Button href="/methodology" variant="secondary">
              View methodology
            </Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
