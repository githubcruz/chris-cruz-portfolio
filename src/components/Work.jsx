"use client";
import Link from "next/link";
import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION, FALLBACK_PROJECTS } from "@/app/work/content";
gsap.registerPlugin(ScrollTrigger);
export default function Work(){
 const ref=useRef(null);
 useEffect(()=>{const ctx=gsap.context(()=>{gsap.from(".work-item",{scrollTrigger:{trigger:ref.current,start:"top 80%"},opacity:0,y:30,duration:.7,stagger:.12});},ref);return ()=>ctx.revert()},[]);
 return <section id="work-section" ref={ref} className="relative px-7 md:px-20 py-32 md:py-48">
  <p className="text-[#0072FC] uppercase tracking-[.4em] text-xs mb-5">{SECTION.label}</p>
  <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter mb-16">{SECTION.heading}</h2>
  <div className="max-w-6xl">{FALLBACK_PROJECTS.map(project=><div key={project.id} className="work-item grid md:grid-cols-[70px_1fr_1fr] gap-5 md:gap-8 py-10 border-t border-white/15">
   <span className="text-[#0072FC] font-mono text-xs">{project.num}</span>
   <div><p className="uppercase tracking-[.2em] text-white/40 text-xs mb-3">{project.category}</p><h3 className="font-bold text-white text-3xl md:text-5xl tracking-tight">{project.title}</h3></div>
   <div><p className="text-white/65 leading-relaxed mb-4">{project.description}</p><p className="text-white/35 text-xs tracking-wider">{project.tech}</p></div>
  </div>)}</div>
  <Link href="/projects" className="inline-block mt-12 text-[#0072FC] uppercase text-xs tracking-[.25em] hover:text-white">Explore all work ↗</Link>
 </section>
}