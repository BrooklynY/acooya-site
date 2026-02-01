import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="text-sm text-muted transition hover:text-ink"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* subtle top hairline + frosted panel */}
      <div className="border-b border-line bg-bg/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Brand */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-panel shadow-soft transition group-hover:shadow-lift">
                <Image
                  src="/brand/acooya.png"
                  alt="Acooya Consulting"
                  width={26}
                  height={26}
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold tracking-tight text-ink">
                    Acooya
                  </span>
                  <span className="hidden text-xs text-muted md:inline">
                    Consulting
                  </span>
                </div>
                <span className="hidden text-[11px] text-muted md:block">
                  Calm, outcome-led transformation
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 md:flex">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/outcomes">Outcomes</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              {/* small brand chips */}
              <div className="ml-2 hidden items-center gap-2 lg:flex">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="h-2 w-2 rounded-full bg-brand2" />
                <span className="h-2 w-2 rounded-full bg-ink/50" />
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="/contact" variant="brand" size="sm">
                Book a call
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Button href="/contact" variant="brand" size="sm">
                Book
              </Button>
              <IconButton
                ariaLabel={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "✕" : "☰"}
              </IconButton>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="pb-4 md:hidden">
              <div className="rounded-3xl border border-line bg-panel p-5 shadow-lift">
                <div className="flex flex-col gap-4">
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/outcomes">Outcomes</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact" variant="brand">
                    Book a call
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[11px] text-muted">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="h-2 w-2 rounded-full bg-brand2" />
                  <span className="h-2 w-2 rounded-full bg-ink/50" />
                  <span className="ml-2">Clear decisions • Calm delivery • Visible progress</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
