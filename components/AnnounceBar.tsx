import { EMAIL, PHONE, PHONE_TEL } from "@/lib/data";

export default function AnnounceBar() {
  return (
    <div className="announce">
      <div className="announce-inner">
        <div className="left">
          <span className="dot" aria-hidden="true" />
          <span>Geopend · Ma — Vrij 08:00 — 17:00 · Showroom Opmeer</span>
        </div>
        <div className="right">
          <a href={`mailto:${EMAIL}`} className="hide-sm">
            {EMAIL}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="tel">
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
