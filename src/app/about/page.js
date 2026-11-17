import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import About from "@/components/About";

export const metadata = {
 title: "About",
 description: "Meet Chris Cruz, a Bay Area senior visual and product designer with experience across Meta Blueprint, design systems, and digital learning.",
 alternates: { canonical: "/about" },
 openGraph: { title: "About Chris Cruz", url: "/about" },
};

export default function AboutPage() {
 return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
  <Cursor light/><Navbar/><About standalone/>
 </main>;
}
