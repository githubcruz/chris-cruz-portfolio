import Link from "next/link";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import {creativeProjects,getCreativeProject} from "@/data/creativeProjects";
import {creativeMedia,creativeHighlights} from "@/data/creativeMedia";

export function generateStaticParams(){
  return creativeProjects.map(({slug})=>({slug}));
}
export async function generateMetadata({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project)return {title:"Creative Work"};
  return {title:`${project.title} | Creative Work`,description:project.intro,alternates:{canonical:`/creative/${slug}`}};
}

const sectionDefinitions={
  "elite-barbershop":[["Original identity & lettering",1,7],["Signage, apparel & business cards / Concepts",8,11],["Additional lettering exploration",12,12]],
  "raices-real-estate":[["Logo, monogram & wordmark",13,16],["Property marketing & social campaigns",17,28]],
  "optik":[["Logo system & mobile interface",29,32],["Campaigns & packaging / Concepts",33,34]],
  "steamboat":[["Identity, menu & interface",35,40],["Apparel & collateral / Concepts",41,42]],
  "pekaboo":[["Original logo & character variations",43,44],["Packaging / Concept",45,45]],
  "the-mexican-museum":[["Logo, illustration & visual identity",46,47],["Identity refinement / Concept",48,48]],
  "foodpoint":[["Research, branding & mobile UI",49,52]],
  "litter-free-foundation":[["Original emblem",53,53],["Environmental applications / Concepts",54,55]],
  "green-and-clean":[["Illustrated identity",56,56],["Product applications / Concepts",57,58]],
  "drone-emblem":[["Original aviation emblem",59,59]],
};

function MediaFigure({media,first=false}){
  return (
    <figure className="min-w-0">
      <CreativeArtwork media={media} canOpen aspect={first?"wide":"landscape"}/>
      <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-[420px] text-[15px] font-semibold leading-snug tracking-[-.015em]">{media.alt}</h3>
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[.1em] text-[#8895A0]">{media.type==="Conceptual application"?"Concept mockup":"Original artwork"}</span>
      </figcaption>
    </figure>
  );
}

export default async function CreativeProjectPage({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project)notFound();
  const artworks=creativeMedia[slug]??[];
  const coverIndex=(creativeHighlights[slug]??[])[0];
  const featured=artworks.find(a=>a.index===coverIndex)??artworks[0];
  const currentIndex=creativeProjects.findIndex(p=>p.slug===slug);
  const next=creativeProjects[(currentIndex+1)%creativeProjects.length];
  const sections=(sectionDefinitions[slug]??[]).map(([heading,start,end])=>({
    heading,items:artworks.filter(a=>a.index>=start&&a.index<=end),
  })).filter(s=>s.items.length);

  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/><Navbar/>
      <div className="mx-auto max-w-[1300px] px-7 pb-24 pt-32 md:px-12 lg:px-20 lg:pt-40">
        <Link href="/creative" className="text-xs font-semibold uppercase tracking-[.14em] text-[#0072FC] hover:underline underline-offset-4">← Creative Work</Link>
        <header className="mt-10 grid gap-8 border-b border-[#DEE5EA] pb-12 md:pb-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(220px,.45fr)]">
          <div>
            <p className="portfolio-eyebrow mb-5 text-[#0072FC]">{project.category.toUpperCase()}</p>
            <h1 className="portfolio-page-title max-w-[930px] font-bold tracking-[-.06em]">{project.title}</h1>
            <p className="mt-7 max-w-[690px] text-[clamp(1rem,2vw,1.25rem)] leading-[1.85] text-[#566674]">{project.intro}</p>
          </div>
          <aside className="self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#82909C]">Project scope</p>
            <p className="mt-2 text-sm leading-[1.8]">{project.role}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] text-[#82909C]">Project type</p>
            <p className="mt-2 text-sm">{project.status}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] text-[#82909C]">Artwork</p>
            <p className="mt-2 text-sm">{artworks.length} visuals and variations</p>
            {project.external&&<a href={project.external.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">{project.external.title} ↗</a>}
          </aside>
        </header>

        <section aria-labelledby="lead-artwork-heading" className="grid gap-8 border-b border-[#E0E5E9] py-12 md:py-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(220px,.55fr)] lg:gap-14">
          <div>
            <CreativeArtwork media={featured} aspect="wide" canOpen priority className="shadow-[0_12px_38px_rgba(12,32,50,.04)]"/>
            <p className="mt-4 text-xs text-[#84919C]">{featured.alt} · Click to view the full-resolution file</p>
          </div>
          <div className="lg:self-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Project overview</p>
            <h2 id="lead-artwork-heading" className="text-[clamp(1.8rem,2.8vw,3rem)] font-bold leading-[1.13] tracking-[-.045em]">The design, in detail.</h2>
            <p className="mt-5 text-sm leading-[1.85] text-[#566673]">{project.details[0]}</p>
            <p className="mt-4 text-sm leading-[1.85] text-[#566673]">{project.details[1]}</p>
          </div>
        </section>

        {sections.map((section,sectionIndex)=>(
          <section key={section.heading} className="border-b border-[#E0E5E9] py-12 md:py-16" aria-labelledby={`creative-section-${sectionIndex}`}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">{String(sectionIndex+1).padStart(2,"0")} / {project.title}</p>
                <h2 id={`creative-section-${sectionIndex}`} className="text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">{section.heading}</h2>
              </div>
              <p className="text-xs font-medium text-[#7E8A96]">{section.items.length} {section.items.length===1?"image":"images"}</p>
            </div>
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2">
              {section.items.map((media,i)=><MediaFigure key={media.src} media={media} first={false}/>)}
            </div>
          </section>
        ))}

        <div className="border-b border-[#DEE5EA] py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#82909D]">About this work</p>
          <p className="mt-3 max-w-[900px] text-sm leading-[1.85] text-[#5A6975]">{project.details[2]}</p>
          <p className="mt-3 max-w-[900px] text-sm leading-[1.85] text-[#78848F]">Original artwork is shown at the best available source resolution. Applications without confirmed production are labeled conceptual mockups. You can open any image directly for a full-size view.</p>
        </div>
        <nav aria-label="Creative project navigation" className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/creative" className="text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline underline-offset-4">← All creative projects</Link>
          <Link href={`/creative/${next.slug}`} className="text-left text-sm font-semibold hover:text-[#0072FC] sm:text-right">Next project ↗<span className="mt-1 block text-xl font-bold tracking-[-.035em]">{next.title}</span></Link>
        </nav>
      </div>
      <Footer/>
    </main>
  );
}
