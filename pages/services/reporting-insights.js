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

export default function ReportingInsights() {
  return (
    <Layout>
      <PageHeader
        kicker="Service"
        title="Reporting & Decision Support"
        lead="Decision-grade insights: KPI frameworks, dashboards, and reporting rhythms leaders trust — designed to drive action."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Back to services" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Best for
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Leaders needing reliable visibility across initiatives",
                "Teams spending too long preparing reports",
                "Programs where metrics exist but aren’t trusted",
                "Organisations linking metrics to governance decisions",
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
              Reporting exists — but leaders still can’t decide.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Inconsistent metrics and definitions across teams",
                "Dashboards look good but don’t drive action",
                "Reporting overhead is high and clarity is still low",
                "No rhythm linking metrics to governance decisions",
                "Data quality issues reduce trust",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <p className="text-sm font-medium text-muted">What you get</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              Metrics people trust — tied to governance.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "KPI framework (definitions, owners, frequency, sources)",
                "Executive dashboard(s) and decision packs",
                "Reporting rhythm aligned to leadership forums",
                "Metrics glossary + change control (protect trust)",
                "Optional uplift: automation opportunities to reduce manual reporting",
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
            Define → Design → Embed
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                t: "Define",
                d: "Agree on success measures: KPI/OKR definitions, owners, and decision use-cases.",
              },
              {
                step: "02",
                t: "Design",
                d: "Build dashboards and reporting packs aligned to leadership forums and decisions.",
              },
              {
                step: "03",
                t: "Embed",
                d: "Establish a reporting rhythm and governance so metrics lead to action, not admin.",
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
            Want decision-grade reporting leaders trust?
          </h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
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

