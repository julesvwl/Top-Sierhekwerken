import Button from "./Button";
import CTASection from "./CTASection";
import PageHero from "./PageHero";
import {
  hekwerkModels,
  inrijpoortenModels,
  looppoortenModels,
  type Model,
  type ProductCategory as Category,
} from "@/lib/data";

const BULLETS: Record<string, string[]> = {
  sierhekwerk: [
    "Thermisch verzinkt voor maximale corrosiebescherming",
    "Dubbellaags gepoedercoat in elke RAL-kleur",
    "Volledig maatwerk mogelijk",
    "Gratis inmeten bij opdracht",
  ],
  inrijpoorten: [
    "Schuif- of draaipoort, met of zonder automatisering",
    "Iedere maat, kleur en hekpunt",
    "Optioneel met intercom, code- en videofoonset",
    "Gratis inmeten bij opdracht",
  ],
  looppoorten: [
    "Passend bij elk sierhekwerkmodel",
    "Met slot, scharnier en sluitnok",
    "Iedere kleur en hoogte mogelijk",
    "Snelle levering op maat",
  ],
  toegangscontrole: [
    "Comelit videofoonsets in zilver en zwart",
    "Codeklavier voor pincode-toegang",
    "Vingerafdruk- en kaartlezers",
    "Inclusief installatie en programmering",
  ],
  "overige-producten": [
    "Liggers in elke gewenste lengte",
    "Lampen, brievenbussen en huisnummers",
    "Passend bij iedere RAL-kleur",
    "Afhalen of bezorgen door heel Nederland",
  ],
};

const TOEGANG_GRID = [
  { name: "Comelit videofoon set — Zilver", features: ["Beeld + spraak", "Camera unit", "Binnen unit zilver"] },
  { name: "Comelit videofoon set — Zwart", features: ["Beeld + spraak", "Modern zwart design", "Binnen unit zwart"] },
  { name: "Codeklavier IK-07", features: ["Pincode-toegang", "IK-07 / IP65", "Roestvrij staal"] },
  { name: "Roger handzender 4-kanaals", features: ["Roger H80", "Werkt met alle Roger sets", "433MHz"] },
];

const OVERIGE_GRID = [
  { name: "Liggers — op maat", features: ["Profiel 40x40 / 50x50", "Op lengte gemaakt", "Iedere RAL-kleur"] },
  { name: "Buitenlampen", features: ["Wand- en paalverlichting", "LED, dimbaar", "Matchend met RAL"] },
  { name: "Brievenbussen", features: ["Paalmodel of muurmodel", "Met huisnummer", "Verzinkt + gepoedercoat"] },
  { name: "Huisnummerplaten", features: ["RVS of gepoedercoat", "Op maat gemaakt", "Past bij hekwerk"] },
];

export default function ProductCategory({
  cat,
  modelHash = "",
}: {
  cat: Category;
  modelHash?: string;
}) {
  const slug = cat.slug;

  let models: Model[] | null = null;
  if (slug === "sierhekwerk") models = hekwerkModels;
  else if (slug === "inrijpoorten") models = inrijpoortenModels;
  else if (slug === "looppoorten") models = looppoortenModels;

  const bullets = BULLETS[slug] ?? null;

  return (
    <>
      <PageHero
        eyebrow={`${cat.tag} — ${cat.name}`}
        title={
          <>
            {cat.name.split(" ")[0]} op <em>maat</em>.
          </>
        }
        subtitle={cat.description}
        slotId={`pagehero-${slug}`}
        slotPlaceholder={`Sfeerfoto ${cat.name.toLowerCase()}`}
      />

      <section className="section">
        <div className="container">
          <div className="intro">
            <div className="left">
              <span className="eyebrow">Kwaliteit &amp; vakmanschap</span>
              <h2 className="display">
                Thermisch verzinkt en <em>duurzaam</em> gepoedercoat.
              </h2>
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button href={`/offerte?product=${slug}`} variant="primary" arrow>
                  Offerte aanvragen
                </Button>
                <Button href="/fotos" variant="outline">
                  Foto galerij
                </Button>
              </div>
            </div>
            <div className="right body">
              <p>
                Ons {cat.name.toLowerCase()} is thermisch verzinkt en wordt vervolgens dubbellaags
                gepoedercoat in iedere gewenste RAL-kleur. Dit garandeert een langdurige bescherming
                en een perfecte afwerking.
              </p>
              <p>
                Elk product is beschikbaar in verschillende standaardafmetingen en kan volledig op
                maat worden geproduceerd in onze eigen fabriek in Opmeer.
              </p>
              {bullets && (
                <ul>
                  {bullets.map((b, i) => (
                    <li key={b}>
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {models && (
        <section className="section tight" style={{ background: "var(--bone)" }}>
          <div className="container">
            <div>
              <span className="eyebrow">Modellen</span>
              <h2 className="display">
                Kies uw <em>model</em>.
              </h2>
              <p className="lede" style={{ marginTop: 16, maxWidth: 640 }}>
                Wij bieden negen modellen aan. Elk model is leverbaar in iedere standaardhoogte en op
                maat.
              </p>
            </div>
            <div className="model-grid">
              {models.map((m) => (
                <div
                  key={m.slug}
                  className="model-card"
                  id={m.slug}
                  style={
                    modelHash === m.slug
                      ? { borderColor: "var(--navy)", boxShadow: "0 4px 24px rgba(11,30,63,.10)" }
                      : undefined
                  }
                >
                  <div className="model-name">{m.name}</div>
                  <div className="model-desc">{m.description}</div>
                  <div style={{ marginTop: 16 }}>
                    <Button href={`/offerte?product=${slug}&model=${m.slug}`} variant="outline" size="sm" arrow>
                      Offerte aanvragen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === "toegangscontrole" && (
        <section className="section tight" style={{ background: "var(--bone)" }}>
          <div className="container">
            <div>
              <span className="eyebrow">Toegangscontrole</span>
              <h2 className="display">
                Veiligheid en <em>gemak</em>.
              </h2>
            </div>
            <div className="automation-grid" style={{ marginTop: 36 }}>
              {TOEGANG_GRID.map((p) => (
                <div key={p.name} className="automation-card">
                  <h4>{p.name}</h4>
                  <div className="automation-features">
                    {p.features.map((f) => (
                      <div key={f} className="automation-feature">
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Button href={`/offerte?product=${slug}`} variant="outline" size="sm" arrow>
                      Offerte aanvragen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === "overige-producten" && (
        <section className="section tight" style={{ background: "var(--bone)" }}>
          <div className="container">
            <div>
              <span className="eyebrow">Overige</span>
              <h2 className="display">
                Liggers, lampen en <em>brievenbussen</em>.
              </h2>
            </div>
            <div className="automation-grid" style={{ marginTop: 36 }}>
              {OVERIGE_GRID.map((p) => (
                <div key={p.name} className="automation-card">
                  <h4>{p.name}</h4>
                  <div className="automation-features">
                    {p.features.map((f) => (
                      <div key={f} className="automation-feature">
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Button href={`/offerte?product=${slug}`} variant="outline" size="sm" arrow>
                      Offerte aanvragen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Aan de slag"
        title={
          <>
            Ontvang binnen 48 uur een <em>vrijblijvende</em> offerte.
          </>
        }
        primaryLabel="Offerte aanvragen"
        primaryHref={`/offerte?product=${slug}`}
        secondaryLabel="Contact opnemen"
        secondaryHref="/contact"
      />
    </>
  );
}
