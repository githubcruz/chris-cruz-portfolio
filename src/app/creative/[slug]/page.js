import Link from "next/link";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CreativeArtwork from "@/components/CreativeArtwork";
import {creativeProjects,getCreativeProject} from "@/data/creativeProjects";

export function generateStaticParams(){return creativeProjects.map(({slug})=>({slug}));}
export async function generateMetadata({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project)return {title:"Creative Work"};
  return {title:`${project.title} | Chris Cruz`,description:project.intro,alternates:{canonical:`/creative/${slug}`}};
}
const types=[
  {key:"primary",heading:"01 / Foundation",subtitle:"Original mark or primary work"},
  {key:"variation",heading:"02 / Exploration",subtitle:"Additional original concept or variation"},
  {key:"application",heading:"03 / Application",subtitle:"Further design work or labeled concept mockup"}
];

export default async function CreativeProjectPage({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project)notFound();
  const index=creativeProjects.findIndex(p=>p.slug===slug);
  const next=creativeProjects[(index+1)%creativeProjects.length];
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light/><Navbar/>
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-32 md:px-12 lg:px-16 lg:pt-40">
        <Link href="/creative" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-[#0072FC] hover:underline underline-offset-4">← All creative work</Link>
        <header className="mt-10 grid gap-8 border-b border-[#DEE5EA] pb-12 md:pb-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(230px,.5fr)] lg:gap-12">
          <div>
            <p className="portfolio-eyebrow mb-5 text-[#0072FC]">{project.category.toUpperCase()}</p>
            <h1 className="portfolio-page-title max-w-[900px] font-bold tracking-[-.06em]">{project.title}</h1>
            <p className="mt-6 max-w-[750px] text-[clamp(1rem,2vw,1.3rem)] leading-[1.8] text-[#536370]">{project.intro}</p>
          </div>
          <aside className="self-end lg:pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#8A97A3]">Disciplines</p>
            <p className="mt-2 text-sm leading-[1.8]">{project.role}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] text-[#8A97A3]">Project type</p>
            <p className="mt-2 text-sm">{project.status}</p>
            {project.external&&<a href={project.external.url} rel="noreferrer noopener" target="_blank" className="mt-5 inline-block text-sm font-semibold text-[#0072FC] hover:underline underline-offset-4">{project.external.title} ↗</a>}
          </aside>
        </header>

        <section className="grid gap-7 border-b border-[#E0E5E9] py-12 md:gap-10 md:py-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(250px,.55fr)]">
          <div className="max-w-[810px]">
            <CreativeArtwork index={index} variant="primary" alt={project.visualLabels[0]} className="shadow-[0_10px_34px_rgba(20,35,50,.045)]"/>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold">{project.visualLabels[0]}</h2>
              <p className="text-xs font-medium uppercase tracking-[.08em] text-[#8C97A2]">{project.visualNotes[0]}</p>
            </div>
          </div>
          <div className="lg:self-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Selected work / 01</p>
            <h2 className="max-w-[330px] text-3xl font-bold leading-[1.12] tracking-[-.045em]">The original direction.</h2>
            <p className="mt-5 max-w-[390px] text-sm leading-[1.9] text-[#5A6976]">{project.details[0]}</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Selected work / 02—03</p>
              <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.15] tracking-[-.045em]">More of the work.</h2>
            </div>
            <span className="text-xs text-[#778591]">Logo variations / Applications / Explorations</span>
          </div>
          <div className="grid gap-9 md:grid-cols-2 md:gap-6">
            {types.slice(1).map((item,i)=>(
              <figure key={item.key} className="min-w-0">
                <CreativeArtwork index={index} variant={item.key} alt={project.visualLabels[i+1]}/>
                <figcaption className="mt-5 flex flex-wrap items-start justify-between gap-3">
                  <div><p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#0072FC]">{item.heading}</p><h3 className="mt-2 text-lg font-semibold tracking-[-.025em]">{project.visualLabels[i+1]}</h3></div>
                  <p className="max-w-[180px] text-xs leading-relaxed text-[#82909C]">{project.visualNotes[i+1]}</p>
                </figcaption>
                <p className="mt-4 max-w-[530px] text-sm leading-[1.8] text-[#596875]">{project.details[i+1]}</p>
              </figure>
            ))}
          </div>
        </section>
        <div className="border-t border-[#DEE5EA] py-9">
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#84919D]">Project notes</p>
          <p className="mt-3 max-w-[850px] text-sm leading-[1.85] text-[#5D6A76]">The images above are a curated selection from the original source work. Where an image is a presentation-only mockup, it is identified as a concept rather than a manufactured, installed, or shipped result. Original artworks are not replaced with synthetic designs.</p>
        </div>
        <nav className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#DDE4EA] pt-9 sm:flex-row sm:items-center" aria-label="Creative project navigation">
          <Link href="/creative" className="text-xs font-semibold uppercase tracking-[.12em] text-[#0072FC] hover:underline">← All projects</Link>
          <Link href={`/creative/${next.slug}`} className="text-right text-sm font-semibold hover:text-[#0072FC]">Next project <span aria-hidden="true">↗</span><span className="mt-1 block text-xl font-bold tracking-[-.03em]">{next.title}</span></Link>
        </nav>
      </div>
      <Footer/>
    </main>
  );
}
