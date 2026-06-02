"use client";

import { useState } from "react";
import Button from "./Button";
import CTASection from "./CTASection";
import PageHero from "./PageHero";
import { automationProducts, type ProductCategory } from "@/lib/data";

const CATEGORIES = [
  { id: "all", label: "Alle" },
  { id: "schuifpoort", label: "Schuifpoort" },
  { id: "bovengronds", label: "Bovengronds" },
  { id: "ondergronds", label: "Ondergronds" },
];

export default function PoortAutomatisering({ cat }: { cat: ProductCategory }) {
  const [activeTab, setActiveTab] = useState("all");
  const filtered =
    activeTab === "all"
      ? automationProducts
      : automationProducts.filter((p) => p.category === activeTab);

  return (
    <>
      <PageHero
        eyebrow={`${cat.tag} — Poort automatisering`}
        title={
          <>
            Poort <em>automatisering</em>.
          </>
        }
        subtitle="Betrouwbare poortautomatisering van het merk Roger. Voor schuifpoorten en draaipoorten, met handzenders, fotocellen en bediening op afstand."
        slotId="pagehero-automatisering"
        slotPlaceholder="Sfeerfoto poort automatisering"
      />
      <section className="section">
        <div className="container">
          <div className="intro">
            <div className="left">
              <span className="eyebrow">Roger Technology</span>
              <h2 className="display">
                Stille, betrouwbare <em>automatisering</em>.
              </h2>
            </div>
            <div className="right body">
              <p>
                Wij leveren en installeren automatiseringssets van het merk Roger. Roger is één van
                de meest toonaangevende merken op het gebied van poortautomatisering, bekend om zijn
                betrouwbaarheid en lange levensduur.
              </p>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>Sets voor schuifpoorten — inbouw en opbouw</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>Sets voor draaipoorten — knikarm en opbouw</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>Ondergrondse sets voor onzichtbare montage</span>
                </li>
                <li>
                  <span className="n">04</span>
                  <span>Inclusief handzender, fotocel en ontvanger</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 60 }}>
            <div className="automation-tabs">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`automation-tab${activeTab === c.id ? " active" : ""}`}
                  onClick={() => setActiveTab(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="automation-grid">
              {filtered.map((p) => (
                <div key={p.id} className="automation-card">
                  <h4>{p.name}</h4>
                  <div className="automation-features">
                    {p.features.map((f) => (
                      <div key={f} className="automation-feature">
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Button href="/offerte?product=poort-automatisering" variant="outline" size="sm" arrow>
                      Offerte aanvragen
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Aan de slag"
        title={
          <>
            Interesse in poortautomatisering? <em>Neem contact op.</em>
          </>
        }
        primaryLabel="Offerte aanvragen"
        primaryHref="/offerte?product=poort-automatisering"
        secondaryLabel="Contact opnemen"
        secondaryHref="/contact"
      />
    </>
  );
}
