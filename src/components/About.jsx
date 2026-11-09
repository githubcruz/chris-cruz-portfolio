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
   gsap.fromTo(".about-portrait",{opacity:0,y:16},{opacity:1,y:0,duration:.5,ease:"power2.out",scrollTrigger:{trigger:ref.current,start:"top 82%",once:true}});
  },ref);
  return ()=>ctx.revert();
 },[]);
 return <section id="about-section" ref={ref} className="relative overflow-hidden bg-white px-7 md:px-20 pt-20 pb-16 md:py-24">
  <div className="mx-auto max-w-[1180px]">
   <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] gap-12 lg:gap-16 xl:gap-24 items-center">
    <div className="relative z-10">
     <p className="text-[#0072FC] tracking-[.32em] text-xs uppercase font-bold mb-6">{SECTION.label}</p>
     <h2 className="font-black text-[#111111] tracking-[-.07em] leading-[.94] text-[clamp(2.8rem,5.2vw,5.8rem)] mb-7">Designing<br/>what <span className="text-[#0072FC]">matters.</span></h2>
     <div className="max-w-2xl space-y-5 text-[#595959] text-base md:text-[17px] leading-[1.7]">
      <p className="text-[#303030] text-lg md:text-xl leading-[1.5]">I’m a senior visual and product designer focused on creating thoughtful digital experiences that feel simple, clear, and human.</p>
      {(standalone ? BIO : BIO.slice(0,1)).map((paragraph,i)=><p key={i}>{paragraph}</p>)}
     </div>
     <div className="mt-8 flex flex-wrap gap-3">
      <Link href="/resume" className="about-resume-button inline-flex items-center gap-2 rounded-full bg-[#0072FC] text-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#005ACB]"><LuFileText size={17} aria-hidden="true"/> View Resume ↗</Link>
      <a href="mailto:chrissscruz@gmail.com?subject=Portfolio%20Inquiry" className="inline-flex items-center gap-2 rounded-full border border-[#0072FC] text-[#0072FC] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#EAF3FF]"><LuMail size={17} aria-hidden="true"/> Email me ↗</a>
      {!standalone && <Link href="/about" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">More about me ↗</Link>}
     </div>
    </div>
    <div className="about-portrait relative isolate w-full max-w-[330px] md:max-w-[380px] mx-auto lg:ml-auto">
     <div className="about-illustration-frame relative aspect-square overflow-hidden rounded-full border-[3px] border-[#0072FC] bg-[#0072FC] shadow-[0_14px_40px_rgba(0,114,252,.11)]" aria-label="Illustrated portrait of Chris Cruz">
      <span aria-hidden="true" className="about-illustration-wave absolute inset-0" />
      <Image src={photoReady?"/photo/chris-illustrated-cutout.png":"/photo/chris-headshot-large.png"} onError={()=>setPhotoReady(false)} alt="Illustrated portrait of Chris Cruz" fill sizes="(max-width: 768px) 85vw, 380px" className="relative z-10 object-contain object-center" priority={standalone}/>
     </div>
     <p className="mt-5 text-[#111] text-base font-bold">Chris Cruz <span className="text-[#858585] font-normal text-sm">— Senior Visual & Product Designer</span></p>
    </div>
   </div>
   {standalone && <div className="border-t border-[#E4E4E4] mt-16 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Digital foundations</p><div className="flex flex-wrap gap-2">{TECH.map(s=><span key={s.name} className="about-tool-pill"><s.icon aria-hidden="true"/>{s.name}</span>)}</div></div>
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Creative tools</p><div className="flex flex-wrap gap-2">{CREATIVE.map(s=><span key={s.name} className="about-tool-pill"><s.icon aria-hidden="true"/>{s.name}</span>)}</div></div>
    <div><p className="text-[#0072FC] uppercase tracking-[.22em] text-xs font-bold mb-5">Experience</p>{EXPERIENCE.map(x=><p key={x.role} className="mb-3 text-sm"><span className="text-[#222] font-semibold">{x.role}</span><span className="block text-[#888] text-xs uppercase tracking-widest mt-1">{x.period}</span></p>)}</div>
   </div>}
  </div>
 </section>;
}
