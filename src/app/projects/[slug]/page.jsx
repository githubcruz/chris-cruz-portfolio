import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FALLBACK_PROJECTS } from "@/app/work/content";
const details={
  "meta-image-privacy":{challenge:"Explore how people might better understand and control image privacy across social products.",approach:"Competitive analysis, identifying user needs, exploring interaction patterns, and prototyping an image-privacy concept spanning Facebook, Instagram, and WhatsApp.",contribution:"Product concept exploration, interface design, and prototyping.",next:"Add original design explorations, wireframes, and prototype screens. Concept work should not be presented as shipped."},
  "meta-blueprint":{challenge:"Create consistent, approachable learning experiences at scale for businesses using Meta products.",approach:"Visual design and web/mobile learning assets, motion graphics, and reusable Figma components developed with cross-functional stakeholders.",contribution:"Creative design, component-system work, multimedia assets, and production support for the Meta Blueprint course experience.",next:"Add approved screenshots, course visuals, component examples, and documented before/after workflows to demonstrate the scale of the work."},
  "bart-fare-gates":{challenge:"Understand usability pain points and passenger behavior around transit fare gate interactions.",approach:"User research and usability testing to understand passenger errors and inform fare gate improvements.",contribution:"Human-centered research, observation, and design recommendations.",next:"Add your research artifacts, design alternatives, testing insights, and evidence for reported outcomes."},
  "visual-motion":{challenge:"Communicate product and brand ideas through compelling digital visual storytelling.",approach:"Motion graphics, branded assets, digital video, and design explorations made with creative production tools.",contribution:"Visual execution, motion design, and content creation.",next:"Add selected approved reel clips, animations, and design frames."}
};
export function generateStaticParams(){return FALLBACK_PROJECTS.map(x=>({slug:x.id}));}
export async function generateMetadata({params}){const {slug}=await params;const p=FALLBACK_PROJECTS.find(x=>x.id===slug);return {title:p?p.title:"Project",description:p?.description};}
export default async function ProjectPage({params}){
 const {slug}=await params;const project=FALLBACK_PROJECTS.find(x=>x.id===slug);if(!project)notFound();const data=details[slug];
 return <main className="portfolio-light min-h-screen bg-white text-[#171717]">
  <Navbar/><article className="mx-auto max-w-6xl px-7 md:px-20 pt-40 pb-28">
   <Link href="/projects" className="text-[#0072FC] uppercase tracking-widest font-semibold text-xs">← All projects</Link>
   <p className="mt-16 text-[#0072FC] text-xs tracking-[.24em] uppercase font-bold">{project.category}</p>
   <h1 className="mt-5 font-black tracking-[-.06em] text-[clamp(3rem,8vw,7rem)] leading-[1.02]">{project.title}</h1>
   <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-[#555]">{project.description}</p>
   <div className="mt-14 border-y border-[#dedede] py-5 text-sm text-[#777]">Project overview · Supporting visuals and detailed process documentation being prepared</div>
   <div className="grid md:grid-cols-2 gap-12 mt-16">
    <section><h2 className="font-bold text-2xl mb-5">The challenge</h2><p className="text-[#595959] leading-relaxed">{data.challenge}</p></section>
    <section><h2 className="font-bold text-2xl mb-5">Approach</h2><p className="text-[#595959] leading-relaxed">{data.approach}</p></section>
    <section><h2 className="font-bold text-2xl mb-5">My contribution</h2><p className="text-[#595959] leading-relaxed">{data.contribution}</p></section>
    <section><h2 className="font-bold text-2xl mb-5">Case study development</h2><p className="text-[#595959] leading-relaxed">{data.next}</p></section>
   </div>
   <div className="mt-20"><Link href="/projects" className="text-[#0072FC] font-bold">Explore more work →</Link></div>
  </article>
 </main>;
}
