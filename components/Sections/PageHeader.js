import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Kicker, H1, Lead } from "../ui/Type";

export default function PageHeader({
  kicker,
  title,
  lead,
  primaryCta,   // { href, label, variant? }
  secondaryCta, // { href, label, variant? }
  children,
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* calm wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute top-8 left-[12%] h-[420px] w-[420px] rounded-full bg-brand2/10 blur-3xl" />
        <div className="absolute top-24 right-[10%] h-[380px] w-[380px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <Section className="pt-10 md:pt-16" pad={false}>
        <Card className="relative p-7 md:p-12">
          {kicker ? <Kicker>{kicker}</Kicker> : null}

          <H1 className="mt-4">{title}</H1>

          {lead ? <Lead className="mt-6">{lead}</Lead> : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant={primaryCta.variant || "brand"}
                >
                  {primaryCta.label}
                </Button>
              ) : null}

              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant={secondaryCta.variant || "secondary"}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}

          {children ? <div className="mt-8">{children}</div> : null}
        </Card>
      </Section>
    </div>
  );
}
