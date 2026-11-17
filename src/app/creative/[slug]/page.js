import Link from "next/link";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import creativeMedia from "@/data/creativeMedia.json";
import {creativeProjects,getCreativeProject} from "@/data/creativeProjects";

export function generateStaticParams(){return creativeProjects.map(({slug})=>({slug}));}
export async function generateMetadata({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project) return {title:"Creative Work"};
  return {title:`${project.title} | Chris Cruz`,description:project.intro,alternates:{canonical:`/creative/${slug}`}};
}

function ArtworkSection({title,number,description,images,sectionId}){
  if(!images.length)return null;
  return (
    <section id={sectionId} aria-label={title} className="border-t border-[#DFE6EB] py-12 md:py-16">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.15em] text-[#0072FC]">{number} / Artwork</p>
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-.05em]">{title}</h2>
          <p className="mt-3 max-w-[700px] text-sm leading-[1.8] text-[#687683]">{description}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#82909D]">{images.length} image{images.length===1?"":"s"}</span>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {images.map(item=>(
          <CreativeArtwork key={item.src} item={item} />
        ))}
      </div>
    </section>
  );
}

export default async function CreativeProjectPage({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  const media=creativeMedia[slug];
  if(!project||!media)notFound();
  const index=creativeProjects.findIndex(p=>p.slug===slug);
  const next=creativeProjects[(index+1)%creativeProjects.length];
  const originals=media.images.filter(item=>item.type==="Original source artwork");
  const applications=media.images.filter(item=>item.type!=="Original source artwork");
  const hero=slug==="raices-real-estate"?media.images[4]
    :slug==="foodpoint"?media.images[3]
    :slug==="litter-free-foundation"?media.images[1]
    :media.images[0];

  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/><Navbar/>
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-32 md:px-12 lg:px-16 lg:pt-40">
        <Link href="/creative" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[#0072FC] hover:underline underline-offset-4">← All creative work</Link>
        <header className="mt-10 grid gap-9 border-b border-[#DEE5E9] pb-12 md:pb-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(240px,.55fr)] lg:gap-14">
          <div>
            <p className="portfolio-eyebrow mb-5 text-[#0072FC]">{project.category.toUpperCase()}</p>
            <h1 className="portfolio-page-title max-w-[870px] font-bold tracking-[-.06em]">{project.title}</h1>
            <p className="mt-6 max-w-[740px] text-[clamp(1rem,2vw,1.3rem)] leading-[1.85] text-[#536573]">{project.intro}</p>
          </div>
          <aside className="self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#8897A2]">Scope</p>
            <p className="mt-2 text-sm leading-[1.85] text-[#2E3D47]">{project.role}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] text-[#8897A2]">Project status</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#2E3D47]">{project.status}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] text-[#8897A2]">Artwork</p>
            <p className="mt-2 text-sm text-[#2E3D47]">{media.images.length} pieces · Original designs and labeled concept applications</p>
            {project.external&&<a href={project.external.url} rel="noreferrer noopener" target="_blank" className="mt-6 inline-block text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">{project.external.title} ↗</a>}
          </aside>
        </header>

        <div className="grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(230px,.6fr)] lg:gap-14">
          <CreativeArtwork item={hero} hero />
          <div className="lg:self-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Selected work</p>
            <h2 className="max-w-[430px] text-3xl font-bold leading-[1.1] tracking-[-.045em]">From the original files.</h2>
            <p className="mt-5 text-sm leading-[1.9] text-[#596977]">{project.details?.[0]||media.description}</p>
            <p className="mt-5 text-xs leading-[1.8] text-[#83919D]">Click an image below to view its original resolution. Small legacy files are not enlarged beyond their source size.</p>
          </div>
        </div>

        <ArtworkSection title="Identity & explorations" number="01" sectionId="original-artwork"
          description="Original logo designs, alternate marks, digital designs, graphics, and visual explorations from the supplied project files."
          images={originals}/>
        <ArtworkSection title="Concept applications" number="02" sectionId="applications"
          description="Presentation mockups and proposed applications; these are labeled as concepts, not installed signage, manufactured products, or launched experiences."
          images={applications}/>

        <div className="border-t border-[#DFE6EB] py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#84919D]">Project notes</p>
          {project.details?.slice(1).map((paragraph,i)=>(
            <p key={i} className="mt-4 max-w-[850px] text-sm leading-[1.85] text-[#5B6B78]">{paragraph}</p>
          ))}
          {media.notes&&<p className="mt-4 max-w-[850px] text-xs leading-[1.8] text-[#8896A2]">{media.notes}</p>}
        </div>

        <nav className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-[#DFE6EB] pt-9 sm:flex-row sm:items-center" aria-label="Creative project navigation">
          <Link href="/creative" className="text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline">← All creative projects</Link>
          <Link href={`/creative/${next.slug}`} className="text-right text-sm font-semibold hover:text-[#0072FC]">Next project ↗<span className="mt-1 block text-xl font-bold tracking-[-.03em]">{next.title}</span></Link>
        </nav>
      </div>
      <Footer/>
    </main>
  );
}
