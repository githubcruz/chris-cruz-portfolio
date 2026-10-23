import Link from "next/link";
const blue="#0072FC";
const assets=[
 ["01","Interface explorations","Recreate the original image-sharing screens and identify which controls you personally designed."],
 ["02","Interaction states","Show what happens when protection settings are changed, confirmed, or unavailable."],
 ["03","Design variations","Include genuine alternative UI directions, with a short explanation of your design decisions."],
 ["04","Concept video","Add an approved storyboard, video frames, or independently reconstructed product walkthrough."]
];
function Slot({number,title,description}){
 return <div className="group relative overflow-hidden rounded-[22px] bg-[#F2F6FC] border border-[#DCE6F4] min-h-[280px] sm:min-h-[330px] p-7 flex flex-col justify-between transition-colors hover:border-[#0072FC]/40">
  <div className="flex justify-between items-start"><span className="text-[#0072FC] text-xs font-bold tracking-widest">{number} / 04</span><span className="text-[#98ABC7] text-2xl" aria-hidden="true">↗</span></div>
  <div className="absolute right-[-80px] top-[-80px] w-[260px] h-[260px] rounded-full border-[28px] border-[#0072FC]/[.06]" aria-hidden="true"/>
  <div className="relative"><div className="w-12 h-1 rounded-full bg-[#0072FC]/40 mb-5"/><h3 className="font-bold text-[#182943] text-2xl">{title}</h3><p className="text-[#6D7A8E] text-sm mt-3 leading-relaxed max-w-sm">{description}</p><p className="text-[#0072FC] uppercase tracking-[.18em] text-[10px] mt-6 font-bold">Reconstruction placeholder</p></div>
 </div>
}
export default function SafeShareCaseStudy(){
 return <article className="mx-auto max-w-[1500px] px-7 md:px-20 pt-36 md:pt-44 pb-28 text-[#111]">
  <Link href="/projects" className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold hover:underline">← All projects</Link>
  <header className="mt-14 max-w-5xl">
   <p className="uppercase tracking-[.28em] text-[#0072FC] font-bold text-xs">Product concept / Interface design / Concept video</p>
   <h1 className="mt-5 text-[clamp(4rem,9vw,9rem)] font-black tracking-[-.075em] leading-[.95]">SafeShare<span className="text-[#0072FC]">.</span></h1>
   <p className="mt-7 text-[clamp(1.5rem,3.7vw,3.3rem)] leading-tight tracking-tight font-medium max-w-4xl">Helping people share personal moments with greater confidence.</p>
   <p className="mt-7 max-w-3xl text-lg text-[#636363] leading-relaxed">An exploratory image-protection concept focused on clearer sharing controls, greater awareness, and user trust. My contribution centered on creating UI designs and a video communicating the proposed experience.</p>
  </header>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 border-y border-[#DDD] py-7">
   {[["PROJECT","SafeShare Image Protection"],["STATUS","Concept · Not publicly launched"],["MY CONTRIBUTION","UI design · Concept video"],["CONTEXT","Team initiative"]].map(([k,v])=><div key={k}><p className="text-[#0072FC] text-[10px] font-bold tracking-widest">{k}</p><p className="mt-2 text-sm text-[#343434] leading-relaxed">{v}</p></div>)}
  </div>
  <div className="mt-16 md:mt-24 relative min-h-[320px] md:min-h-[470px] p-9 md:p-16 flex flex-col justify-end rounded-[26px] overflow-hidden bg-[#0072FC]">
   <div className="absolute w-[70%] aspect-square rounded-full border-[45px] md:border-[80px] border-white/10 -right-[12%] -top-[60%]" aria-hidden="true"/>
   <p className="relative text-white/70 text-xs uppercase tracking-[.25em]">SafeShare · Product concept</p>
   <h2 className="relative text-white text-[clamp(2.7rem,6vw,6rem)] font-black leading-[.98] tracking-[-.05em] max-w-4xl mt-4">Share freely.<br/>Think confidently.</h2>
   <p className="relative text-white/60 text-xs mt-7">Editorial graphic · Not an original product interface</p>
  </div>
  <section className="grid lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-20 mt-24 md:mt-32">
   <div><p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">01 / The challenge</p><h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">Designing for trust.</h2></div>
   <div className="text-[#555] text-lg leading-relaxed space-y-5"><p>People may be hesitant to share meaningful photos when images can be downloaded, captured, or redistributed without their knowledge or permission.</p><p>The SafeShare concept explored how clearer privacy controls and stronger awareness of sharing risks could help people feel more confident. The proposed protections were exploratory, not demonstrated guarantees.</p><p className="font-semibold text-[#171717]">Design question: How might image-sharing controls feel understandable and reassuring without adding unnecessary complexity?</p></div>
  </section>
  <section className="mt-24 md:mt-32">
   <p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">02 / The concept</p><h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">Clarity before sharing.</h2>
   <p className="mt-5 max-w-3xl text-lg text-[#666] leading-relaxed">The team explored who could view an image, whether redistribution could be restricted, what capture limits might be feasible, and how someone could learn about potential misuse. These were proposed product directions, not confirmed product capabilities.</p>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{[["Audience","Who should be able to see the image?"],["Sharing","How could unauthorized redistribution be discouraged?"],["Capture","What technical limitations should be communicated?"],["Awareness","When and how should the user receive meaningful feedback?"]].map(([t,d],i)=><div key={t} className="rounded-2xl border border-[#DEDEDE] p-6"><p className="text-[#0072FC] text-xs font-bold">{String(i+1).padStart(2,"0")}</p><h3 className="mt-7 text-xl font-bold">{t}</h3><p className="mt-3 text-sm leading-relaxed text-[#666]">{d}</p></div>)}</div>
  </section>
  <section className="mt-24 md:mt-32">
   <div className="flex flex-col md:flex-row justify-between md:items-end gap-5"><div><p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">03 / UI and motion</p><h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">Making the idea tangible.</h2></div><p className="text-[#777] text-sm max-w-sm">Reserved for externally approved, historically accurate reconstructions of the UI and concept video.</p></div>
   <div className="grid md:grid-cols-2 gap-5 mt-10">{assets.map(([number,title,description])=><Slot key={number} number={number} title={title} description={description}/>)}</div>
  </section>
  <section className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-24 md:mt-32 pt-14 border-t border-[#DEDEDE]">
   <div><p className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold">04 / Ownership and learnings</p><h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">Where I contributed.</h2></div>
   <div><h3 className="text-xl font-bold">UI design + video production</h3><p className="mt-4 text-[#626262] leading-relaxed text-lg">I designed the UI concepts and created the video used to communicate the proposed SafeShare experience. The broader problem, solution exploration, and feasibility discussion were a team effort.</p><h3 className="text-xl font-bold mt-10">Next: document the decisions</h3><p className="mt-4 text-[#626262] leading-relaxed">As the original artifacts are reconstructed, this section will explain actual design alternatives, interaction choices, feedback, and what the concept revealed. No launch results, user-test outcomes, or technical guarantees are asserted.</p></div>
  </section>
  <div className="mt-24 pt-8 border-t border-[#DDD] flex flex-wrap justify-between gap-5"><Link href="/projects" className="text-[#0072FC] font-bold hover:underline">← All projects</Link><Link href="/projects/meta-blueprint" className="text-[#0072FC] font-bold hover:underline">Next: Meta Blueprint ↗</Link></div>
 </article>;
}
