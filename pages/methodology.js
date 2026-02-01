import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead, Body } from "../components/ui/Type";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export default function Methodology() {
  return (
    <Layout>
      {/* HERO */}
      <Section className="pt-10 md:pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/85 p-8 shadow-soft backdrop-blur md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-[12%] h-[360px] w-[360px] rounded-full bg-brand/12 blur-3xl" />
            <div className="absolute top-10 right-[10%] h-[320px] w-[320px] rounded-full bg-brand2/10 blur-3xl" />
          </div>

          <div className="relative">
            <Kicker>How we work</Kicker>
            <H1 className="mt-4">Calm method. Practical outcomes.</H1>

            <Lead className="mt-6">
              Acooya blends operating-model thinking, delivery discipline, and decision-grade insights — without heavy process theatre.
            </Lead>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Operating model first</Pill>
              <Pill>Decisions before artefacts</Pill>
              <Pill>Lightweight governance</Pill>
              <Pill>Data that drives action</Pill>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="brand">Start a conversation</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section>
        <H2>Principles we don’t compromise on</H2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Decisions before documents",
              d: "Work starts with the decisions leaders need to make — not templates or frameworks.",
            },
            {
              t: "Rhythm beats heroics",
              d: "A simple cadence outperforms complex plans. We optimise for repeatable momentum.",
            },
            {
              t: "Practical over perfect",
              d: "Outputs must be usable on Monday morning, not beautiful on a shelf.",
            },
            {
              t: "Transparency reduces heat",
              d: "Clear metrics and forums lower politics and increase trust.",
            },
            {
              t: "Design for the real org",
              d: "Solutions respect constraints: legacy, culture, regulation, capacity.",
            },
            {
              t: "Capability transfer",
              d: "We leave teams stronger, not dependent.",
            },
          ].map((x) => (
            <Card key={x.t} className="p-8">
              <h3 className="text-lg font-semibold text-ink">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* MODEL */}
      <Section className="pt-0">
        <H2>The Acooya model</H2>
        <Body className="mt-3 max-w-2xl">
          Three connected layers: how the organisation runs, how work gets delivered, and how decisions are informed.
        </Body>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              s: "01",
              t: "Operating model",
              d: "Decision rights, governance, roles, and a delivery rhythm that fits your context.",
            },
            {
              s: "02",
              t: "Delivery enablement",
              d: "Planning, dependency clearing, stakeholder alignment, and execution cadence.",
            },
            {
              s: "03",
              t: "Decision-grade insights",
              d: "KPIs, dashboards, and forums that convert data into actions.",
            },
          ].map((x) => (
            <Card key={x.s} className="p-8">
              <p className="text-xs font-medium text-muted">{x.s}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{x.t}</h3>
              <p className="mt-3 text-sm text-muted">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT STYLE */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8">
            <H2>What it feels like to work with us</H2>

            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>• Short cycles, visible progress every week</li>
              <li>• Workshops focused on decisions, not slides</li>
              <li>• Light artefacts that teams actually use</li>
              <li>• Clear owners and next actions</li>
              <li>• Calm facilitation in high-pressure environments</li>
            </ul>
          </Card>

          <Card className="p-8">
            <H2>Typical engagements</H2>

            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>• 2-week diagnostic → 6-week operating rhythm setup</li>
              <li>• Delivery reset for struggling programs</li>
              <li>• KPI framework + executive dashboards</li>
              <li>• Governance redesign post-restructure</li>
              <li>• Portfolio reporting uplift</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-10 shadow-lift">
          <H2>Prefer practical to theoretical?</H2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Share your context and we’ll propose a focused first step — no heavy discovery projects.
          </p>

          <div className="mt-6">
            <Button href="/contact" variant="brand">Book a call</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
