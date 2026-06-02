// ============================================================
// TOP Sierhekwerken — content & data
// ============================================================

export const PHONE = "+31 (0)226 351 310";
export const PHONE_TEL = "0226351310";
export const EMAIL = "info@topsierhek.nl";

export type UspItem = {
  icon: "home" | "clock" | "truck" | "star";
  title: string;
  body: string;
};

export const uspItems: UspItem[] = [
  { icon: "home", title: "Inmeten", body: "Uw hekwerk wordt bij opdracht gratis ingemeten" },
  { icon: "clock", title: "48 uur", body: "Binnen 48 uur een vrijblijvende offerte" },
  { icon: "truck", title: "Levering", body: "Levering door heel Nederland" },
  { icon: "star", title: "Eigen productie", body: "Door eigen productie de hoogste kwaliteit" },
];

export const whyTopItems: string[] = [
  "Afspraak is afspraak",
  "Snelle levertijden",
  "TOP kwaliteit",
  "Scherpe prijsstelling",
  "Altijd maatwerk",
  "Persoonlijk advies op locatie",
  "Levering door heel Nederland",
];

export type Model = { slug: string; name: string; description: string };

export const hekwerkModels: Model[] = [
  { slug: "cranendonck", name: "Cranendonck", description: "Sierhekwerk met een boog waarin een authentieke Franse lelie als hekwerkpunt verwerkt zit. Verschillende standaardhoogtes, maatwerk mogelijk." },
  { slug: "annenborch", name: "Annenborch", description: "Sierhekwerk met een boog waarin een ronde bol als hekwerkpunt verwerkt zit. Verschillende standaardhoogtes, maatwerk mogelijk." },
  { slug: "cannenburch", name: "Cannenburch", description: "Sierhekwerk met een speerpunt als hekwerkpunt. Op de speerpunt zit een klein bolletje. Verschillende standaardhoogtes, maatwerk mogelijk." },
  { slug: "swanenburch", name: "Swanenburch", description: "Sierhekwerk met een bol als hekwerkpunt. Verschillende standaardhoogtes, maatwerk mogelijk." },
  { slug: "loevenstein", name: "Loevenstein", description: "Sierhekwerk met vlakke bovenkant en strakke, modieuze uitstraling." },
  { slug: "oldengaerde", name: "Oldengaerde", description: "Sierhekwerk met doorstekende spijl aan de bovenkant en industriële stijl." },
  { slug: "retro", name: "Retro", description: "Sierhekwerk met vlakke bovenkant en ornamenten voor een tijdloos design." },
  { slug: "houtlook", name: "Houtlook", description: "Hekwerk met onder- en bovenligger van kokerprofiel met rechthoekige spijlen ertussen." },
  { slug: "lamel", name: "Lamel", description: "Strak vormgegeven hekwerk met moderne uitstraling." },
];

export const inrijpoortenModels: Model[] = hekwerkModels.map((m) => ({
  ...m,
  description: m.description
    .replace(/Sierhekwerk/, "Inrijpoort")
    .replace(/standaardhoogtes/, "standaardmaten"),
}));

export const looppoortenModels: Model[] = hekwerkModels;

export type ProductCategory = {
  slug: string;
  name: string;
  tag: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "sierhekwerk",
    name: "Sierhekwerk",
    tag: "01",
    description:
      "Het sierhekwerk dat TOP Sierhekwerken aanbiedt is onderhoudsvriendelijk hekwerk waar klanten jarenlang geen omkijken naar hebben. Er is keuze uit verschillende afmetingen, kleuren en hekpunten. Alle producten zijn thermisch verzinkt en worden in de gewenste RAL-kleur dubbellaags gepoedercoat.",
  },
  {
    slug: "inrijpoorten",
    name: "Inrijpoorten",
    tag: "02",
    description:
      "Inrijpoorten zijn onderhoudsvriendelijk en verkrijgbaar in verschillende afmetingen, kleuren en hekpunten. Optioneel met automatische poortopener.",
  },
  {
    slug: "looppoorten",
    name: "Looppoorten",
    tag: "03",
    description:
      "Looppoorten sluiten tuin, terrein of oprit elegant af. Verkrijgbaar in diverse modellen, hoogtes en kleuren.",
  },
  {
    slug: "poort-automatisering",
    name: "Poort automatisering",
    tag: "04",
    description:
      "Automatisering voor schuifpoorten en draaipoorten, met betrouwbare motoren, handzenders, fotocellen en bediening op afstand.",
  },
  {
    slug: "toegangscontrole",
    name: "Toegangscontrole",
    tag: "05",
    description:
      "Videofoonsets en poortbediening voor veiligheid, gemak en controle over wie binnenkomt.",
  },
  {
    slug: "overige-producten",
    name: "Overige producten",
    tag: "06",
    description:
      "Liggers, lampen en brievenbussen als aanvullende producten bij hekwerk en poorten.",
  },
];

export type AutomationProduct = {
  id: string;
  category: "schuifpoort" | "bovengronds" | "ondergronds";
  name: string;
  features: string[];
};

