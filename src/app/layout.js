import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const title = "Chris Cruz — Senior Visual & Product Designer";
const description = "Selected work by Chris Cruz, a Bay Area senior visual and product designer focused on web experiences, design systems, UI, and motion.";

export const viewport = { themeColor: "#FFFFFF" };
export const metadata = {
 metadataBase: new URL("https://www.chriscruz.tech"),
 title: { default: title, template: "%s | Chris Cruz" },
 description,
 authors: [{ name: "Chris Cruz" }],
 creator: "Chris Cruz",
 keywords: ["Chris Cruz", "Visual Designer", "Creative Technologist", "Meta Blueprint", "Motion Design", "Product Design", "Design Systems"],
 icons: {
  icon: [
   { url: "/favicon.ico?v=cc-transparent-3", type: "image/x-icon", sizes: "any" },
   { url: "/icon.svg?v=cc-transparent-3", type: "image/svg+xml" },
  ],
  shortcut: "/favicon.ico?v=cc-transparent-3",
  apple: "/icon.svg?v=cc-transparent-3",
 },
 openGraph: {
  type: "website", locale: "en_US", siteName: "Chris Cruz — Design Portfolio",
  url: "/", title, description,
  images: [{ url: "/portfolio-media/meta-blueprint-featured.webp", width: 2048, height: 1152, alt: "Selected Meta Blueprint web and visual design work from Chris Cruz's portfolio" }],
 },
 twitter: {
  card: "summary_large_image", title, description,
  images: ["/portfolio-media/meta-blueprint-featured.webp"],
 },
 robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
 return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body>{children}<Analytics/></body></html>;
}
