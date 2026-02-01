import Layout from "../components/Layout/Layout";
import Hero from "../components/Sections/Hero";
import ServicesPreview from "../components/Sections/ServicesPreview";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H2, Lead, Body } from "../components/ui/Type";
import CTA from "../components/Sections/CTA";

function Stat({ k, v }) {
  return (
    <Card className="p-6">
      <p className="text-sm font-semibold text-ink">{k}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{v}</p>
    </Card>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <Hero />

      {/* SERVICES PREVIEW */}
      <ServicesPreview />

      {/* HOW WE WORK */}
      <Section className="pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Kicker>How we work</Kicker>
            <H2 className="mt-3">A calm, repeatable rhythm that reduces friction.</H2>
            <Lead className="mt-5">
              We focus on clarity first — then we design a practical model and delivery cadence that teams can actually run.
            </Lead>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
              <Button href="/contact" variant="brand">
                Book a call
              </Button>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  desc: "Clarify goals, constraints, stakeholders, and decision blockers. Define what “good” looks like.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Create operating rhythm, decision rights, governance, and templates that scale without bureaucracy.",
                },
                {
                  step: "03",
                  title: "Enable",
                  desc: "Embed cadence, unblock dependencies, and establish reporting so progress becomes visible and comparable.",
                },
              ].map((x) => (
                <Card key={x.step} className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold text-muted">Step {x.step}</p>
                    <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                      Typical: 2–6 weeks
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-ink">{x.title}</p>
                  <Body className="mt-2">{x.desc}</Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROOF / VALUE STRIP */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <Kicker>What you get</Kicker>
              <H2 className="mt-3">Decision-grade visibility — without the reporting burden.</H2>
              <Lead className="mt-5">
                Light, scalable governance. Clean artefacts. Reporting that drives action — not admin.
              </Lead>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Stat k="Operating rhythm" v="Clear forums, decision rights, and cadence that teams can sustain." />
                <Stat k="Delivery enablement" v="Alignment, sequencing, and dependency control to keep momentum." />
                <Stat k="KPI clarity" v="Definitions, ownership, and reporting rhythm leaders can trust." />
                <Stat k="Practical artefacts" v="Templates and packs that reduce rework and increase confidence." />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA />
    </Layout>
  );
}
