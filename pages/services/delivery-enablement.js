import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <span className="text-sm leading-relaxed text-muted">{children}</span>
    </li>
  );
}

export default function DeliveryEnablement() {
  return (
    <Layout>
      <PageHeader
        kicker="Service"
        title="Delivery Enablement"
        lead="Turn ambiguity into execution — alignment, prioritisation, and momentum with a calm, repeatable cadence."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Back to services" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Best for
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Delivery environments with many stakeholders",
                "Programs with shifting scope and priorities",
                "Teams blocked by dependencies and approvals",
                "Leaders needing execution clarity fast",
              ].map((t) => (
                <div key={t} className="rounded-2xl border border-line bg-bg p-3 text-sm text-muted">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                  {t}
                </div>
              ))}
            </div>
          </Card>
        }
      />

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-8">
            <p className="text-sm font-medium text-muted">Typical problems</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              Plans exist — but momentum doesn’t.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Unclear scope, success measures, or prioritisation criteria",
                "Stakeholders disagree on what ‘good’ looks like",
                "Status isn’t decision-grade; forums don’t unblock work",
                "Dependencies and approvals stall delivery",
                "Execution is noisy and unpredictable",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <p className="text-sm font-medium text-muted">What you get</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              A cadence that keeps delivery moving.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Execution plan (milestones, owners, dependencies)",
                "Stakeholder alignment pack (scope, success measures, decisions)",
                "Cadence + decision forums (weekly rhythm, escalation paths)",
                "Risk and dependency rhythm (lightweight, repeatable)",
                "Reporting that drives action (not admin)",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pt-0">
        <Card className="p-10">
          <p className="text-sm font-medium text-muted">Approach</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Align → Plan → Enable
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                t: "Align",
                d: "Clarify goals, success measures, constraints, and decision makers. Reduce ambiguity early.",
              },
              {
                step: "02",
                t: "Plan",
                d: "Build a practical execution plan: milestones, dependencies, risks, and a workable cadence.",
              },
              {
                step: "03",
                t: "Enable",
                d: "Facilitate delivery rhythm and decision forums to maintain momentum and reduce blockers.",
              },
            ].map((x) => (
              <Card key={x.step} className="p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  Step {x.step}
                </p>
                <h3 className="mt-3 font-serif text-xl tracking-tight text-ink">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{x.d}</p>
              </Card>
            ))}
          </div>
        </Card>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-10 shadow-soft">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Need delivery momentum fast?
          </h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
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

