import Link from "next/link";
import Image from "next/image";

const decisionResults = [
  {name:"Gate configuration",value:"63.6%",decision:"Single gate",n:"22 participants",note:"Preferred the single-gate concept"},
  {name:"Clipper sensor",value:"96.2%",decision:"Top-mounted",n:"26 participants",note:"Preferred the sensor on top"},
  {name:"Barrier material",value:"92.3%",decision:"Tempered glass",n:"A/B concept test",note:"Favored the glass option"},
  {name:"Opening behavior",value:"53.8%",decision:"Sliding doors",n:"A/B concept test",note:"A narrow preference, not a decisive win"}
];

const researchThemes=[
  {heading:"Rider concerns",body:"The original survey summary surfaced safety, cleanliness, and smell as recurring concerns."},
  {heading:"Synthesis",body:"Affinity mapping organized comments about safety, schedules, belongings, and the overall riding experience."},
  {heading:"Design opportunity",body:"Explore security without making the everyday entrance confusing or intimidating for riders."}
];

const conceptFeatures = [
 {index:"01",heading:"Visible card reading",text:"A Clipper reader on top of the gate places the tap point within easy reach. Its placement was explicitly compared in concept testing.",evidence:"Tested preference · 96.2%"},
 {index:"02",heading:"Tall, transparent barrier",text:"A tempered-glass sliding barrier aimed to discourage bypassing while maintaining visibility of the entry path.",evidence:"Material preference · 92.3%"},
 {index:"03",heading:"Information with privacy",text:"The proof of concept shows a fare balance appearing on the glass after a tap, then disappearing while the doors slide open.",evidence:"Proposed interaction · Not field-tested"},
 {index:"04",heading:"Adaptive access & detection",text:"The concept included reversible entry/exit direction and a proposed sensor alarm if more than one passenger attempted to pass.",evidence:"Proposed behavior · Not field-tested"}
];

const conceptTestGallery = [
 {title:"Single versus double gate",src:"/portfolio-media/bart-ab-configuration.webp",result:"63.6% preferred single gate",detail:"22 participants"},
 {title:"Clipper reader placement",src:"/portfolio-media/bart-ab-sensor.webp",result:"96.2% preferred top placement",detail:"26 participants"},
 {title:"Barrier material",src:"/portfolio-media/bart-ab-material.webp",result:"92.3% preferred tempered glass",detail:"A/B concept comparison"},
 {title:"Opening behavior",src:"/portfolio-media/bart-ab-motion.webp",result:"53.8% preferred sliding doors",detail:"Narrow preference"}
];

const prototypes=[
 {number:"01",heading:"Storyboard",question:"Does the proposed entrance interaction make sense before anything is built?",detail:"The storyboard was reviewed with 21 participants. The archived presentation reports favorable impressions of ease of use and perceived safety."},
 {number:"02",heading:"Physical mockup",question:"How does a taller barrier feel in a real human-scale interaction?",detail:"An early cardboard prototype made size and physical form easier to respond to."},
 {number:"03",heading:"Configuration comparison",question:"Is a single- or double-gate approach clearer and more appealing?",detail:"A subsequent prototype compared different configurations before A/B preference testing."},
 {number:"04",heading:"Focused preference tests",question:"Which details make a specific direction easier to choose?",detail:"The team compared sensor position, barrier material, and opening motion."}
];

const revisions=[
 {id:"01",title:"Height & security",decision:"Explored a taller barrier after feedback on the initial concept."},
 {id:"02",title:"Configuration",decision:"Mixed reactions led to a direct single-versus-double comparison."},
 {id:"03",title:"Sensor placement",decision:"A strong preference test pointed toward a top-mounted Clipper sensor."},
 {id:"04",title:"Material & motion",decision:"Tempered glass gained strong support; sliding doors had a smaller preference margin."}
];

function Eyebrow({children}){return <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.22em]">{children}</p>}
function SectionHeading({number,title,children}){return <div className="max-w-4xl"><Eyebrow>{number}</Eyebrow><h2 className="mt-4 text-3xl md:text-5xl font-black leading-[1.05] tracking-[-.055em] text-[#111]">{title}</h2>{children && <p className="mt-5 text-base md:text-lg leading-[1.75] text-[#60707D]">{children}</p>}</div>}

