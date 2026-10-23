import Link from "next/link";
import { Mail, Linkedin, FileText } from "lucide-react";
export default function Contact(){
 return <section id="contact-section" className="relative min-h-[65vh] px-7 md:px-20 py-28 md:py-36 flex flex-col justify-center">
  <p className="text-[#0072FC] uppercase tracking-[.4em] text-xs mb-8">Get in touch</p>
  <h2 className="text-white font-black tracking-tighter text-5xl md:text-8xl max-w-4xl leading-[.95]">Let's make something meaningful.</h2>
  <p className="text-white/60 mt-9 max-w-xl leading-relaxed">Exploring a product design opportunity, a creative collaboration, or a challenging idea? I'd love to connect.</p>
  <div className="flex flex-wrap gap-4 mt-9">
    <a href="mailto:chrissscruz@gmail.com?subject=Portfolio%20Inquiry" className="contact-primary inline-flex items-center gap-2 rounded-full bg-[#0072FC] px-6 py-3 text-white text-sm font-semibold hover:bg-[#005dcf] transition-colors">Email me · chrissscruz@gmail.com ↗</a>
    <a href="https://www.linkedin.com/in/cruzchris/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#0072FC] px-6 py-3 text-[#0072FC] text-sm font-semibold hover:bg-[#0072FC]/10 transition-colors"><Linkedin size={17} strokeWidth={2} aria-hidden="true" /> LinkedIn ↗</a>
    <Link href="/resume" className="inline-flex items-center gap-2 rounded-full border border-[#0072FC] px-6 py-3 text-[#0072FC] text-sm font-semibold hover:bg-[#0072FC]/10 transition-colors"><FileText size={17} strokeWidth={2} aria-hidden="true" /> Resume ↗</Link>
  </div>
 </section>
}