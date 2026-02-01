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

export default function ReportingInsights() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Reporting & Decision Support</H1>
          <Lead className="mt-6">
            Decision-grade insights: KPI frameworks, dashboards, and reporting rhythms leaders trust — designed to drive action.
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
                "Leaders needing reliable visibility across initiatives",
                "Teams spending too much time manually preparing reports",
                "Programs where metrics exist but aren’t trusted",
                "Organisations wanting a KPI/OKR framework that drives decisions",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Typical problems</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Inconsistent metrics and definitions across teams",
                "Dashboards that look good but don’t drive action",
                "Reporting overhead is high, and leaders still lack clarity",
                "No governance rhythm linking metrics to decisions",
                "Data quality issues reduce trust",
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
            <H2 className="mt-3">Define → design → embed</H2>
          </div>
          <span className="hidden md:inline rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
            Typical: 2–6 weeks
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { step: "01", title: "Define", desc: "Agree on success measures: KPI/OKR definitions, owners, and decision use-cases." },
            { step: "02", title: "Design", desc: "Build dashboards and reporting packs aligned to leadership forums and decisions." },
            { step: "03", title: "Embed", desc: "Establish a reporting rhythm and governance so metrics lead to action, not admin." },
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
                "KPI framework (definitions, owners, frequency, data sources)",
                "Executive dashboard(s) and decision packs",
                "Reporting rhythm aligned to governance forums",
                "Metrics glossary and change control (to protect trust)",
                "Optional uplift: automation opportunities to reduce manual reporting",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8 md:p-10">
            <H2>Outcomes</H2>
            <ul className="mt-5 space-y-3">
              {[
                "Leaders get clear, trusted visibility",
                "Reduced reporting overhead for teams",
                "Metrics become actionable and decision-linked",
                "Improved accountability and follow-through",
                "Progress becomes measurable and comparable",
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
            Want decision-grade reporting leaders trust?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Book a short call and we’ll align on what leaders need to decide — then design the dashboard rhythm to match.
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
