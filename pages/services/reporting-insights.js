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

export default function ReportingInsights() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Service</Kicker>
          <H1 className="mt-4">Reporting & Decision Support</H1>
          <Lead className="mt-6">
            Decision-grade insights: KPI/OKR frameworks, dashboards, and reporting rhythms leaders trust — designed to drive action.
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
                "Leaders needing reliable visibility across initiatives",
                "Teams spending too much time manually preparing reports",
                "Programs where metrics exist but aren’t trusted",
                "Organisations wanting a KPI/OKR framework that drives decisions",
              ]}
              dot="bg-brand-green"
            />
          </Card>

          <Card className="p-8">
            <H2>Typical problems</H2>
            <BulletList
              items={[
                "Inconsistent metrics and definitions across teams",
                "Dashboards that look good but don’t drive action",
                "Reporting overhead is high, and leaders still lack clarity",
                "No governance rhythm linking metrics to decisions",
                "Data quality issues reduce trust",
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
              title: "Define",
              desc: "Agree on success measures: KPI/OKR definitions, owners, and decision use-cases.",
            },
            {
              step: "02",
              title: "Design",
              desc: "Build dashboards and reporting packs aligned to leadership forums and decisions.",
            },
            {
              step: "03",
              title: "Embed",
              desc: "Establish a reporting rhythm and governance so metrics lead to action, not admin.",
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
                "KPI framework (definitions, owners, frequency, data sources)",
                "Executive dashboard(s) and decision packs",
                "Reporting rhythm aligned to governance forums",
                "Metrics glossary and change control (to protect trust)",
                "Optional uplift: automation opportunities to reduce manual reporting",
              ]}
              dot="bg-brand-blue"
            />
          </Card>

          <Card className="p-8">
            <H2>Outcomes</H2>
            <BulletList
              items={[
                "Leaders get clear, trusted visibility",
                "Reduced reporting overhead for teams",
                "Metrics become actionable and decision-linked",
                "Improved accountability and follow-through",
                "Progress becomes measurable and comparable",
              ]}
              dot="bg-brand-green"
            />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-10 text-white shadow-lift">
          <H2 className="text-white">Want decision-grade reporting leaders trust?</H2>
          <p className="mt-4 max-w-2xl text-white/90">
            Book a short call and we’ll align on what leaders need to decide — then design the dashboard rhythm to match.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">Book a call</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
