import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import Container from "../ui/Container";

function isActivePath(asPath, href) {
  if (href === "/") return asPath === "/";
  return asPath === href || asPath.startsWith(href + "/");
}

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // close menu on route change
  useEffect(() => {
    const handle = () => setOpen(false);
    router.events?.on("routeChangeComplete", handle);
    return () => router.events?.off("routeChangeComplete", handle);
  }, [router.events]);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/outcomes", label: "Outcomes" },
    { href: "/methodology", label: "Methodology" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label }) => {
    const active = isActivePath(router.asPath, href);
    return (
      <Link
        href={href}
        className={[
          "text-sm transition",
          active ? "text-ink" : "text-muted hover:text-ink",
        ].join(" ")}
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen(false)}
      >
        <span className="relative">
          {label}
          {active && (
            <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-brand to-brand2" />
          )}
        </span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/acooya.png"
              alt="Acooya Consulting"
              width={34}
              height={34}
              priority
            />
            <span className="font-semibold tracking-tight text-ink">Acooya</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.slice(0, 4).map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink href="/contact" label="Contact" />
            <Button href="/contact" size="sm" variant="brand">
              Book a call
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Button href="/contact" size="sm" variant="brand">
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
            <div className="rounded-3xl border border-line bg-panel p-5 shadow-soft">
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <NavLink key={l.href} href={l.href} label={l.label} />
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Button href="/contact" variant="brand">
                  Book a call
                </Button>
                <Button href="/services" variant="secondary">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

