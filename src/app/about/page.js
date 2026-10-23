import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import About from "@/components/About";
export const metadata={title:"About",description:"Learn about Chris Cruz, Bay Area senior visual and product designer with Meta and BART experience."};
export default function AboutPage(){return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><About/></main>}
