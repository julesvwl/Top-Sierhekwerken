"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { PHONE_TEL } from "@/lib/data";

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/producten", label: "Producten" },
  { href: "/3d-album", label: "3D Album" },
  { href: "/fotos", label: "Foto's" },
  { href: "/contact", label: "Contact" },
  { href: "/storingen", label: "Storingen" },
  { href: "/vacatures", label: "Vacatures" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="nav-wrap" style={{ display: "contents" }}>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <nav className="nav-links left">
            <Link href="/">Home</Link>
            <Link href="/producten">Producten</Link>
            <Link href="/3d-album">3D Album</Link>
            <Link href="/fotos">Foto&rsquo;s</Link>
            <Link href="/vacatures">Vacatures</Link>
          </nav>
          <Link href="/" className="logo-link" aria-label="TOP Sierhekwerken">
            <Logo />
          </Link>
          <div className="nav-links right">
            <Link href="/contact">Contact</Link>
            <Link href="/storingen" className="storingen-link">
              Storingen<span className="storingen-dot" aria-hidden="true" />
            </Link>
            <Link href="/offerte" className="btn btn-primary nav-cta">
              Offerte aanvragen
            </Link>
            <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Menu openen">
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-sheet${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="top">
          <Logo />
          <button className="close" onClick={() => setMenuOpen(false)} aria-label="Sluiten">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav>
          {MOBILE_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="bottom">
          <Button href="/offerte" variant="light" arrow>
            Offerte aanvragen
          </Button>
          <Button href={`tel:${PHONE_TEL}`} variant="ghost">
            Bel 0226 — 351 310
          </Button>
        </div>
      </div>
    </div>
  );
}
