import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function Terms() {
  return (
    <Layout>
      <PageHeader
        kicker="Legal"
        title="Terms of Use"
        lead="These terms outline how you may use the Acooya Consulting website and the limitations that apply."
        primaryCta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "/", label: "Back to home" }}
        aside={
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Summary
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>Use the site responsibly.</p>
              <p>Information is general and not legal/financial advice.</p>
              <p>We may update content at any time.</p>
            </div>
          </Card>
        }
      />

      <Section className="pt-10 md:pt-12">
        <Card className="p-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">1. Use of the website</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                You may use this website for lawful purposes only. You must not misuse the website, attempt to gain unauthorised access,
                or interfere with its operation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">2. Information disclaimer</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Content on this website is provided for general informational purposes and does not constitute professional advice.
                You should obtain appropriate advice tailored to your circumstances before acting on any information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">3. Intellectual property</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Unless stated otherwise, all content on this website (including text, branding, and design elements) is owned by Acooya Consulting
                or used under licence. You must not reproduce or redistribute content without permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">4. Third-party links</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This website may contain links to third-party sites. We are not responsible for third-party content, availability, or practices.
                Links are provided for convenience and do not imply endorsement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">5. Limitation of liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To the maximum extent permitted by law, Acooya Consulting is not liable for any loss or damage arising from your use of,
                or inability to use, this website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">6. Changes to these terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We may update these terms from time to time. Continued use of the website indicates acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl tracking-tight text-ink">7. Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                If you have questions about these terms, please contact us via the contact page.
              </p>
              <p className="mt-4 text-xs text-muted">
                Note: This is a general template and may be refined as business requirements evolve.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
}
