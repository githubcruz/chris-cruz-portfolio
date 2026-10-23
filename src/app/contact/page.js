import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Contact from "@/components/Contact";
export const metadata={title:"Contact",description:"Contact Chris Cruz for senior product design, visual design, or creative collaboration."};
export default function ContactPage(){return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><div className="pt-12"><Contact/></div></main>}
