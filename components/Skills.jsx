import { skillGroups, techCount } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" data-snap className="relative flex items-center overflow-hidden py-24 lg:min-h-[100svh]" style={{ background: 'linear-gradient(180deg,#05040A,#0F172A 140%)' }}>
      <div className="bg-cybergrid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-6 top-6 select-none font-heading text-[18rem] font-bold leading-none text-violet/[.05]" aria-hidden="true">技</span>

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12">
        <h2 data-reveal="words" className="font-heading text-4xl font-bold text-white md:text-6xl">Skills &amp; Tech Stack</h2>
        <p data-reveal="fade" className="mt-2 max-w-xl text-slate-400">Teknologi yang saya pakai sehari-hari untuk membangun panel, API, dan website.</p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div className="mx-auto text-center lg:mx-0 lg:text-left">
            <div className="relative mx-auto flex aspect-square w-56 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#A78BFA,#8B5CF6_50%,#4C1D95)] shadow-[0_0_80px_rgba(139,92,246,.5)] md:w-72 lg:mx-0">
              <span className="spin-slow absolute -inset-3 rounded-full border border-dashed border-violet/60" aria-hidden="true" />
              <div>
                <p className="font-heading text-6xl font-bold leading-none text-white md:text-7xl">{techCount}</p>
                <p className="mt-1 font-heading text-xs font-bold tracking-[.3em] text-white/90">TEKNOLOGI</p>
              </div>
            </div>
            <p data-reveal="fade" className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-slate-400 lg:mx-0">Dari antarmuka sampai database dan API, semuanya saya kerjakan sendiri dan dibantu AI untuk mempercepat riset dan debugging.</p>
          </div>

          <div data-stagger className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.id} className={`card p-5 hover:!translate-y-0 ${g.id === 'frontend' ? 'sm:col-span-2' : ''}`}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-sm font-bold tracking-widest text-violet-soft">{g.label.toUpperCase()}</h3>
                  <span className="text-xs text-slate-500">{g.items.length} item</span>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {g.items.map((it) => (
                    <li key={it.name} className="group flex w-[calc(50%-.375rem)] items-center gap-3 rounded-xl border border-violet/15 bg-white/[.03] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-violet hover:bg-violet/10 hover:shadow-neon sm:w-auto sm:min-w-[8.5rem]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/20 font-heading text-[11px] font-bold text-violet-soft transition group-hover:bg-violet group-hover:text-white">{it.mark}</span>
                      <span className="text-sm font-medium text-slate-200">{it.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
