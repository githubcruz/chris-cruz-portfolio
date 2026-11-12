import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SafeShareCaseStudy from "@/components/SafeShareCaseStudy";
import { FALLBACK_PROJECTS } from "@/app/work/content";

const studies = {
 "meta-image-privacy": {
  eyebrow:"01 / PRODUCT DESIGN", heading:"Designing for privacy, clarity, and control.",
  summary:"Exploring how people might better understand and manage image privacy across social products.",
  status:"Concept exploration", role:"Product design · Prototyping", methods:["Competitive research","User needs","Interaction design","Prototyping"],
  problem:"Privacy settings can be difficult to discover and understand. This concept considers how people could feel more informed and in control of images across Facebook, Instagram, and WhatsApp.",
  strategy:"Explore the privacy challenge, compare existing patterns, map key user decisions, and translate ideas into interface concepts and prototypes.",
  contribution:"Product concept exploration, interface design, and prototyping.",
  process:[["Understand","Define the privacy challenge and review relevant interaction patterns."],["Explore","Sketch alternative flows and ways to communicate image controls."],["Prototype","Turn promising ideas into tangible interface interactions."],["Evaluate","Use feedback and design critique to identify what should be refined."]],
  visual:["Research and problem framing","User flows and design alternatives","Interaction prototypes","Design decisions and refinements"],
  takeaway:"A concept project. Screens, tested findings, and outcomes will be included once the underlying artifacts are documented; this work is not presented as a shipped feature."
 },
 "meta-blueprint":{
  eyebrow:"02 / VISUAL DESIGN · DIGITAL LEARNING",heading:"Visual design across the full learning experience.",
  summary:"From updating hundreds of courses to designing home and landing pages, instructional videos, and reusable Figma components, my work helped keep Meta Blueprint consistent across formats and easier to produce at scale.",
  status:"Professional work",role:"Visual design · Creative direction · Motion",methods:["Course and web UI","Home and landing pages","Video and motion","Reusable Figma components"],
  problem:"Meta Blueprint brings small-business learning to people through an evolving catalog of courses, web experiences, and instructional content. Frequent updates across formats called for a clear, cohesive visual language and efficient production.",
  strategy:"Create a consistent experience from discovery to learning: design course and web interfaces, establish reusable Figma patterns, develop visual assets, and support video and motion production across digital touchpoints.",
  contribution:"My work included updating a catalog of hundreds of courses, designing Blueprint home and landing-page experiences, creating instructional video and visual assets, and building reusable Figma components. A 16-course e-learning revamp is one focused example of that broader contribution.",
  process:[["Course experiences","Update course visuals, learning layouts, and the digital assets needed across a large catalog."],["Web experiences","Design and refine Blueprint home and landing pages that help learners discover relevant content."],["Motion and storytelling","Produce instructional videos and visual storytelling elements across learning touchpoints."],["Design at scale","Systemize recurring UI and visual patterns in Figma to speed iteration and improve brand consistency."]],
  visual:["Blueprint home and landing pages","Instructional video and motion frames","Reusable Figma systems and 16-course revamp"],
  takeaway:"Across these workstreams, reusable components helped make production and publishing faster with fewer brand inconsistencies. The 16-course redesign provides a concrete example; supporting visuals and verified measures will make the broader impact clear."
 },
 "bart-fare-gates":{
  eyebrow:"03 / HUMAN-CENTERED DESIGN",heading:"Designing for the moments that matter in transit.",
  summary:"Research and usability-focused work addressing passenger interactions with BART fare gates.",
  status:"Research and design",role:"Human-centered design · Usability research",methods:["Observation","User research","Usability testing","Recommendations"],
  problem:"Fare gates are physical touchpoints used in high-traffic environments. Small interaction difficulties can create confusion and friction for passengers.",
  strategy:"Understand how people interact with the gates, observe areas of difficulty, and turn findings into informed recommendations.",
  contribution:"User research, usability testing, analysis of passenger behavior, and design recommendations.",
  process:[["Observe","Examine how passengers approach and interact with existing gate experiences."],["Identify","Surface usability pain points and patterns from the research."],["Test","Use usability feedback to understand which directions are more intuitive."],["Recommend","Communicate findings and design opportunities to stakeholders."]],
  visual:["Research context and observations","Pain points and journey","Explored design directions","Testing insights and recommendations"],
  takeaway:"Reported project outcomes should be shown alongside the relevant project evidence before attributing a measured improvement. No independently unverified percentage is displayed."
 },
 "visual-motion":{
  eyebrow:"04 / VISUAL CRAFT",heading:"Movement, meaning, and memorable details.",
  summary:"A selection of visual design, motion, and storytelling work for digital experiences.",
  status:"Selected creative work",role:"Visual design · Motion",methods:["After Effects","Visual storytelling","Digital assets","Brand execution"],
  problem:"Motion and visual systems need to communicate information clearly while making an experience feel engaging and coherent.",
  strategy:"Connect narrative, layout, typography, and movement to create intentional visual work suited to the medium.",
  contribution:"Design and production of motion graphics, visual assets, and content across digital formats.",
  process:[["Concept","Develop the creative direction and intended message."],["Design","Explore typography, composition, and visual systems."],["Animate","Translate static concepts into purposeful movement."],["Deliver","Prepare assets for the intended channel or product experience."]],
  visual:["Visual direction and key frames","Motion exploration","Final creative assets","In-context applications"],
  takeaway:"An edited reel and original approved examples will complete this collection. Placeholder panels are not intended as representations of delivered client work."
 }
};
export function generateStaticParams(){ return FALLBACK_PROJECTS.map(p=>({slug:p.id})); }
export async function generateMetadata({params}){const {slug}=await params;const p=FALLBACK_PROJECTS.find(x=>x.id===slug);return {title:p?p.title:"Project",description:p?.description};}

