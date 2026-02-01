export default function Process() {
    const steps = ["Clarity", "Alignment", "Delivery", "Outcomes"];
  
    return (
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <p className="text-sm text-neutral-subtle">How we work</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">
          A calm, structured path to measurable outcomes.
        </h2>
  
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s} className="rounded-3xl border border-line bg-white p-6 shadow-soft">
              <p className="text-sm text-neutral-subtle">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{s}</h3>
              <p className="mt-2 text-sm text-neutral-subtle">
                {s === "Clarity" && "Understand problems, context, and constraints."}
                {s === "Alignment" && "Align stakeholders, priorities, and direction."}
                {s === "Delivery" && "Support execution, rhythm, and momentum."}
                {s === "Outcomes" && "Make progress visible and measurable."}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  