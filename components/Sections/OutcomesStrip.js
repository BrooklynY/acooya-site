import Card from "../ui/Card";
import Button from "../ui/Button";

export default function OutcomesStrip() {
  const outcomes = [
    {
      title: "Clearer decisions",
      desc: "Decision rights and forums become explicit, reducing delays and rework.",
    },
    {
      title: "Faster momentum",
      desc: "Teams move with a consistent rhythm instead of restarting each cycle.",
    },
    {
      title: "Aligned stakeholders",
      desc: "Leaders and delivery teams share the same priorities and success measures.",
    },
    {
      title: "Visible progress",
      desc: "Reporting shifts from status updates to decision-grade insight.",
    },
  ];

  return (
    <section className="section-divider mx-auto mt-20 max-w-6xl px-6">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-muted">What changes</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
          Outcomes leaders actually experience
        </h2>
        <p className="mt-4 text-base text-muted">
          Acooya engagements are designed to remove friction, create clarity, and
          make progress visible — not just documented.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {outcomes.map((o) => (
          <Card key={o.title} className="p-6">
            <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
            <p className="mt-2 text-sm text-muted">{o.desc}</p>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href="/outcomes">See outcomes</Button>
        <Button href="/contact" variant="secondary">
          Discuss your situation
        </Button>
      </div>
    </section>
  );
}
