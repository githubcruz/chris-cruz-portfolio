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
     <figure className="contact-portrait relative mx-auto w-full max-w-[380px]">
      <div className="about-illustration-frame relative aspect-square overflow-hidden rounded-full border-[3px] border-[#0072FC] bg-white shadow-[0_14px_40px_rgba(0,114,252,.11)]" aria-label="Illustrated portrait of Chris Cruz">
       <span aria-hidden="true" className="about-illustration-wave absolute inset-0" />
       <Image
        src="/photo/chris-contact-illustration.png"
        alt="Black-and-white illustration of Chris Cruz holding a pen and making a thinking gesture"
        fill
        sizes="(max-width: 768px) 85vw, 380px"
        className="relative z-10 object-cover object-center"
        priority
       />
      </div>
      <figcaption className="mt-5 text-base font-bold text-[#111]">Chris Cruz <span className="text-sm font-normal text-[#858585]">— Visual &amp; Product Designer</span></figcaption>
     </figure>
    )}
   </div>
  </section>
 );
}