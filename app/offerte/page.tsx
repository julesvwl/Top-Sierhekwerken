import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import OfferteForm from "@/components/OfferteForm";
import { PHONE, PHONE_TEL } from "@/lib/data";

const STEPS = [
  { n: "01", title: "Vul het formulier in", body: "Kies uw product, model, afmetingen en gewenste kleur." },
  { n: "02", title: "Wij nemen contact op", body: "Binnen 48 uur bellen wij u terug voor eventuele aanvullende vragen." },
  { n: "03", title: "Ontvang uw offerte", body: "U ontvangt een vrijblijvende offerte op maat, helemaal afgestemd op uw situatie." },
  { n: "04", title: "Gratis inmeten", body: "Bij akkoord komen wij gratis bij u langs voor een inmeting." },
];

export default function OffertePage() {
  return (
    <>
      <PageHero
        eyebrow="Vrijblijvend"
        title={
          <>
            Offerte <em>aanvragen</em>.
          </>
        }
        subtitle="Vul het formulier in en ontvang binnen 48 uur een vrijblijvende offerte op maat."
        slotId="pagehero-offerte"
        slotPlaceholder="Sfeerfoto inmeten / werkplaats"
      />
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="eyebrow">Hoe werkt het?</span>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 42px)", marginTop: 16 }}>
                Binnen 48 uur een <em>offerte op maat</em>.
              </h2>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20 }}>
                {STEPS.map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontSize: 20,
                        fontStyle: "italic",
                        color: "var(--muted)",
                        minWidth: 32,
                      }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{step.title}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{step.body}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, borderTop: "1px solid var(--line)", paddingTop: 24 }}>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>Liever telefonisch contact?</div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  style={{ color: "var(--navy)", fontWeight: 700, fontSize: 16, marginTop: 4, display: "block" }}
                >
                  {PHONE}
                </a>
              </div>
            </div>
            <div>
              <div style={{ background: "var(--bone)", borderRadius: 16, padding: "48px 40px" }}>
                <Suspense fallback={null}>
                  <OfferteForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
