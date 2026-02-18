import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Methodology() {
  const steps = [
    {
      n: "01",
      t: "Diagnose",
      d: "Clarify outcomes, constraints, decision-makers, and delivery friction. Make the real problem explicit.",
    },
    {
      n: "02",
      t: "Design",
      d: "Define the operating rhythm: governance, decision rights, cadence, and the artefacts people will use.",
    },
    {
      n: "03",
      t: "Deliver",
      d: "Enable execution: sequencing, dependency clarity, reporting that drives action, and adoption support.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        kicker="Methodology"
        title="A calm, repeatable approach to complex change."
        lead="Operating model first, then delivery, then decision-grade insights — designed for adoption, not theatre."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
        aside={
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              What “good” looks like
            </p>
            <div className="space-y-3">
              {[
                "Clear decision rights",
                "Stable cadence and forums",
                "Practical artefacts",
                "Measurable outcomes",
              ].map((t) => (
                <div key={t} className="rounded-2xl border border-line bg-bg p-3 text-sm text-muted">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="mx-auto mt-10 max-w-6xl px-5 md:mt-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="p-7">
              <p className="text-xs font-semibold text-muted">{s.n}</p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-ink">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-4 p-8 md:p-10">
          <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
            The goal: progress you can see.
          </h2>
          <p className="mt-3 max-w-[72ch] text-sm leading-relaxed text-muted">
            Leaders should be able to answer: What are we doing? Why? Who owns it? What decisions are needed this week?
            Are we progressing — and how do we know?
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
            <Button href="/contact" variant="brand">
              Book a call
            </Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
