import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Kicker, H1, Lead } from "../ui/Type";

function MiniTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
      {children}
    </span>
  );
}

function SignalItem({ title, desc }) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-4">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{desc}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* calm editorial wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-brand/14 blur-3xl" />
        <div className="absolute top-10 left-[10%] h-[520px] w-[520px] rounded-full bg-brand2/10 blur-3xl" />
        <div className="absolute top-32 right-[8%] h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <Section className="pt-10 md:pt-16" pad={false}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="relative rounded-3xl border border-line bg-panel/80 p-7 shadow-soft backdrop-blur md:p-12">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              {/* Left: editorial story */}
              <div className="md:col-span-7">
                <Kicker>Operating model • Delivery enablement • Decision-grade insights</Kicker>

                <H1 className="mt-4">
                  Calm, outcome-led transformation for complex organisations.
                </H1>

                <Lead className="mt-6">
                  Acooya helps leaders simplify complexity, design scalable ways of working, and deliver measurable outcomes —
                  supported by reporting that makes progress visible.
                </Lead>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/contact" variant="brand">
                    Book a call
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore services
                  </Button>
                  <span className="text-xs text-muted">
                    Typically: discovery → blueprint → delivery rhythm → dashboards
                  </span>
                </div>

                {/* trust / positioning strip */}
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <MiniTag>Senior facilitation</MiniTag>
                  <MiniTag>Practical artefacts</MiniTag>
                  <MiniTag>Decision-grade reporting</MiniTag>
                  <MiniTag>Calm authority</MiniTag>
                </div>

                {/* subtle “proof” line (placeholder-ready) */}
                <p className="mt-6 text-xs text-muted">
                  Trusted approach across aviation, government, and financial services. (Client examples can be anonymised.)
                </p>
              </div>

              {/* Right: signal card stack */}
              <div className="md:col-span-5">
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
                        <p className="mt-0.5 text-xs text-muted">Boutique consulting • calm authority</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-muted">
                      Premium advisory
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <SignalItem
                      title="Operating model"
                      desc="Decision rights, governance forums, delivery cadence — designed to stick."
                    />
                    <SignalItem
                      title="Delivery enablement"
                      desc="Alignment + execution structure that reduces friction and rework."
                    />
                    <SignalItem
                      title="Decision-grade insights"
                      desc="KPIs, dashboards, and reporting rhythms leaders trust."
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-4">
                    <p className="text-xs font-medium text-ink">Typical engagement</p>
                    <p className="mt-1 text-sm text-muted">
                      2–6 weeks to deliver concrete artefacts and an operating rhythm teams can run.
                    </p>
                  </div>
                </Card>

                {/* micro “metrics” row */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { k: "10+ yrs", v: "Transformation & delivery" },
                    { k: "Cross-industry", v: "Aviation • Govt • Finance" },
                    { k: "Data-led", v: "KPIs • Dashboards • Insight packs" },
                    { k: "Practical", v: "Clear, usable outputs" },
                  ].map((x) => (
                    <Card key={x.k} className="p-4">
                      <p className="text-base font-semibold text-ink">{x.k}</p>
                      <p className="mt-1 text-sm text-muted">{x.v}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom divider hint */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
              <span>Operating model first. Delivery next. Reporting that makes progress visible.</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Sydney • Remote-ready
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

