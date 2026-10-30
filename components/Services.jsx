import TriangleArt from './TriangleArt';
import { Icon } from './Icons';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="on-dark bg-diamond-dark relative overflow-hidden bg-night py-20 lg:py-24">
      <TriangleArt theme="dark" className="pointer-events-none absolute -bottom-6 -right-6 hidden w-56 md:block lg:w-72" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div data-rv="0" className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block h-1 w-12 bg-brand" />
            <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight text-white md:text-4xl">Layanan digital untuk setiap tahap bisnis Anda</h2>
          </div>
          <a href="#pricing" className="btn btn-red btn-sm">Semua layanan</a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} data-rv={i * 70}>
              <article className="card-dark h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/60 text-brand"><Icon name={s.icon} className="h-5 w-5" /></span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
