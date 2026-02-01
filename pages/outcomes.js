import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead, Body } from "../components/ui/Type";

function Metric({ k, v }) {
  return (
    <Card className="p-6">
      <p className="text-2xl font-semibold text-ink">{k}</p>
      <p className="mt-2 text-sm text-muted">{v}</p>
    </Card>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <span className="text-sm text-muted">{children}</span>
    </div>
  );
}

export default function Outcomes() {
  const examples = [
    {
      title: "Operating rhythm + governance that reduces rework",
      tag: "Operating model",
      desc: "Clarify decision rights, forums, cadence, and ownership so delivery becomes calmer, faster, and measurable.",
      bullets: [
        "Decision forums + agenda templates",
        "RACI/DRI decision rights mapped",
        "Intake + prioritisation approach",
        "Rhythm aligned to leadership decisions",
      ],
    },
    {
      title: "Delivery momentum through alignment and sequencing",
      tag: "Delivery enablement",
      desc: "Turn ambiguity into execution with a practical plan, dependency visibility, and a cadence that sticks.",
      bullets: [
        "Milestones + sequencing plan",
        "Dependency mapping + risk controls",
        "Stakeholder alignment pack",
        "Weekly rhythm that drives decisions",
      ],
    },
    {
      title: "Decision-grade reporting leaders trust",
      tag: "Reporting & insights",
      desc: "Metrics with definitions, owners, and a governance rhythm — dashboards designed to drive action, not admin.",
      bullets: [
        "KPI framework + glossary",
        "Exec dashboards + insight packs",
        "Reporting rhythm tied to forums",
        "Change control to protect trust",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Outcomes</Kicker>
          <H1 className="mt-4">Make progress visible.</H1>
          <Lead className="mt-6">
            Acooya focuses on measurable outcomes — clearer decisions, calmer delivery, and reporting that leaders actually use.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">Book a call</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <Metric k="Clarity" v="Decision rights, ownership, and cadence that reduces friction." />
            <Metric k="Momentum" v="Execution rhythm that maintains alignment and follow-through." />
            <Metric k="Visibility" v="Decision-grade reporting linked to leadership forums." />
          </div>
        </div>
      </Section>

      {/* Outcomes narrative */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-12">
          <Card className="p-8 md:col-span-7 md:p-10">
            <H2>What “outcome-led” means in practice</H2>
            <Body className="mt-4">
              Most organisations don’t need more status updates — they need clearer decisions, fewer blockers, and a rhythm that
              makes progress visible. Acooya helps create that structure.
            </Body>
            <Body className="mt-4">
              We focus on practical artefacts that teams can use immediately: governance forums, decision packs, delivery plans,
              KPI definitions, and reporting rhythms aligned to leadership decisions.
            </Body>

            <div className="mt-8 rounded-3xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-7">
              <p className="text-sm font-semibold text-ink">Typical result</p>
              <p className="mt-2 text-sm text-muted">
                Leaders spend less time debating status — and more time making decisions that unlock progress.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:col-span-5 md:p-10">
            <p className="text-sm font-medium text-muted">Common signals</p>
            <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              If this feels familiar, we can help.
            </h3>

            <div className="mt-6 space-y-3">
              <Bullet>Too many priorities and unclear trade-offs</Bullet>
              <Bullet>Decisions slow due to unclear forums/owners</Bullet>
              <Bullet>Delivery feels noisy with late-stage rework</Bullet>
              <Bullet>Reporting exists but isn’t trusted or actionable</Bullet>
              <Bullet>Teams are blocked by dependencies and approvals</Bullet>
            </div>

            <div className="mt-8 text-xs text-muted">
              Typical engagement: 2–6 weeks • clear artefacts • practical governance • decision-grade reporting
            </div>
          </Card>
        </div>
      </Section>

      {/* Example outcome cards */}
      <Section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted">Examples</p>
            <H2 className="mt-3">Outcome themes</H2>
          </div>
          <div className="hidden md:block">
            <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
              Evidence-oriented, not hype
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {examples.map((x) => (
            <div key={x.title} className="group relative">
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand/25 to-brand2/20 opacity-0 blur-sm transition group-hover:opacity-100" />
              <Card className="relative p-7 transition group-hover:shadow-lift">
                <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                  {x.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{x.title}</h3>
                <p className="mt-3 text-sm text-muted">{x.desc}</p>

                <div className="mt-5 space-y-2">
                  {x.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </div>

                <div className="mt-7">
                  <Button href="/contact" variant="ghost" size="sm" className="px-0">
                    Discuss this outcome →
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl border border-line bg-panel/80 p-9 shadow-soft backdrop-blur md:p-12">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Want a calm, outcome-led plan?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Book a short call and we’ll clarify your outcomes, map constraints, and propose the most practical next step.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">Book a call</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
