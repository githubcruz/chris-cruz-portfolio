export default function Hero() {
  return (
    <section className="relative min-h-[76svh] px-7 md:px-20 pt-40 md:pt-44 pb-20 md:pb-24 flex flex-col justify-center">
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <p className="text-[#0072FC] uppercase tracking-[0.20em] font-bold text-xs mb-6 hero-entrance-label">
          Chris Cruz · Senior Visual & Product Designer
        </p>
        <h1 className="text-white text-[clamp(2.8rem,6.2vw,5.9rem)] tracking-[-0.075em] leading-[0.95] font-black mb-7 hero-entrance-title">
          Designing digital<br />products that <span className="text-[#0072FC]">scale.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-[1.45rem] max-w-[690px] leading-snug hero-entrance-lead">
          Making complex systems feel simple, intuitive, and human.
        </p>
        <p className="text-white/50 mt-5 text-sm md:text-base max-w-[620px] leading-relaxed hero-entrance-desc">
          I&rsquo;m a Senior Visual &amp; Product Designer with 6+ years of experience at Meta. I partner with cross-functional teams to bring product strategy to life—guiding projects from raw, early-stage exploration into polished, production-ready experiences used by millions.
        </p>
        <a href="#work-section" className="inline-flex items-center gap-3 text-[#0072FC] uppercase tracking-[0.24em] font-semibold text-xs mt-9 hover:text-[#005ACC] transition-colors hero-entrance-cta">
          Explore selected work <span aria-hidden="true" className="hero-cta-arrow">↓</span>
        </a>
        <a href="/resume" className="inline-flex items-center gap-2 ml-0 sm:ml-8 mt-6 sm:mt-9 text-xs uppercase tracking-[0.2em] font-semibold text-[#0072FC] hover:underline underline-offset-8">View resume ↗</a>
      </div>
      <div aria-hidden="true" className="absolute right-[-10%] top-[20%] w-[min(55vw,600px)] h-[min(55vw,600px)] rounded-full blur-[100px] bg-[#0072FC]/10 pointer-events-none" />
    </section>
  );
}
