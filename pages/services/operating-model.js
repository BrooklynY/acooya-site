import Layout from "../../components/Layout/Layout";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Kicker, H1, H2, Lead, Body } from "../../components/ui/Type";

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <span className="text-sm text-muted">{children}</span>
    </li>
  );
}

export default function OperatingModel() {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Operating Model & Transformation</H1>
          <Lead className="mt-6">
            Practical governance, decision rights, and ways of working that scale — so delivery becomes calmer, faster, and measurable.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">Book a call</Button>
            <Button href="/services" variant="secondary">Back to services</Button>
          </div>
        </div>
      </Section>

      {/* Who + Problems */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8 md:p-10">
            <H2>Who this is for</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Leaders driving change who need clearer governance and accountability",
                "Teams blocked by cross-functional dependencies and unclear ownership",
                "Programs where delivery exists but outcomes aren’t landing consistently",
                "Organisations experiencing change fatigue and unclear ways of working",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Typical problems</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Too many priorities and no consistent decision forum",
                "Slow approvals, unclear decision rights, and rework",
                "Inconsistent delivery rhythm across teams",
                "Stakeholders misaligned on what success looks like",
                "Reporting exists but doesn’t drive action",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted">Approach</p>
            <H2 className="mt-3">A calm, repeatable operating rhythm</H2>
          </div>
          <span className="hidden md:inline rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Typical: 2–6 weeks
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Diagnose",
              desc: "Understand goals, constraints, stakeholders, and delivery friction. Identify what’s slowing decisions and execution.",
            },
            {
              step: "02",
              title: "Design",
              desc: "Define decision rights, governance, roles, and a practical operating rhythm tailored to your environment.",
            },
            {
              step: "03",
              title: "Embed",
              desc: "Roll out templates, cadence, and coaching so the model sticks — and progress becomes visible.",
            },
          ].map((x) => (
            <Card key={x.step} className="p-8 md:p-10">
              <p className="text-xs font-semibold text-muted">{x.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{x.title}</h3>
              <Body className="mt-3">{x.desc}</Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deliverables + Outcomes */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8 md:p-10">
            <H2>Deliverables</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Operating model blueprint (roles, responsibilities, decision rights)",
                "Governance and cadence (forums, rituals, RACI/DRI)",
                "Prioritisation and intake process (lightweight and scalable)",
                "Metrics and reporting rhythm aligned to decision forums",
                "Adoption support plan (optional)",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Outcomes</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Faster, clearer decision-making",
                "Improved alignment across stakeholders and teams",
                "Reduced delivery friction and rework",
                "A repeatable operating rhythm that scales",
                "Measurable progress leaders can trust",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl border border-line bg-gradient-to-r from-brand/12 to-brand2/12 p-9 md:p-12">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Want an operating rhythm that actually works?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Book a short call and we’ll map your current constraints, clarify outcomes, and propose a practical first step.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">Book a call</Button>
            <Button href="/services" variant="secondary">Back to services</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
