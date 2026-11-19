export default function Hero() {
  return (
    <section className="relative min-h-[74svh] px-6 sm:px-7 md:px-20 pt-32 sm:pt-36 md:pt-44 pb-14 sm:pb-20 md:pb-24 flex flex-col justify-center">
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <p className="portfolio-eyebrow text-[#0072FC] mb-5 sm:mb-6 hero-entrance-label">
          Chris Cruz · Senior Visual & Product Designer
        </p>
        <h1 className="portfolio-page-title text-white font-bold mb-5 sm:mb-7 hero-entrance-title">
          Designing digital<br />products that <span className="text-[#0072FC]">scale.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-[1.45rem] max-w-[690px] leading-snug hero-entrance-lead">
          Making complex systems feel simple, intuitive, and human.
        </p>
        <p className="text-white/50 mt-5 text-sm md:text-base max-w-[620px] leading-relaxed hero-entrance-desc">
          I&rsquo;m a Senior Visual &amp; Product Designer with 6+ years of experience at Meta. I partner with cross-functional teams to turn product strategy into thoughtful digital experiences—from early exploration to polished, production-ready design.
        </p>
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-x-8 gap-y-1">
          <a href="#work-section" className="inline-flex min-h-11 items-center gap-3 text-[#0072FC] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-xs hover:text-[#005ACC] transition-colors hero-entrance-cta focus-visible:underline underline-offset-8">
            Explore selected work <span aria-hidden="true" className="hero-cta-arrow">↓</span>
          </a>
          <a href="/resume" className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-[#0072FC] hover:underline focus-visible:underline underline-offset-8">View resume ↗</a>
        </div>
      </div>
      <div aria-hidden="true" className="absolute right-[-10%] top-[20%] w-[min(55vw,600px)] h-[min(55vw,600px)] rounded-full blur-[100px] bg-[#0072FC]/10 pointer-events-none" />
    </section>
  );
}
