import Link from "next/link";
import Button from "@/components/Button";
import ImageSlot from "@/components/ImageSlot";
import ProductImgSlot from "@/components/ProductImgSlot";
import UspStrip from "@/components/UspStrip";
import ReviewBlock from "@/components/ReviewBlock";
import ShowroomMap from "@/components/ShowroomMap";
import CTASection from "@/components/CTASection";
import { PHONE, productCategories, whyTopItems } from "@/lib/data";

const ArrowSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg">
          <ImageSlot src="/hero.png" alt="Sierhekwerk van TOP Sierhekwerken" priority />
        </div>
        <div className="hero-inner">
          <div>
            <span className="eyebrow light">Uw hekwerk is ons vakwerk · Sinds 1992</span>
            <h1 className="display" style={{ fontSize: "clamp(28px,4vw,62px)" }}>
              Wij produceren, leveren en monteren <em>eersteklas</em> sierhekwerken{" "}
              <span style={{ color: "#aab9d6" }}>voor de scherpste prijs</span> in heel Nederland.
            </h1>
            <div className="hero-actions">
              <Button href="/offerte" variant="light" arrow>
                Offerte aanvragen
              </Button>
              <Button href="/offerte?type=eigen-design" variant="ghost">
                Upload uw eigen design
              </Button>
            </div>
            <div className="hero-meta">Ontvang binnen 48 uur een vrijblijvende offerte</div>
          </div>
          <aside className="hero-side">
            <div className="label">Klantbeoordeling</div>
            <div className="score">
              8,7<sup>/10</sup>
            </div>
            <div className="stars" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3 6 6.5.9-4.7 4.7 1.1 6.5L12 17l-5.9 3.1 1.1-6.5L2.5 8.9 9 8z" />
                </svg>
              ))}
            </div>
            <p className="review-q">&ldquo;Prachtig materiaal, mooie afwerking — top.&rdquo;</p>
            <div className="review-c">Dubin · Kapelle op den Bos</div>
          </aside>
        </div>
        <div className="hero-rail" aria-hidden="true">
          {productCategories.map((cat) => (
            <Link key={cat.slug} href={`/producten/${cat.slug}`}>
              <span className="num">{cat.tag}</span>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <UspStrip />

      {/* Op maat sectie */}
      <section className="section" id="opmaat">
        <div className="container">
          <div className="intro">
            <div className="left">
              <span className="eyebrow">Op maat gemaakt</span>
              <h2 className="display">
                Sierhekwerk <em>op&nbsp;maat</em>, ontworpen voor uw situatie.
              </h2>
              <div className="intro-actions">
                <Button href="/offerte?product=sierhekwerk" variant="primary" arrow>
                  Offerte aanvragen
                </Button>
                <Button href="/offerte?type=eigen-design" variant="outline">
                  Upload uw eigen design
                </Button>
              </div>
            </div>
            <div className="right body">
              <p>
                Wij leveren en monteren eersteklas sierhekwerk voor de scherpste prijs in heel
                Nederland. U heeft bij ons keuze uit een groot assortiment sierhekwerken. Daarnaast
                hebben we ook een groot assortiment aan looppoortjes en inrijpoorten. Ons hekwerk is
                standaard verzinkt en kan in iedere RAL-kleur worden gepoedercoat.
              </p>
              <p>
                Voor het beste sierhekwerk uit Noord-Holland komt u naar de sierhekwerkspecialist van
                Nederland. U kunt kiezen uit:
              </p>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>Een groot assortiment sierhekwerken in elke gewenste hoogte en afwerking</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>Looppoortjes — bijvoorbeeld als afsluitingen voor uw tuin</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>
                    Inrijpoorten in verschillende afmetingen, kleuren en hekpunten. Eventueel met
                    automatische poortopener
                  </span>
                </li>
              </ul>
              <p>
                Vraag online een <Link href="/offerte">vrijblijvende offerte</Link> aan. Wij zorgen
                voor een offerte op maat en een snelle en vakkundige levering of montage van uw
                hekwerk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collectie */}
      <section className="section tight" id="producten">
        <div className="container">
          <div className="products-head">
            <div>
              <span className="eyebrow">Collectie</span>
              <h2 className="display">
                De <em>collectie</em>.
              </h2>
            </div>
            <p className="lede">
              Een compleet assortiment sierhekwerk, looppoorten, inrijpoorten en automatisering — elk
              model verkrijgbaar in iedere RAL-kleur en volledig op maat geproduceerd in onze eigen
              fabriek.
            </p>
          </div>
          <div className="products-grid">
            <Link href="/producten/sierhekwerk" className="product-card tall s12-7">
              <ProductImgSlot placeholder="Sierhekwerk" />
              <span className="tag">01 — Sierhekwerk</span>
              <div className="arrow">
                <ArrowSvg />
              </div>
              <div className="info">
                <h3 className="display">Sierhekwerk</h3>
                <div className="meta">
                  Cranendonck · Annenborch · Cannenburch · Swanenburch · Loevenstein · Oldengaerde ·
                  Retro · Houtlook · Lamel
                </div>
              </div>
            </Link>
            <Link href="/producten/inrijpoorten" className="product-card tall s12-5">
              <ProductImgSlot placeholder="Inrijpoort" />
              <span className="tag">02 — Toegang</span>
              <div className="arrow">
                <ArrowSvg />
              </div>
              <div className="info">
                <h3 className="display">Inrijpoorten</h3>
                <div className="meta">In iedere maat, kleur en afwerking. Met of zonder automatisering.</div>
              </div>
            </Link>
            <Link href="/producten/looppoorten" className="product-card wide s12-4">
              <ProductImgSlot placeholder="Looppoort" />
              <span className="tag">03 — Looppoorten</span>
              <div className="arrow">
                <ArrowSvg />
              </div>
              <div className="info">
                <h3 className="display">Looppoorten</h3>
                <div className="meta">Sluit uw tuin elegant af.</div>
              </div>
            </Link>
            <Link href="/producten/poort-automatisering" className="product-card wide s12-4">
              <ProductImgSlot placeholder="Automatisering" />
              <span className="tag">04 — Techniek</span>
              <div className="arrow">
                <ArrowSvg />
              </div>
              <div className="info">
                <h3 className="display">Automatisering</h3>
                <div className="meta">Stille, betrouwbare motoren met bediening op afstand.</div>
              </div>
            </Link>
            <Link href="/producten/toegangscontrole" className="product-card wide s12-4">
              <ProductImgSlot placeholder="Toegangscontrole" />
              <span className="tag">05 — Veiligheid</span>
              <div className="arrow">
                <ArrowSvg />
              </div>
              <div className="info">
                <h3 className="display">Toegangscontrole</h3>
                <div className="meta">Videofoon set · Poort bediening.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vakwerk */}
      <section className="section large vakwerk" id="vakwerk">
        <div className="container">
          <div className="vakwerk-inner">
            <div>
              <span className="eyebrow light">Eigen productie</span>
              <h2 className="display">
                Uw hekwerk is ons <em>vakwerk</em>.
              </h2>
              <div className="body" style={{ marginTop: 26 }}>
                <p>
                  Om u de beste kwaliteit en levertijden te garanderen, worden de sierhekwerken in
                  onze eigen fabriek geproduceerd. Wij staan daarmee garant voor de beste kwaliteit
                  sierhekwerken.
                </p>
              </div>
              <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Button href="/fotos" variant="light" arrow>
                  Foto galerij
                </Button>
                <Button href="/3d-album" variant="ghost">
                  3D album
                </Button>
              </div>
              <div className="vakwerk-stats">
                <div className="stat">
                  <div className="n">
                    30<em>+</em>
                  </div>
                  <div className="l">Jaar vakmanschap</div>
                </div>
                <div className="stat">
                  <div className="n">48u</div>
                  <div className="l">Offerte op maat</div>
                </div>
                <div className="stat">
                  <div className="n">NL</div>
                  <div className="l">Landelijke levering</div>
                </div>
              </div>
            </div>
            <div className="vakwerk-gallery">
              <div className="cell big">
                <ImageSlot placeholder="Anneborch hekwerk" />
                <span className="lab">Anneborch hekwerk</span>
              </div>
              <div className="cell">
                <ImageSlot placeholder="Hekwerk Annenborch" />
                <span className="lab">Hekwerk Annenborch</span>
              </div>
              <div className="cell">
                <ImageSlot placeholder="Detail · punten" />
                <span className="lab">Detail · punten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="section" id="waarom">
        <div className="container">
          <div className="waarom">
            <div>
              <span className="eyebrow">Waarom TOP Sierhekwerk?</span>
              <h2 className="display">
                Het beste sierhekwerk komt van <em>TOP</em>.
              </h2>
              <p className="lede" style={{ marginTop: 26 }}>
                Wij leveren en monteren eersteklas sierhekwerk voor de scherpste prijs in heel
                Nederland. Voor het beste sierhekwerk uit Noord-Holland komt u naar de
                sierhekwerkspecialist van Nederland.
              </p>
            </div>
            <div className="list">
              {whyTopItems.map((item, i) => (
                <div
                  key={item}
                  className="row"
                  style={
                    i === whyTopItems.length - 1
                      ? { gridColumn: "1 / -1", borderRight: "none" }
                      : undefined
                  }
                >
                  <div className="n">{String(i + 1).padStart(2, "0")}</div>
                  <div className="t">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="showroom" id="showroom">
        <div className="showroom-inner">
          <div className="copy">
            <span className="eyebrow">Bezoek</span>
            <h2 className="display">
              Onze <em>showroom</em>.
            </h2>
            <p className="body" style={{ marginTop: 18, maxWidth: 480 }}>
              Ons sierhekwerk is te bezichtigen in onze showroom in Opmeer. Loop binnen, voel het
              materiaal en bespreek uw situatie met een specialist.
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
              <br />
              {PHONE}
            </div>
            <div className="showroom-actions">
              <Button href="/contact" variant="primary" arrow>
                Maak een afspraak
              </Button>
              <Button
                href="https://www.google.nl/maps/dir//De+Veken+22,+1716+KE+Opmeer/"
                variant="outline"
              >
                Route plannen
              </Button>
            </div>
          </div>
          <ShowroomMap />
        </div>
      </section>

      <ReviewBlock />

      <CTASection
        eyebrow="Aan de slag"
        title={
          <>
            Ontvang binnen 48 uur een <em>vrijblijvende</em> offerte.
          </>
        }
        primaryLabel="Offerte aanvragen"
        primaryHref="/offerte"
        secondaryLabel="Upload uw eigen design"
        secondaryHref="/offerte?type=eigen-design"
      />
    </>
  );
}
