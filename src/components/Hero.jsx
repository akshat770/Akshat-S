import TypingText from './TypingText.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 blur-[120px]" aria-hidden>
        <div className="mx-auto h-full w-2/3 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20" />
      </div>
      <div className="mx-auto max-w-6xl px-4 grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-white/60">Hello, I am</p>
          <h1 className="mt-3 md:mt-4 text-5xl md:text-6xl font-bold leading-[1.15]">
            <TypingText
              words={["Akshat Singh", "Web Developer"]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseMs={1500}
            />
          </h1>

          <div className="mt-7 flex items-center justify-center md:justify-start gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:border-white/40">Contact Me</a>
          </div>
        </div>
        <div className="relative md:justify-self-end">
          <div className="mx-auto md:mx-0 aspect-square max-w-[420px] rounded-full border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
            <img src="public/akshat.jpg" alt="Akshat Singh" className="h-full w-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}


