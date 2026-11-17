import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Work from "@/components/Work";
import Link from "next/link";

export const metadata = {
 title: "Selected Work",
 description: "Explore Meta Blueprint, Screenshot Protection, and BART fare-gate concept case studies by Chris Cruz.",
 alternates: { canonical: "/projects" },
 openGraph: { title: "Selected Work | Chris Cruz", url: "/projects", description: "Three selected visual and product design case studies, including published Meta Blueprint work.", images: [{ url: "/portfolio-media/meta-blueprint-featured.webp", alt: "Selected Meta Blueprint work by Chris Cruz" }] },
 twitter: { card: "summary_large_image", images: ["/portfolio-media/meta-blueprint-featured.webp"] },
};

export default function ProjectsPage() {
 return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
  <Cursor light/><Navbar/>
  <div className="pt-24"><Work/></div>
  <div className="px-7 pb-24 md:px-20"><Link href="/" className="text-sm font-semibold text-[#0072FC]">← Back to homepage</Link></div>
 </main>;
}
