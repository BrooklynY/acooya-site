import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + positioning */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-bg shadow-soft">
                <Image src="/brand/acooya.png" alt="Acooya" width={26} height={26} />
              </div>
              <div>
                <p className="font-semibold text-ink">Acooya Consulting</p>
                <p className="text-[11px] text-muted">Calm, outcome-led transformation</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Operating model first, then delivery enablement, then decision-grade reporting —
              so leaders can simplify complexity and make progress visible.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand2" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/50" />
              <span className="ml-2 text-xs text-muted">Clarity • Momentum • Visibility</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div className="space-y-3">
              <p className="font-semibold text-ink">Company</p>
              <Link className="block text-muted transition hover:text-ink" href="/about">
                About
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/contact">
                Contact
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/outcomes">
                Outcomes
              </Link>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-ink">Services</p>
              <Link className="block text-muted transition hover:text-ink" href="/services">
                Overview
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/services/operating-model">
                Operating model
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/services/delivery-enablement">
                Delivery enablement
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/services/reporting-insights">
                Reporting & insights
              </Link>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-ink">Get started</p>
              <Link className="block text-muted transition hover:text-ink" href="/contact">
                Book a call
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/services">
                What we do
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/privacy">
                Privacy
              </Link>
              <Link className="block text-muted transition hover:text-ink" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Acooya Consulting. All rights reserved.</p>
          <p className="text-[11px]">
            Built with calm intent •{" "}
            <Link href="/contact" className="underline decoration-line/60 underline-offset-4 hover:text-ink">
              talk to us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
