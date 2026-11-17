"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION, FALLBACK_PROJECTS } from "@/app/work/content";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_IMAGES = {
 "meta-blueprint": {
  src: "/portfolio-media/meta-blueprint-featured.webp",
  alt: "Selected published Meta Blueprint learning and web design work",
  caption: "Professional work · Published experiences",
 },
 "meta-image-privacy": {
  src: "/portfolio-media/safeshare-hero-final.webp",
  alt: "SafeShare mobile interface and screenshot-protection concept screens",
  caption: "SafeShare · Unshipped product concept",
 },
 "bart-fare-gates": {
  src: "/portfolio-media/bart-final-recreated.webp",
  alt: "Recreated presentation rendering of the team's 2019 Bargate fare-gate concept",
  caption: "BART Bargate · 2019 concept reconstruction",
 },
};

function ProjectPreview({ project }) {
 const image = PROJECT_IMAGES[project.id];
 return (
  <div className="project-preview relative isolate aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] border border-[#E1E7EF] bg-[#F3F6FA]">
   <Image
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 767px) 92vw, (max-width: 1199px) 46vw, 32vw"
    className="object-cover object-center transition-transform duration-500 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-within:scale-[1.025]"
   />
   <span className="absolute bottom-3 left-3 right-3 inline-flex w-fit max-w-[calc(100%-24px)] rounded-full border border-white/80 bg-white/90 px-3 py-2 text-[10px] font-semibold leading-snug text-[#26384B] shadow-sm backdrop-blur-sm">
    {image.caption}
   </span>
  </div>
 );
}

export default function Work() {
 const ref = useRef(null);
 useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = gsap.context(() => {
   gsap.from(".work-item", {
    scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    opacity: 0, y: 14, duration: .45, stagger: .08, clearProps: "all",
   });
  }, ref);
  return () => ctx.revert();
 }, []);

 return (
  <section id="work-section" ref={ref} className="relative px-7 py-16 md:px-20 md:py-20" aria-labelledby="selected-work-heading">
   <div className="mx-auto max-w-[1180px]">
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
     <div>
      <p className="portfolio-eyebrow mb-4 text-[#0072FC]">{SECTION.label}</p>
      <h2 id="selected-work-heading" className="portfolio-section-heading font-bold text-[#111]">{SECTION.heading}</h2>
     </div>
     <p className="max-w-[330px] text-sm leading-relaxed text-[#62707D]">
      Professional visual systems, product UI exploration, and research-led prototyping.
     </p>
    </div>
    <div className="grid grid-cols-1 gap-x-6 gap-y-11 md:grid-cols-2 xl:grid-cols-3">
     {FALLBACK_PROJECTS.map(project => (
      <article className="work-item group min-w-0" key={project.id}>
       <Link href={`/projects/${project.id}`} aria-label={`View ${project.title} case study`} className="block rounded-[1.25rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0072FC]">
        <ProjectPreview project={project}/>
       </Link>
       <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
         <p className="mb-2 text-[11px] font-semibold uppercase leading-relaxed tracking-[.1em] text-[#0072FC]">{project.category}</p>
         <h3 className="text-[clamp(1.4rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-.045em] text-[#17212B]">
          <Link href={`/projects/${project.id}`} className="hover:text-[#0072FC] focus-visible:underline underline-offset-4">{project.title}</Link>
         </h3>
        </div>
        <Link href={`/projects/${project.id}`} aria-label={`Read ${project.title} case study`} className="shrink-0 text-2xl text-[#0072FC] transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1">↗</Link>
       </div>
       <p className="mt-3 max-w-md text-sm leading-[1.75] text-[#5E6D7A]">{project.description}</p>
       <p className="mt-3 text-xs leading-relaxed tracking-wide text-[#71808E]">{project.tech}</p>
       <Link href={`/projects/${project.id}`} className="mt-4 inline-flex text-xs font-bold uppercase tracking-[.15em] text-[#0072FC] hover:underline underline-offset-4">View case study ↗</Link>
      </article>
     ))}
    </div>
   </div>
  </section>
 );
}
