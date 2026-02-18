import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

function FooterLink({ href, children }) {
  return (
    <Link className="block text-muted hover:text-ink transition" href={href}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-panel">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/acooya.png"
                alt="Acooya Consulting"
                width={34}
                height={34}
              />
              <p className="font-semibold text-ink">Acooya Consulting</p>
            </div>

            <p className="mt-3 text-sm text-muted leading-relaxed">
              Calm, outcome-led transformation — operating model first, then delivery,
              then decision-grade insights.
            </p>

            <div className="mt-5 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand to-brand2" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </div>

            <p className="mt-5 text-xs text-muted">
              Sydney • Remote-ready • AU-wide
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-semibold text-ink">Company</p>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/methodology">Methodology</FooterLink>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-ink">Services</p>
              <FooterLink href="/services">Overview</FooterLink>
              <FooterLink href="/services/operating-model">Operating model</FooterLink>
              <FooterLink href="/services/delivery-enablement">Delivery enablement</FooterLink>
              <FooterLink href="/services/reporting-insights">Reporting & insights</FooterLink>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-ink">Insights</p>
              <FooterLink href="/outcomes">Outcomes</FooterLink>
              <FooterLink href="/contact">Book a call</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Acooya Consulting</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink transition">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
