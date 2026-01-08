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

export default function DeliveryEnablement() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Delivery Enablement</H1>
          <Lead className="mt-6">
            Turn ambiguity into execution — alignment, prioritisation, and momentum with a calm, repeatable cadence.
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
                "Leaders with a mandate to deliver under time and resource constraints",
                "Teams stuck in analysis paralysis or constant rework",
                "Programs with many stakeholders and competing priorities",
                "Delivery environments where planning exists but momentum doesn’t",
              ]}
              dot="bg-brand-green"
            />
          </Card>

          <Card className="p-8">
            <H2>Typical problems</H2>
            <BulletList
              items={[
                "Unclear scope, success measures, or prioritisation criteria",
                "Stakeholders disagree on what ‘good’ looks like",
                "Delivery cadence is inconsistent and status isn’t decision-grade",
                "Teams are blocked by dependencies and slow approvals",
                "Plans exist, but execution is not predictable",
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
              title: "Align",
              desc: "Clarify goals, success measures, constraints, and decision makers. Reduce ambiguity early.",
            },
            {
              step: "02",
              title: "Plan",
              desc: "Build a practical execution plan: milestones, dependencies, risks, and a workable cadence.",
            },
            {
              step: "03",
              title: "Enable",
              desc: "Facilitate delivery rhythm and decision forums to maintain momentum and reduce blockers.",
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
                "Execution plan (milestones, owners, dependencies)",
                "Stakeholder alignment pack (success measures, scope, decisions needed)",
                "Cadence + decision forums (weekly rhythm, escalation paths)",
                "Risk and dependency management approach",
                "Simple reporting that drives action",
              ]}
              dot="bg-brand-blue"
            />
          </Card>

          <Card className="p-8">
            <H2>Outcomes</H2>
            <BulletList
              items={[
                "Improved stakeholder confidence and clarity",
                "Fewer late-stage changes and less rework",
                "Faster approvals and smoother decision flow",
                "More predictable execution and momentum",
                "Clear progress visibility for leaders",
              ]}
              dot="bg-brand-green"
            />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
          <H2 className="text-white">Need delivery momentum fast?</H2>
          <p className="mt-4 max-w-2xl text-white/90">
            Book a short call and we’ll identify your biggest blockers and the fastest first step to unlock progress.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">Book a call</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
