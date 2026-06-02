import type { ReactNode } from "react";
import Button from "./Button";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CTASection({
  eyebrow,
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section cta-final">
      <div className="container">
        <div className="inner">
          {eyebrow && <span className="eyebrow light">{eyebrow}</span>}
          <h2 className="display">{title}</h2>
          <div className="cta-final-actions">
            <Button href={primaryHref} variant="light" arrow>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
