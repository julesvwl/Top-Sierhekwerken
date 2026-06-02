import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title={
          <>
            Pagina niet <em>gevonden</em>.
          </>
        }
        subtitle="De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepagina of bekijk onze collectie."
      />
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: 12 }}>
            <Button href="/" variant="primary" arrow>
              Naar de homepagina
            </Button>
            <Button href="/producten" variant="outline">
              Bekijk de collectie
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
