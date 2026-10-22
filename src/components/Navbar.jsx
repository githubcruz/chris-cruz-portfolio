"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const LINKS = [{label:"Work",href:"/projects"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];
export default function Navbar(){
 const [open,setOpen]=useState(false); const pathname=usePathname();
 return <nav aria-label="Main navigation" className="fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-6 md:px-20 py-7 bg-gradient-to-b from-black/80 to-transparent">
  <Link href="/" className="font-black tracking-tight text-white text-lg" aria-label="Chris Cruz home">CHRIS CRUZ<span className="text-[#ff6b1a]">.</span></Link>
  <div className="hidden md:flex gap-9 items-center">{LINKS.map(l=><Link key={l.href} href={l.href} aria-current={pathname===l.href?"page":undefined} className="text-xs uppercase tracking-[.2em] text-white/65 hover:text-[#ff6b1a]">{l.label}</Link>)}</div>
  <button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle menu" className="md:hidden text-white uppercase text-xs tracking-widest">{open?"Close":"Menu"}</button>
  {open&&<div className="absolute top-full inset-x-0 bg-black p-8 flex flex-col gap-7 md:hidden">{LINKS.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-white text-2xl font-bold">{l.label}</Link>)}</div>}
 </nav>;
}