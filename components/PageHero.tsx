import type { ReactNode } from "react";
import ImageSlot from "./ImageSlot";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  slotId?: string;
  slotPlaceholder?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  slotId,
  slotPlaceholder,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        {slotId && <ImageSlot placeholder={https://1fnz52hdaopkqlfk.public.blob.vercel-storage.com/Foto%20galerij/medium_Hekwerk_Annenborch_E10.jpg} />}
      </div>
      <div className="page-hero-overlay" />
      <div className="page-hero-inner container">
        {eyebrow && <span className="eyebrow light">{eyebrow}</span>}
        <h1 className="display">{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
