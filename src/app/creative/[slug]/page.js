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
  "elite-barbershop":[["Logo variations & lettering",5,7],["Brand applications / Concepts",8,11,60,61]],
  "raices-real-estate":[["Logo & brand identity",13,14],["Property marketing & social campaigns",17,28]],
  "optik":[["Logo rationale & variations / Concepts",75,77],["Original logo, wireframes & mobile UI",29,32],["Eye-care campaign posters / Concepts",78,78],["Digital product experience / Concepts",79,79],["Brand & product applications / Concepts",80,80],["Earlier campaign & packaging explorations",33,34]],
  "steamboat":[["Logo variations & brand identity",90,90],["Restaurant menu & promotional poster / Concepts",91,92],["Storefront signage / Concept",93,93],["Takeaway packaging & merchandise / Concepts",94,95],["Print, loyalty & tabletop collateral / Concepts",96,96],["Original logo, menu & interface explorations",35,42]],
  "pekaboo":[["Logo & character explorations",43,44],["Beauty products & brand applications / Concepts",45,45,62,65]],
  "the-mexican-museum":[["Brand guidelines / Concept",67,67],["Exhibition & museum applications / Concepts",68,70],["Heritage portrait campaign / Concepts",71,73]],
  "foodpoint":[["Brand guidelines & logo directions / Concepts",98,99],["Design reasoning / Concept",101,101],["Product and mobile UI concepts",100,100],["Original research, identity & app explorations",49,52]],
  "litter-free-foundation":[["Original illustrated identity",53,53],["Original environmental applications / Concepts",54,55],["Additional campaign, bin & apparel applications / Concepts",102,104]],
  "green-and-clean":[["Original illustrated logo",56,56],["Brand guidelines & design reasoning / Concepts",105,106],["Packaging & campaign studies / Concepts",107,108],["Volunteer merchandise & outreach / Concepts",109,109],["Earlier product concepts",57,58]],
  "drone-emblem":[["Original Air Drone Visuals identity",59,59],["Brand guidelines / Concept",110,110],["Safety cones and crew hat / Studio concept",111,111],["Aerial filming equipment / Field concept",112,112]],
};

