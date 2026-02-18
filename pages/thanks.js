import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Thanks() {
  return (
    <Layout>
      <PageHeader
        kicker="Message sent"
        title="Thanks — we’ve received your note."
        lead="We’ll reply via email shortly. In the meantime, you can explore services or see outcome examples."
        primaryCta={{ href: "/services", label: "Explore services" }}
        secondaryCta={{ href: "/outcomes", label: "See outcomes" }}
        aside={
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Next step
            </p>
            <div className="rounded-2xl border border-line bg-bg p-3 text-sm text-muted">
              If you’d like to share a preferred time window, reply to the confirmation email.
            </div>
          </div>
        }
      />

      <section className="mx-auto mt-10 max-w-6xl px-5 md:mt-12 md:px-8">
        <Card className="p-8 md:p-10">
          <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
            Want to accelerate this?
          </h2>
          <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-muted">
            Send 2–3 lines on what success looks like and any constraints (timeline, stakeholders, dependencies).
            We’ll come back with options and a recommended first step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="brand">
              Back to contact
            </Button>
            <Button href="/" variant="secondary">
              Home
            </Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
