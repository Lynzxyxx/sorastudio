import { Icon } from './Icons';
import { skills, site } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="bg-diamond bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-rv="0" className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Keahlian &amp; teknologi</h2>
          <p className="max-w-sm text-sm text-slate-500 md:text-right">Yang saya pakai sehari-hari untuk membangun panel, API, dan website.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div key={s.title} data-rv={i * 70}>
              <article className="card-light h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <span className="text-xs font-medium text-slate-400">{s.items.length} item</span>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">{s.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => <li key={it} className="rounded-full border border-slate-200 bg-mist px-3 py-1 text-xs font-medium text-slate-700">{it}</li>)}
                </ul>
              </article>
            </div>
          ))}

          <div data-rv={skills.length * 70}>
            <article className="card-light h-full border-brand/40 p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><Icon name="user" /></span>
                <span className="text-xs font-medium text-slate-400">Ikuti saya</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-ink">Website &amp; sosial media</h3>
              <div className="mt-4 flex flex-col gap-2">
                <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red btn-sm justify-between"><span className="flex items-center gap-2"><Icon name="globe" className="h-4 w-4" />{site.websiteLabel}</span><Icon name="external" className="h-4 w-4" /></a>
                <a href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm justify-between"><span className="flex items-center gap-2"><Icon name="instagram" className="h-4 w-4" />@{site.socials.instagram.handle}</span><Icon name="external" className="h-4 w-4" /></a>
                <a href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm justify-between"><span className="flex items-center gap-2"><Icon name="tiktok" className="h-4 w-4" />@{site.socials.tiktok.handle}</span><Icon name="external" className="h-4 w-4" /></a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