function MediaFigure({media,first=false,elite=false}){
  return (
    <figure className={elite ? "group min-w-0 overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white shadow-[0_3px_14px_rgba(12,32,50,.025)] transition-[border-color,box-shadow] duration-300 hover:border-[#B8D5FC] hover:shadow-[0_9px_28px_rgba(12,32,50,.065)]" : "min-w-0"}>
      <CreativeArtwork
        media={media}
        canOpen
        aspect={first?"wide":"landscape"}
        elitePresentation={elite}
        className={elite ? "!rounded-none !border-0 !shadow-none" : ""}
      />
      <figcaption className={elite ? "mx-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7EDF2] py-4 md:mx-5" : "mt-4 flex flex-wrap items-start justify-between gap-3"}>
        <h3 className={elite ? "flex max-w-[420px] items-center gap-2.5 text-[14px] font-semibold leading-snug tracking-[-.015em]" : "max-w-[420px] text-[15px] font-semibold leading-snug tracking-[-.015em]"}>
          {elite && <span aria-hidden="true" className="h-[17px] w-[3px] shrink-0 rounded-full bg-[#0072FC]"/>}
          {media.alt}
        </h3>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[.08em] text-[#64748B]">{media.type==="Conceptual application"?"Concept mockup":media.type==="Independent redesign"?"Independent redesign":"Original artwork"}</span>
      </figcaption>
    </figure>
  );
}

export default async function CreativeProjectPage({params}){
  const {slug}=await params;
  const project=getCreativeProject(slug);
  if(!project)notFound();
  const artworks=(creativeMedia[slug]??[]).filter(media=>slug!=="elite-barbershop"||media.index!==12);
  const useCleanGallery=["elite-barbershop","raices-real-estate","pekaboo","the-mexican-museum","optik","steamboat","foodpoint","litter-free-foundation","green-and-clean","drone-emblem"].includes(slug);
  const coverIndex=(creativeHighlights[slug]??[])[0];
  const featured=artworks.find(a=>a.index===coverIndex)??artworks[0];
  const currentIndex=creativeProjects.findIndex(p=>p.slug===slug);
  const next=creativeProjects[(currentIndex+1)%creativeProjects.length];
  const sections=(sectionDefinitions[slug]??[]).map(([heading,...ranges])=>({
    heading,
    items:artworks.filter(a=>ranges.some((start,i)=>i%2===0&&a.index>=start&&a.index<=ranges[i+1])),
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
            <CreativeArtwork media={featured} aspect="wide" canOpen priority elitePresentation={useCleanGallery} className="shadow-[0_12px_38px_rgba(12,32,50,.04)]"/>
            <p className="mt-4 text-xs text-[#84919C]">{featured.alt} · Click to view the full-resolution file</p>
          </div>
          <div className="lg:self-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Project overview</p>
            <h2 id="lead-artwork-heading" className="text-[clamp(1.8rem,2.8vw,3rem)] font-bold leading-[1.13] tracking-[-.045em]">The design, in detail.</h2>
            <p className="mt-5 text-sm leading-[1.85] text-[#566673]">{project.details[0]}</p>
            <p className="mt-4 text-sm leading-[1.85] text-[#566673]">{project.details[1]}</p>
          </div>
        </section>

        {project.concept && (
          <section aria-labelledby="creative-concept-heading" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Behind the identity</p>
            <h2 id="creative-concept-heading" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">The Concept</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-6 md:grid-cols-2 md:gap-12 md:p-9">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[.12em] text-[#566674]">
                  <span aria-hidden="true" className="h-[16px] w-[3px] rounded-full bg-[#0072FC]"/>{["optik","steamboat","foodpoint","litter-free-foundation","green-and-clean","drone-emblem"].includes(slug)?"The design goal":"The client vision"}
                </h3>
                <p className="text-[15px] leading-[1.85] text-[#566673]">{project.concept.brief}</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[.12em] text-[#566674]">My design approach</h3>
                <p className="text-[15px] leading-[1.85] text-[#566673]">{project.concept.solution}</p>
              </div>
            </div>
          </section>
        )}

        {slug==="optik" && (
          <section aria-labelledby="optik-design-system" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Identity direction</p>
            <h2 id="optik-design-system" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Brand &amp; interface system</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-6 md:grid-cols-2 md:gap-12 md:p-9">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Visual direction</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {name:"Optik blue",color:"#0072FC"},
                    {name:"Ink",color:"#0B0B0B"},
                    {name:"White",color:"#FFFFFF"},
                    {name:"Mist",color:"#F5F7FA"},
                  ].map(color=>(
                    <div key={color.color}>
                      <div className="h-20 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.color}}/>
                      <p className="mt-2 text-xs font-semibold">{color.name}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-[1.75] text-[#78848F]">Proposed concept palette from the approved identity boards; not verified as an original published brand guide.</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Identity &amp; typography</h3>
                <p className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-.05em]">Optik</p>
                <p className="mt-4 text-sm leading-[1.85] text-[#566673]">The eye symbol communicates vision directly, while the lightweight lowercase wordmark makes the identity approachable and tech-forward. Avenir Next is the proposed modern sans-serif direction shown in the concept boards.</p>
                <p className="mt-3 text-xs leading-[1.75] text-[#78848F]">Exact original font files have not been confirmed; the displayed wordmark remains artwork.</p>
              </div>
            </div>
          </section>
        )}

        {slug==="optik" && (
          <section aria-labelledby="optik-visual-story" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Expanded brand identity</p>
            <h2 id="optik-visual-story" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">A visual system built for clarity.</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {number:"01",title:"Immediate recognition",detail:"A simplified eye makes the link to vision care obvious without requiring supporting graphics."},
                {number:"02",title:"Clean and approachable",detail:"Thin lowercase lettering, restrained spacing, and generous white space keep the identity direct and easy to use."},
                {number:"03",title:"Modern and tech-forward",detail:"Blue focal points and a consistent icon language connect the logo to accessible digital product concepts."}
              ].map(item=>(
                <div key={item.number} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                  <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{item.number}</p>
                  <h3 className="mt-4 text-lg font-bold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">The application imagery shows proposed extensions of a student concept rather than manufactured products or a launched eye-care service.</p>
          </section>
        )}

        {slug==="steamboat" && (
          <section aria-labelledby="steamboat-identity" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Proposed identity system</p>
            <h2 id="steamboat-identity" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">A bowl of fun.</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:grid-cols-2 md:gap-12 md:p-9">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Core palette · red accent</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    {name:"Black",hex:"#000000"},
                    {name:"White",hex:"#FFFFFF"},
                    {name:"Accent red",hex:"#E60023"},
                    {name:"Warm gray",hex:"#F7F7F6"},
                  ].map(color=>(
                    <div key={color.hex}>
                      <div className="h-20 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                      <p className="mt-2 text-xs font-semibold">{color.name}</p>
                      <p className="text-[11px] text-[#78848F]">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">Black and white form the core logo. Red is a restrained secondary accent used for the underline and small highlights; warm gray is reserved for presentation surfaces.</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography · proposed direction</h3>
                <p className="text-[clamp(1.75rem,3vw,2.6rem)] font-bold uppercase tracking-[.10em]">Steamboat</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[.14em] text-[#78848F]">Bold condensed display lettering · clean supporting sans-serif</p>
                <p className="mt-5 text-sm leading-[1.85] text-[#566673]">The original STEAMBOAT wordmark uses distinctive, bold condensed display lettering, balanced by a simpler sans-serif for the tagline and body copy. The exact original typeface is unconfirmed; keep the supplied wordmark as artwork.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                {number:"01",title:"The bowl",description:"A single recognizable bowl silhouette connects directly to hotpot without extra decorative details."},
                {number:"02",title:"Two complementary flavors",description:"An S-shaped white cutout nods to yin-yang-inspired balance and brings two contrasting broth flavors into one mark."},
                {number:"03",title:"Friendly, recognizable identity",description:"The bold original wordmark, playful tagline and restrained red underline create character while preserving simple reproduction."},
              ].map(item=>(
                <div key={item.number} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                  <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{item.number}</p>
                  <h3 className="mt-4 text-base font-bold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {slug==="foodpoint" && (
          <section aria-labelledby="foodpoint-identity" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Proposed brand identity</p>
            <h2 id="foodpoint-identity" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Food meets location.</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:grid-cols-2 md:gap-12 md:p-9">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Proposed color palette</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    {name:"Red",hex:"#E53935"},
                    {name:"Black",hex:"#111111"},
                    {name:"White",hex:"#FFFFFF"},
                    {name:"Light gray",hex:"#F3F3F3"},
                  ].map(color=>(
                    <div key={color.hex}>
                      <div className="h-20 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                      <p className="mt-2 text-xs font-semibold">{color.name}</p>
                      <p className="text-[11px] text-[#78848F]">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">Palette values are proposed in the new concept guidelines; they do not replace the palette used in the original student artwork.</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography &amp; wordmark</h3>
                <p className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-.055em]"><span>food</span><span className="text-[#E53935]">point</span></p>
                <p className="mt-4 text-sm leading-[1.85] text-[#566673]">A bold, geometric lowercase sans-serif keeps the identity friendly, digital-first and easy to read. The word “point” in red emphasizes discovery and place.</p>
                <p className="mt-3 text-xs leading-[1.75] text-[#78848F]">Type family is a proposed direction rather than a confirmed source font.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                {number:"01",title:"Food + place",description:"The fork fits inside a map pin, combining the app's two key ideas in a single symbol."},
                {number:"02",title:"Small-screen clarity",description:"A bold, simplified silhouette stays legible in app icons, map markers and navigation."},
                {number:"03",title:"Energetic and friendly",description:"Warm red, dark contrast and rounded lowercase typography make finding food feel approachable."},
              ].map(item=>(
                <div key={item.number} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                  <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{item.number}</p>
                  <h3 className="mt-4 text-base font-bold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">FoodPoint remains an academic concept. New interface and business visuals demonstrate proposed directions, not a launched product or verified local listings.</p>
          </section>
        )}

        {slug==="litter-free-foundation" && (
          <>
            <section aria-labelledby="litter-free-brand-system" className="border-b border-[#E0E5E9] py-12 md:py-16">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Brand guidelines · proposed extension</p>
              <h2 id="litter-free-brand-system" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Keep the original. Build a system around it.</h2>
              <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:grid-cols-2 md:gap-12 md:p-9">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Suggested supporting palette</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      {name:"Leaf green",hex:"#70B844"},
                      {name:"Sky blue",hex:"#48BEDA"},
                      {name:"Forest",hex:"#215C36"},
                      {name:"White",hex:"#FFFFFF"},
                    ].map(color=>(
                      <div key={color.hex}>
                        <div className="h-20 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                        <p className="mt-2 text-xs font-semibold">{color.name}</p>
                        <p className="text-[11px] text-[#78848F]">{color.hex}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">Proposed companion colors inspired by the original artwork, not measured or confirmed official logo hex codes.</p>
                </div>
                <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography · proposed pairing</h3>
                  <p className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-bold tracking-[-.055em]">Litter-Free</p>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[.24em] text-[#215C36]">Foundation</p>
                  <p className="mt-4 text-sm leading-[1.85] text-[#566673]">A clean, friendly sans-serif provides a consistent voice for posters and volunteer materials. Use bold headlines, short action-led copy, and readable supporting text. The original logo's lettering is preserved without modification.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  {title:"Human action",description:"The hand collecting litter emphasizes an achievable act of care rather than abstract sustainability symbolism."},
                  {title:"Recognizable colors",description:"Green and blue echo the environment and support clear communication across different materials."},
                  {title:"Consistency",description:"Use the original illustration intact, with generous clear space and no extra surrounding symbols or competing graphics."},
                ].map((item,i)=>(
                  <div key={item.title} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                    <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{String(i+1).padStart(2,"0")}</p>
                    <h3 className="mt-4 text-base font-bold tracking-[-.025em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section aria-labelledby="litter-free-applications" className="border-b border-[#E0E5E9] py-12 md:py-16">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Brand applications · conceptual studies</p>
              <h2 id="litter-free-applications" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">A cleaner community, one action at a time.</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {index:102,title:"Community awareness poster",note:"Conceptual poster application; no event announced"},
                  {index:103,title:"Public collection-bin concept",note:"Conceptual environmental signage; not installed"},
                  {index:104,title:"Volunteer apparel concept",note:"Conceptual garment application; not manufactured"},
                ].map(item=>{
                  const media=artworks.find(image=>image.index===item.index);
                  if(!media)return null;
                  return (
                    <figure key={item.index} className="group overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white shadow-[0_3px_14px_rgba(12,32,50,.025)] transition-[border-color,box-shadow] duration-300 hover:border-[#B8D5FC] hover:shadow-[0_9px_28px_rgba(12,32,50,.065)]">
                      <a href={media.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0072FC]" aria-label={`View full-size image: ${item.title}`}>
                        <img src={media.src} alt={media.alt} className="block h-auto w-full object-contain" loading="lazy"/>
                      </a>
                      <figcaption className="mx-4 border-t border-[#E7EDF2] py-4 md:mx-5">
                        <p className="flex items-center gap-2.5 text-[14px] font-semibold"><span aria-hidden="true" className="h-[17px] w-[3px] shrink-0 rounded-full bg-[#0072FC]"/>{item.title}</p>
                        <p className="mt-2 text-xs leading-[1.6] text-[#8895A0]">{item.note}</p>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
              <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">New visual mockups based on the original Litter-Free Foundation identity. These images illustrate potential applications, not manufactured products or completed installations.</p>
            </section>
          </>
        )}

        {slug==="green-and-clean" && (
          <section aria-labelledby="green-clean-design-system" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Brand identity / proposed guidelines</p>
            <h2 id="green-clean-design-system" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">A cleaner space, a greener planet.</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:grid-cols-2 md:gap-12 md:p-9">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Proposed supporting palette</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                  {[
                    {name:"Fresh green",hex:"#34D85A"},
                    {name:"Sky blue",hex:"#00B8FF"},
                    {name:"Pale mint",hex:"#EAFBEF"},
                    {name:"White",hex:"#FFFFFF"},
                    {name:"Charcoal",hex:"#3F4447"},
                  ].map(color=>(
                    <div key={color.hex}>
                      <div className="h-16 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                      <p className="mt-2 text-xs font-semibold">{color.name}</p>
                      <p className="text-[11px] text-[#78848F]">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">These are suggested supporting colors, not sampled official hex values from the original artwork. The existing logo remains unchanged.</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography · proposed direction</h3>
                <p className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-.055em]">Green &amp; Clean</p>
                <p className="mt-4 text-sm leading-[1.85] text-[#566673]">Nunito is a friendly primary type recommendation, with Poppins as an alternative for headlines and supporting text. Both complement the illustration’s accessible tone without replacing the original logo lettering.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                {number:"01",title:"Everyday cleaning",description:"The recognizable spray bottle and gloved hand communicate an understandable cleaning action."},
                {number:"02",title:"Caring for the environment",description:"The globe emblem and green accents connect the concept to environmental awareness and responsible habits."},
                {number:"03",title:"Friendly & reassuring",description:"The rounded frame and bright sparkles give the identity a welcoming, fresh feeling while keeping the original symbol intact."},
              ].map(item=>(
                <div key={item.number} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                  <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{item.number}</p>
                  <h3 className="mt-4 text-base font-bold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">All new visuals are proposed brand explorations; packaging specifications and environmental product claims shown in mockups are illustrative, not verified product information.</p>
          </section>
        )}

        {slug==="drone-emblem" && (
          <>
            <section aria-labelledby="drone-identity-system" className="border-b border-[#E0E5E9] py-12 md:py-16">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Proposed identity system</p>
              <h2 id="drone-identity-system" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Cinematic views from above.</h2>
              <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:grid-cols-2 md:gap-12 md:p-9">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Proposed supporting palette</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                    {[
                      {name:"Sky",hex:"#38A9D3"},
                      {name:"Sunset",hex:"#F59D26"},
                      {name:"Emerald",hex:"#30BC78"},
                      {name:"Ink",hex:"#17212B"},
                      {name:"White",hex:"#FFFFFF"},
                    ].map(color=>(
                      <div key={color.hex}>
                        <div className="h-16 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                        <p className="mt-2 text-xs font-semibold">{color.name}</p>
                        <p className="text-[11px] text-[#78848F]">{color.hex}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">Companion colors are proposed from the visual direction, not measured official values from the original illustration.</p>
                </div>
                <div className="md:border-l md:border-[#E7EDF2] md:pl-10">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography &amp; presentation</h3>
                  <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold uppercase tracking-[-.04em]">AIR DRONE <span className="text-[#38A9D3]">VISUALS</span></p>
                  <p className="mt-4 text-sm leading-[1.85] text-[#566673]">The original Air Drone Visuals lettering is light, geometric and spacious, balancing the detailed camera-drone emblem. Use clean typography and generous clear space around the original logo.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  {number:"01",title:"Immediate recognition",description:"The drone and central lens communicate aerial filmmaking and photography at a glance."},
                  {number:"02",title:"Horizon &amp; exploration",description:"The sun and layered color bands suggest sweeping aerial views, perspective and cinematic landscapes."},
                  {number:"03",title:"Versatile illustration",description:"The circular emblem and light wordmark create a recognizable identity across digital and physical touchpoints."},
                ].map(item=>(
                  <div key={item.number} className="rounded-[12px] border border-[#E2E8F0] bg-white p-7">
                    <p className="text-xs font-bold tracking-[.14em] text-[#0072FC]">{item.number}</p>
                    <h3 className="mt-4 text-base font-bold tracking-[-.025em]">{item.title==="Horizon &amp; exploration"?"Horizon & exploration":item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </>
        )}

        {slug==="raices-real-estate" && (
          <section aria-labelledby="raices-brand-kit" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Identity system</p>
            <h2 id="raices-brand-kit" className="mb-7 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Branding kit</h2>
            <div className="grid gap-8 rounded-[12px] border border-[#E2E8F0] bg-white p-6 md:grid-cols-2 md:p-9">
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Color palette</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {label:"Navy",color:"#021839"},
                    {label:"Gold",color:"#C9A84C"},
                    {label:"White",color:"#FFFFFF"},
                    {label:"Black",color:"#000000"},
                  ].map(swatch=>(
                    <div key={swatch.color}>
                      <div className="h-24 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:swatch.color}}/>
                      <p className="mt-3 text-sm font-semibold">{swatch.label}</p>
                      <p className="text-xs text-[#78848F]">{swatch.color}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-[1.7] text-[#78848F]">Official Raíces brand palette: gold, navy, white, and black.</p>
              </div>
              <div className="md:border-l md:border-[#E7EDF2] md:pl-8">
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Typography direction</h3>
                <p className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[.12em] text-[#021839]">Raíces</p>
                <p className="mt-3 text-sm font-medium">Classic serif identity lettering</p>
                <p className="mt-2 text-xs leading-[1.7] text-[#78848F]">The supplied logo uses a classic serif style. The precise licensed font family is not yet confirmed.</p>
                <div className="mt-7 border-t border-[#E7EDF2] pt-5">
                  <p className="text-[1.4rem] font-semibold tracking-[-.025em]">Modern sans-serif</p>
                  <p className="mt-1 text-sm text-[#78848F]">Supporting website and marketing text</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {slug==="pekaboo" && (
          <section aria-labelledby="pekaboo-typeface" className="border-b border-[#E0E5E9] py-12 md:py-16">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Identity system</p>
            <h2 id="pekaboo-typeface" className="mb-7 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Branding kit</h2>
            <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:p-10">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Official color palette</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  {label:"Hot pink",hex:"#FF1D79"},
                  {label:"Soft pink",hex:"#FFC2E1"},
                  {label:"Black",hex:"#000000"},
                  {label:"White",hex:"#FFFFFF"},
                ].map(color=>(
                  <div key={color.hex}>
                    <div className="h-24 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                    <p className="mt-3 text-sm font-semibold">{color.label}</p>
                    <p className="text-xs text-[#78848F]">{color.hex}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9 border-t border-[#E7EDF2] pt-8">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Main typeface</p>
              <h3 className="mt-5 text-[clamp(2.5rem,6vw,4.8rem)] font-medium tracking-[-.055em]">Broadacre</h3>
              <p className="mt-4 max-w-[680px] text-sm leading-[1.8] text-[#566673]">Broadacre is the original font selected for Pekaboo's main wordmark. The exact letterforms are preserved in the supplied logo artwork; this text label uses the website's fallback font until a licensed webfont is provided.</p>
              </div>
            </div>
          </section>
        )}

        {slug==="the-mexican-museum" && (
          <>
            <section aria-labelledby="museum-brand-kit" className="border-b border-[#E0E5E9] py-12 md:py-16">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Proposed identity system</p>
              <h2 id="museum-brand-kit" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Branding kit</h2>
              <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-6 md:p-9">
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Color palette</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    {name:"Green",hex:"#15EE97"},
                    {name:"Red",hex:"#FC072C"},
                    {name:"Magenta",hex:"#FC0384"},
                    {name:"Turquoise",hex:"#05DDEF"},
                    {name:"Yellow",hex:"#FDD60C"},
                    {name:"Deep green",hex:"#016111"},
                    {name:"Black",hex:"#050505"},
                    {name:"White",hex:"#FFFFFF"},
                  ].map(color=>(
                    <div key={color.hex}>
                      <div className="h-24 rounded-lg border border-[#E2E8F0]" style={{backgroundColor:color.hex}}/>
                      <p className="mt-3 text-sm font-semibold">{color.name}</p>
                      <p className="text-xs text-[#78848F]">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-[760px] text-xs leading-[1.8] text-[#78848F]">Approximate colors sampled from the supplied redesign artwork. This is a proposed palette for the independent concept, not the museum's official brand guide.</p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Display typography · proposed</p>
                  <p className="mt-7 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight text-black">The Mexican Museum</p>
                  <p className="mt-5 text-sm font-semibold">Georgia — classic serif</p>
                  <p className="mt-2 text-xs leading-[1.8] text-[#78848F]">A practical serif pairing inspired by the logo's formal wordmark. The exact typeface used in the artwork is unconfirmed.</p>
                </div>
                <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-7 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#82909C]">Supporting typography · proposed</p>
                  <p className="mt-7 font-sans text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-tight tracking-[-.04em]">Art & Culture</p>
                  <p className="mt-5 text-sm font-semibold">Arial / system sans-serif</p>
                  <p className="mt-2 text-xs leading-[1.8] text-[#78848F]">Clean, readable supporting type for exhibitions, wayfinding, digital content and educational materials.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="museum-elements" className="border-b border-[#E0E5E9] py-12 md:py-16">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.14em] text-[#0072FC]">Visual language</p>
              <h2 id="museum-elements" className="mb-8 text-[clamp(1.7rem,3.2vw,2.75rem)] font-bold leading-tight tracking-[-.04em]">Key design elements</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {no:"01",name:"Ollin-inspired geometry",description:"A contemporary reinterpretation inspired by the Aztec Ollin symbol, using balanced, interlocking shapes to suggest motion, cultural continuity, and change.",bands:["#FC072C","#15EE97"]},
                  {no:"02",name:"Interlocking geometry",description:"Bold black outlines and repeated angles create rhythm and allow the emblem to work as a graphic anchor.",bands:["#050505","#FC0384"]},
                  {no:"03",name:"Vibrant cultural palette",description:"Brighter color bands evoke the breadth and richness of Mexican cultural identities, balanced by traditional serif lettering and generous white space.",bands:["#05DDEF","#FDD60C"]},
                ].map(item=>(
                  <div key={item.no} className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white">
                    <div className="flex h-28 items-center justify-center bg-white px-7">
                      <div className="w-full max-w-[220px] overflow-hidden border-[3px] border-black">
                        <div className="h-4" style={{backgroundColor:item.bands[0]}}/>
                        <div className="h-4" style={{backgroundColor:item.bands[1]}}/>
                        <div className="h-2 bg-white"/>
                      </div>
                    </div>
                    <div className="border-t border-[#E7EDF2] p-6">
                      <p className="text-[11px] font-bold tracking-[.12em] text-[#0072FC]">{item.no}</p>
                      <h3 className="mt-2 text-base font-bold">{item.name}</h3>
                      <p className="mt-3 text-sm leading-[1.8] text-[#566673]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-[1.8] text-[#78848F]">The color-band specimens demonstrate proposed graphic rules; they are not additional approved museum logo variations.</p>
            </section>
          </>
        )}

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
              {section.items.map((media,i)=><MediaFigure key={media.src} media={media} first={false} elite={useCleanGallery}/>)}
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
