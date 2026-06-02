# TOP Sierhekwerken

Marketing- en offertewebsite voor TOP Sierhekwerken BV — gebouwd met **Next.js
(App Router)**, **React** en **TypeScript**. De volledige visuele stijl uit het
Claude Design-prototype is 1-op-1 overgenomen in `app/globals.css`.

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3000
```

Andere scripts:

```bash
npm run build    # productie-build
npm run start    # productie-server (na build)
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

## Projectstructuur

```
app/
  layout.tsx                # root layout: fonts, AnnounceBar, Navbar, Footer
  globals.css               # volledige design-system CSS (1-op-1 uit prototype)
  page.tsx                  # Home
  not-found.tsx             # 404
  producten/page.tsx        # collectie-overzicht
  producten/[slug]/page.tsx # categoriepagina (+ poort-automatisering met tabs)
  fotos/page.tsx            # filterbare fotogalerij
  3d-album/page.tsx         # 3D modellen
  vacatures/page.tsx        # vacature-overzicht
  vacatures/[slug]/page.tsx # vacature-detail
  contact/page.tsx          # contact + showroom
  storingen/page.tsx        # storing melden
  offerte/page.tsx          # 5-staps offerteformulier

components/                 # herbruikbare UI (Navbar, Footer, Button, forms, …)
lib/
  data.ts                   # alle content/data + types
  toast.ts                  # toast-helper voor de formulieren
public/
  hero.png                  # hero-achtergrond
  logo.png                  # logo
```

## Afbeeldingen

De hero en het logo staan in `public/`. Alle overige beeldvlakken gebruiken het
`<ImageSlot>`-component: zolang er geen `src` is opgegeven tonen ze een nette
placeholder met bijschrift. Zodra je echte foto's hebt, zet je ze in `public/`
en geef je het pad mee aan de betreffende `<ImageSlot src="/…" />` (zie
`app/page.tsx` voor de hero als voorbeeld).

## Routing

Server Components by default. Interactief gedrag zit in client-componenten:
`Navbar`, `ContactForm`, `OfferteForm`, `FotosGallery` en `PoortAutomatisering`.
Het offerteformulier leest voorinvulling uit de URL (bijv.
`/offerte?product=sierhekwerk&model=cranendonck`).
