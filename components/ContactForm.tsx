"use client";

import { useState } from "react";
import Button from "./Button";
import { showToast } from "@/lib/toast";

const ONDERWERP_OPTIONS = [
  "Contact",
  "Storing",
  "Onderhoud",
  "Bezorging / Levertijd",
  "Schade",
  "Anders",
];

type Errors = Partial<Record<"naam" | "achternaam" | "email" | "telefoon" | "omschrijving", string>>;

export default function ContactForm({ defaultSubject = "Contact" }: { defaultSubject?: string }) {
  const [form, setForm] = useState({
    onderwerp: defaultSubject,
    naam: "",
    achternaam: "",
    adres: "",
    postcode: "",
    woonplaats: "",
    telefoon: "",
    email: "",
    omschrijving: "",
    website: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function set(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.naam.trim()) e.naam = "Voornaam is verplicht";
    if (!form.achternaam.trim()) e.achternaam = "Achternaam is verplicht";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Geldig e-mailadres is verplicht";
    if (!form.telefoon.trim()) e.telefoon = "Telefoonnummer is verplicht";
    if (!form.omschrijving.trim()) e.omschrijving = "Omschrijving is verplicht";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.website) return; // honeypot
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSuccess(true);
    showToast("Bericht verstuurd");
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(e.target.files || []).slice(0, 5));
  }

  if (success) {
    return (
      <div className="success">
        <h3 style={{ fontFamily: "var(--display)" }}>Bedankt voor uw bericht!</h3>
        <p>Wij nemen zo snel mogelijk contact met u op, uiterlijk binnen 2 werkdagen.</p>
        <div style={{ marginTop: 24 }}>
          <Button onClick={() => setSuccess(false)} variant="outline" size="sm">
            Nieuw bericht
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
        value={form.website}
        onChange={(e) => set("website", e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field">
        <label htmlFor="cf-onderwerp">Onderwerp</label>
        <select id="cf-onderwerp" value={form.onderwerp} onChange={(e) => set("onderwerp", e.target.value)}>
          {ONDERWERP_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="field row2">
        <div className={`field${errors.naam ? " error" : ""}`}>
          <label htmlFor="cf-naam">Voornaam *</label>
          <input id="cf-naam" type="text" value={form.naam} onChange={(e) => set("naam", e.target.value)} autoComplete="given-name" />
          {errors.naam && <span className="field-error">{errors.naam}</span>}
        </div>
        <div className={`field${errors.achternaam ? " error" : ""}`}>
          <label htmlFor="cf-achternaam">Achternaam *</label>
          <input id="cf-achternaam" type="text" value={form.achternaam} onChange={(e) => set("achternaam", e.target.value)} autoComplete="family-name" />
          {errors.achternaam && <span className="field-error">{errors.achternaam}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-adres">Adres</label>
        <input id="cf-adres" type="text" value={form.adres} onChange={(e) => set("adres", e.target.value)} autoComplete="street-address" />
      </div>

      <div className="field row2">
        <div className="field">
          <label htmlFor="cf-postcode">Postcode</label>
          <input id="cf-postcode" type="text" value={form.postcode} onChange={(e) => set("postcode", e.target.value)} autoComplete="postal-code" />
        </div>
        <div className="field">
          <label htmlFor="cf-woonplaats">Woonplaats</label>
          <input id="cf-woonplaats" type="text" value={form.woonplaats} onChange={(e) => set("woonplaats", e.target.value)} autoComplete="address-level2" />
        </div>
      </div>

      <div className="field row2">
        <div className={`field${errors.telefoon ? " error" : ""}`}>
          <label htmlFor="cf-tel">Telefoonnummer *</label>
          <input id="cf-tel" type="tel" value={form.telefoon} onChange={(e) => set("telefoon", e.target.value)} autoComplete="tel" />
          {errors.telefoon && <span className="field-error">{errors.telefoon}</span>}
        </div>
        <div className={`field${errors.email ? " error" : ""}`}>
          <label htmlFor="cf-email">E-mailadres *</label>
          <input id="cf-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
      </div>

      <div className={`field${errors.omschrijving ? " error" : ""}`}>
        <label htmlFor="cf-oms">Omschrijving *</label>
        <textarea id="cf-oms" rows={5} value={form.omschrijving} onChange={(e) => set("omschrijving", e.target.value)} />
        {errors.omschrijving && <span className="field-error">{errors.omschrijving}</span>}
      </div>

      <div className="field">
        <label>Bijlagen (optioneel — max 5 bestanden, 25 MB per bestand)</label>
        <div className="file-upload">
          <input type="file" accept=".jpg,.gif,.png,.pdf" multiple onChange={handleFileChange} />
          <p>
            <strong>Klik om bestanden te selecteren</strong> of sleep ze hierheen
          </p>
          <p>JPG, GIF, PNG, PDF — max 25 MB per bestand, max 5 bestanden</p>
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

      <Button type="submit" variant="primary" block arrow disabled={loading}>
        {loading ? "Verzenden..." : "Bericht versturen"}
      </Button>
    </form>
  );
}