function MediaPlaceholder({label,index,slug}) {
 return <div className="group relative overflow-hidden rounded-[20px] bg-[#EFF4FC] border border-[#DDE7F4] aspect-[16/10] flex items-center justify-center">
  <div aria-hidden="true" className="absolute right-[-10%] top-[-24%] w-[70%] aspect-square rounded-full border-[35px] border-[#0072FC]/10 transition-transform duration-500 group-hover:scale-110"/>
  <div aria-hidden="true" className="absolute left-[12%] bottom-[17%] w-[30%] h-[28%] rounded-2xl border border-[#0072FC]/20 rotate-[-12deg] bg-white/50"/>
  <div className="relative flex flex-col items-center gap-3 px-5 text-center">
   <span className="text-[#0072FC] font-black text-3xl md:text-5xl tabular-nums opacity-60">{String(index+1).padStart(2,"0")}</span>
   <span className="text-[#26364C] font-semibold text-sm md:text-base">{label}</span>
   <span className="text-[#64758A] uppercase tracking-widest text-[10px]">Original project visual to be added</span>
  </div>
 </div>;
}
export default async function ProjectPage({params}){
 const {slug}=await params;
 if (slug === "meta-image-privacy") return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><SafeShareCaseStudy/></main>;
 const i=FALLBACK_PROJECTS.findIndex(p=>p.id===slug);
 if(i===-1)notFound();const project=FALLBACK_PROJECTS[i],data=studies[slug];const next=FALLBACK_PROJECTS[(i+1)%FALLBACK_PROJECTS.length];
 return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111111] overflow-x-hidden">
  <Cursor light/><Navbar/>
  <article className="mx-auto max-w-[1340px] px-7 md:px-20 pt-32 md:pt-40 pb-24">
   <Link href="/projects" className="inline-flex text-[#0072FC] text-xs font-semibold uppercase tracking-[.22em] hover:underline underline-offset-4">← All projects</Link>
   <header className={slug === "meta-blueprint" ? "mt-11 max-w-6xl" : "mt-14 max-w-6xl"}>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
     {slug === "meta-blueprint" && (
      <span className="inline-flex items-center gap-1.5 text-[#172B39] font-semibold text-sm" aria-label="Meta">
       <svg width="25" height="25" viewBox="0 0 24 24" fill="#0072FC" aria-hidden="true" focusable="false"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>
       <span>Meta</span>
      </span>
     )}
     <p className="uppercase text-[#0072FC] text-xs tracking-[.3em] font-bold">{data.eyebrow}</p>
    </div>
    <h1 className={slug === "meta-blueprint" ? "font-black tracking-[-.065em] leading-[1.02] text-[clamp(2.6rem,5.4vw,5.8rem)] mt-5 max-w-5xl" : "font-black tracking-[-.065em] leading-[.97] text-[clamp(2.8rem,6.8vw,6.7rem)] mt-5 max-w-5xl"}>{slug === "meta-blueprint" ? <>Meta <span className="text-[#0072FC]">Blueprint.</span></> : <>{project.title}<span className="text-[#0072FC]">.</span></>}</h1>
    <p className={slug === "meta-blueprint" ? "mt-6 text-[#262626] font-medium leading-tight text-[clamp(1.3rem,2.15vw,1.85rem)] max-w-4xl" : "mt-8 text-[#262626] font-medium leading-tight text-[clamp(1.35rem,2.75vw,2.35rem)] max-w-4xl"}>{data.heading}</p>
    <p className={slug === "meta-blueprint" ? "mt-4 text-[#636363] leading-[1.65] text-base md:text-lg max-w-3xl" : "mt-6 text-[#636363] leading-relaxed text-lg max-w-3xl"}>{data.summary}</p>
   </header>
   <div className="mt-14 border-y border-[#DEDEDE] py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {[["Project type",data.status],["My focus",data.role],["Methods",data.methods.slice(0,2).join(" · ")],["Stage","Case study in progress"]].map(([label,value])=><div key={label}><p className="text-[#0072FC] text-[10px] tracking-widest font-bold uppercase mb-2">{label}</p><p className="text-[#2B2B2B] leading-relaxed text-sm">{value}</p></div>)}
   </div>
   {slug === "meta-blueprint" ? (
    <figure className="mt-16 md:mt-24">
     <div className="relative w-full aspect-video overflow-hidden rounded-[28px] border border-[#E9EEF6] bg-white">
      <Image src="/portfolio-media/meta-blueprint-gallery.webp" alt="A broad 21-design overview of Meta Blueprint learning experiences and visual design work" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized priority/>
     </div>
     <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[#707070] text-xs">
      <span>Blueprint visual overview: selected course and business-learning design work.</span>
      <a href="/portfolio-media/meta-blueprint-gallery.webp" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] font-semibold hover:underline underline-offset-4">View full-size hero ↗</a>
     </figcaption>
    </figure>
   ) : (
   <div className="mt-16 md:mt-24 rounded-[28px] bg-[#0072FC] relative min-h-[270px] md:min-h-[365px] overflow-hidden p-8 md:p-16 flex flex-col justify-end">
    <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{background:"radial-gradient(circle at 74% 30%, rgba(255,255,255,.28),transparent 45%)"}}/>
    <div aria-hidden="true" className="absolute w-[70%] aspect-square rounded-full border-[35px] md:border-[65px] border-white/10 -right-[20%] -top-[35%]"/>
    <p className="relative text-white/70 uppercase tracking-[.25em] text-xs mb-5">Case study / {project.num}</p>
    <h2 className="relative text-white font-black leading-[1] tracking-[-.05em] text-[clamp(2.1rem,4.8vw,4.9rem)] max-w-[920px]">{data.heading}</h2>
    <p className="relative text-white/70 text-xs mt-8">Graphic title treatment · Not a project screenshot</p>
   </div>
   )}
   <section className="grid lg:grid-cols-[.75fr_1.25fr] gap-7 lg:gap-20 mt-20 md:mt-24">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">01 / Context</p><h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">The challenge.</h2></div>
    <div className="text-lg md:text-xl text-[#535353] leading-[1.7]"><p>{data.problem}</p><p className="mt-7">{data.strategy}</p></div>
   </section>
   <section className="mt-20 md:mt-24">
    <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">02 / Design process</p>
    <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">From question to direction.</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{data.process.map(([heading,body],k)=><div key={heading} className="border border-[#DEDEDE] rounded-2xl p-7 min-h-[245px] transition-colors hover:border-[#0072FC]/50"><p className="text-[#0072FC] text-xs font-bold">{String(k+1).padStart(2,"0")}</p><h3 className="text-[#171717] font-bold text-xl mt-9">{heading}</h3><p className="text-[#676767] leading-relaxed text-sm mt-3">{body}</p></div>)}</div>
   </section>
   {slug === "meta-blueprint" && (
    <section className="mt-20 md:mt-24" aria-labelledby="cms-course-heading">
     <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">03 / CMS course spotlight</p>
     <h2 id="cms-course-heading" className="mt-4 text-3xl md:text-4xl font-black tracking-tight">Designing a complete CMS course.</h2>
     <p className="mt-3 text-lg md:text-xl text-[#3B4858] font-medium max-w-4xl">How to create and plan for engaging Instagram posts</p>
     <p className="mt-5 text-[#616B77] text-base md:text-lg leading-[1.75] max-w-4xl">I designed and built this Meta Blueprint course within a front-end CMS, using Figma and Meta’s existing design library to prepare instructional assets, then implementing the learning layout and components with HTML and CSS. I optimized asset dimensions and file sizes for efficient delivery and partnered with instructional designers, brand, legal, and cross-functional stakeholders through review and approval.</p>
     <figure className="mt-9">
      <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[24px] border border-[#DFE8F6] bg-[#F7FAFF]">
       <Image src="/portfolio-media/blueprint-cms-course-spotlight.webp" alt="Selected real CMS course designs: lesson introduction and overview, modular learning components, instructional visual examples, and course recap with frequently asked questions" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
      </div>
      <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-[#657487] text-sm">
       <span>Real course screens arranged to show the system, from introduction through learning modules to recap.</span>
       <a href="/portfolio-media/blueprint-cms-full-course.webp" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] font-semibold hover:underline underline-offset-4">Explore long-form course screenshots ↗</a>
      </figcaption>
     </figure>
     <div className="mt-9 grid sm:grid-cols-2 gap-x-10 gap-y-6">
      {[
       ["Experience design","Structured long-form lessons with clear hierarchy, visual examples, interactive modules, and learning recaps."],
       ["Hands-on CMS build","Implemented course sections and component markup in the CMS using HTML and CSS, then reviewed the rendered page."],
       ["Asset-ready production","Prepared course graphics to required dimensions and optimized file sizes to support faster page loading."],
       ["Brand and stakeholder reviews","Balanced Meta design-system limits with feedback from instructional design, brand, legal, and other partners."]
      ].map(([title,description],index)=>(
       <div key={title} className="border-t border-[#E2E8F0] pt-5">
        <p className="text-[#0072FC] text-xs font-bold">{String(index+1).padStart(2,"0")}</p>
        <h3 className="mt-2 font-semibold text-[#1C2936] text-base md:text-lg">{title}</h3>
        <p className="mt-2 text-[#5C6570] leading-relaxed text-sm">{description}</p>
       </div>
      ))}
     </div>
     <div className="mt-14 border-t border-[#E4EAF2] pt-11">
      <div className="flex flex-wrap items-center gap-3">
       <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.2em]">Design to production</p>
       <div className="inline-flex items-center gap-2" aria-label="Figma design to HTML and CSS implementation">
        <svg width="15" height="23" viewBox="0 0 38 57" aria-hidden="true" focusable="false">
         <path d="M0 9.5C0 4.253 4.253 0 9.5 0H19V19H9.5C4.253 19 0 14.747 0 9.5Z" fill="#F24E1E"/>
         <path d="M19 0H28.5C33.747 0 38 4.253 38 9.5S33.747 19 28.5 19H19V0Z" fill="#FF7262"/>
         <path d="M0 28.5C0 23.253 4.253 19 9.5 19H19V38H9.5C4.253 38 0 33.747 0 28.5Z" fill="#A259FF"/>
         <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
         <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19V47.5C19 52.747 14.747 57 9.5 57S0 52.747 0 47.5Z" fill="#0ACF83"/>
        </svg>
        <span className="text-[#96A2AF] text-base" aria-hidden="true">→</span>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0072FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>
       </div>
      </div>
      <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[#182C39]">From Figma assets to CMS implementation.</h3>
      <p className="mt-4 max-w-4xl text-[#64707C] leading-relaxed">This is the work behind the course: preparing and organizing Figma-based instructional assets, translating approved patterns into CMS components, writing the supporting HTML/CSS, and checking the rendered result against brand and performance requirements.</p>
      <figure className="mt-7">
       <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[20px] border border-[#DCE7F5] bg-[#F7FAFF]">
        <Image src="/portfolio-media/blueprint-cms-figma-to-cms.webp" alt="Design-to-production comparison: Figma instructional artboards and UI assets on one side, CMS HTML markup and rendered Meta Blueprint course page on the other" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
       </div>
       <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[#647487] text-sm">
        <span>Real Figma and CMS screenshots, arranged for presentation; the CMS view is cropped to focus on layout implementation.</span>
        <a href="/portfolio-media/blueprint-cms-figma-to-cms.webp" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] font-semibold hover:underline underline-offset-4">Inspect full-size image ↗</a>
       </figcaption>
      </figure>
     </div>
     <div className="mt-14 border-t border-[#E4EAF2] pt-11">
      <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.2em]">Responsive patterns across courses</p>
      <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[#182C39]">The learning system adapts to mobile.</h3>
      <p className="mt-4 max-w-4xl text-[#64707C] leading-relaxed">A second CMS course—<em>Create better Instagram ads with a test-and-learn strategy</em>—shows how the mobile experience handles course introductions, reusable cards, carousel content, step-by-step lessons, accordions, and end-of-course recaps. These are examples from a different course, not mobile versions of the desktop screens above.</p>
      <figure className="mt-7">
       <div className="relative aspect-[2048/1512] w-full overflow-hidden rounded-[20px] border border-[#DCE7F5] bg-[#F7FAFF]">
        <Image src="/portfolio-media/blueprint-cms-mobile-patterns.webp" alt="Six actual mobile Meta Blueprint course page excerpts featuring a course introduction, learning cards, carousel, steps, accordions, and learning recap" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
       </div>
       <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[#647487] text-sm">
        <span>Selected real mobile learning patterns from a separate CMS course.</span>
        <a href="/portfolio-media/blueprint-cms-mobile-patterns.webp" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] font-semibold hover:underline underline-offset-4">View mobile gallery full size ↗</a>
       </figcaption>
      </figure>
     </div>
    </section>
   )}
   {slug === "meta-blueprint" && (
    <section className="mt-20 md:mt-24" aria-labelledby="lms-course-heading">
     <div className="flex flex-wrap items-center gap-3">
      <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">04 / LMS learning experiences</p>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F3] bg-[#F4F8FE] px-3 py-1 text-xs font-semibold text-[#2F556E]" aria-label="Evolve Authoring">
       <span className="font-black tracking-[-.05em] text-[#0072FC]">evolve</span>
       <span className="text-[#A3B1BF]" aria-hidden="true">·</span>
       Authoring
      </span>
     </div>
     <h2 id="lms-course-heading" className="mt-4 text-3xl md:text-4xl font-black tracking-tight">Learning experiences that connect every lesson.</h2>
     <p className="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-[#1F3444]">Advertising solutions and AI</p>
     <p className="mt-4 max-w-4xl text-[#5C6876] text-base md:text-lg leading-[1.7]">I designed the lesson layouts, reusable components, and instructional assets for this three-part Meta Blueprint course in Evolve. Working with instructional stakeholders, brand, and legal, I translated technical advertising topics into consistent, approachable learning experiences for small and medium-sized businesses.</p>
     <div className="mt-5 flex flex-wrap items-center gap-3">
      <span className="text-sm text-[#647287]">35 min · 3 lessons · Intermediate</span>
      <a href="https://www.facebookblueprint.com/student/path/253144-ai-course" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#0072FC] font-bold hover:underline underline-offset-4">View live course ↗</a>
     </div>
     <figure className="mt-9">
      <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[24px] border border-[#DCE7F5] bg-[#F7FAFF]">
       <Image src="/portfolio-media/blueprint-lms-course-overview.webp" alt="Live Meta Blueprint Advertising solutions and AI course overview, highlighting course banner, title, and lesson list" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
      </div>
      <figcaption className="mt-3 text-sm text-[#657487]">Live course overview — Evolve-authored learning content within the Meta Blueprint LMS experience.</figcaption>
     </figure>
     <figure className="mt-9">
      <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[24px] border border-[#DCE7F5] bg-[#F7FAFF]">
       <Image src="/portfolio-media/blueprint-lms-three-lessons.webp" alt="Selected original lesson screenshots for AI-based advertising solutions, campaign strategies, and machine learning and the ad delivery system" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
      </div>
      <figcaption className="mt-3 text-sm text-[#657487]">Selected desktop lesson screens across the three-part learning path.</figcaption>
     </figure>
     <div className="mt-14">
      <p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">Responsive learning design</p>
      <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[#192F3D]">From visual explanations to applied learning.</h3>
      <p className="mt-3 max-w-4xl text-[#657487] leading-relaxed">Selected mobile examples from the campaign strategies lesson show three complementary approaches: simplifying complex structures through an infographic, comparing audiences visually, and reinforcing concepts with a scenario-based knowledge check.</p>
      <figure className="mt-7">
       <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[24px] border border-[#DCE7F5] bg-[#F7FAFF]">
        <Image src="/portfolio-media/blueprint-lms-mobile-learning.webp" alt="Three actual mobile course excerpts illustrating campaign structure, audience comparison, and scenario-based knowledge checks in Meta Blueprint LMS" fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 85vw, 1200px" className="object-contain" unoptimized/>
       </div>
       <figcaption className="mt-3 text-sm text-[#657487]">Cropped examples from the live mobile lesson, arranged for portfolio presentation.</figcaption>
      </figure>
     </div>
     <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-7">
      {[
       ["Structured lessons","An overview introduces the learning path and organizes three lessons into a clear sequence."],
       ["Reusable interaction patterns","Used diagrams, tabs, expandable sections, and other Evolve components to clarify complex advertising concepts."],
       ["Knowledge checks","Built-in questions let learners reflect on the material before continuing."],
       ["End-of-lesson continuity","Key takeaways and related learning links reinforce understanding and guide the next step."]
      ].map(([title,description],index)=>(
       <div key={title} className="border-t border-[#E2E8F0] pt-5">
        <p className="text-xs font-bold text-[#0072FC]">{String(index+1).padStart(2,"0")}</p>
        <h3 className="mt-2 text-lg font-semibold text-[#1C2936]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5C6570]">{description}</p>
       </div>
      ))}
     </div>
    </section>
   )}
   <section className="mt-20 md:mt-24">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"><div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">{slug === "meta-blueprint" ? "05 / Other Blueprint workstreams" : "03 / Project visuals"}</p><h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">{slug === "meta-blueprint" ? "Beyond a single course." : "Behind the work."}</h2></div><p className="max-w-sm text-[#777] text-sm">{slug === "meta-blueprint" ? "Next: home and landing pages, instructional videos, and the Figma system." : "Original design artifacts will replace these clearly labeled placeholder panels."}</p></div>
    <div className="grid md:grid-cols-2 gap-5 mt-10">{data.visual.map((label,k)=><MediaPlaceholder key={label} label={label} index={k} slug={slug}/>)}</div>
   </section>
   <section className="grid lg:grid-cols-2 gap-10 md:gap-20 mt-20 md:mt-24 border-t border-[#DEDEDE] pt-14">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">{slug === "meta-blueprint" ? "06 / Role and reflection" : "04 / Role and reflection"}</p><h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">The thinking behind it.</h2></div>
    <div><h3 className="text-[#111] text-xl font-bold">My contribution</h3><p className="mt-4 text-[#616161] text-lg leading-relaxed">{data.contribution}</p><h3 className="mt-10 text-[#111] text-xl font-bold">Evidence and outcomes</h3><p className="mt-4 text-[#616161] leading-relaxed">{data.takeaway}</p></div>
   </section>
   <div className="mt-20 md:mt-24 pt-9 border-t border-[#DEDEDE] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
    <Link href="/projects" className="text-[#0072FC] font-semibold text-sm hover:underline">← All projects</Link>
    <Link href={`/projects/${next.id}`} className="group text-left md:text-right"><span className="block text-[#808080] text-xs uppercase tracking-widest">Next project ↗</span><span className="block text-2xl md:text-3xl font-black mt-2 group-hover:text-[#0072FC] transition-colors">{next.title}</span></Link>
   </div>
  </article>
 </main>;
}
