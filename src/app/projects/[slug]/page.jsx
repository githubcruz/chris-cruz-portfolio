import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SafeShareCaseStudy from "@/components/SafeShareCaseStudy";
import BartCaseStudy from "@/components/BartCaseStudy";
import { FALLBACK_PROJECTS } from "@/app/work/content";

// Keep the optional Instagram Figma gallery unpublished until its three image assets are uploaded.
const showInstagramReferenceGallery = false;

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
  eyebrow:"02 / VISUAL DESIGN · DIGITAL LEARNING",heading:"Designing learning experiences at scale.",
  summary:"I designed and built learning experiences across Meta Blueprint—from hundreds of course updates and responsive web pages to instructional visuals and reusable Figma components. A 16-course revamp brought these systems together to make production more consistent.",
  status:"Professional work",role:"Visual design · Figma systems · CMS/LMS production",methods:["CMS/LMS course design","Responsive UI & HTML/CSS","Visual asset production","Reusable Figma components"],
  problem:"Meta Blueprint brings small-business learning to people through an evolving catalog of courses, web experiences, and instructional content. Frequent updates across formats called for a clear, cohesive visual language and efficient production.",
  strategy:"Create a consistent experience from discovery to learning: design course and web interfaces, establish reusable Figma patterns, develop visual assets, and support video and motion production across digital touchpoints.",
  contribution:"I contributed across hundreds of Meta Blueprint course updates and Evolve LMS experiences—designing responsive layouts, educational product-UI examples, infographics, and reusable Figma assets. For CMS courses, I also built and adapted front-end HTML/CSS, optimized imagery for different screen sizes and load times, and partnered with instructional designers, brand, legal, and other stakeholders through review and publication. My broader work also included Blueprint home and landing pages and instructional video assets.",
  process:[["Course experiences","Update course visuals, learning layouts, and the digital assets needed across a large catalog."],["Web experiences","Design and refine Blueprint home and landing pages that help learners discover relevant content."],["Motion and storytelling","Produce instructional videos and visual storytelling elements across learning touchpoints."],["Design at scale","Systemize recurring UI and visual patterns in Figma to speed iteration and improve brand consistency."]],
  visual:["Blueprint home and landing pages","Instructional video and motion frames","Reusable Figma systems and 16-course revamp"],
  takeaway:"Reusable Figma components, responsive specifications, and approved visual patterns made it easier to produce consistent content across platforms and reduce brand-review friction. In the 16-course e-learning revamp, this approach was reported to save several days of production time per course and helped make publishing faster with fewer revisions. The figures describe project production experience, not an independently measured sitewide engagement lift."
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
export async function generateMetadata({params}) {
 const {slug} = await params;
 const project = FALLBACK_PROJECTS.find(p=>p.id===slug);
 if (!project) return { title: "Project" };
 const images = {
  "meta-blueprint": "/portfolio-media/meta-blueprint-featured.webp",
  "meta-image-privacy": "/portfolio-media/safeshare-hero-final.webp",
  "bart-fare-gates": "/portfolio-media/bart-final-recreated.webp",
 };
 const title = project.title + " — Chris Cruz";
 return {
  title: project.title,
  description: project.description,
  alternates: { canonical: `/projects/${slug}` },
  openGraph: {
   title, url: `/projects/${slug}`, description: project.description,
   images: [{ url: images[slug], width: 2048, height: 1152, alt: project.title + " case study cover" }],
  },
  twitter: { card: "summary_large_image", title, description: project.description, images: [images[slug]] },
 };
}

