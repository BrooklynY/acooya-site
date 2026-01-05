import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ServicesPreview() {
  const services = [
    {
      title: "Transformation & Operating Model",
      desc: "Design practical ways of working — governance, decision rights, delivery rhythm.",
    },
    {
      title: "Delivery Enablement",
      desc: "Turn ambiguity into execution — planning, alignment, and momentum.",
    },
    {
      title: "Reporting & Decision Support",
      desc: "Dashboards, KPIs, and insight packs leaders trust.",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <p className="text-sm text-neutral-subtle">What we do</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight">Services</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title}>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-subtle">{s.desc}</p>
            <div className="mt-4">
              <Button href="/services" variant="ghost" size="sm">
                Learn more →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
