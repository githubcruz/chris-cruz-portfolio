import { notFound } from "next/navigation";
import Link from "next/link";
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
  eyebrow:"02 / DESIGN SYSTEMS",heading:"Making learning experiences work at scale.",
  summary:"Visual systems and digital learning experiences for Meta Blueprint, with reusable Figma components to support more consistent production.",
  status:"Professional work",role:"Visual design · Creative direction · Systems",methods:["Figma components","Digital learning","Visual direction","Motion and assets"],
  problem:"Producing learning experiences across courses and touchpoints requires a consistent visual language without slowing down the people creating them.",
  strategy:"Develop reusable visual patterns and assets, collaborate across disciplines, and translate complex product topics into clear learning experiences.",
  contribution:"Creative direction and hands-on production of course visuals, UI assets, multimedia content, and reusable Figma components.",
  process:[["Audit","Identify recurring assets, patterns, and opportunities to reduce repetitive design work."],["Systemize","Build reusable components and visual conventions that support consistent execution."],["Produce","Create course assets and learning experiences across digital formats."],["Refine","Collaborate with stakeholders on usability, brand alignment, and production improvements."]],
  visual:["Course experience overview","Reusable Figma components","Production workflow examples","Final assets and interaction details"],
  takeaway:"A 16-course e-learning revamp was highlighted by the recruiter. Specific before/after images and production impact will be added with supporting materials; no unverified improvement figures are stated here."
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
  <article className="mx-auto max-w-[1500px] px-7 md:px-20 pt-36 md:pt-44 pb-24">
   <Link href="/projects" className="inline-flex text-[#0072FC] text-xs font-semibold uppercase tracking-[.22em] hover:underline underline-offset-4">← All projects</Link>
   <header className="mt-14 max-w-6xl">
    <p className="uppercase text-[#0072FC] text-xs tracking-[.3em] font-bold">{data.eyebrow}</p>
    <h1 className="font-black tracking-[-.065em] leading-[.97] text-[clamp(3.3rem,8.2vw,8.5rem)] mt-5 max-w-5xl">{project.title}<span className="text-[#0072FC]">.</span></h1>
    <p className="mt-8 text-[#262626] font-medium leading-tight text-[clamp(1.5rem,3.2vw,2.9rem)] max-w-4xl">{data.heading}</p>
    <p className="mt-6 text-[#636363] leading-relaxed text-lg max-w-3xl">{data.summary}</p>
   </header>
   <div className="mt-14 border-y border-[#DEDEDE] py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {[["Project type",data.status],["My focus",data.role],["Methods",data.methods.slice(0,2).join(" · ")],["Stage","Case study in progress"]].map(([label,value])=><div key={label}><p className="text-[#0072FC] text-[10px] tracking-widest font-bold uppercase mb-2">{label}</p><p className="text-[#2B2B2B] leading-relaxed text-sm">{value}</p></div>)}
   </div>
   <div className="mt-16 md:mt-24 rounded-[28px] bg-[#0072FC] relative min-h-[300px] md:min-h-[440px] overflow-hidden p-8 md:p-16 flex flex-col justify-end">
    <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{background:"radial-gradient(circle at 74% 30%, rgba(255,255,255,.28),transparent 45%)"}}/>
    <div aria-hidden="true" className="absolute w-[70%] aspect-square rounded-full border-[35px] md:border-[65px] border-white/10 -right-[20%] -top-[35%]"/>
    <p className="relative text-white/70 uppercase tracking-[.25em] text-xs mb-5">Case study / {project.num}</p>
    <h2 className="relative text-white font-black leading-[1] tracking-[-.05em] text-[clamp(2.3rem,5.5vw,6rem)] max-w-[920px]">{data.heading}</h2>
    <p className="relative text-white/70 text-xs mt-8">Graphic title treatment · Not a project screenshot</p>
   </div>
   <section className="grid lg:grid-cols-[.75fr_1.25fr] gap-7 lg:gap-20 mt-24 md:mt-32">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">01 / Context</p><h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">The challenge.</h2></div>
    <div className="text-lg md:text-xl text-[#535353] leading-[1.7]"><p>{data.problem}</p><p className="mt-7">{data.strategy}</p></div>
   </section>
   <section className="mt-24 md:mt-32">
    <p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">02 / Design process</p>
    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">From question to direction.</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{data.process.map(([heading,body],k)=><div key={heading} className="border border-[#DEDEDE] rounded-2xl p-7 min-h-[245px] transition-colors hover:border-[#0072FC]/50"><p className="text-[#0072FC] text-xs font-bold">{String(k+1).padStart(2,"0")}</p><h3 className="text-[#171717] font-bold text-xl mt-9">{heading}</h3><p className="text-[#676767] leading-relaxed text-sm mt-3">{body}</p></div>)}</div>
   </section>
   <section className="mt-24 md:mt-32">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"><div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">03 / Project visuals</p><h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">Behind the work.</h2></div><p className="max-w-sm text-[#777] text-sm">Original design artifacts will replace these clearly labeled placeholder panels.</p></div>
    <div className="grid md:grid-cols-2 gap-5 mt-10">{data.visual.map((label,k)=><MediaPlaceholder key={label} label={label} index={k} slug={slug}/>)}</div>
   </section>
   <section className="grid lg:grid-cols-2 gap-10 md:gap-20 mt-24 md:mt-32 border-t border-[#DEDEDE] pt-14">
    <div><p className="text-[#0072FC] uppercase tracking-[.25em] text-xs font-bold">04 / Role and reflection</p><h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">The thinking behind it.</h2></div>
    <div><h3 className="text-[#111] text-xl font-bold">My contribution</h3><p className="mt-4 text-[#616161] text-lg leading-relaxed">{data.contribution}</p><h3 className="mt-10 text-[#111] text-xl font-bold">Evidence and outcomes</h3><p className="mt-4 text-[#616161] leading-relaxed">{data.takeaway}</p></div>
   </section>
   <div className="mt-24 md:mt-32 pt-9 border-t border-[#DEDEDE] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
    <Link href="/projects" className="text-[#0072FC] font-semibold text-sm hover:underline">← All projects</Link>
    <Link href={`/projects/${next.id}`} className="group text-left md:text-right"><span className="block text-[#808080] text-xs uppercase tracking-widest">Next project ↗</span><span className="block text-2xl md:text-3xl font-black mt-2 group-hover:text-[#0072FC] transition-colors">{next.title}</span></Link>
   </div>
  </article>
 </main>;
}
