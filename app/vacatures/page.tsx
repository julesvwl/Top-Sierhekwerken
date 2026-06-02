import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { EMAIL, vacancies } from "@/lib/data";

export default function VacaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Kom bij ons werken"
        title={
          <>
            Vacatures bij <em>TOP</em>.
          </>
        }
        subtitle="Wij zijn op zoek naar enthousiaste collega's die onze passie voor vakmanschap delen."
        slotId="pagehero-vacatures"
        slotPlaceholder="Sfeerfoto team / werkplaats"
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Actuele vacatures</span>
            <h2 className="display">
              Versterk ons <em>team</em>.
            </h2>
            <p className="lede" style={{ marginTop: 16, maxWidth: 640 }}>
              TOP Sierhekwerken is een groeiend bedrijf in Noord-Holland. Wij zoeken gedreven mensen
              die samen met ons aan mooie projecten willen werken.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 20,
              marginTop: 48,
            }}
          >
            {vacancies.map((v) => (
              <div key={v.slug} className="vacancy-card">
                <div className="vacancy-meta">
                  <span className="vacancy-badge">{v.type}</span>
                  <span className="vacancy-badge">{v.vacationDays} vakantiedagen</span>
                </div>
                <div className="vacancy-title">{v.title}</div>
                <div className="vacancy-excerpt">{v.excerpt}</div>
                <div className="vacancy-footer">
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {v.location}
                  </div>
                  <Button href={`/vacatures/${v.slug}`} variant="primary" size="sm" arrow>
                    Bekijken
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 80,
              background: "var(--bone)",
              borderRadius: 16,
              padding: "48px 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow">Geen passende vacature?</span>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  marginTop: 16,
                  lineHeight: 1.1,
                }}
              >
                Open sollicitatie <em>altijd welkom</em>.
              </h3>
            </div>
            <div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Staat uw droombaan er niet tussen? Stuur ons een open sollicitatie en wie weet maken
                we binnenkort kennis.
              </p>
              <Button href={`mailto:${EMAIL}?subject=Open sollicitatie`} variant="primary" arrow>
                Open sollicitatie sturen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Over TOP Sierhekwerken"
        title={
          <>
            Meer dan 30 jaar <em>vakmanschap</em>.
          </>
        }
        primaryLabel="Meer over ons"
        primaryHref="/contact"
        secondaryLabel="Bekijk ons werk"
        secondaryHref="/fotos"
      />
    </>
  );
}
