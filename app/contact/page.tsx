import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ShowroomMap from "@/components/ShowroomMap";
import { EMAIL, PHONE, PHONE_TEL } from "@/lib/data";

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 8,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Neem <em>contact</em> op.
          </>
        }
        subtitle="Heeft u een vraag, wilt u een afspraak maken of informatie aanvragen? Wij helpen u graag."
        slotId="pagehero-contact"
        slotPlaceholder="Sfeerfoto showroom"
      />
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="eyebrow">Contactgegevens</span>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 42px)", marginTop: 16 }}>
                Wij helpen u graag <em>persoonlijk</em>.
              </h2>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <div style={labelStyle}>Adres</div>
                  <div style={{ fontSize: 15, lineHeight: 1.7 }}>
                    TOP Sierhekwerken BV
                    <br />
                    De Veken 22
                    <br />
                    1716 KE Opmeer
                  </div>
                </div>
                <div>
                  <div style={labelStyle}>Telefoon</div>
                  <div style={{ fontSize: 15 }}>
                    <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div>
                  <div style={labelStyle}>E-mail</div>
                  <div style={{ fontSize: 15 }}>
                    <a href={`mailto:${EMAIL}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div>
                  <div style={labelStyle}>Openingstijden</div>
                  <div style={{ fontSize: 15, lineHeight: 2 }}>
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
                      <span>Zondag</span>
                      <span style={{ color: "var(--muted)" }}>Gesloten</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    href="https://www.google.nl/maps/dir//De+Veken+22,+1716+KE+Opmeer/"
                    variant="outline"
                    arrow
                  >
                    Route plannen
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div style={{ background: "var(--bone)", borderRadius: 16, padding: 40 }}>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", marginBottom: 24 }}>
                  Stuur ons een <em>bericht</em>.
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showroom" id="showroom">
        <div className="showroom-inner">
          <div className="copy">
            <span className="eyebrow">Showroom</span>
            <h2 className="display">
              Bezoek onze <em>showroom</em>.
            </h2>
            <p className="body" style={{ marginTop: 18, maxWidth: 480 }}>
              Kom langs en bekijk ons sierhekwerk in onze showroom in Opmeer. Wij helpen u graag bij
              het maken van uw keuze.
            </p>
            <div className="hours">
              <div className="row">
                <span>Ma — Vrij</span>
                <span>08:00 — 17:00</span>
              </div>
              <div className="row">
                <span>Zaterdag</span>
                <span>09:00 — 15:00</span>
              </div>
              <div className="row">
                <span>Zondag</span>
                <span>Gesloten</span>
              </div>
            </div>
            <div className="addr">
              <strong>TOP Sierhekwerken BV</strong>
              <br />
              De Veken 22 · 1716 KE Opmeer
            </div>
          </div>
          <ShowroomMap />
        </div>
      </section>
    </>
  );
}
