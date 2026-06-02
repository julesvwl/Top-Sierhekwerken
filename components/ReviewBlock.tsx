export default function ReviewBlock() {
  return (
    <section className="section reviews-block">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Klantbeoordelingen
        </span>
        <div className="score">
          8,7<sup>/10</sup>
        </div>
        <div className="score-label">Gemiddeld door onze klanten</div>
        <div className="reviews-grid">
          <div className="review">
            <div className="qm">&ldquo;</div>
            <blockquote>Prachtig materiaal, mooie afwerking — top.</blockquote>
            <cite>
              <strong>Dubin</strong>Kapelle op den Bos, België
            </cite>
          </div>
          <div className="review">
            <div className="qm">&ldquo;</div>
            <blockquote>Schitterend hekwerk, vakkundig geplaatst.</blockquote>
            <cite>
              <strong>A.M.</strong>Nieuwe Tonge
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
