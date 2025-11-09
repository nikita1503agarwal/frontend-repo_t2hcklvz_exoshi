import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/30 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance • 2025
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Building delightful tech experiences that feel alive
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-700">
              I’m a full‑stack engineer crafting modern interfaces, scalable APIs, and playful product interactions. Let’s create something people love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-slate-800 backdrop-blur hover:bg-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
