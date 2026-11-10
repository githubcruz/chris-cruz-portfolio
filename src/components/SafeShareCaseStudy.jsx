"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Eyebrow({children}) {
  return <p className="text-[#0072FC] text-xs font-bold uppercase tracking-[.24em]">{children}</p>;
}
function SectionHeading({index,label,title,description}) {
  return <div className="max-w-3xl">
    <Eyebrow>{index} / {label}</Eyebrow>
    <h2 className="mt-4 text-[clamp(1.95rem,3.6vw,3.35rem)] leading-[1.03] font-black tracking-[-.055em]">{title}</h2>
    {description && <p className="mt-5 text-[#5D5D5D] text-lg leading-relaxed">{description}</p>}
  </div>;
}
/* The image frames have a graceful fallback until the original approved assets are uploaded. */
function Asset({src,alt,title,caption,aspect="aspect-[8/5]",maxWidth="w-full max-w-[1100px] mx-auto"}) {
  const [available,setAvailable]=useState(true);
  return <figure className={maxWidth}>
    <div className={"relative flex items-center justify-center overflow-hidden rounded-[20px] border border-[#E6EAF0] bg-[#FAFBFD] " + aspect}>
      {available ? <Image src={src} alt={alt} fill sizes="(max-width: 768px) 94vw, (max-width: 1200px) 84vw, 1100px" className="object-contain" unoptimized onError={()=>setAvailable(false)}/> :
        <div className="px-7 max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6E5FD] bg-[#EBF3FF] text-[#0072FC] text-2xl">↗</div>
          <p className="text-[#172B4A] font-semibold text-lg">{title}</p>
          <p className="mt-3 text-[#6A778A] text-sm leading-relaxed">Approved design image ready to be added to this section.</p>
        </div>}
    </div>
    {caption && <figcaption className="mt-3 text-[#7A7A7A] text-xs leading-relaxed">{caption}</figcaption>}
    {available && <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex mt-2 text-[#0072FC] text-xs font-semibold hover:underline underline-offset-4">View image full size ↗</a>}
  </figure>;
}
function MiniCard({num,title,body}) {
 return <div className="rounded-[18px] border border-[#DFE5ED] p-6 bg-white transition-colors hover:border-[#0072FC]/50">
   <span className="text-[#0072FC] text-xs tracking-widest font-bold">{num}</span>
   <h3 className="mt-6 text-[#151515] font-bold text-xl">{title}</h3>
   <p className="mt-3 text-[#636363] text-sm leading-relaxed">{body}</p>
 </div>;
}
export default function SafeShareCaseStudy(){
 return <article className="mx-auto max-w-[1320px] px-7 md:px-20 pt-32 md:pt-40 pb-28 text-[#111]">
  <Link href="/projects" className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold hover:underline underline-offset-4">← All projects</Link>
  <header className="mt-14 max-w-6xl">
   <Eyebrow>SafeShare / Meta concept / UI design + motion</Eyebrow>
   <h1 className="mt-5 text-[clamp(2.85rem,6.6vw,6.4rem)] font-black tracking-[-.075em] leading-[.96]">Screenshot<br/><span className="text-[#0072FC]">Protection.</span></h1>
   <p className="mt-7 max-w-4xl text-[clamp(1.35rem,2.65vw,2.25rem)] leading-[1.15] tracking-[-.03em] font-medium">Helping parents share family moments with greater confidence.</p>
   <p className="mt-6 max-w-3xl text-[#636363] text-lg leading-relaxed">SafeShare explored how a familiar mobile posting flow could introduce clearer image-protection controls and explain the experience to people viewing protected content. I designed UI concepts and produced a concept video to help communicate the idea.</p>
  </header>

  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 border-y border-[#DDD] py-7">
   {[["MY ROLE","UI design · Concept video"],["PROJECT","SafeShare / Screenshot Protection"],["PLATFORM","Mobile · Social sharing"],["STATUS","Exploratory concept · Not launched"]].map(([k,v])=><div key={k}><p className="text-[#0072FC] text-[10px] font-bold tracking-[.16em]">{k}</p><p className="mt-2 text-sm leading-relaxed text-[#343434]">{v}</p></div>)}
  </div>

  <section className="mt-14 md:mt-20">
    <Asset src="/portfolio-media/safeshare-hero-final.webp" title="Screenshot Protection — final concept hero" alt="Two overlapping mobile new-post concept screens: an inline screenshot-protection toggle in front and a confirmation sheet behind, against a soft pastel gradient." caption="UI concept: a visible screenshot-protection toggle and supporting explanation sheet, not a launched feature." aspect="aspect-[8/5]"/>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="01" label="The challenge" title="Sharing a photo shouldn't mean losing control." description="Parents may want to share milestone photos with trusted family, but worry those images could be saved, captured, or redistributed beyond their intended audience."/>
   <div className="mt-9">
    <Asset src="/safeshare/problem-final.webp" title="SafeShare: problem and proposed feedback" alt="Two family-photo states comparing ordinary sharing with an illustrative privacy warning and attempted screenshot notification." caption="Conceptual warning and notification copy. Capture prevention and attempted-screenshot alerts are illustrative; implementation and platform capabilities would require validation." aspect="aspect-[2048/853]"/>
   </div>
   <p className="mt-5 text-[#0072FC] text-xl font-semibold italic">“Moments shared. Privacy protected.”</p>
   <p className="text-[#888] text-xs mt-2">Concept tagline — not a user-research quotation or proven outcome.</p>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="02" label="Primary user" title="Designing around a parent's privacy concerns." description="Alex Ruiz is a design persona representing parents who want to share family milestones while retaining greater awareness of how their photos are handled."/>
   <div className="mt-9">
    <Asset src="/safeshare/persona-final.webp" title="Alex Ruiz — concise design persona" alt="Alex Ruiz design persona with a family photograph, key goals, pain points and needs, and a design opportunity: help parents protect family photos without complicating sharing." caption="Design persona created to frame user needs and product decisions; not presented as a validated interview participant." aspect="aspect-[2048/1194]" maxWidth="w-full max-w-[1060px] mx-auto"/>
   </div>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="03" label="The solution" title="Make protection part of the posting flow." description="The proposed experience introduces a screenshot-protection decision where the user is already preparing to share. A viewer-facing state explains that the image has protections, instead of silently changing familiar actions."/>
   <div className="mt-9">
    <Asset src="/safeshare/ui-flow-final.webp" title="Proposed screenshot-protection interaction flow" alt="Annotated concept sequence describing the screenshot-protection toggle, possible smart detection, and proposed protected-image viewer state." caption="Exploratory flow, not shipped functionality. Automatic detection, capture blocking, and real-time notifications shown in the artwork would require technical validation and may not be feasible across all platforms." aspect="aspect-[8/5]"/>
   </div>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="04" label="Design exploration" title="Where should screenshot protection live?" description="I compared a separate settings entry point with an inline toggle on the posting screen. Both offered a way to introduce protection, but placed different demands on the sharing experience."/>
   <div className="mt-10">
    <Asset src="/safeshare/design-exploration.webp" title="Side-by-side screenshot protection design explorations" alt="Two proposed new-post screens compare a separate settings entry point with a selected inline screenshot-protection toggle, with annotated advantages, trade-offs, and final design decision." aspect="aspect-[2048/1564]" caption="Exploratory UI directions and design rationale. No completed usability test or platform implementation is implied."/>
   </div>
   <div className="mt-8 grid md:grid-cols-[.9fr_1.1fr] gap-6 items-start">
    <div className="rounded-[18px] border border-[#DDE6F4] p-6">
     <p className="text-[#0072FC] text-[10px] font-bold uppercase tracking-[.2em]">Direction selected</p>
     <h3 className="mt-3 font-bold text-2xl tracking-tight">Inline toggle + Learn more</h3>
     <p className="mt-3 text-[#666] leading-relaxed">Keeping the control on the posting screen avoids an additional navigation step. An optional explanation offers more context when it's needed.</p>
    </div>
    <div className="rounded-[18px] bg-[#F3F7FD] p-6">
     <p className="text-[#0072FC] text-[10px] font-bold uppercase tracking-[.2em]">Trade-off</p>
     <p className="mt-3 text-[#45556B] leading-relaxed">The inline approach gives users less room to learn about an unfamiliar privacy feature than a dedicated settings screen. It's a design choice to investigate further, rather than a validated performance advantage.</p>
    </div>
   </div>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="05" label="Design decision" title="A faster path to an informed choice." description="I favored the inline toggle because it keeps a privacy decision within the familiar posting flow. A short “Learn more” entry provides context without forcing every person through a new screen."/>
   <div className="mt-8 grid md:grid-cols-2 gap-5">
    <div className="rounded-[18px] border border-[#C7DDFC] bg-[#F3F8FF] p-6">
     <p className="text-[#0072FC] text-xs uppercase font-bold tracking-widest">Selected direction</p>
     <p className="mt-3 text-[#172B4A] text-lg font-semibold">Inline toggle + optional explanation</p>
     <p className="mt-2 text-[#58667A] text-sm leading-relaxed">A design hypothesis that prioritizes discoverability and continuity.</p>
    </div>
    <div className="rounded-[18px] border border-[#E0E5EC] p-6">
     <p className="text-[#687788] text-xs uppercase font-bold tracking-widest">Still to validate</p>
     <p className="mt-3 text-[#172B4A] text-lg font-semibold">Expectations, feasibility, and trust</p>
     <p className="mt-2 text-[#58667A] text-sm leading-relaxed">People need to understand what protection does and does not guarantee.</p>
    </div>
   </div>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="06" label="Final UI explorations" title="From selecting a photo to seeing feedback." description="Five screens illustrate the proposed experience, from the author’s decision to the viewer-facing protection state and activity concepts."/>
   <div className="mt-9">
    <Asset src="/safeshare/final-uis.webp" title="Five final SafeShare UI concept screens" alt="Five mobile concept screens: selecting family photos, adding screenshot protection during posting, a protected Instagram-style feed, a viewer warning dialog, and a proposed activity screen." aspect="aspect-[2048/727]" maxWidth="w-full max-w-[1200px] mx-auto" caption="Final UI concept compositions, not production screenshots. Capture counts, attempted screenshot tracking, and related notifications are illustrative, not implemented or validated product behavior."/>
   </div>
   <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[#53667E] text-xs md:text-sm">
    {["01 · Choose photo","02 · Set protection","03 · Protected view","04 · Viewer guidance","05 · Activity concept"].map(step=><span key={step} className="whitespace-nowrap">{step}</span>)}
   </div>
  </section>

  <section className="mt-20 md:mt-24 grid lg:grid-cols-2 gap-10 md:gap-16 pt-12 border-t border-[#E2E2E2]">
   <div><SectionHeading index="07" label="My contribution" title="Bringing a concept to life."/></div>
   <div className="space-y-5 text-[#5C5C5C] leading-relaxed text-lg">
    <p>I designed the UI concepts and created the video presentation used to illustrate how screenshot protection might work within familiar social-sharing experiences.</p>
    <p>The broader project, including its problem framing and technical considerations, was a collaborative exploration. The designs communicated potential behavior; they were not evidence of a launched feature.</p>
    <p className="text-sm text-[#888]">This case study focuses on the approved UI concepts; a motion walkthrough may be added separately.</p>
   </div>
  </section>

  <section className="mt-20 md:mt-24">
   <SectionHeading index="08" label="Reflection" title="What I'd carry forward." description="The value of this exploration was making privacy decisions visible and understandable—not proving screenshot protection had been solved."/>
   <div className="grid md:grid-cols-3 gap-5 mt-9">
    <MiniCard num="01" title="Make the choice visible" body="People should encounter privacy controls at the moment the decision matters."/>
    <MiniCard num="02" title="Avoid false reassurance" body="Clear limits matter as much as confident messaging; no interface alone can promise universal capture prevention."/>
    <MiniCard num="03" title="Test before shipping" body="The next step would be to validate comprehension, interaction costs, and technical feasibility with the right teams."/>
   </div>
   <p className="mt-7 text-[#6D6D6D] text-sm">Status: explorations only. These visuals do not represent a released Meta feature, validated technical capability, or measured outcome.</p>
  </section>

  <div className="mt-24 pt-8 border-t border-[#DDD] flex flex-wrap items-center justify-between gap-6">
    <Link href="/projects" className="text-[#0072FC] font-semibold hover:underline">← All projects</Link>
    <Link href="/projects/meta-blueprint" className="text-[#0072FC] font-semibold hover:underline">Next: Meta Blueprint ↗</Link>
  </div>
 </article>;
}
