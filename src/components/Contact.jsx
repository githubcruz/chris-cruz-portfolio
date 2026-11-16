import Link from "next/link";
import Image from "next/image";
import { LuMail, LuLinkedin, LuFileText } from "react-icons/lu";

export default function Contact({ standalone = false }) {
 return (
  <section
   id="contact-section"
   aria-labelledby="contact-heading"
   className={`relative isolate overflow-hidden px-7 md:px-20 ${standalone ? "min-h-[85svh] pt-36 pb-24 md:pt-44 md:pb-28" : "min-h-[48vh] py-16 md:py-20"}`}
  >
   <div className={`mx-auto w-full max-w-[1180px] ${standalone ? "grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(330px,.75fr)] lg:gap-20" : ""}`}>
    <div className="relative z-10">
     <p className="mb-7 text-xs font-bold uppercase tracking-[.3em] text-[#0072FC]">Get in touch</p>
     <h2 id="contact-heading" className="max-w-[790px] text-[clamp(2.8rem,5.6vw,5.3rem)] font-black leading-[.98] tracking-[-.065em] text-[#111]">
      Let's make something <span className="text-[#0072FC]">meaningful.</span>
     </h2>
     <p className="mt-6 max-w-[560px] text-base leading-[1.7] text-[#5E6875] md:text-lg">
      Exploring a product design opportunity, a creative collaboration, or an ambitious idea? I'd love to connect.
     </p>
     <div className="mt-9 flex flex-wrap gap-3">
      <a href="mailto:chrissscruz@gmail.com?subject=Portfolio%20Inquiry" className="portfolio-wipe-button contact-primary inline-flex items-center justify-center rounded-full bg-[#0072FC] px-6 py-3 text-sm font-semibold text-white">
       <span className="portfolio-wipe-content"><LuMail size={17} aria-hidden="true" /> Email me <span aria-hidden="true">↗</span></span>
      </a>
      <a href="https://www.linkedin.com/in/cruzchris/" target="_blank" rel="noopener noreferrer" className="portfolio-wipe-button inline-flex items-center justify-center rounded-full border border-[#0072FC] px-6 py-3 text-sm font-semibold text-[#0072FC]">
       <span className="portfolio-wipe-content"><LuLinkedin size={17} aria-hidden="true" /> LinkedIn <span aria-hidden="true">↗</span></span>
      </a>
      <Link href="/resume" className="portfolio-wipe-button inline-flex items-center justify-center rounded-full border border-[#0072FC] px-6 py-3 text-sm font-semibold text-[#0072FC]">
       <span className="portfolio-wipe-content"><LuFileText size={17} aria-hidden="true" /> Resume <span aria-hidden="true">↗</span></span>
      </Link>
     </div>
     {standalone && <p className="mt-8 text-xs font-medium uppercase tracking-[.16em] text-[#86919C]">Visual design · Product thinking · Creative systems</p>}
    </div>
    {standalone && (
     <div className="relative mx-auto w-full max-w-[430px]">
      <div aria-hidden="true" className="absolute -inset-4 rotate-[-3deg] rounded-[40px] border border-[#C8DFFF] bg-[#EAF3FF]/70" />
      <div aria-hidden="true" className="absolute -right-8 -top-9 size-36 rounded-full bg-[#0072FC]/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[30px] border border-[#D7E5F7] bg-white p-6 shadow-[0_22px_70px_rgba(20,62,108,.09)] md:p-8">
       <div className="relative aspect-square overflow-hidden rounded-[22px] bg-white">
        <Image
         src="/photo/chris-illustrated-cutout.png"
         alt="Illustrated portrait of Chris Cruz"
         fill
         sizes="(max-width: 1023px) 80vw, 390px"
         className="object-contain"
         priority
        />
       </div>
       <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#E6EDF5] pt-5">
        <div>
         <p className="text-base font-bold tracking-tight text-[#172A3C]">Chris Cruz</p>
         <p className="mt-1 text-xs text-[#657487]">Visual &amp; Product Designer</p>
        </div>
        <span aria-hidden="true" className="contact-portrait-arrow flex size-9 items-center justify-center rounded-full bg-[#0072FC] text-lg text-white">↗</span>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
}