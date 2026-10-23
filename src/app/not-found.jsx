import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
export const metadata = { title: "Page Not Found", robots: { index: false, follow: false } };
export default function NotFound() {
 return <main className="portfolio-cursor portfolio-light relative min-h-screen overflow-hidden bg-white text-[#111111]">
  <Cursor light />
  <Navbar />
  <section className="relative min-h-screen px-7 md:px-20 pt-40 pb-24 flex flex-col justify-center">
   <div aria-hidden="true" className="absolute pointer-events-none right-[-14%] top-[20%] w-[min(70vw,720px)] h-[min(70vw,720px)] rounded-full blur-[100px] bg-[#0072FC]/[.06]" />
   <div className="relative z-10 max-w-5xl">
    <p className="text-xs uppercase font-semibold text-[#0072FC] tracking-[.35em] mb-7">404 · Page not found</p>
    <h1 className="font-black tracking-[-.075em] leading-[.95] text-[clamp(4rem,11vw,10rem)] text-[#111111] mb-9">Lost your<br/><span className="text-[#0072FC]">way?</span></h1>
    <p className="max-w-xl text-lg md:text-2xl text-[#575757] leading-snug">Looks like this page doesn&apos;t exist. Let&apos;s get you back to something worth exploring.</p>
    <div className="mt-12 flex flex-wrap gap-4">
     <Link href="/" className="inline-flex items-center rounded-full bg-[#0072FC] text-white px-7 py-3 text-sm font-bold transition-colors hover:bg-[#005acd]">← Back to home</Link>
     <Link href="/projects" className="inline-flex items-center rounded-full border border-[#0072FC] text-[#0072FC] px-7 py-3 text-sm font-bold transition-colors hover:bg-[#0072FC]/10">Explore work ↗</Link>
    </div>
   </div>
  </section>
 </main>
}