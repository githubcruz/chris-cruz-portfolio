import Link from "next/link";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import {creativeProjects} from "@/data/creativeProjects";
import {creativeMedia, creativeHighlights} from "@/data/creativeMedia";

export const metadata = {
  title: "Creative Work",
  description: "Explore original logos, visual identities, property campaigns, illustration and digital product explorations by Chris Cruz.",
  alternates: {canonical:"/creative"},
};

function ArtworkPreview({project}) {
  const artwork=creativeMedia[project.slug] ?? [];
  const featuredIndex=(creativeHighlights[project.slug] ?? [])[0];
  const featured=artwork.find(piece=>piece.index===featuredIndex) ?? artwork[0];
  if(!featured)return null;
  return <CreativeArtwork media={featured} aspect="wide" whiteBackground/>;
}

function FeaturedProject({project}) {
  return (
    <article className="grid gap-9 border-b border-[#DFE5EA] py-14 lg:grid-cols-[minmax(240px,.52fr)_minmax(0,1fr)] lg:gap-16 lg:py-20">
      <div className="lg:pt-5">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.15em] text-[#0072FC]">{project.category}</p>
        <h2 className="max-w-[520px] text-[clamp(2.45rem,4.7vw,4.8rem)] font-bold leading-[1.05] tracking-[-.055em]">{project.title}</h2>
        <p className="mt-6 max-w-[450px] text-base leading-[1.8] text-[#576775]">{project.intro}</p>
        <p className="mt-6 text-[11px] font-medium uppercase leading-6 tracking-[.12em] text-[#8995A0]">{project.tags.join("  /  ")}</p>
        <Link href={`/creative/${project.slug}`} className="mt-8 inline-flex border-b border-[#111] pb-2 text-sm font-semibold transition-colors hover:border-[#0072FC] hover:text-[#0072FC]">View all {(creativeMedia[project.slug]??[]).length} visuals ↗</Link>
      </div>
      <Link href={`/creative/${project.slug}`} aria-label={`Explore all ${project.title} visual work`} className="block transition-transform duration-300 hover:-translate-y-1">
        <ArtworkPreview project={project}/>
      </Link>
    </article>
  );
}
function ProjectCard({project}) {
  return (
    <article className="group min-w-0">
      <Link href={`/creative/${project.slug}`} className="block">
        <ArtworkPreview project={project}/>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#0072FC]">{project.category}</p>
            <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-semibold leading-[1.16] tracking-[-.04em] transition-colors group-hover:text-[#0072FC]">{project.title}</h3>
          </div>
          <span className="pt-2 text-[#0072FC]" aria-hidden="true">↗</span>
        </div>
        <p className="mt-3 text-sm leading-[1.8] text-[#596875]">{project.intro}</p>
        <p className="mt-3 text-xs font-medium text-[#8B98A2]">{(creativeMedia[project.slug]??[]).length} original visuals & variations</p>
      </Link>
    </article>
  );
}

export default function CreativePage() {
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/><Navbar/>
      <div className="mx-auto max-w-[1300px] px-7 pb-24 pt-36 md:px-12 lg:px-20 lg:pt-44">
        <header className="border-b border-[#DFE5EB] pb-12 md:pb-16">
          <p className="portfolio-eyebrow mb-5 text-[#0072FC]">IDENTITY / CAMPAIGNS / DIGITAL / ILLUSTRATION</p>
          <h1 className="portfolio-page-title max-w-[980px] font-bold leading-[1.05] tracking-[-.055em]">Selected visual <span className="text-[#0072FC]">work.</span></h1>
          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-[720px] text-base leading-[1.85] text-[#576775] md:text-lg">A broader look at my creative work—brand identities, lettering, campaigns, graphics and product explorations. Each project opens to more original designs and variations.</p>
            <Link href="/projects" className="shrink-0 text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline underline-offset-4">Product case studies ↗</Link>
          </div>
        </header>
        <section aria-label="Featured creative work">
          {creativeProjects.slice(0,2).map(project=><FeaturedProject key={project.slug} project={project}/>)}
        </section>
        <section aria-label="Additional creative projects" className="pt-14 md:pt-20">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.9rem,3.1vw,2.8rem)] font-bold tracking-[-.045em]">More explorations</h2>
            <p className="text-sm text-[#75828D]">{creativeProjects.length} projects · 59 visuals</p>
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {creativeProjects.slice(2).map(project=><ProjectCard key={project.slug} project={project}/>)}
          </div>
        </section>
        <div className="mt-24 border-t border-[#DFE5EA] pt-10">
          <p className="max-w-[840px] text-sm leading-[1.9] text-[#65717D]">Original project artwork is shown at its available source resolution. Concepts and unproduced applications are explicitly labeled on the individual project pages. Client assignments are distinguished from academic and independent explorations.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#0072FC] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005DC8]">Get in touch ↗</Link>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
