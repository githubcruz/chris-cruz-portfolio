import Link from "next/link";
export default function Footer(){return <footer className="relative px-7 md:px-20 py-14 border-t border-white/10">
 <div className="flex flex-col md:flex-row md:justify-between gap-8">
  <div><p className="text-[#0072FC] text-xs tracking-[.25em] uppercase mb-3">Senior Visual & Product Designer</p><p className="text-white text-4xl md:text-6xl font-black tracking-tighter">Chris Cruz.</p></div>
  <nav aria-label="Footer" className="flex gap-7 items-end">{[{label:"Work",href:"/projects"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}].map(x=><Link key={x.href} href={x.href} className="text-xs uppercase tracking-widest text-white/50 hover:text-white">{x.label}</Link>)}</nav>
 </div><p className="text-white/30 text-xs mt-16">© {new Date().getFullYear()} Chris Cruz. All rights reserved.</p>
 </footer>}