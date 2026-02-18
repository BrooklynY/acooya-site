import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <Layout>
      <PageHeader
        kicker="Company"
        title="Boutique consulting with calm authority."
        lead="Acooya works with leaders to simplify complexity, design scalable ways of working, and deliver measurable outcomes — supported by reporting that makes progress visible."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              What you can expect
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Clear thinking, clearly written",
                "Practical artefacts teams can use",
                "Calm facilitation and alignment",
                "Decision-grade reporting",
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
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Operating model first",
              d: "Clarify ownership, decision rights, and rhythm before scaling delivery.",
            },
            {
              t: "Outcomes over theatre",
              d: "Focus on measurable progress — not busywork or unnecessary artefacts.",
            },
            {
              t: "Visibility builds trust",
              d: "Reporting should reduce noise and help leaders decide with confidence.",
            },
          ].map((x) => (
            <Card key={x.t} className="p-7">
              <h2 className="font-serif text-xl tracking-tight text-ink">{x.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Card className="p-8 md:p-10">
          <p className="text-sm font-medium text-muted">How we work</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Calm delivery, clean artefacts, decisions that stick.
          </h2>
          <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-muted">
            Most consulting fails because the operating system of delivery is unclear: who decides, how work flows,
            what “good” looks like, and how progress is measured. Acooya builds that operating system — then enables
            delivery and reporting to keep it working.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/methodology" variant="secondary">
              View methodology
            </Button>
            <Button href="/contact" variant="brand">
              Start a conversation
            </Button>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
