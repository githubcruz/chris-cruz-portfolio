import Link from "next/link";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Creative Work",
  description: "Brand identity, visual campaigns, illustration, and interface concepts by Chris Cruz. Original artwork and carefully labeled concept work.",
  alternates: { canonical: "/creative" },
};

const projects = [
  {
    title: "Elite Barbershop",
    type: "Client work · Brand identity",
    detail: "Original script and circular logo explorations with a traditional red-and-blue barber pole. Signage, apparel, and business-card applications are proposed mockups.",
    alt: "Elite Barbershop original circular script logo with barber pole",
    tags: ["Identity", "Logo system", "Signage concepts"],
  },
  {
    title: "Raíces Real Estate",
    type: "Client work · Identity & campaigns",
    detail: "A shield-and-roots identity applied to property marketing, listing flyers, and social campaigns for a local real-estate practice.",
    alt: "Original Raíces Real Estate shield identity and printed listing flyer",
    tags: ["Brand identity", "Social campaigns", "Web"],
    url: "https://www.jordanruiz.com/",
  },
  {
    title: "Pekaboo",
    type: "Concept · Logo & illustration",
    detail: "An expressive character mark developed through hairstyle and makeup variations, combining playful illustration with a beauty-focused wordmark.",
    alt: "Original Pekaboo illustrated character and wordmark",
    tags: ["Illustration", "Identity"],
  },
  {
    title: "The Mexican Museum",
    type: "Independent concept · Cultural identity",
    detail: "A geometric, color-led mark exploring Mexican cultural expression. An independent design exploration, not an official museum identity.",
    alt: "Original geometric multicolor Mexican Museum logo exploration",
    tags: ["Logo exploration", "Cultural identity"],
  },
  {
    title: "Optik",
    type: "Student concept · Brand & app",
    detail: "An identity system, interface explorations, advertising applications, and packaging concepts for a vision-technology idea.",
    alt: "Original Optik mobile-app interface designs and packaging",
    tags: ["Branding", "UI", "Campaign"],
  },
  {
    title: "Steamboat",
    type: "Design concept · Restaurant identity",
    detail: "Restaurant logo explorations and menu/web presentation studies developed as a cohesive visual identity.",
    alt: "Original Steamboat restaurant mark and website design exploration",
    tags: ["Identity", "Web", "Menu"],
  },
  {
    title: "FoodPoint",
    type: "Student project · UX/UI",
    detail: "A mobile-app concept for finding and tracking street-food vendors, including research, flows, prototypes, and high-fidelity interfaces.",
    alt: "Original FoodPoint high-fidelity mobile UI screens",
    tags: ["UX research", "App design"],
  },
  {
    title: "Litter-Free Foundation",
    type: "Concept · Identity & applications",
    detail: "An environmental identity built around a hand and trash-bag symbol, shown on a green collection-bin mockup.",
    alt: "Original Litter-Free Foundation logo applied to a green bin",
    tags: ["Logo", "Environmental design"],
  },
  {
    title: "Green & Clean",
    type: "Concept · Logo & illustration",
    detail: "A friendly illustrative identity using a spray bottle, globe motif, and sparkling green and blue accents.",
    alt: "Original illustrated Green and Clean logo",
    tags: ["Illustration", "Identity"],
  },
];

function Artwork({ index, alt }) {
  const col = index % 3;
  const row = Math.floor(index / 3);
  return (
    <div
      role="img"
      aria-label={alt}
      className="aspect-[42/29] w-full rounded-[1.1rem] border border-[#E2E7EC] bg-[#F7F8F9] bg-no-repeat"
      style={{
        backgroundImage: 'url("/creative-media/originals-atlas.avif")',
        backgroundSize: "300% 300%",
        backgroundPosition: `${col * 50}% ${row * 50}%`,
      }}
    />
  );
}

export default function CreativePage() {
  return (
    <main className="portfolio-cursor portfolio-light min-h-screen bg-white text-[#111]">
      <Cursor light />
      <Navbar />
      <div className="mx-auto max-w-[1320px] px-7 pb-24 pt-36 md:px-20 md:pt-44">
        <div className="max-w-[940px]">
          <p className="portfolio-eyebrow mb-5 text-[#0072FC]">CREATIVE WORK / SELECTED VISUAL EXPLORATIONS</p>
          <h1 className="portfolio-page-title max-w-[850px] font-bold leading-[1.07] tracking-[-.055em]">
            Outside the <span className="text-[#0072FC]">case studies.</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-[16px] leading-[1.85] text-[#596875] md:text-lg">
            A curated collection of brand identities, marketing design, illustration, and early product concepts. Built with original artwork and a few clearly identified presentation mockups.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[.12em]">
            <a href="#gallery" className="text-[#0072FC] hover:underline underline-offset-4">Explore the work ↓</a>
            <Link href="/projects" className="text-[#283542] hover:text-[#0072FC]">View product case studies ↗</Link>
          </div>
        </div>

        <section id="gallery" aria-label="Creative work gallery" className="mt-16 scroll-mt-28 md:mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#DDE4EA] pb-5">
            <h2 className="text-2xl font-bold tracking-[-.04em] md:text-3xl">Selected projects <span className="ml-2 align-top text-sm font-medium text-[#7B8894]">/ 09</span></h2>
            <p className="text-sm text-[#64717D]">Client work & independent explorations</p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="min-w-0">
                <Artwork index={index} alt={project.alt} />
                <div className="pt-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#0072FC]">{project.type}</p>
                  <h3 className="text-[clamp(1.45rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-.04em]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#596875]">{project.detail}</p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[.1em] text-[#84909B]">{project.tags.join(" · ")}</p>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-semibold uppercase tracking-[.1em] text-[#0072FC] hover:underline underline-offset-4">
                      View live brand website ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <div className="mt-20 border-t border-[#DDE4EA] pt-9 md:mt-28">
          <p className="max-w-[720px] text-sm leading-[1.8] text-[#65717D]">
            Some pieces are client work, while others were created as independent or academic concepts. Presented applications are labeled as concepts when they were not produced or launched. Original source artwork takes priority over synthetic mockups.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#0072FC] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005DC8]">
            Work together ↗
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
