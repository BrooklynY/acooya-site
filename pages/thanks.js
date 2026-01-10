import Layout from "../components/Layout/Layout";
import Section from "../components/ui/Section";
import { Kicker, H1, Lead } from "../components/ui/Type";
import Button from "../components/ui/Button";

export default function Thanks() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-14">
        <div className="rounded-3xl border border-neutral-line bg-white p-8 shadow-soft md:p-12">
          <Kicker>Message sent</Kicker>
          <H1 className="mt-4">Thanks — I’ll get back to you shortly.</H1>
          <Lead className="mt-6">
            If your request is time-sensitive, mention urgency in your message and I’ll prioritise it.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services">Explore services</Button>
            <Button href="/" variant="secondary">Back home</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
