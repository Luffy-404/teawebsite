import type { Metadata } from "next";
import "./globals.css";
import "./hero-modern.css";
import "./navigation-modern.css";
import "./fonts.css";
import "./story-bento.css";
import "./pearl-modern.css";
import "./footer-modern.css";
import "./footer-elevated.css";
import "./hero-media.css";
import "./content-overhaul.css";
import "./mobile-editorial.css";
import "./mobile-final.css";

export const metadata: Metadata = { title: "AFT Techno Trade | Premium Assam Tea from Dibrugarh", description: "Premium Assam tea from Dibrugarh, rooted in small tea growers, craftsmanship and Golden Pearl.", alternates: { canonical: "/" }, openGraph: { title: "AFT Techno Trade | Premium Assam Tea from Dibrugarh", description: "From small tea growers to a remarkable cup.", type: "website" }, twitter: { card: "summary_large_image" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
