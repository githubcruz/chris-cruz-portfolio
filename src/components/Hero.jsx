export default function Hero() {
  return (
    <section className="relative min-h-[73svh] md:min-h-[78svh] px-7 md:px-20 pt-36 md:pt-32 pb-12 md:pb-14 flex flex-col justify-center">
      <div className="relative z-10 max-w-[960px]">
        <p className="text-[#0072FC] uppercase tracking-[0.25em] font-bold text-[11px] mb-6 hero-entrance-label">
          Chris Cruz · Senior Visual & Product Designer
        </p>
        <h1 className="text-white text-[clamp(3.05rem,7.4vw,6.35rem)] tracking-[-0.07em] leading-[.98] font-black mb-7 hero-entrance-title">
          Designing<br />what&apos;s <span className="text-[#0072FC]">next.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-[1.55rem] max-w-[680px] leading-snug hero-entrance-lead">
          Making complex ideas feel simple, intuitive, and human.
        </p>
        <p className="text-white/50 mt-5 text-sm md:text-base max-w-[630px] leading-relaxed hero-entrance-desc">
          With 6+ years at Meta, I bring product thinking, scalable visual systems, and hands-on creative execution together—from early concepts to polished digital experiences.
        </p>
        <a href="#work-section" className="inline-flex items-center gap-3 text-[#0072FC] uppercase tracking-[0.24em] font-semibold text-xs mt-9 hover:text-[#005ACC] transition-colors hero-entrance-cta">
          Explore selected work <span aria-hidden="true" className="hero-cta-arrow">↓</span>
        </a>
        <a href="/resume" className="inline-flex items-center gap-2 ml-0 sm:ml-8 mt-6 sm:mt-9 text-xs uppercase tracking-[0.2em] font-semibold text-[#0072FC] hover:underline underline-offset-8">View resume ↗</a>
      </div>
      <div className="relative mt-12 pt-5 border-t border-black/10 flex flex-wrap gap-x-7 gap-y-2 text-[11px] text-[#777] tracking-[.06em] hero-entrance-desc" aria-label="Areas of expertise"><span>Product & interaction</span><span>Design systems</span><span>Visual & motion</span></div>
    </section>
  );
}
