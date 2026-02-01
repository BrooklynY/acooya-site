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

export default function DeliveryEnablement() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Delivery Enablement</H1>
          <Lead className="mt-6">
            Turn ambiguity into execution — alignment, prioritisation, and momentum with a calm, repeatable cadence.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">Book a call</Button>
            <Button href="/services" variant="secondary">Back to services</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8 md:p-10">
            <H2>Who this is for</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Leaders with a mandate to deliver under time and resource constraints",
                "Teams stuck in analysis paralysis or constant rework",
                "Programs with many stakeholders and competing priorities",
                "Delivery environments where planning exists but momentum doesn’t",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Typical problems</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Unclear scope, success measures, or prioritisation criteria",
                "Stakeholders disagree on what ‘good’ looks like",
                "Delivery cadence is inconsistent and status isn’t decision-grade",
                "Teams are blocked by dependencies and slow approvals",
                "Plans exist, but execution is not predictable",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted">Approach</p>
            <H2 className="mt-3">Clarity → cadence → momentum</H2>
          </div>
          <span className="hidden md:inline rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Typical: 2–6 weeks
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { step: "01", title: "Align", desc: "Clarify goals, success measures, constraints, and decision makers. Reduce ambiguity early." },
            { step: "02", title: "Plan", desc: "Build a practical execution plan: milestones, dependencies, risks, and a workable cadence." },
            { step: "03", title: "Enable", desc: "Facilitate delivery rhythm and decision forums to maintain momentum and reduce blockers." },
          ].map((x) => (
            <Card key={x.step} className="p-8 md:p-10">
              <p className="text-xs font-semibold text-muted">{x.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{x.title}</h3>
              <Body className="mt-3">{x.desc}</Body>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8 md:p-10">
            <H2>Deliverables</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Execution plan (milestones, owners, dependencies)",
                "Stakeholder alignment pack (success measures, scope, decisions needed)",
                "Cadence + decision forums (weekly rhythm, escalation paths)",
                "Risk and dependency management approach",
                "Simple reporting that drives action",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Outcomes</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Improved stakeholder confidence and clarity",
                "Fewer late-stage changes and less rework",
                "Faster approvals and smoother decision flow",
                "More predictable execution and momentum",
                "Clear progress visibility for leaders",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-line bg-gradient-to-r from-brand/12 to-brand2/12 p-9 md:p-12">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Need delivery momentum fast?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Book a short call and we’ll identify your biggest blockers and the fastest first step to unlock progress.
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
