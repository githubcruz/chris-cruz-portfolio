export default function Hero() {
  return (
    <section className="relative min-h-screen px-7 md:px-20 pt-36 pb-20 flex flex-col justify-center">
      <div className="relative z-10 max-w-5xl">
        <p className="text-[#0072FC] uppercase tracking-[0.25em] font-bold text-xs mb-8 hero-entrance-label">
          Chris Cruz · Senior Visual & Product Designer
        </p>
        <h1 className="text-white text-[clamp(3.15rem,8.3vw,7.2rem)] tracking-[-0.075em] leading-[0.95] font-black mb-10 hero-entrance-title">
          Designing<br />what&apos;s <span className="text-[#0072FC]">next.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-2xl max-w-3xl leading-snug hero-entrance-lead">
          Making complex ideas feel simple, intuitive, and human.
        </p>
        <p className="text-white/50 mt-7 text-base max-w-xl leading-relaxed hero-entrance-desc">
          I'm a multidisciplinary designer with 6+ years at Meta, working across digital experiences, interaction design, and scalable visual systems. I connect product thinking with hands-on creative execution, from early exploration to production-ready design.
        </p>
        <a href="#work-section" className="inline-flex items-center gap-3 text-[#0072FC] uppercase tracking-[0.24em] font-semibold text-xs mt-14 hover:text-[#005ACC] transition-colors hero-entrance-cta">
          Explore selected work <span aria-hidden="true" className="hero-cta-arrow">↓</span>
        </a>
        <a href="/resume" className="inline-flex items-center gap-2 ml-0 sm:ml-8 mt-6 sm:mt-14 text-xs uppercase tracking-[0.2em] font-semibold text-[#0072FC] hover:underline underline-offset-8">View resume ↗</a>
      </div>
      <div aria-hidden="true" className="absolute right-[-10%] top-[20%] w-[min(65vw,700px)] h-[min(65vw,700px)] rounded-full blur-[100px] bg-[#0072FC]/10 pointer-events-none" />
    </section>
  );
}