export default function BartCaseStudy(){
 return <article className="mx-auto max-w-[1340px] px-7 md:px-20 pb-24 pt-32 md:pt-40">
  <Link href="/projects" className="inline-flex text-xs font-semibold uppercase tracking-[.2em] text-[#0072FC] hover:underline underline-offset-4">← All projects</Link>
  <header className="mt-12 max-w-5xl">
   <Eyebrow>03 / HUMAN-CENTERED PRODUCT DESIGN · 2019 TEAM PROJECT</Eyebrow>
   <h1 className="mt-5 text-[clamp(3.2rem,7vw,7.3rem)] font-black leading-[.93] tracking-[-.075em] text-[#111]">BART <span className="text-[#0072FC]">Fare Gates.</span></h1>
   <p className="mt-7 max-w-4xl text-[clamp(1.45rem,2.7vw,2.5rem)] leading-[1.18] font-semibold tracking-tight text-[#263443]">Designing a safer, clearer entrance through research, prototyping, and iteration.</p>
   <p className="mt-6 max-w-3xl text-base md:text-lg leading-[1.75] text-[#61707C]">In a Fall 2019 human-centered design course, our three-person team explored how to make bypassing transit fare gates more difficult while keeping the entry experience intuitive. We collaborated across research, ideation, physical prototyping, concept testing, and the final design.</p>
  </header>

  <div className="mt-12 grid grid-cols-2 gap-5 border-y border-[#E1E5EA] py-7 text-sm lg:grid-cols-4">
    {[["Project type","Academic concept · Fall 2019"],["My role","Collaborative end-to-end design"],["Methods","Research · Prototyping · A/B tests"],["Team","Chris Cruz · Yuki Zhang · Swathi Ayyagari"]].map(([k,v])=><div key={k}><p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#0072FC]">{k}</p><p className="leading-relaxed text-[#2B3540]">{v}</p></div>)}
  </div>
  <figure className="mt-12">
   <div className="overflow-hidden rounded-[28px] border border-[#DFE6EE] bg-[#F3F5F7]">
    <div className="relative aspect-[16/9] w-full overflow-hidden">
     <Image src="/portfolio-media/bart-final-recreated.webp" alt="Recreated presentation image of the Bargate fare-gate concept, with a BART logo and labels identifying the Clipper reader, glass doors, evasion sensor, fare display, and reversible entry sign" fill sizes="(max-width: 767px) 94vw, 1180px" className="object-cover object-center" priority unoptimized/>
    </div>
   </div>
   <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#71808E]"><span>Visual recreation of the team’s 2019 Bargate concept, using the original presentation as reference.</span><span>Academic concept · Not an official BART design or deployment.</span></figcaption>
  </figure>

  <nav aria-label="Case study sections" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-[#E5EAF0] pb-6 text-sm font-semibold text-[#0072FC]">
   <a className="hover:underline underline-offset-4" href="#bart-challenge">Challenge ↗</a>
   <a className="hover:underline underline-offset-4" href="#bart-research">Research ↗</a>
   <a className="hover:underline underline-offset-4" href="#bart-prototyping">Prototyping ↗</a>
   <a className="hover:underline underline-offset-4" href="#bart-results">Testing ↗</a>
   <a className="hover:underline underline-offset-4" href="#bart-features">Interaction ↗</a>
   <a className="hover:underline underline-offset-4" href="#bart-reflection">Reflection ↗</a>
  </nav>

  <section id="bart-challenge" className="scroll-mt-32 mt-20 md:mt-28 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
   <SectionHeading number="01 / The challenge" title="The problem was bigger than a gate."/>
   <div className="space-y-6 text-base md:text-lg leading-[1.8] text-[#53606D]">
    <p>Our research started with the wider experience of riding BART, then narrowed to fare evasion and the point where riders enter a station.</p>
    <p>The design challenge brought competing needs into focus: <strong className="text-[#1F2A35]">entrance security, rider confidence, clarity, and busy-station flow.</strong> A barrier is only useful if paying passengers can understand and use it.</p>
    <blockquote className="border-l-[3px] border-[#0072FC] pl-6 text-xl md:text-2xl font-semibold leading-snug tracking-tight text-[#1B2B3A]">How might we prevent fare evasion by improving entrance-gate security without making the experience harder to navigate?</blockquote>
   </div>
  </section>

  <section id="bart-research" className="scroll-mt-32 mt-24 md:mt-28">
   <SectionHeading number="02 / Discovery & synthesis" title="Understand behavior before designing a solution.">The team used survey research and affinity mapping to organize rider concerns and narrow a broad transit experience challenge into a testable design direction.</SectionHeading>
   <div className="mt-9 grid gap-4 md:grid-cols-3">
    {researchThemes.map((x,i)=><div key={x.heading} className="rounded-[20px] border border-[#E0E7EE] bg-[#F7FAFD] p-6 md:p-7"><p className="text-xs font-bold text-[#0072FC]">{String(i+1).padStart(2,"0")}</p><h3 className="mt-5 text-xl font-bold tracking-tight text-[#1F2D39]">{x.heading}</h3><p className="mt-3 text-sm leading-[1.75] text-[#61717E]">{x.body}</p></div>)}
   </div>
   <div className="mt-10 space-y-9">
    {[
     {
      src:"/portfolio-media/bart-survey-findings.svg",
      original:"/portfolio-media/bart-archival-survey.webp",
      title:"Rider survey — key findings",
      desc:"A new, readable visual summary of the 2019 survey. The archived slide reports varied rider ages, common daytime travel, mixed impressions of BART, and safety, cleanliness, and smell as key concerns.",
      alt:"Reconstructed 2019 BART survey findings: safety, cleanliness and smell were reported concerns; respondents varied by age, often rode in the daytime, and described mixed overall experiences.",
      width:1600,height:930
     },
     {
      src:"/portfolio-media/bart-affinity-map.svg",
      original:"/portfolio-media/bart-archival-affinity.webp",
      title:"Affinity map — five rider themes",
      desc:"The team's original five categories—schedule, personal belongings, riding experience, clean BART, and BART safety—are recreated with selected rider observations paraphrased from the archived board.",
      alt:"Readable BART affinity map showing five grouped themes from 2019 rider feedback, with selected paraphrased notes on schedules, belongings, riding experience, hygiene and safety.",
      width:1810,height:1130
     }
    ].map(item=><figure key={item.src} className="overflow-hidden rounded-[22px] border border-[#DFE6EF] bg-white">
     <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${item.title} SVG`} className="block cursor-zoom-in bg-white">
      <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 767px) 92vw, 1200px" className="h-auto w-full" unoptimized/>
     </a>
     <figcaption className="flex flex-col gap-3 border-t border-[#E6EDF3] p-5 md:flex-row md:items-start md:justify-between md:gap-8 md:p-6">
      <div className="max-w-3xl">
       <p className="text-lg font-bold tracking-tight text-[#223748]">{item.title}</p>
       <p className="mt-2 text-sm leading-[1.75] text-[#627585]">{item.desc}</p>
       <p className="mt-2 text-xs leading-relaxed text-[#8593A0]">Redrawn for clarity from the 2019 project materials. This is not an original screenshot or new rider research.</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-4 text-sm font-semibold text-[#0072FC]">
       <a href={item.src} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Open full size ↗</a>
       <a href={item.original} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Original source ↗</a>
      </div>
     </figcaption>
    </figure>)}
   </div>
   <p className="mt-5 text-sm leading-relaxed text-[#71808B]">The visuals above reproduce only findings and themes supported by the archived 2019 project materials. Exact survey chart values were too blurry to verify, so no new counts or percentages have been introduced. These findings do not demonstrate actual fare-evasion reduction.</p>
  </section>

  <section className="mt-24 md:mt-28">
   <SectionHeading number="03 / Ideation" title="Explore alternatives before committing.">Sketches and dot voting helped the team compare approaches and make the direction more explicit before investing in higher-fidelity prototypes.</SectionHeading>
   <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
    <div className="rounded-[24px] border border-[#DDE5ED] bg-[#F5F8FC] p-7 md:p-10">
     <div className="flex items-end justify-between gap-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#0072FC]">Explore</p><span className="text-xs font-medium text-[#8A99A7]">Multiple directions</span></div>
     <figure className="mt-6 overflow-hidden rounded-[18px] border border-[#D8E4F0] bg-white">
      <Image src="/portfolio-media/bart-ideation.webp" alt="Original team ideation sketches showing multiple hand-drawn fare-gate concepts and colorful voting dots" width={400} height={225} sizes="(max-width:767px) 90vw, 520px" className="h-auto w-full object-cover" unoptimized/>
      <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#647587]">Original ideation photograph and concept voting from the project presentation.</figcaption>
     </figure>
    </div>
    <div className="flex flex-col justify-center rounded-[24px] bg-[#172B41] p-8 md:p-10 text-[#FFFFFF]">
     <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8DBEFF]">Selection method</p>
     <h3 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">Generate → compare → narrow.</h3>
     <p className="mt-5 text-base leading-[1.75] text-[#CDD8E2]">Dot voting and discussion helped identify which concepts were worth testing. The strongest idea was not treated as proven until the next round of feedback.</p>
    </div>
   </div>
  </section>

  <section id="bart-prototyping" className="scroll-mt-32 mt-24 md:mt-28">
   <SectionHeading number="04 / Prototype & learn" title="Increase fidelity only when the question demands it.">Storyboards, cardboard models, and later A/B concept comparisons each reduced a different kind of uncertainty.</SectionHeading>
   <div className="mt-10 grid gap-4 md:grid-cols-2">
    {prototypes.map(x=><div key={x.number} className="rounded-[22px] border border-[#DFE6ED] p-7 md:p-8"><span className="text-xs font-bold text-[#0072FC]">{x.number}</span><h3 className="mt-4 text-2xl font-bold tracking-tight text-[#182A3A]">{x.heading}</h3><p className="mt-4 text-lg font-medium leading-snug text-[#334A5D]">{x.question}</p><p className="mt-4 text-sm leading-[1.75] text-[#70808C]">{x.detail}</p></div>)}
   </div>
   <div className="mt-8 grid gap-5 md:grid-cols-2">
    {[
      {src:"/portfolio-media/bart-archival-storyboard.webp",title:"Storyboard testing",detail:"2019 storyboard and participant response summary."},
      {src:"/portfolio-media/bart-archival-prototype-first.webp",title:"First physical mockup",detail:"Team testing a tall cardboard gate at human scale."},
      {src:"/portfolio-media/bart-archival-prototype-second.webp",title:"Second physical mockup",detail:"Construction and feedback for the alternative configuration."}
    ].map((item,index)=><figure key={item.src} className={`overflow-hidden rounded-[22px] border border-[#DDE6F0] bg-[#F8FAFC] ${index===0?"md:col-span-2":""}`}>
     <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} archive image in a new tab`} className="block cursor-zoom-in">
      <Image src={item.src} alt={item.detail} width={1400} height={788} sizes={index===0?"(max-width:767px) 92vw, 1100px":"(max-width:767px) 92vw, 540px"} className="h-auto w-full" unoptimized />
     </a>
     <figcaption className="p-5"><p className="text-base font-bold text-[#243949]">{item.title}</p><p className="mt-1 text-sm leading-relaxed text-[#6C7B88]">{item.detail} <span className="text-[#0072FC]">Open full size ↗</span></p></figcaption>
    </figure>)}
   </div>
  </section>

  <section id="bart-results" className="scroll-mt-32 mt-24 md:mt-28">
   <SectionHeading number="05 / Concept testing" title="Turn preference into decisions—not inflated outcomes.">Later tests isolated design choices instead of relying on one broad vote for a finished gate.</SectionHeading>
   <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {decisionResults.map(x=><div key={x.name} className="rounded-[22px] border border-[#DCE6F2] bg-[#F6FAFF] p-6"><p className="min-h-9 text-[11px] font-bold uppercase tracking-[.15em] text-[#0072FC]">{x.name}</p><p className="mt-5 text-[clamp(2.3rem,3.8vw,3.5rem)] font-black tracking-tight tabular-nums text-[#142C40]">{x.value}</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#DCE8F6]" aria-hidden="true"><div className="h-full rounded-full bg-[#0072FC]" style={{width:x.value}}/></div><p className="mt-4 text-base font-bold text-[#213748]">{x.decision}</p><p className="mt-2 text-xs text-[#6D7C89]">{x.n}</p><p className="mt-4 border-t border-[#DDE6EE] pt-4 text-xs leading-relaxed text-[#72818D]">{x.note}</p></div>)}
   </div>
   <div className="mt-6 border-l-[3px] border-[#0072FC] bg-[#F4F8FD] px-6 py-5 text-sm leading-[1.8] text-[#526576]"><strong className="text-[#253D51]">What the data actually tells us:</strong> These are participant preferences in a concept-design exercise, not verified reductions in fare evasion, rider errors, or gate congestion. A 53.8% result is a narrow directional preference, and sample sizes for the last two tests were not specified in the source summary.</div>
   <div className="mt-11">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#203748]">The design options, side by side.</h3><p className="mt-2 text-sm leading-relaxed text-[#637582]">Recreated comparison visuals, grounded in the team’s original 2019 testing slides and results.</p></div>
      <span className="text-xs font-bold uppercase tracking-[.12em] text-[#0072FC]">Visual recreations · Not original test photographs</span>
    </div>
    <div className="mt-7 grid gap-6 md:grid-cols-2">
      {conceptTestGallery.map(item=><figure key={item.src} className="overflow-hidden rounded-[22px] border border-[#DFE8F0] bg-[#F7F9FC]">
        <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} recreated concept comparison in a new tab`} className="block cursor-zoom-in">
          <Image src={item.src} alt={`${item.title}: illustrated concept comparison based on 2019 test results`} width={1400} height={788} sizes="(max-width:767px) 92vw, 560px" className="h-auto w-full" unoptimized/>
        </a>
        <figcaption className="p-5"><h4 className="text-base font-bold text-[#1D364A]">{item.title}</h4><p className="mt-1 text-sm text-[#516B7E]">{item.result} · {item.detail}</p><p className="mt-2 text-xs text-[#81909B]">Recreated for legibility from original project documentation. Open full size ↗</p></figcaption>
      </figure>)}
    </div>
   </div>
  </section>

  <section className="mt-24 md:mt-28">
   <SectionHeading number="06 / Iteration" title="Every test changed the next decision.">Rather than polishing a single early idea, the project progressed through specific questions.</SectionHeading>
   <div className="mt-10 overflow-hidden rounded-[24px] border border-[#E1E6EB]">
    {revisions.map((x,i)=><div key={x.id} className={`grid gap-4 px-6 py-7 md:grid-cols-[65px_230px_1fr] md:items-center md:gap-8 md:px-9 ${i!==revisions.length-1?"border-b border-[#E2E8EE]":""}`}><span className="text-xs font-black tracking-widest text-[#0072FC]">V{x.id}</span><h3 className="text-lg font-semibold text-[#1D2E3D]">{x.title}</h3><p className="text-sm leading-[1.7] text-[#687988]">{x.decision}</p></div>)}
   </div>
  </section>

  <section className="mt-24 md:mt-28">
   <div className="grid items-center gap-10 rounded-[28px] bg-[#102B45] p-8 text-[#FFFFFF] lg:grid-cols-[.85fr_1.15fr] md:p-12">
    <div>
     <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8ABBFF]">07 / Final concept · Bargate</p>
     <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">A more defensible entrance concept.</h2>
     <p className="mt-5 text-base leading-[1.75] text-[#D8E4EF]">The team brought its preferred configuration, top-mounted Clipper sensor, tempered-glass doors, and sliding motion together into the Bargate proof of concept.</p>
     <p className="mt-6 text-sm leading-[1.7] text-[#A8C1D3]">The intended benefit was greater resistance to bypassing while maintaining an understandable entry path. Real-world performance remains unvalidated.</p>
    </div>
    <figure className="overflow-hidden rounded-2xl bg-white">
     <Image src="/portfolio-media/bart-final-gate.webp" alt="Team's final Bargate concept rendering" width={760} height={428} className="h-auto w-full object-contain" unoptimized/>
     <figcaption className="p-4 text-xs leading-relaxed text-[#6B7C8B]">Original 2019 archival rendering retained for source reference; the enhanced version appears above.</figcaption>
    </figure>
   </div>
  </section>

  <section id="bart-features" className="scroll-mt-32 mt-24 md:mt-28">
   <SectionHeading number="08 / Concept interaction" title="Make the secure path easy to understand.">The proof-of-concept presentation expanded the gate beyond its physical form into the rider's interaction: where to tap, what feedback appears, how the gate opens, and how the passage is monitored.</SectionHeading>
   <div className="mt-10 grid gap-4 md:grid-cols-2">
    {conceptFeatures.map(feature=><article key={feature.index} className="rounded-[22px] border border-[#DCE5F0] bg-white p-7 md:p-8">
     <div className="flex items-center justify-between gap-4"><span className="text-sm font-black text-[#0072FC]">{feature.index}</span><span className="text-[10px] font-semibold uppercase tracking-wide text-[#758899]">{feature.evidence}</span></div>
     <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#223747]">{feature.heading}</h3>
     <p className="mt-4 text-sm leading-[1.8] text-[#627484]">{feature.text}</p>
    </article>)}
   </div>
   <div className="mt-7 rounded-[22px] border border-[#DFE8F2] bg-[#F5F9FF] p-6 md:p-8">
    <p className="text-xs font-bold uppercase tracking-[.2em] text-[#0072FC]">Proposed rider flow · concept, not a verified live interaction</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-4">
     {[["1","Tap","Use the top-mounted Clipper reader"],["2","Confirm","Fare and balance appear on the glass"],["3","Enter","Sliding barrier opens for passage"],["4","Protect","Fare information disappears as the gate opens"]].map(([i,title,detail])=><div key={i} className="relative rounded-xl border border-[#D4E3F5] bg-white px-5 py-5">
      <span className="text-xs font-bold text-[#0072FC]">{i.padStart(2,"0")}</span>
      <p className="mt-3 text-lg font-bold text-[#273C50]">{title}</p>
      <p className="mt-2 text-xs leading-[1.65] text-[#6D8091]">{detail}</p>
     </div>)}
    </div>
   </div>
  </section>

  <section id="bart-reflection" className="scroll-mt-32 mt-24 md:mt-28">
   <SectionHeading number="09 / Reflection" title="Design is a series of decisions made with evidence.">Working through every phase collaboratively reinforced how research becomes useful when each round informs a more precise design decision.</SectionHeading>
   <div className="mt-10 grid gap-5 md:grid-cols-3">
    {[["What worked","Research, sketches, and increasingly concrete prototypes prevented an early concept from becoming the automatic answer."],["What I would improve","Define behavioral success measures earlier and test accessibility, error states, and rider throughput in addition to preference."],["What comes next","Evaluate a functioning prototype in a real station, observe entry and exit, and measure actual behavior before claiming impact."]].map(([a,b])=><div key={a} className="border-t-2 border-[#0072FC] pt-5"><h3 className="text-lg font-bold text-[#223849]">{a}</h3><p className="mt-3 text-sm leading-[1.8] text-[#667887]">{b}</p></div>)}
   </div>
   <p className="mt-11 max-w-4xl text-lg md:text-xl font-semibold leading-[1.55] tracking-tight text-[#243B4B]">What I carry into product design today is the process: identify the real constraint, make alternatives visible, test assumptions, and use feedback to reduce uncertainty before implementation.</p>
   <p className="mt-7 text-xs leading-relaxed text-[#82909A]">Team Pathfinders: Chris Cruz, Yuki Zhang, and Swathi Ayyagari · WNM 700: Human Centered Design, Fall 2019. Research, ideation, physical prototyping, testing, and the design direction were collaborative. An academic proof of concept, not a BART-commissioned or deployed system.</p>
  </section>

  <div className="mt-20 flex flex-col gap-6 border-t border-[#DCE3EA] pt-10 sm:flex-row sm:items-center sm:justify-between">
   <Link href="/projects" className="text-sm font-semibold text-[#0072FC] hover:underline">← All projects</Link>
   <Link href="/projects/visual-motion" className="group text-left sm:text-right"><span className="block text-xs uppercase tracking-[.18em] text-[#8695A2]">Next project</span><span className="mt-2 block text-2xl font-black text-[#172A3A] transition-colors group-hover:text-[#0072FC]">Motion & Visual Design ↗</span></Link>
  </div>
 </article>
}