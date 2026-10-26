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
    <h2 className="mt-4 text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.03] font-black tracking-[-.055em]">{title}</h2>
    {description && <p className="mt-5 text-[#5D5D5D] text-lg leading-relaxed">{description}</p>}
  </div>;
}
/* The image frames have a graceful fallback until the original approved assets are uploaded. */
function Asset({src,alt,title,caption,aspect="aspect-[8/5]",maxWidth=""}) {
  const [available,setAvailable]=useState(true);
  return <figure className={maxWidth}>
    <div className={"relative flex items-center justify-center overflow-hidden rounded-[20px] border border-[#E6EAF0] bg-[#FAFBFD] " + aspect}>
      {available ? <Image src={src} alt={alt} fill sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 1300px" className="object-contain" unoptimized onError={()=>setAvailable(false)}/> :
        <div className="px-7 max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6E5FD] bg-[#EBF3FF] text-[#0072FC] text-2xl">↗</div>
          <p className="text-[#172B4A] font-semibold text-lg">{title}</p>
          <p className="mt-3 text-[#6A778A] text-sm leading-relaxed">Approved design image ready to be added to this section.</p>
        </div>}
    </div>
    {caption && <figcaption className="mt-3 text-[#7A7A7A] text-xs leading-relaxed">{caption}</figcaption>}
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
 return <article className="mx-auto max-w-[1500px] px-7 md:px-20 pt-36 md:pt-44 pb-28 text-[#111]">
  <Link href="/projects" className="text-[#0072FC] uppercase tracking-[.2em] text-xs font-bold hover:underline underline-offset-4">← All projects</Link>
  <header className="mt-14 max-w-6xl">
   <Eyebrow>SafeShare / Meta concept / UI design + motion</Eyebrow>
   <h1 className="mt-5 text-[clamp(3.3rem,7.5vw,8rem)] font-black tracking-[-.075em] leading-[.96]">Screenshot<br/><span className="text-[#0072FC]">Protection.</span></h1>
   <p className="mt-7 max-w-4xl text-[clamp(1.5rem,3vw,2.7rem)] leading-[1.15] tracking-[-.03em] font-medium">Helping parents share family moments with greater confidence.</p>
   <p className="mt-6 max-w-3xl text-[#636363] text-lg leading-relaxed">SafeShare explored how a familiar mobile posting flow could introduce clearer image-protection controls and explain the experience to people viewing protected content. I designed UI concepts and produced a concept video to help communicate the idea.</p>
  </header>

  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 border-y border-[#DDD] py-7">
   {[["MY ROLE","UI design · Concept video"],["PROJECT","SafeShare / Screenshot Protection"],["PLATFORM","Mobile · Social sharing"],["STATUS","Exploratory concept · Not launched"]].map(([k,v])=><div key={k}><p className="text-[#0072FC] text-[10px] font-bold tracking-[.16em]">{k}</p><p className="mt-2 text-sm leading-relaxed text-[#343434]">{v}</p></div>)}
  </div>

  <section className="mt-16 md:mt-24">
    <Asset src="/safeshare/hero.webp" title="Screenshot Protection — proposed posting controls" alt="Two mobile new-post screens showing a screenshot protection switch and an opt-in bottom sheet." caption="UI concept: visible protection control and an optional explanation sheet. Proposed interaction, not a launched feature." aspect="aspect-[8/5]"/>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="01" label="The challenge" title="Sharing a photo shouldn't mean losing control." description="Parents may want to share milestone photos with trusted family, but worry those images could be saved, captured, or redistributed beyond their intended audience."/>
   <div className="grid md:grid-cols-3 gap-4 mt-9">
    <MiniCard num="01" title="Beyond the intended audience" body="A shared photo can move outside a private conversation or chosen group."/>
    <MiniCard num="02" title="Limited visibility" body="Senders may not know when images are saved or circulated."/>
    <MiniCard num="03" title="Controls at the right moment" body="Protection needs to be understandable before people decide to share."/>
   </div>
   <div className="mt-10">
    <Asset src="/safeshare/problem.webp" title="SafeShare problem statement and visual exploration" alt="Problem statement over a side-by-side family-photo concept, showing an illustrative attempted-capture notification." caption="Exploration of the family-sharing problem and proposed user-facing notification treatment." aspect="aspect-[12/5]"/>
   </div>
   <p className="mt-5 text-[#0072FC] text-xl font-semibold italic">“Moments shared. Privacy protected.”</p>
   <p className="text-[#888] text-xs mt-2">Concept tagline — not a user-research quotation or proven outcome.</p>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="02" label="Primary user" title="Designing for parents who value privacy." description="Alex Ruiz is a working design persona representing a parent who wants to share important moments while being more intentional about access and redistribution."/>
   <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] gap-9 lg:gap-12 items-start mt-9">
    <div className="rounded-[22px] overflow-hidden bg-[#FAFBFD] border border-[#E5EAF0]">
     <Asset src="/safeshare/persona.webp" title="Alex Ruiz — full persona" alt="Alex Ruiz design persona containing family context, goals, frustrations, technology needs, and a representative quote." aspect="aspect-[3/5]"/>
    </div>
    <div className="space-y-7 lg:pt-5">
      <div><h3 className="text-lg font-bold">Goals</h3><p className="mt-2 text-[#646464] leading-relaxed">Share family milestones with trusted people, keep children's images private, and control how content travels.</p></div>
      <div className="border-t border-[#E4E4E4] pt-6"><h3 className="text-lg font-bold">Frustrations</h3><p className="mt-2 text-[#646464] leading-relaxed">Easy screenshots, uncertain re-sharing, and privacy boundaries that relatives may not recognize.</p></div>
      <div className="border-t border-[#E4E4E4] pt-6"><h3 className="text-lg font-bold">Needs</h3><p className="mt-2 text-[#646464] leading-relaxed">A clear protection decision while posting, understandable feedback, and controls that don't overwhelm less technical family members.</p></div>
      <div className="rounded-2xl bg-[#EDF4FF] p-6"><p className="text-[#0072FC] text-xs uppercase font-bold tracking-widest">Design implication</p><p className="mt-3 text-[#253A56] font-medium leading-relaxed">Make protection discoverable at the moment of sharing, with clear explanations rather than security promises the technology may not support.</p></div>
      <p className="text-[#848484] text-xs">Persona used for concept framing; not presented as a validated research participant.</p>
    </div>
   </div>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="03" label="The solution" title="Make protection part of the posting flow." description="The proposed experience introduces a screenshot-protection decision where the user is already preparing to share. A viewer-facing state explains that the image has protections, instead of silently changing familiar actions."/>
   <div className="grid sm:grid-cols-3 gap-4 mt-10">
    <MiniCard num="01" title="Contextual prompt" body="Explore an optional prompt when a post may contain sensitive family content. Automated detection remains a proposal, not an implemented capability."/>
    <MiniCard num="02" title="Visible control" body="Give the author an understandable way to choose protection before publishing."/>
    <MiniCard num="03" title="Explain the response" body="Illustrate how someone viewing the image could learn why certain actions are restricted, if technically supported."/>
   </div>
   <div className="mt-10">
    <Asset src="/safeshare/ui-flow.webp" title="Proposed screenshot-protection interaction flow" alt="Annotated UI comparison between a new-post screenshot protection toggle and a resulting protected image state." caption="UI concepts illustrating an opt-in control and a proposed viewer feedback state. Actual capture-blocking behavior and notifications would require technical validation." aspect="aspect-[8/5]"/>
   </div>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="04" label="Design exploration" title="How visible should protection be?" description="Two plausible interface directions address a familiar product-design trade-off: make a new control easy to find, or reduce visual clutter by integrating it into existing sharing settings."/>
   <div className="grid md:grid-cols-2 gap-5 mt-9">
    <div className="border border-[#DCE5F3] bg-[#F8FAFE] rounded-[22px] p-7">
      <span className="text-[#0072FC] text-xs font-bold tracking-widest">DIRECTION A</span>
      <h3 className="mt-4 text-2xl font-bold">Dedicated protection toggle</h3>
      <p className="mt-3 text-[#5E6774] leading-relaxed">Places protection directly in the new-post interface.</p>
      <div className="mt-7 rounded-xl bg-white border border-[#E3E8F1] p-4 flex items-center justify-between text-sm"><span>Screenshot protection</span><span className="bg-[#0072FC] text-white rounded-full text-xs px-3 py-1">On</span></div>
      <p className="mt-5 text-[#444] text-sm"><strong>Advantage:</strong> High discoverability</p>
      <p className="mt-2 text-[#444] text-sm"><strong>Trade-off:</strong> Adds another decision to the posting flow</p>
      <p className="text-[#8A8A8A] text-xs mt-5">Simple schematic; full UI variation to be added</p>
    </div>
    <div className="border border-[#DCE5F3] bg-[#F8FAFE] rounded-[22px] p-7">
      <span className="text-[#0072FC] text-xs font-bold tracking-widest">DIRECTION B</span>
      <h3 className="mt-4 text-2xl font-bold">Within existing controls</h3>
      <p className="mt-3 text-[#5E6774] leading-relaxed">Groups protection with audience and other sharing options.</p>
      <div className="mt-7 rounded-xl bg-white border border-[#E3E8F1] p-4 flex items-center justify-between text-sm"><span>Audience &amp; protection</span><span className="text-[#0072FC] font-bold">›</span></div>
      <p className="mt-5 text-[#444] text-sm"><strong>Advantage:</strong> Familiar organization and less visual clutter</p>
      <p className="mt-2 text-[#444] text-sm"><strong>Trade-off:</strong> May be harder to discover</p>
      <p className="text-[#8A8A8A] text-xs mt-5">Simple schematic; full UI variation to be added</p>
    </div>
   </div>
   <p className="text-[#777] mt-5 text-sm max-w-4xl">These are design trade-offs, not findings from a completed usability study. The next iteration will show the original alternatives at equal size and explain the direction the team evaluated.</p>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="05" label="Design rationale" title="Why explore this approach?" description="The interaction draws on patterns users already recognize, while acknowledging the need to explain what protection can and cannot do."/>
   <div className="grid md:grid-cols-2 gap-4 mt-9">
    <MiniCard num="01" title="Familiar first" body="Introduce the feature within a known posting experience rather than requiring an unfamiliar workflow."/>
    <MiniCard num="02" title="Control before sharing" body="Make the privacy choice visible before the photo is published."/>
    <MiniCard num="03" title="Transparent feedback" body="Show proposed protected states and explain the limits of screen-capture restrictions."/>
    <MiniCard num="04" title="Low-friction decision" body="Keep the flow focused, with progressive disclosure for more detailed settings."/>
   </div>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="06" label="Key screens" title="From concept to interaction." description="These are the next assets to complete: close-up screen exports, a small set of actual design iterations, and clear annotations for each decision."/>
   <div className="grid md:grid-cols-3 gap-5 mt-9">
     {[["01","Protection enabled","New-post screen with the control visible"],["02","Explanation sheet","Optional prompt explaining the proposed setting"],["03","Viewer feedback","Protected-state messaging and technical caveats"]].map(([num,title,desc])=><div key={num} className="bg-[#F2F6FC] border border-[#DDE7F4] rounded-2xl p-7 min-h-[260px] flex flex-col justify-between"><span className="text-[#0072FC] font-bold text-xs">{num} / 03</span><div><h3 className="font-bold text-xl">{title}</h3><p className="text-[#66758A] text-sm mt-3">{desc}</p><p className="text-[#0072FC] text-[10px] uppercase tracking-widest mt-6">Individual UI export needed</p></div></div>)}
   </div>
  </section>

  <section className="mt-24 md:mt-32 grid lg:grid-cols-2 gap-10 md:gap-16 pt-12 border-t border-[#E2E2E2]">
   <div><SectionHeading index="07" label="My contribution" title="Bringing a concept to life."/></div>
   <div className="space-y-5 text-[#5C5C5C] leading-relaxed text-lg">
    <p>I designed the UI concepts and created the video presentation used to illustrate how screenshot protection might work within familiar social-sharing experiences.</p>
    <p>The broader project, including its problem framing and technical considerations, was a collaborative exploration. The designs communicated potential behavior; they were not evidence of a launched feature.</p>
    <p className="text-sm text-[#888]">The concept video and supporting storyboard will be added here when the approved media asset is ready.</p>
   </div>
  </section>

  <section className="mt-16 md:mt-24">
   <Eyebrow>Motion / product storytelling</Eyebrow>
   <div className="mt-5 relative aspect-video overflow-hidden rounded-[24px] bg-[#101827] text-white flex flex-col items-center justify-center text-center px-8 border border-[#263246]">
    <span aria-hidden="true" className="flex items-center justify-center w-16 h-16 rounded-full border border-white/30 bg-[#0072FC]/80 text-2xl">▶</span>
    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-6">SafeShare concept video</h3>
    <p className="mt-3 max-w-xl text-white/60 text-sm">An approved motion walkthrough will live here — showing the proposed interaction from posting to viewer feedback.</p>
    <span className="mt-6 text-xs uppercase tracking-[.2em] text-[#80B7FF]">Video export to be added</span>
   </div>
  </section>

  <section className="mt-24 md:mt-32">
   <SectionHeading index="08" label="Reflection & next steps" title="What this exploration surfaced."/>
   <div className="grid md:grid-cols-3 gap-5 mt-9">
    <MiniCard num="01" title="Discoverability matters" body="Where a setting lives changes whether people notice it during a routine task."/>
    <MiniCard num="02" title="Trust requires precision" body="Capture prevention and detection depend on platform capabilities. Product copy must not promise universal protection."/>
    <MiniCard num="03" title="Motion helps explain behavior" body="Showing an interaction in context can make an early concept easier to discuss and refine with collaborators."/>
   </div>
   <p className="mt-7 text-[#6D6D6D] text-sm">Concept stage: No launch metrics or validated performance claims are presented.</p>
  </section>

  <div className="mt-24 pt-8 border-t border-[#DDD] flex flex-wrap items-center justify-between gap-6">
    <Link href="/projects" className="text-[#0072FC] font-semibold hover:underline">← All projects</Link>
    <Link href="/projects/meta-blueprint" className="text-[#0072FC] font-semibold hover:underline">Next: Meta Blueprint ↗</Link>
  </div>
 </article>;
}
