"use client";
import Link from "next/link";
export default function Contact(){
 return <section id="contact-section" className="relative min-h-[65vh] px-7 md:px-20 py-36 flex flex-col justify-center">
  <p className="text-[#0072FC] uppercase tracking-[.4em] text-xs mb-8">Get in touch</p>
  <h2 className="text-white font-black tracking-tighter text-5xl md:text-8xl max-w-4xl leading-[.95]">Let's make something meaningful.</h2>
  <p className="text-white/60 mt-9 max-w-xl">Interested in collaborating or discussing a visual design opportunity? Connect with me on GitHub, or reach out through the contact information in my resume.</p>
  <div className="flex gap-6 mt-9">
    <a href="https://github.com/githubcruz" target="_blank" rel="noopener noreferrer" className="text-[#0072FC] uppercase tracking-[.2em] text-xs">GitHub ↗</a>
    <Link href="/about" className="text-white/70 uppercase tracking-[.2em] text-xs">About me ↗</Link>
  </div>
 </section>
}