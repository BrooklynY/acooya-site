import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Kicker, H1, Lead, H2 } from "../components/ui/Type";

export default function Contact() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Contact</Kicker>
          <H1 className="mt-4">Book a call or send a message</H1>
          <Lead className="mt-6">
            A short call is usually the fastest way to align on your goals, constraints, and next steps.
            If you prefer, send a message and I’ll get back to you.
          </Lead>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="p-8 md:col-span-3">
            <H2>Send a message</H2>
            <p className="mt-3 text-sm text-neutral-subtle">
              Your message goes directly to Acooya’s inbox.
            </p>

            <form
              className="mt-8 space-y-4"
              action="https://formspree.io/f/xgovpvzl"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New enquiry — Acooya Consulting" />
              <input type="hidden" name="_format" value="plain" />

              <div>
                <label className="text-sm font-semibold">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-neutral-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-neutral-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">What do you need help with?</label>
                <textarea
                  name="message"
                  required
                  className="mt-2 min-h-[140px] w-full rounded-2xl border border-neutral-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
                  placeholder="Brief context, what success looks like, and any constraints."
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit">Send message</Button>
                <Button href="/services" variant="secondary">Explore services</Button>
              </div>

              <p className="pt-2 text-xs text-neutral-subtle">
                Typical response time: within 1–2 business days.
              </p>
            </form>
          </Card>

          <Card className="p-8 md:col-span-2">
            <H2>What happens next</H2>
            <div className="mt-6 space-y-4 text-sm text-neutral-subtle">
              {[
                { t: "1) Quick call", d: "Understand your context and what success looks like." },
                { t: "2) Clarity on scope", d: "We align on outcomes, approach, and timeline." },
                { t: "3) Start with momentum", d: "We begin with a focused first step that reduces ambiguity." },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-neutral-line bg-neutral-bg p-5">
                  <p className="font-semibold text-neutral-ink">{x.t}</p>
                  <p className="mt-2">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold p-6 text-white shadow-lift">
              <p className="text-sm font-semibold">Prefer a call?</p>
              <p className="mt-2 text-sm text-white/90">
                You can add your booking link (Calendly) here later.
              </p>
              <div className="mt-4">
                <Button href="#" variant="secondary">Add booking link later</Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}
