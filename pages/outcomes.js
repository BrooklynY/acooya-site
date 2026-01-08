import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, H2, Lead } from "../components/ui/Type";

function Metric({ value, label }) {
  return (
    <div className="rounded-3xl border border-neutral-line bg-neutral-bg p-5">
      <p className="text-lg font-semibold text-neutral-ink">{value}</p>
      <p className="mt-1 text-sm text-neutral-subtle">{label}</p>
    </div>
  );
}

function CaseCard({ title, context, challenge, approach, outcome, tags }) {
  return (
    <Card className="p-10">
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-line bg-white px-3 py-1 text-xs font-semibold text-neutral-subtle"
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-neutral-subtle">{context}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-subtle">Challenge</p>
          <p className="mt-2 text-sm text-neutral-subtle">{challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-subtle">Approach</p>
          <p className="mt-2 text-sm text-neutral-subtle">{approach}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-subtle">Outcome</p>
          <p className="mt-2 text-sm text-neutral-subtle">{outcome}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Outcomes() {
  return (
    <Layout>
      {/* HERO */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Outcomes</Kicker>
          <H1 className="mt-4">Proof, not promises.</H1>
          <Lead className="mt-6">
            Acooya delivers clarity, stakeholder alignment, and measurable outcomes — supported by reporting leaders trust.
            Below are representative examples of the types of outcomes we deliver.
          </Lead>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            <Metric value="Decision clarity" label="Defined roles + decision rights" />
            <Metric value="Delivery momentum" label="Better cadence + prioritisation" />
            <Metric value="Reduced friction" label="Fewer blockers + less rework" />
            <Metric value="Visible progress" label="KPIs and decision-grade reporting" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Book a call</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>
        </div>
      </Section>

      {/* CASES */}
      <Section className="pt-0">
        <div className="grid gap-4">
          <CaseCard
            title="Operating model uplift for a complex platform transition"
            tags={["Operating model", "Governance", "Transformation"]}
            context="A multi-team platform transition with heavy cross-dependencies and unclear decision-making, creating delivery friction and inconsistent progress reporting."
            challenge="Teams were blocked by unclear ownership, competing priorities, and unclear governance forums."
            approach="Mapped decision rights, streamlined governance forums, introduced a prioritisation rhythm, and built reporting that made progress and risk visible."
            outcome="Faster decisions, reduced dependency churn, clearer stakeholder alignment, and a repeatable cadence that scaled across teams."
          />

          <CaseCard
            title="Delivery enablement for cross-functional change with multiple stakeholders"
            tags={["Delivery enablement", "Stakeholder alignment", "Planning"]}
            context="A high-stakes change initiative where stakeholders had different definitions of success and delivery timelines were slipping."
            challenge="Misalignment across stakeholders caused rework, scope churn, and slow approvals."
            approach="Facilitated alignment workshops, clarified success metrics, created an execution plan with milestones, and introduced a weekly decision forum."
            outcome="Improved stakeholder confidence, fewer late-stage changes, and a delivery plan that supported steady execution."
          />

          <CaseCard
            title="Decision-grade reporting and KPI uplift"
            tags={["Reporting", "Dashboards", "Insights"]}
            context="Existing reporting existed but did not support decision-making; teams spent time producing data rather than acting on it."
            challenge="Metrics were inconsistent, and dashboards were not trusted or actionable."
            approach="Defined a KPI framework, established a reporting rhythm, and delivered dashboards aligned to leadership decision forums."
            outcome="Leaders gained actionable visibility, teams reduced manual reporting overhead, and progress became measurable and comparable."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
          <H2 className="text-white">Want outcomes like these?</H2>
          <p className="mt-4 max-w-2xl text-white/90">
            Book a short call and we’ll map your context, clarify what success looks like, and propose a practical first step.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">Book a call</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
