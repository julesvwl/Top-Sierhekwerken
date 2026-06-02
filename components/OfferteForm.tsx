"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";
import { getModelsForType } from "@/lib/data";
import { showToast } from "@/lib/toast";

const PRODUCT_TYPES = [
  { id: "sierhekwerk", label: "Sierhekwerk" },
  { id: "inrijpoort", label: "Inrijpoort" },
  { id: "looppoort", label: "Looppoort" },
  { id: "poort-automatisering", label: "Poort automatisering" },
  { id: "toegangscontrole", label: "Toegangscontrole" },
  { id: "overige-producten", label: "Overige producten" },
  { id: "onderhoud-storing", label: "Onderhoud / Storing" },
];

const MONTAGE_OPTIONS = [
  { id: "monteren-top", label: "Laten monteren door TOP" },
  { id: "zelf-bezorgen", label: "Zelf monteren (bezorgen)" },
  { id: "zelf-afhalen", label: "Zelf monteren (afhalen)" },
  { id: "prijsopgave-monteren", label: "Prijsopgave monteren door TOP" },
];

const TOTAL_STEPS = 5;
const STEP_LABELS = ["Type", "Product", "Model", "Afmetingen", "Montage & Gegevens"];

export default function OfferteForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "eigen-design" ? "eigen-design" : "standaard";
  const initialProduct = searchParams.get("product") || "";
  const initialModel = searchParams.get("model") || "";

  // When a product is deep-linked (e.g. /offerte?product=sierhekwerk) skip the
  // intro step and start at the product step.
  const [step, setStep] = useState(initialProduct ? 2 : 1);
  const [designType, setDesignType] = useState(initialType);
  const [producttype, setProducttype] = useState(initialProduct);
  const [model, setModel] = useState(initialModel);

  // step 4
  const [breedte, setBreedte] = useState("");
  const [hoogte, setHoogte] = useState("");
  const [aantalMeters, setAantalMeters] = useState("");
  const [ralKleur, setRalKleur] = useState("");
  const [typePoort, setTypePoort] = useState("");
  const [extraWensen, setExtraWensen] = useState("");

  // step 5
  const [montage, setMontage] = useState("");
  const [naam, setNaam] = useState("");
  const [adres, setAdres] = useState("");
  const [postcode, setPostcode] = useState("");
  const [woonplaats, setWoonplaats] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [wensen, setWensen] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [akkoord, setAkkoord] = useState(false);
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const models = getModelsForType(producttype);
  const showModelStep = models.length > 0;

  function next() {
    if (step === 2 && !producttype) return;
    if (step === 3 && showModelStep && !model) return;
    if (step === 2 && !showModelStep) {
      setStep(4);
      return;
    }
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  }

  function prev() {
    if (step === 4 && !showModelStep) {
      setStep(2);
      return;
    }
    if (step > 1) setStep((s) => s - 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (website) return;
    if (!akkoord) {
      setError("Bevestig dat u akkoord gaat met de verwerking van uw gegevens.");
      return;
    }
    if (!naam.trim() || !telefoon.trim() || !email.includes("@")) {
      setError("Vul uw naam, telefoonnummer en geldig e-mailadres in.");
      return;
    }
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSuccess(true);
    showToast("Offerte aanvraag verzonden");
  }

  if (success) {
    return (
      <div className="success">
        <h3 style={{ fontFamily: "var(--display)" }}>Bedankt voor uw aanvraag!</h3>
        <p>
          Wij nemen zo snel mogelijk contact met u op. Binnen 48 uur ontvangt u een vrijblijvende
          offerte op maat.
        </p>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 8 }}>
          <Button href="/" variant="primary" size="sm" arrow>
            Naar de homepagina
          </Button>
          <Button href="/producten" variant="outline" size="sm">
            Bekijk de collectie
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-steps">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className={`step${i + 1 === step ? " active" : i + 1 < step ? " done" : ""}`} />
        ))}
      </div>
      <div className="form-step-label">
        Stap {step} / {TOTAL_STEPS} — {STEP_LABELS[step - 1]}
      </div>

      {step === 1 && (
        <div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 20 }}>
            Kiest u uit standaard modellen of uploadt u uw eigen design?
          </h3>
          <div className="radio-grid">
            {[
              { id: "standaard", label: "Kies uit standaard modellen" },
              { id: "eigen-design", label: "Upload eigen design" },
            ].map((opt) => (
              <div className="radio-option" key={opt.id}>
                <input
                  type="radio"
                  id={`type-${opt.id}`}
                  name="designType"
                  value={opt.id}
                  checked={designType === opt.id}
                  onChange={() => setDesignType(opt.id)}
                />
                <label htmlFor={`type-${opt.id}`}>{opt.label}</label>
              </div>
            ))}
          </div>
          <div className="step-nav">
            <div />
            <Button onClick={next} variant="primary" arrow>
              Volgende
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 20 }}>
            Welk product heeft u nodig?
          </h3>
          <div className="radio-grid">
            {PRODUCT_TYPES.map((opt) => (
              <div className="radio-option" key={opt.id}>
                <input
                  type="radio"
                  id={`pt-${opt.id}`}
                  name="producttype"
                  value={opt.id}
                  checked={producttype === opt.id}
                  onChange={() => {
                    setProducttype(opt.id);
                    setModel("");
                  }}
                />
                <label htmlFor={`pt-${opt.id}`}>{opt.label}</label>
              </div>
            ))}
          </div>
          <div className="step-nav">
            <Button onClick={prev} variant="outline">
              Terug
            </Button>
            <Button onClick={next} variant="primary" arrow disabled={!producttype}>
              Volgende
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 20 }}>Kies een model</h3>
          {models.length > 0 ? (
            <div className="radio-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}>
              {models.map((m) => (
                <div className="radio-option" key={m.slug}>
                  <input
                    type="radio"
                    id={`model-${m.slug}`}
                    name="model"
                    value={m.slug}
                    checked={model === m.slug}
                    onChange={() => setModel(m.slug)}
                  />
                  <label htmlFor={`model-${m.slug}`}>{m.name}</label>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              Voor dit producttype zijn geen standaard modellen beschikbaar. Ga verder.
            </p>
          )}
          <div className="step-nav">
            <Button onClick={prev} variant="outline">
              Terug
            </Button>
            <Button onClick={next} variant="primary" arrow>
              Volgende
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 20 }}>
            Afmetingen en specificaties
          </h3>
          <div className="field row2">
            <div className="field">
              <label htmlFor="of-breedte">Breedte (cm)</label>
              <input id="of-breedte" type="text" value={breedte} onChange={(e) => setBreedte(e.target.value)} placeholder="bijv. 250" />
            </div>
            <div className="field">
              <label htmlFor="of-hoogte">Hoogte (cm)</label>
              <input id="of-hoogte" type="text" value={hoogte} onChange={(e) => setHoogte(e.target.value)} placeholder="bijv. 100" />
            </div>
          </div>
          <div className="field row2">
            <div className="field">
              <label htmlFor="of-meters">Aantal meters (strekkende meter)</label>
              <input id="of-meters" type="text" value={aantalMeters} onChange={(e) => setAantalMeters(e.target.value)} placeholder="bijv. 12" />
            </div>
            <div className="field">
              <label htmlFor="of-ral">RAL-kleur</label>
              <input id="of-ral" type="text" value={ralKleur} onChange={(e) => setRalKleur(e.target.value)} placeholder="bijv. RAL 7016" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="of-poort">Type poort (indien van toepassing)</label>
            <input id="of-poort" type="text" value={typePoort} onChange={(e) => setTypePoort(e.target.value)} placeholder="bijv. Draaipoort / Schuifpoort" />
          </div>
          <div className="field">
            <label htmlFor="of-extra">Extra wensen</label>
            <textarea id="of-extra" rows={4} value={extraWensen} onChange={(e) => setExtraWensen(e.target.value)} placeholder="Beschrijf eventuele extra wensen..." />
          </div>
          <div className="step-nav">
            <Button onClick={prev} variant="outline">
              Terug
            </Button>
            <Button onClick={next} variant="primary" arrow>
              Volgende
            </Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 20 }}>
            Montage en uw gegevens
          </h3>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 10 }}>Montage</p>
            <div className="radio-grid">
              {MONTAGE_OPTIONS.map((opt) => (
                <div className="radio-option" key={opt.id}>
                  <input
                    type="radio"
                    id={`montage-${opt.id}`}
                    name="montage"
                    value={opt.id}
                    checked={montage === opt.id}
                    onChange={() => setMontage(opt.id)}
                  />
                  <label htmlFor={`montage-${opt.id}`}>{opt.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="of-naam">Naam *</label>
            <input id="of-naam" type="text" value={naam} onChange={(e) => setNaam(e.target.value)} autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="of-adres">Adres</label>
            <input id="of-adres" type="text" value={adres} onChange={(e) => setAdres(e.target.value)} autoComplete="street-address" />
          </div>
          <div className="field row2">
            <div className="field">
              <label htmlFor="of-postcode">Postcode</label>
              <input id="of-postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} autoComplete="postal-code" />
            </div>
            <div className="field">
              <label htmlFor="of-woonplaats">Woonplaats</label>
              <input id="of-woonplaats" type="text" value={woonplaats} onChange={(e) => setWoonplaats(e.target.value)} autoComplete="address-level2" />
            </div>
          </div>
          <div className="field row2">
            <div className="field">
              <label htmlFor="of-tel">Telefoonnummer *</label>
              <input id="of-tel" type="tel" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} autoComplete="tel" required />
            </div>
            <div className="field">
              <label htmlFor="of-email">E-mailadres *</label>
              <input id="of-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="of-wensen">Aanvullende wensen / opmerkingen</label>
            <textarea id="of-wensen" rows={4} value={wensen} onChange={(e) => setWensen(e.target.value)} />
          </div>

          <div className="field">
            <label>Bestanden uploaden (optioneel — tekeningen, foto&apos;s, ontwerpen)</label>
            <div className="file-upload">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,.dwg"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 5))}
              />
              <p>
                <strong>Klik om bestanden te selecteren</strong>
              </p>
              <p>JPG, PNG, PDF — max 5 bestanden</p>
            </div>
            {files.length > 0 && (
              <div className="file-names">
                {files.map((f) => (
                  <span key={f.name} className="file-name-tag">
                    {f.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <label className="consent">
            <input type="checkbox" checked={akkoord} onChange={(e) => setAkkoord(e.target.checked)} />
            <span>
              Ik ga akkoord met de verwerking van mijn gegevens voor het behandelen van mijn
              offerteaanvraag. *
            </span>
          </label>

          {error && (
            <div
              style={{
                color: "#e53e3e",
                fontSize: 14,
                marginBottom: 16,
                padding: "12px 16px",
                background: "#fff5f5",
                borderRadius: 8,
              }}
            >
              {error}
            </div>
          )}

          <div className="step-nav">
            <Button onClick={prev} variant="outline">
              Terug
            </Button>
            <Button type="submit" variant="primary" arrow disabled={loading}>
              {loading ? "Verzenden..." : "Offerte aanvragen"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
