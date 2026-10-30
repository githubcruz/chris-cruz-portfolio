"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION, FALLBACK_PROJECTS } from "@/app/work/content";
gsap.registerPlugin(ScrollTrigger);

function ProjectPreview({ project }) {
  const [hasOriginalImage,setHasOriginalImage]=useState(true);
  const privacy = project.id === "meta-image-privacy";
  const blueprint = project.id === "meta-blueprint";
  const bart = project.id === "bart-fare-gates";
  return (
    <div className={`relative isolate aspect-[16/10] w-full overflow-hidden rounded-[1.35rem] border border-black/5 ${privacy ? "bg-[#e8efff]" : blueprint ? "bg-[#dfeaff]" : bart ? "bg-[#e7ecf1]" : "bg-[#111c35]"}`}>
      <div className="absolute inset-0 opacity-70" style={{background:"radial-gradient(circle at 70% 30%, rgba(0,114,252,.19), transparent 55%)"}}/>
      <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-16 work-preview-art" aria-hidden="true">
        {privacy ? (
          <div className="relative w-3/5 max-w-[270px] aspect-[4/5] bg-white rounded-[24px] shadow-[0_20px_70px_rgba(12,45,95,.14)] border border-[#d1dffc] rotate-[-8deg] flex flex-col gap-4 p-5 sm:p-7">
            <div className="flex justify-between items-center"><div className="h-2.5 w-14 bg-[#bdcde9] rounded-full"/><div className="w-5 h-5 rounded-full bg-[#0072FC]"/></div>
            <div className="mt-2 w-full aspect-[5/3] bg-[#dbe8ff] rounded-xl flex items-center justify-center"><div className="border-2 border-[#0072FC] w-12 h-12 rounded-full flex items-center justify-center text-[#0072FC] text-xl">✦</div></div>
            <div className="h-2.5 w-4/5 bg-[#afc6ed] rounded-full"/><div className="h-2.5 w-2/3 bg-[#e3eafa] rounded-full"/><div className="mt-auto h-9 bg-[#0072FC] rounded-lg"/>
            <div className="absolute -right-12 top-1/3 h-20 w-20 rounded-2xl bg-[#0072FC] text-white shadow-xl flex items-center justify-center text-3xl rotate-[13deg]">⌁</div>
          </div>
        ) : blueprint ? (
          <div className="w-[88%] max-w-[440px] aspect-[3/2] rounded-xl bg-white border border-[#c7d7f5] shadow-[0_20px_60px_rgba(0,48,128,.15)] p-4 sm:p-6 -rotate-3">
            <div className="flex gap-1.5 mb-5"><i className="w-2 h-2 rounded-full bg-[#0072FC]"/><i className="w-2 h-2 rounded-full bg-[#c7d7f5]"/><i className="w-2 h-2 rounded-full bg-[#c7d7f5]"/></div>
            <div className="grid grid-cols-3 gap-3 h-[70%]"><div className="col-span-2 bg-[#0072FC] rounded-lg p-4 flex flex-col justify-end"><div className="bg-white/85 h-2 rounded-full w-3/4 mb-2"/><div className="bg-white/50 h-2 rounded-full w-1/2"/></div><div className="flex flex-col gap-3"><div className="flex-1 bg-[#e2eaf9] rounded-lg"/><div className="flex-1 bg-[#b0cbfa] rounded-lg"/></div></div>
          </div>
        ) : bart ? (
          <div className="relative w-[88%] max-w-[460px] flex gap-4 items-end">
            {[0,1,2].map((n)=><div key={n} className="flex-1 aspect-[3/4] rounded-t-[26px] bg-white shadow-[0_20px_55px_rgba(25,45,70,.13)] border-2 border-[#9bb1c8] p-3 relative"><div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full w-10 h-10 border-[7px] border-[#0072FC]"/><div className="absolute bottom-5 inset-x-4 bg-[#cdd8e3] rounded-md h-5"/></div>)}
            <div className="absolute bottom-0 -left-3 right-0 h-3 bg-[#0072FC] rounded-full"/>
          </div>
        ) : (
          <div className="relative w-[68%] max-w-[300px] aspect-square"><div className="absolute inset-0 border-[24px] border-[#0072FC] rounded-full opacity-80"/><div className="absolute inset-[18%] rounded-full border-[10px] border-white/80"/><div className="absolute inset-[35%] rounded-full bg-white"/><div className="absolute -right-4 top-1/2 w-20 h-5 bg-[#729bff] rotate-[-30deg] rounded-full"/></div>
        )}
      </div>
      {privacy && hasOriginalImage && <div className="absolute inset-0 z-[1] bg-[#F6F9FF]"><Image src="/safeshare/hero.webp" alt="Screenshot Protection SafeShare mobile interface concepts" fill sizes="(max-width: 768px) 95vw, 600px" className="object-contain" unoptimized onError={()=>setHasOriginalImage(false)}/></div>}
      <span className={`absolute z-[2] bottom-4 left-5 text-[9px] font-bold tracking-[.18em] uppercase ${project.id === "visual-motion" ? "text-white/70" : "text-[#40516c]"}`}>{privacy && hasOriginalImage ? "SafeShare UI exploration · Concept" : "Conceptual preview · Replace with project imagery"}</span>
      <span className={`absolute z-[2] top-5 right-5 text-xs font-bold ${project.id === "visual-motion" ? "text-white/80" : "text-[#0072FC]"}`}>{project.num} / 04</span>
    </div>
  );
}

export default function Work() {
  const ref=useRef(null);
  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx=gsap.context(()=>{
      gsap.from(".work-item",{scrollTrigger:{trigger:ref.current,start:"top 85%"},opacity:0,y:36,duration:.65,stagger:.12,clearProps:"all"});
    },ref);
    return ()=>ctx.revert();
  },[]);
  return (
    <section id="work-section" ref={ref} className="relative px-7 md:px-20 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14 md:mb-20">
          <div><p className="text-[#0072FC] uppercase tracking-[.4em] text-xs mb-4">{SECTION.label}</p>
            <h2 className="text-white font-black text-4xl md:text-7xl tracking-tighter leading-none">{SECTION.heading}</h2></div>
          <p className="max-w-[280px] text-sm text-white/50 leading-relaxed">A selection of product thinking, design systems, real-world usability, and visual craft.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
          {FALLBACK_PROJECTS.map(project=><article className="work-item group min-w-0" key={project.id}>
            <ProjectPreview project={project}/>
            <div className="flex gap-4 justify-between items-start mt-6">
              <div className="min-w-0"><p className="uppercase tracking-[.18em] text-[#0072FC] text-[10px] font-semibold mb-3">{project.category}</p>
                <h3 className="text-white text-2xl md:text-3xl tracking-tight font-bold"><Link href={`/projects/${project.id}`} className="hover:text-[#0072FC] focus-visible:underline underline-offset-4">{project.title} <span className="sr-only">— read case study</span></Link></h3></div>
              <Link href={`/projects/${project.id}`} aria-label={`Read ${project.title} overview`} className="text-[#0072FC] text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</Link>
            </div>
            <p className="text-white/65 text-sm md:text-base leading-relaxed mt-4 max-w-xl">{project.description}</p>
            <p className="text-white/40 text-xs tracking-wide mt-4">{project.tech}</p>
            <Link href={`/projects/${project.id}`} className="inline-block mt-4 text-[#0072FC] text-xs uppercase font-semibold tracking-widest hover:underline underline-offset-4">View project overview ↗</Link>
          </article>)}
        </div>
        <Link href="/projects" className="inline-flex gap-3 items-center mt-16 text-[#0072FC] font-semibold uppercase text-xs tracking-[.2em] hover:underline underline-offset-8">Explore all work <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
