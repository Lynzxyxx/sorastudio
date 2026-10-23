import Thumb from './Thumb';
import Socials from './Socials';
import { projects, site } from '@/lib/data';

function LinkBtn({ href, children }) {
  const off = !href || href === '#';
  return (
    <a href={href} {...(!off && { target: '_blank', rel: 'noopener noreferrer' })} aria-disabled={off} className={`btn btn-ghost btn-sm ${off ? 'pointer-events-none opacity-40' : ''}`}>{children}</a>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-snap className="relative flex items-center overflow-hidden bg-ink py-24 lg:min-h-[100svh]">
      <div className="bg-seigaiha pattern-fade pointer-events-none absolute inset-0 opacity-[.06]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12">
        <h2 data-reveal="words" className="font-heading text-4xl font-bold text-white md:text-6xl">Selected Projects</h2>
        <p data-reveal="fade" className="mt-2 max-w-xl text-slate-400">Tiga project yang paling menggambarkan cara saya bekerja, dari panel layanan sampai API.</p>

        <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col overflow-hidden">
              <div className="thumb aspect-[5/3] overflow-hidden border-b border-violet/20"><Thumb kind={p.kind} /></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-bold text-white">{p.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => <li key={t} className="rounded-full border border-violet/30 bg-violet/10 px-2.5 py-0.5 text-xs font-medium text-violet-soft">{t}</li>)}
                </ul>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                <div className="mt-5 flex gap-3">
                  <LinkBtn href={p.demo}>Demo</LinkBtn>
                  <LinkBtn href={p.repo}>Repo</LinkBtn>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="card mt-8 flex flex-col items-start justify-between gap-5 p-6 hover:!translate-y-0 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">Coba panel yang sudah berjalan</h3>
            <p className="mt-1 text-sm text-slate-400">Sora Pedia SMM Panel aktif di {site.panelUrl.replace('https://', '')}. Ikuti juga akun saya untuk info terbaru.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={site.panelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buka website SMM Panel</a>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}
