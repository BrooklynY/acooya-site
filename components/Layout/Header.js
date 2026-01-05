import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="text-sm text-neutral-subtle hover:text-neutral-ink"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-line bg-neutral-bg/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/brand/acooya.png"
              alt="Acooya Consulting"
              width={34}
              height={34}
              priority
            />
            <span className="font-semibold tracking-tight">Acooya</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/outcomes">Outcomes</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">Book a call</Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Button href="/contact" size="sm">Book</Button>
            <IconButton
              ariaLabel={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </IconButton>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="pb-4 md:hidden">
            <div className="rounded-3xl border border-neutral-line bg-white p-5 shadow-soft">
              <div className="flex flex-col gap-4">
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/outcomes">Outcomes</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>

              <div className="mt-6 flex gap-3">
                <Button href="/contact">Book a call</Button>
                <Button href="/services" variant="secondary">Explore</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
