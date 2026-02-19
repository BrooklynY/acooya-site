import Layout from "../components/Layout/Layout";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

const SECTIONS = [
  { id: "use", title: "1. Use of the website" },
  { id: "disclaimer", title: "2. Information disclaimer" },
  { id: "ip", title: "3. Intellectual property" },
  { id: "links", title: "4. Third-party links" },
  { id: "liability", title: "5. Limitation of liability" },
  { id: "changes", title: "6. Changes to these terms" },
  { id: "contact", title: "7. Contact" },
];

function Toc() {
  return (
    <div className="sticky top-24 rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        On this page
      </p>
      <nav className="mt-4 space-y-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="block text-sm text-muted hover:text-ink"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

function TermSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-serif text-2xl tracking-tight text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted md:text-base md:leading-[1.85]">
        {children}
      </div>
    </section>
  );
}

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
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Summary
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>Use the site responsibly.</p>
              <p>Information is general and not legal/financial advice.</p>
              <p>We may update content at any time.</p>
              <p className="pt-2 text-xs text-muted/90">Last updated: 23 Jan 2026</p>
            </div>
          </Card>
        }
      />

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-start">
          {/* Main content */}
          <Card className="p-8 md:p-10">
            <div className="space-y-10">
              <div className="rounded-2xl border border-line bg-bg p-4">
                <p className="text-xs text-muted">
                  This site content is provided for general information only and may be updated without notice.
                </p>
              </div>

              <TermSection id="use" title="1. Use of the website">
                <p>
                  You may use this website for lawful purposes only. You must not misuse the website, attempt to gain unauthorised access,
                  or interfere with its operation.
                </p>
              </TermSection>

              <TermSection id="disclaimer" title="2. Information disclaimer">
                <p>
                  Content on this website is provided for general informational purposes and does not constitute professional advice.
                  You should obtain appropriate advice tailored to your circumstances before acting on any information.
                </p>
              </TermSection>

              <TermSection id="ip" title="3. Intellectual property">
                <p>
                  Unless stated otherwise, all content on this website (including text, branding, and design elements) is owned by Acooya Consulting
                  or used under licence. You must not reproduce or redistribute content without permission.
                </p>
              </TermSection>

              <TermSection id="links" title="4. Third-party links">
                <p>
                  This website may contain links to third-party sites. We are not responsible for third-party content, availability, or practices.
                  Links are provided for convenience and do not imply endorsement.
                </p>
              </TermSection>

              <TermSection id="liability" title="5. Limitation of liability">
                <p>
                  To the maximum extent permitted by law, Acooya Consulting is not liable for any loss or damage arising from your use of,
                  or inability to use, this website.
                </p>
              </TermSection>

              <TermSection id="changes" title="6. Changes to these terms">
                <p>
                  We may update these terms from time to time. Continued use of the website indicates acceptance of the updated terms.
                </p>
              </TermSection>

              <TermSection id="contact" title="7. Contact">
                <p>
                  If you have questions about these terms, please contact us via the contact page.
                </p>
                <p className="mt-4 text-xs text-muted">
                  Note: This is a general template and may be refined as business requirements evolve.
                </p>
              </TermSection>
            </div>
          </Card>

          {/* Desktop TOC */}
          <div className="hidden md:block">
            <Toc />
          </div>

          {/* Mobile TOC */}
          <div className="md:hidden">
            <Card className="p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                On this page
              </p>
              <div className="mt-4 grid gap-2">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
