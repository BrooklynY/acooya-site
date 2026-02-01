import Button from "../ui/Button";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden">
        {/* subtle background wash */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute top-10 right-[10%] h-[380px] w-[380px] rounded-full bg-brand2/12 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
        </div>

        <Card className="relative p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-sm font-medium text-muted">Next step</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
                Ready to simplify complexity and move faster?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Book a short call. We’ll clarify your outcomes, identify the smallest high-leverage first step, and
                recommend the right service path — operating model, delivery enablement, or decision-grade reporting.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" variant="brand">
                  Book a call
                </Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  20–30 min discovery
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
                  Clear outputs & next steps
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                  No obligation
                </span>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="w-full rounded-3xl border border-line bg-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Typical engagement
                </p>
                <p className="mt-3 text-sm font-semibold text-ink">
                  2–6 week sprint
                </p>
                <p className="mt-2 text-sm text-muted">
                  Discovery → blueprint → delivery plan → reporting rhythm.
                </p>

                <div className="mt-5 space-y-2 text-sm">
                  {[
                    "Operating model + governance",
                    "Delivery cadence + alignment",
                    "Dashboards leaders trust",
                  ].map((x) => (
                    <div key={x} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand2" />
                      <span className="text-muted">{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
