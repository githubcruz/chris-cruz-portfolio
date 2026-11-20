import Link from "next/link";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experience = [
 {
  name: "Meta",
  role: "Creative Designer",
  dates: "March 2020 – Present",
  location: "Menlo Park, California",
  bullets: [
   "Led visual design for a 16-course Meta Blueprint learning revamp, building reusable Figma components and responsive patterns.",
   "Created and implemented web and mobile learning layouts, instructional UI assets, and CMS components using Figma and HTML/CSS.",
   "Developed and maintained shared visual assets and design patterns that reduced repeated brand revisions and, according to project experience, saved several production days per course.",
   "Produced motion graphics, instructional video, icons, and digital content to communicate complex product and marketing topics.",
   "Partnered with instructional designers, creative, brand, legal, and other stakeholders from concept through production."
  ],
 },
];
const projects = [
 {
  name: "SafeShare — Screenshot Protection",
  type: "Product UI concept · Not launched",
  href: "/projects/meta-image-privacy",
  detail: "Designed privacy-focused mobile UI and concept-presentation assets. The concept reportedly reached executive-level discussion at Meta; it was not approved, launched, or validated as a shipping capability.",
 },
 {
  name: "BART Fare Gates",
  type: "Collaborative academic team project · 2019",
  href: "/projects/bart-fare-gates",
  detail: "Collaboratively researched, prototyped, and tested a taller fare-gate proposal in 2019. Later BART gates share some design principles, but no verified direct attribution connects the academic proposal to BART’s deployment.",
 },
];

export const metadata = {
 title: "Resume",
 description: "Chris Cruz — senior visual and product designer. Meta Blueprint experience, scalable UI systems, and selected design projects.",
 alternates: { canonical: "/resume" },
 openGraph: { title: "Chris Cruz | Resume", url: "/resume" },
};

export default function ResumePage() {
 return (
  <main className="portfolio-cursor portfolio-light resume-page min-h-screen bg-white text-[#17232f]">
   <Cursor light/>
   <Navbar/>
   <div className="mx-auto max-w-[900px] px-6 pb-24 pt-32 sm:px-7 md:px-12 md:pt-40">
    <Link href="/" className="resume-link text-xs font-bold uppercase tracking-[.16em] text-[#0072FC]">← Portfolio</Link>
    <header className="mt-12 border-b border-[#E1E7EC] pb-8">
     <h1 className="portfolio-page-title font-bold tracking-[-.07em]">Chris Cruz<span className="text-[#0072FC]">.</span></h1>
     <p className="mt-3 text-[clamp(1rem,2vw,1.25rem)] font-semibold text-[#253849]">Senior Visual &amp; Product Designer <span className="font-normal text-[#637385]">/ Web, Design Systems &amp; Motion</span></p>
     <p className="mt-3 text-sm leading-[1.8] text-[#617182]">
      Bay Area, California · <a className="resume-link text-[#0072FC]" href="mailto:chrissscruz@gmail.com">chrissscruz@gmail.com</a> · <a className="resume-link text-[#0072FC]" href="https://www.linkedin.com/in/cruzchris/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <Link href="/" className="resume-link text-[#0072FC]">Portfolio</Link>
     </p>
    </header>

    <section className="mt-10">
     <h2 className="text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Profile</h2>
     <p className="mt-3 max-w-3xl text-[15px] leading-[1.85] text-[#354554]">
      Senior visual designer with 6+ years building production-ready digital learning, web experiences, motion assets, and reusable systems for Meta Blueprint. My work spans Figma component libraries, responsive UI, HTML/CSS and CMS publishing, developed alongside instructional design, brand, legal, and creative partners.
     </p>
    </section>

    <section className="mt-10">
     <h2 className="border-b border-[#C9DFF9] pb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Professional experience</h2>
     {experience.map(job=>(
      <article className="mt-6" key={job.name}>
       <h3 className="text-xl font-bold tracking-tight text-[#1A2B3D]">{job.name} <span className="font-semibold text-[#486072]">| {job.role}</span></h3>
       <p className="mt-1 text-xs text-[#718496]">{job.dates} · {job.location}</p>
       <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-[1.8] text-[#435567] marker:text-[#0072FC]">
        {job.bullets.map(b=><li key={b}>{b}</li>)}
       </ul>
      </article>
     ))}
    </section>

    <section className="mt-12">
     <h2 className="border-b border-[#C9DFF9] pb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Selected projects</h2>
     <div className="mt-5 space-y-6">
      {projects.map(project=>(
       <article key={project.name}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
         <h3 className="text-base font-bold text-[#24364A]"><Link href={project.href} className="resume-link text-[#0072FC]">{project.name} ↗</Link></h3>
         <span className="text-xs text-[#82909C]">{project.type}</span>
        </div>
        <p className="mt-2 text-sm leading-[1.8] text-[#4A5F71]">{project.detail}</p>
       </article>
      ))}
     </div>
    </section>

    <section className="mt-11">
     <h2 className="border-b border-[#C9DFF9] pb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Skills &amp; tools</h2>
     <div className="mt-4 space-y-3 text-sm leading-[1.75] text-[#435668]">
      <p><strong className="text-[#213347]">Design:</strong> Visual systems, typography, digital art direction, web/UI design, brand identity, iconography, prototyping.</p>
      <p><strong className="text-[#213347]">Software:</strong> Figma, Illustrator, Photoshop, After Effects, Premiere Pro, Sketch, Evolve.</p>
      <p><strong className="text-[#213347]">Production:</strong> HTML/CSS, CMS/LMS, instructional content, motion design, cross-functional delivery.</p>
     </div>
    </section>

    <section className="mt-11">
     <h2 className="border-b border-[#C9DFF9] pb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Education</h2>
     <div className="mt-4 space-y-2 text-sm leading-relaxed text-[#435668]">
      <p><strong className="text-[#24364A]">MA, Web Design &amp; New Media</strong> — Academy of Art University, San Francisco</p>
     </div>
    </section>
    <div className="mt-16 border-t border-[#E2E7EE] pt-6 flex flex-wrap items-center justify-between gap-4">
     <Link href="/contact" className="text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">Let's connect ↗</Link>
     <Link href="/projects/meta-blueprint" className="text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">See my Meta Blueprint work ↗</Link>
    </div>
   </div>
   <Footer/>
  </main>
 );
}
