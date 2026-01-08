import Layout from "../../components/Layout/Layout";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Kicker, H1, H2, Lead } from "../../components/ui/Type";

function BulletList({ items, dot = "bg-brand-blue" }) {
  return (
    <ul className="mt-4 space-y-3 text-sm text-neutral-subtle">
      {items.map((x) => (
        <li key={x} className="flex gap-3">
          <span className={`mt-2 h-2 w-2 rounded-full ${dot}`} />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default function OperatingModel() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Transformation & Operating Model</H1>
          <Lead className="mt-6">
            Practical governance, decision rights, and ways of working that scale — so delivery becomes calmer, faster, and measurable.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Book a call</Button>
            <Button href="/services" variant="secondary">Back to services</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8">
            <H2>Who this is for</H2>
            <BulletList
              items={[
                "Leaders driving change who need clearer governance and accountability",
                "Teams blocked by cross-functional dependencies and unclear ownership",
                "Programs where delivery exists but outcomes aren’t landing consistently",
                "Organisations experiencing change fatigue and unclear ways of working",
              ]}
              dot="bg-brand-green"
            />
          </Card>

          <Card className="p-8">
            <H2>Typical problems</H2>
            <BulletList
              items={[
                "Too many priorities and no consistent decision forum",
                "Slow approvals, unclear decision rights, and rework",
                "Inconsistent delivery rhythm across teams",
                "Stakeholders misaligned on what success looks like",
                "Reporting exists but doesn’t drive action",
              ]}
              dot="bg-brand-rose"
            />
          </Card>
        </div>
      </Section>

      <Section>
        <H2>Approach</H2>
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
            <Card key={x.step} className="p-8">
              <p className="text-xs font-semibold text-brand-gold">{x.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{x.title}</h3>
              <p className="mt-3 text-sm text-neutral-subtle">{x.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8">
            <H2>Deliverables</H2>
            <BulletList
              items={[
                "Operating model blueprint (roles, responsibilities, decision rights)",
                "Governance and cadence (forums, rituals, RACI/DRI)",
                "Prioritisation and intake process (lightweight and scalable)",
                "Metrics and reporting rhythm aligned to decision forums",
                "Adoption support plan (optional)",
              ]}
              dot="bg-brand-blue"
            />
          </Card>

          <Card className="p-8">
            <H2>Outcomes</H2>
            <BulletList
              items={[
                "Faster, clearer decision-making",
                "Improved alignment across stakeholders and teams",
                "Reduced delivery friction and rework",
                "A repeatable operating rhythm that scales",
                "Measurable progress leaders can trust",
              ]}
              dot="bg-brand-green"
            />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
          <H2 className="text-white">Want an operating rhythm that actually works?</H2>
          <p className="mt-4 max-w-2xl text-white/90">
            Book a short call and we’ll map your current constraints, clarify outcomes, and propose a practical first step.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">Book a call</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