function MediaPlaceholder({label,index,slug}) {
 return <div className="group relative overflow-hidden rounded-[20px] bg-[#EFF4FC] border border-[#DDE7F4] aspect-[16/10] flex items-center justify-center">
  <div aria-hidden="true" className="absolute right-[-10%] top-[-24%] w-[70%] aspect-square rounded-full border-[35px] border-[#0072FC]/10 transition-transform duration-500 group-hover:scale-110"/>
  <div aria-hidden="true" className="absolute left-[12%] bottom-[17%] w-[30%] h-[28%] rounded-2xl border border-[#0072FC]/20 rotate-[-12deg] bg-white/50"/>
  <div className="relative flex flex-col items-center gap-3 px-5 text-center">
   <span className="text-[#0072FC] font-bold text-3xl md:text-5xl tabular-nums opacity-60">{String(index+1).padStart(2,"0")}</span>
   <span className="text-[#26364C] font-semibold text-sm md:text-base">{label}</span>
   <span className="text-[#64758A] uppercase tracking-widest text-[10px]">Original project visual to be added</span>
  </div>
 </div>;
}
export default async function ProjectPage({params}){
 const {slug}=await params;
 if (slug === "bart-fare-gates") return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><BartCaseStudy/><Footer/></main>;
 if (slug === "meta-image-privacy") return <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]"><Cursor light/><Navbar/><SafeShareCaseStudy/><Footer/></main>;
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
    <h1 className="portfolio-page-title mt-5 max-w-5xl font-bold">{slug === "meta-blueprint" ? <>Meta <span className="text-[#0072FC]">Blueprint.</span></> : <>{project.title}<span className="text-[#0072FC]">.</span></>}</h1>
    <p className="portfolio-page-lead mt-6 max-w-4xl font-medium text-[#26313D]">{data.heading}</p>
    <p className={slug === "meta-blueprint" ? "mt-4 text-[#636363] leading-[1.65] text-base md:text-lg max-w-3xl" : "mt-6 text-[#636363] leading-relaxed text-lg max-w-3xl"}>{data.summary}</p>
   </header>
   <div className="mt-14 border-y border-[#DEDEDE] py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {[["Project type",data.status],["My focus",data.role],["Methods",data.methods.slice(0,2).join(" · ")],["Stage",slug==="meta-blueprint"?"Published learning experiences":"Concept project"]].map(([label,value])=><div key={label}><p className="text-[#0072FC] text-[10px] tracking-widest font-bold uppercase mb-2">{label}</p><p className="text-[#2B2B2B] leading-relaxed text-sm">{value}</p></div>)}
   </div>
   {slug === "meta-blueprint" && (
    <nav aria-label="Meta Blueprint case study sections" className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[#E5EBF3] pb-5 text-sm">
     <span className="text-xs font-bold uppercase tracking-[.16em] text-[#7A8898]">Explore the work</span>
     {[
      ["CMS course","#cms-course-heading"],
      ["LMS learning","#lms-course-heading"],
      ["Web experiences","#blueprint-web-experiences"],
      ["Design guidelines","#blueprint-design-guidelines"],
      ["My contributions","#blueprint-contributions"]
     ].map(([label,href])=>(
      <a key={href} href={href} className="font-semibold text-[#0072FC] underline-offset-4 hover:underline focus-visible:underline">{label} ↗</a>
     ))}
    </nav>
   )}
   {slug === "meta-blueprint" && (
    <section aria-label="Meta Blueprint project highlights" className="mt-10 md:mt-12">
     <h2 className="portfolio-eyebrow mb-4 text-[#0072FC]">Project at a glance</h2>
     <div className="grid gap-3 sm:grid-cols-3">
      {[
       {metric:"16 courses",title:"E-learning revamp",note:"Led visual design and built reusable Figma components to support consistent course production."},
       {metric:"Design system",title:"Reusable Figma components",note:"Shared layouts, visuals, and patterns helped align instructional design and brand reviews."},
       {metric:"Days saved",title:"Faster publishing",note:"Project-reported savings of several days per course, with fewer brand-review hiccups."}
      ].map(item=>(
       <div key={item.title} className="rounded-[18px] border border-[#DDE6F0] bg-[#F6F9FE] p-5 md:p-6">
        <p className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-bold tracking-[-.04em] text-[#172A3E]">{item.metric}</p>
        <h3 className="mt-2 text-sm font-bold text-[#263F55]">{item.title}</h3>
        <p className="mt-3 text-xs leading-[1.7] text-[#607384]">{item.note}</p>
       </div>
      ))}
     </div>
     <p className="mt-3 text-xs leading-relaxed text-[#778697]">Time savings are project-reported production experience, not an independently measured business outcome.</p>
    </section>
   )}
   {slug === "meta-blueprint" ? (
    <figure className="mt-11 md:mt-14">
     <div className="relative w-full aspect-video overflow-hidden rounded-[28px] border border-[#E9EEF6] bg-white">
      <Image src="/portfolio-media/blueprint-cms-course-spotlight.webp" alt="Featured Meta Blueprint course layout and visual learning design shown on mobile" fill sizes="(max-width: 639px) 94vw, 1px" className="object-contain sm:hidden" unoptimized priority/>
      <Image src="/portfolio-media/meta-blueprint-gallery.webp" alt="A broad 21-design overview of Meta Blueprint learning experiences and visual design work" fill sizes="(min-width: 640px) 85vw, 1px" className="hidden object-contain sm:block" unoptimized priority/>
     </div>
     <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[#707070] text-xs">
      <span><span className="sm:hidden">Featured Blueprint CMS course design. </span><span className="hidden sm:inline">Blueprint visual overview: selected course and business-learning design work.</span></span>
      <a href="/portfolio-media/meta-blueprint-gallery.webp" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] font-semibold hover:underline underline-offset-4">Explore the full design gallery ↗</a>
     </figcaption>
    </figure>
   ) : (
   <div className="mt-16 md:mt-24 rounded-[28px] bg-[#0072FC] relative min-h-[270px] md:min-h-[365px] overflow-hidden p-8 md:p-16 flex flex-col justify-end">
    <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{background:"radial-gradient(circle at 74% 30%, rgba(255,255,255,.28),transparent 45%)"}}/>
    <div aria-hidden="true" className="absolute w-[70%] aspect-square rounded-full border-[35px] md:border-[65px] border-white/10 -right-[20%] -top-[35%]"/>
    <p className="relative text-white/70 uppercase tracking-[.25em] text-xs mb-5">Case study / {project.num}</p>
    <h2 className="relative text-white font-bold leading-[1] tracking-[-.05em] text-[clamp(2.1rem,4.8vw,4.9rem)] max-w-[920px]">{data.heading}</h2>
    <p className="relative text-white/70 text-xs mt-8">Graphic title treatment · Not a project screenshot</p>
   </div>
   )}
   <section className="grid lg:grid-cols-[.75fr_1.25fr] gap-7 lg:gap-20 mt-20 md:mt-24">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">01 / Context</p><h2 className="portfolio-section-heading mt-4 font-bold">The challenge.</h2></div>
    <div className="text-lg md:text-xl text-[#535353] leading-[1.7]"><p>{data.problem}</p><p className="mt-7">{data.strategy}</p></div>
   </section>
   <section className="mt-20 md:mt-24">
    <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">02 / Design process</p>
    <h2 className="portfolio-section-heading mt-4 font-bold">From question to direction.</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{data.process.map(([heading,body],k)=><div key={heading} className="border border-[#DEDEDE] rounded-2xl p-7 min-h-[245px] transition-colors hover:border-[#0072FC]/50"><p className="text-[#0072FC] text-xs font-bold">{String(k+1).padStart(2,"0")}</p><h3 className="text-[#171717] font-bold text-xl mt-9">{heading}</h3><p className="text-[#676767] leading-relaxed text-sm mt-3">{body}</p></div>)}</div>
   </section>
   {slug === "meta-blueprint" && (
    <section className="mt-20 md:mt-24" aria-labelledby="cms-course-heading">
     <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">03 / CMS course spotlight</p>
     <h2 id="cms-course-heading" className="portfolio-section-heading scroll-mt-32 mt-4 font-bold">Designing a complete CMS course.</h2>
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
       <span className="font-bold tracking-[-.05em] text-[#0072FC]">evolve</span>
       <span className="text-[#A3B1BF]" aria-hidden="true">·</span>
       Authoring
      </span>
     </div>
     <h2 id="lms-course-heading" className="portfolio-section-heading scroll-mt-32 mt-4 font-bold">Learning experiences that connect every lesson.</h2>
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
     <div className="mt-14" id="blueprint-lms-figma-explorations">
      <p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">Figma explorations · Design process</p>
      <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[#192F3D]">From exploration to the final learning experience.</h3>
      <p className="mt-3 max-w-4xl text-[#657487] leading-relaxed">I explored multiple approaches to complex advertising concepts, refining diagrams, instructional graphics, and visual hierarchy in Figma before they became part of the published Evolve lessons. The examples below show early iterations alongside the learner-facing designs.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
       {[
        ["/portfolio-media/blueprint-lms-figma-campaign-structure.webp","01 · Campaign hierarchy","Organizing campaign, ad set, and ad-level decisions into a clearer instructional diagram.","Figma exploration and final LMS campaign structure infographic"],
        ["/portfolio-media/blueprint-lms-figma-funnel-variations.webp","02 · Funnel iterations","Testing hierarchy, contrast, and visual treatments to explain campaign objectives.","Multiple marketing funnel iterations and their selected LMS design"],
        ["/portfolio-media/blueprint-lms-figma-audience.webp","03 · Audience comparison","Clarifying manual and Advantage+ audiences with a side-by-side comparison.","Figma iterations and the published Advantage+ audience infographic"],
        ["/portfolio-media/blueprint-lms-figma-placements.webp","04 · Placement illustration","Simplifying an illustrative cost-per-result comparison for a learning module.","Figma iterations and a published placement comparison graphic"]
       ].map(([file,title,description,alt])=>(
        <figure key={file} className="min-w-0">
         <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[20px] border border-[#E3EAF2] bg-white">
          <Image src={file} alt={alt} fill sizes="(max-width: 768px) 94vw, (max-width: 1400px) 42vw, 600px" className="object-contain" unoptimized/>
         </div>
         <figcaption className="mt-4">
          <span className="text-[#1F3444] font-semibold">{title}</span>
          <span className="block mt-1 text-sm leading-relaxed text-[#657487]">{description}</span>
         </figcaption>
        </figure>
       ))}
      </div>
      <details className="mt-9 rounded-[20px] border border-[#E3EAF2] bg-[#F9FBFE]">
       <summary className="cursor-pointer p-5 md:p-6 font-semibold text-[#1F3444] hover:text-[#0072FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0072FC] rounded-[20px]">Explore the larger Figma working boards <span className="ml-2 text-[#0072FC]" aria-hidden="true">+</span></summary>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 pb-5 md:px-6 md:pb-6">
        {[
         ["/portfolio-media/blueprint-lms-figma-explorations-lesson-1.webp","AI-based advertising concepts and graphic variations","Figma visual explorations for AI instructional diagrams and personalized advertising assets"],
         ["/portfolio-media/blueprint-lms-figma-explorations-lesson-2.webp","Campaign strategy diagrams and interaction assets","Figma working board for campaign strategy illustrations, UI examples, and lesson assets"]
        ].map(([file,caption,alt])=>(
         <figure key={file}>
          <div className="relative aspect-[8/5] w-full overflow-hidden rounded-xl border border-[#E3EAF2] bg-white">
           <Image src={file} alt={alt} fill sizes="(max-width: 768px) 88vw, 42vw" className="object-contain" unoptimized/>
          </div>
          <figcaption className="mt-2 text-xs text-[#657487]">{caption}</figcaption>
         </figure>
        ))}
       </div>
      </details>
     </div>
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
   {slug === "meta-blueprint" ? (
    <section className="scroll-mt-32 mt-20 md:mt-24" id="blueprint-web-experiences" aria-labelledby="blueprint-web-heading">
     <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">05 / Homepage, webinars &amp; certifications</p>
     <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
      <div>
       <h2 id="blueprint-web-heading" className="portfolio-section-heading font-bold text-[#141A22]">One learning ecosystem. More than courses.</h2>
       <p className="mt-5 max-w-4xl text-[#5C6876] text-base md:text-lg leading-[1.75]">The Blueprint experience starts long before someone opens a lesson. My web design work extended to the homepage, webinar discovery, and certification experiences—organizing different learning paths through consistent visual systems, page layouts, and assets.</p>
      </div>
     </div>
     <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {[
       {src:"/portfolio-media/blueprint-web-home.webp",label:"01 · Course discovery",title:"Meta Blueprint home",description:"A central hub for returning learners, recommended courses, personalized content, and new topics.",alt:"Full-length screenshot of the Meta Blueprint homepage, including personalized learning cards, recommended courses and certifications."},
       {src:"/portfolio-media/blueprint-web-webinars.webp",label:"02 · Live training",title:"Webinars & workshops",description:"An entry point for upcoming sessions, topic-based browsing, previously recorded webinars, and additional resources.",alt:"Full-length screenshot of the Meta Blueprint webinars landing page, showing the hero, upcoming live sessions and topic categories."},
       {src:"/portfolio-media/blueprint-web-certifications.webp",label:"03 · Credentials",title:"Certification hub",description:"A structured page for exploring role-based certifications, skill credentials, and specialist badges.",alt:"Full-length screenshot of the Meta Blueprint certification hub, including category introductions and credential badges."}
      ].map(item=>(
       <figure key={item.src} className="group overflow-hidden rounded-[22px] border border-[#E5EAF1] bg-white shadow-[0_10px_28px_rgba(18,39,70,0.045)]">
        <div className="flex items-center gap-3 border-b border-[#E8EDF3] bg-[#F7F9FC] px-4 py-3" aria-hidden="true">
         <span className="flex gap-1.5"><span className="size-2 rounded-full bg-[#CAD4E2]"/><span className="size-2 rounded-full bg-[#CAD4E2]"/><span className="size-2 rounded-full bg-[#CAD4E2]"/></span>
         <span className="truncate text-[11px] font-medium tracking-wide text-[#758293]">Meta Blueprint / {item.title}</span>
        </div>
        <div className="relative h-[420px] sm:h-[490px] lg:h-[510px] overflow-hidden bg-white">
         <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1023px) 92vw, 31vw" className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]" unoptimized/>
        </div>
        <figcaption className="border-t border-[#E8EDF3] px-5 py-6">
         <p className="text-[#0072FC] text-[11px] font-bold uppercase tracking-[.16em]">{item.label}</p>
         <h3 className="mt-2 text-xl font-bold tracking-tight text-[#172632]">{item.title}</h3>
         <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-[#687482]">{item.description}</p>
         <a href={item.src} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">View full page capture ↗</a>
        </figcaption>
       </figure>
      ))}
     </div>
     <p className="mt-4 text-xs leading-relaxed text-[#7E8895]">Published-page screenshots shown for context. Work developed in collaboration with Meta Blueprint's design, content, and cross-functional teams.</p>
     <div className="mt-14 grid gap-8 md:grid-cols-2 border-t border-[#E1E6ED] pt-8">
      <div>
       <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.18em]">Motion &amp; instructional media</p>
       <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-[#172632]">Making complex ideas easier to follow.</h3>
       <p className="mt-3 text-[#63707C] leading-relaxed">I also worked on instructional video, motion graphics, and visual storytelling for learning content, translating product information into clear, easy-to-follow demonstrations.</p>
      </div>
      <div>
       <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.18em]">Scalable visual production</p>
       <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-[#172632]">Keeping a large content library consistent.</h3>
       <p className="mt-3 text-[#63707C] leading-relaxed">Reusable Figma components, familiar Meta patterns, and production-ready assets helped keep design decisions consistent across course pages, landing pages, and other formats while working through brand and stakeholder reviews.</p>
      </div>
     </div>
    </section>
   ) : (
    <section className="mt-20 md:mt-24">
     <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"><div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">{slug === "meta-blueprint" ? "05 / Other Blueprint workstreams" : "03 / Project visuals"}</p><h2 className="portfolio-section-heading mt-4 font-bold">{slug === "meta-blueprint" ? "Beyond a single course." : "Behind the work."}</h2></div><p className="max-w-sm text-[#777] text-sm">{slug === "meta-blueprint" ? "Next: home and landing pages, instructional videos, and the Figma system." : "Original design artifacts will replace these clearly labeled placeholder panels."}</p></div>
     <div className="grid md:grid-cols-2 gap-5 mt-10">{data.visual.map((label,k)=><MediaPlaceholder key={label} label={label} index={k} slug={slug}/>)}</div>
    </section>
   )}
   {slug === "meta-blueprint" && (
    <section id="blueprint-design-guidelines" className="scroll-mt-32 mt-20 md:mt-24" aria-labelledby="blueprint-guidelines-heading">
     <div className="max-w-4xl">
      <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">06 / Design guidelines &amp; production systems</p>
      <h2 id="blueprint-guidelines-heading" className="portfolio-section-heading mt-4 font-bold text-[#141A22]">Designing once. Creating consistently.</h2>
      <p className="mt-5 text-base md:text-lg leading-[1.75] text-[#5C6876]">Behind the published learning experiences is a practical system of brand references, layout grids, responsive UI patterns, and export specifications. I used these guidelines alongside Meta's component library to make design decisions easier to reproduce across CMS pages, interactive lessons, and visual assets.</p>
     </div>
     <figure className="mt-10 overflow-hidden rounded-[22px] border border-[#E3E9F0] bg-[#F7F9FC]">
      <a href="/portfolio-media/blueprint-design-ui-kit.webp" target="_blank" rel="noopener noreferrer" aria-label="View full UI asset exploration">
       <Image src="/portfolio-media/blueprint-design-ui-kit.webp" width={1550} height={1471} alt="Figma exploration board showcasing Meta social product UI elements, icons, social cards, messaging components, and visual compositions used as reference patterns." sizes="(max-width: 767px) 92vw, 85vw" className="w-full h-auto object-contain" unoptimized/>
      </a>
      <figcaption className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 md:px-7 py-5 border-t border-[#E2E8F0] bg-white">
       <div><p className="text-[#0072FC] text-xs font-bold tracking-[.16em] uppercase">Visual language</p><h3 className="mt-1 text-lg font-bold text-[#1B2835]">A shared library of UI and visual patterns</h3></div>
       <a href="/portfolio-media/blueprint-design-ui-kit.webp" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">View full image ↗</a>
      </figcaption>
     </figure>
     <div className="mt-5 grid sm:grid-cols-2 gap-5">
      {[
       {src:"/portfolio-media/blueprint-design-asset-library.webp",width:1600,height:892,label:"01 / Brand reference",title:"Brand-safe visual examples",description:"Reference imagery and example brands provided a consistent visual starting point across different small-business learning scenarios.",alt:"Figma asset-guidelines board with example small business brand imagery arranged in a multi-row grid."},
       {src:"/portfolio-media/blueprint-design-layout-grid.webp",width:711,height:2047,label:"02 / Responsive framework",title:"Grids, breakpoints & spacing",description:"Desktop, tablet, and mobile layout guidance helped align modules across screen sizes and CMS templates.",alt:"Blueprint design-system specification showing desktop and mobile 12-column and 6-column grids, breakpoints, and spacing guidelines."},
       {src:"/portfolio-media/blueprint-design-component-modules.webp",width:940,height:1408,label:"03 / Reusable modules",title:"Carousel & mobile UI patterns",description:"Product-platform carousel examples document how interface modules adapt to different devices and content formats.",alt:"Product platform carousel design guidance showing a Facebook Stories module and iOS and Android reference layouts."},
       {src:"/portfolio-media/blueprint-design-media-specs.webp",width:840,height:1451,label:"04 / Production handoff",title:"Media formats & export dimensions",description:"A documented set of ratios, sizes, and responsive variants supported predictable asset handoff and page performance.",alt:"Meta media asset guideline board documenting visual dimensions, aspect ratios, and example image crops for CMS."}
      ].map(item=>(
       <figure key={item.src} className="group overflow-hidden rounded-[20px] border border-[#E3E9F0] bg-white">
        <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`View full image for ${item.title}`} className="block bg-[#F5F7FA]">
         <div className="relative h-[260px] sm:h-[310px] lg:h-[340px] overflow-hidden">
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 639px) 92vw, (max-width: 1023px) 48vw, 42vw" className="object-contain object-center p-3 transition-transform duration-500 motion-safe:group-hover:scale-[1.035]" unoptimized/>
         </div>
        </a>
        <figcaption className="p-5 md:p-6 border-t border-[#EBEFF4]">
         <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.15em]">{item.label}</p>
         <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1B2835]">{item.title}</h3>
         <p className="mt-2 text-[#66727D] text-sm leading-relaxed">{item.description}</p>
         <a href={item.src} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[#0072FC] text-sm font-semibold hover:underline underline-offset-4">View design artifact ↗</a>
        </figcaption>
       </figure>
      ))}
     </div>
     {showInstagramReferenceGallery && (
     <details id="blueprint-instagram-figma-gallery" className="mt-9 rounded-[22px] border border-[#DDE7F3] bg-[#F8FAFE]">
      <summary className="cursor-pointer rounded-[22px] p-5 md:p-7 text-[#213243] hover:text-[#0072FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0072FC]">
       <span className="block text-[#0072FC] text-xs font-bold uppercase tracking-[.2em]">Instagram interface explorations · Figma</span>
       <span className="block mt-2 text-xl md:text-2xl font-bold tracking-tight">Inside the UI reference and component library <span aria-hidden="true" className="ml-2 text-[#0072FC]">+</span></span>
       <span className="block mt-2 max-w-3xl text-sm md:text-base leading-relaxed text-[#687583] font-normal">Explore additional design boards covering Instagram insights, home/feed interface patterns, and content-creation flows used to illustrate the product in educational experiences.</span>
      </summary>
      <div className="grid gap-5 px-4 pb-5 md:px-7 md:pb-7 lg:grid-cols-2">
       {[
        {src:"/portfolio-media/blueprint-instagram-insights.webp",label:"01 / Insights & analytics",title:"Mapping product metrics and navigation",alt:"Dark Figma working board mapping Instagram post, story, Reels, insights and professional dashboard screens.",wide:true},
        {src:"/portfolio-media/blueprint-instagram-ui-components.webp",label:"02 / Interface patterns",title:"Feed, stories, comments & UI elements",alt:"Figma board of Instagram feed variations, story tray, content overlays, comment sheet and action button components.",wide:false},
        {src:"/portfolio-media/blueprint-instagram-reels.webp",label:"03 / Creation workflows",title:"Reels camera, templates & effects",alt:"Figma storyboard with reference screens for Instagram Reels capture, camera, templates, sound and effects.",wide:false}
       ].map(item=>(
        <figure key={item.src} className={`overflow-hidden rounded-[18px] border border-[#E0E7F0] bg-white ${item.wide?"lg:col-span-2":""}`}>
         <a className="block bg-[#F2F5F9] relative h-[220px] md:h-[300px] lg:h-[320px]" href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`View full Figma board: ${item.title}`}>
          <Image src={item.src} alt={item.alt} fill sizes={item.wide?"(max-width: 767px) 88vw, 85vw":"(max-width: 767px) 88vw, 43vw"} className="object-contain" unoptimized/>
         </a>
         <figcaption className="p-4 md:p-5">
          <p className="text-[#0072FC] text-xs uppercase tracking-[.14em] font-bold">{item.label}</p>
          <h4 className="mt-1 text-lg font-semibold tracking-tight text-[#1D2D3C]">{item.title}</h4>
          <a href={item.src} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">Open working board ↗</a>
         </figcaption>
        </figure>
       ))}
      </div>
      <p className="px-5 pb-5 md:px-7 md:pb-7 text-xs leading-relaxed text-[#7B8794]">Figma references prepared for Meta Blueprint training content; not presented as independently shipped Instagram product features.</p>
     </details>
     )}
     <p className="mt-5 text-sm text-[#7A8591] leading-relaxed">Selected design references and production artifacts from the broader Meta Blueprint workflow. Platform and brand assets are shown to provide professional project context.</p>
    </section>
   )}
   <section id="blueprint-contributions" className="scroll-mt-32 grid lg:grid-cols-2 gap-10 md:gap-20 mt-20 md:mt-24 border-t border-[#DEDEDE] pt-14">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">{slug === "meta-blueprint" ? "07 / Role and reflection" : "04 / Role and reflection"}</p><h2 className="portfolio-section-heading mt-4 font-bold">The thinking behind it.</h2></div>
    <div><h3 className="text-[#111] text-xl font-bold">My contribution</h3><p className="mt-4 text-[#616161] text-lg leading-relaxed">{data.contribution}</p><h3 className="mt-10 text-[#111] text-xl font-bold">Evidence and outcomes</h3><p className="mt-4 text-[#616161] leading-relaxed">{data.takeaway}</p></div>
   </section>
   <div className="mt-20 md:mt-24 pt-9 border-t border-[#DEDEDE] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
    <Link href="/projects" className="text-[#0072FC] font-semibold text-sm hover:underline">← All projects</Link>
    <Link href={`/projects/${next.id}`} className="group text-left md:text-right"><span className="block text-[#808080] text-xs uppercase tracking-widest">Next project ↗</span><span className="block text-2xl md:text-3xl font-bold mt-2 group-hover:text-[#0072FC] transition-colors">{next.title}</span></Link>
   </div>
  </article>
  <Footer/>
 </main>;
}
