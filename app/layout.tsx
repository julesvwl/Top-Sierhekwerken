import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import AnnounceBar from "@/components/AnnounceBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Body copy uses Source Serif 4; headings use Georgia (system serif) per the
// design — no display webfont is loaded.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOP Sierhekwerken — Sierhekwerk · Inrijpoorten · Looppoorten",
  description:
    "TOP Sierhekwerken produceert, levert en monteert eersteklas sierhekwerken, looppoorten en inrijpoorten voor de scherpste prijs — door heel Nederland. Sinds 1992.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={sourceSerif.variable}>
      <body>
        <div className="route-wrap">
          <AnnounceBar />
          <Navbar />
          <main className="view">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
