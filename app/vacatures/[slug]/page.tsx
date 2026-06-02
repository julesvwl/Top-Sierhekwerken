import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { EMAIL, vacancies } from "@/lib/data";

export function generateStaticParams() {
  return vacancies.map((v) => ({ slug: v.slug }));
}

export default async function VacatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = vacancies.find((x) => x.slug === slug);
  if (!v) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Vacature · ${v.type}`}
        title={<>{v.title}</>}
        subtitle={v.excerpt}
        slotId={`pagehero-vac-${slug}`}
        slotPlaceholder="Sfeerfoto werkplaats / collega's"
      />
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80, alignItems: "start" }}>
            <div className="body">
              <span className="eyebrow">Wat ga je doen?</span>
              <h2
                className="display"
                style={{ fontSize: "clamp(28px, 3vw, 42px)", marginTop: 16, marginBottom: 20 }}
              >
                Werken bij <em>TOP</em>.
              </h2>
              <p>
                Als {v.title.toLowerCase()} draag je direct bij aan het resultaat dat onze klanten
                dagelijks waarderen: vakkundig sierhekwerk en poorten, perfect afgewerkt en op tijd
                opgeleverd.
              </p>
              <p>
                Je werkt zelfstandig én in een hecht team. Geen dag is hetzelfde — de ene dag plaats
                je een statige inrijpoort in Noord-Holland, de andere dag werk je in onze fabriek aan
                een speciaal ontwerp.
              </p>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 24, marginTop: 32, marginBottom: 12 }}>
                Wij vragen
              </h3>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>MBO werk- en denkniveau, technische opleiding pré</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>Rijbewijs B (BE is een pré)</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>Ervaring met lassen en/of elektra</span>
                </li>
                <li>
                  <span className="n">04</span>
                  <span>Klantgericht, zelfstandig en collegiaal</span>
                </li>
              </ul>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 24, marginTop: 32, marginBottom: 12 }}>
                Wij bieden
              </h3>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>Marktconform salaris</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>{v.vacationDays} vakantiedagen</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>Pensioenregeling en reiskostenvergoeding</span>
                </li>
                <li>
                  <span className="n">04</span>
                  <span>Korte lijnen, leuk team, ruimte om te groeien</span>
                </li>
              </ul>
            </div>
            <aside style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "var(--bone)", borderRadius: 16, padding: 32 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 10,
                  }}
                >
                  Snelle feiten
                </div>
                <div style={{ display: "grid", gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Type</div>
                    <div style={{ fontWeight: 600 }}>{v.type}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Locatie</div>
                    <div style={{ fontWeight: 600 }}>{v.location}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Vakantiedagen</div>
                    <div style={{ fontWeight: 600 }}>{v.vacationDays}</div>
                  </div>
                </div>
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  <Button href={`mailto:${EMAIL}?subject=Sollicitatie ${v.title}`} variant="primary" arrow block>
                    Solliciteer
                  </Button>
                  <Button href="/vacatures" variant="outline" block>
                    Alle vacatures
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
