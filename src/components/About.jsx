"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuFileText, LuMail } from "react-icons/lu";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION, BIO, TECH, CREATIVE, EXPERIENCE } from "@/app/about/content";
gsap.registerPlugin(ScrollTrigger);

export default function About({ standalone = false }) {
 const ref=useRef(null);
 const [photoReady,setPhotoReady]=useState(true);
 useEffect(()=>{
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx=gsap.context(()=>{
   gsap.fromTo(".about-portrait",{opacity:0,y:28},{opacity:1,y:0,duration:.85,ease:"power3.out",scrollTrigger:{trigger:ref.current,start:"top 82%",once:true}});
  },ref);
  return ()=>ctx.revert();
 },[]);
 return <section id="about-section" ref={ref} className="relative overflow-hidden bg-white px-7 md:px-20 pt-24 pb-20 md:py-28">
  <div className="mx-auto max-w-[1440px]">
   <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] gap-12 lg:gap-16 xl:gap-24 items-center">
    <div className="relative z-10">
     <p className="text-[#0072FC] tracking-[.32em] text-xs uppercase font-bold mb-6">{SECTION.label}</p>
     <h2 className="font-black text-[#111111] tracking-[-.07em] leading-[.94] text-[clamp(2.9rem,5.6vw,6.2rem)] mb-9">Designing<br/>what <span className="text-[#0072FC]">matters.</span></h2>
     <div className="max-w-2xl space-y-5 text-[#595959] text-base md:text-[17px] leading-[1.7]">
      <p className="text-[#303030] text-lg md:text-xl leading-[1.5]">I’m a senior visual and product designer focused on creating thoughtful digital experiences that feel simple, clear, and human.</p>
      {BIO.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
     </div>
     <div className="mt-9 flex flex-wrap gap-3">
      <Link href="/resume" className="inline-flex items-center gap-2 rounded-full bg-[#0072FC] text-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#005ACB]"><LuFileText size={17} aria-hidden="true"/> View Resume ↗</Link>
      <a href="mailto:chrissscruz@gmail.com?subject=Portfolio%20Inquiry" className="inline-flex items-center gap-2 rounded-full border border-[#0072FC] text-[#0072FC] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#EAF3FF]"><LuMail size={17} aria-hidden="true"/> Email me ↗</a>
     </div>
    </div>
    <div className="about-portrait relative isolate w-full max-w-[360px] md:max-w-[380px] mx-auto lg:ml-auto">
     <div className="about-portrait-frame relative aspect-square overflow-hidden rounded-[18px] bg-white border border-[#E3E6EB] shadow-[0_12px_35px_rgba(15,23,42,.055)]">
      <Image src={photoReady?"/photo/chris-headshot-large.png":"/photo/chris-headshot.png"} onError={()=>setPhotoReady(false)} alt="Chris Cruz, senior visual and product designer" fill sizes="(max-width: 768px) 85vw, 380px" className="object-contain object-center" priority={standalone}/>
     </div>
     <p className="mt-5 text-[#111] text-base font-bold">Chris Cruz <span className="text-[#858585] font-normal text-sm">— Senior Visual & Product Designer</span></p>
    </div>
   </div>
   <div className="border-t border-[#E4E4E4] mt-20 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Digital foundations</p><div className="flex flex-wrap gap-2">{TECH.map(s=><span key={s.name} className="about-tool-pill"><s.icon aria-hidden="true"/>{s.name}</span>)}</div></div>
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Creative tools</p><div className="flex flex-wrap gap-2">{CREATIVE.map(s=><span key={s.name} className="about-tool-pill"><s.icon aria-hidden="true"/>{s.name}</span>)}</div></div>
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Experience</p>{EXPERIENCE.map(x=><p key={x.role} className="mb-3 text-sm"><span className="text-[#222] font-semibold">{x.role}</span><span className="block text-[#888] text-xs uppercase tracking-widest mt-1">{x.period}</span></p>)}</div>
   </div>
  </div>
 </section>;
}
