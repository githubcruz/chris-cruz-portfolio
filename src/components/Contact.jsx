"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMail, LuLinkedin, LuFileText, LuCopy, LuCheck } from "react-icons/lu";

const EMAIL = "chrissscruz@gmail.com";

export default function Contact({ standalone = false }) {
 const [copyState, setCopyState] = useState("");
 async function copyEmail() {
  try {
   await navigator.clipboard.writeText(EMAIL);
   setCopyState("Copied!");
  } catch {
   setCopyState("Select the address to copy");
  }
 }

 return (
  <section
   id="contact-section"
   aria-labelledby="contact-heading"
   className={`relative isolate overflow-hidden bg-white px-7 md:px-20 ${standalone
    ? "portfolio-page-enter min-h-[85svh] pt-36 pb-24 md:pt-40 md:pb-28"
    : "min-h-[48vh] py-16 md:py-20"}`}
  >
   <div className={`mx-auto w-full max-w-[1180px] ${standalone ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.75fr)] lg:gap-16" : ""}`}>
    <div className="relative z-10">
     <p className="portfolio-eyebrow portfolio-enter-item mb-6 text-[#0072FC]">Get in touch</p>
     <h2 id="contact-heading" className="portfolio-page-title portfolio-enter-item max-w-[790px] font-black text-[#111]" style={{"--enter-delay":"90ms"}}>
      Let's make something <span className="text-[#0072FC]">meaningful.</span>
     </h2>
     <p className="portfolio-enter-item mt-6 max-w-[560px] text-base leading-[1.75] text-[#5E6875] md:text-[17px]" style={{"--enter-delay":"170ms"}}>
      Exploring a visual or product design opportunity, a collaboration, or an ambitious idea? I'd love to connect.
     </p>
     <div className="portfolio-enter-item mt-8 flex flex-wrap gap-3" style={{"--enter-delay":"250ms"}}>
      <a href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`} className="portfolio-wipe-button contact-primary inline-flex min-h-11 items-center justify-center rounded-full bg-[#0072FC] px-6 py-3 text-sm font-semibold text-white">
       <span className="portfolio-wipe-content"><LuMail size={17} aria-hidden="true"/> Email me <span aria-hidden="true">↗</span></span>
      </a>
      <a href="https://www.linkedin.com/in/cruzchris/" target="_blank" rel="noopener noreferrer" className="portfolio-wipe-button inline-flex min-h-11 items-center justify-center rounded-full border border-[#0072FC] px-6 py-3 text-sm font-semibold text-[#0072FC]">
       <span className="portfolio-wipe-content"><LuLinkedin size={17} aria-hidden="true"/> LinkedIn <span aria-hidden="true">↗</span></span>
      </a>
      <Link href="/resume" className="portfolio-wipe-button inline-flex min-h-11 items-center justify-center rounded-full border border-[#0072FC] px-6 py-3 text-sm font-semibold text-[#0072FC]">
       <span className="portfolio-wipe-content"><LuFileText size={17} aria-hidden="true"/> Resume <span aria-hidden="true">↗</span></span>
      </Link>
     </div>
     <div className="portfolio-enter-item mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[#E8EDF3] pt-5" style={{"--enter-delay":"330ms"}}>
      <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#7D8995]">Prefer email?</span>
      <a href={`mailto:${EMAIL}`} className="select-text break-all text-sm font-semibold text-[#24384C] underline decoration-[#B9C9D9] underline-offset-4 hover:text-[#0072FC]">{EMAIL}</a>
      <button type="button" onClick={copyEmail} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D8E3ED] bg-white px-4 py-2.5 text-xs font-semibold text-[#0072FC] transition-colors hover:border-[#0072FC] hover:bg-[#F3F8FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072FC]" aria-label="Copy email address">
       {copyState === "Copied!" ? <LuCheck size={14} aria-hidden="true"/> : <LuCopy size={14} aria-hidden="true"/>}
       {copyState === "Copied!" ? "Copied!" : "Copy"}
      </button>
      <span role="status" aria-live="polite" className="text-xs text-[#6F8190]">{copyState === "Copied!" ? "" : copyState}</span>
     </div>
     {standalone && <p className="portfolio-enter-item mt-6 text-xs font-medium uppercase tracking-[.13em] leading-[1.7] text-[#86919C]" style={{"--enter-delay":"400ms"}}>Visual design · Product thinking · Creative systems</p>}
    </div>
    {standalone && (
     <figure className="portfolio-enter-portrait contact-portrait relative mx-auto w-full max-w-[320px] md:max-w-[370px]">
      <div className="about-illustration-frame relative aspect-square overflow-hidden rounded-full border-[3px] border-[#0072FC] bg-white shadow-[0_14px_40px_rgba(0,114,252,.11)]" aria-label="Illustrated portrait of Chris Cruz">
       <span aria-hidden="true" className="about-illustration-wave absolute inset-0" />
       <Image src="/photo/chris-contact-illustration.png" alt="Black-and-white illustration of Chris Cruz holding a pen and making a thinking gesture" fill sizes="(max-width: 768px) 85vw, 370px" className="relative z-10 object-cover object-center" priority/>
      </div>
      <figcaption className="mt-5 text-base font-bold text-[#111]">Chris Cruz <span className="text-sm font-normal text-[#858585]">— Senior Visual &amp; Product Designer</span></figcaption>
     </figure>
    )}
   </div>
  </section>
 );
}
