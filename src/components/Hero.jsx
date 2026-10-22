export default function Hero() {
  return (
    <section className="relative min-h-screen px-7 md:px-20 pt-44 pb-24 flex flex-col justify-center">
      <div className="relative z-10 max-w-6xl">
        <p className="text-[#0072FC] uppercase tracking-[0.25em] font-bold text-xs mb-8">Senior Visual & Product Designer · UI/UX · Prototyping</p>
        <h1 className="text-white text-[clamp(4rem,12vw,10rem)] tracking-[-0.075em] leading-[0.9] font-black mb-10">
          Hey, I'm <span className="text-[#0072FC]">Chris.</span>
        </h1>
        <p className="text-white/80 text-xl md:text-3xl max-w-3xl leading-snug">
          Turning complex ideas into intuitive digital experiences.
        </p>
        <p className="text-white/50 mt-7 text-base max-w-xl leading-relaxed">
          I work across product design, prototyping, visual systems, and user-centered research — from early concepts to production-ready experiences.
        </p>
        <a href="#work-section" className="inline-flex items-center gap-3 text-[#0072FC] uppercase tracking-[0.24em] font-semibold text-xs mt-14 hover:text-white transition-colors">Explore selected work <span aria-hidden="true">↓</span></a>
      </div>
      <div aria-hidden="true" className="absolute right-[-10%] top-[20%] w-[min(65vw,700px)] h-[min(65vw,700px)] rounded-full blur-[100px] bg-[#0072FC]/10 pointer-events-none" />
    </section>
  );
}