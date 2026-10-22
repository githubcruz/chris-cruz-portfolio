export default function Hero() {
  return (
    <section className="relative min-h-screen px-7 md:px-20 pt-44 pb-24 flex flex-col justify-center">
      <div className="relative z-10 max-w-6xl">
        <p className="text-[#0072FC] uppercase tracking-[0.25em] font-bold text-xs mb-8">
          Chris Cruz · Senior Visual & Product Designer
        </p>
        <h1 className="text-white text-[clamp(3.6rem,10vw,9rem)] tracking-[-0.075em] leading-[0.95] font-black mb-10">
          Designing<br />what&apos;s <span className="text-[#0072FC]">next.</span>
        </h1>
        <p className="text-white/80 text-xl md:text-3xl max-w-3xl leading-snug">
          Turning complex ideas into intuitive digital experiences.
        </p>
        <p className="text-white/50 mt-7 text-base max-w-xl leading-relaxed">
          I bring product thinking, user-centered research, prototyping, and scalable visual systems together — shaping thoughtful experiences from early concepts to production-ready design.
        </p>
        <a href="#work-section" className="inline-flex items-center gap-3 text-[#0072FC] uppercase tracking-[0.24em] font-semibold text-xs mt-14 hover:text-white transition-colors">
          Explore selected work <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div aria-hidden="true" className="absolute right-[-10%] top-[20%] w-[min(65vw,700px)] h-[min(65vw,700px)] rounded-full blur-[100px] bg-[#0072FC]/10 pointer-events-none" />
    </section>
  );
}
