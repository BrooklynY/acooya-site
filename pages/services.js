import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead, Body } from "../components/ui/Type";

function Pillar({ tag, title, desc, bullets, href }) {
  return (
    <div className="group relative">
      {/* soft gradient edge on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/25 to-brand2/20 opacity-0 blur-sm transition group-hover:opacity-100" />

      <Card className="relative p-8 md:p-10 transition group-hover:shadow-lift">
        <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
          {tag}
        </span>

        <h3 className="mt-4 font-serif text-2xl tracking-tight text-ink">
          {title}
        </h3>

        <Body className="mt-4">{desc}</Body>

        <div className="mt-6 grid gap-2 md:grid-cols-2">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
              <span className="text-sm text-muted">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Button href={href} variant="ghost" size="sm" className="px-0">
            View details →
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Services() {
  const pillars = [
    {
      tag: "Primary",
      title: "Operating Model & Transformation",
      desc:
        "Design practical ways of working that scale — governance, decision rights, delivery rhythm, and adoption.",
      bullets: [
        "Decision rights & forums",
        "Ways of working blueprint",
        "Governance cadence",
        "Clear accountability",
      ],
      href: "/services/operating-model",
    },
    {
      tag: "Core",
      title: "Delivery Enablement",
      desc:
        "Turn ambiguity into execution — alignment, prioritisation, and momentum with a calm, repeatable cadence.",
      bullets: [
        "Execution planning",
        "Dependency management",
        "Stakeholder alignment",
        "Delivery rhythm",
      ],
      href: "/services/delivery-enablement",
    },
    {
      tag: "Core",
      title: "Reporting & Decision Support",
      desc:
        "Decision-grade insights — KPI frameworks, dashboards, and reporting leaders trust to drive action.",
      bullets: [
        "KPI definitions & owners",
        "Executive dashboards",
        "Decision packs",
        "Reporting governance",
      ],
      href: "/services/reporting-insights",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Services</Kicker>
          <H1 className="mt-4">What Acooya delivers</H1>
          <Lead className="mt-6">
            Acooya works with leaders to simplify complexity, establish a practical
            operating rhythm, and deliver measurable outcomes — supported by
            reporting that makes progress visible.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Book a call
            </Button>
            <Button href="/outcomes" variant="secondary">
              See outcomes
            </Button>
          </div>
        </div>
      </Section>

      {/* Service pillars */}
      <Section className="pt-0">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted">Core services</p>
            <H2 className="mt-3">Designed for clarity, momentum, and trust</H2>
          </div>

          <span className="hidden md:inline rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Typical engagement: 2–6 weeks
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <Pillar key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Engagement models */}
      <Section>
        <div className="rounded-3xl border border-line bg-panel/80 p-9 shadow-soft backdrop-blur md:p-12">
          <p className="text-sm font-medium text-muted">Engagement models</p>
          <H2 className="mt-3">Flexible delivery. Clear outputs.</H2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Fixed-scope sprint",
                d:
                  "A focused engagement to solve a defined problem and deliver concrete artefacts.",
              },
              {
                t: "Embedded support",
                d:
                  "Short-term uplift to help a team deliver — cadence, governance, reporting, facilitation.",
              },
              {
                t: "Advisory retainer",
                d:
                  "Ongoing support for leaders — prioritisation, delivery oversight, and decision support.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-3xl border border-line bg-bg p-6"
              >
                <h3 className="font-semibold text-ink">{x.t}</h3>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Discuss your needs
            </Button>
            <Button href="/about" variant="secondary">
              About Acooya
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
