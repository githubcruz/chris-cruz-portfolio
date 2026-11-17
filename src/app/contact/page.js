import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
 title: "Contact",
 description: "Contact Chris Cruz about senior visual design, product design, and creative collaboration opportunities.",
 alternates: { canonical: "/contact" },
 openGraph: { title: "Contact Chris Cruz", url: "/contact", images: [{ url: "/photo/chris-headshot-large.png", alt: "Portrait of Chris Cruz" }] },
 twitter: { card: "summary_large_image", images: ["/photo/chris-headshot-large.png"] },
};

export default function ContactPage() {
 return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
  <Cursor light/><Navbar/><Contact standalone/><Footer/>
 </main>;
}
