import Thumb from './Thumb';
import { Icon } from './Icons';
import { projects, site } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="bg-diamond bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-rv="0" className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Project pilihan</h2>
          <p className="mt-3 text-slate-500">Beberapa project yang paling menggambarkan cara saya bekerja, dari panel layanan sampai API.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const external = p.href.startsWith('http');
            return (
              <div key={p.title} data-rv={i * 90}>
                <article className="card-light flex h-full flex-col">
                  <div className="thumb aspect-[5/3] overflow-hidden"><Thumb kind={p.kind} /></div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">{p.label}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                    <a href={p.href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3 hover:text-brand">
                      {p.cta} <Icon name={external ? 'external' : 'arrow'} className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div data-rv="0" className="mt-12 text-center">
          <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Kunjungi {site.websiteLabel} <Icon name="external" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
