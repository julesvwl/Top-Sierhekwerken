import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductImgSlot from "@/components/ProductImgSlot";
import CTASection from "@/components/CTASection";
import { productCategories } from "@/lib/data";

export default function ProductenPage() {
  return (
    <>
      <PageHero
        eyebrow="Ons assortiment"
        title={
          <>
            De <em>collectie</em>.
          </>
        }
        subtitle="Sierhekwerk, looppoorten, inrijpoorten en automatisering — elk product verkrijgbaar in iedere RAL-kleur en volledig op maat geproduceerd."
        slotId="prod-overview-hero"
        slotPlaceholder="Sfeerfoto productenoverzicht"
      />

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {productCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/producten/${cat.slug}`}
                className={`product-card ${i === 0 ? "tall s12-7" : i === 1 ? "tall s12-5" : "wide s12-4"}`}
              >
                <ProductImgSlot placeholder={cat.name} />
                <span className="tag">
                  {cat.tag} — {cat.name}
                </span>
                <div className="arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <div className="info">
                  <h3 className="display">{cat.name}</h3>
                  <div className="meta">{cat.description.slice(0, 80)}…</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Aan de slag"
        title={
          <>
            Vraag een <em>vrijblijvende</em> offerte aan.
          </>
        }
        primaryLabel="Offerte aanvragen"
        primaryHref="/offerte"
        secondaryLabel="Contact opnemen"
        secondaryHref="/contact"
      />
    </>
  );
}
