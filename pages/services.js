import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Services() {
  const pillars = [
    {
      title: "Transformation & Operating Model",
      tag: "Priority #1",
      desc: "Design practical ways of working that scale — governance, decision rights, delivery rhythm, and adoption.",
      outcomes: ["Clear operating rhythm", "Aligned decision-making", "Reduced delivery friction", "Stronger accountability"],
      href: "/services/operating-model",
    },
    {
      title: "Delivery Enablement",
      tag: "Priority #2",
      desc: "Turn ambiguity into execution — structure, stakeholder alignment, prioritisation, and momentum.",
      outcomes: ["Execution clarity", "Better prioritisation", "Improved stakeholder alignment", "Faster decisions"],
      href: "/services/delivery-enablement",
    },
    {
      title: "Reporting & Decision Support",
      tag: "Priority #3",
      desc: "Decision-grade insights — KPI frameworks, dashboards, and reporting leaders trust.",
      outcomes: ["KPI clarity", "Executive dashboards", "Operational visibility", "Data-led governance"],
      href: "/services/reporting-insights",
    },
    {
      title: "Aviation Domain Consulting",
      tag: "Optional niche",
      desc: "When relevant, accelerate outcomes using deep airline technology and operating context.",
      outcomes: ["Faster onboarding", "Reduced risk", "Better dependency management", "Practical governance uplift"],
      href: "/services/aviation",
    },
  ];

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <p className="text-sm text-neutral-subtle">Services</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
          What Acooya delivers
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-subtle">
          Acooya works with leaders to simplify complexity, establish a practical operating rhythm, and deliver
          measurable outcomes — supported by reporting that makes progress visible.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Book a call</Button>
          <Button href="/outcomes" variant="secondary">
            See outcomes
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title} className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-brand-blue">{p.tag}</p>
                  <h2 className="mt-2 font-display text-2xl tracking-tight">{p.title}</h2>
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-subtle">{p.desc}</p>

              <div className="mt-6 grid gap-2 text-sm text-neutral-subtle md:grid-cols-2">
                {p.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-green" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Button href={p.href} variant="secondary" size="sm">
                  View details →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="rounded-3xl border border-neutral-line bg-white p-10 shadow-soft">
          <p className="text-sm text-neutral-subtle">Engagement models</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight">Flexible delivery, clear outputs.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Fixed-scope Sprint",
                d: "A focused engagement to solve a defined problem and deliver concrete artefacts.",
              },
              {
                t: "Embedded Support",
                d: "Short-term uplift to help a team deliver — cadence, governance, reporting, facilitation.",
              },
              {
                t: "Advisory Retainer",
                d: "Ongoing support for leaders — prioritisation, delivery oversight, and decision support.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-neutral-line bg-neutral-bg p-6">
                <h3 className="font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-neutral-subtle">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss your needs</Button>
            <Button href="/about" variant="secondary">
              About Acooya
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
