import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import CTASection from "@/components/CTASection";
import { hekwerkModels } from "@/lib/data";

export default function Album3DPage() {
  return (
    <>
      <PageHero
        eyebrow="Visualisatie"
        title={
          <>
            3D <em>album</em>.
          </>
        }
        subtitle="Bekijk alle modellen in detail. Zo ziet u precies hoe uw hekwerk er uit komt te zien voordat u een keuze maakt."
        slotId="pagehero-3d"
        slotPlaceholder="Sfeerfoto 3D album"
      />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Alle modellen</span>
            <h2 className="display">
              Ontdek de <em>modellen</em> in 3D.
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Klik op een model voor meer details en offerte aanvragen.
            </p>
          </div>
          <div className="model-grid" style={{ marginTop: 48 }}>
            {hekwerkModels.map((m) => (
              <div key={m.slug} className="model-card" style={{ padding: 28 }}>
                <div className="model-3d-slot">
                  <ImageSlot placeholder={`3D render ${m.name}`} />
                  <span className="render-label">3D render</span>
                </div>
                <div className="model-name">{m.name}</div>
                <div className="model-desc">{m.description}</div>
                <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                  <Button href={`/offerte?product=sierhekwerk&model=${m.slug}`} variant="primary" size="sm" arrow>
                    Offerte
                  </Button>
                  <Button href={`/producten/sierhekwerk?model=${m.slug}`} variant="outline" size="sm">
                    Meer info
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Aan de slag"
        title={
          <>
            Klaar voor uw eigen <em>sierhekwerk</em>?
          </>
        }
        primaryLabel="Offerte aanvragen"
        primaryHref="/offerte"
        secondaryLabel="Foto galerij bekijken"
        secondaryHref="/fotos"
      />
    </>
  );
}
