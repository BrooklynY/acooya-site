import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, Lead, Body } from "../components/ui/Type";

function Field({ label, name, type = "text", placeholder, required = true }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={[
          "mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink",
          "placeholder:text-muted/70",
          "outline-none transition",
          "focus:border-ink/20 focus:ring-2 focus:ring-brand/20",
        ].join(" ")}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-line bg-panel/80 p-8 shadow-soft backdrop-blur md:p-12">
          <Kicker>Contact</Kicker>
          <H1 className="mt-4">Book a discovery call.</H1>
          <Lead className="mt-6">
            A short conversation to clarify outcomes, map constraints, and recommend the smallest high-leverage first step.
          </Lead>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Form */}
          <Card className="p-8 md:col-span-7 md:p-10">
            <p className="text-sm font-medium text-muted">Send a note</p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink md:text-3xl">
              Tell us what you’re working on
            </h2>
            <p className="mt-3 text-sm text-muted">
              We’ll reply within 1–2 business days. If it’s urgent, mention a deadline in your message.
            </p>

            <form
              className="mt-8 space-y-5"
              action="https://formspree.io/f/xgovpvzl"
              method="POST"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                />
                <Field
                  label="Email"
                  name="_replyto"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>

              <Field
                label="Organisation"
                name="organisation"
                placeholder="Company / team (optional)"
                required={false}
              />

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-ink">
                  What do you need help with?
                </label>
                <select
                  id="topic"
                  name="topic"
                  className={[
                    "mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink",
                    "outline-none transition",
                    "focus:border-ink/20 focus:ring-2 focus:ring-brand/20",
                  ].join(" ")}
                  defaultValue="Operating model"
                >
                  <option>Operating model</option>
                  <option>Delivery enablement</option>
                  <option>Reporting & decision support</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="A few lines about your goals, constraints, timelines, and what success looks like."
                  className={[
                    "mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink",
                    "placeholder:text-muted/70",
                    "outline-none transition",
                    "focus:border-ink/20 focus:ring-2 focus:ring-brand/20",
                  ].join(" ")}
                />
              </div>

              <input type="hidden" name="_subject" value="Acooya Consulting — Contact form submission" />

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" variant="brand">
                  Send message
                </Button>
                <p className="text-xs text-muted">
                  By submitting, you agree we may contact you about your enquiry.
                </p>
              </div>
            </form>
          </Card>

          {/* Right panel */}
          <Card className="p-8 md:col-span-5 md:p-10">
            <p className="text-sm font-medium text-muted">What to expect</p>
            <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">
              Calm, structured, outcome-led.
            </h3>

            <div className="mt-6 space-y-3">
              {[
                {
                  t: "Discovery call (20–30 min)",
                  d: "Clarify outcomes, constraints, stakeholders, and what’s blocking progress.",
                },
                {
                  t: "Recommendation",
                  d: "We’ll suggest the smallest high-leverage step — operating model, delivery rhythm, or reporting uplift.",
                },
                {
                  t: "Clear artefacts",
                  d: "Expect practical outputs: forums & cadence, plan & sequencing, dashboards and decision packs.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-line bg-bg p-5">
                  <p className="text-sm font-semibold text-ink">{x.t}</p>
                  <p className="mt-2 text-sm text-muted">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-line bg-gradient-to-r from-brand/10 to-brand2/10 p-6">
              <p className="text-sm font-semibold text-ink">Prefer email?</p>
              <Body className="mt-2">
                You can reach us at{" "}
                <a className="underline decoration-line hover:text-ink" href="mailto:brooklyn_yang@hotmail.com">
                  brooklyn_yang@hotmail.com
                </a>
                .
              </Body>
            </div>

            <div className="mt-6 text-xs text-muted">
              Typical engagements are short, focused sprints (2–6 weeks). Remote and on-site options available.
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}
