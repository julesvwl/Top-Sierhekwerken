import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_TEL } from "@/lib/data";

const STORING_TIPS = [
  "Beschrijf de storing zo duidelijk mogelijk",
  "Vermeld het model en type poort/hekwerk",
  "Voeg indien mogelijk een foto bij",
];

export default function StoringenPage() {
  return (
    <>
      <PageHero
        eyebrow="Service & onderhoud"
        title={<>Storing melden.</>}
        subtitle="Heeft u een storing aan uw poort of hekwerk? Meld het hieronder of bel ons direct."
        slotId="pagehero-storingen"
        slotPlaceholder="Sfeerfoto service / poortmotor"
      />
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="eyebrow">Direct contact</span>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 42px)", marginTop: 16 }}>
                Bel ons direct voor <em>spoed</em>.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  marginTop: 20,
                  marginBottom: 28,
                }}
              >
                Voor spoedgevallen kunt u ons direct bereiken via telefoon. Wij proberen alle
                storingen zo snel mogelijk te verhelpen.
              </p>
              <Button href={`tel:${PHONE_TEL}`} variant="primary" arrow>
                Bel {PHONE}
              </Button>

              <div style={{ marginTop: 32, borderTop: "1px solid var(--line)", paddingTop: 28 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 12,
                  }}
                >
                  Bereikbaarheid
                </div>
                <div style={{ fontSize: 14, lineHeight: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid var(--line)",
                      paddingBottom: 6,
                    }}
                  >
                    <span>Ma — Vrij</span>
                    <span style={{ fontWeight: 600 }}>08:00 — 17:00</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid var(--line)",
                      paddingBottom: 6,
                      marginTop: 6,
                    }}
                  >
                    <span>Zaterdag</span>
                    <span style={{ fontWeight: 600 }}>09:00 — 15:00</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                    <span>Buiten kantooruren</span>
                    <span style={{ color: "var(--muted)" }}>Via formulier</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 28, background: "var(--bone)", borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                  Tip voor het melden van uw storing:
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {STORING_TIPS.map((tip) => (
                    <li
                      key={tip}
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          background: "var(--navy)",
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div style={{ background: "var(--bone)", borderRadius: 16, padding: 40 }}>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", marginBottom: 8 }}>
                  Storing <em>melden</em>.
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>
                <ContactForm defaultSubject="Storing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
