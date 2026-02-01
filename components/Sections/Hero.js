import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Kicker, H1, Lead } from "../ui/Type";

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-line bg-bg/70 p-3">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
      <p className="text-sm text-ink">{children}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute top-12 left-[10%] h-[420px] w-[420px] rounded-full bg-brand2/10 blur-3xl" />
        <div className="absolute top-28 right-[8%] h-[380px] w-[380px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <Section className="pt-10 md:pt-16">
        <div className="relative rounded-3xl border border-line bg-panel/80 p-7 shadow-soft backdrop-blur md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Left: editorial copy */}
            <div className="max-w-3xl">
              <Kicker>Operating model • Delivery enablement • Decision-grade insights</Kicker>

              <H1 className="mt-4">
                Calm, outcome-led transformation for complex organisations.
              </H1>

              <Lead className="mt-6">
                Acooya helps leaders simplify complexity, design scalable ways of working, and deliver measurable outcomes —
                supported by reporting that makes progress visible.
              </Lead>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="brand">
                  Book a call
                </Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Calm authority
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
                  Decision-grade clarity
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                  Measurable outcomes
                </span>
              </div>
            </div>

            {/* Right: capability card */}
            <div className="w-full max-w-md md:w-[380px]">
              <Card className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
                      <Image
                        src="/brand/acooya.png"
                        alt="Acooya"
                        width={34}
                        height={34}
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Acooya Consulting</p>
                      <p className="mt-0.5 text-xs text-muted">Advisory with calm authority</p>
                    </div>
                  </div>

                  <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                    Boutique consulting
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <CheckItem>Operating model & ways of working</CheckItem>
                  <CheckItem>Delivery enablement & governance</CheckItem>
                  <CheckItem>KPI reporting & decision support</CheckItem>
                </div>

                <div className="mt-6 rounded-2xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-4">
                  <p className="text-xs font-medium text-ink">Typical engagement</p>
                  <p className="mt-1 text-sm text-muted">
                    Discovery → blueprint → delivery plan → dashboarded outcomes.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Metrics row */}
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {[
              { k: "10+ yrs", v: "Transformation & delivery" },
              { k: "Cross-industry", v: "Aviation, govt, finance" },
              { k: "Data-led", v: "KPIs, dashboards, insights" },
              { k: "Practical", v: "Clear, usable outputs" },
            ].map((x) => (
              <Card key={x.k} className="p-4">
                <p className="text-lg font-semibold text-ink">{x.k}</p>
                <p className="mt-1 text-sm text-muted">{x.v}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
