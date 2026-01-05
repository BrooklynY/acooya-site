import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold">Acooya Consulting</p>
            <p className="mt-2 max-w-md text-sm text-neutral-subtle">
              Calm, outcome-led transformation — operating model first, then delivery, then decision-grade insights.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-rose" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-semibold">Company</p>
              <Link className="block text-neutral-subtle hover:text-neutral-ink" href="/about">About</Link>
              <Link className="block text-neutral-subtle hover:text-neutral-ink" href="/contact">Contact</Link>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Services</p>
              <Link className="block text-neutral-subtle hover:text-neutral-ink" href="/services">Overview</Link>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Insights</p>
              <Link className="block text-neutral-subtle hover:text-neutral-ink" href="/outcomes">Outcomes</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-line pt-6 text-xs text-neutral-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Acooya Consulting</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-neutral-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
