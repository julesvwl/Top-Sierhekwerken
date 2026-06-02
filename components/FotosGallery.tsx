"use client";

import { useState } from "react";
import ImageSlot from "./ImageSlot";
import { galleryCategories, galleryItems } from "@/lib/data";

export default function FotosGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered =
    activeTab === "all" ? galleryItems : galleryItems.filter((i) => i.category === activeTab);

  return (
    <section className="section">
      <div className="container">
        <div className="gallery-tabs">
          {galleryCategories.map((c) => (
            <button
              key={c.slug}
              className={`gallery-tab${activeTab === c.slug ? " active" : ""}`}
              onClick={() => setActiveTab(c.slug)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered.map((item) => (
            <div key={item.id} className="gallery-item">
              <div
                style={{
                  width: "100%",
                  paddingBottom: item.ratio,
                  position: "relative",
                  background: "var(--bone-2)",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <ImageSlot src={item.src} placeholder={item.label} />
                </div>
              </div>
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
            <p>Geen foto&apos;s gevonden in deze categorie.</p>
          </div>
        )}
      </div>
    </section>
  );
}
