import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead, Body } from "../components/ui/Type";

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <span className="text-sm text-muted">{children}</span>
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>About</Kicker>
          <H1 className="mt-4">Calm authority for complex delivery.</H1>
          <Lead className="mt-6">
            Acooya Consulting helps leaders simplify complexity, align teams, and deliver measurable outcomes — supported by
            reporting that makes progress visible.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Book a call
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              { t: "Operating model first", d: "Clear roles, decision rights, and rhythm." },
              { t: "Delivery next", d: "Cadence, governance, and momentum." },
              { t: "Visibility always", d: "Decision-grade reporting leaders trust." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-line bg-bg p-5">
                <p className="text-sm font-semibold text-ink">{x.t}</p>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Story + values */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-12">
          <Card className="p-8 md:col-span-7 md:p-10">
            <H2>Why Acooya exists</H2>
            <Body className="mt-4">
              Many organisations are capable and busy — yet still feel stuck. Priorities multiply, decision-making slows,
              delivery becomes noisy, and reporting turns into admin rather than clarity.
            </Body>
            <Body className="mt-4">
              Acooya exists to bring calm structure: an operating rhythm people can follow, a delivery cadence that creates
              momentum, and reporting that supports real decisions.
            </Body>

            <div className="mt-7 rounded-3xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-7">
              <p className="text-sm font-semibold text-ink">Working style</p>
              <p className="mt-2 text-sm text-muted">
                Calm, outcome-led, and practical — clear artefacts, light governance, and stakeholder alignment that sticks.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:col-span-5 md:p-10">
            <H2>Principles</H2>
            <div className="mt-5 space-y-3">
              <Bullet>Decisions first — make clarity visible.</Bullet>
              <Bullet>Practical governance — lightweight and usable.</Bullet>
              <Bullet>Momentum over noise — cadence that reduces rework.</Bullet>
              <Bullet>Outcomes over activity — measure what matters.</Bullet>
              <Bullet>Trust through transparency — definitions, owners, rhythm.</Bullet>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Typical outputs</p>
              <div className="mt-4 grid gap-2">
                {[
                  "Operating model blueprint",
                  "Governance forums + cadence",
                  "Delivery plan + dependencies",
                  "Decision-grade dashboards + packs",
                ].map((x) => (
                  <div key={x} className="rounded-2xl border border-line bg-bg p-3 text-sm text-muted">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Where it fits */}
      <Section>
        <Card className="p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-muted">Where Acooya helps</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
                When delivery is complex, cross-functional, and high-stakes.
              </h2>
              <p className="mt-4 text-base text-muted">
                Especially when dependencies are heavy, accountability is unclear, or reporting exists but isn’t trusted.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/services" variant="secondary">
                View services
              </Button>
              <Button href="/outcomes" variant="brand">
                See outcomes
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Change fatigue",
                d: "Lots of activity, low confidence in progress.",
              },
              {
                t: "Decision friction",
                d: "Slow approvals, unclear forums, rework.",
              },
              {
                t: "Visibility gap",
                d: "Dashboards exist but don’t drive action.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-line bg-bg p-6">
                <p className="text-sm font-semibold text-ink">{x.t}</p>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl border border-line bg-gradient-to-r from-brand/12 to-brand2/12 p-9 md:p-12">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Want a calm, high-leverage first step?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Book a short call. We’ll clarify outcomes, identify constraints, and recommend the smallest action that
            meaningfully improves delivery, decisions, or visibility.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Book a call
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
