import Visual from './Visual';
import { Icon } from './Icons';
import { reasons, site } from '@/lib/data';

export default function WhyMe() {
  return (
    <section id="why" className="bg-mist py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span data-rv="0" className="mb-4 block h-1 w-12 bg-brand" />
          <h2 data-rv="60" className="font-heading text-3xl font-bold leading-tight text-ink md:text-4xl">Kenapa bisnis memilih bekerja dengan {site.name.split(' ')[0]}</h2>
          <p data-rv="120" className="mt-4 max-w-lg text-slate-500">Saya fokus pada hasil yang bisa langsung dipakai: cepat dimuat, mudah dirawat, dan jelas biayanya.</p>
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.title} data-rv={180 + i * 70} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon name={r.icon} /></span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-rv="100" className="relative mx-auto w-full max-w-md">
          <span className="absolute -right-4 -top-4 h-full w-full rounded-[1.75rem] border-2 border-brand" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_70px_-30px_rgba(10,14,26,.6)]">
            <Visual kind="profile" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
