import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Kicker, H1, Lead } from "../ui/Type";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* soft brand wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute top-12 left-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand-rose/10 blur-3xl" />
        <div className="absolute top-20 left-2/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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
                <Button href="/contact">Book a call</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end">
              <div className="rounded-3xl border border-neutral-line bg-neutral-bg p-6">
                <Image
                  src="/brand/acooya.png"
                  alt="Acooya"
                  width={72}
                  height={72}
                />
                <p className="mt-4 text-sm text-neutral-subtle">
                  Advisory with calm authority.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {[
              { k: "10+ yrs", v: "Transformation & delivery" },
              { k: "Cross-industry", v: "Aviation, govt, finance" },
              { k: "Data-led", v: "KPIs, dashboards, insights" },
              { k: "Practical", v: "Clear, usable outputs" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-neutral-line bg-neutral-bg p-4">
                <p className="text-lg font-semibold text-neutral-ink">{x.k}</p>
                <p className="mt-1 text-sm text-neutral-subtle">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

