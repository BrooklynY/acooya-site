import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function Privacy() {
  return (
    <Layout>
      <PageHeader
        kicker="Legal"
        title="Privacy Policy"
        lead="Acooya Consulting respects your privacy. This page explains what we collect, why we collect it, and how we handle it."
        primaryCta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "/", label: "Back to home" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Summary
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>We only collect information needed to respond to enquiries and improve the site.</p>
              <p>We do not sell your data.</p>
              <p>You can request access or deletion at any time.</p>
            </div>
          </Card>
        }
      />

      <Section className="pt-10 md:pt-12">
        <Card className="p-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">1. Information we collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We may collect information you provide directly (for example, when you submit a contact form), such as your
                name, email address, and any message content. We may also collect basic technical information (such as browser
                type and pages visited) to help improve performance and usability.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">2. How we use information</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We use information to respond to enquiries, provide requested services, and improve the website experience.
                We do not use your information for unrelated marketing without your consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">3. Cookies and analytics</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The site may use cookies or similar technologies to support basic functionality and analytics. Where analytics
                are used, they are intended to be privacy-conscious and focused on aggregate usage trends.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">4. Sharing and disclosure</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We do not sell your personal information. We may share information with service providers used to operate the site
                (for example, hosting), only to the extent required to provide those services. We may also disclose information where
                required by law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">5. Data retention</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We retain information only for as long as needed to respond to requests, provide services, and meet legal or business requirements.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">6. Your rights</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                You may request access, correction, or deletion of your personal information. To make a request, contact us via the contact page.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">7. Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                For privacy enquiries, please reach out via the contact form and we will respond as soon as practicable.
              </p>
              <p className="mt-4 text-xs text-muted">
                Note: This policy is a general template and may be updated as the site evolves.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
