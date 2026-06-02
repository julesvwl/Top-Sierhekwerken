import Link from "next/link";
import Logo from "./Logo";
import {
  EMAIL,
  PHONE,
  PHONE_TEL,
  footerModelLinks,
  footerProductLinks,
} from "@/lib/data";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9.2-.8 1.2-5 1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .8-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3 0 0 .1.1.1.2 0 .1-.1.3-.1.5-.1.3-.3.4-.6.2-1.2-.6-2-2.4-2-3.9 0-3.1 2.3-6 6.6-6 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.6A10 10 0 1 0 12 2z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              TOP Sierhekwerken produceert, levert en monteert sierhekwerken, looppoorten en
              inrijpoorten. Wij staan garant voor de beste kwaliteit voor de scherpste prijs — door
              heel Nederland.
            </p>
            <div className="contact-info">
              <div>De Veken 22 · 1716 KE Opmeer</div>
              <div>
                <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
              </div>
              <div>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div className="footer-socials">
              {Object.keys(SOCIAL_ICONS).map((s) => (
                <a key={s} className="footer-social" href="#" aria-label={s}>
                  {SOCIAL_ICONS[s]}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Producten</h4>
            <ul>
              {footerProductLinks.map((l) => (
                <li key={l.label + l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Modellen</h4>
            <ul>
              {footerModelLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Automatisering</h4>
            <ul>
              <li><Link href="/producten/poort-automatisering">Schuifpoortmotor</Link></li>
              <li><Link href="/producten/poort-automatisering">Knikarm motor</Link></li>
              <li><Link href="/producten/poort-automatisering">Opbouw motor</Link></li>
              <li><Link href="/producten/poort-automatisering">Ondergrondse motor</Link></li>
              <li><Link href="/producten/toegangscontrole">Videofoon set</Link></li>
              <li><Link href="/producten/toegangscontrole">Poort bediening</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Bedrijf</h4>
            <ul>
              <li><Link href="/fotos">Foto galerij</Link></li>
              <li><Link href="/3d-album">3D Album</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/storingen">Storingen</Link></li>
              <li><Link href="/vacatures">Vacatures</Link></li>
              <li><Link href="/offerte">Offerte aanvragen</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} TOP Sierhekwerken BV — De Veken 22, Opmeer</div>
          <div className="footer-bottom-links">
            <a href="#">Privacybeleid</a>
            <a href="#">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
