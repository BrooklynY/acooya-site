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

export default function OperatingModel() {
  return (
    <Layout>
      <PageHeader
        kicker="Service"
        title="Operating Model & Transformation"
        lead="Practical governance, decision rights, and ways of working that scale — so delivery becomes calmer, faster, and measurable."
        primaryCta={{ href: "/contact", label: "Book a call" }}
        secondaryCta={{ href: "/services", label: "Back to services" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Best for
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Leaders driving cross-functional change",
                "Programs blocked by unclear ownership",
                "Teams with heavy dependency management",
                "Organisations with change fatigue",
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
              When governance is unclear, everything slows.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Too many priorities and no consistent decision forum",
                "Slow approvals, unclear decision rights, and rework",
                "Inconsistent delivery rhythm across teams",
                "Stakeholders misaligned on what success looks like",
                "Reporting exists but doesn’t drive action",
              ].map((x) => (
                <Bullet key={x}>{x}</Bullet>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <p className="text-sm font-medium text-muted">What you get</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              A model people can actually operate.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Operating model blueprint (roles, responsibilities, decision rights)",
                "Governance and cadence (forums, rituals, DRI/RACI)",
                "Intake + prioritisation approach (lightweight and scalable)",
                "Metrics and reporting rhythm aligned to decision forums",
                "Adoption plan and enablement templates",
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
            Diagnose → Design → Embed
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                t: "Diagnose",
                d: "Understand goals, constraints, stakeholders, and delivery friction. Identify what’s slowing decisions and execution.",
              },
              {
                step: "02",
                t: "Design",
                d: "Define decision rights, governance, roles, and a practical operating rhythm tailored to your environment.",
              },
              {
                step: "03",
                t: "Embed",
                d: "Roll out templates, cadence, and coaching so the model sticks — and progress becomes visible.",
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
            Want an operating rhythm that actually works?
          </h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
            Book a short call and we’ll map your constraints, clarify outcomes, and propose a practical first step.
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