export const automationProducts: AutomationProduct[] = [
  { id: "slide-1", category: "schuifpoort", name: "Roger set inbouw schuifpoortmotor highspeed Brushless 36V", features: ["Inbouw montage", "Highspeed", "Brushless 36V", "Geschikt voor grote poorten"] },
  { id: "slide-2", category: "schuifpoort", name: "Roger set schuifpoortmotor highspeed Brushless 24V", features: ["Highspeed", "Brushless 24V", "Compacte motor"] },
  { id: "knik-1", category: "bovengronds", name: "Roger set knikarm Brushless 36V tot 1.8m vleugel", features: ["Knikarm", "Brushless 36V", "Tot 1.8m vleugel"] },
  { id: "knik-2", category: "bovengronds", name: "Roger set knikarm Brushless 230V tot 3,5m vleugel", features: ["Knikarm", "230V", "Tot 3,5m vleugel"] },
  { id: "knik-3", category: "bovengronds", name: "Roger set knikarm Brushless 24V tot 2,8m vleugel", features: ["Knikarm", "Brushless 24V", "Tot 2,8m vleugel"] },
  { id: "opbouw-1", category: "bovengronds", name: "Roger set opbouw Brushless 36V high speed tot 2,5m vleugel", features: ["Opbouw", "Brushless 36V", "Highspeed", "Tot 2,5m vleugel"] },
  { id: "opbouw-2", category: "bovengronds", name: "Roger set opbouw Brushless 36V tot 4m vleugel", features: ["Opbouw", "Brushless 36V", "Tot 4m vleugel"] },
  { id: "onder-1", category: "ondergronds", name: "Roger set ondergronds Brushless 36V incl. RVS deksels", features: ["Ondergronds", "Brushless 36V", "RVS deksels inbegrepen", "Onzichtbare montage"] },
];

export type Vacancy = {
  slug: string;
  title: string;
  location: string;
  vacationDays: number;
  type: string;
  excerpt: string;
};

export const vacancies: Vacancy[] = [
  { slug: "elektra-monteur-buitendienst", title: "Elektra-monteur buitendienst", location: "De Veken 22 Opmeer", vacationDays: 25, type: "Fulltime", excerpt: "Ben jij een ervaren monteur buitendienst met voldoende technisch inzicht, kennis van elektra en ervaring met lassen?" },
  { slug: "monteur-buitendienst", title: "Monteur buitendienst", location: "De Veken 22 Opmeer", vacationDays: 25, type: "Fulltime", excerpt: "Ben jij een ervaren monteur buitendienst met technisch inzicht en ervaring met lassen?" },
  { slug: "metaalbewerker-lasser", title: "Metaalbewerker / lasser", location: "De Veken 22 Opmeer", vacationDays: 25, type: "Fulltime", excerpt: "TOP Sierhekwerken zoekt een enthousiaste lasser / metaalbewerker voor het vervaardigen van sierhekwerken, looppoorten en inrijpoorten." },
];

export type GalleryCategory = { slug: string; name: string };

export const galleryCategories: GalleryCategory[] = [
  { slug: "all", name: "Alle" },
  { slug: "sierhekwerk", name: "Sierhekwerk" },
  { slug: "inrijpoorten", name: "Inrijpoorten" },
  { slug: "balkon-terras", name: "Balkon/Terras" },
  { slug: "speciaal", name: "Speciaal" },
  { slug: "houtlook", name: "Houtlook" },
  { slug: "beveiliging", name: "Beveiliging" },
];

export type GalleryItem = {
  id: number;
  category: string;
  label: string;
  ratio: string;
    src?: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1, category: "sierhekwerk", label: "Cranendonck sierhekwerk", ratio: "130%", src: "/sfeer-sierhekwerk-1.jpg" },
  { id: 2, category: "inrijpoorten", label: "Inrijpoort Annenborch", ratio: "60%" },
  { id: 3, category: "sierhekwerk", label: "Swanenburch hekwerk", ratio: "75%" },
  { id: 4, category: "houtlook", label: "Houtlook hekwerk", ratio: "130%" },
  { id: 5, category: "sierhekwerk", label: "Loevenstein sierhekwerk", ratio: "60%" },
  { id: 6, category: "inrijpoorten", label: "Inrijpoort Cranendonck", ratio: "75%" },
  { id: 7, category: "balkon-terras", label: "Balkonhekwerk", ratio: "130%" },
  { id: 8, category: "speciaal", label: "Speciaal maatwerk", ratio: "60%" },
  { id: 9, category: "sierhekwerk", label: "Retro sierhekwerk", ratio: "75%" },
  { id: 10, category: "beveiliging", label: "Beveiligingshekwerk", ratio: "130%" },
  { id: 11, category: "houtlook", label: "Lamel hekwerk", ratio: "60%" },
  { id: 12, category: "inrijpoorten", label: "Schuifpoort Oldengaerde", ratio: "75%" },
];

export type FooterLink = { label: string; href: string };

export const footerProductLinks: FooterLink[] = [
  { label: "Sierhekwerk", href: "/producten/sierhekwerk" },
  { label: "Looppoorten", href: "/producten/looppoorten" },
  { label: "Inrijpoorten", href: "/producten/inrijpoorten" },
  { label: "Poort automatisering", href: "/producten/poort-automatisering" },
  { label: "Toegangscontrole", href: "/producten/toegangscontrole" },
  { label: "Videofoon set", href: "/producten/toegangscontrole" },
  { label: "Poort bediening", href: "/producten/toegangscontrole" },
  { label: "Overige producten", href: "/producten/overige-producten" },
  { label: "Liggers", href: "/producten/overige-producten" },
  { label: "Lampen", href: "/producten/overige-producten" },
  { label: "Brievenbussen", href: "/producten/overige-producten" },
];

export const footerModelLinks: FooterLink[] = hekwerkModels.map((m) => ({
  label: m.name,
  href: `/producten/sierhekwerk?model=${m.slug}`,
}));

export function getModelsForType(type: string): Model[] {
  if (type === "sierhekwerk") return hekwerkModels;
  if (type === "inrijpoort") return inrijpoortenModels;
  if (type === "looppoort") return looppoortenModels;
  return [];
}
