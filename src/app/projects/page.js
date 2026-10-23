import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Work from "@/components/Work";
import Link from "next/link";
export const metadata={title:"Selected Work",description:"Meta Blueprint, image privacy concept, BART fare gate research, and motion design by Chris Cruz."};
export default function ProjectsPage(){return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><div className="pt-24"><Work/></div><div className="px-7 md:px-20 pb-24"><Link href="/" className="text-[#0072FC] font-semibold text-sm">← Back to homepage</Link></div></main>}
