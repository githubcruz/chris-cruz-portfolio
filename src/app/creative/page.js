import Link from "next/link";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import {creativeProjects} from "@/data/creativeProjects";
import creativeMedia from "@/data/creativeMedia.json";

export const metadata = {
  title: "Creative Work",
  description: "Visual and brand identity work by Chris Cruz: 10 projects, including logo variations, campaigns, print, illustration, and product concepts, displayed using original high-resolution images.",
  alternates: {canonical:"/creative"},
};
const featuredOrder = {
  "elite-barbershop": [0,7,8],
  "raices-real-estate": [4,5,6],
};

function ProjectIntro({project,count,featured=false}) {
  return (
    <div className="flex flex-col items-start">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.15em] text-[#0072FC]">{project.category}</p>
      {featured?(
        <h2 className="max-w-[550px] text-[clamp(2.6rem,5vw,4.8rem)] font-bold leading-[1.05] tracking-[-.055em]">{project.title}</h2>
      ):(
        <h3 className="text-[clamp(1.65rem,2.4vw,2.15rem)] font-semibold leading-[1.15] tracking-[-.04em]">{project.title}</h3>
      )}
      <p className="mt-5 max-w-[470px] text-sm leading-[1.85] text-[#596976] md:text-base">{project.intro}</p>
      <p className="mt-5 text-xs font-medium tracking-[.09em] text-[#83909B]">{count} ORIGINAL DESIGNS & APPLICATIONS</p>
      <Link href={`/creative/${project.slug}`} className="mt-8 inline-flex items-center gap-2 border-b border-[#0072FC] pb-1 text-sm font-semibold text-[#0072FC] transition-colors hover:border-[#111] hover:text-[#111]">
        View all ${count} images <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

function FeaturedProject({project}) {
  const media = creativeMedia[project.slug].images;
  const picks=featuredOrder[project.slug]||[0,1,2];
  return (
    <article className="grid gap-10 border-b border-[#DFE5E9] py-14 lg:grid-cols-[minmax(240px,.7fr)_minmax(0,1fr)] lg:gap-16 lg:py-20">
      <div className="lg:pt-3"><ProjectIntro project={project} count={media.length} featured/></div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        <CreativeArtwork item={media[picks[0]]} hero className="col-span-2"/>
        <CreativeArtwork item={media[picks[1]]}/>
        <CreativeArtwork item={media[picks[2]]}/>
      </div>
    </article>
  );
}

function ProjectCard({project}) {
  const media=creativeMedia[project.slug].images;
  const primary=project.slug==="foodpoint" ? media[3] : project.slug==="litter-free-foundation" ? media[1] : media[0];
  const secondary=media[1]||null;
  return (
    <article className="min-w-0 border-b border-[#E4E9ED] pb-12">
      <div className="grid grid-cols-2 gap-3">
        <CreativeArtwork item={primary} hero caption={false} className="col-span-2"/>
        {secondary && <CreativeArtwork item={secondary} caption={false}/>}
        {media[2] && <CreativeArtwork item={media[2]} caption={false}/>}
      </div>
      <div className="mt-7">
        <ProjectIntro project={project} count={media.length}/>
      </div>
    </article>
  );
}

export default function CreativePage() {
  const total=Object.values(creativeMedia).reduce((sum,p)=>sum+p.images.length,0);
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/><Navbar/>
      <div className="mx-auto max-w-[1320px] px-6 pb-24 pt-36 md:px-12 lg:px-16 lg:pt-44">
        <header className="border-b border-[#DDE4E8] pb-12 md:pb-16">
          <p className="portfolio-eyebrow mb-6 text-[#0072FC]">CHRIS CRUZ / IDENTITY, CAMPAIGN, DIGITAL & PRINT</p>
          <h1 className="portfolio-page-title max-w-[1000px] font-bold leading-[1.06] tracking-[-.06em]">Creative <span className="text-[#0072FC]">work.</span></h1>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-[730px] text-base leading-[1.85] text-[#536573] md:text-lg">A broader look at my original designs, from the first marks and identity explorations to campaigns, interface work, and branding applications.</p>
            <p className="shrink-0 text-xs font-semibold uppercase leading-loose tracking-[.14em] text-[#7B8995]">{creativeProjects.length} projects <span className="mx-2 text-[#CBD3DA]">/</span> {total} visuals</p>
          </div>
          <Link href="/projects" className="mt-8 inline-block text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline underline-offset-4">View product case studies ↗</Link>
        </header>

        <section aria-label="Featured visual identity projects">
          {creativeProjects.slice(0,2).map(project=><FeaturedProject key={project.slug} project={project}/>)}
        </section>

        <section aria-label="More creative work" className="pt-12 md:pt-20">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-.055em]">More explorations</h2>
            <p className="max-w-xs text-sm leading-relaxed text-[#768591]">Click a project to see all of its logos, artwork, variations, and applications.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
            {creativeProjects.slice(2).map(project=><ProjectCard key={project.slug} project={project}/>)}
          </div>
        </section>

        <div className="mt-20 border-t border-[#DFE5EA] pt-10">
          <p className="max-w-[820px] text-sm leading-[1.85] text-[#657583]">Portfolio artwork is displayed from the provided original files. Independent and academic concepts are identified, and unproduced mockups are labeled as conceptual applications. Smaller legacy logo exports are shown at modest sizes to avoid artificial upscaling.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#0072FC] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005DC8]">Work together ↗</Link>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
