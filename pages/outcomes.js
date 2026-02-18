import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Outcomes() {
  const outcomes = [
    {
      t: "Faster decisions",
      d: "Clear decision rights and forums reduce rework and unblocking delays.",
    },
    {
      t: "Stronger accountability",
      d: "Roles, ownership, and delivery rhythm align teams and stakeholders.",
    },
    {
      t: "Reduced delivery friction",
      d: "Dependencies and approvals become visible, structured, and manageable.",
    },
    {
      t: "Decision-grade reporting",
      d: "Dashboards and packs that leaders trust — built for action, not admin.",
    },
    {
      t: "Measurable progress",
      d: "KPIs and reporting cadence tied directly to governance and outcomes.",
    },
    {
      t: "Calmer execution",
      d: "Less noise, more clarity — a rhythm teams can sustain.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        kicker="Outcomes"
        title="Make progress visible — and decisions easier."
        lead="Acooya helps leaders reduce complexity, align teams, and deliver measurable outcomes through practical operating models, delivery enablement, and decision-grade reporting."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      />

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((x) => (
            <Card key={x.t} className="p-7">
              <h2 className="font-serif text-xl tracking-tight text-ink">{x.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Card className="p-10">
          <p className="text-sm font-medium text-muted">Typical engagement</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Diagnose → Design → Enable → Report
          </h2>
          <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-muted">
            We clarify outcomes and constraints, design a practical operating rhythm, enable delivery forums and
            cadence, then implement reporting that supports decisions — not admin.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/methodology" variant="secondary">
              View methodology
            </Button>
            <Button href="/contact" variant="brand">
              Discuss your situation
            </Button>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}


