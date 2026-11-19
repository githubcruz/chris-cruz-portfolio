import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
 title: "About",
 description: "Meet Chris Cruz, a Bay Area senior visual and product designer with experience across Meta Blueprint, design systems, and digital learning.",
 alternates: { canonical: "/about" },
 openGraph: { title: "About Chris Cruz", url: "/about", images: [{ url: "/photo/chris-headshot-large.png", alt: "Portrait of Chris Cruz" }] },
 twitter: { card: "summary_large_image", images: ["/photo/chris-headshot-large.png"] },
};

export default function AboutPage() {
 return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
  <Cursor light/><Navbar/><About standalone/><Footer/>
 </main>;
}
