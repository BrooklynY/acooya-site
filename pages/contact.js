import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        kicker="Contact"
        title="Let’s make the next step clear."
        lead="Book a short call and we’ll clarify your constraints, define outcomes, and propose a practical first step."
        primaryCta={{ href: "#contact-form", label: "Open form" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Response time
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Usually within 1–2 business days.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted">
              <div className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Scope a sprint</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Discuss advisory support</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
                <span>Clarify delivery + reporting</span>
              </div>
            </div>
          </Card>
        }
      />

      <Section className="pt-10 md:pt-12">
        <Card className="p-8 md:p-10" id="contact-form">
          <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
            Send a message
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Share a little context. If it’s useful, include your timeline, constraints, and what “success” looks like.
          </p>

          {/* Keep your existing Formspree action */}
          <form
            className="mt-8 grid gap-4"
            action="https://formspree.io/f/xgovpvzl"
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-ink">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(var(--brand),0.35)]"
                />
              </div>
              <div>
                <label className="text-sm text-ink">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(var(--brand),0.35)]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-ink">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(var(--brand),0.35)]"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" variant="brand">
                Send message
              </Button>
              <Button href="/services" variant="secondary">
                Review services
              </Button>
            </div>
          </form>
        </Card>
      </Section>
    </Layout>
  );
}

