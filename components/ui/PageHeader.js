import Button from "./Button";

export default function PageHeader({
  kicker,
  title,
  lead,
  primaryCta,
  secondaryCta,
  aside,
  children,
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-16">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/80 p-7 shadow-soft backdrop-blur md:p-12">
        {/* subtle wash */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/12 blur-3xl" />
          <div className="absolute top-10 left-[10%] h-[420px] w-[420px] rounded-full bg-brand2/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
        </div>

        <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            {kicker && (
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                {kicker}
              </p>
            )}

            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
              {title}
            </h1>

            {lead && (
              <p className="mt-5 max-w-[65ch] text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.75] text-muted">
                {lead}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="brand">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {aside ? (
            <div className="w-full max-w-md md:w-[380px]">{aside}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

