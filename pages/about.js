import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead } from "../components/ui/Type";

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>About</Kicker>
          <H1 className="mt-4">Calm, outcome-led consulting for complex work.</H1>
          <Lead className="mt-6">
            Acooya exists to help leaders simplify complexity, align stakeholders, and deliver measurable outcomes —
            with an operating rhythm that teams can actually sustain.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Book a call</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Clarity over noise",
              d: "We turn ambiguity into a clean plan, with decision rights and priorities that stick.",
            },
            {
              t: "Practical over perfect",
              d: "We design ways of working that teams can sustain — not shelfware frameworks.",
            },
            {
              t: "Outcomes over activity",
              d: "Dashboards and reporting exist to drive action — not to create administrative theatre.",
            },
          ].map((x) => (
            <Card key={x.t} className="p-8">
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-[0.14em]">
                Principle
              </p>
              <h3 className="mt-3 text-xl font-semibold">{x.t}</h3>
              <p className="mt-3 text-sm text-neutral-subtle">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* STORY / DIFFERENTIATION */}
      <Section>
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="p-10 md:col-span-3">
            <H2>Why Acooya</H2>
            <p className="mt-4 text-sm text-neutral-subtle">
              Complex organisations often have talented people — but unclear decision-making, messy prioritisation,
              and inconsistent delivery rhythms. The result is change fatigue, slow execution, and reporting that
              doesn’t drive action.
            </p>
            <p className="mt-4 text-sm text-neutral-subtle">
              Acooya bridges operating model design, delivery enablement, and decision-grade insights — so leaders
              can move faster with less friction and clearer outcomes.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                { k: "Hybrid capability", v: "Strategy + delivery + analytics" },
                { k: "Cross-industry", v: "Aviation, government, finance, transformation" },
                { k: "Stakeholder-first", v: "Alignment, facilitation, clarity" },
                { k: "Commercial lens", v: "Value, ROI, and measurable outcomes" },
              ].map((x) => (
                <div key={x.k} className="rounded-3xl border border-neutral-line bg-neutral-bg p-5">
                  <p className="text-sm font-semibold text-neutral-ink">{x.k}</p>
                  <p className="mt-1 text-sm text-neutral-subtle">{x.v}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-10 md:col-span-2">
            <H2>How we work</H2>
            <div className="mt-6 space-y-3">
              {[
                { t: "Diagnose", d: "Understand goals, constraints, and delivery friction." },
                { t: "Design", d: "Define a practical operating rhythm and decision rights." },
                { t: "Embed", d: "Support adoption with templates, cadence, and coaching." },
                { t: "Measure", d: "Make progress visible with decision-grade reporting." },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-neutral-line bg-white p-5">
                  <p className="text-sm font-semibold text-neutral-ink">{x.t}</p>
                  <p className="mt-2 text-sm text-neutral-subtle">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-6 text-white shadow-lift">
              <p className="text-sm font-semibold">Start with a focused first step</p>
              <p className="mt-2 text-sm text-white/90">
                A short engagement can deliver clarity, governance, and a usable plan — quickly.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="secondary">Book a call</Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}
