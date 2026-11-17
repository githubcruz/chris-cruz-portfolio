import Link from "next/link";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import {creativeProjects} from "@/data/creativeProjects";

export const metadata = {
  title: "Creative Work | Chris Cruz",
  description: "Original visual and brand identity work by Chris Cruz: real estate campaigns, barbershop branding, illustration, product concepts, and mobile design.",
  alternates: {canonical:"/creative"},
};
function ArtworkTriptych({project,index,large=false}) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      <div className="col-span-2">
        <CreativeArtwork index={index} variant="primary" alt={project.visualLabels[0]} className={large?"shadow-[0_8px_32px_rgba(16,27,41,.04)]":""}/>
      </div>
      <CreativeArtwork index={index} variant="variation" alt={project.visualLabels[1]}/>
      <CreativeArtwork index={index} variant="application" alt={project.visualLabels[2]}/>
    </div>
  );
}
function Feature({project,index}) {
  return (
    <article className="grid gap-8 border-b border-[#DFE4E8] py-12 lg:grid-cols-[minmax(220px,.55fr)_minmax(0,1fr)] lg:gap-16 lg:py-20">
      <div className="lg:pt-3">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#0072FC]">{project.category}</p>
        <h2 className="max-w-[480px] text-[clamp(2.25rem,4.8vw,4.7rem)] font-bold leading-[1.02] tracking-[-.055em]">{project.title}</h2>
        <p className="mt-6 max-w-[410px] text-base leading-[1.8] text-[#556471]">{project.intro}</p>
        <p className="mt-6 text-xs font-medium uppercase leading-6 tracking-[.11em] text-[#8A949E]">{project.tags.join("  /  ")}</p>
        <Link href={`/creative/${project.slug}`} className="mt-9 inline-flex items-center gap-3 border-b border-[#111] pb-2 text-sm font-semibold transition-colors hover:border-[#0072FC] hover:text-[#0072FC]">
          Explore project <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <Link href={`/creative/${project.slug}`} aria-label={`See all work for ${project.title}`} className="block transition-transform duration-300 hover:-translate-y-1">
        <ArtworkTriptych project={project} index={index} large/>
      </Link>
    </article>
  );
}
function ProjectCard({project,index}) {
  return (
    <article className="group min-w-0">
      <Link href={`/creative/${project.slug}`} className="block">
        <ArtworkTriptych project={project} index={index}/>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.13em] text-[#0072FC]">{project.category}</p>
            <h3 className="text-[clamp(1.4rem,2.1vw,1.85rem)] font-semibold leading-[1.15] tracking-[-.04em] transition-colors group-hover:text-[#0072FC]">{project.title}</h3>
          </div>
          <span className="pt-2 text-base text-[#0072FC]" aria-hidden="true">↗</span>
        </div>
      </Link>
      <p className="mt-3 text-sm leading-[1.75] text-[#566675]">{project.intro}</p>
    </article>
  );
}
export default function CreativePage() {
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/>
      <Navbar/>
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-36 md:px-12 lg:px-16 lg:pt-44">
        <header className="border-b border-[#DDE4EA] pb-12 md:pb-16">
          <p className="portfolio-eyebrow mb-6 text-[#0072FC]">CHRIS CRUZ / BRANDING, CAMPAIGN, DIGITAL & PRINT</p>
          <h1 className="portfolio-page-title max-w-[950px] font-bold leading-[1.05] tracking-[-.055em]">Selected visual <span className="text-[#0072FC]">work.</span></h1>
          <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="max-w-[690px] text-base leading-[1.85] text-[#566471] md:text-lg">
              Identity systems, illustrations, campaigns, and product explorations. Every project opens to more of the original designs, variations, and applications.
            </p>
            <Link href="/projects" className="w-fit shrink-0 text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline underline-offset-4">Product case studies ↗</Link>
          </div>
        </header>

        <section aria-label="Featured visual design projects">
          {creativeProjects.slice(0,2).map((project,index)=><Feature key={project.slug} project={project} index={index}/>)}
        </section>
        <section aria-label="More visual design projects" className="pt-12 md:pt-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-.045em] md:text-4xl">More explorations</h2>
            <p className="text-sm text-[#71808C]">Original artwork / Process / Concepts</p>
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {creativeProjects.slice(2).map((project,i)=><ProjectCard key={project.slug} project={project} index={i+2}/>)}
          </div>
        </section>
        <footer className="mt-24 border-t border-[#DFE4E8] pt-10">
          <p className="max-w-[850px] text-sm leading-[1.8] text-[#6C7883]">Client assignments are identified as such. Independent and academic projects are labeled as concepts. Newly visualized applications are concept mockups, not photographs of products or installations. All identity and interface source material comes from the original projects.</p>
          <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#0072FC] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005DC8]">Get in touch ↗</Link>
        </footer>
      </div>
      <Footer/>
    </main>
  );
}
